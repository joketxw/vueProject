<template>
    <div id="joinSpell">
        <header class="flex-wrap flex-center">
            <i class="ic_arrow_left" @click="goBack()"></i>
            <img src="/static/images/home/goods.png" alt="">
            <div class="right">
                <i class="ic_home"></i>
                <i class="ic_share"></i>
            </div>
        </header>
        <div class="content flex-con-1" ref="wrapper" id="wrapper">
            <div class="scroll" id="scroll" ref="scroll">
                <div class="goods flex-wrap">
                    <img src="" alt="">
                    <div class="text">
                        <p>[亏完涨价!]［听歌打电话.蓝牙偏光眼镜］无线运动升级版智能蓝牙耳...</p>
                        <p>2人拼 • 已拼8989件</p>
                        <p>¥<em>49</em><span>拼单省350元</span></p>
                    </div>
                </div>
                <ul class="promise flex-wrap flex-center">
                    <li class="flex-con-1 flex-wrap flex-center flex-pack-center"><i class="ic_yes"></i><em>全场包邮</em></li>
                    <li class="flex-con-1 flex-wrap flex-center flex-pack-center"><i class="ic_yes"></i><em>7天退换</em></li>
                    <li class="flex-con-1 flex-wrap flex-center flex-pack-center"><i class="ic_yes"></i><em>48小时发货</em></li>
                    <li class="flex-con-1 flex-wrap flex-center flex-pack-center"><i class="ic_yes"></i><em>假一赔十</em></li>
                </ul>
                <div class="spelling">
                    <div class="picPer flex-wrap">
                        <div class="left">
                            <img src="/static/images/home/other.png" alt="">
                            <i class="spellStart"></i>
                        </div>
                        <img src="/static/images/home/other.png" alt="">
                    </div>
                    <p class="text">剩余<em>1</em>个名额，12:32:54.126后结束</p>
                    <button>一键拼单</button>
                    <p class="tips flex-wrap flex-center flex-pack-center"><span>*温馨提示：好友拼单 • 人满发货 • 人不满退款</span><i class="ic_about"></i></p>
                </div>
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
                <div class="footerTip">已经到底啦!只能帮到你这里啦！~</div>
            </div>
        </div>
        <!--弹窗-->
        <div class="md-mask" :class="{ 'active': md.mask}"></div>
        <!--拼单说明-->
        <v-dialogue :isShow="md.spellMenuText" class="spellMenuText">
            <div class="content">
                <h2>如何参与拼单</h2>
                <ul class="listBox">
                    <li class="box flex-wrap flex-center">发起拼单或参与别人的拼单</li>
                    <li class="box flex-wrap flex-center">在规定的时间内，邀请好友参与拼单</li>
                    <li class="box flex-wrap flex-center">达到拼单人数，立即给拼主和拼员发货</li>
                    <li class="box flex-wrap flex-center">未达到拼单人数，货款将自动退回帐户</li>
                </ul>
                <button @click="closeMd('spellMenuText')">我知道了</button>
                <i class="ic_del pos" @click="closeMd('spellMenuText')"></i>
            </div>
        </v-dialogue>
        <!--发起拼单-->
        <v-dialogue :isShow="md.startSpell" class="startSpell">
            <div class="content">
                <img src="" alt="">
                <p>婷婷</p>
                <p>2017-08-12 16:32:54发起拼单</p>
                <p>抢先成为第一个拼员吧~</p>
                <i class="ic_del pos" @click="closeMd('startSpell')"></i>
            </div>
        </v-dialogue>
    </div>
</template>
<script>
    import dialogue from '../../components/dialogue';
    export default {
        data(){
            return{
                md:{
                    spellMenuText:false,
                    mask:true,
                    startSpell:true,
                }
            }

        },
        components:{
            'v-dialogue':dialogue,
        },
        created(){

        },
        methods:{
            closeMd(md){
                this.md[md] = false;
                this.md.mask = false;
            },
            showMd(md){
                this.md[md] = true;
                this.md.mask = true;
            },
            goBack(){
                this.$router.go(-1);
            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    @import '../../assets/sass/home/joinSpell.scss';
</style>