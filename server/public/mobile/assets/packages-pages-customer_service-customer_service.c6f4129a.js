import{d as t,l as e,a as s,b as a,o as n,e as r,f as o,g as l,u as c,h as m,t as u,j as i,G as p,k as f,A as _,K as d,D as x,E as g,i as y,F as b,m as j,H as v}from"./index-c4e9cb21.js";import{_ as h}from"./page-meta.0a6ed5a4.js";import{_ as k}from"./u-image.259ae993.js";import{_ as w}from"./u-button.d1dcbae7.js";import{s as O}from"./file.17a933ee.js";import{_ as q}from"./tabbar.vue_vue_type_script_setup_true_lang.de757f7b.js";import{F}from"./floating-menu.33dda305.js";import"./_plugin-vue_export-helper.1b428a4d.js";import"./u-icon.9d0b6bc8.js";import"./u-badge.4654495c.js";const N=t({__name:"customer-service",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})}},setup(t){const{getImageUrl:_}=e();return(e,d)=>{const x=s(a("u-image"),k),g=f,y=s(a("u-button"),w);return n(),r(g,{class:"customer-service bg-white flex flex-col justify-center items-center mx-[36rpx] mt-[20rpx] rounded-lg px-[110rpx] pt-[100rpx] pb-[160rpx]"},{default:o((()=>[l(x,{width:"280",height:"280",src:c(_)(t.content.qrcode)},null,8,["src"]),t.content.title&&+t.content.title_status?(n(),r(g,{key:0,class:"text-lg mt-[14rpx] font-medium"},{default:o((()=>[m(u(t.content.title),1)])),_:1})):i("v-if",!0),t.content.time&&+t.content.time_status?(n(),r(g,{key:1,class:"text-content mt-[40rpx]"},{default:o((()=>[m(" 服务时间："+u(t.content.time),1)])),_:1})):i("v-if",!0),t.content.mobile&&+t.content.mobile_status?(n(),r(g,{key:2,class:"text-content mt-[14rpx] flex flex-wrap"},{default:o((()=>[m(" 客服电话："+u(t.content.mobile)+" ",1),p("a",{class:"ml-[10rpx] phone text-muted underline",href:"tel:"+t.content.mobile}," 拨打 ",8,["href"])])),_:1})):i("v-if",!0),l(g,{class:"mt-[100rpx] w-full"},{default:o((()=>[l(y,{type:"primary",shape:"circle",onClick:d[0]||(d[0]=e=>(async t=>{O(t)})(c(_)(t.content.qrcode)))},{default:o((()=>[m(" 保存二维码图片 ")])),_:1})])),_:1})])),_:1})}}}),S=t({__name:"customer_service",setup(t){const e=_({pages:[]}),c=async()=>{const t=await v({id:3});e.pages=JSON.parse(t.data)};return d((()=>{c()})),x((async()=>{c(),g()})),(t,c)=>{const m=s(a("page-meta"),h),u=s(a("w-customer-service"),N),p=f,_=s(a("tabbar"),q);return n(),y(b,null,[l(m,{"page-style":t.$theme.pageStyle},null,8,["page-style"]),l(p,{class:"customer-service"},{default:o((()=>[(n(!0),y(b,null,j(e.pages,((t,e)=>(n(),r(p,{key:e},{default:o((()=>["customer-service"==t.name?(n(),r(u,{key:0,content:t.content,styles:t.styles},null,8,["content","styles"])):i("v-if",!0)])),_:2},1024)))),128)),i("    悬浮菜单    "),l(F),l(_)])),_:1})],64)}}});export{S as default};