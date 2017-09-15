
import * as type from './mutation-types.js'

export default {
    //更新用户信息数据 渲染视图
    setUserInfo({commit},data) {
        commit(type.GET_USERINFO, data);
    },
}
