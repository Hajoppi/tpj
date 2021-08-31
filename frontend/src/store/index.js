import { createStore } from 'vuex';

// Modules
import participants from './modules/participants';
import navbar from './modules/navbar';
import auth from './modules/auth';

export default createStore({
  modules: {
    participants,
    navbar,
    auth,
  },
});
