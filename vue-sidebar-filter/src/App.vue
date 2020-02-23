<template>
  <div id="app">
    <div>
      <FormTemplate/>
    </div>
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

@import "https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
