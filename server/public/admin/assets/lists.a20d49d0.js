import{B as O,C as j,K as q,L as M,w as K,D as W,M as Y,o as G,Y as H,N as J,S as Q,O as X,P as Z}from"./element-plus.38726bbd.js";import{_ as tt}from"./index.vue_vue_type_script_setup_true_lang.c6066b25.js";import{_ as et}from"./index.vue_vue_type_script_setup_true_lang.42418fb0.js";import{_ as at}from"./index.vue_vue_type_script_setup_true_lang.625bdcec.js";import{j as ot,f as st}from"./index.0aa35fa2.js";import{_ as ut}from"./addPop.vue_vue_type_script_setup_true_lang.1a73be05.js";import{u as it}from"./usePaging.2d3fb421.js";import{f as D,e as nt}from"./distribution.7a4bf4d0.js";import{d as lt,_ as rt,s as dt,r as mt,ag as _t,ar as pt,o as m,c as ct,V as e,M as a,u as n,O as B,L as f,a as u,T as i,U as r,k as ft,S as bt,W as Bt,n as Ft}from"./@vue.581f5ce0.js";import"./lodash-es.b552e321.js";import"./async-validator.fb49d0f5.js";import"./@vueuse.788ba4d8.js";import"./@element-plus.048d13fe.js";import"./dayjs.3bbbdfdd.js";import"./axios.ef5f3479.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.1c6c033d.js";import"./vue-drag-resize.3665149e.js";import"./lodash.ccf63c29.js";import"./vue-router.f90229e4.js";import"./pinia.8de84ecb.js";import"./vue-demi.ebc8116b.js";import"./css-color-function.7bd56a8d.js";import"./color.4d72ae60.js";import"./clone.f3914b59.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.e3c4d4cf.js";import"./ms.a9ae1d6d.js";import"./nprogress.db25c43d.js";import"./vue-clipboard3.37da43ca.js";import"./clipboard.51333a27.js";import"./echarts.8d7a50ae.js";import"./zrender.1084fa23.js";import"./tslib.60310f1a.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.18a086c3.js";import"./consumer.b7c7cab4.js";const Et=i("\u5168\u90E8"),ht=i("\u672A\u51BB\u7ED3"),kt=i("\u5DF2\u51BB\u7ED3"),vt=i("\u67E5\u8BE2"),gt=i("\u91CD\u7F6E"),yt=i(" \u5F00\u901A\u5206\u9500\u5546 "),Dt={class:"flex items-center"},Ct=u("span",{class:"mr-4"},"\u5934\u50CF: ",-1),xt={class:"mt-[20px]"},Vt=u("span",{class:"mr-4"}," \u6635\u79F0: ",-1),At={class:"mt-[20px]"},wt=u("span",{class:"mr-4"},"\u7F16\u53F7: ",-1),Tt={class:"flex items-center"},Pt={class:"ml-[10px]"},Ut=i("\u8BE6\u60C5"),zt={class:"flex justify-end mt-4"},Ce=lt({__name:"lists",setup($t){const s=rt({user_keyword:"",leader_keyword:"",distribution_status:"",start_time:"",end_time:""}),{pager:d,getLists:b,resetPage:C,resetParams:x}=it({fetchFun:D,params:s});b();const V=async(_,o)=>{await st.confirm(`\u786E\u5B9A${o==1?"\u51BB\u7ED3":"\u6062\u590D"}\u8BE5\u7528\u6237\u5206\u9500\u8D44\u683C\uFF1F`),await nt({id:_}),b()},k=dt(),F=mt(!1),A=async()=>{var _;F.value=!0,await Ft(),(_=k.value)==null||_.open()},w=()=>{F.value=!1,b()};return(_,o)=>{const v=O,p=j,E=q,T=M,P=at,c=K,U=et,z=W,g=Y,y=G,$=H,l=J,L=Q,N=_t("router-link"),I=X,R=tt,h=pt("perms"),S=Z;return m(),ct(Bt,null,[e(g,{shadow:"never",class:"!border-none"},{default:a(()=>[e(z,{ref:"formRef",class:"mb-[-16px]",model:s,inline:!0},{default:a(()=>[e(p,{label:"\u7528\u6237\u4FE1\u606F"},{default:a(()=>[e(v,{class:"w-[280px]",modelValue:s.user_keyword,"onUpdate:modelValue":o[0]||(o[0]=t=>s.user_keyword=t),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237ID\u7F16\u53F7/\u7528\u6237\u6635\u79F0",clearable:""},null,8,["modelValue"])]),_:1}),e(p,{label:"\u9080\u8BF7\u4EBA"},{default:a(()=>[e(v,{class:"w-[280px]",modelValue:s.leader_keyword,"onUpdate:modelValue":o[1]||(o[1]=t=>s.leader_keyword=t),placeholder:"\u8BF7\u8F93\u5165\u9080\u8BF7\u4EBAID/\u6635\u79F0/\u624B\u673A\u53F7\u7801",clearable:""},null,8,["modelValue"])]),_:1}),e(p,{label:"\u5206\u9500\u72B6\u6001"},{default:a(()=>[e(T,{class:"w-[280px]",modelValue:s.distribution_status,"onUpdate:modelValue":o[2]||(o[2]=t=>s.distribution_status=t)},{default:a(()=>[e(E,{value:""},{default:a(()=>[Et]),_:1}),e(E,{value:1,label:"\u672A\u51BB\u7ED3"},{default:a(()=>[ht]),_:1}),e(E,{value:0,label:"\u5DF2\u51BB\u7ED3"},{default:a(()=>[kt]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(p,{label:"\u6210\u4E3A\u5206\u9500\u5546\u65F6\u95F4"},{default:a(()=>[e(P,{class:"w-[280px]",startTime:s.start_time,"onUpdate:startTime":o[3]||(o[3]=t=>s.start_time=t),endTime:s.end_time,"onUpdate:endTime":o[4]||(o[4]=t=>s.end_time=t)},null,8,["startTime","endTime"])]),_:1}),e(p,null,{default:a(()=>[e(c,{type:"primary",onClick:n(C)},{default:a(()=>[vt]),_:1},8,["onClick"]),e(c,{onClick:n(x)},{default:a(()=>[gt]),_:1},8,["onClick"]),e(U,{class:"ml-2.5","fetch-fun":n(D),params:s,"page-size":n(d).size},null,8,["fetch-fun","params","page-size"])]),_:1})]),_:1},8,["model"])]),_:1}),e(g,{shadow:"never",class:"!border-none mt-2"},{default:a(()=>[B((m(),f(c,{type:"primary",onClick:A},{default:a(()=>[yt]),_:1})),[[h,["distribution.distributor/add"]]]),B((m(),f(I,{size:"large",data:n(d).lists,class:"mt-2"},{default:a(()=>[e(l,{label:"\u7528\u6237\u6635\u79F0",prop:"nickname","min-width":"190"},{default:a(({row:t})=>[e($,{placement:"top",width:"220px",trigger:"hover"},{reference:a(()=>[u("div",Tt,[e(y,{size:50,src:t==null?void 0:t.avatar},{default:a(()=>[i(r(t.nickname),1)]),_:2},1032,["src"]),u("div",Pt,r(t.nickname),1)])]),default:a(()=>[u("div",Dt,[Ct,e(y,{size:50,src:t==null?void 0:t.avatar},null,8,["src"])]),u("div",xt,[Vt,u("span",null,r(t.nickname),1)]),u("div",At,[wt,u("span",null,r(t.user_sn),1)])]),_:2},1024)]),_:1}),e(l,{label:"\u53EF\u63D0\u73B0\u4F63\u91D1",prop:"user_money","min-width":"150"}),e(l,{label:"\u83B7\u5F97\u603B\u4F63\u91D1",prop:"total_user_money","min-width":"150"}),e(l,{label:"\u4E0B\u7EA7\u4EBA\u6570",prop:"below_num","min-width":"120"}),e(l,{label:"\u4E0A\u7EA7\u9080\u8BF7\u4EBA",prop:"leader_nickname","min-width":"150"},{default:a(({row:t})=>[i(r(t.leader_nickname||"\u7CFB\u7EDF"),1)]),_:1}),e(l,{label:"\u5206\u9500\u72B6\u6001",prop:"distribution_status_desc","min-width":"120"},{default:a(({row:t})=>[e(L,{type:t.distribution_status==1?"success":"warning"},{default:a(()=>[i(r(t.distribution_status_desc),1)]),_:2},1032,["type"])]),_:1}),e(l,{label:"\u6210\u4E3A\u5206\u9500\u5546\u65F6\u95F4",prop:"distribution_time","min-width":"180"}),e(l,{label:"\u64CD\u4F5C","min-width":"140",fixed:"right"},{default:a(({row:t})=>[B((m(),f(N,{to:{path:n(ot)("distribution.distributor/detail"),query:{id:t.id}}},{default:a(()=>[e(c,{link:"",type:"primary"},{default:a(()=>[Ut]),_:1})]),_:2},1032,["to"])),[[h,["distribution.distributor/detail"]]]),B((m(),f(c,{link:"",type:"primary",onClick:Lt=>V(t.id,t.distribution_status)},{default:a(()=>[i(r(t.distribution_status==1?"\u51BB\u7ED3":"\u53D6\u6D88\u51BB\u7ED3"),1)]),_:2},1032,["onClick"])),[[h,["distribution.distributor/status"]]])]),_:1})]),_:1},8,["data"])),[[S,n(d).loading]]),u("div",zt,[e(R,{modelValue:n(d),"onUpdate:modelValue":o[5]||(o[5]=t=>ft(d)?d.value=t:null),onChange:n(b)},null,8,["modelValue","onChange"])])]),_:1}),F.value?(m(),f(ut,{key:0,ref_key:"addPopref",ref:k,onClose:w},null,512)):bt("",!0)],64)}}});export{Ce as default};