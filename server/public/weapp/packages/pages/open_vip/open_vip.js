"use strict";const e=require("../../../common/vendor.js"),a=require("../../../common/assets.js"),n=require("../../../api/member.js"),t=require("../../../api/shop.js"),r=require("../../../stores/app.js"),o=require("../../../enums/appEnums.js"),u=require("../../../hooks/useLockFn.js"),i=require("../../../utils/pay/index.js"),s=require("../../../api/pay.js"),c=require("../../../utils/client.js"),l=require("../../../stores/user.js");if(require("../../../utils/request/index.js"),require("../../../utils/request/http.js"),require("../../../enums/requestEnums.js"),require("../../../utils/request/cancel.js"),require("../../../router/index.js"),require("../../../utils/cache.js"),require("../../../enums/constantEnums.js"),require("../../../config/index.js"),require("../../../api/app.js"),require("../../../utils/pay/alipay.js"),require("../../../utils/pay/balance.js"),require("../../../utils/pay/pay.js"),require("../../../utils/pay/wechat.js"),require("../../../utils/pay/e_wechat.js"),require("../../../utils/pay/e_alipay.js"),require("../../../api/user.js"),require("../../../mixins/share.js"),require("../../../api/task.js"),require("../../../utils/util.js"),require("../../../stores/navigationBarTitle.js"),require("../../../utils/auth.js"),!Array){(e.resolveComponent("u-navbar")+e.resolveComponent("u-sticky")+e.resolveComponent("u-image")+e.resolveComponent("u-empty")+e.resolveComponent("price")+e.resolveComponent("u-icon")+e.resolveComponent("u-radio")+e.resolveComponent("u-radio-group")+e.resolveComponent("u-rate")+e.resolveComponent("u-button")+e.resolveComponent("router-navigate")+e.resolveComponent("page-status")+e.resolveComponent("u-popup"))()}Math||((()=>"../../../uni_modules/vk-uview-ui/components/u-navbar/u-navbar.js")+(()=>"../../../uni_modules/vk-uview-ui/components/u-sticky/u-sticky.js")+(()=>"../../../uni_modules/vk-uview-ui/components/u-image/u-image.js")+(()=>"../../../uni_modules/vk-uview-ui/components/u-empty/u-empty.js")+(()=>"../../../components/price/price.js")+(()=>"../../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js")+(()=>"../../../uni_modules/vk-uview-ui/components/u-radio/u-radio.js")+(()=>"../../../uni_modules/vk-uview-ui/components/u-radio-group/u-radio-group.js")+(()=>"../../../uni_modules/vk-uview-ui/components/u-rate/u-rate.js")+(()=>"../../../uni_modules/vk-uview-ui/components/u-button/u-button.js")+(()=>"../../../node-modules/uniapp-router-next/components/router-navigate/router-navigate.js")+(()=>"../../../components/page-status/page-status.js")+(()=>"../../../uni_modules/vk-uview-ui/components/u-popup/u-popup.js")+p+m)();const p=()=>"../../../components/payment/check.js",m=()=>"./components/limitPop.js",d=e.defineComponent({__name:"open_vip",setup(p){const m=e.shallowRef(),d=e.useRouter(),v=e.ref(!1),f=e.ref(o.PageStatusEnum.LOADING),g=e.computed((()=>v.value?"#FFFFFF":"transparent")),h=e.reactive({orderId:0,from:"recharge",redirect:"/packages/pages/open_vip/open_vip",showCheck:!1,showPaySuccess:!1}),y=e.index.getSystemInfoSync(),_=e.ref({is_open:1,tips:"立即支付"}),b=e.ref(!1),w=e.ref(!1),k=e.ref(!0),j=e.ref({}),x=e.computed((()=>{var e;return console.log(j.value.member_benefits),(null==(e=j.value.member_benefits)?void 0:e.filter((e=>!!e.is_checked)))||[]})),q=()=>{k.value?K():d.navigateBack()},S=a=>{const{retrievePackage:n}=P;if(j.value=a,n.id==a.id){const{retrieve_amount:a,sell_price:t}=n;return P.discount=a,void(P.pay=e.max(e.max(e.add(e.bignumber(t),e.bignumber(-a)),0),0))}P.discount=0,P.pay=a.sell_price},C=e.computed((()=>v.value?"#000000":"#ffffff")),P=e.reactive({discount:0,pay:void 0,retrievePackage:{}}),z=e.ref([]),E=e.ref(1),I=async()=>{const e=await n.getMemberLists();z.value=e.lists;const a=z.value.find((e=>e.is_default))||z.value.length&&z.value[0];E.value=e.status,0===E.value&&(k.value=!1),S(a||{})},F=e.ref([]),B=async()=>{const e=await t.getDecorate({id:2});F.value=JSON.parse(e.data)},L=e.ref([]),A=e.ref([]),O=e.ref([]),W=e.ref(2),M=async()=>{const e=await s.getPayWay({from:"member"});O.value=e.lists;const a=O.value.find((e=>e.is_default))||O.value[0];W.value=null==a?void 0:a.pay_way},{getImageUrl:N}=r.useAppStore(),R=e.computed((()=>T("vip-top"))),U=e.computed((()=>T("vip-advantage"))),D=e.computed((()=>T("vip-notice"))),V=e.computed((()=>T("vip-evaluate"))),T=e=>F.value.find((a=>a.name===e)),X=l.useUserStore(),G=()=>{H=!0,k.value=!1,h.showPaySuccess=!0};let H=!1;const{isLock:J,lockFn:$}=u.useLockFn((async()=>{try{if(j.value.quota_tips_show)return k.value=!1,void m.value.open(j.value.quota_tips);await(async()=>{if(!j.value.id)return Promise.reject("请选择会员套餐");const e=await n.memberBuy({member_package_id:j.value.id,discount_amount:P.discount});return h.orderId=e.order_id,h.from=e.from,e})();const a=await(async()=>{if(0==X.userInfo.is_auth&&[o.ClientEnum.OA_WEIXIN,o.ClientEnum.MP_WEIXIN].includes(c.client)&&W.value==i.PayWayEnum.WECHAT)switch(c.client){case o.ClientEnum.OA_WEIXIN:return wechatOa.getUrl(UrlScene.BASE,"snsapi_base",{id:h.orderId,from:h.from}),Promise.reject();case o.ClientEnum.MP_WEIXIN:return(await e.index.login()).code}})(),t=await(async e=>{try{const a=await s.prepay({device:c.getClientString(),order_id:h.orderId,from:h.from,pay_way:W.value,redirect:h.redirect,code:e});return await i.pay.payment(a.pay_way,(null==a?void 0:a.config)||(null==a?void 0:a.payurl)||(null==a?void 0:a.qrcode))}catch(a){return Promise.reject(a)}})(a);t==o.PayStatusEnum.SUCCESS&&G()}catch(a){a&&e.index.$u.toast(a),console.log(a)}})),K=()=>{k.value=!1,H?d.navigateBack():b.value=!0},Q=()=>{const{retrieve_amount:e,is_retrieve:a}=j.value;e&&a?(w.value=!0,b.value=!1):d.navigateBack()},Y=()=>{const{retrieve_amount:a,sell_price:n}=j.value;P.discount=a,P.pay=e.max(e.add(e.bignumber(n),e.bignumber(-a)),0),P.retrievePackage=j.value,w.value=!1};return e.onLoad((async e=>{var a,t,r,u;((null==e?void 0:e.id)||e["amp;id"])&&(e.from||e["amp;from"])&&(h.orderId=(null==e?void 0:e.id)||e["amp;id"],h.from=e.from||e["amp;from"]),(null==e?void 0:e.checkPay)&&(h.showCheck=!0);try{await Promise.all([B(),I(),M()]),1==(null==(t=null==(a=V.value)?void 0:a.content)?void 0:t.enabled)&&await(async()=>{var e,a;const t=await n.getCommentLists({page_no:1,page_size:null==(a=null==(e=V.value)?void 0:e.content)?void 0:a.data});L.value=t.lists})(),1==(null==(u=null==(r=R.value)?void 0:r.content)?void 0:u.enabled)&&await(async()=>{const e=await n.getMemberBuyLog();A.value=e})(),f.value=o.PageStatusEnum.NORMAL}catch(i){f.value=o.PageStatusEnum.ERROR}})),e.onMounted((async()=>{-1!==y.system.indexOf("iOS")&&await(async()=>{try{_.value=await s.getIosPayConfig(),0==_.value.is_open&&(k.value=!1,e.index.showModal({title:"提示",content:_.value.tips,showCancel:!1,success:()=>e.index.navigateBack()}))}catch(a){console.log("获取支付设置错误=>",a)}})()})),e.onUnmounted((()=>{})),(n,t)=>e.e({a:n.$theme.pageStyle,b:_.value.is_open},_.value.is_open?e.e({c:e.p({"is-fixed":!1,title:"开通会员","back-icon-color":e.unref(C),"title-color":e.unref(C),background:{backgroundColor:e.unref(g)},"border-bottom":!1,"title-bold":!0,customBack:q}),d:e.o((e=>v.value=!0)),e:e.o((e=>v.value=!1)),f:e.p({"h5-nav-height":"0","bg-color":"transparent"}),g:e.unref(R)&&e.unref(R).content.enabled&&A.value.length},e.unref(R)&&e.unref(R).content.enabled&&A.value.length?{h:e.f(A.value,((a,n,t)=>({a:"98cfc9c0-2-"+t,b:e.p({width:"48",height:"48",src:a.avatar,alt:"","border-radius":"50%"}),c:e.t(a.nickname),d:e.t(a.member_package),e:n})))}:{},{i:a._imports_0,j:0===E.value},0===E.value?{k:e.p({text:"功能未开启"})}:e.e({l:e.f(z.value,((a,n,t)=>e.e({a:a.tag},a.tag?{b:e.t(a.tag)}:{},{c:e.t(a.name),d:"98cfc9c0-4-"+t,e:e.p({content:a.sell_price,mainSize:"60rpx",minorSize:"26rpx",fontWeight:"500",color:"#101010"}),f:a.lineation_price>0},a.lineation_price>0?{g:"98cfc9c0-5-"+t,h:e.p({content:a.lineation_price,mainSize:"24rpx",minorSize:"24rpx",color:"#999",lineThrough:!0})}:{},{i:j.value.id==a.id?1:"",j:a.id,k:e.o((e=>S(a)),a.id)}))),m:j.value.give_chat_number>0||j.value.give_draw_number>0},j.value.give_chat_number>0||j.value.give_draw_number>0?e.e({n:j.value.give_chat_number>0},j.value.give_chat_number>0?{o:e.t(j.value.give_chat_number)}:{},{p:j.value.give_draw_number>0},j.value.give_draw_number>0?{q:e.t(j.value.give_draw_number)}:{}):{},{r:P.discount>0},P.discount>0?{s:e.p({prefix:"-¥",content:P.discount,mainSize:"28rpx",minorSize:"28rpx",color:"#FF2C3C"})}:{},{t:e.f(O.value,((a,n,t)=>({a:"98cfc9c0-8-"+t+",98cfc9c0-7",b:e.p({size:48,name:a.icon}),c:e.t(a.name),d:e.t(a.extra),e:"98cfc9c0-9-"+t+",98cfc9c0-7",f:e.p({name:a.pay_way}),g:n,h:e.o((e=>W.value=a.pay_way),n)}))),v:e.o((e=>W.value=e)),w:e.p({"active-color":"#FF4747",modelValue:W.value}),x:e.unref(U)&&1==e.unref(U).content.enabled&&e.unref(x).length},e.unref(U)&&1==e.unref(U).content.enabled&&e.unref(x).length?{y:e.t(e.unref(U).content.name),z:e.f(e.unref(x),((a,n,t)=>({a:"98cfc9c0-10-"+t,b:e.p({width:"96",height:"96",src:e.unref(N)(a.image),alt:""}),c:e.t(a.name),d:e.t(a.describe),e:n})))}:{},{A:e.unref(D)&&1==e.unref(D).content.enabled},e.unref(D)&&1==e.unref(D).content.enabled?{B:e.t(e.unref(D).content.name),C:e.t(e.unref(D).content.data)}:{},{D:e.unref(V)&&1==e.unref(V).content.enabled},e.unref(V)&&1==e.unref(V).content.enabled?{E:e.f(L.value,((a,n,t)=>({a:"98cfc9c0-11-"+t,b:e.p({width:"64",height:"64",src:a.image,alt:"","border-radius":"50%"}),c:e.t(a.name),d:e.t(a.member_package),e:"98cfc9c0-12-"+t,f:e.o((e=>a.comment_level=e),a.id),g:e.p({disabled:!0,size:"28","active-color":"#FABB19",modelValue:a.comment_level}),h:e.t(a.comment_content),i:a.id})))}:{},{F:e.t(_.value.tips),G:""!==P.pay&&_.value.is_open},""!==P.pay&&_.value.is_open?{H:e.p({content:P.pay,mainSize:"32rpx",minorSize:"32rpx",color:"#000"})}:{},{I:e.o(e.unref($)),J:e.p({type:"error","hover-class":"none",shape:"circle","custom-style":{height:"82rpx",fontSize:"32rpx",background:"#FFC94D",color:"#000"},loading:e.unref(J),disabled:!_.value.is_open}),K:e.p({to:"/packages/pages/agreement/agreement?type=service"}),L:e.p({to:"/packages/pages/agreement/agreement?type=pay"})})):{},{M:e.p({status:f.value}),N:e.unref(U)&&1==e.unref(U).content.enabled&&e.unref(x).length},(e.unref(U)&&1==e.unref(U).content.enabled&&e.unref(x).length,{}),{O:e.unref(U)&&1==e.unref(U).content.enabled&&e.unref(x).length},e.unref(U)&&1==e.unref(U).content.enabled&&e.unref(x).length?{P:e.f(e.unref(x),((a,n,t)=>({a:"98cfc9c0-19-"+t+",98cfc9c0-18",b:e.p({width:"80",height:"80",src:e.unref(N)(a.image),alt:""}),c:e.t(a.name),d:n})))}:{},{Q:e.o(Q),R:e.p({type:"primary",shape:"circle","hover-class":"none","custom-style":{width:"100%",background:"#fff",color:"#000"}}),S:e.o((e=>b.value=!1)),T:e.p({type:"primary",shape:"circle","hover-class":"none","custom-style":{width:"100%",background:"linear-gradient(180.00deg, #ffc94d 0%, #ffb814 100%)",color:"#000"}}),U:e.o((e=>b.value=e)),V:e.p({mode:"center",closeable:!0,"mask-close-able":!1,"border-radius":"20",modelValue:b.value}),W:e.p({prefix:"",content:j.value.retrieve_amount,mainSize:"44rpx",minorSize:"44rpx",color:"#FF4B4B"}),X:e.p({content:j.value.retrieve_amount,mainSize:"80rpx",minorSize:"40rpx",color:"#8D5836"}),Y:e.o(Y),Z:e.p({type:"primary",shape:"circle","hover-class":"none","custom-style":{width:"400rpx",background:"linear-gradient(180.00deg, #ffe8cf 0%, #e1ab7a 100%)",color:"#6A3D15",height:"100rpx",fontWeight:600,fontSize:"40rpx",boxShadow:"0 3px 10px #0000001a"}}),aa:e.o((e=>w.value=e)),ab:e.p({mode:"center",closeable:!0,"mask-close-able":!1,"border-radius":"20","close-icon":"close-circle","close-icon-size":"50","close-icon-color":"#fff",customStyle:{background:"transparent"},modelValue:w.value}),ac:e.o(G),ad:e.o((e=>h.showCheck=e)),ae:e.p({from:h.from,"order-id":h.orderId,show:h.showCheck}),af:e.p({name:"checkmark-circle-fill",size:"100"}),ag:e.p({to:"/pages/index/index","nav-type":"reLaunch"}),ah:e.o((e=>h.showPaySuccess=e)),ai:e.p({"safe-area-inset-bottom":!0,"mask-close-able":!1,"border-radius":"14","z-index":899,round:!0,mode:"center",width:"600",modelValue:h.showPaySuccess}),aj:e.p({name:e.unref(a.icon_home),size:38}),ak:e.p({to:"/pages/index/index",navType:"reLaunch"}),al:k.value},k.value?{am:e.o(K)}:{},{an:e.sr(m,"98cfc9c0-32",{k:"limitPopRef"})})}});wx.createPage(d);
