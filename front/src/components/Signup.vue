<template>
  <div>
    <div v-if="invited">Invited</div>
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
      <div class="field is-grouped">
        <div class="control">
          <button v-if="edit" class="button is-link">Edit</button>
          <button v-else class="button is-link">Submit</button>
        </div>
        <div v-if="edit" class="control">
          <button @click.prevent="deleteSignup" class="button is-link">Delete</button>
        </div>
      </div>
    </form>
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
  name: 'home-index',
  props: {
    invited: {
      type: Boolean,
      required: false,
      default: false,
    },
    edit: {
      type: Boolean,
      required: false,
      default: false,
    }
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
  mounted() {
    if(this.edit) {
      const signupId = this.$route.query.id;
      new Proxy('signup', { id: signupId }).all().then((res) => {
        Object.assign(this._data, res);
        console.log(this.$data);
      }).catch((err) => {
        console.log(err);
      });
    }
  },
  methods: {
    register() {
      const data = this.$data;
      data.invited = this.invited;
      this.$store.dispatch("participants/register", data).then(() => {
        this.$router.push({ name: 'participants.index'})
      }).catch(() => {
        console.log("error");
      });
    },
    update() {
      const data = this._data;
      data.id = this.$route.query.id;
      return new Proxy('signup').update(data).then(() => {
        this.$router.push({ name: 'participants.index' });
      }).catch(() => {
        console.log("error");
      });
    },
    deleteSignup() {
      const signupId = this.$route.query.id;
      return new Proxy('signup', { id: signupId }).destroy().then(() => {
        this.$router.push({ name: 'participants.index'});
      }).catch(() => {
        console.log("error");
      });
    },
    handleSubmit() {
      if(this.edit) {
        this.update();
      } else {
        this.register();
      }
    },
  },
  /**
   * The components that the page can use.
   */
  components: {
  },
};
</script>
