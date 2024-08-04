import { fetchData } from './fetchData.js';
import { load } from '../storage/load.js';

/**
 * Fetches an API key by sending a POST request to a specified URL.
 *
 * This function retrieves a token from storage, uses it to authorize the request,
 * and then sends a POST request with a specified body to fetch an API key.
 *
 * @returns {Promise<Object>} A promise that resolves to the data fetched from the API.
 */
export function getApiKey() {
  const data = fetchData('/url.html', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${load('token')}`,
    },
    body: JSON.stringify({
      name: 'Test key',
    }),
  });
  return data;
}
