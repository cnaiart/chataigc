"use strict";const e=require("../../../common/vendor.js"),u=require("../../../hooks/useCopy.js"),o=require("../../../stores/app.js"),r=require("../../../hooks/useLockFn.js"),s=require("../../../api/redeem_code.js");if(require("../../../api/app.js"),require("../../../utils/request/index.js"),require("../../../utils/request/http.js"),require("../../../enums/requestEnums.js"),require("../../../utils/request/cancel.js"),require("../../../stores/user.js"),require("../../../api/user.js"),require("../../../enums/constantEnums.js"),require("../../../mixins/share.js"),require("../../../api/task.js"),require("../../../utils/util.js"),require("../../../stores/navigationBarTitle.js"),require("../../../router/index.js"),require("../../../utils/cache.js"),require("../../../utils/auth.js"),require("../../../config/index.js"),!Array){(e.resolveComponent("u-notice-bar")+e.resolveComponent("u-input")+e.resolveComponent("u-button")+e.resolveComponent("u-empty")+e.resolveComponent("u-popup")+e.resolveComponent("tabbar"))()}Math||((()=>"../../../uni_modules/vk-uview-ui/components/u-notice-bar/u-notice-bar.js")+(()=>"../../../uni_modules/vk-uview-ui/components/u-input/u-input.js")+(()=>"../../../uni_modules/vk-uview-ui/components/u-button/u-button.js")+(()=>"../../../uni_modules/vk-uview-ui/components/u-empty/u-empty.js")+(()=>"../../../uni_modules/vk-uview-ui/components/u-popup/u-popup.js")+(()=>"../../../components/tabbar/tabbar.js"))();const t=e.defineComponent({__name:"redeem_code",setup(t){const i=o.useAppStore(),n=e.ref(""),a=e.ref(!1),p=e.ref({content:"",failure_time:"",id:"",sn:"",type:"",type_desc:"",valid_time:""}),l=e.computed((()=>i.getCardCodeConfig)),{isLock:c,lockFn:m}=r.useLockFn((async()=>{try{const e=await s.checkRedeemCode({sn:n.value});a.value=!0,p.value=e}catch(e){n.value="",console.log("查询卡密失败=>",e)}})),{isLock:d,lockFn:v}=r.useLockFn((async()=>{try{await s.useRedeemCode({sn:n.value}),a.value=!1,e.index.$u.toast("兑换成功"),n.value=""}catch(u){console.log("兑换卡密失败=>",u)}}));return(o,r)=>e.e({a:o.$theme.navColor,b:o.$theme.navBgColor,c:o.$theme.pageStyle,d:e.unref(l).is_show},e.unref(l).is_show?{e:e.p({padding:"0","bg-color":"none",mode:"horizontal","close-icon":!1,"volume-icon":!1,color:o.$theme.primaryColor,list:[e.unref(l).buy_site]}),f:e.o((o=>(e=>{const{copy:o}=u.useCopy();o(e)})(e.unref(l).buy_site)))}:{},{g:e.unref(l).is_open},e.unref(l).is_open?{h:e.o((e=>n.value=e)),i:e.p({placeholder:"请输入卡密编号",modelValue:n.value}),j:e.o(e.unref(m)),k:e.p({type:"primary",shape:"circle",size:"medium",customStyle:{width:"250rpx",height:"80rpx",fontSize:"30rpx"},loading:e.unref(c)})}:{l:e.p({text:"功能未开启"})},{m:e.t(p.value.type_desc),n:e.t(p.value.content),o:e.t(p.value.failure_time),p:e.t(p.value.valid_time),q:e.o(e.unref(v)),r:e.p({type:"primary",shape:"circle",size:"medium",customStyle:{width:"100%",height:"82rpx",fontSize:"30rpx"},loading:e.unref(d)}),s:e.o((e=>a.value=e)),t:e.p({mode:"center","border-radius":"24",modelValue:a.value})})}});wx.createPage(t);