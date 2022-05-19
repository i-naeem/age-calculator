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
const ageAlert = document.getElementById('age-alert');
const ageTable = document.getElementById('age-table');

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

ageAtMonth.value = new Date().getMonth();
ageAtYear.value = new Date().getFullYear();

// Set the initial value for days
document.addEventListener('DOMContentLoaded', () => {
  const options = getDaysOptions(ageAtYear.value, ageAtMonth.value);
  populateDaysSelectElement(ageAtDay, options, new Date().getDate().toString());
});

let previousSelectedAgeAtDay = ageAtDay.value;

ageAtDay.onchange = () => {
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

const yearsOfDateOfBirth = document.getElementById('years');
const monthsOfDateOfBirth = document.getElementById('months');
const weeksOfDateOfBirth = document.getElementById('weeks');
const daysOfDateOfBirth = document.getElementById('days');
const hoursOfDateOfBirth = document.getElementById('hours');
const minutesOfDateOfBirth = document.getElementById('minutes');
const secondsOfDateOfBirth = document.getElementById('seconds');
const millisecondsOfDateOfBirth = document.getElementById('milliseconds');

form.onsubmit = (event) => {
  event.preventDefault();
  const from = new Date(
    dateOfBirthYear.value,
    dateOfBirthMonth.value,
    dateOfBirthDay.value
  );

  const to = new Date(ageAtYear.value, ageAtMonth.value, ageAtDay.value);

  if (from > to) {
    alertElement.hidden = false;
    ageAlert.hidden = true;
    ageTable.hidden = true;
  } else {
    alertElement.hidden = true;
    const dob = getDateOfBirth(from, to);

    ageAlert.innerHTML = `<h1>${dob.dob}</h1>`;

    yearsOfDateOfBirth.textContent = dob.years;
    monthsOfDateOfBirth.textContent = dob.months;
    weeksOfDateOfBirth.textContent = dob.weeks;
    daysOfDateOfBirth.textContent = dob.days;
    hoursOfDateOfBirth.textContent = dob.hours;
    minutesOfDateOfBirth.textContent = dob.minutes;
    secondsOfDateOfBirth.textContent = dob.seconds;
    millisecondsOfDateOfBirth.textContent = dob.milliseconds;
    ageAlert.hidden = false;
    ageTable.hidden = false;
  }
};
