<template>
  <div>
    <v-signup edit></v-signup>
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
  name: 'edit-index',
  /**
   * The components that the page can use.
   */
  components: {
    VSignup,
  },
};
</script>
