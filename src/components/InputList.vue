<template>
  <div class="input-list">
    <h2>Input List</h2>

    <form class="input-area" @submit.prevent="doAdd">
      <label for="id">ID: </label>
      <input type="text" id="id" ref="id">
      <label for="number">Number: </label>
      <input type="text" id="number" ref="number">
      <label for="text">Text: </label>
      <input type="text" id="text" ref="text">
      <button type="submit">Add</button>
    </form>
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
    doAdd (state, value) {
      const listId = this.$refs.id
      const listNumber = this.$refs.number
      const listText = this.$refs.text

      if (!listId.value.length || !listNumber.value.length || !listText.value.length) {
        return false
      }

      this.list.push({
        id: listId.value,
        number: listNumber.value,
        text: listText.value
      })

      console.log(this.list)

      listId.value = ''
      listNumber.value = ''
      listText.value = ''
    }
  }
}
</script>

<style scoped>

</style>
