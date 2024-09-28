import{_ as V}from"./index.f9197633.js";import{G as b,H as g,C as R,B as h,M as x,D as A,w as y}from"./element-plus.38726bbd.js";import{o as k,p as N}from"./distribution.7a4bf4d0.js";import{d as U,r as _,_ as G,ar as I,o as c,c as M,a as r,V as t,M as e,O as T,L as H,W as L,T as s}from"./@vue.581f5ce0.js";import"./vue-drag-resize.3665149e.js";import"./lodash-es.b552e321.js";import"./async-validator.fb49d0f5.js";import"./@vueuse.788ba4d8.js";import"./@element-plus.048d13fe.js";import"./dayjs.3bbbdfdd.js";import"./axios.ef5f3479.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.0aa35fa2.js";import"./lodash.ccf63c29.js";import"./vue-router.f90229e4.js";import"./pinia.8de84ecb.js";import"./vue-demi.ebc8116b.js";import"./css-color-function.7bd56a8d.js";import"./color.4d72ae60.js";import"./clone.f3914b59.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.e3c4d4cf.js";import"./ms.a9ae1d6d.js";import"./nprogress.db25c43d.js";import"./vue-clipboard3.37da43ca.js";import"./clipboard.51333a27.js";import"./echarts.8d7a50ae.js";import"./zrender.1084fa23.js";import"./tslib.60310f1a.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.18a086c3.js";const O={class:""},S=r("div",{class:"text-xl font-medium mb-[20px]"},"\u6CE8\u518C\u5956\u52B1",-1),W=s("\u5F00\u542F"),$=s("\u5173\u95ED"),j=r("div",{class:"form-tips"},"\u5173\u95ED\u540E\uFF0C\u65B0\u7528\u6237\u6CE8\u518C\u5C06\u4E0D\u8D60\u9001\u514D\u8D39\u6761\u6570",-1),q=s("\u6761"),z=r("div",{class:"form-tips"},"\u65B0\u7528\u6237\u6CE8\u518C\uFF0C\u514D\u8D39\u8D60\u9001\u5BF9\u8BDD\u6B21\u6570\uFF1B\u586B\u51990\u6216\u8005\u4E3A\u7A7A\u5219\u8868\u793A\u4E0D\u8D60\u9001",-1),J=s("\u6761"),K=r("div",{class:"form-tips"},"\u65B0\u7528\u6237\u6CE8\u518C\uFF0C\u514D\u8D39\u8D60\u9001\u7ED8\u56FE\u6B21\u6570\uFF1B\u586B\u51990\u6216\u8005\u4E3A\u7A7A\u5219\u8868\u793A\u4E0D\u8D60\u9001",-1),P=s("\u4FDD\u5B58"),Ge=U({__name:"index",setup(Q){const m=_(),u=_({reward:"",reward_draw:"",status:1}),D=G({}),n=async()=>{u.value=await k()};n();const f=async l=>{if(!l){console.log(l);return}try{await l.validate(),await N(u.value),await n()}catch(o){console.log(o)}};return(l,o)=>{const p=b,v=g,i=R,d=h,B=x,w=A,F=y,E=V,C=I("perms");return c(),M(L,null,[r("div",O,[t(w,{ref_key:"ruleFormRef",ref:m,rules:D,model:u.value,"label-width":"140px"},{default:e(()=>[t(B,{shadow:"never",class:"!border-none"},{default:e(()=>[S,t(i,{label:"\u529F\u80FD\u72B6\u6001",prop:"name"},{default:e(()=>[r("div",null,[t(v,{modelValue:u.value.status,"onUpdate:modelValue":o[0]||(o[0]=a=>u.value.status=a),class:"ml-4"},{default:e(()=>[t(p,{label:1},{default:e(()=>[W]),_:1}),t(p,{label:0},{default:e(()=>[$]),_:1})]),_:1},8,["modelValue"]),j])]),_:1}),t(i,{label:"\u5BF9\u8BDD\u6B21\u6570",prop:"reward"},{default:e(()=>[r("div",null,[t(d,{modelValue:u.value.reward,"onUpdate:modelValue":o[1]||(o[1]=a=>u.value.reward=a)},{append:e(()=>[q]),_:1},8,["modelValue"]),z])]),_:1}),t(i,{label:"\u7ED8\u753B\u6B21\u6570",prop:"reward_draw"},{default:e(()=>[r("div",null,[t(d,{modelValue:u.value.reward_draw,"onUpdate:modelValue":o[2]||(o[2]=a=>u.value.reward_draw=a)},{append:e(()=>[J]),_:1},8,["modelValue"]),K])]),_:1})]),_:1})]),_:1},8,["rules","model"])]),T((c(),H(E,null,{default:e(()=>[t(F,{type:"primary",onClick:o[3]||(o[3]=a=>f(m.value))},{default:e(()=>[P]),_:1})]),_:1})),[[C,["setting.user.user/setRegisterReward"]]])],64)}}});export{Ge as default};
