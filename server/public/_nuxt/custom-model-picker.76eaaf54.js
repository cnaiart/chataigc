import{u as m}from"./index.fa4f9017.js";import{a as r,L as u,o as l,h as d,e as t,F as n,r as p,k as _,u as f,G as v,t as h,p as k,l as g}from"./entry.c7e0e7b4.js";import{_ as x}from"./_plugin-vue_export-helper.c27b6911.js";import"./index.cb3770be.js";const y=e=>(k("data-v-fde4ee7d"),e=e(),g(),e),L=y(()=>t("h3",{class:"text-base font-bold mt-[15px]"},[t("span",null,"模型选择")],-1)),C={class:"mt-[5px]"},S=["onClick"],V={class:"model-item-text"},b=r({__name:"custom-model-picker",props:{modelValue:{default:""},modelList:{default:[]}},emits:["update:modelValue"],setup(e,{emit:i}){const c=e,{modelValue:a}=m(c,i);return u(()=>{const o=c.modelList;o.length!==0&&(a.value=o[0].id)}),(o,I)=>(l(),d(n,null,[L,t("div",C,[(l(!0),d(n,null,p(o.modelList,s=>(l(),d("div",{key:s.name,class:_(["model-item",{"model-item_active":f(a)==s.id}]),onClick:w=>a.value=s.id},[t("div",{class:"model-item-bg",style:v({"background-image":`url(${s.preview_img})`})},null,4),t("div",V,h(s.name),1)],10,S))),128))])],64))}});const F=x(b,[["__scopeId","data-v-fde4ee7d"]]);export{F as default};
