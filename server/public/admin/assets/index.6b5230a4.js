import{B as J,C as Q,K as X,L as Y,w as Z,D as ee,M as te,N as oe,O as le,P as ae}from"./element-plus.38726bbd.js";import{_ as ue}from"./index.vue_vue_type_script_setup_true_lang.c6066b25.js";import{P as ne}from"./index.1c6c033d.js";import{r as x,f as k,_ as se}from"./index.0aa35fa2.js";import{_ as ie}from"./index.vue_vue_type_script_setup_true_lang.42418fb0.js";import{_ as re}from"./index.vue_vue_type_script_setup_true_lang.625bdcec.js";import{d as M,_ as de,r as U,ar as me,o as u,c as f,V as t,M as o,ac as A,u as n,W as L,aa as pe,a as i,O as S,L as _,S as D,U as F,k as ce,T as g}from"./@vue.581f5ce0.js";import{u as _e}from"./usePaging.2d3fb421.js";import"./lodash-es.b552e321.js";import"./async-validator.fb49d0f5.js";import"./@vueuse.788ba4d8.js";import"./@element-plus.048d13fe.js";import"./dayjs.3bbbdfdd.js";import"./axios.ef5f3479.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./vue-drag-resize.3665149e.js";import"./lodash.ccf63c29.js";import"./vue-router.f90229e4.js";import"./pinia.8de84ecb.js";import"./vue-demi.ebc8116b.js";import"./css-color-function.7bd56a8d.js";import"./color.4d72ae60.js";import"./clone.f3914b59.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.e3c4d4cf.js";import"./ms.a9ae1d6d.js";import"./nprogress.db25c43d.js";import"./vue-clipboard3.37da43ca.js";import"./clipboard.51333a27.js";import"./echarts.8d7a50ae.js";import"./zrender.1084fa23.js";import"./tslib.60310f1a.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.18a086c3.js";function K(v){return x.get({url:"/draw.draw_records/lists",params:v},{ignoreCancelToken:!0})}function fe(){return x.get({url:"/draw.draw_records/drawModel"},{ignoreCancelToken:!0})}function ve(v){return x.post({url:"/draw.draw_records/delete",params:v})}const he=g("\u67E5\u8BE2"),Fe=g("\u91CD\u7F6E"),ge={class:"mb-4"},be=g(" \u6279\u91CF\u5220\u9664 "),we={class:"flex items-center"},Ee={class:"ml-4"},Ce={class:"line-clamp-2 cursor-pointer"},ke=i("div",{class:"mt-[20px]"},"\u7528\u6237\u8F93\u5165\u7FFB\u8BD1\uFF1A",-1),De={class:"mt-[6px]"},xe={class:"flex items-center"},Be={key:0},ye=["onClick"],Ve={class:"flex items-center"},Te=g(" \u5220\u9664 "),Pe={class:"flex justify-end mt-4"},Ue=M({name:"dialogueRecord"}),gt=M({...Ue,setup(v){const a=de({type:"1",status:"",user_info:"",prompt:"",model:"",start_time:"",end_time:""}),B=U([]),b=U([]),{pager:r,getLists:w,resetPage:E,resetParams:R}=_e({fetchFun:K,params:a}),$=async()=>{try{B.value=await fe()}catch(d){console.log("\u83B7\u53D6\u7ED8\u753B\u6A21\u578B",d)}},N=d=>{b.value=d},y=async d=>{await k.confirm("\u786E\u5B9A\u8981\u5220\u9664\uFF1F"),await ve({ids:d}),await k.msgSuccess("\u5220\u9664\u6210\u529F"),w()};return w(),$(),(d,l)=>{const V=J,m=Q,p=X,T=Y,z=re,h=Z,I=ie,O=ee,P=te,s=oe,C=se,q=ne,j=le,W=ue,G=me("perms"),H=ae;return u(),f("div",null,[t(P,{class:"!border-none",shadow:"never"},{default:o(()=>[t(O,{ref:"formRef",class:"mb-[-16px]",model:a,inline:!0},{default:o(()=>[t(m,{label:"\u7528\u6237\u4FE1\u606F"},{default:o(()=>[t(V,{class:"w-[280px]",modelValue:a.user_info,"onUpdate:modelValue":l[0]||(l[0]=e=>a.user_info=e),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237ID/\u7528\u6237\u6635\u79F0",clearable:"",onKeyup:A(n(E),["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),t(m,{label:"\u5173\u952E\u8BCD"},{default:o(()=>[t(V,{class:"w-[280px]",modelValue:a.prompt,"onUpdate:modelValue":l[1]||(l[1]=e=>a.prompt=e),placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD",clearable:"",onKeyup:A(n(E),["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),t(m,{label:"\u7ED8\u753B\u6A21\u578B"},{default:o(()=>[t(T,{class:"w-[280px]",modelValue:a.model,"onUpdate:modelValue":l[2]||(l[2]=e=>a.model=e)},{default:o(()=>[t(p,{label:"\u5168\u90E8",value:""}),(u(!0),f(L,null,pe(B.value,(e,c)=>(u(),_(p,{key:c,label:e,value:c},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(m,{label:"\u751F\u6210\u7ED3\u679C"},{default:o(()=>[t(T,{class:"w-[280px]",modelValue:a.status,"onUpdate:modelValue":l[3]||(l[3]=e=>a.status=e)},{default:o(()=>[t(p,{label:"\u5168\u90E8",value:""}),t(p,{label:"\u751F\u6210\u4E2D",value:1}),t(p,{label:"\u751F\u6210\u5931\u8D25",value:2}),t(p,{label:"\u751F\u6210\u6210\u529F",value:3})]),_:1},8,["modelValue"])]),_:1}),t(m,{label:"\u751F\u6210\u65F6\u95F4"},{default:o(()=>[t(z,{startTime:a.start_time,"onUpdate:startTime":l[4]||(l[4]=e=>a.start_time=e),endTime:a.end_time,"onUpdate:endTime":l[5]||(l[5]=e=>a.end_time=e)},null,8,["startTime","endTime"])]),_:1}),t(m,null,{default:o(()=>[t(h,{type:"primary",onClick:n(E)},{default:o(()=>[he]),_:1},8,["onClick"]),t(h,{onClick:n(R)},{default:o(()=>[Fe]),_:1},8,["onClick"]),t(I,{class:"ml-2.5","fetch-fun":n(K),params:a,"page-size":n(r).size},null,8,["fetch-fun","params","page-size"])]),_:1})]),_:1},8,["model"])]),_:1}),t(P,{class:"!border-none mt-4",shadow:"never"},{default:o(()=>[i("div",ge,[t(h,{type:"default",plain:!0,disabled:!b.value.length,onClick:l[6]||(l[6]=e=>y(b.value.map(c=>c.id)))},{default:o(()=>[be]),_:1},8,["disabled"])]),S((u(),_(j,{size:"large",data:n(r).lists,onSelectionChange:N},{default:o(()=>[t(s,{type:"selection",width:"55"}),t(s,{label:"ID",prop:"id","min-width":"80"}),t(s,{label:"\u7528\u6237\u4FE1\u606F","min-width":"200"},{default:o(({row:e})=>[i("div",we,[e.avatar?(u(),_(C,{key:0,class:"flex-none",src:e.avatar,width:48,height:48,"preview-src-list":[e.avatar],"preview-teleported":!0,"hide-on-click-modal":!0,fit:"contain"},null,8,["src","preview-src-list"])):D("",!0),i("span",Ee,F(e.nickname),1)])]),_:1}),t(s,{label:"\u751F\u6210\u65F6\u95F4",prop:"create_time","min-width":"180","show-tooltip-when-overflow":""}),t(s,{label:"\u7528\u6237\u8F93\u5165",prop:"prompt","min-width":"280"},{default:o(({row:e})=>[t(q,{ref:"popRef",title:"\u7528\u6237\u8F93\u5165",width:"700px",clickModalClose:"",cancelButtonText:"\u53D6\u6D88",confirmButtonText:"\u786E\u5B9A"},{trigger:o(()=>[i("div",Ce,F(e.prompt),1)]),default:o(()=>[i("div",null,F(e.prompt),1),e.prompt_en?(u(),f(L,{key:0},[ke,i("div",De,F(e.prompt_en),1)],64)):D("",!0)]),_:2},1536)]),_:1}),t(s,{label:"\u751F\u6210\u7ED3\u679C","min-width":"160"},{default:o(({row:e})=>[i("div",xe,[e.status==1?(u(),f("span",Be,"\u751F\u6210\u4E2D...")):e.status==3?(u(),_(C,{key:1,class:"flex-none",src:e.thumbnail,width:64,height:64,"preview-src-list":[e.image],"preview-teleported":!0,"hide-on-click-modal":!0,fit:"contain"},null,8,["src","preview-src-list"])):(u(),f("span",{key:2,class:"text-error cursor-pointer",onClick:c=>n(k).alert("\u751F\u6210\u5931\u8D25: "+e.fail_reason,"\u5931\u8D25\u539F\u56E0")}," \u751F\u6210\u5931\u8D25 ",8,ye))])]),_:1}),t(s,{label:"\u7ED8\u753B\u6A21\u578B",prop:"model_text","min-width":"140"}),t(s,{label:"\u4E0A\u4F20\u56FE\u7247","min-width":"160"},{default:o(({row:e})=>[i("div",Ve,[e.image_base?(u(),_(C,{key:0,class:"flex-none",src:e.image_base,width:64,height:64,"preview-src-list":[e.image_base],"preview-teleported":!0,"hide-on-click-modal":!0,fit:"contain"},null,8,["src","preview-src-list"])):D("",!0)])]),_:1}),t(s,{label:"\u6D88\u8017\u6761\u6570",prop:"use_tokens","min-width":"120"}),t(s,{label:"\u64CD\u4F5C","min-width":"180",fixed:"right"},{default:o(({row:e})=>[S((u(),_(h,{type:"danger",link:"",onClick:c=>y([e.id])},{default:o(()=>[Te]),_:2},1032,["onClick"])),[[G,["chat_records/del"]]])]),_:1})]),_:1},8,["data"])),[[H,n(r).loading]]),i("div",Pe,[t(W,{modelValue:n(r),"onUpdate:modelValue":l[7]||(l[7]=e=>ce(r)?r.value=e:null),onChange:n(w)},null,8,["modelValue","onChange"])])]),_:1})])}}});export{gt as default};