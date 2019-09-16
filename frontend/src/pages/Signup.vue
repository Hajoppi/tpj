<template>
  <div>
    <div class="choose" v-if="!select">
      <button @click="invited=true; select=true" class="button">
        {{$t(`signup.invited`)}}
      </button>
      <button @click="invited=false; select=true" class="button">
        {{$t(`signup.normal`)}}
        </button>
    </div>
    <v-signup v-if="select && isOpen" :invited="invited"></v-signup>
    <div class="closed-label" v-if="select && !isOpen">
      {{$t('signup.closed')}}
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
import VSignup from '../components/Signup';
import config from '../../config';

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
      select: false,
      invited: false,
    }
  },
  computed: {
    isOpen() {
      const now = new Date()
      return ((this.invited && now > config.signupStartInvited) 
      || (!this.invited && now > config.signupStart))
      &&
      (now < config.signupEnd);
    }
  },
  components: {
    VSignup,
  },
};
</script>
