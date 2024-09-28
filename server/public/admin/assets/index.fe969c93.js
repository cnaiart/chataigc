import{_ as R}from"./index.f9197633.js";import{t as L,C as G,G as M,H as O,w as T,K as j,L as H,a0 as W,B as Z,M as z,Z as J,D as Q}from"./element-plus.38726bbd.js";import{r as U,j as y}from"./index.0aa35fa2.js";import{d as P,r as X,_ as Y,ag as $,ar as uu,o as l,c as _,V as t,M as o,O as eu,L as s,a as n,W as r,aa as p,u as C,S as d,T as F,U as k}from"./@vue.581f5ce0.js";import"./vue-drag-resize.3665149e.js";import"./lodash-es.b552e321.js";import"./async-validator.fb49d0f5.js";import"./@vueuse.788ba4d8.js";import"./@element-plus.048d13fe.js";import"./dayjs.3bbbdfdd.js";import"./axios.ef5f3479.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.ccf63c29.js";import"./vue-router.f90229e4.js";import"./pinia.8de84ecb.js";import"./vue-demi.ebc8116b.js";import"./css-color-function.7bd56a8d.js";import"./color.4d72ae60.js";import"./clone.f3914b59.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.e3c4d4cf.js";import"./ms.a9ae1d6d.js";import"./nprogress.db25c43d.js";import"./vue-clipboard3.37da43ca.js";import"./clipboard.51333a27.js";import"./echarts.8d7a50ae.js";import"./zrender.1084fa23.js";import"./tslib.60310f1a.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.18a086c3.js";function ou(){return U.get({url:"/setting.VoiceSetting/getConfig"})}function tu(x){return U.post({url:"/setting.VoiceSetting/setConfig",params:x})}const nu={class:"user-setup"},lu=n("div",{class:"font-medium mb-4"},"\u8BED\u97F3\u64AD\u62A5\u914D\u7F6E",-1),au=n("div",{class:"form-tips"},"\u5F00\u542F/\u5173\u95ED\u8BED\u97F3\u64AD\u62A5\u529F\u80FD\uFF0C\u9ED8\u8BA4\u5173\u95ED",-1),iu={class:"form-tips"},cu={class:"flex items-center leading-none"},su=F(" \u4E3A\u786E\u4FDD\u529F\u80FD\u6B63\u5E38\u4F7F\u7528\uFF0C\u8BF7\u5148\u524D\u5F80\u3010Key\u6C60\u7BA1\u7406\u3011-\u3010\u8BED\u97F3\u64AD\u62A5\u3011\u6DFB\u52A0Key "),_u=F("\u524D\u5F80\u8BBE\u7F6E"),du={key:0,class:"form-tips"},ru={class:"flex items-center leading-none"},Fu=n("div",null,"\u5982\u679C\u60A8\u5DF2\u5F00\u901A\uFF0C\u53EF\u76F4\u63A5\u4F7F\u7528\uFF1B\u5982\u679C\u672A\u5F00\u901A\uFF0C\u70B9\u51FB",-1),pu={href:"https://console.xfyun.cn/services/tts",target:"_blank",rel:"noopener noreferrer"},mu=F(" \u524D\u5F80\u5F00\u901A "),vu=F(" \u57FA\u7840\u53D1\u97F3\u4EBA "),hu={class:"w-[280px]"},Du=n("div",{class:"form-tips"},"\u53EF\u90090.25-4.0\uFF0C\u9ED8\u8BA41",-1),fu={class:"w-[280px]"},Eu=n("div",{class:"form-tips"}," \u53CD\u5411\u4EE3\u7406API\u57DF\u540D\uFF0C\u4E0D\u586B\u5199\u9ED8\u8BA4\u4E3A\uFF1A https://api.openai.com ",-1),Bu={class:"w-[280px]"},Au=n("div",{class:"form-tips"},"\u53EF\u90090-100\uFF0C\u9ED8\u8BA4\u4E3A50",-1),bu=n("div",{class:"font-medium mb-4"},"\u8BED\u97F3\u8F93\u5165\u914D\u7F6E",-1),gu=n("div",{class:"form-tips"},"\u5F00\u542F/\u5173\u95ED\u8BED\u97F3\u8F93\u5165\u529F\u80FD\uFF0C\u9ED8\u8BA4\u5173\u95ED",-1),Vu={class:"form-tips"},yu={class:"flex items-center leading-none"},Cu=F(" \u4E3A\u786E\u4FDD\u529F\u80FD\u6B63\u5E38\u4F7F\u7528\uFF0C\u8BF7\u5148\u524D\u5F80\u3010Key\u6C60\u7BA1\u7406\u3011-\u3010\u8BED\u97F3\u8F93\u5165\u3011\u6DFB\u52A0Key "),ku=F("\u524D\u5F80\u8BBE\u7F6E"),xu={key:0,class:"form-tips"},wu={class:"flex items-center leading-none"},Uu=n("div",null,"\u5982\u679C\u60A8\u5DF2\u5F00\u901A\uFF0C\u53EF\u76F4\u63A5\u4F7F\u7528\uFF1B\u5982\u679C\u672A\u5F00\u901A\uFF0C\u70B9\u51FB",-1),Pu={href:"https://console.xfyun.cn/services/tts",target:"_blank",rel:"noopener noreferrer"},Iu=F(" \u524D\u5F80\u5F00\u901A "),Ku={class:"w-[280px]"},Su=n("div",{class:"form-tips"}," \u53CD\u5411\u4EE3\u7406API\u57DF\u540D\uFF0C\u4E0D\u586B\u5199\u9ED8\u8BA4\u4E3A\uFF1A https://api.openai.com ",-1),qu=n("div",{class:"font-medium mb-4"},"\u8BED\u97F3\u5BF9\u8BDD\u914D\u7F6E",-1),Nu=n("div",{class:"form-tips"},"\u5F00\u542F/\u5173\u95ED\u8BED\u97F3\u5BF9\u8BDD\u529F\u80FD\uFF0C\u9ED8\u8BA4\u5173\u95ED",-1),Ru={class:"form-tips"},Lu={class:"flex items-center leading-none"},Gu=F(" \u4E3A\u786E\u4FDD\u529F\u80FD\u6B63\u5E38\u4F7F\u7528\uFF0C\u8BF7\u5148\u524D\u5F80\u3010Key\u6C60\u7BA1\u7406\u3011-\u8BED\u97F3\u64AD\u62A5\u3011\u548C\u3010\u8BED\u97F3\u8F93\u5165\u3011 \u6DFB\u52A0Key "),Mu=F("\u524D\u5F80\u8BBE\u7F6E"),Ou={key:0,class:"form-tips"},Tu={class:"flex items-center leading-none"},ju=n("div",null,"\u5982\u679C\u60A8\u5DF2\u5F00\u901A\uFF0C\u53EF\u76F4\u63A5\u4F7F\u7528\uFF1B\u5982\u679C\u672A\u5F00\u901A\uFF0C\u70B9\u51FB",-1),Hu={href:"https://console.xfyun.cn/services/tts",target:"_blank",rel:"noopener noreferrer"},Wu=F(" \u524D\u5F80\u5F00\u901A "),Zu=F(" \u57FA\u7840\u53D1\u97F3\u4EBA "),zu={class:"w-[280px]"},Ju=n("div",{class:"form-tips"},"\u53EF\u90090.25-4.0\uFF0C\u9ED8\u8BA41",-1),Qu={class:"w-[280px]"},Xu=n("div",{class:"form-tips"}," \u53CD\u5411\u4EE3\u7406API\u57DF\u540D\uFF0C\u4E0D\u586B\u5199\u9ED8\u8BA4\u4E3A\uFF1A https://api.openai.com ",-1),Yu={class:"w-[280px]"},$u=n("div",{class:"form-tips"},"\u53EF\u90090-100\uFF0C\u9ED8\u8BA4\u4E3A50",-1),ue=F("\u4FDD\u5B58"),ee=P({name:"voiceConfig"}),Re=P({...ee,setup(x){X([{title:"\u8BED\u97F3\u64AD\u62A5\u914D\u7F6E",key:"voice_broadcast",tips:"\u3010\u8BED\u97F3\u64AD\u62A5\u3011"},{title:"\u8BED\u97F3\u8F93\u5165\u914D\u7F6E",key:"voice_input",tips:"\u3010\u8BED\u97F3\u8F93\u5165\u3011"},{title:"\u8BED\u97F3\u5BF9\u8BDD\u914D\u7F6E",key:"voice_chat",tips:"\u3010\u8BED\u97F3\u64AD\u62A5\u3011\u548C\u3010\u8BED\u97F3\u8F93\u5165\u3011",openai:"\u3010\u8BED\u97F3\u5BF9\u8BDD\u3011"}]);const u=Y({voice_broadcast:{channel_config:{}},voice_input:{channel_config:{}},voice_chat:{channel_config:{}}}),w=async()=>{try{const v=await ou();for(const a in u)u[a]=v[a]}catch(v){console.log("\u83B7\u53D6=>",v)}},I=async()=>{try{await tu(u),w()}catch(v){console.log("\u4FDD\u5B58=>",v)}};return w(),(v,a)=>{const B=L,c=G,h=M,A=O,m=T,b=$("router-link"),D=j,f=H,E=W,g=Z,V=z,K=J,S=Q,q=R,N=uu("perms");return l(),_("div",nu,[t(S,{ref:"formRef","label-width":"120px"},{default:o(()=>[t(V,{shadow:"never",class:"!border-none mb-4"},{default:o(()=>[lu,t(c,{label:"\u662F\u5426\u5F00\u542F"},{default:o(()=>[n("div",null,[t(B,{modelValue:u.voice_broadcast.is_open,"onUpdate:modelValue":a[0]||(a[0]=e=>u.voice_broadcast.is_open=e),"active-value":1,"inactive-value":0},null,8,["modelValue"]),au])]),_:1}),t(c,{label:"\u8BED\u97F3\u901A\u9053",required:""},{default:o(()=>[n("div",null,[t(A,{modelValue:u.voice_broadcast.channel,"onUpdate:modelValue":a[1]||(a[1]=e=>u.voice_broadcast.channel=e)},{default:o(()=>[(l(!0),_(r,null,p(u.voice_broadcast.channel_config,(e,i)=>(l(),s(h,{key:i,label:i},{default:o(()=>[F(k(e.name),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"]),n("div",iu,[n("div",cu,[su,t(b,{to:{path:C(y)("setting.KeyPool/lists")}},{default:o(()=>[t(m,{link:"",type:"primary"},{default:o(()=>[_u]),_:1})]),_:1},8,["to"])])]),u.voice_broadcast.channel==="kdxf"?(l(),_("div",du,[n("div",ru,[Fu,n("a",pu,[t(m,{link:"",type:"primary"},{default:o(()=>[mu]),_:1})])])])):d("",!0)])]),_:1}),u.voice_broadcast.channel==="openai"?(l(),_(r,{key:0},[u.voice_broadcast.channel?(l(),s(c,{key:0,label:"\u8BED\u97F3\u6A21\u578B"},{default:o(()=>[t(f,{class:"w-[280px]",modelValue:u.voice_broadcast.channel_config[u.voice_broadcast.channel].model,"onUpdate:modelValue":a[2]||(a[2]=e=>u.voice_broadcast.channel_config[u.voice_broadcast.channel].model=e)},{default:o(()=>[(l(!0),_(r,null,p(u.voice_broadcast.channel_config[u.voice_broadcast.channel].model_list,(e,i)=>(l(),s(D,{key:i,label:e,value:i},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):d("",!0)],64)):d("",!0),t(c,{label:"\u53D1\u97F3\u4EBA\u7C7B\u578B"},{default:o(()=>[t(h,null,{default:o(()=>[vu]),_:1})]),_:1}),u.voice_broadcast.channel?(l(),s(c,{key:1,label:"\u53D1\u97F3\u4EBA"},{default:o(()=>[t(f,{class:"w-[280px]",modelValue:u.voice_broadcast.channel_config[u.voice_broadcast.channel].pronounce,"onUpdate:modelValue":a[3]||(a[3]=e=>u.voice_broadcast.channel_config[u.voice_broadcast.channel].pronounce=e)},{default:o(()=>[(l(!0),_(r,null,p(u.voice_broadcast.channel_config[u.voice_broadcast.channel].pronounce_list,(e,i)=>(l(),s(D,{key:i,label:e,value:i},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):d("",!0),u.voice_broadcast.channel==="openai"?(l(),_(r,{key:2},[u.voice_broadcast.channel?(l(),s(c,{key:0,label:"\u53D1\u97F3\u8BED\u901F"},{default:o(()=>[n("div",hu,[t(E,{modelValue:u.voice_broadcast.channel_config[u.voice_broadcast.channel].speed,"onUpdate:modelValue":a[4]||(a[4]=e=>u.voice_broadcast.channel_config[u.voice_broadcast.channel].speed=e),min:.25,max:4,step:.01},null,8,["modelValue","min","step"]),Du])]),_:1})):d("",!0),u.voice_broadcast.channel?(l(),s(c,{key:1,label:"\u81EA\u5B9A\u4E49API\u57DF\u540D"},{default:o(()=>[n("div",fu,[t(g,{placeholder:"\u81EA\u5B9A\u4E49API\u57DF\u540D",modelValue:u.voice_broadcast.channel_config[u.voice_broadcast.channel].agency_api,"onUpdate:modelValue":a[5]||(a[5]=e=>u.voice_broadcast.channel_config[u.voice_broadcast.channel].agency_api=e)},null,8,["modelValue"]),Eu])]),_:1})):d("",!0)],64)):(l(),_(r,{key:3},[u.voice_broadcast.channel?(l(),s(c,{key:0,label:"\u53D1\u97F3\u8BED\u901F"},{default:o(()=>[n("div",Bu,[t(E,{modelValue:u.voice_broadcast.channel_config[u.voice_broadcast.channel].speed,"onUpdate:modelValue":a[6]||(a[6]=e=>u.voice_broadcast.channel_config[u.voice_broadcast.channel].speed=e),min:0,max:100,step:1},null,8,["modelValue"]),Au])]),_:1})):d("",!0)],64))]),_:1}),t(V,{shadow:"never",class:"!border-none mb-4"},{default:o(()=>[bu,t(c,{label:"\u662F\u5426\u5F00\u542F"},{default:o(()=>[n("div",null,[t(B,{modelValue:u.voice_input.is_open,"onUpdate:modelValue":a[7]||(a[7]=e=>u.voice_input.is_open=e),"active-value":1,"inactive-value":0},null,8,["modelValue"]),gu])]),_:1}),t(c,{label:"\u8BED\u97F3\u901A\u9053",required:""},{default:o(()=>[n("div",null,[t(A,{modelValue:u.voice_input.channel,"onUpdate:modelValue":a[8]||(a[8]=e=>u.voice_input.channel=e)},{default:o(()=>[(l(!0),_(r,null,p(u.voice_input.channel_config,(e,i)=>(l(),s(h,{key:i,label:i},{default:o(()=>[F(k(e.name),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"]),n("div",Vu,[n("div",yu,[Cu,t(b,{to:{path:C(y)("setting.KeyPool/lists")}},{default:o(()=>[t(m,{link:"",type:"primary"},{default:o(()=>[ku]),_:1})]),_:1},8,["to"])])]),u.voice_input.channel==="kdxf"?(l(),_("div",xu,[n("div",wu,[Uu,n("a",Pu,[t(m,{link:"",type:"primary"},{default:o(()=>[Iu]),_:1})])])])):d("",!0)])]),_:1}),u.voice_input.channel==="openai"?(l(),_(r,{key:0},[u.voice_input.channel?(l(),s(c,{key:0,label:"\u8BED\u97F3\u6A21\u578B"},{default:o(()=>[t(f,{class:"w-[280px]",modelValue:u.voice_input.channel_config[u.voice_input.channel].model,"onUpdate:modelValue":a[9]||(a[9]=e=>u.voice_input.channel_config[u.voice_input.channel].model=e)},{default:o(()=>[(l(!0),_(r,null,p(u.voice_input.channel_config[u.voice_input.channel].model_list,(e,i)=>(l(),s(D,{key:i,label:e,value:i},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):d("",!0),u.voice_input.channel?(l(),s(c,{key:1,label:"\u81EA\u5B9A\u4E49API\u57DF\u540D"},{default:o(()=>[n("div",Ku,[t(g,{placeholder:"\u81EA\u5B9A\u4E49API\u57DF\u540D",modelValue:u.voice_input.channel_config[u.voice_input.channel].agency_api,"onUpdate:modelValue":a[10]||(a[10]=e=>u.voice_input.channel_config[u.voice_input.channel].agency_api=e)},null,8,["modelValue"]),Su])]),_:1})):d("",!0)],64)):d("",!0)]),_:1}),t(V,{shadow:"never",class:"!border-none mb-4"},{default:o(()=>[qu,t(c,{"label-width":"0"},{default:o(()=>[t(K,{type:"warning",title:"\u6E29\u99A8\u63D0\u793A\uFF1A\u8BED\u97F3\u5BF9\u8BDD\u9700\u8981\u7528\u5230\u3010\u8BED\u97F3\u8BC6\u522B\u3011\u548C\u3010\u8BED\u97F3\u5408\u6210\u3011\u670D\u52A1\uFF0C\u8BED\u97F3\u5408\u6210\u670D\u52A1\u53EF\u590D\u7528\u3010\u8BED\u97F3\u64AD\u62A5\u3011\u7684key\uFF0C\u8BED\u97F3\u8BC6\u522B\u670D\u52A1\u53EF\u4EE5\u590D\u7528\u3010\u8BED\u97F3\u8F93\u5165\u3011\u7684key\uFF0C\u5982\u4F7F\u7528\u7684\u8BDD\uFF0C\u9700\u8981\u524D\u5F80\u914D\u7F6E\u8BED\u97F3\u64AD\u62A5\u548C\u8BED\u97F3\u8F93\u5165\u7684key\u624D\u53EF\u6B63\u5E38\u4F7F\u7528\uFF01",closable:!1,"show-icon":""})]),_:1}),t(c,{label:"\u662F\u5426\u5F00\u542F"},{default:o(()=>[n("div",null,[t(B,{modelValue:u.voice_chat.is_open,"onUpdate:modelValue":a[11]||(a[11]=e=>u.voice_chat.is_open=e),"active-value":1,"inactive-value":0},null,8,["modelValue"]),Nu])]),_:1}),t(c,{label:"\u8BED\u97F3\u901A\u9053",required:""},{default:o(()=>[n("div",null,[t(A,{modelValue:u.voice_chat.channel,"onUpdate:modelValue":a[12]||(a[12]=e=>u.voice_chat.channel=e)},{default:o(()=>[(l(!0),_(r,null,p(u.voice_chat.channel_config,(e,i)=>(l(),s(h,{key:i,label:i},{default:o(()=>[F(k(e.name),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"]),n("div",Ru,[n("div",Lu,[Gu,t(b,{to:{path:C(y)("setting.KeyPool/lists")}},{default:o(()=>[t(m,{link:"",type:"primary"},{default:o(()=>[Mu]),_:1})]),_:1},8,["to"])])]),u.voice_chat.channel==="kdxf"?(l(),_("div",Ou,[n("div",Tu,[ju,n("a",Hu,[t(m,{link:"",type:"primary"},{default:o(()=>[Wu]),_:1})])])])):d("",!0)])]),_:1}),u.voice_chat.channel==="openai"?(l(),_(r,{key:0},[u.voice_chat.channel?(l(),s(c,{key:0,label:"\u8BED\u97F3\u6A21\u578B"},{default:o(()=>[t(f,{class:"w-[280px]",modelValue:u.voice_chat.channel_config[u.voice_chat.channel].model,"onUpdate:modelValue":a[13]||(a[13]=e=>u.voice_chat.channel_config[u.voice_chat.channel].model=e)},{default:o(()=>[(l(!0),_(r,null,p(u.voice_chat.channel_config[u.voice_chat.channel].model_list,(e,i)=>(l(),s(D,{key:i,label:e,value:i},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):d("",!0)],64)):d("",!0),t(c,{label:"\u53D1\u97F3\u4EBA\u7C7B\u578B"},{default:o(()=>[t(h,null,{default:o(()=>[Zu]),_:1})]),_:1}),u.voice_chat.channel?(l(),s(c,{key:1,label:"\u53D1\u97F3\u4EBA"},{default:o(()=>[t(f,{class:"w-[280px]",modelValue:u.voice_chat.channel_config[u.voice_chat.channel].pronounce,"onUpdate:modelValue":a[14]||(a[14]=e=>u.voice_chat.channel_config[u.voice_chat.channel].pronounce=e)},{default:o(()=>[(l(!0),_(r,null,p(u.voice_chat.channel_config[u.voice_chat.channel].pronounce_list,(e,i)=>(l(),s(D,{key:i,label:e,value:i},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):d("",!0),u.voice_chat.channel==="openai"?(l(),_(r,{key:2},[u.voice_chat.channel?(l(),s(c,{key:0,label:"\u53D1\u97F3\u8BED\u901F"},{default:o(()=>[n("div",zu,[t(E,{modelValue:u.voice_chat.channel_config[u.voice_chat.channel].speed,"onUpdate:modelValue":a[15]||(a[15]=e=>u.voice_chat.channel_config[u.voice_chat.channel].speed=e),min:.25,max:4,step:.01},null,8,["modelValue","min","step"]),Ju])]),_:1})):d("",!0),u.voice_chat.channel?(l(),s(c,{key:1,label:"\u81EA\u5B9A\u4E49API\u57DF\u540D"},{default:o(()=>[n("div",Qu,[t(g,{placeholder:"\u81EA\u5B9A\u4E49API\u57DF\u540D",modelValue:u.voice_chat.channel_config[u.voice_chat.channel].agency_api,"onUpdate:modelValue":a[16]||(a[16]=e=>u.voice_chat.channel_config[u.voice_chat.channel].agency_api=e)},null,8,["modelValue"]),Xu])]),_:1})):d("",!0)],64)):(l(),_(r,{key:3},[u.voice_chat.channel?(l(),s(c,{key:0,label:"\u53D1\u97F3\u8BED\u901F"},{default:o(()=>[n("div",Yu,[t(E,{modelValue:u.voice_chat.channel_config[u.voice_chat.channel].speed,"onUpdate:modelValue":a[17]||(a[17]=e=>u.voice_chat.channel_config[u.voice_chat.channel].speed=e),min:0,max:100,step:1},null,8,["modelValue"]),$u])]),_:1})):d("",!0)],64))]),_:1})]),_:1},512),eu((l(),s(q,null,{default:o(()=>[t(m,{type:"primary",onClick:I},{default:o(()=>[ue]),_:1})]),_:1})),[[N,["setting.VoiceSetting/setConfig"]]])])}}});export{Re as default};
