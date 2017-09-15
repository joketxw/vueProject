<template>
    <div class="flex-wrap main">
        <v-header :Msg="Msg"></v-header>
        <div class="content flex-con-1" ref="wrapper" id="wrapper">
            <div class="scroll" id="scroll" ref="scroll">
                <div class="flex-wrap goodsBox flex-center">
                    <img src="/static/images/personal/goodsPic.png" alt="">
                    <div class="goodsInfo">
                        <p>[亏完涨价!]［听歌打电话.蓝牙偏光眼镜］无线运动升级版智能蓝...</p>
                        <p>规格:中号方形/Y16211黑灰C1【领券立减 5元，再送夜视夹片】</p>
                    </div>
                </div>
                <div class="flex-wrap flex-center boxs">
                    <div class="flex-wrap left">
                        <i class="ic_refund"></i>
                        <div class="boxsInfo">
                            <p>仅退款</p>
                            <p>未收到货(包含未签收)，或卖家协商同意前提下</p>
                        </div>
                    </div>
                    <i class="ic_arrow_right"></i>
                </div>
                <div class="flex-wrap flex-center boxs">
                    <div class="flex-wrap left">
                        <div class="icon">退</div>
                        <div class="boxsInfo">
                            <p>退货退款</p>
                            <p>已收到货，需要退换已收到的货物</p>
                        </div>
                    </div>
                    <i class="ic_arrow_right"></i>
                </div>
                <div class="flex-wrap flex-center boxs">
                    <div class="flex-wrap left">
                        <div class="icon">换</div>
                        <div class="boxsInfo">
                            <p>换货</p>
                            <p>商品存在质量问题，联系卖家协商换货</p>
                        </div>
                    </div>
                    <i class="ic_arrow_right"></i>
                </div>
            </div>
        </div>
        <!--弹窗-->
        <div class="md-mask" :class="{ 'active': md.mask}"></div>
        <!---->
        <v-dialogue :isShow="md.rule" class="rule">
            <div class="content">

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
          title: '选择服务类型'
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
      'v-header': header,
      'v-dialogue': dialogue,
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import '../../assets/sass/applyRefund/index.scss';
</style>