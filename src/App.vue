<template>
	<div id="app">
		<!--<transition name="custom-classes-transition" :enter-active-class="enterAnimate" :leave-active-class="leaveAnimate">-->
			<!--<router-view></router-view>-->
		<!--</transition>-->
		<!--<keep-alive>-->
			<!--<router-view class="child-view"></router-view>-->
		<!--</keep-alive>-->
		<router-view class="child-view"></router-view>
	</div>
</template>

<script>

//import VAside from './components/Aside.vue'

export default {
	name: 'app',
    data() {
    return {
      "pageName": "",
      "routerAnimate": false,
      "enterAnimate": "", //页面进入动效
      "leaveAnimate": "" //页面离开动效
    }
  },
  watch: {
    // 监听 $route 为店内页设置不同的过渡效果
    "$route" (to, from) {
      const toDepth = to.path.split('/').length;
      const fromDepth = from.path.split('/').length;
      if (toDepth === 2) {
//        this.$store.commit("setPageName", to.name)
      }
      //同一级页面无需设置过渡效果
      if (toDepth === fromDepth) {
        return;
      }
      this.enterAnimate = toDepth > fromDepth ? "animated fadeInRight" : "animated fadeInLeft";
      this.leaveAnimate = toDepth > fromDepth ? "animated fadeOutLeft" : "animated fadeOutRight";
      // 从店面页进入店内页 需要对店内页重新设置离开动效 因为他们处于不同 name 的 router-view
      if (toDepth === 3) {
        this.leaveAnimate = "animated fadeOutRight"
      }
    }
	},
//  components: {//注册组件
//    vfooter
//  }
}
</script>

<style>
	@import "assets/css/reset.css";
	@import "assets/sass/conmon.scss";
	@import "assets/css/animate.css";
	#app{
		width: 100%;
		height:100%;
	}
	.child-view {
		flex-direction:column;
		position: absolute;
		top:0;
		left: 0;
		width: 100%;
		height: 100%;
		transition: all .2s;
		overflow: hidden;
	}
</style>
