"use strict";const e=require("../../../common/vendor.js"),r=require("../../../api/task.js"),t=require("../../../api/shop.js"),a=require("../../../enums/appEnums.js"),s=require("../../../hooks/useCopy.js"),n=require("../../../mixins/share.js"),i=require("../../../stores/user.js"),o=require("../../../stores/app.js"),u=require("../../../utils/client.js");if(require("../../../utils/request/index.js"),require("../../../utils/request/http.js"),require("../../../enums/requestEnums.js"),require("../../../utils/request/cancel.js"),require("../../../router/index.js"),require("../../../utils/cache.js"),require("../../../enums/constantEnums.js"),require("../../../config/index.js"),require("../../../utils/util.js"),require("../../../stores/navigationBarTitle.js"),require("../../../api/user.js"),require("../../../utils/auth.js"),require("../../../api/app.js"),!Array){(e.resolveComponent("u-icon")+e.resolveComponent("u-button")+e.resolveComponent("u-empty")+e.resolveComponent("page-status")+e.resolveComponent("tabbar"))()}Math||((()=>"../../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js")+(()=>"../../../uni_modules/vk-uview-ui/components/u-button/u-button.js")+(()=>"../../../uni_modules/vk-uview-ui/components/u-empty/u-empty.js")+(()=>"../../../components/page-status/page-status.js")+(()=>"../../../components/tabbar/tabbar.js"))();const d=e.defineComponent({__name:"task_center",setup(d){const{getImageUrl:l}=o.useAppStore(),w=e.ref(a.PageStatusEnum.LOADING),{copy:p}=s.useCopy(),c=()=>{e.index.navigateTo({url:"/packages/pages/drawing/drawing?type=1"})},g=e.ref({title:"",subTitle:"",content:[],originalContent:[]}),m=i.useUserStore(),{userInfo:h}=e.storeToRefs(m),y=async()=>{try{await(async()=>{g.value.originalContent=await r.getTask()})(),await(async()=>{const e=await t.getDecorate({id:10}),r=JSON.parse(e.data)[0].content,a={},s=[];for(const t of g.value.originalContent)delete t.image,a[t.type]=t;for(const t of null==r?void 0:r.data.filter((e=>e.show)))t.type in a&&s.push({...t,...a[t.type]});g.value.originalContent=[],g.value.content=s,g.value.title=r.title,g.value.subTitle=r.subTitle})(),w.value=a.PageStatusEnum.NORMAL}catch(e){console.error(e),w.value=a.PageStatusEnum.ERROR}};return e.onShow((()=>{y(),m.getUser()})),e.onPullDownRefresh((async()=>{try{await y(),await m.getUser()}catch(r){}e.index.stopPullDownRefresh()})),(r,t)=>e.e({a:r.$theme.navColor,b:r.$theme.navBgColor,c:r.$theme.pageStyle,d:e.t(e.unref(h).balance||0),e:g.value.content.length},g.value.content.length?{f:e.t(g.value.title),g:e.t(g.value.subTitle),h:e.f(g.value.content,((r,t,a)=>e.e({a:"e0e8a680-1-"+a+",e0e8a680-0",b:e.p({name:e.unref(l)(r.image),size:120}),c:e.t((null==r?void 0:r.customName)||r.name),d:1==r.type},1==r.type?e.e({e:r.rewards},r.rewards?{f:e.t(r.rewards)}:{},{g:r.rewards&&r.draw_rewards},(r.rewards&&r.draw_rewards,{}),{h:r.draw_rewards},r.draw_rewards?{i:e.t(r.draw_rewards)}:{}):{},{j:2==r.type},2==r.type?e.e({k:r.rewards},r.rewards?{l:e.t(r.rewards)}:{},{m:r.rewards&&r.draw_rewards},(r.rewards&&r.draw_rewards,{}),{n:r.draw_rewards},r.draw_rewards?{o:e.t(r.draw_rewards)}:{}):{},{p:3==r.type},3==r.type?e.e({q:r.rewards},r.rewards?{r:e.t(r.rewards)}:{},{s:r.rewards&&r.draw_rewards},(r.rewards&&r.draw_rewards,{}),{t:r.draw_rewards},r.draw_rewards?{v:e.t(r.draw_rewards)}:{}):{},{w:4==r.type},4==r.type?e.e({x:r.rewards},r.rewards?{y:e.t(r.rewards)}:{},{z:r.rewards&&r.draw_rewards},(r.rewards&&r.draw_rewards,{}),{A:r.draw_rewards},r.draw_rewards?{B:e.t(r.draw_rewards)}:{}):{},{C:e.t(r.num),D:e.t(r.max),E:e.t(2==r.type?"人":"次"),F:4===r.type},4===r.type?{G:e.o(c,t),H:"e0e8a680-2-"+a+",e0e8a680-0",I:e.p({type:"primary",shape:"circle",size:"medium",customStyle:{padding:"0 24rpx",height:"56rpx"}})}:{J:e.o((t=>(r.type,void u.handleClientEvent({OA_WEIXIN:()=>{e.index.showModal({title:"温馨提示",content:"点击右上角“...”，分享给好友",showCancel:!1})},H5:async()=>{const r=await n.generateSharePath(!0);p(r),e.index.showModal({title:"温馨提示",content:"已经复制到剪贴板，请转发给好友",showCancel:!1})},ANDROID:async()=>{const r=o.useAppStore(),t=await n.createShareOptions({...r.getShareConfig,...r.getWebsiteConfig}),a=await n.generateSharePath(!0);e.index.share({provider:"weixin",scene:"WXSceneSession",type:0,href:a,title:t.title,imageUrl:t.img_url,success:e=>{console.log("分享成功")},fail:r=>{e.index.$u.toast(r.errMsg)}})},IOS:async()=>{const r=o.useAppStore(),t=await n.createShareOptions({...r.getShareConfig,...r.getWebsiteConfig}),a=await n.generateSharePath(!0);e.index.share({provider:"weixin",scene:"WXSceneSession",type:0,href:a,title:t.title,imageUrl:t.img_url,success:e=>{console.log("分享成功")},fail:r=>{e.index.$u.toast(r.errMsg)}})}}))),t),K:"e0e8a680-3-"+a+",e0e8a680-0",L:e.p({type:"primary",shape:"circle",size:"medium",customStyle:{padding:"0 24rpx",height:"56rpx"},"open-type":"share"})},{M:t})))}:{},{i:e.p({text:"加载出错～"}),j:e.p({status:w.value})})}});wx.createPage(d);