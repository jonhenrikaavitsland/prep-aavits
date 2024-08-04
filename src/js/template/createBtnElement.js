/**
 * Creates a button element with specified text content and CSS classes.
 *
 * This function creates a new button element, sets its text content, and
 * adds the provided CSS classes to it.
 *
 * @param {string} textContent - The text content to be displayed on the button.
 * @param {...string} classes - The CSS classes to be added to the button.
 * @returns {HTMLButtonElement} The created button element with the specified text content and classes.
 */
export function createBtnElement(textContent, ...classes) {
  const button = document.createElement('button');
  button.textContent = textContent;
  button.classList.add(...classes);
  return button;
}
