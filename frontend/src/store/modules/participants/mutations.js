/* ============
 * Mutations for the participants module
 * ============
 *
 * The mutations that are available on the
 * participants module.
 */

import {
  ALL,
} from './mutation-types';

export default {
  [ALL](state, participants) {
    console.log(participants);
    state.normal = participants.normal;
    state.invited = participants.invited;
    state.total = participants.normal.length + participants.invited.length;
  },
};
