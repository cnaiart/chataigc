import{L as E,C as K,B as A,t as L,D as h,K as q}from"./element-plus.38726bbd.js";import{c as M}from"./ai_key.4cf9f223.js";import{r as n,f as P}from"./index.0aa35fa2.js";import{P as S}from"./index.1c6c033d.js";import{d as U,s as C,r as f,o as v,c as k,V as l,M as s,W as I,aa as O,L as T}from"./@vue.581f5ce0.js";function Y(t){return n.get({url:"/setting.key_down_rule/lists",params:t},{ignoreCancelToken:!0})}function j(t){return n.get({url:"/setting.key_down_rule/detail",params:t})}function z(t){return n.post({url:"/setting.key_down_rule/add",data:t})}function N(t){return n.post({url:"/setting.key_down_rule/edit",data:t})}function Z(t){return n.post({url:"/setting.key_down_rule/del",data:t})}function $(t){return n.post({url:"/setting.key_down_rule/status",data:t})}const W={class:"edit-popup"},ee=U({__name:"edit",emits:["success"],setup(t,{expose:F,emit:V}){const w=C(),m=C(),_=f(""),y=f([]),u=f({id:"",type:"",rule:"",ai_key:"",prompt:"",status:1}),b={key:[{required:!0,message:"\u8BF7\u8F93\u5165APIKey",trigger:["blur"]}],rule:[{required:!0,message:"\u8BF7\u8F93\u5165\u505C\u7528\u89C4\u5219"}],prompt:[{required:!0,message:"\u8BF7\u8F93\u5165\u505C\u7528\u63D0\u793A"}]},B=async()=>{var a,e;try{await((a=w.value)==null?void 0:a.validate()),u.value.id==""?await z(u.value):u.value.id!=""&&await N(u.value),P.msgSuccess("\u64CD\u4F5C\u6210\u529F"),V("success"),(e=m.value)==null||e.close()}catch(i){return i}},D=async(a,e,i)=>{var p;if(e=="add")u.value={id:"",type:a,ai_key:"",rule:"",prompt:"",status:1},_.value="\u65B0\u589E\u89C4\u5219";else if(e=="edit"){const r=await j({id:i.id});Object.keys(u.value).map(d=>{var c;u.value[d]=(c=r[d])!=null?c:0}),u.value.type=a,_.value="\u7F16\u8F91\u89C4\u5219"}(p=m.value)==null||p.open(),R(a)},R=async a=>{try{const e=await M({type:a});y.value=e}catch(e){console.log(e)}};return F({open:D}),(a,e)=>{const i=q,p=E,r=K,d=A,c=L,x=h;return v(),k("div",W,[l(S,{ref_key:"popupRef",ref:m,title:_.value,async:!0,width:"550px",onConfirm:B},{default:s(()=>[l(x,{class:"ls-form",ref_key:"formRef",ref:w,rules:b,model:u.value,"label-width":"90px"},{default:s(()=>[l(r,{label:"\u63A5\u53E3\u7C7B\u578B"},{default:s(()=>[l(p,{class:"w-[330px]",modelValue:u.value.ai_key,"onUpdate:modelValue":e[0]||(e[0]=o=>u.value.ai_key=o)},{default:s(()=>[(v(!0),k(I,null,O(y.value,(o,g)=>(v(),T(i,{key:g,label:o,value:g},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(r,{label:"\u505C\u7528\u89C4\u5219",prop:"rule"},{default:s(()=>[l(d,{class:"w-[330px]",modelValue:u.value.rule,"onUpdate:modelValue":e[1]||(e[1]=o=>u.value.rule=o),placeholder:"\u8BF7\u8F93\u5165\u505C\u7528\u89C4\u5219",type:"textarea",autosize:{minRows:2,maxRows:4},clearable:""},null,8,["modelValue"])]),_:1}),l(r,{label:"\u505C\u7528\u63D0\u793A",prop:"prompt"},{default:s(()=>[l(d,{class:"w-[330px]",modelValue:u.value.prompt,"onUpdate:modelValue":e[2]||(e[2]=o=>u.value.prompt=o),placeholder:"\u8BF7\u8F93\u5165\u505C\u7528\u63D0\u793A",rows:4,clearable:""},null,8,["modelValue"])]),_:1}),l(r,{label:"\u72B6\u6001"},{default:s(()=>[l(c,{modelValue:u.value.status,"onUpdate:modelValue":e[3]||(e[3]=o=>u.value.status=o),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])])}}});export{ee as _,Z as d,Y as g,$ as s};