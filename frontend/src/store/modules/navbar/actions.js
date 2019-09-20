/* ============
 * Actions for the auth module
 * ============
 *
 * The actions that are available on the
 * auth module.
 */

import * as types from './mutation-types';

export const set = ({ commit }, value) => {
  commit(types.SET, value);
};
export const toggle = ({ commit }) => {
  commit(types.TOGGLE);
};
export default {
  set,
  toggle,
};
