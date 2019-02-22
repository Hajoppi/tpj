<template>
  <div class="field">
    <div class="control">
      <div class="select">
        <select v-model="$i18n.locale">
          <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
        </select>
      </div>
    </div>
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
