import{u as _}from"./index.fa4f9017.js";import{a as u,C as m,o as a,h as c,e,F as h,r as f,u as o,k as p,t as n,p as v,l as w}from"./entry.c7e0e7b4.js";import{_ as z}from"./_plugin-vue_export-helper.c27b6911.js";import"./index.cb3770be.js";const y=s=>(v("data-v-df51725d"),s=s(),w(),s),S={class:"mt-[15px]"},k=y(()=>e("h1",{class:"text-base font-bold"},"图片尺寸",-1)),C={class:"flex justify-between flex-wrap"},V=["onClick"],b={class:"flex justify-center items-center mt-[10px] h-[20px]"},I={class:"text-base text-[#101010] mt-[4px] size-scale"},g={class:"text-xs text-[#666666] mt-[4px] size-name"},B=u({__name:"picture-size",props:{modelValue:{default:"1:1"}},emits:["update:modelValue"],setup(s,{emit:i}){const r=s,{modelValue:l}=_(r,i),d=m({lists:[{name:"头像图",scale:"1:1",class:"w-[20px] h-[20px]"},{name:"手机壁纸",scale:"1:2",class:"w-[12px] h-[20px]"},{name:"文章配图",scale:"4:3",class:"w-[20px] h-[15px]"},{name:"宣传海报",scale:"9:16",class:"w-[13px] h-[20px]"},{name:"媒体配图",scale:"3:4",class:"w-[15px] h-[20px]"},{name:"电脑壁纸",scale:"16:9",class:"w-[20px] h-[12px]"},{name:"横版名片",scale:"3:2",class:"w-[20px] h-[14px]"},{name:"小红书图",scale:"2:3",class:"w-[13px] h-[20px]"}]});return(j,F)=>(a(),c("div",S,[k,e("div",C,[(a(!0),c(h,null,f(o(d).lists,(t,x)=>(a(),c("div",{key:x,class:p(["picture-size cursor-pointer text-center hover:text-primary",{"picture-size-active":o(l)==t.scale}]),onClick:D=>l.value=t.scale},[e("div",b,[e("div",{class:p(["rect",t.class])},null,2)]),e("div",I,n(t.scale),1),e("div",g,n(t.name),1)],10,V))),128))])]))}});const P=z(B,[["__scopeId","data-v-df51725d"]]);export{P as default};