<template>
  <div>
    <h2>Registered List</h2>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Comment</th>
          <th>Number</th>
          <th>Text</th>
          <td></td>
        </tr>
      </thead>
      <transition-group tag="tbody" name="list">
        <tr v-for="item in list" :key="item.id">
          <th>{{ item.id }}</th>
          <td>{{ item.comment }}</td>
          <td>{{ item.number }}</td>
          <td>{{ item.text }}</td>
          <td><button @click="doRemove(item)">Delete</button></td>
        </tr>
      </transition-group>
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

  thead {
    tr {
      border-bottom: 2px solid #000080;
      th,
      td{
        width: 200px;
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

  .list-enter-active {
    transition: 1s;
  }

  .list-enter {
    opacity: 0;
    transform: translateX(100%);
  }
}
</style>
