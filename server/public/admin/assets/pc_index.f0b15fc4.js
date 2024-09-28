import{_ as P}from"./index.f9197633.js";import{w as B}from"./element-plus.38726bbd.js";import{a as N,s as S}from"./decoration.bf2d4f6f.js";import{P as C,e as f}from"./preview-pc.2ebbb325.js";import b from"./prop-setting.f98f6b36.js";import{n as k}from"./index.0aa35fa2.js";import{d as w,r as v,e as E,ar as V,o as n,c as I,a as g,V as d,M as c,u as e,O,L as x,R as U,T as W}from"./@vue.581f5ce0.js";import{_ as F}from"./vue-drag-resize.3665149e.js";import"./lodash-es.b552e321.js";import"./async-validator.fb49d0f5.js";import"./@vueuse.788ba4d8.js";import"./@element-plus.048d13fe.js";import"./dayjs.3bbbdfdd.js";import"./axios.ef5f3479.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./prop.vue_vue_type_script_setup_true_lang.650f53ca.js";import"./picker.08214076.js";import"./index.1c6c033d.js";import"./picker.a9db97c4.js";import"./index.8a8e47a8.js";import"./index.vue_vue_type_script_setup_true_lang.c6066b25.js";import"./index.ca229a30.js";import"./index.850f9b25.js";import"./index.vue_vue_type_script_setup_true_lang.8d1a4714.js";import"./usePaging.2d3fb421.js";import"./vue3-video-play.35f34caf.js";import"./vuedraggable.9c55756f.js";import"./vue.56b77d04.js";import"./sortablejs.0eba38f1.js";import"./content.2f7a6521.js";import"./lodash.ccf63c29.js";import"./vue-router.f90229e4.js";import"./pinia.8de84ecb.js";import"./vue-demi.ebc8116b.js";import"./css-color-function.7bd56a8d.js";import"./color.4d72ae60.js";import"./clone.f3914b59.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.e3c4d4cf.js";import"./ms.a9ae1d6d.js";import"./nprogress.db25c43d.js";import"./vue-clipboard3.37da43ca.js";import"./clipboard.51333a27.js";import"./echarts.8d7a50ae.js";import"./zrender.1084fa23.js";import"./tslib.60310f1a.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.18a086c3.js";import"./prop.vue_vue_type_script_setup_true_lang.26dba8e3.js";import"./content.vue_vue_type_script_setup_true_lang.a43f1079.js";import"./decoration-img.a9b780dd.js";import"./prop.vue_vue_type_script_setup_true_lang.06c64f3d.js";import"./content.ba90cf37.js";import"./preview.927271ee.js";const J={class:"decoration-pages"},T={class:"flex flex-1 min-w-0 items-start overflow-x-auto overflow-y-hidden"},L={class:"h-full py-4"},M=W("\u4FDD\u5B58"),R=w({name:"decorationPc"}),j=w({...R,setup(q){const D=i=>i.map(t=>{var a;return{id:k(),...((a=f[t])==null?void 0:a.config())||{}}}),o=v({id:11,type:11,name:"pc\u9996\u9875\u88C5\u4FEE",data:[]}),s=v(0),r=E(()=>o.value.data[s.value]||{}),l=async()=>{const i=await N({id:o.value.id});if(!i.data){o.value.data=D(["title","intro","guide"]);return}o.value={...i,data:JSON.parse(i.data)}},y=async()=>{await S({...o.value,data:JSON.stringify(o.value.data)}),l()};return l(),(i,t)=>{const u=B,a=P,h=V("perms");return n(),I("div",J,[g("div",T,[d(C,{class:"flex flex-1 min-w-0 h-full","page-data":o.value.data,index:s.value,"onUpdate:index":t[0]||(t[0]=p=>s.value=p)},null,8,["page-data","index"]),g("div",L,[d(b,{title:e(r).title},{default:c(()=>{var p,_;return[(n(),x(U((_=e(f)[(p=e(r))==null?void 0:p.name])==null?void 0:_.prop),{"is-show":e(r).isShow,"onUpdate:is-show":t[1]||(t[1]=m=>e(r).isShow=m),prop:e(r).prop,"onUpdate:prop":t[2]||(t[2]=m=>e(r).prop=m)},null,40,["is-show","prop"]))]}),_:1},8,["title"])])]),O((n(),x(a,{fixed:!0},{default:c(()=>[d(u,{type:"primary",onClick:y},{default:c(()=>[M]),_:1})]),_:1})),[[h,["decorate.page/save"]]])])}}});const Xt=F(j,[["__scopeId","data-v-5d0c1bdc"]]);export{Xt as default};