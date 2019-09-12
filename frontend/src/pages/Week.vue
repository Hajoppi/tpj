<template>
  <div class="week">
    <div v-for="event in events" :key="event.name" class="event"
    :style="getImagePath(event.image)">
      <div class="event__description">
        <div class="event__title">
        {{$t(`week.${event.name}`)}}
      </div>
        <span v-html="$t(`event.${event.name}`)"></span>
    </div>
      <div class="event__image">
        <div class="image-filler"></div>
        <img class="teemu-image" src="../assets/images/teemu.png" />
        <div class="image-filler"></div>
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
        },
        {
          name: "fjs",
          image: "arktinen",
        },
        {
          name: 'kv',
          image: 'tropiikki',
        },
        {
          name: "lks",
          image: "arktinen",
        },
        {
          name: 'poli',
          image: 'maapallo',
        },
        {
          name: 'punainen',
          image: 'arktinen',
        },
        {
          name: "tpj",
          image: "maapallo",
        },
        {
          name: "sillis",
          image: "tropiikki",
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
