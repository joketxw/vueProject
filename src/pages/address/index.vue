<template>
    <div class="flex-wrap main">
        <v-header :Msg="Msg"></v-header>
        <div class="content flex-con-1" ref="wrapper" id="wrapper">
            <div class="scroll" id="scroll" ref="scroll">
                <ul>
                    <li>
                        <div class="top-con"><span>张西卡</span><span>13490941024</span></div>
                        <div class="middle-con">广东省深圳市龙华新区广新公寓仲雅苑6栋13楼1309室</div>
                        <div class="flex-wrap bottom-con">
                            <div class="default"><i class="ic_default_yes"></i>设为默认地址</div>
                            <div class="default-right">
                                <span>编辑</span>
                                <span>删除</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="top-con"><span>张西卡</span><span>13490941024</span></div>
                        <div class="middle-con">广东省深圳市龙华新区广新公寓仲雅苑6栋13楼1309室</div>
                        <div class="flex-wrap bottom-con">
                            <div class="default"><i class="ic_default_yes"></i>设为默认地址</div>
                            <div class="default-right">
                                <span>编辑</span>
                                <span>删除</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <router-link tag="footer" to="/addAddress">添加新地址</router-link>
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
          title: '管理收货地址'
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
    @import '../../assets/sass/address/index.scss';
</style>