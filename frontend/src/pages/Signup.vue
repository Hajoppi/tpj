<template>
  <v-signup :invited="invited"></v-signup>
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
  name: 'invited',
  /**
   * The components that the page can use.
   */
  data() {
    return {
      invited: false,
    }
  },
  components: {
    VSignup,
  },
};
</script>
