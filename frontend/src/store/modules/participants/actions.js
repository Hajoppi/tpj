/* ============
 * Actions for the participants module
 * ============
 *
 * The actions that are available on the
 * participants module.
 */

import * as types from './mutation-types';
import proxy from '../../../proxies/proxy';

export const all = ({ commit }) => new Promise((resolve, reject) => {
  proxy.get('signups')
    .then((response) => {
      commit(types.ALL, response);
      resolve();
    }).catch((e) => {
      reject(e);
    });
});

export const register = (_, data) => new Promise((resolve, reject) => {
  proxy.post('signup', data)
    .then(() => {
      resolve();
    }).catch((e) => {
      reject(e);
    });
});

export default {
  all,
  register,
};
