/**
 * @jest-environment jest-environment-jsdom
 */

import { closeModal } from './closeModal.js';

describe('closeModal', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    console.error = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should hide the modal when it is found by its ID', () => {
    document.body.innerHTML = '<div id="test-modal" class="block"></div>';
    closeModal('test-modal');
    const modal = document.getElementById('test-modal');
    expect(modal.classList.contains('block')).toBe(false);
    expect(modal.classList.contains('hidden')).toBe(true);
  });

  it('should log an error message when the modal is not found', () => {
    closeModal('non-existent-modal');
    expect(console.error).toHaveBeenCalledWith('Modal with Id non-existent-modal not found');
  });

  it('should remove the `block` class from the modal', () => {
    document.body.innerHTML = '<div id="test-modal" class="block"></div>';
    closeModal('test-modal');
    const modal = document.getElementById('test-modal');
    expect(modal.classList.contains('block')).toBe(false);
  });

  it('should add the `hidden` class to the modal', () => {
    document.body.innerHTML = '<div id="test-modal"></div>';
    closeModal('test-modal');
    const modal = document.getElementById('test-modal');
    expect(modal.classList.contains('hidden')).toBe(true);
  });
});
