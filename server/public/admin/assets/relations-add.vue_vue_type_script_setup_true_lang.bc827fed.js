import{L as U,C as h,B as L,D as I,K as M}from"./element-plus.38726bbd.js";import{P as O}from"./index.1c6c033d.js";import{u as P}from"./useDictOptions.5809e50b.js";import{a as S}from"./code.f6f43846.js";import{d as $,s as E,r as K,e as N,_ as T,o as n,c as s,V as o,M as a,W as c,aa as i,u as v,L as _}from"./@vue.581f5ce0.js";const W={class:"edit-popup"},Q=$({__name:"relations-add",props:{column:{type:Array,default:()=>[]},types:{type:Array,default:()=>[]}},emits:["add","close","edit"],setup(y,{expose:V,emit:F}){const B=E(),d=E(),m=K("add"),b=N(()=>m.value=="edit"?"\u7F16\u8F91\u5173\u8054":"\u65B0\u589E\u5173\u8054"),l=T({name:"",model:"",type:"",local_key:"",foreign_key:""}),g={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u5173\u8054\u540D\u79F0"}],type:[{required:!0,message:"\u8BF7\u9009\u62E9\u5173\u8054\u7C7B\u578B"}],model:[{required:!0,message:"\u8BF7\u9009\u62E9\u5173\u8054\u6A21\u578B"}],local_key:[{required:!0,message:"\u8BF7\u9009\u62E9\u5173\u8054\u5065"}],foreign_key:[{required:!0,message:"\u8BF7\u8F93\u5165\u5916\u952E"}]},{optionsData:C}=P({models:{api:S}}),D=async()=>{var t,e;await((t=B.value)==null?void 0:t.validate()),(e=d.value)==null||e.close(),F(m.value,l)},x=(t="add")=>{var e;m.value=t,(e=d.value)==null||e.open()},A=t=>{for(const e in l)t[e]!=null&&t[e]!=null&&(l[e]=t[e])},R=()=>{F("close")};return V({open:x,setFormData:A}),(t,e)=>{const p=M,f=U,r=h,k=L,q=I;return n(),s("div",W,[o(O,{ref_key:"popupRef",ref:d,title:v(b),async:!0,width:"550px",onConfirm:D,onClose:R},{default:a(()=>[o(q,{ref_key:"formRef",ref:B,model:l,"label-width":"84px",rules:g},{default:a(()=>[o(r,{label:"\u5173\u8054\u7C7B\u578B",prop:"type"},{default:a(()=>[o(f,{class:"flex-1",modelValue:l.type,"onUpdate:modelValue":e[0]||(e[0]=u=>l.type=u),placeholder:"\u8BF7\u9009\u62E9\u5173\u8054\u7C7B\u578B"},{default:a(()=>[(n(!0),s(c,null,i(y.types,(u,w)=>(n(),_(p,{key:w,label:u.name,value:u.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(r,{label:"\u5173\u8054\u540D\u79F0",prop:"name"},{default:a(()=>[o(k,{modelValue:l.name,"onUpdate:modelValue":e[1]||(e[1]=u=>l.name=u),placeholder:"\u8BF7\u8F93\u5165\u5173\u8054\u540D\u79F0"},null,8,["modelValue"])]),_:1}),o(r,{label:"\u5173\u8054\u6A21\u578B",prop:"model"},{default:a(()=>[o(f,{class:"flex-1",modelValue:l.model,"onUpdate:modelValue":e[2]||(e[2]=u=>l.model=u),placeholder:"\u8BF7\u9009\u62E9\u5173\u8054\u6A21\u578B"},{default:a(()=>[(n(!0),s(c,null,i(v(C).models,u=>(n(),_(p,{label:u,value:u,key:u},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(r,{label:"\u5173\u8054\u5065",prop:"local_key"},{default:a(()=>[o(f,{class:"flex-1",modelValue:l.local_key,"onUpdate:modelValue":e[3]||(e[3]=u=>l.local_key=u),clearable:"",placeholder:"\u8BF7\u9009\u62E9\u5173\u8054\u5065"},{default:a(()=>[(n(!0),s(c,null,i(y.column,u=>(n(),_(p,{key:u.id,value:u.column_name,label:`${u.column_name}\uFF1A${u.column_comment}`},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(r,{label:"\u5916\u952E",prop:"foreign_key"},{default:a(()=>[o(k,{modelValue:l.foreign_key,"onUpdate:modelValue":e[4]||(e[4]=u=>l.foreign_key=u),placeholder:"\u5173\u8054\u8868\u5916\u952E\u6216\u4E2D\u95F4\u8868\u7684\u5916\u952E"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])])}}});export{Q as _};
