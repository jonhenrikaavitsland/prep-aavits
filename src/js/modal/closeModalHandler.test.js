/**
 * @jest-environment jest-environment-jsdom
 */

import { closeModal } from './closeModal.js';
import { closeModalHandler } from './closeModalHandler.js';

jest.mock('./closeModal');

describe('closeModalHandler', () => {
  let modal, bg, btn, unrelated;

  beforeEach(() => {
    document.body.innerHTML = `
      <div id="test-modal" class="block"></div>
      <div id="bg"></div>
      <button id="btn">Close</button>
      <div id="unrelated"></div>
    `;

    modal = document.getElementById('test-modal');
    bg = document.getElementById('bg');
    btn = document.getElementById('btn');
    unrelated = document.getElementById('unrelated');

    // Mock the removeEventListener function
    jest.spyOn(window, 'removeEventListener');
  });

  afterEach(() => {
    // Clear all mocks after each test
    jest.clearAllMocks();
  });

  it('should close the modal when the background element is clicked', () => {
    const event = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    bg.dispatchEvent(event);
    closeModalHandler(event, 'test-modal', bg, btn);

    expect(closeModal).toHaveBeenCalledWith('test-modal');
    expect(window.removeEventListener).toHaveBeenCalledWith('click', expect.any(Function));
  });

  it('should close the modal when the button element is clicked', () => {
    const event = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    btn.dispatchEvent(event);
    closeModalHandler(event, 'test-modal', bg, btn);

    expect(closeModal).toHaveBeenCalledWith('test-modal');
    expect(window.removeEventListener).toHaveBeenCalledWith('click', expect.any(Function));
  });

  it('should not close the modal when an unrelated element is clicked', () => {
    const event = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    unrelated.dispatchEvent(event);
    closeModalHandler(event, 'test-modal', bg, btn);

    expect(closeModal).not.toHaveBeenCalled();
    expect(window.removeEventListener).not.toHaveBeenCalled();
  });

  it('should remove the event listener from the window after closing the modal', () => {
    const event = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    btn.dispatchEvent(event);
    closeModalHandler(event, 'test-modal', bg, btn);

    expect(closeModal).toHaveBeenCalledWith('test-modal');
    expect(window.removeEventListener).toHaveBeenCalledWith('click', expect.any(Function));
  });
});
