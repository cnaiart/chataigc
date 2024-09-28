import{_ as e}from"./page-meta.0a6ed5a4.js";import{d as a,r as l,c as o,l as t,z as s,A as r,K as u,o as i,i as n,g as m,f as d,u as c,e as p,j as f,n as b,h as v,t as _,F as g,O as y,be as x,a0 as h,$ as j,a as w,b as V,k as $,J as k,bf as C}from"./index-c4e9cb21.js";import{_ as U}from"./u-tabs.30cd1122.js";import{_ as B}from"./u-input.c26a5a94.js";import{_ as R}from"./u-form-item.ae11617d.js";import{_ as T}from"./u-verification-code.3244e1ea.js";import{_ as E}from"./u-form.73f50af5.js";import{_ as F}from"./agreement.69db16ef.js";import{_ as L}from"./u-button.d1dcbae7.js";import{u as P}from"./useLockFn.bbb1f608.js";import{F as S}from"./floating-menu.33dda305.js";import{_ as G}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-badge.4654495c.js";import"./u-icon.9d0b6bc8.js";import"./emitter.1571a5d9.js";import"./router-navigate.7694f14d.js";import"./u-checkbox.0bfe794f.js";const I=G(a({__name:"register",setup(a){const G=[{name:"手机号注册",type:"2"},{name:"邮箱注册",type:"3"}],I=l(0),A=o((()=>{var e;return(null==(e=J.getLoginConfig)?void 0:e.login_way)||[]})),z=o((()=>{const e=G.filter((e=>A.value.includes(e.type)));return e.length&&(O.scene=e[0].type),e})),J=t(),K=y(),N=s(),O=r({scene:"2",mobile:"",code:"",email:"",password:"",password_confirm:""}),Q=s(),X=l(""),q=e=>{X.value=e},D=o((()=>uni.$u.test.mobile(O.mobile))),H=o((()=>uni.$u.test.email(O.email))),M=o((()=>{var e;return 1==(null==(e=J.getLoginConfig)?void 0:e.sms_verify)})),W=o((()=>"2"==O.scene)),Y=o((()=>"3"==O.scene)),Z=e=>{I.value=e,O.scene=G[e].type,1==e?O.mobile="":O.email=""},ee=async()=>{var e,a;if(null==(e=Q.value)?void 0:e.canGetCode)try{W.value?await le():await ae(),uni.$u.toast("发送成功"),null==(a=Q.value)||a.start()}catch(l){console.log("发送验证码失败=>",l)}},ae=async()=>(console.log(H.value),O.email?H.value?void(await x({scene:h.REGISTER,email:O.email})):(uni.$u.toast("请输入正确的邮箱地址"),Promise.reject()):(uni.$u.toast("请输入邮箱"),Promise.reject())),le=async()=>O.mobile?H.value?(uni.$u.toast("请输入正确的手机号"),Promise.reject()):void(await j({scene:h.REGISTER,mobile:O.mobile})):(uni.$u.toast("请输入手机号"),Promise.reject()),{lockFn:oe}=P((async()=>{var e;if(null==(e=N.value)?void 0:e.checkAgreement()){if(!O.mobile&&W.value)return uni.$u.toast("请输入手机号码");if(!O.email&&Y.value)return uni.$u.toast("请输入邮箱");if(!O.code&&M.value)return uni.$u.toast("请输入验证码");if(!O.password)return uni.$u.toast("请输入密码");if(!O.password_confirm)return uni.$u.toast("请再次输入密码");if(O.password!=O.password_confirm)return uni.$u.toast("两次输入的密码不一致");await C(O),setTimeout((()=>{K.navigateBack()}),1500)}}));return u((async({type:e})=>{setTimeout((()=>{O.scene=e,3==e&&A.value.includes("2")&&(I.value=1)}),300)})),(a,l)=>{const o=w(V("page-meta"),e),t=w(V("u-tabs"),U),s=$,r=w(V("u-input"),B),u=w(V("u-form-item"),R),y=w(V("u-verification-code"),T),x=k,h=w(V("u-form"),E),j=w(V("agreement"),F),C=w(V("u-button"),L);return i(),n(g,null,[m(o,{"page-style":a.$theme.pageStyle},null,8,["page-style"]),m(s,{class:"register bg-white min-h-full flex flex-col items-center px-[40rpx] pt-[40rpx] box-border"},{default:d((()=>[m(s,{class:"w-full"},{default:d((()=>[m(s,{class:"pb-[40rpx]"},{default:d((()=>[m(t,{list:c(z),"is-scroll":!1,modelValue:I.value,"onUpdate:modelValue":l[0]||(l[0]=e=>I.value=e),"active-color":a.$theme.primaryColor,onChange:Z},null,8,["list","modelValue","active-color"])])),_:1}),m(h,{borderBottom:"","label-width":150},{default:d((()=>[c(W)?(i(),p(u,{key:0,label:"手机号",borderBottom:""},{default:d((()=>[m(r,{class:"flex-1",modelValue:O.mobile,"onUpdate:modelValue":l[1]||(l[1]=e=>O.mobile=e),border:!1,placeholder:"请输入手机号码"},null,8,["modelValue"])])),_:1})):f("v-if",!0),c(Y)?(i(),p(u,{key:1,label:"邮箱",borderBottom:""},{default:d((()=>[m(r,{class:"flex-1",modelValue:O.email,"onUpdate:modelValue":l[2]||(l[2]=e=>O.email=e),border:!1,placeholder:"请输入邮箱账号"},null,8,["modelValue"])])),_:1})):f("v-if",!0),c(M)?(i(),p(u,{key:2,label:"验证码"},{default:d((()=>[m(r,{class:"flex-1",modelValue:O.code,"onUpdate:modelValue":l[3]||(l[3]=e=>O.code=e),placeholder:"请输入验证码",border:!1},null,8,["modelValue"]),m(s,{class:"border-l border-solid border-0 border-light pl-3 leading-4 ml-3 w-[180rpx]",onClick:ee},{default:d((()=>[m(y,{ref_key:"uCodeRef",ref:Q,seconds:60,onChange:q,"change-text":"x秒"},null,512),m(x,{class:b(["text-muted",{"text-primary":c(D)&&c(W)||c(H)&&c(Y)}])},{default:d((()=>[v(_(X.value),1)])),_:1},8,["class"])])),_:1})])),_:1})):f("v-if",!0),m(u,{label:"设置密码",borderBottom:""},{default:d((()=>[m(r,{class:"flex-1",type:"password",modelValue:O.password,"onUpdate:modelValue":l[4]||(l[4]=e=>O.password=e),placeholder:"请输入字母+数字组合的密码",border:!1},null,8,["modelValue"])])),_:1}),m(u,{label:"确认密码",borderBottom:""},{default:d((()=>[m(r,{class:"flex-1",type:"password",modelValue:O.password_confirm,"onUpdate:modelValue":l[5]||(l[5]=e=>O.password_confirm=e),placeholder:"再次输入密码",border:!1},null,8,["modelValue"])])),_:1})])),_:1}),m(s,{class:"mt-[40rpx]"},{default:d((()=>[m(j,{ref_key:"agreementRef",ref:N},null,512)])),_:1}),m(s,{class:"mt-[60rpx]"},{default:d((()=>[m(C,{type:"primary",shape:"circle",onClick:c(oe)},{default:d((()=>[v(" 注册 ")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1}),f("    悬浮菜单    "),m(S)],64)}}}),[["__scopeId","data-v-5c004f8b"]]);export{I as default};