/* ============
 * Mutations for the auth module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */

import {
  TOGGLE,
  SET,
} from './mutation-types';

export default {
  [SET](state, value) {
    state.showNavbar = value;
  },
  [TOGGLE](state) {
    state.showNavbar = !state.showNavbar;
  }
};
