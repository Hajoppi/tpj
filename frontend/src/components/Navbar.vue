<template>
  <nav
    class="navbar"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar__header">
      <v-locale></v-locale>
      <div class="navbar-title" @click="closeNavbar">
      <router-link class="navbar-title__text" to="/">
        <img src="../assets/images/logo.png" alt="Teekkarius 147">
      </router-link>
      </div>
      <div class="burger-wrapper">
        <div class="burger" @click="toggleNavbar">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>
    </div>
    <div class="navbar__menu"
    :class="{'navbar__menu--active': showNavbar }"
    @click="closeNavbar">
      <router-link
        class="navbar__item"
        v-text="$t('navigation.register')"
        to="/signup"></router-link>
      <router-link
        class="navbar__item"
        v-text="$t('navigation.week')"
        to="/week"></router-link>
      <router-link
        class="navbar__item"
        v-text="$t('navigation.contact')" to="/contact"></router-link>
      <a v-if="authenticated"
      class="navbar__item"
      @click.prevent="$store.dispatch('auth/logout')">
        Logout
      </a>
    </div>
  </nav>
</template>

<script>
import VLocale from './Locale.vue';

export default {
  name: 'Navbar',
  methods: {
    toggleNavbar() {
      this.$store.dispatch('navbar/toggle');
    },
    closeNavbar() {
      this.$store.dispatch('navbar/set', false);
    },
  },
  computed: {
    showNavbar() {
      console.log(this.$store.state);
      return this.$store.state.navbar.showNavbar;
    },
    authenticated() {
      return this.$store.state.auth.authenticated;
    },
  },
  components: {
    VLocale,
  },
};
</script>
