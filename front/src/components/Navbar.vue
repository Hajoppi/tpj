<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="burger" @click="toggleNavbar">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </div>
    <transition name="slide">

    <div class="navbar__menu"
    :class="{'navbar__menu--active': showNavbar }"
    @click="closeNavbar">
      <router-link class="navbar__item" v-text="$t('navigation.frontpage')" to="/"></router-link>
      <router-link class="navbar__item" v-text="$t('navigation.register')" to="/signup"></router-link>
      <router-link class="navbar__item" v-text="$t('navigation.week')" to="/participants"></router-link>
      <router-link class="navbar__item" v-text="$t('navigation.companies')" to="/"></router-link>
      <router-link class="navbar__item" v-text="$t('navigation.contact')" to="/contact"></router-link>
    </div>
    </transition>
  </nav>
</template>

<script>
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
    closeNavbar() {
      this.showNavbar = false;
    }
  },
  components: {
  }
}
</script>
