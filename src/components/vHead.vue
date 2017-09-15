<template>
    <header class="flex-wrap header" id="header">
        <i class="ic_back" @click="goBack"></i>
        <h1 class="flex-con-1">{{Msg.title}}</h1>
        <div class="header-right" v-html=Msg.rightMsg  @click="msgTap"></div>
    </header>
</template>

<script>
  export default {
    data(){
      return{

      }
    },
    props:["Msg"],
    created(){

    },
    methods:{
      goBack(){
        this.$router.go(-1)
      },
      msgTap(){
        this.$emit("rightTap")
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
    @import '../assets/sass/conmon.scss';
    @import '../assets/sass/icon.scss';
    #header{
        height: toRem(60px);
        width: 100%;
        position: relative;
        left: 0;
        top: 0;
        z-index:100;
        border-bottom:1px solid #f5f2f0;
    .ic_back{
        position: absolute;
        left: 0;
        top:0;
        z-index:99;
        &:active{
          opacity: 0.6;
         }
    }
        h1{
            display: inline-block;
            vertical-align: middle;
            line-height:toRem(60px);
            text-align: center;
        }
        .header-right{
            position: absolute;
            right: 0;
            top:0;
            width: 1.6rem;
            height: 1.6rem;
            line-height:toRem(60px);
            text-align: center;
            color: #fa7319;
            font-size: toRem(16px);
            &:active{
             opacity: 0.6;
             }
        }
    }
</style>