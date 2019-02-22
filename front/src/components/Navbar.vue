<template>
  <nav class="navbar no-background" role="navigation" aria-label="main navigation">
    <div class="container">

    <div class="navbar-brand">
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
    class="navbar-menu  no-background"
    :class="{ 'is-active': showNavbar }">
      <div class="navbar-start">
        <router-link class="navbar-item" v-text="$t('navigation.frontpage')" to="/"></router-link>
        <router-link class="navbar-item" v-text="$t('navigation.register')" to="/signup"></router-link>
        <router-link class="navbar-item" v-text="$t('navigation.week')" to="/participants"></router-link>
        <router-link class="navbar-item" v-text="$t('navigation.companies')" to="/"></router-link>
        <router-link class="navbar-item" v-text="$t('navigation.contact')" to="/contact"></router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <v-locale></v-locale>
        </div>
      </div>
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
