import{N as k,S as w,w as y,O as C,M as B,P as x}from"./element-plus.38726bbd.js";import{e as D}from"./message.2d513a34.js";import{_ as F}from"./edit.vue_vue_type_script_setup_true_lang.7a99f65c.js";import{d as u,s as L,_ as T,ar as N,o as e,c as R,O as d,L as r,M as t,V as i,T as l}from"./@vue.581f5ce0.js";import"./lodash-es.b552e321.js";import"./async-validator.fb49d0f5.js";import"./@vueuse.788ba4d8.js";import"./@element-plus.048d13fe.js";import"./dayjs.3bbbdfdd.js";import"./axios.ef5f3479.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.0aa35fa2.js";import"./lodash.ccf63c29.js";import"./vue-router.f90229e4.js";import"./pinia.8de84ecb.js";import"./vue-demi.ebc8116b.js";import"./css-color-function.7bd56a8d.js";import"./color.4d72ae60.js";import"./clone.f3914b59.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.e3c4d4cf.js";import"./ms.a9ae1d6d.js";import"./vue-drag-resize.3665149e.js";import"./nprogress.db25c43d.js";import"./vue-clipboard3.37da43ca.js";import"./clipboard.51333a27.js";import"./echarts.8d7a50ae.js";import"./zrender.1084fa23.js";import"./tslib.60310f1a.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.18a086c3.js";import"./index.1c6c033d.js";const S=l("\u5F00\u542F"),V=l("\u5173\u95ED"),M=l(" \u8BBE\u7F6E "),O=u({name:"shortLetter"}),yt=u({...O,setup($){const p=L(),o=T({loading:!1,lists:[]}),c=async()=>{try{o.loading=!0,o.lists=await D(),o.loading=!1}catch{o.loading=!1}},f=a=>{var s;(s=p.value)==null||s.open(a)};return c(),(a,s)=>{const n=k,_=w,g=y,h=C,E=B,v=N("perms"),b=x;return e(),R("div",null,[d((e(),r(E,{class:"!border-none",shadow:"never"},{default:t(()=>[i(h,{size:"large",data:o.lists},{default:t(()=>[i(n,{label:"\u77ED\u4FE1\u6E20\u9053",prop:"name","min-width":"120"}),i(n,{label:"\u72B6\u6001","min-width":"120"},{default:t(({row:m})=>[m.status==1?(e(),r(_,{key:0},{default:t(()=>[S]),_:1})):(e(),r(_,{key:1,type:"danger"},{default:t(()=>[V]),_:1}))]),_:1}),i(n,{label:"\u64CD\u4F5C","min-width":"120",fixed:"right"},{default:t(({row:m})=>[d((e(),r(g,{type:"primary",link:"",onClick:z=>f(m.type)},{default:t(()=>[M]),_:2},1032,["onClick"])),[[v,["notice.sms_config/setConfig"]]])]),_:1})]),_:1},8,["data"])]),_:1})),[[b,o.loading]]),i(F,{ref_key:"editRef",ref:p,onSuccess:c},null,512)])}}});export{yt as default};
