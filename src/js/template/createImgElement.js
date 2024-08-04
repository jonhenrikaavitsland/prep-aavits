/**
 * Creates an img element with specified source, alt text, and CSS classes.
 *
 * This function creates a new img element, sets its source (src) and alt text,
 * and adds the provided CSS classes to it.
 *
 * @param {string} src - The source URL of the image.
 * @param {string} alt - The alt text for the image.
 * @param {...string} classes - The CSS classes to be added to the img element.
 * @returns {HTMLImageElement} The created img element with the specified source, alt text, and classes.
 */
export function createImgElement(src, alt, ...classes) {
  const image = document.createElement('img');
  image.classList.add(...classes);
  image.src = src;
  image.alt = alt;
  return image;
}
