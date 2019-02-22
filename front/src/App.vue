<template>
  <div id="app">
    <v-layout>
      <router-view></router-view>
    </v-layout>
  </div>
</template>

<script>
import VLayout from './layouts/Default';

export default {
  name: 'app',
  components: {
    VLayout,
  },
}
</script>
