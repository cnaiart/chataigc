import{_ as v}from"./index.f9197633.js";import{C as B,t as D,D as g,M as h,w as A}from"./element-plus.38726bbd.js";import{_ as V}from"./picker.a9db97c4.js";import{a as b,b as w}from"./user.77a18ed2.js";import{d as p,_ as y,ar as k,o as l,c as x,V as o,M as u,O as S,L as U,a as i,T as N}from"./@vue.581f5ce0.js";import"./vue-drag-resize.3665149e.js";import"./lodash-es.b552e321.js";import"./async-validator.fb49d0f5.js";import"./@vueuse.788ba4d8.js";import"./@element-plus.048d13fe.js";import"./dayjs.3bbbdfdd.js";import"./axios.ef5f3479.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.1c6c033d.js";import"./index.0aa35fa2.js";import"./lodash.ccf63c29.js";import"./vue-router.f90229e4.js";import"./pinia.8de84ecb.js";import"./vue-demi.ebc8116b.js";import"./css-color-function.7bd56a8d.js";import"./color.4d72ae60.js";import"./clone.f3914b59.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.e3c4d4cf.js";import"./ms.a9ae1d6d.js";import"./nprogress.db25c43d.js";import"./vue-clipboard3.37da43ca.js";import"./clipboard.51333a27.js";import"./echarts.8d7a50ae.js";import"./zrender.1084fa23.js";import"./tslib.60310f1a.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.18a086c3.js";import"./index.8a8e47a8.js";import"./index.vue_vue_type_script_setup_true_lang.c6066b25.js";import"./index.ca229a30.js";import"./index.850f9b25.js";import"./index.vue_vue_type_script_setup_true_lang.8d1a4714.js";import"./usePaging.2d3fb421.js";import"./vue3-video-play.35f34caf.js";import"./vuedraggable.9c55756f.js";import"./vue.56b77d04.js";import"./sortablejs.0eba38f1.js";const j={class:"user-setup"},M=i("div",{class:"font-medium mb-7"},"\u57FA\u672C\u8BBE\u7F6E",-1),T=i("div",null,[i("div",{class:"form-tips"}," \u7528\u6237\u6CE8\u518C\u65F6\u7ED9\u7684\u9ED8\u8BA4\u5934\u50CF\uFF0C\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A400*400\u50CF\u7D20\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F ")],-1),I=i("div",{class:"form-tips"}," \u662F\u5426\u5141\u8BB8\u7528\u6237\u6CE8\u9500\u8D26\u53F7\uFF0C\u5173\u95ED\u8868\u793A\u4E0D\u5141\u8BB8\uFF1B\u9ED8\u8BA4\u4E3A\u5173\u95ED ",-1),L=N("\u4FDD\u5B58"),O=p({name:"userSetup"}),Tt=p({...O,setup(R){const t=y({default_avatar:"",is_cancelled:0}),s=async()=>{try{const r=await b();for(const e in t)t[e]=r[e]}catch(r){console.log("\u83B7\u53D6=>",r)}},n=async()=>{try{await w(t),s()}catch(r){console.log("\u4FDD\u5B58=>",r)}};return s(),(r,e)=>{const c=V,a=B,_=D,d=g,F=h,f=A,C=v,E=k("perms");return l(),x("div",j,[o(F,{shadow:"never",class:"!border-none"},{default:u(()=>[M,o(d,{ref:"formRef",model:t,"label-width":"120px"},{default:u(()=>[o(a,{label:"\u7528\u6237\u9ED8\u8BA4\u5934\u50CF"},{default:u(()=>[i("div",null,[o(c,{modelValue:t.default_avatar,"onUpdate:modelValue":e[0]||(e[0]=m=>t.default_avatar=m),limit:1},null,8,["modelValue"])])]),_:1}),o(a,null,{default:u(()=>[T]),_:1}),o(a,{label:"\u8D26\u53F7\u6CE8\u9500",prop:"loginWay"},{default:u(()=>[i("div",null,[o(_,{modelValue:t.is_cancelled,"onUpdate:modelValue":e[1]||(e[1]=m=>t.is_cancelled=m),"active-value":1,"inactive-value":0},null,8,["modelValue"]),I])]),_:1})]),_:1},8,["model"])]),_:1}),S((l(),U(C,null,{default:u(()=>[o(f,{type:"primary",onClick:n},{default:u(()=>[L]),_:1})]),_:1})),[[E,["setting.user.user/setConfig"]]])])}}});export{Tt as default};