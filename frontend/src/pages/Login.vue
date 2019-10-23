<template>
  <form class="form" @submit.prevent="login">
    <div class="signup-header">Login</div>
    <div class="field">
      <label class="label">Username</label>
      <div class="control">
        <input v-model="user.username" class="input" type="text" required>
      </div>
    </div>
    <div class="field">
      <label class="label">Password</label>
      <div class="control">
        <input v-model="user.password" class="input" type="password" required>
      </div>
    </div>
    <button class="button">
        Login
    </button>
  </form>
</template>

<script>
  /* ============
   * Login Index Page
   * ============
   *
   * Page where the user can login.
   */
  export default {
    /**
     * The name of the page.
     */
    name: 'login-index',
    /**
     * The data that can be used by the page.
     *
     * @returns {Object} The view-model data.
     */
    data() {
      return {
        user: {
          username: null,
          password: null,
        },
      };
    },
    /**
     * The methods the page can use.
     */
    methods: {
      /**
       * Will log the user in.
       *
       * @param {Object} user The user to be logged in.
       */
      login() {
        this.$store.dispatch('auth/login', this.user);
      },
    },
    /**
     * The components the page can use.
     */
  };
</script>