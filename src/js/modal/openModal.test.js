/**
 * @jest-environment jest-environment-jsdom
 */

import { closeModalHandler } from './closeModalHandler.js';
import { openModal } from './openModal.js';

jest.mock('./closeModalHandler');

describe('openModal', () => {
  let modal, bg, btn;

  beforeEach(() => {
    document.body.innerHTML = `
      <div id="test-modal" class="hidden"></div>
      <div id="bg"></div>
      <button id="btn">Close</button>
    `;

    modal = document.getElementById('test-modal');
    bg = document.getElementById('bg');
    btn = document.getElementById('btn');

    jest.spyOn(window, 'addEventListener');
    console.error = jest.fn();
  });

  afterEach(() => {
    // Clear all mocks after each test
    jest.clearAllMocks();
  });

  it('should display the modal by removing the `hidden` class and adding the `block` class', () => {
    openModal('test-modal', 'bg', 'btn');
    expect(modal.classList.contains('hidden')).toBe(false);
    expect(modal.classList.contains('block')).toBe(true);
  });

  it('should add an event listener to the window to handle closing the modal', () => {
    openModal('test-modal', 'bg', 'btn');
    expect(window.addEventListener).toHaveBeenCalledWith('click', expect.any(Function));
  });

  it('should log an error when the modal is not found', () => {
    openModal('non-existent-modal', 'bg', 'btn');
    expect(console.error).toHaveBeenCalledWith('Modal with id non-existent-modal not found');
  });
});
