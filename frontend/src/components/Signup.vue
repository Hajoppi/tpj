<template>
  <form class="form" @submit.prevent="handleSubmit">
    <div class="signup-header" v-html="formTitle"></div>
    <div class="field">
      <label class="label">{{$t('signup.name')}}</label>
      <div class="control">
        <input v-model="name" class="input" type="text" required>
      </div>
    </div>
    <div class="field">
      <label class="label">{{$t('signup.email')}}</label>
      <div class="control">
        <input v-model="email" class="input" type="email" required>
      </div>
    </div>
    <div class="field">
      <label class="label">{{$t('signup.startYear')}}</label>
      <div class="control">
        <input v-model="start_year" class="input" type="text" required>
      </div>
    </div>
    <div class="field">
      <label class="label">{{$t('signup.student')}}</label>
      <input v-model="student" type="checkbox">
    </div>
    <div class="field">
      <label class="label">{{$t('signup.avec')}}</label>
      <div class="control">
        <input v-model="avec" class="input" type="text">
      </div>
    </div>
    <div class="field">
      <label class="label">{{$t('signup.dish')}}</label>
      <div class="control dish">
        <label for="fish">{{$t('signup.fish')}}</label>
        <input class="radio" required name="dish" type="radio" id="fish" value="fish" v-model="dish">
        <span class="radio-padder"></span>
        <label for="vegetarian">{{$t('signup.vegetarian')}}</label>
        <input class="radio" name="dish" type="radio" id="vegetarian" value="vegetarian" v-model="dish">
        <br>
      </div>
    </div>
    <div class="field">
      <label class="label">{{$t('signup.foodAllergies')}}</label>
      <div class="control">
        <input v-model="food_requirements"
                class="input"
                type="text">
      </div>
    </div>
    <div class="field">
      <label class="label">{{$t('signup.noAlcohol')}}</label>
      <input v-model="no_alcohol" type="checkbox">
    </div>
    <div class="field">
      <label class="label">{{$t('signup.tableGroup')}}</label>
      <div class="control">
        <input v-model="table_group"
              class="input"
              type="text">
      </div>
    </div>
    <div class="field" v-if="invited">
      <label class="label">{{$t('signup.representative')}}</label>
      <div class="control">
        <input v-model="representative_of"
              class="input"
              type="text">
      </div>
    </div>
    <div class="field">
      <label class="label">{{$t('signup.sillis')}}</label>
      <input v-model="sillis" type="checkbox">
    </div>
    <div class="field">
      <label class="label">{{$t('signup.support')}}</label>
      <input v-model="support" type="checkbox">
    </div>
    <div class="field">
      <div class="accept">
        <input v-model="gdpr" type="checkbox">
        <label for="" class="label" v-html="$t('signup.accept')"></label>
      </div>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button v-if="edit" class="button" :disabled="!gdpr">{{$t('signup.edit')}}</button>
        <button v-else class="button" :disabled="!gdpr">{{$t('signup.submit')}}</button>
      </div>
      <div v-if="edit" class="control">
        <button @click.prevent="deleteSignup" class="button is-link">{{$t('signup.delete')}}</button>
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
      table_group: '',
      representative_of: '',
      support: false,
      dish: '',
      gdpr: false,
      error: '',
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
  computed: {
    formTitle() {
      return this.invited ? this.$t('signup.titleInvited') : this.$t('signup.title')
    }
  },
  methods: {
    register() {
      const data = this.$data;
      data.invited = this.invited;
      this.$store.dispatch("participants/register", data).then(() => {
        this.$router.push({ name: 'participants.index'})
      }).catch((error) => {
        console.log(error);
      });
    },
    update() {
      const data = this._data;
      data.id = this.$route.query.id;
      return new Proxy('signup').update(data).then(() => {
        this.$router.push({ name: 'participants.index' });
      }).catch((error) => {
        console.log(error);
      });
    },
    deleteSignup() {
      const signupId = this.$route.query.id;
      return new Proxy('signup', { id: signupId }).destroy().then(() => {
        this.$router.push({ name: 'participants.index'});
      }).catch((error) => {
        console.log(error);
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
