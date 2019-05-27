<template>
  <div>
    <div class="columns">
      <!--<div @click="invited=true" class="column">Invited</div>
      <div @click="invited=false" class="column">Normal</div>-->
    </div>
    <v-signup :invited="invited"></v-signup>
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
