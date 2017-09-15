<template>
    <div id="joinRecord">
        <v-header :Msg="Msg"></v-header>
        <ul class="nav flex-wrap">
            <li class="flex-con-1 active">全部</li>
            <li class="flex-con-1">待成团</li>
            <li class="flex-con-1">已成团</li>
            <li class="flex-con-1">拼团失败</li>
        </ul>
        <div class="content flex-con-1" ref="wrapper" id="wrapper">
            <div class="scroll" id="scroll" ref="scroll">
                <!--列表-->
                <ul class="goodsList">
                    <li>
                        <div class="title flex-wrap flex-center">
                            <div class="flex-center flex-wrap">拼实惠<i class="ic_arrow_right"></i></div>
                            <p>12:32:56.109 后结束</p>
                            <!--<p class="finish">已成团</p>-->
                            <!--<p class="fail">拼团失败</p>-->
                        </div>
                        <div class="text flex-wrap">
                            <img src="" alt="" class="left">
                            <div class="right">
                                <p class="goodsName">博牌BOPAI真皮男士皮带自动扣男士腰带头层牛皮裤带...</p>
                                <div class="goodsPrice flex-wrap">
                                    <div>
                                        <p>¥ <em>49</em><span>拼单省160元</span></p>
                                        <p>8人拼 • 已拼<em>8989</em>件</p>
                                    </div>
                                    <div class="redBox"><p>全额红包</p><p>¥ 49</p></div>
                                </div>
                            </div>
                        </div>
                        <div class="tips flex-wrap flex-center">
                            <p>还差<em>1人</em>成团，赶紧去邀请吧~</p>
                            <button>邀请好友拼单</button>
                        </div>
                        <div class="tip2 flex-center flex-wrap">
                            <p>红包已自动发放</p>
                            <div>
                                <button>拼团详情</button>
                                <button>查看订单</button>
                            </div>
                        </div>
                        <div class="tip2 flex-center flex-wrap">
                            <p>拼团未成功，退款成功</p>
                            <div>
                                <button>拼团详情</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="tips-footer flex-wrap flex-center">
            <p>奖励的红包看这里</p>
            <button>去查看</button>
        </div>
    </div>
</template>
<script>
    import header from '../../components/vHead';
    import dialogue from '../../components/dialogue';
    export default {
        data(){
            return{
                Msg:{
                    title: '参与记录'
                }
            }
        },
        components: {//注册组件
            'v-header': header,
            'v-dialogue': dialogue,
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    @import '../../assets/sass/activity/joinRecord.scss';
</style>