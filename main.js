import 'bootstrap/dist/css/bootstrap.min.css';
import getDateOfBirth from './utils/getDateOfBirth';
import getDaysOptions from './utils/getDaysOptions';
import populateDaysSelectElement from './utils/populateDaysSelectedElement';

const dateOfBirthYear = document.getElementById('dob-year');
const dateOfBirthMonth = document.getElementById('dob-month');
const dateOfBirthDay = document.getElementById('dob-day');

const ageAtYear = document.getElementById('age-at-year');
const ageAtMonth = document.getElementById('age-at-month');
const ageAtDay = document.getElementById('age-at-day');

const alertElement = document.getElementById('alert');
const form = document.getElementById('dob-form');

// Set the initial value for days
document.addEventListener('DOMContentLoaded', () => {
  const options = getDaysOptions(dateOfBirthYear.value, dateOfBirthMonth.value);
  populateDaysSelectElement(dateOfBirthDay, options, '1');
});

let previousSelectedDay = dateOfBirthDay.value;

dateOfBirthDay.onchange = (event) => {
  previousSelectedDay = dateOfBirthDay.value;
};

dateOfBirthYear.onchange = () => {
  const options = getDaysOptions(dateOfBirthYear.value, dateOfBirthMonth.value);
  populateDaysSelectElement(dateOfBirthDay, options, previousSelectedDay);
};

dateOfBirthMonth.onchange = () => {
  const options = getDaysOptions(dateOfBirthYear.value, dateOfBirthMonth.value);
  populateDaysSelectElement(dateOfBirthDay, options, previousSelectedDay);
};

// Age at Section

// Set the initial value for days
document.addEventListener('DOMContentLoaded', () => {
  const options = getDaysOptions(ageAtYear.value, ageAtMonth.value);
  populateDaysSelectElement(ageAtDay, options, '1');
});

let previousSelectedAgeAtDay = ageAtDay.value;

ageAtDay.onchange = (event) => {
  previousSelectedAgeAtDay = ageAtDay.value;
};

ageAtYear.onchange = () => {
  const options = getDaysOptions(ageAtYear.value, ageAtMonth.value);
  populateDaysSelectElement(ageAtDay, options, previousSelectedAgeAtDay);
};

ageAtMonth.onchange = () => {
  const options = getDaysOptions(ageAtYear.value, ageAtMonth.value);
  populateDaysSelectElement(ageAtDay, options, previousSelectedAgeAtDay);
};

// Toggle Alert
const toggleAlert = () => {
  alertElement.hidden = !alertElement.hidden;
};

form.onsubmit = (event) => {
  event.preventDefault();
  const from = new Date(
    dateOfBirthYear.value,
    dateOfBirthMonth.value,
    dateOfBirthDay.value
  );

  const to = new Date(ageAtYear.value, ageAtMonth.value, ageAtDay.value);

  const dob = getDateOfBirth(from, to);
};
