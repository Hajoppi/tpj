<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <router-link class="navbar__item" v-text="$t('navigation.frontpage')" to="/"></router-link>
    <router-link class="navbar__item" v-text="$t('navigation.register')" to="/signup"></router-link>
    <router-link class="navbar__item" v-text="$t('navigation.week')" to="/participants"></router-link>
    <router-link class="navbar__item" v-text="$t('navigation.companies')" to="/"></router-link>
    <router-link class="navbar__item" v-text="$t('navigation.contact')" to="/contact"></router-link>
  </nav>
</template>

<script>
import VLocale from './Locale';
export default {
  name: 'Navbar',
  data() {
    return {
      showNavbar: true,
    };
  },
  methods: {
    toggleNavbar() {
      this.showNavbar = !this.showNavbar;
    },
  },
  components: {
    VLocale,
  }
}
</script>
