<template>
  <div>
    <p v-text="$t('home.welcome_msg')"></p>
    <v-signup></v-signup>
  </div>
</template>

<script>
  /* ============
   * Home Index Page
   * ============
   *
   * The home index page.
   */
import VSignup from '../components/Signup';
export default {
  /**
   * The name of the page.
   */
  name: 'home-index',

  /**
   * The components that the page can use.
   */
  components: {
    VSignup,
  },
};
</script>
