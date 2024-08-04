/**
 * Creates a div element with specified CSS classes.
 *
 * This function creates a new div element and adds the provided CSS classes to it.
 *
 * @param {...string} classes - The CSS classes to be added to the div element.
 * @returns {HTMLDivElement} The created div element with the specified classes.
 */
export function createDivElement(...classes) {
  const div = document.createElement('div');
  div.classList.add(...classes);
  return div;
}
