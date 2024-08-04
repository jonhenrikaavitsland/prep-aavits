/**
 * Number or string containing number
 * @typedef {(number|string)} NumberLike
 */

/**
 * Stores a value in localStorage under a given key
 * @param {string} key
 * @param {NumberLike} value
 */

export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
