/**
 * Handles client-side routing based on the current location pathname.
 *
 * This function checks the current URL's pathname and dynamically imports
 * the corresponding JavaScript module for the page.
 *
 * @returns {Promise<Module>} A promise that resolves to the imported module for the corresponding page.
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
