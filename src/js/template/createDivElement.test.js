/**
 * @jest-environment jest-environment-jsdom
 */

import { createDivElement } from './createDivElement.js';

describe('createDivElement', () => {
  it('should create a div element', () => {
    const div = createDivElement();
    expect(div).toBeInstanceOf(HTMLDivElement);
  });

  it('should add a single CSS class', () => {
    const div = createDivElement('container');
    expect(div.classList.contains('container')).toBe(true);
  });

  it('should add multiple CSS classes', () => {
    const div = createDivElement('container', 'fluid');
    expect(div.classList.contains('container')).toBe(true);
    expect(div.classList.contains('fluid')).toBe(true);
  });

  it('should not add any CSS class if none are provided', () => {
    const div = createDivElement();
    expect(div.classList.length).toBe(0);
  });

  it('should handle a large number of CSS classes', () => {
    const classes = Array.from({ length: 100 }, (_, i) => `class-${i}`);
    const div = createDivElement(...classes);
    classes.forEach((className) => {
      expect(div.classList.contains(className)).toBe(true);
    });
  });

  it('should handle duplicate CSS classes', () => {
    const div = createDivElement('container', 'container');
    expect(div.classList.length).toBe(1);
    expect(div.classList.contains('container')).toBe(true);
  });
});
