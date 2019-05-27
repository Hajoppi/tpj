<template>
  <div class="participants">
    <div class="choose">
      <div class="button" @click="showInvited=false">Normal</div>
      <div class="button" @click="showInvited=true">Invited</div>
    </div>
    <div v-if="showInvited">
      <div v-for="participant in invited" :key="participant.name">
        <div v-text="participant.name"></div>
      </div>
    </div>
    <div v-else>
      <div v-for="participant in normal" :key="participant.name">
        <div v-text="participant.name"></div>
      </div>
    </div>
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
    invited() {
      return this.$store.state.participants.invited;
    },
    normal() {
      return this.$store.state.participants.normal;
    },
  }
};
</script>
