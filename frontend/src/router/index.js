import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';

const routes = [
  // Home
  {
    path: '/',
    name: 'home.index',
    component: () => import(/* webpackChunkName: "about" */ '../pages/Home.vue'),
  },
  {
    path: '/signup',
    name: 'signup.index',
    component: () => import(/* webpackChunkName: "signup" */ '../pages/Signup.vue'),
  },
  {
    path: '/participants',
    name: 'participants.index',
    component: () => import(/* webpackChunkName: "participants" */ '../pages/Participants.vue'),
  },
  {
    path: '/week',
    name: 'week.index',
    component: () => import(/* webpackChunkName: "week" */ '../pages/Week.vue'),
  },
  {
    path: '/edit',
    name: 'edit.index',
    component: () => import(/* webpackChunkName: "edit" */ '../pages/Edit.vue'),
  },
  {
    path: '/contact',
    name: 'contact.index',
    component: () => import(/* webpackChunkName: "contact" */ '../pages/Contact.vue'),
  },
  {
    path: '/login',
    name: 'login.index',
    component: () => import(/* webpackChunkName: "login" */ '../pages/Login.vue'),
  },
  {
    path: '/admin',
    name: 'admin.index',
    component: () => import(/* webpackChunkName: "admin" */ '../pages/Admin.vue'),
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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((m) => m.meta.auth) && !store.state.auth.authenticated) {
    /*
     * If the user is not authenticated and visits
     * a page that requires authentication, redirect to the login page
     */
    next({
      name: 'login.index',
    });
  } else if (to.matched.some((m) => m.meta.guest) && store.state.auth.authenticated) {
    /*
     * If the user is authenticated and visits
     * an guest page, redirect to the dashboard page
     */
    next({
      name: 'home.index',
    });
  } else {
    next();
  }
});

export default router;
