import{a as y,b,X as k,Z as C,a1 as u,q as S,s as h,o as s,h as r,f as I,w as R,u as n,e as i,F as V,r as q,c as B,aG as N,y as L,bQ as d,j,k as D,t as F,p as $,l as z}from"./entry.c7e0e7b4.js";import A from"./vip.dd357ee2.js";import E from"./recharge.03804b6c.js";import{_ as G}from"./redeem-code.vue.8308e284.js";import{_ as M}from"./_plugin-vue_export-helper.c27b6911.js";import"./index.67b2792c.js";import"./index.42e7de0b.js";import"./index.0b9306dd.js";import"./debounce.2af106a8.js";import"./navigation.709c56bc.js";import"./qrcode.vue.esm.3fb480da.js";import"./index.222a6e13.js";import"./refs.94480413.js";import"./usePolling.272d8056.js";import"./index.391b7542.js";import"./_baseClone.69bec34e.js";import"./_getTag.b4ecd864.js";import"./swiper.e4cb8324.js";import"./index.ade63ee3.js";/* empty css                  *//* empty css                     */import"./el-form-item.4ed993c7.js";import"./asyncData.f818c9f5.js";import"./my.94b48df2.js";import"./limitPop.vue.9d0b27d4.js";import"./index.ae48457a.js";/* empty css                  *//* empty css                        */import"./recharge.573a4938.js";import"./useLockFn.d62becec.js";import"./redeem_code.1ecb29ac.js";const Q=m=>($("data-v-a348b389"),m=m(),z(),m),X={key:0,class:"flex w-full h-full flex-col"},Z={class:"tab-lists"},H={class:"flex mx-[-10px]"},J=["onClick"],K={class:"w-full"},O={class:"flex-1 min-h-0"},P={key:1,class:"w-full h-full bg-white rounded-[12px] flex items-center justify-center"},T=Q(()=>i("div",{class:"text-xl"},"功能未开启!",-1)),U=[T],W=y({__name:"index",setup(m){const p=b(),f=k(),_=C(),a=u(()=>[{name:"开通会员",show:p.getIsShowVip,mode:"vip",component:d(A)},{name:"余额充值",show:p.getIsShowRecharge,mode:"recharge",component:d(E)},{name:"卡密兑换",show:p.getCardCodeConfig.is_open,mode:"redeem_code",component:d(G)}].filter(t=>!!t.show)),v=_.query.mode,o=S(v),x=e=>{o.value=e,f.replace({path:"",query:{mode:e}})},c=u(()=>a.value.find(e=>e.mode===o.value));return h(a,e=>{if(!c.value&&e.length){const[t]=e;o.value=t.mode}},{immediate:!0}),h(()=>_.query.mode,e=>{if(o.value=e,!c.value){const[t]=a.value;o.value=t==null?void 0:t.mode}}),(e,t)=>{const w=j;return s(),r("div",null,[I(w,{name:"default"},{default:R(()=>[n(a).length?(s(),r("div",X,[i("div",Z,[i("div",H,[(s(!0),r(V,null,q(n(a),(l,g)=>(s(),r("div",{class:D(["tab-item",{"is-active":n(o)==l.mode}]),key:g,onClick:Y=>x(l.mode)},[i("span",K,F(l.name),1)],10,J))),128))])]),i("div",O,[n(c)?(s(),B(N(n(c).component),{key:0})):L("",!0)])])):(s(),r("div",P,U))]),_:1})])}}});const Ne=M(W,[["__scopeId","data-v-a348b389"]]);export{Ne as default};