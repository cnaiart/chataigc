import{s as f,B as V,w as x}from"./element-plus.38726bbd.js";import{d as C,e as F,o as E,c as k,V as l,u as a,k as u,M as y,T as v}from"./@vue.581f5ce0.js";const B={class:"color-picker flex flex-1"},g=v("\u91CD\u7F6E"),D=C({__name:"index",props:{modelValue:{type:String},defaultColor:{type:String}},emits:["update:modelValue"],setup(r,{emit:d}){const n=r,e=F({get(){return n.modelValue},set(s){d("update:modelValue",s)}}),p=["#409EFF","#28C76F","#EA5455","#FF9F43","#01CFE8","#4A5DFF"],c=()=>{e.value=n.defaultColor};return(s,o)=>{const m=f,i=V,_=x;return E(),k("div",B,[l(m,{modelValue:a(e),"onUpdate:modelValue":o[0]||(o[0]=t=>u(e)?e.value=t:null),predefine:p},null,8,["modelValue"]),l(i,{modelValue:a(e),"onUpdate:modelValue":o[1]||(o[1]=t=>u(e)?e.value=t:null),class:"mx-[10px] flex-1",type:"text",readonly:""},null,8,["modelValue"]),l(_,{type:"text",onClick:c},{default:y(()=>[g]),_:1})])}}});export{D as _};
