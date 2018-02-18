<template>
  <md-app>
    <md-toolbar>
      <span>test tool bar</span>
    </md-toolbar>
    <md-drawer>Navigation</md-drawer>
    <md-content>
      <!-- <img src="/assets/logo.png"> -->
      <div class="hello">
        <h1>Soulecule</h1>
        <h2>The Artisan's Card Game</h2>
      </div>
    </md-content>
  </md-app>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
