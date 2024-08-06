/**
 * @jest-environment jest-environment-jsdom
 */

import { createParagraphElement } from './createParagraphElement.js';

describe.only('createParagraphElement', () => {
  it('should create a paragraph element', () => {
    const paragraph = createParagraphElement('Hello, World!');
    expect(paragraph).toBeInstanceOf(HTMLParagraphElement);
  });

  it('should set the correct text content', () => {
    const textContent = 'This is a paragraph.';
    const paragraph = createParagraphElement(textContent);
    expect(paragraph.textContent).toBe(textContent);
  });

  it('should add a single CSS class', () => {
    const paragraph = createParagraphElement('Hello, World!', 'text-class');
    expect(paragraph.classList.contains('text-class')).toBe(true);
  });

  it('should add multiple CSS classes', () => {
    const paragraph = createParagraphElement('Hello, World!', 'text-class', 'highlight');
    expect(paragraph.classList.contains('text-class')).toBe(true);
    expect(paragraph.classList.contains('highlight')).toBe(true);
  });

  it('should not add any CSS class if none are provided', () => {
    const paragraph = createParagraphElement('Hello, World!');
    expect(paragraph.classList.length).toBe(0);
  });

  it('should handle a large number of CSS classes', () => {
    const classes = Array.from({ length: 100 }, (_, i) => `class-${i}`);
    const paragraph = createParagraphElement('Hello, World!', ...classes);
    classes.forEach((className) => {
      expect(paragraph.classList.contains(className)).toBe(true);
    });
  });

  it('should handle duplicate CSS classes', () => {
    const paragraph = createParagraphElement('Hello, World!', 'text-class', 'text-class');
    expect(paragraph.classList.length).toBe(1);
    expect(paragraph.classList.contains('text-class')).toBe(true);
  });
});
