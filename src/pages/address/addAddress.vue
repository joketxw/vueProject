<template>
    <div class="flex-wrap main">
        <v-header :Msg="Msg" @rightTap="save"></v-header>
        <div class="content flex-con-1" ref="wrapper" id="wrapper">
            <div class="scroll" id="scroll" ref="scroll">
                <div class="flex-wrap text-left">
                   <span>收货人</span>
                   <input type="text" placeholder="填写姓名" class="name flex-con-1">
                </div>
                <div class="flex-wrap text-left">
                    <span>联系电话</span>
                    <input type="number" placeholder="填写手机号码" class="name flex-con-1">
                </div>
                <div class="flex-wrap text-left-address" @click="visible=true">
                    <span>所在地区</span>
                    <div class="address addressColor"v-if="isAddress">{{address.name}}<i class="ic_arrow_right"></i></div>
                    <div class="address" v-else>请选择<i class="ic_arrow_right"></i></div>
                </div>
                <div class="flex-wrap text-left-address" @click="showTown">
                    <span>所在街道</span>
                    <div class="address addressColor" v-if="isTown">{{townAddress}}<i class="ic_arrow_right"></i></div>
                    <div class="address" v-else>请选择<i class="ic_arrow_right"></i></div>
                </div>
                <textarea placeholder="请填写详细地址，不少于5个字" name="" id="addressDetail" rows="4"></textarea>
                <div class="flex-wrap text-left-address" style="margin-top: 0.2rem">
                    <span>设为默认</span>
                    <mt-switch v-model="value"></mt-switch>
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
        <!--地区-->
        <picker v-model="visible" :data-items="items" @change="onValuesChange">
            <div class="top-content" slot="top-content">
                <div class="title">
                    <span @click="visible=false">取消</span>
                    <span>选择地区</span>
                    <span @click="confirm(0)">确定</span>
                </div>
            </div>
            <div class="bottom-content" slot="bottom-content"></div>
        </picker>
        <!--街道-->
        <picker v-model="town" :data-items="items1" @change="onTownChange">
            <div class="top-content" slot="top-content">
                <div class="title">
                    <span @click="town=false">取消</span>
                    <span>选择街道</span>
                    <span @click="confirm(1)">确定</span>
                </div>
            </div>
            <div class="bottom-content" slot="bottom-content"></div>
        </picker>
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
  import { Switch,MessageBox } from 'mint-ui';
  import picker from 'vue-3d-picker';
  Vue.component(picker.name, picker);
  Vue.component(Switch.name, Switch);
  export default {
    data() {
      return {
        user: '',
        Msg: {
          title: '添加新地址',
          rightMsg:'保存',
        },
        md: {
          mask: false,
          rule: false,
        },
        value:true,
        town:false,
        isTown:false,
        visible: false,
        isAddress:false,
        items: [
          {
            name:'name',
            values: [],
          }, {
            name:'name',
            values: [],
          }, {
            name:'name',
            values: [],
          }
        ],
        items1: [
          {
            name:'name',
            values: [],
          }
        ],
        cityBox:{
          type:'province',
          id:'',
        },
        firstValue:'',
        firstValue1:'',
        address:{},//地址
        townAddress:{},//街道的地址
      }
    },
    created() {
      let self = this;
      self.selectCity(0);
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
      showTown:function () {
        let self = this;
        if(this.isAddress==true){
          api.selectRegion('town',self.address.townId).then((response)=>{
            if(response.data==null||response.data==undefined||response.data==""){
              MessageBox('温馨提示', '暂无所在街道');
            }else {
              self.town=true;
              self.items1[0].values=response.data;
            }

          })
        }else {
          MessageBox('温馨提示', '请先选择所在区域');
        }

      },
      confirm:function (type) {
        if(type==0){
          this.visible=false;
          this.isAddress=true;
        }else {
          this.town=false;
          this.isTown=true;
        }

      },
      onValuesChange(values0,values1,values2) {
        let self = this;
         if(values0!=self.firstValue){
           self.cityBox.type='city';
           self.cityBox.id=values0.id;
           self.selectCity(1);
           self.firstValue=values0;
         }else if(values1!=self.firstValue1){
           self.cityBox.type='county';
           self.cityBox.id=values1.id;
           self.selectCity(2);
           self.firstValue1=values1;
         }
         if(values2){
           self.address.name=values0.name+values1.name+values2.name;
           self.address.townId=values2.id;
         }

      },
      onTownChange:function (value) {
        if(value){
          this.townAddress=value.name;
        }

      },
      selectCity:function (i) {
        let self = this;
        api.selectRegion(self.cityBox.type,self.cityBox.id).then((response)=>{
          self.items[i].values=response.data;
        })
      },
      save:function () {
        console.log("保存")
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
    @import '../../assets/sass/address/addAddress.scss';
</style>