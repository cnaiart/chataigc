import{aJ as y,aN as h,a as f,aa as v,o as p,h as u,k as l,u as n,N as g,z as P,t as _,y as b,e as w,G as S,a9 as k,aH as C,a6 as z,C as N}from"./entry.c7e0e7b4.js";const E=y({header:{type:String,default:""},bodyStyle:{type:h([String,Object,Array]),default:""},shadow:{type:String,values:["always","hover","never"],default:"always"}}),j=f({name:"ElCard"}),$=f({...j,props:E,setup(d){const t=v("card");return(a,c)=>(p(),u("div",{class:l([n(t).b(),n(t).is(`${a.shadow}-shadow`)])},[a.$slots.header||a.header?(p(),u("div",{key:0,class:l(n(t).e("header"))},[g(a.$slots,"header",{},()=>[P(_(a.header),1)])],2)):b("v-if",!0),w("div",{class:l(n(t).e("body")),style:S(a.bodyStyle)},[g(a.$slots,"default")],6)],2))}});var B=k($,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const L=C(B);function T(d){const{page:t=1,size:a=15,fetchFun:c,params:o={},firstLoading:m=!1}=d,i=Object.assign({},z(o)),s=N({page:t,size:a,loading:m,count:0,lists:[],extend:{}}),r=()=>(s.loading=!0,c({page_no:s.page,page_size:s.size,...o}).then(e=>(s.count=e==null?void 0:e.count,s.lists=e==null?void 0:e.lists,s.extend=e==null?void 0:e.extend,Promise.resolve(e))).catch(e=>Promise.reject(e)).finally(()=>{s.loading=!1}));return{pager:s,getLists:r,resetParams:()=>{Object.keys(i).forEach(e=>{o[e]=i[e]}),r()},resetPage:()=>{s.page=1,r()}}}export{L as E,T as u};