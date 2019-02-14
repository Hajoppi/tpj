/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

export default [
  // Home
  {
    path: '/',
    name: 'home.index',
    component: () => import('../pages/Home/Index'),

    // If the user needs to be authenticated to view this page
    // Has *auth: true* if needs authentication
    meta: {
      guest: true,
    },
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
