<template>
  <div class="admin">
    <button class="button button--modify" @click="downloadCsv">Download as CSV</button>
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
import proxy from '../proxies/proxy';

export default {
  /**
   * The name of the page.
   */
  name: 'admin-index',
  data() {
    return {
      invited: [],
      normal: [],
    };
  },
  mounted() {
    proxy.get('admin/signups').then((response) => {
      this.invited = response.data.invited;
      this.normal = response.data.normal;
    });
  },
  methods: {
    modify(id) {
      proxy('admin/modify').find(id).then((response) => {
        if (response.data.hash) {
          const link = `/edit?id=${response.data.hash}`;
          this.$router.push(link);
        }
      });
    },
    downloadCsv() {
      let csv = '';
      if (this.invited.length > 0) csv += `${Object.keys(this.invited[0]).join(';')}\n`;
      else if (this.normal.length > 0) csv += `${Object.keys(this.normal[0]).join(';')}\n`;
      this.invited.forEach((row) => {
        csv += Object.values(row).join(';');
        csv += '\n';
      });
      this.normal.forEach((row) => {
        csv += Object.values(row).join(';');
        csv += '\n';
      });
      const element = document.createElement('a');
      element.href = `data:text/csv;charset=utf-8,${encodeURI(csv)}`;
      element.target = '_blank';
      element.download = 'signups.csv';
      element.click();
    },
  },
  /**
   * The components that the page can use.
   */
  components: {
  },
};
</script>
