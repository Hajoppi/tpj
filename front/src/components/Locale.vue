<template>
  <button class="locale" @click="nextLang" v-text="getLang"></button>
</template>

<script>
export default {
  name: 'Locale',
  data () {
    return {
      langs: ['en', 'fi'],
      index: 0,
    };
  },

  computed: {
    getLang() {
      return this.langs[this.index].toUpperCase();
    },
  },
  methods:{
    nextLang(){
      this.index += 1;
      if(this.index >= this.langs.length) this.index = 0;
      this.$i18n.locale = this.langs[this.index];
    }
  }

}
</script>
