<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "~vue-material/dist/theme/engine"; 

@include md-register-theme("default", (
  primary: md-get-palette-color(blue, A200),
  accent: md-get-palette-color(red, A200)
));

@import "~vue-material/dist/theme/all"; 
</style>

<style>
body{height:100%;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
