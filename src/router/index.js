import Vue from 'vue'
import Router from 'vue-router'

const home = r => require.ensure([], () => r(require('@/pages/home/home')), 'home');
const goodsDetail = r => require.ensure([], () => r(require('@/pages/home/goodsDetail')), 'home');
const goodsAssess = r => require.ensure([], () => r(require('@/pages/home/goodsAssess')), 'home');
const picDetail = r => require.ensure([], () => r(require('@/pages/home/picDetail')), 'home');
const joinSpell = r => require.ensure([], () => r(require('@/pages/home/joinSpell')), 'home');
const personal = r => require.ensure([], () => r(require('@/pages/personal/personal')), 'personal');
const activity = r => require.ensure([], () => r(require('@/pages/activity/activity')), 'activity');
const joinRecord = r => require.ensure([], () => r(require('@/pages/activity/joinRecord')), 'activity');
const spellDetail = r => require.ensure([], () => r(require('@/pages/activity/spellDetail')), 'activity');
const logisticMsg = r => require.ensure([], () => r(require('@/pages/personal/logisticMsg')), 'personal');
const orderDeatil = r => require.ensure([], () => r(require('@/pages/personal/orderDeatil')), 'personal');
const myOrder = r => require.ensure([], () => r(require('@/pages/personal/myOrder')), 'myOrder');
const confirmOrder = r => require.ensure([], () => r(require('@/pages/personal/confirmOrder')), 'confirmOrder');
const address = r => require.ensure([], () => r(require('@/pages/address/index')), 'address');
const addAddress = r => require.ensure([], () => r(require('@/pages/address/addAddress')), 'address');
const applyRefund = r => require.ensure([], () => r(require('@/pages/applyRefund/index')), 'applyRefund');
const refundDetail = r => require.ensure([], () => r(require('@/pages/applyRefund/refundDetail')), 'applyRefund');

Vue.use(Router);

const router = new Router({
    routes: [
        // {
        // 	path: '/',
        // 	redirect: '/home'
        // },
        {
            path: '/',
            component: home
        },
        {
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path: '/goodsDetail',
            name: 'goodsDetail',
            component: goodsDetail
        },
        {
            path: '/personal',
            name: 'personal',
            component: personal
        },
        {
            path: '/goodsAssess',
            name: 'goodsAssess',
            component: goodsAssess
        },
        {
            path: '/activity',
            name: 'activity',
            component: activity
        },
        {
            path: '/myOrder',
            name: 'myOrder',
            component: myOrder
        },
        {
            path: '/picDetail',
            name: 'picDetail',
            component: picDetail
        },
        {
            path: '/confirmOrder',
            name: 'confirmOrder',
            component: confirmOrder
        },
        {
            path: '/joinSpell',
            name: 'joinSpell',
            component: joinSpell
        },
        {
            path: '/joinRecord',
            name: 'joinRecord',
            component: joinRecord
        },
        {
            path: '/spellDetail',
            name: 'spellDetail',
            component: spellDetail
        },
        {
            path: '/logisticMsg',
            name: 'logisticMsg',
            component: logisticMsg
        },
        {
            path: '/orderDeatil',
            name: 'orderDeatil',
            component: orderDeatil
        },
        {
        path: '/address',
        name: 'address',
        component: address
        },
      {
        path: '/addAddress',
        name: 'addAddress',
        component: addAddress
      },
      {
        path: '/applyRefund',
        name: 'applyRefund',
        component: applyRefund
      },
      {
        path: '/refundDetail',
        name: 'refundDetail',
        component: refundDetail
      },
    ]
})

// 判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
    if (to.matched.some(res => res.meta.requireAuth)) { // 判断是否需要登录权限
        if (localStorage.getItem('openid')) { // 判断是否登录
            next()
        } else { // 没登录则跳转到登录界面
            next({
                path: '/home',
                query: {redirect: to.fullPath}
            });
            window.location.reload()
        }
    } else {
        next()
    }
});
export default router