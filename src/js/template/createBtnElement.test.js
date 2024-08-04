/**
 * @jest-environment jest-environment-jsdom
 */

import { createBtnElement } from './createBtnElement.js';

describe('createBtnElement', () => {
  it('should create a button element', () => {
    const button = createBtnElement('click me');
    expect(button).toBeInstanceOf(HTMLButtonElement);
  });

  test('should set the correct text content', () => {
    const textContent = 'Submit';
    const button = createBtnElement(textContent);
    expect(button.textContent).toBe(textContent);
  });

  test('should add a single CSS class', () => {
    const button = createBtnElement('Click me', 'btn-primary');
    expect(button.classList.contains('btn-primary')).toBe(true);
  });

  test('should add multiple CSS classes', () => {
    const button = createBtnElement('Click me', 'btn-primary', 'btn-large');
    expect(button.classList.contains('btn-primary')).toBe(true);
    expect(button.classList.contains('btn-large')).toBe(true);
  });

  test('should not add any CSS class if none are provided', () => {
    const button = createBtnElement('Click me');
    expect(button.classList.length).toBe(0);
  });

  test('should handle empty text content', () => {
    const button = createBtnElement('');
    expect(button.textContent).toBe('');
  });

  test('should handle null text content', () => {
    const button = createBtnElement(null);
    expect(button.textContent).toBe('');
  });

  test('should handle undefined text content', () => {
    const button = createBtnElement(undefined);
    expect(button.textContent).toBe('');
  });

  test('should handle a large number of CSS classes', () => {
    const classes = Array.from({ length: 100 }, (_, i) => `class-${i}`);
    const button = createBtnElement('Click me', ...classes);
    classes.forEach((className) => {
      expect(button.classList.contains(className)).toBe(true);
    });
  });

  test('should handle duplicate CSS classes', () => {
    const button = createBtnElement('Click me', 'btn-primary', 'btn-primary');
    expect(button.classList.length).toBe(1);
    expect(button.classList.contains('btn-primary')).toBe(true);
  });
});
