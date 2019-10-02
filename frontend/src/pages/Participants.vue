<template>
  <div class="participants">
    <div class="choose">
      <button class="choose-button" :disabled="!showInvited" @click="showInvited=false">{{$t(`signup.normal`)}}</button>
      <button class="choose-button" :disabled="showInvited" @click="showInvited=true">{{$t(`signup.invited`)}}</button>
    </div>
    <div class="total">{{total}}/{{maxParticipants}}</div>
    <table class="list">
      <thead>
        <th>{{$t('signup.name')}}</th><th>{{$t('signup.tableGroup')}}</th>
      </thead>
      <tr v-for="(participant, index) in participants" :key="`${participant.name}_${index}`">
        <td v-text="participant.name" />
        <td v-text="participant.table_group" />
      </tr>
    </table>
    <div class="reserve" v-if="showReserve">Varasijat</div>
    <table v-if="showReserve" class="list list--reserve">
      <tr v-for="(participant, index) in reserve" :key="`${participant.name}_${index}`">
        <td v-text="participant.name" />
        <td v-text="participant.table_group" />
      </tr>
    </table>
  </div>
</template>

<script>
/* ============
 * Home Index Page
 * ============
 *
 * The home index page.
 */
import config from '../../config';
export default {
/**
 * The name of the page.
 */
  name: 'invited',
  data() {
    return {
      showInvited: false,
    };
  },
  /**
   * The components that the page can use.
   */
  created() {
    this.$store.dispatch('participants/all');
  },
  computed: {
    showReserve() {
      return !this.showInvited && this.reserve.length > 0
    },
    participants() {
      return this.showInvited ? this.invited : this.normal;
    },
    invited() {
      return this.$store.state.participants.invited;
    },
    normal() {
      return this.$store.state.participants.normal.slice(0, this.placesForNormal);
    },
    reserve() {
      return this.$store.state.participants.normal.slice(this.placesForNormal);
    },
    total() {
      return this.$store.state.participants.total;
    },
    placesForNormal() {
      return config.maxParticipants - this.invited.length;
    },
    maxParticipants() {
      return config.maxParticipants;
    }
  }
};
</script>
