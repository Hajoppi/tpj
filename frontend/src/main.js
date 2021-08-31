import { createApp } from 'vue';
import { createI18n } from 'vue-i18n/index';

import App from './App.vue';
import router from './router';
import store from './store';
import messages from './locale';
import './assets/sass/main.scss';

let locale = 'fi';
if (localStorage.getItem('locale')) {
  locale = localStorage.getItem('locale');
}

const i18n = createI18n({
  locale,
  fallbackLocale: 'fi',
  messages,
});

createApp(App).use(store).use(router).use(i18n)
  .mount('#app');
