/**
 * Creates a paragraph element with specified text content and CSS classes.
 *
 * This function creates a new paragraph (p) element, sets its text content,
 * and adds the provided CSS classes to it.
 *
 * @param {string} textContent - The text content to be displayed in the paragraph.
 * @param {...string} classes - The CSS classes to be added to the paragraph element.
 * @returns {HTMLParagraphElement} The created paragraph element with the specified text content and classes.
 */
export function createParagraphElement(textContent, ...classes) {
  const paragraph = document.createElement('p');
  paragraph.classList.add(...classes);
  paragraph.textContent = textContent;
  return paragraph;
}
