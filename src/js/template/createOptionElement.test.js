/**
 * @jest-environment jest-environment-jsdom
 */

import { createOptionElement } from './createOptionElement.js';

describe('createOptionElement', () => {
  it.concurrent('should create an option element', () => {
    const option = createOptionElement('value1', 'Option 1');
    expect(option).toBeInstanceOf(HTMLOptionElement);
  });

  it.concurrent('should set the correct value attribute', () => {
    const value = 'value1';
    const option = createOptionElement(value, 'Option 1');
    expect(option.getAttribute('value')).toBe(value);
  });

  it.concurrent('should set the correct display text', () => {
    const text = 'Option 1';
    const option = createOptionElement('value1', text);
    expect(option.text).toBe(text);
  });

  it.concurrent('should add a single CSS class', () => {
    const option = createOptionElement('value1', 'Option 1', 'option-class');
    expect(option.classList.contains('option-class')).toBe(true);
  });

  it.concurrent('should add multiple CSS classes', () => {
    const option = createOptionElement('value1', 'Option 1', 'option-class', 'highlight');
    expect(option.classList.contains('option-class')).toBe(true);
    expect(option.classList.contains('highlight')).toBe(true);
  });

  it.concurrent('should not add any CSS class if none are provided', () => {
    const option = createOptionElement('value1', 'Option 1');
    expect(option.classList.length).toBe(0);
  });

  it.concurrent('should handle a large number of CSS classes', () => {
    const classes = Array.from({ length: 100 }, (_, i) => `class-${i}`);
    const option = createOptionElement('value1', 'Option 1', ...classes);
    classes.forEach((className) => {
      expect(option.classList.contains(className)).toBe(true);
    });
  });

  it.concurrent('should handle duplicate CSS classes', () => {
    const option = createOptionElement('value1', 'Option 1', 'option-class', 'option-class');
    expect(option.classList.length).toBe(1);
    expect(option.classList.contains('option-class')).toBe(true);
  });
});
