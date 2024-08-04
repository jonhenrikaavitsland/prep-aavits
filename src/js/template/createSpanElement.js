/**
 * Creates a span element with specified text content and CSS classes.
 *
 * This function creates a new span element, sets its text content,
 * and adds the provided CSS classes to it.
 *
 * @param {string} textContent - The text content to be displayed in the span element.
 * @param {...string} classes - The CSS classes to be added to the span element.
 * @returns {HTMLSpanElement} The created span element with the specified text content and classes.
 */
export function createSpanElement(textContent, ...classes) {
  const span = document.createElement('span');
  span.textContent = textContent;
  span.classList.add(...classes);
  return span;
}
