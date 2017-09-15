<template>
    <div class="main flex-wrap">
        <div class="content flex-con-1" ref="wrapper" id="wrapper">
            <div class="scroll" id="scroll" ref="scroll">
            	<div class="addressBox flex-wrap flex-center">
            		<img class="zhuangShi" src="/static/images/personal/zhuangShi.png">
            		<div class="leftPic"></div>
            		<div class="centerBox">
            			<div class="centerCont1 flex-wrap">
            				<div>收货人:张西卡</div>
            				<div>13490941024</div>
            			</div>
            			<div class="centerCont2">收货地址:广东省深圳市龙华新区广新公寓仲雅苑6栋13楼1309室</div>
            		</div>
            		<div class="ic_arrow_right"></div>
            	</div>
            	<div class="contBox flex-wrap">
            		<img class="goodsPic" src="/static/images/personal/goodsPic.png">
            		<div class="contDiv">
            			<div class="cont1">[亏完涨价!]［听歌打电话.蓝牙偏光眼镜］无线运动升级版智能蓝牙耳...</div>
            			<div class="cont2">[亏完涨价!]［听歌打电话.蓝牙偏光眼镜］无线运动升级版智能蓝牙耳...</div>
            		    <div class="sevenDay">七天退换</div>
            		    <div class="price flex-wrap"><div><span class="priceL">¥</span>49</div><div class="num">x1</div></div>
            		</div>
            	</div>
            	<div class="quantityPurchased flex-wrap flex-center"><div class="quantityPurchasedT">购买数量</div>
            	    <div class="flex-wrap flex-center">
            	    	<div class="jian">-</div>
            	    	<input type="text" value="1" class="buyNum"/>
            	    	<div class="jia">+</div>
            	    </div>
            	</div>
            	<div class="coupon flex-wrap flex-center">
            		<div class="couponT">优惠券</div>
            		<div class="flex-wrap"><div class="redT">满188减8</div><div class="ic_arrow_right"></div></div>
            	</div>
            	<div class="settlement">
            		<input type="button" value="立即购买" class="settlementBtn"/>
            		<div class="settlementCont">
            			<div class="settlementContOne">实付款 : <span class="settlementContOneRed">¥ 49</span></div>
            			<div class="settlementContTwo">免运费</div>
            		</div>
            	</div>
            </div>
        </div>
    </div>
</template>

<script>

  export default {
    data() {
      return {
         showMenu:"1",
      }
    },
    created(){

    },
    mounted(){


    },
    methods:{
            changeMenu(key) {
				
				this.showMenu=key;
				
			},
    },
    computed: {

    },
    filters:{

    },
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import '../../assets/sass/personal/confirmOrder.scss';
</style>