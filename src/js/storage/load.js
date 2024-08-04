/**
 * Number or string containing number
 * @typedef {(number|string)} NumberLike
 */

/**
 * Returning a stored value based on a given key.
 * @param {string} key
 * @returns {NumberLike}
 */

export function load(key) {
  return JSON.parse(localStorage.getItem(key));
}
