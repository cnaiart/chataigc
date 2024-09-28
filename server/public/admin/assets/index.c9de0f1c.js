import{_ as f}from"./index.f9197633.js";import{t as D,C as g,B as V,w as k,D as y,M as h}from"./element-plus.38726bbd.js";import{r as _}from"./index.0aa35fa2.js";import{d as b,r as d,_ as w,j as x,o as P,c as U,V as u,M as a,a as l,W as I,T as r}from"./@vue.581f5ce0.js";import"./vue-drag-resize.3665149e.js";import"./lodash-es.b552e321.js";import"./async-validator.fb49d0f5.js";import"./@vueuse.788ba4d8.js";import"./@element-plus.048d13fe.js";import"./dayjs.3bbbdfdd.js";import"./axios.ef5f3479.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.ccf63c29.js";import"./vue-router.f90229e4.js";import"./pinia.8de84ecb.js";import"./vue-demi.ebc8116b.js";import"./css-color-function.7bd56a8d.js";import"./color.4d72ae60.js";import"./clone.f3914b59.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.e3c4d4cf.js";import"./ms.a9ae1d6d.js";import"./nprogress.db25c43d.js";import"./vue-clipboard3.37da43ca.js";import"./clipboard.51333a27.js";import"./echarts.8d7a50ae.js";import"./zrender.1084fa23.js";import"./tslib.60310f1a.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.18a086c3.js";function q(){return _.get({url:"/setting.content_censor/getConfig"})}function K(s){return _.post({url:"/setting.content_censor/setConfig",params:s})}const M=l("div",{class:"text-lg font-medium"},"\u5185\u5BB9\u5BA1\u6838",-1),N={class:"mt-4"},S=l("div",{class:"form-tips"}," \u9ED8\u8BA4\u5173\u95ED\uFF0C\u5F00\u542F\u540E\uFF0C\u95EE\u9898\u4F1A\u9884\u5148\u63D0\u4EA4\u81F3\u767E\u5EA6\uFF0C\u5BA1\u6838\u901A\u8FC7\u540E\u624D\u4F1A\u56DE\u7B54\u3002\u8BF7\u586B\u5199\u76F8\u5E94\u7684appid\u548Ckey ",-1),T=l("div",{class:"form-tips"}," \u9ED8\u8BA4\u5173\u95ED\uFF0C\u5F00\u542F\u540E\uFF0C\u540E\u53F0\u8BA1\u5212\u4EFB\u52A1\u626B\u63CF\u5185\u5BB9\u63D0\u4EA4\u81F3\u767E\u5EA6\uFF0C\u5BA1\u6838\u8FDD\u89C4\u4F1A\u9690\u85CF\u5185\u5BB9\uFF0C\u6709\u4E00\u5B9A\u65F6\u95F4\u5EF6\u8FDF\u3002\u8BF7\u586B\u5199\u76F8\u5E94\u7684appid\u548Ckey ",-1),j=l("div",{class:"form-tips"}," \u7ED8\u753B\u63D0\u793A\u8BCD\u5BA1\u6838\uFF0C\u9ED8\u8BA4\u5173\u95ED\uFF0C\u5F00\u542F\u540E\uFF0C\u540E\u53F0\u8BA1\u5212\u4EFB\u52A1\u626B\u63CF\u5185\u5BB9\u63D0\u4EA4\u81F3\u767E\u5EA6\uFF0C\u5BA1\u6838\u8FDD\u89C4\u4F1A\u9690\u85CF\u5185\u5BB9\uFF0C\u6709\u4E00\u5B9A\u65F6\u95F4\u5EF6\u8FDF\u3002 ",-1),R=l("div",{class:"form-tips"}," \u9ED8\u8BA4\u5173\u95ED\uFF0C\u5F00\u542F\u540E\uFF0C\u540E\u53F0\u8BA1\u5212\u4EFB\u52A1\u626B\u63CF\u5185\u5BB9\u63D0\u4EA4\u81F3\u767E\u5EA6\uFF0C\u5BA1\u6838\u8FDD\u89C4\u4F1A\u9690\u85CF\u5185\u5BB9\uFF0C\u6709\u4E00\u5B9A\u65F6\u95F4\u5EF6\u8FDF\u3002 ",-1),W={class:"form-tips"},z=r(" \u5982\u679C\u60A8\u5DF2\u5F00\u901A\uFF0C\u53EF\u76F4\u63A5\u586B\u5199\uFF1B\u5982\u679C\u672A\u5F00\u901A\uFF0C\u70B9\u51FB "),G={href:"https://ai.baidu.com/solution/censoring?track=cp:ainsem|pf:pc|pp:chanpin-neirongshenhe|pu:neirongshenhe-baidu|ci:|kw:10008266",target:"_blank",rel:"noopener noreferrer"},H=r(" \u524D\u5F80\u5F00\u901A "),J=r("\u4FDD\u5B58"),xu=b({__name:"index",setup(s){const c=d(),e=d({ask_open:0,is_open:0,prompt_open:0,image_open:0,app_id:"",api_key:"",secret_key:""}),F=async()=>{e.value=await q()},B=w({app_id:[{required:!0,message:"\u8BF7\u8F93\u5165appid",trigger:"change"}],api_key:[{required:!0,message:"\u8BF7\u8F93\u5165api_key",trigger:"change"}],secret_key:[{required:!0,message:"\u8BF7\u8F93\u5165secret_key",trigger:"change"}]}),E=async()=>{await K(e.value),F()};return x(()=>{F()}),(L,o)=>{const i=D,n=g,p=V,m=k,A=y,v=h,C=f;return P(),U(I,null,[u(v,{shadow:"never",class:"!border-none"},{default:a(()=>[M,l("div",N,[u(A,{"label-width":"120px",ref:c.value,model:e.value,rules:B},{default:a(()=>[u(n,{label:"\u95EE\u9898\u5BA1\u6838"},{default:a(()=>[l("div",null,[u(i,{modelValue:e.value.ask_open,"onUpdate:modelValue":o[0]||(o[0]=t=>e.value.ask_open=t),"active-value":1,"inactive-value":0},null,8,["modelValue"]),S])]),_:1}),u(n,{label:"\u5185\u5BB9\u5BA1\u6838"},{default:a(()=>[l("div",null,[u(i,{modelValue:e.value.is_open,"onUpdate:modelValue":o[1]||(o[1]=t=>e.value.is_open=t),"active-value":1,"inactive-value":0},null,8,["modelValue"]),T])]),_:1}),u(n,{label:"\u63D0\u793A\u8BCD\u5BA1\u6838"},{default:a(()=>[l("div",null,[u(i,{modelValue:e.value.prompt_open,"onUpdate:modelValue":o[2]||(o[2]=t=>e.value.prompt_open=t),"active-value":1,"inactive-value":0},null,8,["modelValue"]),j])]),_:1}),u(n,{label:"\u56FE\u7247\u5BA1\u6838"},{default:a(()=>[l("div",null,[u(i,{modelValue:e.value.image_open,"onUpdate:modelValue":o[3]||(o[3]=t=>e.value.image_open=t),"active-value":1,"inactive-value":0},null,8,["modelValue"]),R])]),_:1}),u(n,{label:"APPID",prop:"app_id"},{default:a(()=>[l("div",null,[u(p,{modelValue:e.value.app_id,"onUpdate:modelValue":o[4]||(o[4]=t=>e.value.app_id=t),class:"w-[400px]",placeholder:"\u8BF7\u8F93\u5165APPID"},null,8,["modelValue"]),l("div",W,[z,l("a",G,[u(m,{type:"primary",link:"",class:"ml-2"},{default:a(()=>[H]),_:1})])])])]),_:1}),u(n,{label:"APIKey",prop:"api_key"},{default:a(()=>[u(p,{modelValue:e.value.api_key,"onUpdate:modelValue":o[5]||(o[5]=t=>e.value.api_key=t),class:"w-[400px]",placeholder:"\u8BF7\u8F93\u5165APIKey"},null,8,["modelValue"])]),_:1}),u(n,{label:"Secret Key",prop:"secret_key"},{default:a(()=>[u(p,{modelValue:e.value.secret_key,"onUpdate:modelValue":o[6]||(o[6]=t=>e.value.secret_key=t),class:"w-[400px]",placeholder:"\u8BF7\u8F93\u5165Secret Key"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])])]),_:1}),u(C,null,{default:a(()=>[u(m,{type:"primary",onClick:E},{default:a(()=>[J]),_:1})]),_:1})],64)}}});export{xu as default};
