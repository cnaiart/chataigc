import{b as r}from"./index.0aa35fa2.js";import{d,o as s,c as n,I as c,a4 as p,V as _,S as i}from"./@vue.581f5ce0.js";import{_ as m}from"./vue-drag-resize.3665149e.js";const u=d({props:{showClose:{type:Boolean,default:!0}},emits:["close"],setup(e,{emit:o}){return{handleClose:()=>{o("close")}}}});const f={class:"del-wrap"};function C(e,o,t,h,v,$){const a=r;return s(),n("div",f,[c(e.$slots,"default",{},void 0,!0),e.showClose?(s(),n("div",{key:0,class:"icon-close",onClick:o[0]||(o[0]=p((...l)=>e.handleClose&&e.handleClose(...l),["stop"]))},[_(a,{size:12,name:"el-icon-CloseBold"})])):i("",!0)])}const B=m(u,[["render",C],["__scopeId","data-v-2a98aa67"]]);export{B as _};
