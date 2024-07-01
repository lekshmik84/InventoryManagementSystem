<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <App></App> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import App from './components/AdminTemplate/vue-argon-design-system-master/src/App.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld
    App
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
