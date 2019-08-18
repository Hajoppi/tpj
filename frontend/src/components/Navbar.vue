<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar__header">
      <div class="burger" @click="toggleNavbar">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </div>
    </div>
    <div class="navbar__menu"
    :class="{'navbar__menu--active': showNavbar }"
    @click="closeNavbar">
      <router-link class="navbar__item" v-text="$t('navigation.frontpage')" to="/"></router-link>
      <router-link class="navbar__item" v-text="$t('navigation.register')" to="/signup"></router-link>
      <router-link class="navbar__item" v-text="$t('navigation.week')" to="/week"></router-link>
      <router-link class="navbar__item" v-text="$t('navigation.companies')" to="/"></router-link>
      <router-link class="navbar__item" v-text="$t('navigation.contact')" to="/contact"></router-link>
    </div>
  </nav>
</template>

<script>
import VLocale from './Locale';

export default {
  name: 'Navbar',
  methods: {
    toggleNavbar() {
      this.$store.dispatch('navbar/toggle');
    },
    closeNavbar() {
      this.$store.dispatch('navbar/set', false);
    }
  },
  computed: {
    showNavbar() {
      return this.$store.state.navbar.showNavbar;
    },
  },
  components: {
    VLocale
  }
}
</script>
