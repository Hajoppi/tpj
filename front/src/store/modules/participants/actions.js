/* ============
 * Actions for the participants module
 * ============
 *
 * The actions that are available on the
 * participants module.
 */

import * as types from './mutation-types';
import Proxy from '../../../proxies/Proxy';

export const all = ({ commit }) => {
  new Proxy('signups').all()
    .then((response) => {
      commit(types.ALL, response);
  }).catch((e) => {
      console.log(e);
   });
};

export const register = ({ commit }, data) => {
  new Proxy('signup').create(data)
    .then((response) => {
      commit(types.REGISTER, response);
    }).catch((e) => {
      console.log(e);
    });
}

export const update = ({ commit }, data) => {

}

export default {
  all,
  register,
  update,
};
