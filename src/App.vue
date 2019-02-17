<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import 'normalize.css'

export default {
  name: 'App'
}
</script>

<style lang="scss">
body {
  background: #ccc;
}
#app {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}
</style>
