import{t as $,C as G,G as z,H,N as K,L as W,B as J,a as P,w as Q,O as X,D as Y,K as Z}from"./element-plus.38726bbd.js";import{b as ee}from"./index.0aa35fa2.js";import{c as le,d as ae}from"./ai_model_cost.7ea0fcf0.js";import{S as ue}from"./sortablejs.0eba38f1.js";import{j as y}from"./lodash-es.b552e321.js";import{d as oe,s as A,r as te,e as ne,j as se,n as ie,o as c,c as D,V as e,M as a,a as m,L as p,T as _,U as k,S as b,W as de,aa as ce,u as V}from"./@vue.581f5ce0.js";const me={class:"pt-[10px]"},_e=m("div",{class:"form-tips !text-[14px]"}," \u5F00\u542F\u540E\u7528\u6237\u53EF\u4EE5\u5728\u524D\u7AEF\u9009\u62E9\u60F3\u8981\u4F7F\u7528\u7684\u6A21\u578B\uFF0C\u5355\u72EC\u8BA1\u8D39\u3002 ",-1),re=m("div",{class:"form-tips !text-[14px]"},"\u5728\u300CAI\u6A21\u578B\u300D\u9009\u4E2D\u7684\u9ED8\u8BA4AI\u63A5\u53E3",-1),pe={class:"move-icon cursor-move"},fe={class:"flex items-center"},be=_(" \u4F1A\u5458\u514D\u8D39 "),ve=_("\u5220\u9664"),Ee=_("+\u6DFB\u52A0\u6A21\u578B"),ke=oe({__name:"session",props:{popRef:{type:Object,default:{}}},setup(ge,{expose:C}){const v=A(),E=A(),w=()=>{const n=E.value.$el.querySelector(".el-table__body tbody");ue.create(n,{animation:150,handle:".move-icon",onEnd:({newIndex:t,oldIndex:i})=>{console.log(t,i);const s=u.value.billing_config,f=s.splice(i,1)[0];s.splice(t,0,f),u.value.billing_config=s}})},u=te({is_open:0,member_model:"",billing_config:[],chat_model_lists:[]}),x=()=>{const n=r.value.find(t=>!t.disabled);n&&u.value.billing_config.push(y(n))},U=n=>{u.value.billing_config.splice(n,1)},r=ne(()=>{const n=Object.values(y(u.value.chat_model_lists))||[];return n.forEach(t=>{u.value.billing_config.findIndex(s=>s.key===t.key)!==-1&&(t.disabled=!0)}),n}),R=(n,t)=>{const i=r.value.find(s=>s.key===n);t.name=i.name,t.key=i.key},S={api_key:[{required:!0,message:"\u8BF7\u8F93\u5165\u79D8\u94A5",trigger:["blur"]}],api_type:[{required:!0,message:"\u8BF7\u9009\u62E9",trigger:["blur"]}]},g=async()=>{const n=await le();u.value=n},T=async()=>{await v.value.validate(),await ae(u.value),g()};return se(async()=>{await g(),ie(()=>{w()})}),C({submit:T}),(n,t)=>{const i=$,s=G,f=z,N=H,B=ee,d=K,O=Z,j=W,F=J,I=P,h=Q,M=X,q=Y;return c(),D("div",me,[e(q,{"label-width":"120px",ref_key:"formRef",ref:v,rules:S,model:u.value},{default:a(()=>[e(s,{label:"\u6A21\u578B\u8BA1\u8D39"},{default:a(()=>[m("div",null,[e(i,{modelValue:u.value.is_open,"onUpdate:modelValue":t[0]||(t[0]=l=>u.value.is_open=l),"active-value":1,"inactive-value":0},null,8,["modelValue"]),_e])]),_:1}),u.value.is_open?(c(),p(s,{key:0,label:"\u5F53\u524D\u9ED8\u8BA4\u63A5\u53E3"},{default:a(()=>[m("div",null,[e(N,{modelValue:u.value.member_model,"onUpdate:modelValue":t[1]||(t[1]=l=>u.value.member_model=l)},{default:a(()=>[e(f,{label:u.value.member_model},{default:a(()=>[_(k(u.value.member_model),1)]),_:1},8,["label"])]),_:1},8,["modelValue"]),re])]),_:1})):b("",!0),u.value.is_open?(c(),p(s,{key:1,label:"\u6A21\u578B\u8BBE\u7F6E"},{default:a(()=>[e(M,{ref_key:"tableRef",ref:E,size:"large","row-key":"key",data:u.value.billing_config},{default:a(()=>[e(d,{width:"50"},{default:a(()=>[m("div",pe,[e(B,{name:"el-icon-Rank"})])]),_:1}),e(d,{label:"\u5E8F\u53F7",width:"60"},{default:a(({$index:l})=>[_(k(l+1),1)]),_:1}),e(d,{label:"\u6A21\u578B\u540D\u79F0",prop:"name","min-width":"150"},{default:a(({row:l})=>[e(j,{class:"w-full","model-value":l.key,filterable:"",onChange:o=>R(o,l)},{default:a(()=>[(c(!0),D(de,null,ce(V(r),(o,L)=>(c(),p(O,{value:o.key,label:o.name,key:o.name,disabled:o.disabled&&o.key!==l.key},null,8,["value","label","disabled"]))),128))]),_:2},1032,["model-value","onChange"])]),_:1}),e(d,{label:"\u522B\u540D",prop:"alias","min-width":"160"},{default:a(({row:l})=>[e(F,{modelValue:l.alias,"onUpdate:modelValue":o=>l.alias=o,placeholder:"\u4E3A\u7A7A\u65F6\u663E\u793A\u9ED8\u8BA4\u540D\u5B57"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(d,{label:"\u6D88\u8017\u5BF9\u8BDD\u6761\u6570",prop:"balance","min-width":"80"},{default:a(({row:l})=>[e(F,{modelValue:l.balance,"onUpdate:modelValue":o=>l.balance=o,placeholder:"\u4E3A\u7A7A\u9ED8\u8BA41\u6761"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(d,{label:"\u72B6\u6001",width:"100"},{default:a(({row:l})=>[e(i,{modelValue:l.status,"onUpdate:modelValue":o=>l.status=o,"active-value":1,"inactive-value":0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(d,{label:"\u72B6\u6001",width:"120"},{header:a(()=>[m("div",fe,[be,e(I,{effect:"dark",content:"\u5F00\u542F\u540E\uFF0C\u7528\u6237\u5F00\u901A\u4F1A\u5458\uFF0C\u4F7F\u7528\u8BE5\u6A21\u578B\u5BF9\u8BDD\u4E0D\u6D88\u8017\u6761\u6570",placement:"top"},{default:a(()=>[e(B,{name:"local-icon-yiwen"})]),_:1})])]),default:a(({row:l})=>[e(i,{modelValue:l.member_free,"onUpdate:modelValue":o=>l.member_free=o,"active-value":1,"inactive-value":0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(d,{label:"\u64CD\u4F5C",width:"100"},{default:a(({row:l,$index:o})=>[e(h,{type:"danger",link:"",onClick:L=>U(o)},{default:a(()=>[ve]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1})):b("",!0),V(r).length!==u.value.billing_config.length&&u.value.is_open?(c(),p(s,{key:2},{default:a(()=>[e(h,{type:"primary",link:"",onClick:x},{default:a(()=>[Ee]),_:1})]),_:1})):b("",!0)]),_:1},8,["model"])])}}});export{ke as _};