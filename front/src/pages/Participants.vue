<template>
  <div>
    <p>Invited</p>
    <div v-for="participant in invited">
      <div v-text="participant.name"></div>
    </div>
    <p>Normal plebs</p>
    <div v-for="participant in normal">
      <div v-text="participant.name"></div>
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
