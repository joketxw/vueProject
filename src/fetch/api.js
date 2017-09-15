import axios from 'axios'
import config from '../config'

// axios 配置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

export default {
   login(openId){
      return axios.get(config.ip.user+'/login', {
        params: {
          openId: openId,
          loginType: 2,
        }
      });
    },
  //选择城市
  selectRegion(type,id){
    return axios.get('http://192.168.1.11:8080/portal/address/selectRegion', {
      params: {
        type: type,
        id:id
      }
    });
  }

}


