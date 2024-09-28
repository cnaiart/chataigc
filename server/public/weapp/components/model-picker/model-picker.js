"use strict";const e=require("../../common/vendor.js"),r=require("../../api/chat.js"),n=require("../../stores/user.js"),u=require("../../stores/app.js");if(require("../../utils/request/index.js"),require("../../utils/request/http.js"),require("../../enums/requestEnums.js"),require("../../utils/request/cancel.js"),require("../../router/index.js"),require("../../utils/cache.js"),require("../../enums/constantEnums.js"),require("../../config/index.js"),require("../../api/user.js"),require("../../mixins/share.js"),require("../../api/task.js"),require("../../utils/util.js"),require("../../stores/navigationBarTitle.js"),require("../../utils/auth.js"),require("../../api/app.js"),!Array){(e.resolveComponent("router-navigate")+e.resolveComponent("u-button")+e.resolveComponent("u-icon")+e.resolveComponent("u-popup"))()}Math||((()=>"../../node-modules/uniapp-router-next/components/router-navigate/router-navigate.js")+(()=>"../../uni_modules/vk-uview-ui/components/u-button/u-button.js")+(()=>"../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js")+(()=>"../../uni_modules/vk-uview-ui/components/u-popup/u-popup.js"))();const o=e.defineComponent({__name:"model-picker",props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(o,{emit:t}){const i=o,s=e.computed({get:()=>i.modelValue,set(e){t("update:modelValue",e)}}),a=n.useUserStore(),l=u.useAppStore(),{userInfo:m}=e.storeToRefs(a),d=e.reactive({loading:!0,show:!1,index:0,current:{balance:1,key:"",member_free:!0,model:"",default:!1},modelList:[]});return e.watch((()=>d.current),(e=>{s.value=null==e?void 0:e.key})),(async()=>{try{const e=await r.getChatModelApi();d.modelList=e,d.index=e.findIndex((e=>e.default)),-1===d.index&&(d.index=0),d.current=e[d.index]}catch(e){console.log("获取聊天模型数据错误=>",e)}finally{d.loading=!1}})(),(r,n)=>{var u,o,t,i,p;return e.e({a:e.unref(a).isLogin&&!d.loading},e.unref(a).isLogin&&!d.loading?e.e({b:e.unref(l).getIsShowVip},e.unref(l).getIsShowVip?{c:e.t(e.unref(m).is_member&&1!==e.unref(m).member_expired?e.unref(m).member_package_name:"开通会员"),d:e.p({to:"/packages/pages/open_vip/open_vip"}),e:e.p({type:"primary",plain:!0,size:"medium","custom-style":{background:"transparent !important"}})}:{},{f:!d.modelList.length},d.modelList.length?{}:e.e({g:e.unref(m).is_member&&1!==e.unref(m).member_expired},(e.unref(m).is_member&&e.unref(m).member_expired,{})),{h:d.modelList.length},d.modelList.length?e.e({i:e.t(d.current.alias),j:!(null==(u=null==d?void 0:d.current)?void 0:u.member_free)},(null==(o=null==d?void 0:d.current)?void 0:o.member_free)?{}:e.e({k:null==(t=null==d?void 0:d.current)?void 0:t.balance},(null==(i=null==d?void 0:d.current)?void 0:i.balance)?{l:e.t(null==(p=null==d?void 0:d.current)?void 0:p.balance)}:{}),{m:e.p({name:"arrow-down",size:"24rpx"}),n:e.o((e=>d.show=!0))}):{}):{},{o:e.f(d.modelList,((r,n,u)=>e.e({a:e.t(r.alias),b:!r.member_free},r.member_free?{}:e.e({c:r.balance},r.balance?{d:e.t(r.balance)}:{}),{e:e.unref(s)==r.key?1:"",f:"4556e5d4-4-"+u+",4556e5d4-3",g:e.unref(s)!==r.key?1:"",h:r.key,i:e.unref(s)==r.key?1:"",j:e.o((e=>(e=>{d.current=e,d.show=!1})(r)),r.key)}))),p:e.p({name:"checkmark",size:"24rpx"}),q:e.o((e=>d.show=e)),r:e.p({mode:"bottom","border-radius":"14","safe-area-inset-bottom":!0,height:"70%",closeable:!0,modelValue:d.show})})}}});wx.createComponent(o);