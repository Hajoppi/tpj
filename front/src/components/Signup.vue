<template>
  <form @submit.prevent="handleSubmit">
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input v-model="name" class="input" type="text" placeholder="Name">
      </div>
    </div>
    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input v-model="email" class="input" type="email" placeholder="Email">
      </div>
    </div>
    <div class="field">
      <label class="label">Start Year</label>
      <div class="control">
        <input v-model="start_year" class="input" type="number" placeholder="">
      </div>
    </div>
    <div class="field">
      <label class="label">Student</label>
      <div class="control">
        <input v-model="student" type="checkbox">
      </div>
    </div>
    <div class="field">
      <label class="label">No alcohol</label>
      <div class="control">
        <input v-model="no_alcohol" type="checkbox">
      </div>
    </div>
    <div class="field">
      <label class="label">Sillis</label>
      <div class="control">
        <input v-model="sillis" type="checkbox">
      </div>
    </div>
    <div class="field">
      <label class="label">Avec</label>
      <div class="control">
        <input v-model="avec" class="input" type="text" placeholder="Avec">
      </div>
    </div>
    <div class="field">
      <label class="label">Food Allergies</label>
      <div class="control">
        <input v-model="food_requirements"
               class="input"
               type="text"
               placeholder="Allergies">
      </div>
    </div>
    <div class="field">
      <label class="label">Representative of</label>
      <div class="control">
        <input v-model="representative_of"
              class="input"
              type="text"
              placeholder="Representative">
      </div>
    </div>
    <div class="field">
      <label class="label">Gives Present</label>
      <div class="control">
        <input v-model="gives_present" type="checkbox">
      </div>
    </div>
    <div class="field">
      <div class="control">
        <button class="button is-link">Submit</button>
      </div>
    </div>
  </form>
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
    name: 'home-index',
    props: {
      invited: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
    data() {
      return {
        name: '',
        email: '',
        start_year: '',
        student: false,
        no_alcohol: false,
        sillis: false,
        avec: '',
        food_requirements: '',
        representative_of: '',
        gives_present: false,
      };
    },

    methods: {
      handleSubmit() {
        /*const data = {
            name: 'Tuomas',
            email: 'a@a.fi',
            start_year: '1234',
            student: false,
            no_alcohol: false,
            sillis: false,
            avec: 'asd',
            food_requirements: 'asd',
            representative_of: 'asd',
            gives_present: false,
        };*/
        const data = this.$data;
        data.invited = this.invited;
        this.$store.dispatch("participants/register", data).then(() => {
          console.log("thank you for registering");
        }).catch(() => {
          console.log("errror");
        });
      },
    },
    /**
     * The components that the page can use.
     */
    components: {
    },
};
</script>
