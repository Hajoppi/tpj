<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <v-locale></v-locale>
      <a role="button"
          class="navbar-burger burger"
          :class="{ 'is-active': showNavbar }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navigationBar"
          @click="toggleNavbar">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navigationBar"
    class="navbar-menu"
    :class="{ 'is-active': showNavbar }">
      <div class="navbar-start">
        <router-link class="navbar-item" v-text="$t('navigation.frontpage')" to="/"></router-link>
        <router-link class="navbar-item" v-text="$t('navigation.register')" to="/participants"></router-link>
        <router-link class="navbar-item" v-text="$t('navigation.week')" to="/"></router-link>
        <router-link class="navbar-item" v-text="$t('navigation.companies')" to="/"></router-link>
        <router-link class="navbar-item" v-text="$t('navigation.contact')" to="/"></router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import VLocale from './Locale';
export default {
  name: 'Navbar',
  data() {
    return {
      showNavbar: false,
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
