<template>
  <div class="week">
    <div v-for="event in events" :key="event.name" class="event">
      <div class="event__description">
        <div class="event__title">
        {{event.name}}
      </div>
        {{event.text}}
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
          name: 'Fuksisitsit',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cum illo veniam aperiam, ducimus molestias! Non, eaque rem! Enim, ullam?'
        },
        {
          name: 'CASINO',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cum illo veniam aperiam, ducimus molestias! Non, eaque rem! Enim, ullam?'
        },
        {
          name: 'FJS',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cum illo veniam aperiam, ducimus molestias! Non, eaque rem! Enim, ullam?'
        },
      ]
    }
  },
  components: {
  },
};
</script>
