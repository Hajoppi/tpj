<template>
  <div class="layout">
    <div class="header">
      <v-navbar></v-navbar>
    </div>
    <div class="content" @click="closeNavbar">
      <slot></slot>
    </div>
    <div class="footer">
      <div 
        class="logo" 
        v-for="sponsor in sponsors" 
        :key="sponsor">
        <img class="logo__image" :src="imgSrc(sponsor)" :alt="sponsor">
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
import images from '../assets/images/*.*'
export default {
  /**
   * The name of the layout.
   */
  name: 'default-layout',
  methods: {
    closeNavbar() {
      this.$store.dispatch('navbar/set', false);
    },
    imgSrc(name) {
      console.log(images[name])
      return images[name].png;
    }
  },
  computed: {
    sponsors() {
      return ['FCG','MML', 'TEK'];
    },
  },
  components: {
    VNavbar,
  },
};
</script>
