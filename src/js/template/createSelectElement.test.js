/**
 * @jest-environment jest-environment-jsdom
 */

import { createSelectElement } from './createSelectElement.js';

describe('createSelectElement', () => {
  it('should create a select element', () => {
    const select = createSelectElement('test');
    expect(select).toBeInstanceOf(HTMLSelectElement);
  });

  it('should set the correct id attribute', () => {
    const id = 'my-select';
    const select = createSelectElement(id);
    expect(select.getAttribute('id')).toBe(id);
  });

  it('should add a single CSS class', () => {
    const select = createSelectElement('my-select', 'select-class');
    expect(select.classList.contains('select-class')).toBe(true);
  });

  it('should add multiple CSS classes', () => {
    const select = createSelectElement('my-select', 'select-class', 'responsive');
    expect(select.classList.contains('select-class')).toBe(true);
    expect(select.classList.contains('responsive')).toBe(true);
  });

  it('should not add any CSS class if none are provided', () => {
    const select = createSelectElement('my-select');
    expect(select.classList.length).toBe(0);
  });

  it('should handle a large number of CSS classes', () => {
    const classes = Array.from({ length: 100 }, (_, i) => `class-${i}`);
    const select = createSelectElement('my-select', ...classes);
    classes.forEach((className) => {
      expect(select.classList.contains(className)).toBe(true);
    });
  });

  it('should handle duplicate CSS classes', () => {
    const select = createSelectElement('my-select', 'select-class', 'select-class');
    expect(select.classList.length).toBe(1);
    expect(select.classList.contains('select-class')).toBe(true);
  });
});
