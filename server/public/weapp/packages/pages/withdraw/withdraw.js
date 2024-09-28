"use strict";const e=require("../../../common/vendor.js"),a=require("../../../api/promotion.js"),t=require("../../../stores/app.js"),o=require("../../../stores/user.js");if(require("../../../utils/request/index.js"),require("../../../utils/request/http.js"),require("../../../enums/requestEnums.js"),require("../../../utils/request/cancel.js"),require("../../../router/index.js"),require("../../../utils/cache.js"),require("../../../enums/constantEnums.js"),require("../../../config/index.js"),require("../../../api/app.js"),require("../../../api/user.js"),require("../../../mixins/share.js"),require("../../../api/task.js"),require("../../../utils/util.js"),require("../../../stores/navigationBarTitle.js"),require("../../../utils/auth.js"),!Array){(e.resolveComponent("u-icon")+e.resolveComponent("u-image")+e.resolveComponent("u-button"))()}Math||((()=>"../../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js")+(()=>"../../../uni_modules/vk-uview-ui/components/u-image/u-image.js")+r+(()=>"../../../uni_modules/vk-uview-ui/components/u-button/u-button.js")+u)();const u=()=>"./component/acount-full.js",r=()=>"../../components/uploader/uploader.js",n=e.defineComponent({__name:"withdraw",setup(u){const r=e.useRouter();t.useAppStore(),o.useUserStore();const n=e.ref(!1),i=e.ref(0),l=e.ref([]),s=e.ref({open:1,explain:""}),c=e.reactive({money:"",account:"",real_name:"",type:"1",money_qr_code:""}),p=e.ref({account:"",real_name:""}),m=e.ref({account:"",real_name:""}),d=async({detail:a})=>{let t=a.value.replace(/(^\s*)|(\s*$)/g,"");if(!t)return void(c.money="");t=t.replace(/[^\d.]/g,""),t=t.replace(/^\./g,""),t=t.replace(".","$#$").replace(/\./g,"").replace("$#$","."),t=t.replace(/^(\-)*(\d+)\.(\d\d).*$/,"$1$2.$3"),await e.nextTick$1(),c.money=t},v=e.ref(),y=async a=>{c.type=a,await e.nextTick$1(),1!=a&&4!=a||Object.keys(p.value).map((e=>{c[e]=p.value[e]})),3==a&&Object.keys(m.value).map((e=>{c[e]=m.value[e]}))},_=()=>{var e,a,t,o;p.value.account=null==(e=s.value)?void 0:e.ali_acccount,p.value.real_name=null==(a=s.value)?void 0:a.ali_name,m.value.account=null==(t=s.value)?void 0:t.wechat_acccount,m.value.real_name=null==(o=s.value)?void 0:o.wechat_name},w=async e=>{console.log(e),c.money_qr_code=e[0]},h=async()=>{try{const{id:t}=await a.withdrawApply(c);e.index.$u.toast("申请成功"),setTimeout(g,1e3)}catch(t){console.log("提现申请请求失败",t)}},g=()=>{r.navigateTo("/packages/pages/withdraw_record/withdraw_record")};return e.onShow((async()=>{await(async()=>{try{const{user:e,withdraw_config:t}=await a.getDistributionIndex();i.value=e.user_money,c.account=t.ali_acccount,c.real_name=t.ali_name,s.value=t,_()}catch(e){console.log("获取分销中心接口失败",e)}})(),await(async()=>{v.value=await a.withdrawWay(),y(v.value[0].id)})()})),(a,t)=>e.e({a:a.$theme.navColor,b:a.$theme.navBgColor,c:a.$theme.pageStyle,d:e.t(i.value),e:e.p({name:"arrow-right",size:"24"}),f:e.o(g),g:e.o([e=>c.money=e.detail.value,d]),h:c.money,i:e.o((e=>c.money=i.value)),j:e.f(v.value,((a,t,o)=>({a:"e8e5d8fd-1-"+o,b:e.p({width:"40",height:"40",src:a.image,alt:""}),c:e.t(a.title),d:c.type==a.id?1:"",e:a.id,f:e.o((e=>y(a.id)),a.id)}))),k:2!=c.type},2!=c.type?{l:`请输入${3==c.type?"微信":"支付宝"}账号`,m:c.account,n:e.o((e=>c.account=e.detail.value))}:{},{o:2!=c.type},2!=c.type?{p:c.real_name,q:e.o((e=>c.real_name=e.detail.value))}:{},{r:3==c.type||4==c.type},3==c.type||4==c.type?{s:e.o(w),t:e.o((e=>l.value=e)),v:e.p({maxUpload:1,"image-fit":"aspectFill",deletable:!0,modelValue:l.value})}:{},{w:e.o(h),x:e.p({type:"primary",shape:"circle",size:"default",customStyle:{padding:"0 30rpx",height:"80rpx"}}),y:s.value.open},s.value.open?{z:e.t(s.value.explain)}:{},{A:e.o((e=>n.value=e)),B:e.o((e=>c.account=e)),C:e.o((e=>c.real_name=e)),D:e.p({show:n.value,account:c.account,real_name:c.real_name})})}}),i=e._export_sfc(n,[["__scopeId","data-v-e8e5d8fd"]]);wx.createPage(i);