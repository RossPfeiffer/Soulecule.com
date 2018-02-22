<template>
  <div class="page-container">
    <md-toolbar id="ghost-bar" class="md-primary">
      <span class="md-title">Soulecule</span>
      <menu>
        <a href="#">Home</a>
        <a href="#">ICO</a>
        <a href="#">Explore Project</a>
      </menu>
    </md-toolbar> 
    <section id="splash">
      <div id="deep-space-bg"></div>
      <div id="cosmic-belt-bg"></div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  #ghost-bar{position:fixed;background:#ffffff00;}
  menu{
    width:300px;
    display:block;
    position:absolute;
    top:0px;
    margin:0;
    height:100%;
    right:0px;
  }
  menu a{
    font-size:17px;
    height:100%;
    line-height:100%;
  }
  #splash{
    width:100%;height:100vh;
    position:relative;
  }
  #deep-space-bg{
    background-image:url('../assets/jagged-deep-warp-space.jpg');
  }
  #cosmic-belt-bg{
    background-image:url('../assets/dark-blue-nebula-stars-of-soul.jpg');
    opacity: 0.4;
    filter: alpha(opacity=50);
  }
  #deep-space-bg, #cosmic-belt-bg{
    position:absolute;
    width:100%;height:100%;
    background-size:100% auto;
    background-position:center;
  }
</style>

<script>
export default {
  name: 'Reveal',
  data: () => ({
    menuVisible: false
  })
}
</script>