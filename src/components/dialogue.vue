<template>
       <!--<div class="dialogue" v-show="isShow" :class="{'bounceIn':isShow}">-->
           <!--<slot></slot>-->
       <!--</div>-->
    <transition enter-active-class="animated zoomInLeft" leave-active-class="animated zoomOutRight">   (默认是没有效果的，须得操作show，才能触发动画)
        <div class="dialogue" v-show="isShow">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
  export default {
    data(){
      return{
        //isShow:false
      }
    },
    props:["isShow"],
    created(){

    },
    mounted(){
      console.log(this.isShow)
    },
    computed:{

    },
    methods:{

    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
    @import '../assets/sass/conmon.scss';
    .dialogue{
        position: absolute;
        top: 50%;
        left: 50%;
        height: auto;
        z-index: 999;
        visibility: hidden;
        /*-webkit-transform: translate(-50%, -50%);*/
        /*-moz-transform: translate(-50%, -50%);*/
        /*-ms-transform: translate(-50%, -50%);*/
        /*transform: translate(-50%, -50%);*/
    }
    .bounceIn{
        -webkit-animation-name:bounceIn;
        animation-name:bounceIn;
        -webkit-animation-duration: 0.4s;
        animation-duration: 0.4s;
        -webkit-animation-fill-mode:both;
        animation-fill-mode:both;
        visibility:visible;
    }
    @-webkit-keyframes bounceIn{
        0%{
            opacity:0;
            -webkit-transform:scale(.3);
            transform:scale(.3)
        }
        50%{
            opacity:1;
            -webkit-transform:scale(1.05);
            transform:scale(1.05)
        }
        70%{
            -webkit-transform:scale(.92);
            transform:scale(.92)
        }
        100%{
            opacity:1;
            -webkit-transform:scale(1);
            transform:scale(1)
        }

    }
    @keyframes bounceIn{
        0%{
            opacity:0;
            -webkit-transform:scale(.3);
            -ms-transform:scale(.3);
            transform:scale(.3)
        }
        50%{
            -webkit-transform:scale(1.05);
            -ms-transform:scale(1.05);
            transform:scale(1.05)
        }
        70%{
            -webkit-transform:scale(.92);
            -ms-transform:scale(.92);
            transform:scale(.92)
        }
        100%{
            opacity:1;
            -webkit-transform:scale(1);
            -ms-transform:scale(1);
            transform:scale(1)
        }

    }


</style>