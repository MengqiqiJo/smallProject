<template>
  <div id="app">
    <FormTemplate msg="This is form template"/>

  </div>
</template>

<script>
import FormTemplate from './components/FormTemplate.vue'

export default {
  name: 'App',
  components: {
    FormTemplate
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
