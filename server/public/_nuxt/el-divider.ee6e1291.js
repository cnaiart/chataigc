import{aJ as c,aN as p,a as i,aa as u,a1 as v,o as s,h as a,k as o,u as r,N as m,y as f,G as y,a9 as S,aH as h}from"./entry.c7e0e7b4.js";const _=c({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},contentPosition:{type:String,values:["left","center","right"],default:"center"},borderStyle:{type:p(String),default:"solid"}}),k=i({name:"ElDivider"}),b=i({...k,props:_,setup(n){const l=n,e=u("divider"),d=v(()=>e.cssVar({"border-style":l.borderStyle}));return(t,P)=>(s(),a("div",{class:o([r(e).b(),r(e).m(t.direction)]),style:y(r(d)),role:"separator"},[t.$slots.default&&t.direction!=="vertical"?(s(),a("div",{key:0,class:o([r(e).e("text"),r(e).is(t.contentPosition)])},[m(t.$slots,"default")],2)):f("v-if",!0)],6))}});var g=S(b,[["__file","/home/runner/work/element-plus/element-plus/packages/components/divider/src/divider.vue"]]);const D=h(g);export{D as E};
