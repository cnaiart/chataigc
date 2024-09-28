import{B as W,C as G,K as H,L as J,w as Q,D as X,M as Y,N as Z,b as ee,t as te,O as ae,P as oe}from"./element-plus.38726bbd.js";import{_ as le}from"./index.vue_vue_type_script_setup_true_lang.c6066b25.js";import{j as A,f as ue,b as ne}from"./index.0aa35fa2.js";import{_ as ie}from"./index.vue_vue_type_script_setup_true_lang.42418fb0.js";import{d as L,r as x,_ as se,ag as re,ar as de,o as i,c as M,V as e,M as a,ac as me,u as l,W as ce,aa as pe,a as p,O as _,L as d,U as b,k as _e,T as f}from"./@vue.581f5ce0.js";import{u as fe}from"./usePaging.2d3fb421.js";import{c as Fe}from"./creative_category.4ebe670b.js";import{b as D,d as Ee,f as ge}from"./creative_model.0e91f7fd.js";import"./lodash-es.b552e321.js";import"./async-validator.fb49d0f5.js";import"./@vueuse.788ba4d8.js";import"./@element-plus.048d13fe.js";import"./dayjs.3bbbdfdd.js";import"./axios.ef5f3479.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.ccf63c29.js";import"./vue-router.f90229e4.js";import"./pinia.8de84ecb.js";import"./vue-demi.ebc8116b.js";import"./css-color-function.7bd56a8d.js";import"./color.4d72ae60.js";import"./clone.f3914b59.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.e3c4d4cf.js";import"./ms.a9ae1d6d.js";import"./vue-drag-resize.3665149e.js";import"./nprogress.db25c43d.js";import"./vue-clipboard3.37da43ca.js";import"./clipboard.51333a27.js";import"./echarts.8d7a50ae.js";import"./zrender.1084fa23.js";import"./tslib.60310f1a.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.18a086c3.js";import"./index.1c6c033d.js";const ve=f("\u67E5\u8BE2"),be=f("\u91CD\u7F6E"),he=f(" \u65B0\u589E\u521B\u4F5C\u6A21\u578B "),Ce=f(" \u6279\u91CF\u5220\u9664 "),Be=f(" \u7F16\u8F91 "),ye=f(" \u5220\u9664 "),we={class:"flex justify-end mt-4"},Ve=L({name:"problemExample"}),ft=L({...Ve,setup(ke){const C=x([]),n=se({name:"",category_id:"",status:""}),h=x([]),B=async s=>{await ue.confirm("\u786E\u5B9A\u8981\u5220\u9664\uFF1F"),await Ee({id:s}),g()},S=s=>{h.value=s},P=async()=>{const{lists:s}=await Fe();C.value=s},U=async s=>{await ge({id:s}),g()},{pager:m,getLists:g,resetPage:y,resetParams:$}=fe({fetchFun:D,params:n});return g(),P(),(s,u)=>{const z=W,v=G,F=H,w=J,c=Q,K=ie,N=X,V=Y,T=ne,k=re("router-link"),o=Z,I=ee,O=te,R=ae,j=le,E=de("perms"),q=oe;return i(),M("div",null,[e(V,{class:"!border-none",shadow:"never"},{default:a(()=>[e(N,{ref:"formRef",class:"mb-[-16px]",model:n,inline:!0},{default:a(()=>[e(v,{label:"\u6A21\u578B\u540D\u79F0"},{default:a(()=>[e(z,{class:"w-[280px]",modelValue:n.name,"onUpdate:modelValue":u[0]||(u[0]=t=>n.name=t),placeholder:"\u8BF7\u8F93\u5165\u6A21\u578B\u540D\u79F0",clearable:"",onKeyup:me(l(y),["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(v,{label:"\u6240\u5C5E\u7C7B\u76EE"},{default:a(()=>[e(w,{class:"w-[280px]",modelValue:n.category_id,"onUpdate:modelValue":u[1]||(u[1]=t=>n.category_id=t)},{default:a(()=>[e(F,{label:"\u5168\u90E8",value:""}),(i(!0),M(ce,null,pe(C.value,(t,r)=>(i(),d(F,{key:r,label:t.name,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(v,{label:"\u6A21\u578B\u72B6\u6001"},{default:a(()=>[e(w,{class:"w-[280px]",modelValue:n.status,"onUpdate:modelValue":u[2]||(u[2]=t=>n.status=t)},{default:a(()=>[e(F,{label:"\u5168\u90E8",value:""}),e(F,{label:"\u5F00\u542F",value:1}),e(F,{label:"\u5173\u95ED",value:0})]),_:1},8,["modelValue"])]),_:1}),e(v,null,{default:a(()=>[e(c,{type:"primary",onClick:l(y)},{default:a(()=>[ve]),_:1},8,["onClick"]),e(c,{onClick:l($)},{default:a(()=>[be]),_:1},8,["onClick"]),e(K,{class:"ml-2.5","fetch-fun":l(D),params:n,"page-size":l(m).size},null,8,["fetch-fun","params","page-size"])]),_:1})]),_:1},8,["model"])]),_:1}),e(V,{class:"!border-none mt-4",shadow:"never"},{default:a(()=>[p("div",null,[_((i(),d(k,{to:l(A)("creation.creationModel/add:edit")},{default:a(()=>[e(c,{type:"primary"},{icon:a(()=>[e(T,{name:"el-icon-Plus"})]),default:a(()=>[he]),_:1})]),_:1},8,["to"])),[[E,["creation.creationModel/add","creation.creationModel/add:edit"]]]),_((i(),d(c,{class:"ml-2",type:"default",plain:!0,disabled:!h.value.length,onClick:u[3]||(u[3]=t=>B(h.value.map(r=>r.id)))},{default:a(()=>[Ce]),_:1},8,["disabled"])),[[E,["creation.creationModel/del"]]])]),_((i(),d(R,{size:"large",class:"mt-4",data:l(m).lists,onSelectionChange:S},{default:a(()=>[e(o,{type:"selection",width:"55"}),e(o,{label:"\u56FE\u6807","min-width":"100"},{default:a(({row:t})=>[e(I,{src:t.image,class:"w-[44px] h-[44px]"},null,8,["src"])]),_:1}),e(o,{label:"\u6A21\u578B\u540D\u79F0",prop:"name","min-width":"120"}),e(o,{label:"\u6A21\u578B\u63CF\u8FF0",prop:"tips","min-width":"150"}),e(o,{label:"\u6240\u5C5E\u7C7B\u76EE",prop:"category_name","min-width":"120"}),_((i(),d(o,{label:"\u72B6\u6001","min-width":"100"},{default:a(({row:t})=>[e(O,{onChange:r=>U(t.id),modelValue:t.status,"onUpdate:modelValue":r=>t.status=r,"active-value":1,"inactive-value":0},null,8,["onChange","modelValue","onUpdate:modelValue"])]),_:1})),[[E,["creation.creationModel/status"]]]),e(o,{label:"\u8BBF\u95EE\u6570\u636E/\u6B21","min-width":"160"},{default:a(({row:t})=>[p("div",null,"\u4ECA\u65E5\u8BBF\u95EE\uFF1A"+b(t.day_use_count),1),p("div",null,"\u7D2F\u8BA1\u8BBF\u95EE\uFF1A"+b(t.all_use_count),1)]),_:1}),e(o,{label:"\u4F7F\u7528\u4EBA\u6570","min-width":"160"},{default:a(({row:t})=>[p("div",null,"\u4ECA\u65E5\u4F7F\u7528\uFF1A"+b(t.day_user_count),1),p("div",null,"\u7D2F\u8BA1\u4F7F\u7528\uFF1A"+b(t.all_user_count),1)]),_:1}),e(o,{label:"\u6392\u5E8F",prop:"sort","min-width":"120"}),e(o,{label:"\u521B\u5EFA\u65F6\u95F4",prop:"create_time","min-width":"100"}),e(o,{label:"\u64CD\u4F5C",width:"150",fixed:"right"},{default:a(({row:t})=>[e(c,{type:"primary",link:""},{default:a(()=>[_((i(),d(k,{to:{path:l(A)("creation.creationModel/add:edit"),query:{id:t.id,mode:"edit"}}},{default:a(()=>[Be]),_:2},1032,["to"])),[[E,["creation.creationModel/edit","creation.creationModel/add:edit"]]])]),_:2},1024),_((i(),d(c,{type:"danger",link:"",onClick:r=>B([t.id])},{default:a(()=>[ye]),_:2},1032,["onClick"])),[[E,["creation.creationModel/del"]]])]),_:1})]),_:1},8,["data"])),[[q,l(m).loading]]),p("div",we,[e(j,{modelValue:l(m),"onUpdate:modelValue":u[4]||(u[4]=t=>_e(m)?m.value=t:null),onChange:l(g)},null,8,["modelValue","onChange"])])]),_:1})])}}});export{ft as default};