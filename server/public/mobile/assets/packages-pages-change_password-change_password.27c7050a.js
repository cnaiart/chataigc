import{d as s,r as a,A as e,K as o,b2 as t,o as l,i as r,g as d,f as u,h as p,t as m,e as i,j as n,F as f,bg as _,bh as c,k as b,a as w,b as x}from"./index-c4e9cb21.js";import{_ as h}from"./u-input.c26a5a94.js";import{_ as j}from"./u-form-item.ae11617d.js";import{_ as v}from"./u-form.73f50af5.js";import{_ as V}from"./u-button.d1dcbae7.js";import{F as g}from"./floating-menu.33dda305.js";import{_ as y}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-icon.9d0b6bc8.js";import"./emitter.1571a5d9.js";const $=y(s({__name:"change_password",setup(s){const y=a(""),$=e({password:"",password_confirm:""}),B=async()=>$.old_password||"set"==y.value?$.password?$.password_confirm?$.password!=$.password_confirm?uni.$u.toast("两次输入的密码不一致"):(await _($),uni.$u.toast("操作成功"),void c()):uni.$u.toast("请输入确认密码"):uni.$u.toast("请输入密码"):uni.$u.toast("请输入原来的密码");return o((s=>{y.value=s.type||"","set"==y.value&&t({title:"设置登录密码"})})),(s,a)=>{const e=b,o=w(x("u-input"),h),t=w(x("u-form-item"),j),_=w(x("u-form"),v),c=w(x("u-button"),V);return l(),r(f,null,[d(e,{class:"register bg-white min-h-full flex flex-col items-center px-[40rpx] pt-[100rpx] box-border"},{default:u((()=>[d(e,{class:"w-full"},{default:u((()=>[d(e,{class:"text-2xl font-medium mb-[60rpx]"},{default:u((()=>[p(m("set"==y.value?"设置登录密码":"修改登录密码"),1)])),_:1}),d(_,{borderBottom:"","label-width":150},{default:u((()=>["set"!=y.value?(l(),i(t,{key:0,label:"原密码",borderBottom:""},{default:u((()=>[d(o,{class:"flex-1",type:"password",modelValue:$.old_password,"onUpdate:modelValue":a[0]||(a[0]=s=>$.old_password=s),border:!1,placeholder:"请输入原来的密码"},null,8,["modelValue"])])),_:1})):n("v-if",!0),d(t,{label:"新密码",borderBottom:""},{default:u((()=>[d(o,{class:"flex-1",type:"password",modelValue:$.password,"onUpdate:modelValue":a[1]||(a[1]=s=>$.password=s),placeholder:"6-20位数字+字母",border:!1},null,8,["modelValue"])])),_:1}),d(t,{label:"确认密码",borderBottom:""},{default:u((()=>[d(o,{class:"flex-1",type:"password",modelValue:$.password_confirm,"onUpdate:modelValue":a[2]||(a[2]=s=>$.password_confirm=s),placeholder:"再次输入新密码",border:!1},null,8,["modelValue"])])),_:1})])),_:1}),d(e,{class:"mt-[100rpx]"},{default:u((()=>[d(c,{type:"primary",shape:"circle",onClick:B},{default:u((()=>[p(" 确定 ")])),_:1})])),_:1})])),_:1})])),_:1}),n("    悬浮菜单    "),d(g)],64)}}}),[["__scopeId","data-v-16b6dc59"]]);export{$ as default};