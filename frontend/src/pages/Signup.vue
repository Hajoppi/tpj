<template>
  <div>
    <div class="home__text" v-html="$t('home.signup')"></div>
    <div class="choose">
      <button :disabled="!isOpenInvited" @click.prevent="invited=true; select=true" class="choose-button">
        {{$t(`signup.invited`)}}
      </button>
      <button :disabled="!isOpenOther" @click.prevent="invited=false; select=true" class="choose-button">
        {{$t(`signup.normal`)}}
      </button>
      <router-link to="/participants" class="choose-button">
        {{$t(`signup.participants`)}}
      </router-link>
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
    isOpenInvited() {
      const now = new Date()
      return now > config.signupStartInvited && now < config.signupEndInvited
    },
    isOpenOther() {
      const now = new Date()
      return now > config.signupStart && now < config.signupEnd;
    },
    isOpen() {
      const now = new Date()
      return ((this.invited && this.isOpenInvited) 
      || (!this.invited && this.isOpenOther))
    }
  },
  components: {
    VSignup,
  },
};
</script>
