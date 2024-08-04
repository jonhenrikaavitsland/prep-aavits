/**
 * Loads and parses a value from localStorage.
 *
 * This function retrieves the item associated with the given key from
 * localStorage, parses it as JSON, and returns the resulting object.
 *
 * @param {string} key - The key of the item to retrieve from localStorage.
 * @returns {Object} The parsed JSON object retrieved from localStorage.
 */
export function load(key) {
  return JSON.parse(localStorage.getItem(key));
}
