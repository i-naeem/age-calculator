import getDaysInMonth from 'date-fns/getDaysInMonth';

const getDaysOptions = (year, month) => {
  let options = [];
  const numberOfDays = getDaysInMonth(new Date(year, month));

  for (let day = 1; day <= numberOfDays; ++day) {
    let optionElement = document.createElement('option');
    optionElement.value = day;
    optionElement.textContent = day;
    options.push(optionElement);
  }

  return options;
};

export default getDaysOptions;
