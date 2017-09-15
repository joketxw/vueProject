<template>
    <div class="main flex-wrap">
        <v-header :Msg="Msg"></v-header>
        <div class="content flex-con-1" ref="wrapper" id="wrapper">
            <div class="scroll" id="scroll" ref="scroll">
                <!--头部-->
                <div class="head flex-wrap flex-center">
                    <img src="" alt="" class="left">
                    <div class="right">
                        <p>物流公司：<em>百世快递</em></p>
                        <p>运单编号：70446710257928</p>
                        <p>物流电话：<span>4009565656</span></p>
                    </div>
                </div>
                <!--订单追踪-->
                <div class="orderTrace">
                    <div class="title flex-center flex-wrap">
                        <span>订单跟踪</span>
                        <div class="flex-wrap flex-center">
                            <em>物流投诉</em>
                            <i class="ic_gray_about"></i>
                        </div>
                    </div>
                    <ul class="cellMsg">
                        <li class="flex-wrap ">
                            <span class="active"></span>
                            <div>
                                <p class="text">由【江西九江集散中心】发往【江西南昌中转部】</p>
                                <p>2017-08-21  19:24:12</p>
                            </div>
                            <div class="line"></div>
                        </li>
                        <li class="flex-wrap">
                            <span class="no-active"></span>
                            <div>
                                <p>货物抵达【江西九江公司】总部</p>
                                <p>2017-08-21  08:20:48</p>
                            </div>
                            <div class="line"></div>
                        </li>
                        <li class="flex-wrap">
                            <span class="no-active"></span>
                            <div>
                                <p>九江【大成分部】已揽收</p>
                                <p>2017-08-21  08:20:48</p>
                            </div>
                            <div class="line"></div>
                        </li>
                    </ul>
                </div>
                <!--热门推荐-->
                <div class="recommend">
                    <p class="title-recommend flex-wrap flex-center flex-pack-center">
                        <i class="ic_buy"></i>
                        <em>为你推荐</em>
                    </p>
                    <ul class="box clearfix">
                        <li class="cell">
                            <img src="" alt="">
                            <p>无线蓝牙运动耳机【高端不贵狂甩不掉】挂耳式跑步耳机酷</p>
                            <div class="flex-wrap">
                                <span>¥ 48.8</span>
                                <em>已拼1682件</em>
                            </div>
                        </li>
                        <li class="cell">
                            <img src="" alt="">
                            <p>无线蓝牙运动耳机【高端不贵狂甩不掉】挂耳式跑步耳机酷</p>
                            <div class="flex-wrap">
                                <span>¥ 48.8</span>
                                <em>已拼1682件</em>
                            </div>
                        </li>
                        <li class="cell">
                            <img src="" alt="">
                            <p>无线蓝牙运动耳机【高端不贵狂甩不掉】挂耳式跑步耳机酷</p>
                            <div class="flex-wrap">
                                <span>¥ 48.8</span>
                                <em>已拼1682件</em>
                            </div>
                        </li>
                    </ul>
                </div>
                <!--到底提示-->
                <div class="footerTip">已经到底啦!只能帮到你这里啦！~</div>
            </div>
        </div>
    </div>
</template>
<script>
    import header from '../../components/vHead';
    import dialogue from '../../components/dialogue';

    export default {
        data() {
            return {
                Msg: {
                    title: "物流信息"
                }
            }
        },
        components: {//注册组件
            'v-header': header,
            'v-dialogue': dialogue,
        },
        created() {

        },
        methods: {}
    }
</script>
<style rel="stylesheet/scss" lang="scss">
    @import '../../assets/sass/personal/logisticMsg.scss';
</style>