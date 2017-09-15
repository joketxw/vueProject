import * as type from './mutation-types.js'

export default {

    //更新信息数据
    [type.GET_USERINFO](state, data){
        state.user = data;
    },
}
