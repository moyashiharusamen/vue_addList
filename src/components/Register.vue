<template>
  <div class="add-list">
    <h1>Add list</h1>
    <InputList class="input-list" />
    <RegisteredList class="registered-list" />
  </div>
</template>

<script>
import InputList from '@/components/InputList'
import RegisteredList from '@/components/RegisteredList'

export default {
  components: {
    InputList,
    RegisteredList
  }
}
</script>

<style scoped>
</style>
