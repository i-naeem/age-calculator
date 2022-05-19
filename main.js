import 'bootstrap/dist/css/bootstrap.min.css';
import getDaysOptions from './utils/getDaysOptions';
import populateDaysSelectElement from './utils/populateDaysSelectedElement';

const dateOfBirthYear = document.getElementById('dob-year');
const dateOfBirthMonth = document.getElementById('dob-month');
const dateOfBirthDay = document.getElementById('dob-day');

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
const ageAtYear = document.getElementById('age-at-year');
const ageAtMonth = document.getElementById('age-at-month');
const ageAtDay = document.getElementById('age-at-day');

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
