import{_ as m}from"./index.vue.3dfb5dc9.js";import{a as p,S as _,o as s,h as t,e,t as d,F as x,r as f,f as a,Q as h}from"./entry.c7e0e7b4.js";import{_ as u}from"./reply-item.vue.76a1e14d.js";const v={class:"bg-[#F8F8F8] p-[20px] flex items-center mb-[10px]"},F={class:"flex-1 min-w-0"},k={class:"flex items-center"},w=e("div",{class:"bg-primary text-white px-[3px] rounded-[3px]"}," 问 ",-1),g={class:"ml-[10px]"},y={class:"mx-auto"},B=e("div",{class:"form-tips cancelCollection"},"取消收藏",-1),E=p({__name:"collection-item",props:{item:{}},emits:["collect"],setup(b,{emit:c}){return _(),(o,i)=>{const l=m;return s(),t("div",v,[e("div",F,[e("div",k,[w,e("div",g,d(o.item.ask),1)]),(s(!0),t(x,null,f(o.item.reply,(n,r)=>(s(),t("div",{class:"flex items-start mt-[30px]",key:r},[a(u,{text:n},null,8,["text"])]))),128))]),e("div",{class:"w-[40px] px-[8px] cursor-pointer",onClick:i[0]||(i[0]=h(n=>c("collect"),["stop"]))},[e("div",y,[a(l,{name:"el-icon-StarFilled",size:"24px",color:"#FBAE00"})]),B])])}}});export{E as _};