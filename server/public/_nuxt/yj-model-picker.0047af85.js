import{a as k,b as j,q as S,o as l,h as c,e,F as m,r as f,u as d,k as g,G as v,t as x,p as w,l as C}from"./entry.c7e0e7b4.js";import{u as V}from"./index.fa4f9017.js";import{_ as L}from"./_plugin-vue_export-helper.c27b6911.js";import"./index.cb3770be.js";const I=""+new URL("yj-ty.1cb58c1d.png",import.meta.url).href,M=""+new URL("yj-dm.75b69834.png",import.meta.url).href,Y=""+new URL("yj-xs.be9afe2c.png",import.meta.url).href,r=n=>(w("data-v-ecbff716"),n=n(),C(),n),$=r(()=>e("h3",{class:"text-base font-bold mt-[15px]"},[e("span",null,"模型选择")],-1)),B={class:"flex mt-[5px]"},R=["onClick"],U=r(()=>e("div",{class:"h-[35px] text-center leading-[40px]"},null,-1)),z={class:"text-base w-full text-center h-[45px] leading-[60px]",style:{background:"linear-gradient(180deg,transparent,#000)"}},D=r(()=>e("h3",{class:"text-base font-bold mt-[15px]"},[e("span",null,"风格选择")],-1)),F={class:"mt-[5px]"},P=["onClick"],q=r(()=>e("div",{class:"h-[60px] flex justify-center items-center"},null,-1)),A={class:"text-sm w-full text-center h-[50px] leading-[65px]",style:{background:"linear-gradient(180deg,transparent,#000)"}},E=k({__name:"yj-model-picker",props:{data:{default:{cartoon:[],common:[],reality:[]}},modelValue:{default:{engine:"",style:"default"}}},emits:["update:modelValue"],setup(n,{emit:h}){const p=n;j();const{modelValue:o}=V(p,h),i=S("common"),y=[{name:"通用模型",value:"common",background:I},{name:"动漫模型",value:"cartoon",background:M},{name:"现实模型",value:"reality",background:Y}],b=a=>{i.value=a;const s=p.data[a][0];u(s.engine,s.value)},u=(a,s)=>{o.value.engine=a,o.value.style=s};return u("default_dreamer_diffusion",""),(a,s)=>(l(),c(m,null,[$,e("div",B,[(l(),c(m,null,f(y,t=>e("div",{key:t.name,class:g(["model-item model-item_model",{"model-item_active":d(i)===t.value}]),onClick:_=>b(t.value)},[e("div",{class:"model-item-bg",style:v({"background-image":`url(${t.background})`})},[U,e("div",z,x(t.name),1)],4)],10,R)),64))]),D,e("div",F,[(l(!0),c(m,null,f(a.data[d(i)],(t,_)=>(l(),c("div",{key:_,class:g(["model-item model-item_style !w-[156px] !h-[115px] inline-block",{"model-item_active":d(o).engine===t.engine&&d(o).style===t.value}]),onClick:G=>u(t.engine,t.value)},[e("div",{class:"model-item-bg",style:v({"background-image":`url(${t.poster})`})},[q,e("div",A,x(t.text),1)],4)],10,P))),128))])],64))}});const J=L(E,[["__scopeId","data-v-ecbff716"]]);export{J as default};
