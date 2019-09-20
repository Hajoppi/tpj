<template>
  <div class="participants">
    <div class="choose">
      <a class="choose-button" @click.prevent="showInvited=false">{{$t(`signup.normal`)}}</a>
      <a class="choose-button" @click.prevent="showInvited=true">{{$t(`signup.invited`)}}</a>
    </div>
    <table class="list">
      <thead>
        <th>{{$t('signup.name')}}</th><th>{{$t('signup.tableGroup')}}</th>
      </thead>
      <tr v-for="(participant, index) in participants" :key="`${participant.name}_${index}`">
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
    participants() {
      return this.showInvited ? this.invited : this.normal;
    },
    invited() {
      return this.$store.state.participants.invited;
    },
    normal() {
      return this.$store.state.participants.normal;
    },
  }
};
</script>
