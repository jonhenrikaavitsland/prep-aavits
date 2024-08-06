/**
 * Creates an option element with specified value, text, and CSS classes.
 *
 * This function creates a new option element, sets its value attribute,
 * sets its display text, and adds the provided CSS classes to it.
 *
 * @param {string} value - The value attribute to be set on the option element.
 * @param {string} text - The text to be displayed in the option element.
 * @param {...string} classes - The CSS classes to be added to the option element.
 * @returns {HTMLOptionElement} The created option element with the specified value, text, and classes.
 */
export function createOptionElement(value, text, ...classes) {
  const option = document.createElement('option');
  option.setAttribute('value', value);
  option.text = text;
  option.classList.add(...classes);
  return option;
}
