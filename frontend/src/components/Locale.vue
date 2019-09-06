<template>
  <div class="locale">
  <div class="locale__text-wrapper" v-for="lang in filteredLangs" :key="lang">
    <button class="locale__text" @click="changeLang(lang)" v-text="lang.toUpperCase()"></button>
  </div>
</div>
</template>

<script>
export default {
  name: 'Locale',
  data () {
    return {
      langs: ['fi', 'en', 'se'],
      index: 0,
    };
  },

  computed: {
    filteredLangs() {
      return this.langs.filter( lang => lang != this.$i18n.locale)
    },
    getLang() {
      return this.$i18n.locale;
    },

  },
  methods:{
    changeLang(lang) {
      localStorage.setItem('locale', lang);
      this.$i18n.locale = lang;
    },
  }
}
</script>
