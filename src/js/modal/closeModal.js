/**
 * Closes a modal by hiding it based on its id.
 *
 * This function finds a modal element by its id. If found, it removes the 'block' class
 * and adds the 'hidden' class to hide the modal. If the modal is not found, it logs an error message.
 *
 * @param {string} id - The id of the modal element to be closed.
 */
export function closeModal(id) {
  const modal = document.getElementById(id);

  if (modal) {
    modal.classList.remove('block');
    modal.classList.add('hidden');
  } else {
    console.error(`Modal with Id ${id} not found`);
  }
}
