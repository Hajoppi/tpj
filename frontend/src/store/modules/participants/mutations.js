/* ============
 * Mutations for the participants module
 * ============
 *
 * The mutations that are available on the
 * participants module.
 */

import {
  ALL,
  REGISTER,
} from './mutation-types';

export default {
  [ALL](state, participants) {
    state.normal = participants.normal;
    state.invited = participants.invited;
  },

  [REGISTER](state, participant) {
    state.normal.push(participant);
  },
};
