/* ============
 * Actions for the participants module
 * ============
 *
 * The actions that are available on the
 * participants module.
 */

import * as types from './mutation-types';
import Proxy from '../../../proxies/Proxy';

export const all = ({ commit }) => new Promise((resolve, reject) => {
  new Proxy('signups').all()
    .then((response) => {
      commit(types.ALL, response);
      resolve();
  }).catch((e) => {
      reject(e);
   });
});


export const register = (_, data) => new Promise((resolve, reject) => {
  new Proxy('signup').create(data)
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
