/**
 * Creates a heading element with specified level, text content, and CSS classes.
 *
 * This function creates a new heading element (h1, h2, etc.) based on the specified level,
 * sets its text content, and adds the provided CSS classes to it.
 *
 * @param {number} level - The level of the heading element (e.g., 1 for h1, 2 for h2).
 * @param {string} textContent - The text content to be displayed in the heading.
 * @param {...string} classes - The CSS classes to be added to the heading element.
 * @returns {HTMLElement} The created heading element with the specified level, text content, and classes.
 * @throws {Error} If the level is not between 1 and 6, an error is thrown.
 */
export function createHeadingElement(level, textContent, ...classes) {
  if (level < 1 || level > 6) {
    throw new Error('Heading level must be between 1 and 6');
  }

  const heading = document.createElement(`h${level}`);
  heading.classList.add(...classes);
  heading.textContent = textContent;
  return heading;
}
