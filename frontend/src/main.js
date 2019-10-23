import Vue from 'vue';

// Plugin
import './plugins/vuex';
import './plugins/axios';
import { i18n } from './plugins/vue-i18n';
import { router } from './plugins/vue-router';
import './plugins/vuex-router-sync';

// Styling
import './assets/sass/main.scss';

import App from './App';
import store from './store';

store.dispatch('auth/check');
/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  /**
 * Will render the application.
 *
 * @param {Function} h Will create an element.
 */
  render: h => h(App),
});
