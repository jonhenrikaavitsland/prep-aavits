/**
 * @jest-environment jest-environment-jsdom
 */

import { createBtnElement } from './createBtnElement.js';

describe('createBtnElement', () => {
  it('should create a button element', () => {
    const button = createBtnElement('click me');
    expect(button).toBeInstanceOf(HTMLButtonElement);
  });
});
