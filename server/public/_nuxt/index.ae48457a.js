import{a as B,q as g,W as k,T as C,o as i,h as _,e as p,N as c,f as S,aF as T,w as s,z as a,t as d,c as m,y,B as $}from"./entry.c7e0e7b4.js";import{E as b}from"./index.222a6e13.js";/* empty css                  */import{_ as E}from"./_plugin-vue_export-helper.c27b6911.js";const V=B({props:{title:{type:String,default:""},content:{type:String,default:""},confirmButtonText:{type:[String,Boolean],default:"确定"},cancelButtonText:{type:[String,Boolean],default:"取消"},width:{type:String,default:"400px"},disabled:{type:Boolean,default:!1},async:{type:Boolean,default:!1},clickModalClose:{type:Boolean,default:!1},center:{type:Boolean,default:!1},customClass:{type:String,default:""},destroyOnClose:{type:Boolean,default:!0}},emits:["confirm","cancel","close","open"],setup(e,{emit:o}){const t=g(!1),u=n=>{o(n),(!e.async||n==="cancel")&&r()},r=()=>{t.value=!1,C(()=>{o("close")})},f=()=>{e.disabled||(o("open"),t.value=!0)};return k("visible",t),{visible:t,handleEvent:u,close:r,open:f}}});const w={class:"dialog"},h={class:"dialog-footer"};function N(e,o,t,u,r,f){const n=$,v=b;return i(),_("div",w,[p("div",{class:"dialog__trigger",onClick:o[0]||(o[0]=(...l)=>e.open&&e.open(...l))},[c(e.$slots,"trigger",{},void 0,!0)]),S(v,{modelValue:e.visible,"onUpdate:modelValue":o[3]||(o[3]=l=>e.visible=l),"custom-class":e.customClass,center:e.center,"append-to-body":!0,width:e.width,"close-on-click-modal":e.clickModalClose,"destroy-on-close":e.destroyOnClose,onClosed:e.close},T({footer:s(()=>[c(e.$slots,"footer",{},()=>[p("div",h,[e.cancelButtonText?(i(),m(n,{key:0,onClick:o[1]||(o[1]=l=>e.handleEvent("cancel"))},{default:s(()=>[a(d(e.cancelButtonText),1)]),_:1})):y("",!0),e.confirmButtonText?(i(),m(n,{key:1,type:"primary",onClick:o[2]||(o[2]=l=>e.handleEvent("confirm"))},{default:s(()=>[a(d(e.confirmButtonText),1)]),_:1})):y("",!0)])],!0)]),default:s(()=>[c(e.$slots,"default",{},()=>[a(d(e.content),1)],!0)]),_:2},[e.title?{name:"header",fn:s(()=>[a(d(e.title),1)]),key:"0"}:void 0]),1032,["modelValue","custom-class","center","width","close-on-click-modal","destroy-on-close","onClosed"])])}const z=E(V,[["render",N],["__scopeId","data-v-8d65c718"]]);export{z as _};
