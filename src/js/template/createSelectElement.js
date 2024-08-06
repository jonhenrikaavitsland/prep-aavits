/**
 * Creates a select element with a specified id and CSS classes.
 *
 * This function creates a new select element, sets its id attribute,
 * and adds the provided CSS classes to it.
 *
 * @param {string} id - The id attribute to be set on the select element.
 * @param {...string} classes - The CSS classes to be added to the select element.
 * @returns {HTMLSelectElement} The created select element with the specified id and classes.
 */
export function createSelectElement(id, ...classes) {
  const element = document.createElement('select');
  element.setAttribute('id', id);
  element.classList.add(...classes);
  return element;
}
