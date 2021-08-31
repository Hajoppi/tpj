<template>
  <div class="layout">
    <div class="header">
      <v-navbar></v-navbar>
    </div>
    <div class="content" @click="closeNavbar">
      <slot></slot>
    </div>
    <div class="footer">
    </div>
  </div>
</template>

<script>
/* ============
 * Default Layout
 * ============
 *
 * Used for the home and account pages.
 *
 * Layouts are used to store a lot of shared code.
 * This way the app stays clean.
 */
import VNavbar from '../components/Navbar.vue';

export default {
  /**
   * The name of the layout.
   */
  name: 'default-layout',
  methods: {
    closeNavbar() {
      this.$store.dispatch('navbar/set', false);
    },
  },
  computed: {
    sponsors() {
      return ['okm', 'MML', 'TEK', 'FCG'];
    },
  },
  components: {
    VNavbar,
  },
};
</script>
