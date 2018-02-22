<template>
  <div class="page-container">
    <md-toolbar id="ghost-bar" class="md-primary">
      <span class="md-title">Soulecule</span>
      <nav>
        <md-menu id="nav-home" md-direction="bottom-start" md-align-trigger :md-active.sync="navHomeOpened">
          <md-button md-menu-trigger>Home</md-button>
          <md-menu-content id="nav-home-content">
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item>My Item 3</md-menu-item>
          </md-menu-content>

        </md-menu>
        <md-menu>
          <md-button>ICO</md-button>
          <md-button>Explore Project</md-button>
        </md-menu>
      </nav>
    </md-toolbar> 
    <section id="splash">
      <div id="deep-space-bg"></div>
      <div id="cosmic-belt-bg"></div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  #ghost-bar{position:fixed;background:#ffffff00;}
  
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
    navHomeOpened: false
  }),
  created: function(){
  var guy = this;console.log(guy);
    setTimeout(function(){
      var homeNavBtn = document.getElementById("nav-home");
      console.log(homeNavBtn);
      
      
      
      homeNavBtn.addEventListener("mouseover", function( event ) {
        console.log('moused over');
        homeNavBtn.setAttribute("md-active", "true");
        guy.navHomeOpened = true;
      });
      homeNavBtn.addEventListener("mouseout", function( event ) {
        console.log('moused out');
        homeNavBtn.setAttribute("md-active", "false");
        guy.navHomeOpened = false;
      }); 

      var yyy = document.getElementById("nav-home-content");
    },1);
    
    //
  }
}
</script>