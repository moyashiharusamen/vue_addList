<template>
  <div class="registered-list">
    <h2>Registered List</h2>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Number</th>
          <th>Text</th>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.number }}</td>
          <td>{{ item.text }}</td>
          <td><button @click="doRemove(item)">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    list: {
      get () { return this.$store.getters.list },
      set (value) { this.$store.dispatch('doUpdate', value) }
    }
  },
  methods: {
    doRemove (item) {
      const index = this.list.indexOf(item)
      this.list.splice(index, 1)
    }
  }
}
</script>

<style scoped lang="scss">
table {
  width: 100%;
  border-collapse: collapse;

  tr {
    /*border: 1px solid #000080;*/
  }

  thead {
    tr {
      border-bottom: 2px solid #000080;
      th,
      td{
        width: 250px;
        padding: 20px 0;
        font-size: 20px;
      }
    }
  }

  tbody {
    tr {
      border-bottom: 2px solid #ccc;
      td {
        padding: 20px 10px;
      }

      button {
        margin-left: 10px;
      }
    }
  }
}
</style>
