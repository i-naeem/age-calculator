import 'normalize.css';
import './style.css';

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
