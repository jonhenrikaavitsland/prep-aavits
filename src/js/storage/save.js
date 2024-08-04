/**
 * Saves a value to localStorage after serializing it to JSON.
 *
 * This function takes a key and a value, serializes the value to a JSON string,
 * and stores it in localStorage under the specified key.
 *
 * @param {string} key - The key under which to store the value in localStorage.
 * @param {Object} value - The value to be stored in localStorage. It will be serialized to a JSON string.
 */
export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
