/**
 * @jest-environment jest-environment-jsdom
 */

import { createHeadingElement } from './createHeadingElement.js';

describe('createHeadingElement', () => {
  it.concurrent('should create a heading element with the correct level', () => {
    for (let level = 1; level <= 6; level++) {
      const heading = createHeadingElement(level, `Heading ${level}`);
      expect(heading.tagName).toBe(`H${level}`);
    }
  });

  it.concurrent('should set the correct text content', () => {
    const textContent = 'My Heading';
    const heading = createHeadingElement(1, textContent);
    expect(heading.textContent).toBe(textContent);
  });

  it.concurrent('should add a single CSS class', () => {
    const heading = createHeadingElement(1, 'My Heading', 'header-class');
    expect(heading.classList.contains('header-class')).toBe(true);
  });

  it.concurrent('should add multiple CSS classes', () => {
    const heading = createHeadingElement(1, 'My Heading', 'header-class', 'another-class');
    expect(heading.classList.contains('header-class')).toBe(true);
    expect(heading.classList.contains('another-class')).toBe(true);
  });

  it.concurrent('should not add any CSS class if none are provided', () => {
    const heading = createHeadingElement(1, 'My Heading');
    expect(heading.classList.length).toBe(0);
  });

  it.concurrent('should throw an error for invalid heading levels', () => {
    expect(() => createHeadingElement(0, 'Invalid Heading')).toThrow('Heading level must be between 1 and 6');
    expect(() => createHeadingElement(7, 'Invalid Heading')).toThrow('Heading level must be between 1 and 6');
  });

  it.concurrent('should handle a large number of CSS classes', () => {
    const classes = Array.from({ length: 100 }, (_, i) => `class-${i}`);
    const heading = createHeadingElement(1, 'My Heading', ...classes);
    classes.forEach((className) => {
      expect(heading.classList.contains(className)).toBe(true);
    });
  });

  it.concurrent('should handle duplicate CSS classes', () => {
    const heading = createHeadingElement(1, 'My Heading', 'header-class', 'header-class');
    expect(heading.classList.length).toBe(1);
    expect(heading.classList.contains('header-class')).toBe(true);
  });
});
