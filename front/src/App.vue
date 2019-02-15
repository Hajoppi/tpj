<template>
  <div id="app">
    <div class="container">
      <v-navbar></v-navbar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import VNavbar from './components/Navbar';
export default {
  name: 'app',
  components: {
    VNavbar,
  },
}
</script>
