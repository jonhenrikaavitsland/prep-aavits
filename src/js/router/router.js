/**
 * The function loads a specific page based on what page the user is currently on.
 * @returns loads a specific JS document.
 */

export function router() {
  switch (location.pathname) {
    case '/':
    case 'index.html':
      return import('../pages/login.js');
    default:
      return import('../pages/404.js');
  }
}
