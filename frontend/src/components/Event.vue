<template>
  <div class="event" @click.prevent="toggleShow">
    <slot name="title" class="event__title"></slot>
    <slot name="description" v-if="show" class="event__description"></slot>
  </div>
</template>

<script>
export default {
  name: 'Event',
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
      console.log(this.show);
    },
  },
};
</script>
