import{a as u,b as m,o as r,h as d,f as c,u as f,x as i,F as _,e as t,H as V}from"./entry.c7e0e7b4.js";import{u as x}from"./index.fa4f9017.js";const h=t("h3",{class:"text-base font-bold mt-[15px]"},[t("span",null,"忽略元素"),t("span",null,"(可选)")],-1),B=u({__name:"negative-prompt",props:{modelValue:{default:""}},emits:["update:modelValue"],setup(l,{emit:o}){const s=l;m();const{modelValue:e}=x(s,o);return(b,a)=>{const n=V;return r(),d(_,null,[h,c(n,{type:"text",modelValue:f(e),"onUpdate:modelValue":a[0]||(a[0]=p=>i(e)?e.value=p:null),class:"mt-[8px]",maxlength:200,placeholder:"输入图片中不想出现的词，例如tree、fish等"},null,8,["modelValue"])],64)}}});export{B as _};
