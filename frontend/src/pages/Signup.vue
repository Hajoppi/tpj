<template>
  <div>
    <div class="home__text" v-html="$t('home.signup')"></div>
    <div class="is-full"
      v-if="isFull">
      Ilmoittautuminen on täynnä, voit kuitenkin ilmoittautua varasijoille
    </div>
    <div class="choose">
      <button
        :disabled="!isOpenInvited"
        @click.prevent="invited=true; select=true"
        class="choose-button">
        {{$t(`signup.invited`)}}
      </button>
      <button
        :disabled="!isOpenOther"
        @click.prevent="invited=false; select=true"
        class="choose-button">
        {{$t(`signup.normal`)}}
      </button>
      <router-link to="/participants" class="choose-button">
        {{$t(`signup.participants`)}}
      </router-link>
    </div>
    <v-signup v-if="select && isOpen" :invitedProp="invited"></v-signup>
  </div>
</template>

<script>
/* ============
 * Home Index Page
 * ============
 *
 * The home index page.
 */
import VSignup from '../components/Signup.vue';
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
    };
  },
  computed: {
    isOpenInvited() {
      const now = new Date();
      return now > config.signupStartInvited && now < config.signupEndInvited;
    },
    isOpenOther() {
      const now = new Date();
      return now > config.signupStart && now < config.signupEnd;
    },
    isOpen() {
      return ((this.invited && this.isOpenInvited)
      || (!this.invited && this.isOpenOther));
    },
    total() {
      return this.$store.state.participants.total;
    },
    isFull() {
      return this.total > config.maxParticipants;
    },
  },
  created() {
    this.$store.dispatch('participants/all');
  },
  components: {
    VSignup,
  },
};
</script>
