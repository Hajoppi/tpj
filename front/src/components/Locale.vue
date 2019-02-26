<template>
  <div class="locale">
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Locale',
  data () {
    return {
      langs: ['en', 'fi', 'se'],
    }
  },
}
</script>
