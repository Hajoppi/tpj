<template>
  <div id="app">
    <!--<v-locale></v-locale>-->
    <v-layout>
      <router-view></router-view>
    </v-layout>
  </div>
</template>

<script>
import VLayout from './layouts/Default';
import VLocale from './components/Locale';
export default {
  name: 'app',
  components: {
    VLayout,
    VLocale,
  },
}
</script>
