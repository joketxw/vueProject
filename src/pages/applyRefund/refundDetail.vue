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
                <div class="flex-wrap reason flex-center">
                    <span>货物状态</span>
                    <span>请选择<i class="ic_arrow_right"></i></span>
                </div>
                <div class="flex-wrap reason flex-center">
                    <span>退款原因</span>
                    <span>请选择<i class="ic_arrow_right"></i></span>
                </div>
                <div class="flex-wrap reason flex-center">
                    <span>退款金额:<em>¥ 49.00</em></span>
                </div>
                <div class="state">
                    <textarea rows="7"></textarea>
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
          title: '申请退款',
          rightMsg: '提交',
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
    @import '../../assets/sass/applyRefund/refundDetail.scss';
</style>