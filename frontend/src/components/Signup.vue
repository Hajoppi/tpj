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
        <input class="radio"
          required name="dish"
          type="radio"
          id="fish"
          value="fish"
          v-model="dish">
        <span class="radio-padder"></span>
        <label for="vegetarian">{{$t('signup.vegetarian')}}</label>
        <input class="radio"
          name="dish"
          type="radio"
          id="vegetarian"
          value="vegetarian"
          v-model="dish">
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
    <div class="field" v-if="invited || (edit)">
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
        <label for="" class="label" v-html="$t('signup.gdpr')"></label>
      </div>
    </div>
    <div class="field">
      <div class="accept">
        <input v-model="accept" type="checkbox">
        <label for="" class="label" v-html="$t('signup.accept')"></label>
      </div>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button
          v-if="edit"
          class="button"
          :disabled="!gdpr || sending">
            {{$t('signup.edit')}}
          </button>
        <button v-else class="button" :disabled="!gdpr || sending">{{$t('signup.submit')}}</button>
      </div>
      <div v-if="edit" class="control">
        <button
          @click.prevent="deleteSignup"
          class="button is-link">
            {{$t('signup.delete')}}
        </button>
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
import proxy from '../proxies/proxy';

export default {
/**
 * The name of the page.
 */
  name: 'home-index',
  props: {
    invitedProp: {
      type: Boolean,
      required: false,
      default: false,
    },
    edit: {
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
      table_group: '',
      representative_of: '',
      support: false,
      dish: '',
      gdpr: false,
      accept: false,
      sending: false,
      invited: false,
    };
  },
  mounted() {
    this.invited = this.invitedProp;
    if (this.edit) {
      const signupId = this.$route.query.id;
      proxy.get(`signup?id=${signupId}`).then((res) => {
        const { data } = res;
        this.name = data.name;
        this.email = data.email;
        this.start_year = data.start_year;
        this.student = data.student;
        this.no_alcohol = data.no_alcohol;
        this.sillis = data.sillis;
        this.avec = data.avec;
        this.food_requirements = data.food_requirements;
        this.table_group = data.table_group;
        this.representative_of = data.representative_of;
        this.support = data.support;
        this.dish = data.dish;
        this.gdpr = data.gdpr;
        this.accept = data.accept;
        this.sending = data.sending;
      }).catch((err) => {
        this.$router.push({ name: 'signup.index' });
        console.error(err);
      });
    }
  },
  computed: {
    formTitle() {
      return this.invited ? this.$t('signup.titleInvited') : this.$t('signup.title');
    },
    total() {
      return this.$store.state.participants.total;
    },
  },
  methods: {
    register() {
      this.sending = true;
      const data = this.$data;
      data.invited = this.invited;
      data.locale = this.$i18n.locale;
      this.$store.dispatch('participants/register', data).then(() => {
        this.sending = false;
        this.$router.push({ name: 'participants.index' });
      }).catch((error) => {
        this.sending = false;
        console.error(error);
      });
    },
    update() {
      const data = this.$data;
      data.id = this.$route.query.id;
      data.locale = this.$i18n.locale;
      return proxy.put('signup', data).then(() => {
        this.$router.push({ name: 'participants.index' });
      }).catch((error) => {
        console.error(error);
      });
    },
    deleteSignup() {
      const signupId = this.$route.query.id;
      return proxy.delete('signup', { id: signupId }).then(() => {
        this.$router.push({ name: 'participants.index' });
      }).catch((error) => {
        console.error(error);
      });
    },
    handleSubmit() {
      if (this.edit) {
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
