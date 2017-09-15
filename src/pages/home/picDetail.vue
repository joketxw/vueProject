<template>
    <div id="picDetail">
        <header class="flex-wrap flex-center">
            <i class="ic_arrow_left"></i>
            <img src="/static/images/home/goods.png" alt="">
            <i class="ic_share"></i>
        </header>
        <ul class="mainNav flex-wrap">
            <li  class="title flex-wrap flex-center flex-con-1 flex-pack-center active">宝贝</li>
            <li  class="title flex-wrap flex-center flex-con-1 flex-pack-center">评价</li>
            <li  class="title flex-wrap flex-center flex-con-1 flex-pack-center">详情</li>
            <li  class="title flex-wrap flex-center flex-con-1 flex-pack-center">推荐</li>
        </ul>
        <div class="content flex-con-1" ref="wrapper" id="wrapper">
            <div class="scroll" id="scroll" ref="scroll">
                <div class="title">商品详情</div>
                <img src="" alt="">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{

            }
        },
        created(){

        },
        methods:{

        },
        route:{
            lin
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    @import '../../assets/sass/home/picDetail.scss';
</style>