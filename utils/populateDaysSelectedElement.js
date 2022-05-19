/**
 * Load the days element with given options
 * @param {Document} element - Days select element
 * @param {Document[]} options - Array of options appended to element
 * @param {number} selectedValue - select this value
 */
const populateDaysSelectElement = (element, options, selectedValue = '1') => {
  element.innerHTML = '';

  options.forEach((option) => {
    element.appendChild(option);
    if (option.value === selectedValue) {
      option.selected = true;
    }
  });
};

export default populateDaysSelectElement;
