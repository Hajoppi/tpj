/* ============
 * Actions for the auth module
 * ============
 *
 * The actions that are available on the
 * auth module.
 */

import { useRouter } from 'vue-router';
import proxy from '../../../proxies/proxy';
import * as types from './mutation-types';

export const check = ({ commit }) => {
  commit(types.CHECK);
};

export const register = ({ commit }, payload) => {
  const router = useRouter();
  proxy.post('/register', payload)
    .then((response) => {
      commit(types.LOGIN, response.id_token);
      router.push({
        name: 'home.index',
      });
    })
    .catch(() => {
    });
};

export const login = ({ commit }, payload) => {
  const router = useRouter();
  proxy.post('/login', payload)
    .then((response) => {
      commit(types.LOGIN, response.id_token);
      router.push({
        name: 'home.index',
      });
    }).catch(() => {
    });
};

export const logout = ({ commit }) => {
  commit(types.LOGOUT);
};

export default {
  check,
  register,
  login,
  logout,
};
