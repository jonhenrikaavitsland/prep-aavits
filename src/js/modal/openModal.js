import { closeModalHandler } from './closeModalHandler.js';

/**
 * Opens a modal by displaying it and adding an event listener for closing it.
 *
 * This function finds the modal element by its id and changes its classes to make it visible.
 * It also sets up an event listener on the window to handle closing the modal when
 * the specified background or close button elements are clicked.
 *
 * @param {string} id - The id of the modal element to be opened.
 * @param {string} background - The id of the background element that triggers the modal close.
 * @param {string} closeBtn - The id of the button element that triggers the modal close.
 */
export function openModal(id, background, closeBtn) {
  const modal = document.getElementById(id);
  const btn = document.getElementById(closeBtn);
  const bg = document.getElementById(background);

  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('block');

    window.addEventListener('click', (event) => closeModalHandler(event, id, bg, btn));
  } else {
    console.error(`Modal with id ${id} not found`);
  }
}
