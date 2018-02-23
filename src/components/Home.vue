<template>
	<div class="page-container">
		<md-toolbar id="ghost-bar" class="md-primary">
			<span class="md-title">Soulecule</span>
			<nav id="navigation">
				<md-menu id="nav-home" md-direction="bottom-start" md-align-trigger :md-active.sync="navHomeOpened">
					<md-button md-menu-trigger>Home</md-button>
					<md-menu-content id="nav-home-content">
						<md-menu-item>Features</md-menu-item>
						<md-menu-item>Road Map</md-menu-item>
						<md-menu-item>FAQs</md-menu-item>
						<md-menu-item>Social</md-menu-item>
						<md-menu-item>Smart Contract</md-menu-item>
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
	#ghost-bar{position:fixed;background:#ffffff00;display:grid;grid-template-columns:70% 30%;}
  #navigation md-menu-item{
    height:15px;
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
		width:100%;
    height:100%;
		background-size:100% auto;
		background-position:center;
	}
	#nav-home-content{
		/*height:400px;*/
		max-height:none;
	}
</style>

<script>
export default {
	name: 'Reveal',
	data: () => ({
		navHomeOpened: false
	}),
	created: function(){
	var VUE_STATE = this;
	function withinElement(parent, child) {
			 var node = child;
			 while (node != null) {
					 if (node == parent) {
							 return true;
					 }
					 node = node.parentNode;
			 }
			 return false;
	}
		setTimeout(function(){
			var homeNavBtn = document.getElementById("nav-home");
			
			var closingTimer;
			window.addEventListener("mouseover", function( event ) {
				var target = event.target;
				console.log('did we make it? ');
				console.log(target);
				var homeNavDropdown = document.getElementById("nav-home-content");//this gets updated
				if(withinElement(homeNavBtn,target) || withinElement(homeNavDropdown,target)){
					console.log('yes');
					VUE_STATE.navHomeOpened = true;
					clearTimeout(closingTimer);
				}else{console.log('no')}
			});
			window.addEventListener("mouseout", function( event ){
				var target = event.target;	
				var homeNavDropdown = document.getElementById("nav-home-content");//this gets updated
				if(withinElement(homeNavBtn,target) || withinElement(homeNavDropdown,target)){
					console.log('');
					closingTimer = setTimeout(function(){
						VUE_STATE.navHomeOpened = false;
					},50);
				}
			}); 

			
		},1);
		
		//
	}
}
</script>