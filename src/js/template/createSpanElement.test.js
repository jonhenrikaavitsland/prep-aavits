/**
 * @jest-environment jest-environment-jsdom
 */

import { createSpanElement } from './createSpanElement.js';

describe('createSpanElement', () => {
  it('should create a span element', () => {
    const span = createSpanElement('Hello, World!');
    expect(span).toBeInstanceOf(HTMLSpanElement);
  });

  it('should set the correct text content', () => {
    const textContent = 'This is a span.';
    const span = createSpanElement(textContent);
    expect(span.textContent).toBe(textContent);
  });

  it('should add a single CSS class', () => {
    const span = createSpanElement('Hello, World!', 'text-class');
    expect(span.classList.contains('text-class')).toBe(true);
  });

  it('should add multiple CSS classes', () => {
    const span = createSpanElement('Hello, World!', 'text-class', 'highlight');
    expect(span.classList.contains('text-class')).toBe(true);
    expect(span.classList.contains('highlight')).toBe(true);
  });

  it('should not add any CSS class if none are provided', () => {
    const span = createSpanElement('Hello, World!');
    expect(span.classList.length).toBe(0);
  });

  it('should handle a large number of CSS classes', () => {
    const classes = Array.from({ length: 100 }, (_, i) => `class-${i}`);
    const span = createSpanElement('Hello, World!', ...classes);
    classes.forEach((className) => {
      expect(span.classList.contains(className)).toBe(true);
    });
  });

  it('should handle duplicate CSS classes', () => {
    const span = createSpanElement('Hello, World!', 'text-class', 'text-class');
    expect(span.classList.length).toBe(1);
    expect(span.classList.contains('text-class')).toBe(true);
  });
});
