import{_ as V}from"./index.f9197633.js";import{t as x,C as N,B as U,w as I,M as P,D as q}from"./element-plus.38726bbd.js";import{r as B}from"./index.0aa35fa2.js";import{d as C,r as S,_ as d,ar as E,o as i,c as T,V as o,M as l,O as D,L as f,a as t,U as M,T as F}from"./@vue.581f5ce0.js";import"./vue-drag-resize.3665149e.js";import"./lodash-es.b552e321.js";import"./async-validator.fb49d0f5.js";import"./@vueuse.788ba4d8.js";import"./@element-plus.048d13fe.js";import"./dayjs.3bbbdfdd.js";import"./axios.ef5f3479.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.ccf63c29.js";import"./vue-router.f90229e4.js";import"./pinia.8de84ecb.js";import"./vue-demi.ebc8116b.js";import"./css-color-function.7bd56a8d.js";import"./color.4d72ae60.js";import"./clone.f3914b59.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.e3c4d4cf.js";import"./ms.a9ae1d6d.js";import"./nprogress.db25c43d.js";import"./vue-clipboard3.37da43ca.js";import"./clipboard.51333a27.js";import"./echarts.8d7a50ae.js";import"./zrender.1084fa23.js";import"./tslib.60310f1a.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.18a086c3.js";function R(){return B.get({url:"/setting.ai_setting/getNetworkConfig"})}function z(m){return B.post({url:"/setting.ai_setting/setNetworkConfig",params:m})}const G={class:"notice-config"},L=t("div",{class:"font-medium mb-7"},"\u8054\u7F51\u914D\u7F6E",-1),O={class:"mt-1 ml-2"},j=t("div",{class:"form-tips"},[t("p",null,"\u5F00\u542F\u540E\uFF0C\u524D\u53F0\u663E\u793A\u8054\u7F51\u529F\u80FD\uFF0C\u7528\u6237\u53EF\u81EA\u884C\u9009\u62E9\u662F\u5426\u5F00\u542F\uFF1B"),t("p",null,"\u56FD\u5185\u6A21\u578B\u57FA\u672C\u5DF2\u81EA\u5E26\u8054\u7F51\u641C\u7D22\uFF0C\u76EE\u524D\u8054\u7F51\u641C\u7D22\u53EA\u5BF9GPT\u6709\u6548")],-1),H=t("div",{class:"form-tips"},"\u586B\u51990\u8868\u793A\u4E0D\u989D\u5916\u6263\u5BF9\u8BDD\u6761\u6570",-1),J=t("div",{class:"form-tips"},"\u8054\u7F51\u641C\u7D22\u591A\u5C11\u6761\u5185\u5BB9\uFF0C\u586B\u51991-30\u4E4B\u95F4\u7684\u6574\u6570",-1),K=t("div",{class:"form-tips"}," \u73B0\u5728\u8054\u7F51\u53EA\u652F\u6301\u4F7F\u7528https://lite.duckduckgo.com\uFF0C\u5982\u679C\u60F3\u8981\u56FD\u5185\u670D\u52A1\u5668\u4E5F\u53EF\u4EE5\u4F7F\u7528\u8054\u7F51\u529F\u80FD\uFF0C\u8BF7\u586B\u5199https://lite.duckduckgo.com\u7684\u53CD\u5411\u4EE3\u7406API\u57DF\u540D\uFF0C\u4E0D\u586B\u5199\u9ED8\u8BA4\u4E3A\uFF1Ahttps://lite.duckduckgo.com ",-1),Q={class:"form-tips flex items-center"},W=F(" \uFF5BnetworkData\uFF5D\u5C31\u662F\u8054\u7F51\u641C\u7D22\u7684\u6570\u636E\uFF0C\uFF5Bdate}\u662F\u65E5\u671F "),X=F("\u590D\u5236\u793A\u4F8B\u6307\u4EE4"),Y=F("\u4FDD\u5B58"),Z=C({name:"networkingConfig"}),qu=C({...Z,setup(m){const p=S(),u=d({network_is_open:1,search_limit:"",network_api:"",network_balance:"",network_system:""}),w=d({search_limit:[{required:!0,message:"\u8BF7\u8F93\u5165\u641C\u7D22\u6761\u6570"}],network_balance:[{required:!0,message:"\u8BF7\u8F93\u5165\u989D\u5916\u6263\u8D39"}]}),c=async()=>{try{const n=await R();for(const e in u)u[e]=n[e];console.log(u)}catch(n){console.log("\u83B7\u53D6=>",n)}},k=async()=>{var n;await((n=p.value)==null?void 0:n.validate());try{await z(u),await c()}catch(e){console.log("\u4FDD\u5B58=>",e)}};return c(),(n,e)=>{const g=x,s=N,a=U,_=I,v=P,h=q,b=V,A=E("copy"),y=E("perms");return i(),T("div",G,[o(h,{ref_key:"formRef",ref:p,rules:w,model:u,"label-width":"120px"},{default:l(()=>[o(v,{shadow:"never",class:"!border-none"},{default:l(()=>[L,o(s,{label:"\u8054\u7F51\u529F\u80FD",prop:"network_is_open"},{default:l(()=>[t("div",null,[o(g,{modelValue:u.network_is_open,"onUpdate:modelValue":e[0]||(e[0]=r=>u.network_is_open=r),"active-value":1,"inactive-value":0},null,8,["modelValue"]),t("span",O,M(u.network_is_open?"\u5F00\u542F":"\u5173\u95ED"),1),j])]),_:1}),o(s,{label:"\u989D\u5916\u6263\u8D39",prop:"network_balance"},{default:l(()=>[t("div",null,[o(a,{type:"number",class:"w-[375px]",modelValue:u.network_balance,"onUpdate:modelValue":e[1]||(e[1]=r=>u.network_balance=r),placeholder:"\u8BF7\u8F93\u5165\u989D\u5916\u6263\u8D39",clearable:""},null,8,["modelValue"]),H])]),_:1}),o(s,{label:"\u641C\u7D22\u6761\u6570",prop:"search_limit"},{default:l(()=>[t("div",null,[o(a,{type:"number",class:"w-[375px]",modelValue:u.search_limit,"onUpdate:modelValue":e[2]||(e[2]=r=>u.search_limit=r),placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u6761\u6570",clearable:""},null,8,["modelValue"]),J])]),_:1}),o(s,{label:"\u8054\u7F51API",prop:"network_api"},{default:l(()=>[t("div",null,[o(a,{class:"w-[375px]",modelValue:u.network_api,"onUpdate:modelValue":e[3]||(e[3]=r=>u.network_api=r),placeholder:"\u8BF7\u8F93\u5165\u8054\u7F51API",clearable:""},null,8,["modelValue"]),K])]),_:1}),o(s,{label:"\u8054\u7F51\u6307\u4EE4",prop:"network_system"},{default:l(()=>[t("div",null,[o(a,{type:"textarea",class:"w-[375px]",modelValue:u.network_system,"onUpdate:modelValue":e[4]||(e[4]=r=>u.network_system=r),placeholder:"\u8BF7\u8F93\u5165\u8054\u7F51\u6307\u4EE4",clearable:"",resize:"none",rows:6},null,8,["modelValue"]),t("div",Q,[W,D((i(),f(_,{link:"",type:"primary"},{default:l(()=>[X]),_:1})),[[A,"{networkData} \uFF0C\u6839\u636E\u4E0A\u9762\u4FE1\u606F\u5BF9\u6211\u7684\u95EE\u9898\u8FDB\u884C\u56DE\u7B54\uFF0C\u56DE\u7B54\u5185\u5BB9\u4EC5\u53EF\u80FD\u4E30\u5BCC\uFF0C\u5982\u6709\u95EE\u5230\u4ECA\u5929\u65E5\u671F\u4E4B\u7C7B\u7684\u95EE\u9898\uFF0C\u4E0D\u8981\u56DE\u7B54\u5176\u4ED6\u4FE1\u606F\uFF0C\u7ACB\u5373\u76F4\u63A5\u56DE\u7B54:{date}"]])])])]),_:1})]),_:1})]),_:1},8,["rules","model"]),D((i(),f(b,null,{default:l(()=>[o(_,{type:"primary",onClick:k},{default:l(()=>[Y]),_:1})]),_:1})),[[y,["setting.ai_setting/setNetworkConfig"]]])])}}});export{qu as default};