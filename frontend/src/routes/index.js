/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

import Home from '../pages/Home';
import Participants from '../pages/Participants';
import Signup from '../pages/Signup';
import Edit from '../pages/Edit';
import Contact from '../pages/Contact';
import Week from '../pages/Week';
import Admin from '../pages/Admin';
import Login from '../pages/Login';

export default [
  // Home
  {
    path: '/',
    name: 'home.index',
    component: Home,
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
    path: '/week',
    name: 'week.index',
    component: Week,
  },
  {
    path: '/edit',
    name: 'edit.index',
    component: Edit,
  },
  {
    path: '/contact',
    name: 'contact.index',
    component: Contact,
  },
  {
    path: '/login',
    name: 'login.index',
    component: Login,
  },
  {
    path: '/admin',
    name: 'admin.index',
    component: Admin,
    meta: {
      auth: true,
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
