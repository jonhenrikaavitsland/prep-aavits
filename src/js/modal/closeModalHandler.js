import { closeModal } from './closeModal.js';

/**
 * Handles the closing of a modal when specific elements are clicked.
 *
 * This function listens for click events on the specified background or button elements.
 * If the event target matches either the background or button, it closes the modal with the given id
 * and removes the event listener from the window.
 *
 * @param {Event} event - The click event object.
 * @param {string} id - The id of the modal element to be closed.
 * @param {HTMLElement} bg - The background element that triggers the modal close.
 * @param {HTMLElement} btn - The button element that triggers the modal close.
 */
export function closeModalHandler(event, id, bg, btn) {
  if (event.target === bg || event.target === btn) {
    closeModal(id);
    window.removeEventListener('click', (e) => closeModalHandler(e, id, bg, btn));
  }
}
