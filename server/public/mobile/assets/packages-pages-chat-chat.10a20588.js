import{d as e,A as t,r as a,z as s,l as o,K as r,D as p,E as i,o as l,i as m,g as u,f as n,e as c,j as d,F as _,a as j,b as v,k as f,b2 as y}from"./index-c4e9cb21.js";import{_ as g}from"./page-meta.0a6ed5a4.js";import{_ as h,b,a as k}from"./chat-scroll-view.9d4619bc.js";import{e as w,f as x}from"./chat.ffb7aceb.js";import{F as V}from"./floating-menu.33dda305.js";import{_ as C}from"./_plugin-vue_export-helper.1b428a4d.js";import"./router-navigate.7694f14d.js";import"./u-button.d1dcbae7.js";import"./u-icon.9d0b6bc8.js";import"./u-popup.550d714f.js";import"./audio-play.6c57b3d3.js";import"./u-loading.5334235e.js";import"./icon_copy.df22fa63.js";import"./useCopy.c5769034.js";import"./useLockFn.bbb1f608.js";import"./text-item.vue_vue_type_script_setup_true_lang.00f45e3c.js";import"./katex.02915daa.js";import"./_commonjsHelpers.02d3be64.js";import"./mp-html.30804373.js";import"./icon_copy.2cfe0671.js";import"./u-input.c26a5a94.js";import"./emitter.1571a5d9.js";import"./z-paging.0c0bd55f.js";import"./guided-popup.vue_vue_type_script_setup_true_lang.bed7a27c.js";import"./l-painter-image.fa4c3f7b.js";import"./l-painter.e1bc292c.js";import"./validate.d36d2063.js";import"./u-image.259ae993.js";const F=C(e({__name:"chat",setup(e){const C=t({id:0,type:1,token:""}),F=a(""),I=s(),M=o(),N=a({}),$=async()=>{(async()=>{switch(C.type){case 2:N.value=await x({id:C.id});break;case 3:N.value=await w({id:C.id})}y({title:N.value.name})})()};return r((e=>{C.id=Number(null==e?void 0:e.id),C.type=Number(null==e?void 0:e.type),$()})),p((async()=>{M.getConfig(),$(),i()})),(e,t)=>{const a=j(v("page-meta"),g),s=j(v("model-picker"),h),o=f,r=j(v("chat-record-item"),b),p=j(v("chat-scroll-view"),k);return l(),m(_,null,[u(a,{"page-style":e.$theme.pageStyle},null,8,["page-style"]),u(o,{class:"safe-area-inset-bottom chat"},{default:n((()=>[u(o,{class:"flex-1 min-h-0"},{default:n((()=>[u(p,{ref_key:"chatRef",ref:I,tips:N.value.tips,type:C.type,otherId:C.id,currentModel:F.value,avatar:N.value.image},{top:n((()=>[u(o,{class:"border-b border-solid border-light border-0"},{default:n((()=>[u(s,{modelValue:F.value,"onUpdate:modelValue":t[0]||(t[0]=e=>F.value=e)},null,8,["modelValue"])])),_:1})])),empty:n((()=>[u(o,{class:"chat-record pt-[20rpx] pb-[40rpx] w-full absolute top-0 left-0"},{default:n((()=>[N.value.tips?(l(),c(r,{key:0,type:"left",avatar:N.value.image,content:`${N.value.tips}`,"show-collect-btn":!1,showCopyBtn:!1},null,8,["avatar","content"])):d("v-if",!0)])),_:1})])),_:1},8,["tips","type","otherId","currentModel","avatar"])])),_:1}),d("    悬浮菜单    "),u(V)])),_:1})],64)}}}),[["__scopeId","data-v-a1ae56a0"]]);export{F as default};
