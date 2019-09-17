<template>
  <div>
    <div class="choose">
      <a @click.prevent="invited=true; select=true" class="choose-button">
        {{$t(`signup.invited`)}}
      </a>
      <a @click.prevent="invited=false; select=true" class="choose-button">
        {{$t(`signup.normal`)}}
        </a>
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
