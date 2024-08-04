/**
 * Creates a section element with specified CSS classes.
 *
 * This function creates a new section element and adds the provided CSS classes to it.
 *
 * @param {...string} classes - The CSS classes to be added to the section element.
 * @returns {HTMLElement} The created section element with the specified classes.
 */
export function createSectionElement(...classes) {
  const element = document.createElement('section');
  element.classList.add(...classes);
  return element;
}
