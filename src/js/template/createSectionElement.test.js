/**
 * @jest-environment jest-environment-jsdom
 */

import { createSectionElement } from './createSectionElement.js';

describe('createSectionElement', () => {
  it('should create a section element', () => {
    const section = createSectionElement();
    expect(section).toBeInstanceOf(HTMLElement);
    expect(section.tagName).toBe('SECTION');
  });

  it('should add a single CSS class', () => {
    const section = createSectionElement('main-section');
    expect(section.classList.contains('main-section')).toBe(true);
  });

  it('should add multiple CSS classes', () => {
    const section = createSectionElement('main-section', 'highlight');
    expect(section.classList.contains('main-section')).toBe(true);
    expect(section.classList.contains('highlight')).toBe(true);
  });

  it('should not add any CSS class if none are provided', () => {
    const section = createSectionElement();
    expect(section.classList.length).toBe(0);
  });

  it('should handle a large number of CSS classes', () => {
    const classes = Array.from({ length: 100 }, (_, i) => `class-${i}`);
    const section = createSectionElement(...classes);
    classes.forEach((className) => {
      expect(section.classList.contains(className)).toBe(true);
    });
  });

  it('should handle duplicate CSS classes', () => {
    const section = createSectionElement('main-section', 'main-section');
    expect(section.classList.length).toBe(1);
    expect(section.classList.contains('main-section')).toBe(true);
  });
});
