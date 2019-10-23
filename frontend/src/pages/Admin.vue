<template>
  <div class="admin">
    <div v-if="normal.length > 0" class="signup-header">Normal</div>
    <table v-if="normal.length > 0" class="admin-table">
      <thead>
        <th v-for="(val, propertyName) in normal[0]" :key="propertyName">{{propertyName}}</th>
        <th>Modify</th>
      </thead>
      <tbody>
        <tr v-for="row in normal" :key="row.id">
          <td v-for="(value, ind) in row" :key="`${ind}_${row.id}`">{{value}}</td>
          <td><a @click.prevent="modify(row.id)" class="button--modify button">Modify</a></td>
        </tr>
      </tbody>
    </table>
    <div v-if="invited.length > 0" class="signup-header">Invited</div>
    <table v-if="invited.length > 0" class="admin-table">
      <thead>
        <th v-for="(val, propertyName) in invited[0]" :key="propertyName">{{propertyName}}</th>
      </thead>
      <tbody>
        <tr v-for="row in invited" :key="row.id">
          <td v-for="(value, ind) in row" :key="`${ind}_${row.id}`">{{value}}</td>
          <td><a @click.prevent="modify(row.id)" class="button--modify button">Modify</a></td>
        </tr>
      </tbody>
    </table>
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
      invited: [],
      normal:[]
    }
  },
  mounted() {
    new Proxy('admin/signups').all().then((response) => {
      this.invited = response.invited;
      this.normal = response.normal;
    });
  },
  methods: {
    modify(id) {
      console.log('here',id)
      new Proxy('admin/modify').find(id).then((response) => {
        if (response.hash) {
          const link = '/edit?id=' + response.hash;
          this.$router.push(link);
        }
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
