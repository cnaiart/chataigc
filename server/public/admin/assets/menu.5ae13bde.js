import{d as c,f as d}from"./element-plus.38726bbd.js";import{d as i,o as t,L as o,M as m,c as _,aa as f,W as x,a as k,U as y}from"./@vue.581f5ce0.js";import{_ as b}from"./vue-drag-resize.3665149e.js";import"./lodash-es.b552e321.js";import"./async-validator.fb49d0f5.js";import"./@vueuse.788ba4d8.js";import"./@element-plus.048d13fe.js";import"./dayjs.3bbbdfdd.js";import"./axios.ef5f3479.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";const v=i({__name:"menu",props:{menus:{type:Object,default:()=>({})},modelValue:{type:String,default:"1"}},emits:["update:modelValue"],setup(a,{emit:l}){const r=n=>{l("update:modelValue",n)};return(n,g)=>{const s=c,p=d;return t(),o(p,{"default-active":a.modelValue,class:"w-[220px] pages-menu border-none"},{default:m(()=>[(t(!0),_(x,null,f(a.menus,(e,u)=>(t(),o(s,{index:u,key:e.id,onClick:V=>r(e.type)},{default:m(()=>[k("span",null,y(e.name),1)]),_:2},1032,["index","onClick"]))),128))]),_:1},8,["default-active"])}}});const O=b(v,[["__scopeId","data-v-74ba5d6b"]]);export{O as default};
