<template>
  <div class="home">
  </div>
</template>

<script>
  /* ============
   * Home Index Page
   * ============
   *
   * The home index page.
   */
import Proxy from '../proxies/Proxy';

export default {
  /**
   * The name of the page.
   */
  name: 'admin-index',
  data() {
    return {

    }
  },
  mounted() {
    new Proxy('admin/signups').all().then(response => this._data = response);
  },
  /**
   * The components that the page can use.
   */
  components: {
  },
};
</script>
