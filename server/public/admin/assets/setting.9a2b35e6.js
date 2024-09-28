import{_ as E}from"./index.f9197633.js";import{t as h,C as V,B as g,D,M as b,w as C}from"./element-plus.38726bbd.js";import{a as k,e as A}from"./share.57113aed.js";import{f as y}from"./index.0aa35fa2.js";import{d as S,r as d,_ as U,ar as N,o as p,c as I,V as u,M as r,a as o,O as M,L as R,W as T,T as q}from"./@vue.581f5ce0.js";import"./vue-drag-resize.3665149e.js";import"./lodash-es.b552e321.js";import"./async-validator.fb49d0f5.js";import"./@vueuse.788ba4d8.js";import"./@element-plus.048d13fe.js";import"./dayjs.3bbbdfdd.js";import"./axios.ef5f3479.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.ccf63c29.js";import"./vue-router.f90229e4.js";import"./pinia.8de84ecb.js";import"./vue-demi.ebc8116b.js";import"./css-color-function.7bd56a8d.js";import"./color.4d72ae60.js";import"./clone.f3914b59.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.e3c4d4cf.js";import"./ms.a9ae1d6d.js";import"./nprogress.db25c43d.js";import"./vue-clipboard3.37da43ca.js";import"./clipboard.51333a27.js";import"./echarts.8d7a50ae.js";import"./zrender.1084fa23.js";import"./tslib.60310f1a.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.18a086c3.js";const L=o("div",{class:"text-xl font-medium mb-[20px]"},"\u5206\u4EAB\u8BBE\u7F6E",-1),O={class:"flex"},W=o("div",{class:"ml-[10px]"},"\u6761\u5BF9\u8BDD\u6B21\u6570",-1),$={class:"flex mt-[20px]"},j=o("div",{class:"ml-[10px]"},"\u6761\u7ED8\u753B\u6B21\u6570",-1),z={class:"flex"},G=o("div",{class:"ml-[10px]"},"\u6B21\u6709\u5956\u52B1",-1),H=q(" \u4FDD\u5B58 "),Se=S({__name:"setting",setup(J){const m=d(),e=d({status:1,rewards:1,draw_rewards:1,max_share:5}),_=U({max_share:[{required:!0,message:"\u8BF7\u8F93\u5165\u6BCF\u5929\u6700\u591A\u5206\u4EAB\u51E0\u6B21\u6570\u6709\u5956\u52B1",trigger:"blur"}]}),n=async()=>{e.value=await k()};n();const c=async l=>{if(!l){console.log(l);return}try{await l.validate(),e.value.rewards>0||e.value.draw_rewards>0?(await A(e.value),await n()):y.msgError("\u5BF9\u8BDD\u6B21\u6570\u548C\u7ED8\u753B\u6B21\u6570\u5FC5\u987B\u6709\u4E00\u4E2A\u5927\u4E8E0")}catch(t){console.log(t)}};return(l,t)=>{const v=h,s=V,i=g,B=D,f=b,w=C,F=E,x=N("perms");return p(),I(T,null,[u(f,{shadow:"never",class:"!border-none"},{default:r(()=>[L,u(B,{ref_key:"ruleFormRef",ref:m,rules:_,model:e.value,"label-width":"120px"},{default:r(()=>[u(s,{label:"\u529F\u80FD\u72B6\u6001"},{default:r(()=>[u(v,{modelValue:e.value.status,"onUpdate:modelValue":t[0]||(t[0]=a=>e.value.status=a),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1}),u(s,{label:"\u5206\u4EAB\u4E00\u6B21\u5956\u52B1",prop:"rewards"},{default:r(()=>[o("div",null,[o("div",O,[o("div",null,[u(i,{placeholder:"\u8BF7\u8F93\u5165",modelValue:e.value.rewards,"onUpdate:modelValue":t[1]||(t[1]=a=>e.value.rewards=a)},null,8,["modelValue"])]),W]),o("div",$,[o("div",null,[u(i,{placeholder:"\u8BF7\u8F93\u5165",modelValue:e.value.draw_rewards,"onUpdate:modelValue":t[2]||(t[2]=a=>e.value.draw_rewards=a)},null,8,["modelValue"])]),j])])]),_:1}),u(s,{label:"\u6BCF\u5929\u6700\u591A\u5206\u4EAB",prop:"max_share"},{default:r(()=>[o("div",z,[o("div",null,[u(i,{placeholder:"\u8BF7\u8F93\u5165",modelValue:e.value.max_share,"onUpdate:modelValue":t[3]||(t[3]=a=>e.value.max_share=a)},null,8,["modelValue"])]),G])]),_:1})]),_:1},8,["rules","model"])]),_:1}),u(F,null,{default:r(()=>[M((p(),R(w,{type:"primary",onClick:t[4]||(t[4]=a=>c(m.value))},{default:r(()=>[H]),_:1})),[[x,["task.task_share/setConfig"]]])]),_:1})],64)}}});export{Se as default};
