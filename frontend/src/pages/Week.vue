<template>
  <div class="week">
    <div v-for="event in events" :key="event.name" class="event"
    :style="getImagePath(event.image)">
      <div class="event-padder"></div>
      <div class="event__description">
        <div class="event__title" v-html="$t(`week.${event.name}`) + ' ' + event.pvm "></div>
        <span v-html="$t(`event.${event.name}`)"></span>
      </div>
      <div class="event__image">
        <div class="image-filler"></div>
        <img class="teemu-image" src="../assets/images/teemu.png" />
        <div class="image-filler"></div>
      </div>
      <div class="event-padder"></div>
    </div>
  </div>
</template>

<script>
/* ============
 * Home Index Page
 * ============
 *
 * The home index page.
 */
import images from '../assets/images/*.*'
export default {
/**
 * The name of the page.
 */
  name: 'week',
  /**
   * The components that the page can use.
   */
  data() {
    return {
      events: [
        {
          name: "klubi",
          image: "urban",
          pvm: "2.11.",
        },
        {
          name: "fjs",
          image: "arktinen",
          pvm: "4.11.",
        },
        {
          name: 'kv',
          image: 'viidakko',
          pvm: '5.11.',
        },
        {
          name: "lks",
          image: "savanni",
          pvm: "5.11.",
        },
        {
          name: 'poli',
          image: 'aavikko',
          pvm: '6.11.',
        },
        {
          name: 'punainen',
          image: 'arktinen',
          pvm: '7.11',
        },
        {
          name: "tpj",
          image: "maapallo",
          pvm: "8.11."
        },
        {
          name: "sillis",
          image: "tropiikki",
          pvm: "9.11"
        },
      ]
    }
  },
  methods: {
    getImagePath(image) {
      return `background-image: url("${images[image].jpg}");`;
    }
  },
  components: {
  },
};
</script>