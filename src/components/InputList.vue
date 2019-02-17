<template>
  <div>
    <h2>Input List</h2>

    <form class="input-area" @submit.prevent="doAdd">
      <label for="comment">comment: </label>
      <input type="text" id="comment" ref="comment">
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
      const listComment = this.$refs.comment
      const listNumber = this.$refs.number
      const listText = this.$refs.text
      const listLength = this.list.length

      if (!listComment.value.length || !listNumber.value.length || !listText.value.length) {
        return false
      }

      this.list.unshift({
        id: listLength + 1,
        comment: listComment.value,
        number: listNumber.value,
        text: listText.value
      })

      listComment.value = ''
      listNumber.value = ''
      listText.value = ''
    }
  }
}
</script>

<style scoped>

</style>
