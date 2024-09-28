import{bx as he,a4 as B,aJ as fe,aN as le,bI as ve,am as ue,a as J,bQ as ce,bR as ke,bS as _e,af as me,aa as pe,aP as Ie,q as y,bT as Le,S as ze,a1 as h,s as oe,T as ge,M as we,o as g,c as re,f as c,w as _,e as p,k as d,u as t,G as ie,Q as Ce,y as I,E as N,bm as Ee,h as O,F as U,bL as Te,bM as Oe,bU as Se,bV as Ne,aG as xe,bW as Re,bX as $e,r as Ae,i as Me,ad as Be,N as Q,aC as Ve,a_ as Ye,a9 as be,bj as V,ap as M,bY as Xe,aH as ye,bZ as De,b_ as Pe,t as Fe,aZ as He,a5 as We,ar as je,b$ as Ze,c0 as Ge}from"./entry.c7e0e7b4.js";import{d as qe}from"./debounce.2af106a8.js";var Qe="Expected a function";function se(o,r,n){var s=!0,w=!0;if(typeof o!="function")throw new TypeError(Qe);return he(n)&&(s="leading"in n?!!n.leading:s,w="trailing"in n?!!n.trailing:w),qe(o,r,{leading:s,maxWait:r,trailing:w})}const Ue=(o,r)=>{if(!B||!o||!r)return!1;const n=o.getBoundingClientRect();let s;return r instanceof Element?s=r.getBoundingClientRect():s={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},n.top<s.bottom&&n.bottom>s.top&&n.right>s.left&&n.left<s.right},de=o=>{let r=0,n=o;for(;n;)r+=n.offsetTop,n=n.offsetParent;return r},mt=(o,r)=>Math.abs(de(o)-de(r)),Je=fe({urlList:{type:le(Array),default:()=>ve([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:{type:Boolean,default:!1},teleported:{type:Boolean,default:!1},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),Ke={close:()=>!0,switch:o=>ue(o)},et=["src"],tt=J({name:"ElImageViewer"}),at=J({...tt,props:Je,emits:Ke,setup(o,{expose:r,emit:n}){const s=o,w={CONTAIN:{name:"contain",icon:ce(ke)},ORIGINAL:{name:"original",icon:ce(_e)}},{t:L}=me(),i=pe("image-viewer"),{nextZIndex:K}=Ie(),x=y(),S=y([]),z=Le(),k=y(!0),f=y(s.initialIndex),v=ze(w.CONTAIN),u=y({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),Y=h(()=>{const{urlList:e}=s;return e.length<=1}),R=h(()=>f.value===0),W=h(()=>f.value===s.urlList.length-1),ee=h(()=>s.urlList[f.value]),X=h(()=>{const{scale:e,deg:a,offsetX:l,offsetY:m,enableTransition:E}=u.value;let b=l/e,T=m/e;switch(a%360){case 90:case-270:[b,T]=[T,-b];break;case 180:case-180:[b,T]=[-b,-T];break;case 270:case-90:[b,T]=[-T,b];break}const A={transform:`scale(${e}) rotate(${a}deg) translate(${b}px, ${T}px)`,transition:E?"transform .3s":""};return v.value.name===w.CONTAIN.name&&(A.maxWidth=A.maxHeight="100%"),A}),te=h(()=>ue(s.zIndex)?s.zIndex:K());function $(){ae(),n("close")}function D(){const e=se(l=>{switch(l.code){case M.esc:s.closeOnPressEscape&&$();break;case M.space:F();break;case M.left:G();break;case M.up:C("zoomIn");break;case M.right:q();break;case M.down:C("zoomOut");break}}),a=se(l=>{const m=l.deltaY||l.deltaX;C(m<0?"zoomIn":"zoomOut",{zoomRate:s.zoomRate,enableTransition:!1})});z.run(()=>{V(document,"keydown",e),V(document,"wheel",a)})}function ae(){z.stop()}function ne(){k.value=!1}function j(e){k.value=!1,e.target.alt=L("el.image.error")}function Z(e){if(k.value||e.button!==0||!x.value)return;u.value.enableTransition=!1;const{offsetX:a,offsetY:l}=u.value,m=e.pageX,E=e.pageY,b=se(A=>{u.value={...u.value,offsetX:a+A.pageX-m,offsetY:l+A.pageY-E}}),T=V(document,"mousemove",b);V(document,"mouseup",()=>{T()}),e.preventDefault()}function P(){u.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function F(){if(k.value)return;const e=Xe(w),a=Object.values(w),l=v.value.name,E=(a.findIndex(b=>b.name===l)+1)%e.length;v.value=w[e[E]],P()}function H(e){const a=s.urlList.length;f.value=(e+a)%a}function G(){R.value&&!s.infinite||H(f.value-1)}function q(){W.value&&!s.infinite||H(f.value+1)}function C(e,a={}){if(k.value)return;const{zoomRate:l,rotateDeg:m,enableTransition:E}={zoomRate:s.zoomRate,rotateDeg:90,enableTransition:!0,...a};switch(e){case"zoomOut":u.value.scale>.2&&(u.value.scale=Number.parseFloat((u.value.scale/l).toFixed(3)));break;case"zoomIn":u.value.scale<7&&(u.value.scale=Number.parseFloat((u.value.scale*l).toFixed(3)));break;case"clockwise":u.value.deg+=m;break;case"anticlockwise":u.value.deg-=m;break}u.value.enableTransition=E}return oe(ee,()=>{ge(()=>{const e=S.value[0];e!=null&&e.complete||(k.value=!0)})}),oe(f,e=>{P(),n("switch",e)}),we(()=>{var e,a;D(),(a=(e=x.value)==null?void 0:e.focus)==null||a.call(e)}),r({setActiveItem:H}),(e,a)=>(g(),re(Ye,{to:"body",disabled:!e.teleported},[c(Ve,{name:"viewer-fade",appear:""},{default:_(()=>[p("div",{ref_key:"wrapper",ref:x,tabindex:-1,class:d(t(i).e("wrapper")),style:ie({zIndex:t(te)})},[p("div",{class:d(t(i).e("mask")),onClick:a[0]||(a[0]=Ce(l=>e.hideOnClickModal&&$(),["self"]))},null,2),I(" CLOSE "),p("span",{class:d([t(i).e("btn"),t(i).e("close")]),onClick:$},[c(t(N),null,{default:_(()=>[c(t(Ee))]),_:1})],2),I(" ARROW "),t(Y)?I("v-if",!0):(g(),O(U,{key:0},[p("span",{class:d([t(i).e("btn"),t(i).e("prev"),t(i).is("disabled",!e.infinite&&t(R))]),onClick:G},[c(t(N),null,{default:_(()=>[c(t(Te))]),_:1})],2),p("span",{class:d([t(i).e("btn"),t(i).e("next"),t(i).is("disabled",!e.infinite&&t(W))]),onClick:q},[c(t(N),null,{default:_(()=>[c(t(Oe))]),_:1})],2)],64)),I(" ACTIONS "),p("div",{class:d([t(i).e("btn"),t(i).e("actions")])},[p("div",{class:d(t(i).e("actions__inner"))},[c(t(N),{onClick:a[1]||(a[1]=l=>C("zoomOut"))},{default:_(()=>[c(t(Se))]),_:1}),c(t(N),{onClick:a[2]||(a[2]=l=>C("zoomIn"))},{default:_(()=>[c(t(Ne))]),_:1}),p("i",{class:d(t(i).e("actions__divider"))},null,2),c(t(N),{onClick:F},{default:_(()=>[(g(),re(xe(t(v).icon)))]),_:1}),p("i",{class:d(t(i).e("actions__divider"))},null,2),c(t(N),{onClick:a[3]||(a[3]=l=>C("anticlockwise"))},{default:_(()=>[c(t(Re))]),_:1}),c(t(N),{onClick:a[4]||(a[4]=l=>C("clockwise"))},{default:_(()=>[c(t($e))]),_:1})],2)],2),I(" CANVAS "),p("div",{class:d(t(i).e("canvas"))},[(g(!0),O(U,null,Ae(e.urlList,(l,m)=>Me((g(),O("img",{ref_for:!0,ref:E=>S.value[m]=E,key:l,src:l,style:ie(t(X)),class:d(t(i).e("img")),onLoad:ne,onError:j,onMousedown:Z},null,46,et)),[[Be,m===f.value]])),128))],2),Q(e.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var nt=be(at,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]);const st=ye(nt),lt=fe({hideOnClickModal:{type:Boolean,default:!1},src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:{type:Boolean,default:!1},scrollContainer:{type:le([String,Object])},previewSrcList:{type:le(Array),default:()=>ve([])},previewTeleported:{type:Boolean,default:!1},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),ot={load:o=>o instanceof Event,error:o=>o instanceof Event,switch:o=>ue(o),close:()=>!0,show:()=>!0},rt=["src","loading"],it={key:0},ut=J({name:"ElImage",inheritAttrs:!1}),ct=J({...ut,props:lt,emits:ot,setup(o,{emit:r}){const n=o;let s="";const{t:w}=me(),L=pe("image"),i=De(),K=Pe(),x=y(),S=y(!1),z=y(!0),k=y(!1),f=y(),v=y(),u=B&&"loading"in HTMLImageElement.prototype;let Y,R;const W=h(()=>i.style),ee=h(()=>{const{fit:e}=n;return B&&e?{objectFit:e}:{}}),X=h(()=>{const{previewSrcList:e}=n;return Array.isArray(e)&&e.length>0}),te=h(()=>{const{previewSrcList:e,initialIndex:a}=n;let l=a;return a>e.length-1&&(l=0),l}),$=h(()=>n.loading==="eager"?!1:!u&&n.loading==="lazy"||n.lazy),D=()=>{B&&(z.value=!0,S.value=!1,x.value=n.src)};function ae(e){z.value=!1,S.value=!1,r("load",e)}function ne(e){z.value=!1,S.value=!0,r("error",e)}function j(){Ue(f.value,v.value)&&(D(),F())}const Z=Ge(j,200,!0);async function P(){var e;if(!B)return;await ge();const{scrollContainer:a}=n;We(a)?v.value=a:je(a)&&a!==""?v.value=(e=document.querySelector(a))!=null?e:void 0:f.value&&(v.value=Ze(f.value)),v.value&&(Y=V(v,"scroll",Z),setTimeout(()=>j(),100))}function F(){!B||!v.value||!Z||(Y==null||Y(),v.value=void 0)}function H(e){if(e.ctrlKey){if(e.deltaY<0)return e.preventDefault(),!1;if(e.deltaY>0)return e.preventDefault(),!1}}function G(){X.value&&(R=V("wheel",H,{passive:!1}),s=document.body.style.overflow,document.body.style.overflow="hidden",k.value=!0,r("show"))}function q(){R==null||R(),document.body.style.overflow=s,k.value=!1,r("close")}function C(e){r("switch",e)}return oe(()=>n.src,()=>{$.value?(z.value=!0,S.value=!1,F(),P()):D()}),we(()=>{$.value?P():D()}),(e,a)=>(g(),O("div",{ref_key:"container",ref:f,class:d([t(L).b(),e.$attrs.class]),style:ie(t(W))},[S.value?Q(e.$slots,"error",{key:0},()=>[p("div",{class:d(t(L).e("error"))},Fe(t(w)("el.image.error")),3)]):(g(),O(U,{key:1},[x.value!==void 0?(g(),O("img",He({key:0},t(K),{src:x.value,loading:e.loading,style:t(ee),class:[t(L).e("inner"),t(X)&&t(L).e("preview"),z.value&&t(L).is("loading")],onClick:G,onLoad:ae,onError:ne}),null,16,rt)):I("v-if",!0),z.value?(g(),O("div",{key:1,class:d(t(L).e("wrapper"))},[Q(e.$slots,"placeholder",{},()=>[p("div",{class:d(t(L).e("placeholder"))},null,2)])],2)):I("v-if",!0)],64)),t(X)?(g(),O(U,{key:2},[k.value?(g(),re(t(st),{key:0,"z-index":e.zIndex,"initial-index":t(te),infinite:e.infinite,"zoom-rate":e.zoomRate,"url-list":e.previewSrcList,"hide-on-click-modal":e.hideOnClickModal,teleported:e.previewTeleported,"close-on-press-escape":e.closeOnPressEscape,onClose:q,onSwitch:C},{default:_(()=>[e.$slots.viewer?(g(),O("div",it,[Q(e.$slots,"viewer")])):I("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):I("v-if",!0)],64)):I("v-if",!0)],6))}});var dt=be(ct,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]);const pt=ye(dt);export{pt as E,st as a,mt as g,lt as i,se as t};
