<template>
    <div class="flex-wrap">
        <v-header :Msg="Msg"></v-header>
        <div class="content flex-con-1" ref="wrapper" id="wrapper">
            <div class="scroll" id="scroll" ref="scroll">
                <div class="bg-head flex-center flex-wrap">
                    <div class="left">
                        <!--<p>已成单,待发货</p>-->
                        <!--<p>交易成功</p>-->
                        <!--<p>交易关闭</p>-->
                        <!--<p class="gray">货款将于2天12时54分内,自动原路退回</p> -->
                        <p>卖家已发货</p>
                        <p class="gray">还剩3天12时自动确认</p>
                    </div>
                    <img src="/static/images/personal/stay01.png" alt="" class="right">
                    <!--<img src="/static/images/personal/stay02.png" alt="" class="right">-->
                    <!--<img src="/static/images/personal/stay03.png" alt="" class="right">-->
                    <!--<img src="/static/images/personal/stay04.png" alt="" class="right">-->
                </div>
                <!--地址信息-->
                <div class="logisticsInfo flex-wrap flex-center">
                    <div class="flex-wrap flex-center left">
                        <i class="ic_car"></i>
                        <div>
                            <p>【漳州市】在合阳漳州公司高新区华城基地分部进行签收扫描，快递已被签收。</p>
                            <p>2017-08-12  19:21:31</p>
                        </div>
                    </div>
                    <i class="ic_arrow_right"></i>
                </div>
                <div class="addressMes flex-wrap flex-center">
                    <i class="ic_address"></i>
                    <div class="right">
                        <p class="flex-center flex-wrap"><em>收货人:张西卡</em><em>13490941024</em></p>
                        <div>收货地址:广东省深圳市龙华新区广新公寓仲雅苑6栋13楼1309室</div>
                    </div>
                </div>
                <!--实惠-->
                <div class="goods">
                    <div class="title flex-wrap flex-center">拼实惠<i class="ic_arrow_right"></i></div>
                    <div class="goodsMes flex-wrap">
                        <img src="" alt="">
                        <div class="right">
                            <div class="goodsName flex-wrap flex-center"><p>[亏完涨价!]［听歌打电话.蓝牙偏光眼镜］无线运动升级版智能蓝...</p><em>¥ 49.00</em></div>
                            <div class="goodsSize flex-center flex-wrap"><p>规格:中号方形/Y16211黑灰C1 【领券立减5元，再送夜视夹片】</p><em>×1</em></div>
                            <div class="btn">在线咨询</div>
                        </div>
                    </div>
                </div>
                <ul class="money">
                    <li class="flex-wrap flex-center"><p>运费（包邮）</p><em>¥ 0.00</em></li>
                    <li class="flex-wrap flex-center"><p>红包抵扣</p><em>¥ 0.00</em></li>
                    <li class="flex-wrap flex-center"><p class="text">实付款</p><em class="red">¥ 0.00</em></li>
                </ul>
                <!--联系卖家-->
                <ul class="connect flex-wrap">
                    <li class="flex-con-1 flex-wrap flex-center flex-pack-center"><i class="ic_mess"></i>联系卖家</li>
                    <li class="flex-con-1 flex-wrap flex-center flex-pack-center"><i class="ic_tel"></i>拨打电话</li>
                </ul>
                <!--订单编号-->
                <ul class="orderNumber">
                    <li>订单编号：6748999381740983<em>复制</em></li>
                    <li>支付方式：支付宝支付</li>
                    <li>支付时间：2017-08-12 10:21:54</li>
                    <li>成单时间：2017-08-12 10:28:19</li>
                </ul>
                <!--热门商品-->
                <div class="hotGoods">
                    <p class="title flex-center flex-wrap flex-pack-center"><i class="ic_hot"></i>热门商品</p>
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
                <div class="footerTips">已经到底啦!只能帮到你这里啦！~</div>
            </div>
        </div>
        <!--底部按钮-->
        <!--<ul class="threeBtn flex-center flex-wrap">-->
            <!--<li>延长收货</li>-->
            <!--<li>查看物流</li>-->
            <!--<li>确认收货</li>-->
        <!--</ul>-->
        <!--交易成功-->
        <ul class="threeBtn flex-center flex-wrap">
            <li>删除订单</li>
            <li>查看物流</li>
            <li>评价</li>
        </ul>
        <!--交易关闭-->
        <ul class="threeBtn flex-center flex-wrap ">
            <li class="other">查看物流</li>
            <li>提醒发货</li>
        </ul>
    </div>
</template>
<script>
    import header from '../../components/vHead';
    import dialogue from '../../components/dialogue';
    export default {
        data() {
            return {
                Msg:{
                    title:"订单详情"
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
    @import '../../assets/sass/personal/orderDeatil.scss';
</style>