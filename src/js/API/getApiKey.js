import { fetchData } from './fetchData.js';
import { load } from '../storage/load.js';

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
