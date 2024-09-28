import{t as S,C as T,G as N,H as q,N as I,B as Q,a as G,O as L,D as M}from"./element-plus.38726bbd.js";import{b as $}from"./index.0aa35fa2.js";import{g as j,s as z}from"./ai_model_cost.7ea0fcf0.js";import{S as H}from"./sortablejs.0eba38f1.js";import{d as O,s as F,r as B,j as J,n as A,o as r,c as K,V as e,M as u,a as d,L as V,T as D,U as P,S as g}from"./@vue.581f5ce0.js";const W={class:"pt-[10px]"},X=d("div",{class:"form-tips !text-[14px]"}," \u5F00\u542F\u540E\u7528\u6237\u53EF\u4EE5\u5728\u524D\u7AEF\u9009\u62E9\u60F3\u8981\u4F7F\u7528\u7684\u6A21\u578B\uFF0C\u5355\u72EC\u8BA1\u8D39\u3002 ",-1),Y=d("div",{class:"form-tips !text-[14px]"},"\u5728\u300CAI\u6A21\u578B\u300D\u9009\u4E2D\u7684AI\u63A5\u53E3",-1),Z={class:"move-icon cursor-move"},ee={class:"flex items-center"},le=D(" \u4F1A\u5458\u514D\u8D39 "),ie=O({__name:"QRcode",setup(ue,{expose:h}){const p=F(),f=F(),a=B({is_open:0,default_model:"",billing_config:[]}),c=B([]),y={api_key:[{required:!0,message:"\u8BF7\u8F93\u5165\u79D8\u94A5",trigger:["blur"]}],api_type:[{required:!0,message:"\u8BF7\u9009\u62E9",trigger:["blur"]}]},k=()=>{const m=p.value.$el.querySelector(".el-table__body tbody");H.create(m,{animation:150,handle:".move-icon",onEnd:({newIndex:o,oldIndex:s})=>{console.log(o,s);const t=c.value,_=t.splice(s,1)[0];t.splice(o,0,_),a.form=[],A(()=>{c.value=t})}})},v=async()=>{const m=await j();a.value=m,c.value=m.billing_config},w=async()=>{await f.value.validate(),a.value.billing_config=c.value,await z(a.value),v()};return J(async()=>{await v(),A(()=>{k()})}),h({submit:w}),(m,o)=>{const s=S,t=T,_=N,C=q,b=$,i=I,E=Q,U=G,x=L,R=M;return r(),K("div",W,[e(R,{"label-width":"120px",ref_key:"formRef",ref:f,rules:y,model:a.value},{default:u(()=>[e(t,{label:"\u6A21\u578B\u8BA1\u8D39"},{default:u(()=>[d("div",null,[e(s,{modelValue:a.value.is_open,"onUpdate:modelValue":o[0]||(o[0]=l=>a.value.is_open=l),"active-value":1,"inactive-value":0},null,8,["modelValue"]),X])]),_:1}),a.value.is_open?(r(),V(t,{key:0,label:"\u5F53\u524D\u9ED8\u8BA4\u63A5\u53E3"},{default:u(()=>[d("div",null,[e(C,{modelValue:a.value.default_model,"onUpdate:modelValue":o[1]||(o[1]=l=>a.value.default_model=l)},{default:u(()=>[e(_,{label:a.value.default_model},{default:u(()=>[D(P(a.value.default_model),1)]),_:1},8,["label"])]),_:1},8,["modelValue"]),Y])]),_:1})):g("",!0),a.value.is_open?(r(),V(t,{key:1,label:"\u6A21\u578B\u8BBE\u7F6E"},{default:u(()=>[e(x,{ref_key:"tableRef",ref:p,size:"large","row-key":"key",data:c.value},{default:u(()=>[e(i,{width:"50"},{default:u(()=>[d("div",Z,[e(b,{name:"el-icon-Rank"})])]),_:1}),e(i,{label:"\u6A21\u578B\u540D\u79F0",prop:"name","min-width":"120"}),e(i,{label:"\u522B\u540D",prop:"alias","min-width":"100"},{default:u(({row:l})=>[e(E,{modelValue:l.alias,"onUpdate:modelValue":n=>l.alias=n,placeholder:"\u4E3A\u7A7A\u65F6\u663E\u793A\u9ED8\u8BA4\u540D\u5B57"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(i,{label:"\u6D88\u8017\u7ED8\u753B\u6761\u6570",prop:"balance","min-width":"100"},{default:u(({row:l})=>[e(E,{modelValue:l.balance,"onUpdate:modelValue":n=>l.balance=n,placeholder:"\u4E3A\u7A7A\u9ED8\u8BA41\u6761"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(i,{label:"\u72B6\u6001",width:"100"},{default:u(({row:l})=>[e(s,{modelValue:l.status,"onUpdate:modelValue":n=>l.status=n,"active-value":1,"inactive-value":0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(i,{label:"\u72B6\u6001",width:"120"},{header:u(()=>[d("div",ee,[le,e(U,{effect:"dark",content:"\u5F00\u542F\u540E\uFF0C\u7528\u6237\u5F00\u901A\u4F1A\u5458\uFF0C\u4F7F\u7528\u8BE5\u6A21\u578B\u4E0D\u6D88\u8017\u6761\u6570",placement:"top"},{default:u(()=>[e(b,{name:"local-icon-yiwen"})]),_:1})])]),default:u(({row:l})=>[e(s,{modelValue:l.member_free,"onUpdate:modelValue":n=>l.member_free=n,"active-value":1,"inactive-value":0},null,8,["modelValue","onUpdate:modelValue"])]),_:1})]),_:1},8,["data"])]),_:1})):g("",!0)]),_:1},8,["model"])])}}});export{ie as _};