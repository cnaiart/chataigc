import{B as E,t as A,C as B,w as D}from"./element-plus.38726bbd.js";import{_ as U}from"./index.ca229a30.js";import{_ as y}from"./picker.08214076.js";import{_ as C}from"./picker.a9db97c4.js";import{f as _,b as N}from"./index.0aa35fa2.js";import{D as $}from"./vuedraggable.9c55756f.js";import{d as z,e as I,o as i,c as L,a as e,V as o,M as m,L as R,u as p,k as T,T as M}from"./@vue.581f5ce0.js";const P={class:"bg-fill-light flex items-center w-full p-4 mb-4 cursor-move"},S={class:"upload-btn w-[60px] h-[60px]"},j={class:"ml-3 flex-1"},q={class:"flex"},G=e("span",{class:"text-tx-regular flex-none mr-3"},"\u540D\u79F0",-1),H={class:"flex mt-[18px]"},J=e("span",{class:"text-tx-regular flex-none mr-3"},"\u94FE\u63A5",-1),K={class:"flex-1 flex items-center"},O={class:"drag-move cursor-move ml-auto"},Q=M("\u6DFB\u52A0"),ae=z({__name:"add-nav",props:{modelValue:{type:Array,default:()=>[]},max:{type:Number,default:10},min:{type:Number,default:1}},emits:["update:modelValue"],setup(r,{emit:f}){const n=r,s=I({get(){return n.modelValue},set(t){f("update:modelValue",t)}}),V=()=>{var t;((t=n.modelValue)==null?void 0:t.length)<n.max?s.value.push({image:"",name:"\u5BFC\u822A\u540D\u79F0",link:{},is_show:"1"}):_.msgError(`\u6700\u591A\u6DFB\u52A0${n.max}\u4E2A`)},x=t=>{var u;if(((u=n.modelValue)==null?void 0:u.length)<=n.min)return _.msgError(`\u6700\u5C11\u4FDD\u7559${n.min}\u4E2A`);s.value.splice(t,1)};return(t,u)=>{const d=N,h=C,v=E,g=y,k=A,b=B,F=U,w=D;return i(),L("div",null,[e("div",null,[o(p($),{class:"draggable",modelValue:p(s),"onUpdate:modelValue":u[0]||(u[0]=l=>T(s)?s.value=l:null),animation:"300",handle:".drag-move"},{item:m(({element:l,index:c})=>[(i(),R(F,{class:"max-w-[400px]",key:c,onClose:a=>x(c)},{default:m(()=>[e("div",P,[o(h,{modelValue:l.image,"onUpdate:modelValue":a=>l.image=a,"upload-class":"bg-body",size:"60px","exclude-domain":""},{upload:m(()=>[e("div",S,[o(d,{name:"el-icon-Plus",size:20})])]),_:2},1032,["modelValue","onUpdate:modelValue"]),e("div",j,[e("div",q,[G,o(v,{modelValue:l.name,"onUpdate:modelValue":a=>l.name=a,placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue","onUpdate:modelValue"])]),e("div",H,[J,o(g,{modelValue:l.link,"onUpdate:modelValue":a=>l.link=a},null,8,["modelValue","onUpdate:modelValue"])]),o(b,{label:"\u662F\u5426\u663E\u793A",class:"mt-[18px]"},{default:m(()=>[e("div",K,[o(k,{modelValue:l.is_show,"onUpdate:modelValue":a=>l.is_show=a,"active-value":"1","inactive-value":"0"},null,8,["modelValue","onUpdate:modelValue"]),e("div",O,[o(d,{name:"el-icon-Rank",size:"18"})])])]),_:2},1024)])])]),_:2},1032,["onClose"]))]),_:1},8,["modelValue"])]),e("div",null,[o(w,{type:"primary",onClick:V},{default:m(()=>[Q]),_:1})])])}}});export{ae as _};
