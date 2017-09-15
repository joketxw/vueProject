
export default {
	setLocal : function(name,val){
		localStorage.setItem(name,val)
	},
	getLocal : function(name){
	   return localStorage.getItem(name)
	},
	setJsonLocal　:　function(name,json){
		localStorage.setItem(name,JSON.stringify(json))
	},
	getJsonLocal : function(name){
		if(!JSON.parse(localStorage.getItem(name))){
			return ''
		}else{
			return JSON.parse(localStorage.getItem(name))
		}
	},
	isMobile : function(mobileNum){
	    return (new RegExp(/^1[3|4|5|6|7|8|9][0-9]\d{8}$/)).test(mobileNum)
	},
	getUrlParam : function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURI(r[2]);
        return null;
    },
    clearActive : function (arr){
    	for(let i=0;i<arr.length;i++){
    		arr[i].active = false
    	}
    	return arr
    },
    getArrItem : function(arr,item){
    	for(let i = 0;i < arr.length;i++){
    		if(arr[i].active){
    			return arr[i][item]
    		}
    	}
    },
    isElementInViewport : function(el) {
		  var rect = el.getBoundingClientRect();
		  return (
		    rect.top >= 0 && rect.left >= 0 &&
		    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		  );
	},
   contains(arr, obj) {
      var i = arr.length;
      while (i--) {
        if (arr[i] === obj) {
          return true;
        }
      }
    return false;
   },
    shareContent : function(_json){

    	var u = navigator.userAgent;
    	var title = _json.title,
    		content = _json.content,
    		shareUrl = _json.shareUrl,
    		pic = 'http://k.kuaidian.cn/images/kd.png';
    	if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
            window.ncp.shareContent(content,content,shareUrl,title,pic);
        } else if (u.indexOf('iPhone') > -1) { //苹果手机
        	var data = {
        		data : {
        			'image' : pic,
        			'title' : title,
        			'content' : content,
        			'shareUrl' : shareUrl
        		}
        	}
            var url = "url:shareContent:" + JSON.stringify(data);
            window.location = url;
        }
    },
    weixinShareImage : function(url){
    	var u = navigator.userAgent;
    	if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
            window.ncp.weixinShareContent(url)
        }else{
        	var data = {
        		img:url,
        		saveImg:''
        	};
        	var url = "url:shareImg:" + JSON.stringify(data);
        	window.location = url;
        }
    },
    saveImage: function(url,cb){
    	var u = navigator.userAgent;
        var savePath = "/tencent/MicroMsg/Weixin/";
        if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
            window.ncp.toWeChatScan(url,savePath)
            cb()
        }else{
          var data = {img:url,saveImg:"save"};
        	var url = "url:shareImg:" + JSON.stringify(data);
        	window.location = url;
        }
    },
    /*************** 调起 微信 支付 *****************/
    toWxPay :function(wxJson,code,weixinUrl,fid) {

        var u = navigator.userAgent;
        if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
            if(code){
                window.ncp.toWxPay(wxJson);
            }else {
                window.ncp.weifutongPay(wxJson,weixinUrl,fid);
            }
        } else if (u.indexOf('iPhone') > -1) {
            var iosUrl = "url:toWxPay:" + wxJson;
            document.location = iosUrl;
        }

    },
    //微信授权登录
    goToLogin: function (){//调用app微信授权登录

        var u = navigator.userAgent;
        if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {//安卓手机
            window.ncp.wxLogin();
            setTimeout(function(){
            	 window.ncp.wxLogin();
            },100000)
        } else if (u.indexOf('iPhone') > -1) {//苹果手机
            window.location = "url:gotoLogin";
        }
    },
    /*************** 调起 支付宝 支付 *****************/
    toAlipay : function(data,returnUrl){

        var u = navigator.userAgent;
        if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {//安卓手机
            window.ncp.retureurl(returnUrl);
        }
        var Alipay = document.createElement("div");
        Alipay.setAttribute("id",'AlipayPay');
        Alipay.innerHTML = data;
        document.getElementById("app").appendChild(Alipay);
        document.forms['alipaysubmit'].submit();
        Alipay.innerHTML = '';

    },
}

