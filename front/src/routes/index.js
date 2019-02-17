/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

import Home from '../pages/Home';
import Participants from '../pages/Participants';
import Signup from '../pages/Signup';

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
    path: '/signup',
    name: 'signup.index',
    component: Signup,
  },
  {
    path: '/participants',
    name: 'participants.index',
    component: Participants,
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
