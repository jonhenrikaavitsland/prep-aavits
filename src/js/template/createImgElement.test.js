/**
 * @jest-environment jest-environment-jsdom
 */

import { createImgElement } from './createImgElement.js';

describe('createImgElement', () => {
  it.concurrent('should create an img element', () => {
    const img = createImgElement('https://example.com/image.jpg', 'Example Image');
    expect(img).toBeInstanceOf(HTMLImageElement);
  });

  it.concurrent('should set the correct source URL', () => {
    const src = 'https://example.com/image.jpg';
    const img = createImgElement(src, 'Example Image');
    expect(img.src).toBe(src);
  });

  it.concurrent('should set the correct alt text', () => {
    const alt = 'Example Image';
    const img = createImgElement('https://example.com/image.jpg', alt);
    expect(img.alt).toBe(alt);
  });

  it.concurrent('should add a single CSS class', () => {
    const img = createImgElement('https://example.com/image.jpg', 'Example Image', 'image-class');
    expect(img.classList.contains('image-class')).toBe(true);
  });

  it.concurrent('should add multiple CSS classes', () => {
    const img = createImgElement('https://example.com/image.jpg', 'Example Image', 'image-class', 'responsive');
    expect(img.classList.contains('image-class')).toBe(true);
    expect(img.classList.contains('responsive')).toBe(true);
  });

  it.concurrent('should not add any CSS class if none are provided', () => {
    const img = createImgElement('https://example.com/image.jpg', 'Example Image');
    expect(img.classList.length).toBe(0);
  });

  it.concurrent('should handle a large number of CSS classes', () => {
    const classes = Array.from({ length: 100 }, (_, i) => `class-${i}`);
    const img = createImgElement('https://example.com/image.jpg', 'Example Image', ...classes);
    classes.forEach((className) => {
      expect(img.classList.contains(className)).toBe(true);
    });
  });

  it.concurrent('should handle duplicate CSS classes', () => {
    const img = createImgElement('https://example.com/image.jpg', 'Example Image', 'image-class', 'image-class');
    expect(img.classList.length).toBe(1);
    expect(img.classList.contains('image-class')).toBe(true);
  });
});
