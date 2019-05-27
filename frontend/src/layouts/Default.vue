<template>
  <div class="layout">
    <v-navbar></v-navbar>
    <div class="section" @click="closeNavbar">
      <div class="container">
        <slot></slot>
        <!-- Content will be placed here -->
      </div>
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
import VNavbar from '../components/Navbar';

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
  components: {
    VNavbar,
  },
};
</script>
