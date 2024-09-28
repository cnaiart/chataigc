import{_ as T}from"./index.f9197633.js";import{_ as U,M as q,B as A,C as M,G as N,H as $,t as j,N as z,O as G,D as H,w as I}from"./element-plus.38726bbd.js";import{u as O,a as S}from"./vue-router.f90229e4.js";import{h as L,z as P,B as J,D as K,E as Q}from"./index.0aa35fa2.js";import{d as f,_ as F,s as W,r as X,j as Y,o as Z,c as ee,V as e,M as a,a as n,T as b}from"./@vue.581f5ce0.js";import"./vue-drag-resize.3665149e.js";import"./lodash-es.b552e321.js";import"./async-validator.fb49d0f5.js";import"./@vueuse.788ba4d8.js";import"./@element-plus.048d13fe.js";import"./dayjs.3bbbdfdd.js";import"./axios.ef5f3479.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.ccf63c29.js";import"./pinia.8de84ecb.js";import"./vue-demi.ebc8116b.js";import"./css-color-function.7bd56a8d.js";import"./color.4d72ae60.js";import"./clone.f3914b59.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.e3c4d4cf.js";import"./ms.a9ae1d6d.js";import"./nprogress.db25c43d.js";import"./vue-clipboard3.37da43ca.js";import"./clipboard.51333a27.js";import"./echarts.8d7a50ae.js";import"./zrender.1084fa23.js";import"./tslib.60310f1a.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.18a086c3.js";const oe={class:"article-edit"},te={class:"w-80"},ae=b("\u5B9A\u65F6\u4EFB\u52A1"),le={class:"w-80"},ue={class:"w-80"},se={class:"w-80"},re={class:"w-80"},ne=b("\u4FDD\u5B58"),me=f({name:"scheduledTaskEdit"}),Je=f({...me,setup(ie){const m=O(),w=S(),t=F({id:"",name:"",command:"",expression:"",params:"",remark:"",status:1,type:1}),{removeTab:E}=L(),i=W(),B=F({name:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0"}],command:[{required:!0,message:"\u8BF7\u8F93\u5165thankphp\u547D\u4EE4\uFF0C\u5982vresion"}],expression:[{required:!0,message:"\u8BF7\u8F93\u5165crontab\u89C4\u5219\uFF0C\u4F8B\uFF1A5 9 * * *"}]}),V=async()=>{const u=await P({id:m.query.id});Object.keys(t).forEach(o=>{t[o]=u[o]})},d=X([]),p=async()=>{var o;await((o=i.value)==null?void 0:o.validateField(["expression"]));const u=await J({expression:t.expression});d.value=u},v=async()=>{var u;await((u=i.value)==null?void 0:u.validate()),m.query.id?await K(t):await Q(t),E(),w.back()};return Y(async()=>{!m.query.id||(await V(),await p())}),(u,o)=>{const x=U,c=q,r=A,s=M,h=N,C=$,y=j,_=z,D=G,k=H,g=I,R=T;return Z(),ee("div",oe,[e(c,{class:"!border-none",shadow:"never"},{default:a(()=>[e(x,{content:u.$route.meta.title,onBack:o[0]||(o[0]=l=>u.$router.back())},null,8,["content"])]),_:1}),e(c,{class:"mt-4 !border-none",shadow:"never"},{default:a(()=>[e(k,{ref_key:"formRef",ref:i,class:"ls-form",model:t,"label-width":"85px",rules:B},{default:a(()=>[e(s,{label:"\u540D\u79F0",prop:"name"},{default:a(()=>[n("div",te,[e(r,{modelValue:t.name,"onUpdate:modelValue":o[1]||(o[1]=l=>t.name=l),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",maxlength:"30",clearable:""},null,8,["modelValue"])])]),_:1}),e(s,{label:"\u7C7B\u578B",prop:"type"},{default:a(()=>[e(C,{modelValue:t.type,"onUpdate:modelValue":o[2]||(o[2]=l=>t.type=l)},{default:a(()=>[e(h,{label:1},{default:a(()=>[ae]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(s,{label:"\u547D\u4EE4",prop:"command"},{default:a(()=>[n("div",le,[e(r,{modelValue:t.command,"onUpdate:modelValue":o[3]||(o[3]=l=>t.command=l),placeholder:"\u8BF7\u8F93\u5165thinkphp\u547D\u4EE4\uFF0C\u5982vresion",clearable:""},null,8,["modelValue"])])]),_:1}),e(s,{label:"\u53C2\u6570",prop:"params"},{default:a(()=>[n("div",ue,[e(r,{modelValue:t.params,"onUpdate:modelValue":o[4]||(o[4]=l=>t.params=l),placeholder:"\u8BF7\u8F93\u5165\u53C2\u6570\uFF0C\u4F8B:--id 8 --name \u6D4B\u8BD5",clearable:""},null,8,["modelValue"])])]),_:1}),e(s,{label:"\u72B6\u6001"},{default:a(()=>[e(y,{modelValue:t.status,"onUpdate:modelValue":o[5]||(o[5]=l=>t.status=l),"active-value":1,"inactive-value":2},null,8,["modelValue"])]),_:1}),e(s,{label:"\u89C4\u5219",prop:"expression"},{default:a(()=>[n("div",se,[e(r,{onBlur:p,modelValue:t.expression,"onUpdate:modelValue":o[6]||(o[6]=l=>t.expression=l),placeholder:"\u8BF7\u8F93\u5165crontab\u89C4\u5219\uFF0C\u4F8B\uFF1A5 9 * * *"},null,8,["modelValue"])])]),_:1}),e(s,null,{default:a(()=>[e(D,{data:d.value,style:{"max-width":"320px"}},{default:a(()=>[e(_,{prop:"time",label:"\u5E8F\u53F7","min-width":"80"}),e(_,{prop:"date",label:"\u6267\u884C\u65F6\u95F4","min-width":"240"})]),_:1},8,["data"])]),_:1}),e(s,{label:"\u5907\u6CE8",prop:"remark"},{default:a(()=>[n("div",re,[e(r,{modelValue:t.remark,"onUpdate:modelValue":o[7]||(o[7]=l=>t.remark=l),type:"textarea",autosize:{minRows:3,maxRows:6},maxlength:200,"show-word-limit":"",clearable:""},null,8,["modelValue"])])]),_:1})]),_:1},8,["model","rules"])]),_:1}),e(R,null,{default:a(()=>[e(g,{type:"primary",onClick:v},{default:a(()=>[ne]),_:1})]),_:1})])}}});export{Je as default};
