import{a as R,b as N,q as _,a1 as z,o as f,h as x,f as s,w as t,e,u as a,t as d,y,z as c,c as L,dk as S,H as U,B as A,j as D,K as j}from"./entry.c7e0e7b4.js";import{E as q}from"./index.391b7542.js";import{E as I}from"./index.222a6e13.js";import"./el-form-item.4ed993c7.js";/* empty css                  */import{u as h}from"./useLockFn.d62becec.js";import{c as H,u as K}from"./redeem_code.1ecb29ac.js";import"./_baseClone.69bec34e.js";import"./_getTag.b4ecd864.js";import"./refs.94480413.js";const Q={class:"redeem-code"},T={class:"h-full bg-white rounded-[12px] p-[20px]"},$=e("div",{class:"text-[18px] font-medium"},"卡密兑换",-1),G={key:0,class:"flex bg-[#FFFAEF] text-[#F7A935] mt-[20px] p-[12px] rounded"},J={class:"flex pr-[20rpx]"},M=e("span",{class:"mr-[10px]"},"购买链接:",-1),O={class:"flex mt-[20px]"},P=e("div",{class:"text-lg text-center font-medium"},"查询结果",-1),W={class:"h-[160px]"},X={class:"flex-1 flex justify-center items-center bg-white pt-[20px]"},de=R({__name:"index",setup(Y){const g=N(),l=_(""),r=_(!1),n=_({content:"",valid_time:"",failure_time:"",id:"",sn:"",type:"",type_desc:""}),m=z(()=>g.getCardCodeConfig),k=o=>{S(o)},{isLock:C,lockFn:b}=h(async()=>{try{const o=await H({sn:l.value});r.value=!0,n.value=o}catch(o){l.value="",console.log("查询卡密失败=>",o)}}),{isLock:w,lockFn:V}=h(async()=>{try{await K({sn:l.value}),j.msgSuccess("兑换成功"),r.value=!1,l.value=""}catch(o){console.log("兑换卡密失败=>",o)}});return(o,i)=>{const E=U,v=A,F=D,u=q,B=I;return f(),x("div",Q,[s(F,{name:"default"},{default:t(()=>[e("div",T,[$,a(m).is_show?(f(),x("div",G,[e("div",J,[M,e("span",null,d(a(m).buy_site),1)]),e("div",{class:"underline cursor-pointer ml-[30px]",onClick:i[0]||(i[0]=p=>k(a(m).buy_site))}," 复制链接 ")])):y("",!0),e("div",O,[s(E,{modelValue:l.value,"onUpdate:modelValue":i[1]||(i[1]=p=>l.value=p),size:"large",style:{width:"300px"},placeholder:"请输入卡密编号"},null,8,["modelValue"]),s(v,{type:"primary",size:"large",class:"ml-[20px]",loading:a(C),onClick:a(b)},{default:t(()=>[c(" 查询 ")]),_:1},8,["loading","onClick"])])])]),_:1}),s(B,{modelValue:r.value,"onUpdate:modelValue":i[2]||(i[2]=p=>r.value=p),width:"400","append-to-body":""},{header:t(()=>[P]),default:t(()=>[e("div",W,[s(u,{label:"卡密类型："},{default:t(()=>[c(d(n.value.type_desc),1)]),_:1}),s(u,{label:"卡密面额："},{default:t(()=>[c(d(n.value.content),1)]),_:1}),s(u,{label:"兑换时间："},{default:t(()=>[c(d(n.value.failure_time),1)]),_:1}),n.value.valid_time?(f(),L(u,{key:0,label:"有效期至："},{default:t(()=>[c(d(n.value.valid_time),1)]),_:1})):y("",!0)]),e("div",X,[s(v,{type:"primary",size:"large",loading:a(w),onClick:a(V)},{default:t(()=>[c(" 立即兑换 ")]),_:1},8,["loading","onClick"])])]),_:1},8,["modelValue"])])}}});export{de as default};