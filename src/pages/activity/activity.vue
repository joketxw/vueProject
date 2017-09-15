<template>
    <div class="flex-wrap main">
        <v-header :Msg="Msg"></v-header>
        <div class="content flex-con-1" ref="wrapper" id="wrapper">
            <div class="scroll" id="scroll" ref="scroll">
                <div class="head flex-wrap flex-center">
                    <p class="">我的红包: <em>328.00元</em><i class="ic_arrow_right"></i></p>
                    <div class="right flex-wrap">
                        <router-link tag="div" to="/joinRecord" class="btn">参与记录</router-link>
                        <div class="btn" @click="showMd('rule')">规则</div>
                    </div>
                </div>
                <div class="ad"></div>
                <div class="step"></div>
                <!--开团邀新 • 一起拼实惠 -->
                <div class="titleCenter">
                    <p>开团邀新 • 一起拼实惠 </p>
                    <p>精挑细选 , 超值让利 , 全场包邮 </p>
                </div>
                <!--活动列表-->
                <ul class="goodsBox">
                    <li class="box flex-wrap">
                        <img src="" alt="" class="left">
                        <div class="right">
                            <p class="goodsName">博牌BOPAI真皮男士皮带自动扣男士腰带头层牛皮裤带...</p>
                            <div class="goodsPrice">
                                <p>¥ <em>49</em><span>拼单省160元</span></p>
                                <p>8人拼 • 已拼<em>8989</em>件</p>
                            </div>
                            <div class="team flex-wrap flex-center">
                                <p>成团即送现金红包</p>
                                <div class="redBox"><p>全额红包</p><p>¥ 49</p></div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <v-footer :footer="'activity'"></v-footer>
        <!--弹窗-->
        <div class="md-mask" :class="{ 'active': md.mask}"></div>
        <!--规则-->
        <v-dialogue :isShow="md.rule" class="rule">
            <div class="content">
                <h2>活动规则</h2>
                <p class="title">活动名称: “开团邀新,送现金红包”</p>
                <p class="title">活动说明: </p>
                <ul class="description">
                    <li>1.选择活动进行的商品，点击红包，即可参与活动；</li>
                    <li>2.开团后，<em>邀请新用户参团</em>，达到商品指定人数后即成团，随后系统将自动将对应的</li>
                    <li>3.现金红包可作为本平台商品金额抵扣（发放的现金红包请务必在有效期内使用）。</li>
                </ul>
                <p class="title">特别提示: </p>
                <ul class="description">
                    <li>1.邀请的用户必须为新用户,即非平台现有注册用户；</li>
                    <li>2.每位用户每天最多参与8次开团，同设备、手机号 、拼实惠帐号视为同一用户；</li>
                    <li>3.本活动最终解释权归拼实惠所有。</li>
                </ul>
                <i class="ic_del pos" @click="closeMd('rule')"></i>
            </div>
        </v-dialogue>
    </div>
</template>

<script>
    import Vue from 'vue';
    import api from '@/fetch/api';
    import config from '@/config';
    import common from '@/assets/js/common';
    import footer from '../../components/vFoot';
    import header from '../../components/vHead';
    import dialogue from '../../components/dialogue';

    export default {
        data() {
            return {
                user: '',
                Msg: {
                    title: '活动中心'
                },
                md: {
                    mask: false,
                    rule: false,
                },
            }
        },
        created() {
            let self = this;

        },
        mounted() {

        },
        methods: {
            showMd: function (md) {
                this.md[md] = true;
                this.md.mask = true;
            },
            closeMd: function (md) {
                this.md[md] = false;
                this.md.mask = false;
            },
        },
        computed: {},
        filters: {},
        components: {//注册组件
            'v-footer': footer,
            'v-header': header,
            'v-dialogue': dialogue,
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import '../../assets/sass/activity/activity.scss';
</style>