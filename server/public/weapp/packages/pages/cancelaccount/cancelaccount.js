"use strict";const e=require("../../../common/vendor.js"),r=require("../../../common/assets.js"),u=require("../../../api/user.js");if(require("../../../utils/request/index.js"),require("../../../utils/request/http.js"),require("../../../enums/requestEnums.js"),require("../../../utils/request/cancel.js"),require("../../../stores/user.js"),require("../../../enums/constantEnums.js"),require("../../../mixins/share.js"),require("../../../api/task.js"),require("../../../utils/util.js"),require("../../../stores/navigationBarTitle.js"),require("../../../router/index.js"),require("../../../utils/cache.js"),require("../../../stores/app.js"),require("../../../api/app.js"),require("../../../utils/auth.js"),require("../../../config/index.js"),!Array){(e.resolveComponent("u-input")+e.resolveComponent("u-button"))()}Math||((()=>"../../../uni_modules/vk-uview-ui/components/u-input/u-input.js")+(()=>"../../../uni_modules/vk-uview-ui/components/u-button/u-button.js"))();const s=e.defineComponent({__name:"cancelaccount",setup(s){const t=e.useRouter(),i=e.ref(""),n=async()=>{(await e.index.showModal({title:"确定注销该账号吗？",confirmText:"注销",confirmColor:"#FF2C3C"})).confirm&&(await u.cancelled({cancelled_remark:i.value}),t.reLaunch("/pages/index/index"))};return(u,s)=>({a:u.$theme.navColor,b:u.$theme.navBgColor,c:u.$theme.pageStyle,d:r._imports_0$2,e:e.o((e=>i.value=e)),f:e.p({type:"textarea",height:200,"auto-height":!0,modelValue:i.value}),g:e.o(n),h:e.p({type:"primary","custom-style":{width:"700rpx",height:"100rpx",borderRadius:"200rpx",color:"black"}})})}});wx.createPage(s);
