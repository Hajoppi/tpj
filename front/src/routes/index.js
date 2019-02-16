/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

 import Home from '../pages/Home';

export default [
  // Home
  {
    path: '/',
    name: 'home.index',
    component: Home,

    // If the user needs to be authenticated to view this page
    // Has *auth: true* if needs authentication
  },

  {
    path: '/',
    redirect: '/',
  },

  {
    path: '/*',
    redirect: '/',
  },
];
