<template>
    <div id="goodsDetail">
        <header class="flex-wrap flex-center">
            <i class="ic_arrow_left" @click="goBack()"></i>
            <img src="/static/images/home/goods.png" alt="">
            <i class="ic_share"></i>
        </header>
        <div class="content flex-con-1" ref="wrapper" id="wrapper">
            <div class="scroll" id="scroll" ref="scroll">
                <div class="assess">
                    <ul class="nav">
                        <li class="box active flex-center flex-wrap">全部（6898）</li>
                        <li class="box flex-center flex-wrap">最新(20)</li>
                        <li class="box flex-center flex-wrap">追加(69)</li>
                        <li class="box flex-center flex-wrap">有图(92)</li>
                        <li class="box flex-center flex-wrap">非常满意(869)</li>
                        <li class="box flex-center flex-wrap">发货很快(798)</li>
                        <li class="box flex-center flex-wrap">质量不错(498)</li>
                    </ul>
                    <ul class="assessContent">
                        <li class="assessBox">
                            <div class="titleUser flex-center flex-wrap">
                                <div class="flex-wrap flex-center">
                                    <img src="" alt="">
                                    <em>书里黄金</em>
                                </div>
                                <span>2017-08-12</span>
                            </div>
                            <div class="text">
                                <p>买的真的很划算，随手一买两天就送到了，准备下周去海边玩耍带着。快递员直接送上来的，服务挺好的。</p>
                                <ul class="imgList clearfix">
                                    <li class="imgBox"><img src="" alt=""></li>
                                    <li class="imgBox"><img src="" alt=""></li>
                                    <li class="imgBox"><img src="" alt=""></li>
                                </ul>
                                <div>颜色:墨黑专业炫酷版   尺码:默认</div>
                            </div>
                        </li>
                    </ul>
                </div>
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
            goBack(){
                this.$router.go(-1);
            },

        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    @import '../../assets/sass/home/goodsAssess';
</style>