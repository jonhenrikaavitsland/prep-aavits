import { save } from '../storage/save.js';

/**
 * Authenticates a user with the provided email and password.
 *
 * This asynchronous function sends a POST request with the user's email and password
 * to the server for authentication. If the response is OK, it extracts the access token
 * and user profile from the response data, saves them to localStorage, and returns the profile.
 * If the response is not OK, it throws an error with the response status.
 *
 * @param {string} email - The email address of the user.
 * @param {string} password - The password of the user.
 * @returns {Promise<Object>} A promise that resolves to the user profile if the login is successful.
 * @throws {Error} If the login request fails, an error with the response status is thrown.
 */
export async function login(email, password) {
  const response = await fetch('/', {
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const { accessToken, ...profile } = (await response.json()).data;
    save('token', accessToken);
    save('profile', profile);
    return profile;
  }
  throw new Error(response.status);
}
