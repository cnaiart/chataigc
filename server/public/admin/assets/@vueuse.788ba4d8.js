import{u as Oe,g as ye,f as be,i as ue,j as Pe,n as ce,k as Se,r as g,s as fe,l as de,m as L,w as E,e as x}from"./@vue.581f5ce0.js";var Ee=Object.defineProperty,$e=Object.defineProperties,Fe=Object.getOwnPropertyDescriptors,B=Object.getOwnPropertySymbols,Ie=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable,q=(e,t,r)=>t in e?Ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ce=(e,t)=>{for(var r in t||(t={}))Ie.call(t,r)&&q(e,r,t[r]);if(B)for(var r of B(t))je.call(t,r)&&q(e,r,t[r]);return e},xe=(e,t)=>$e(e,Fe(t));function jt(e,t){var r;const n=fe();return de(()=>{n.value=e()},xe(Ce({},t),{flush:(r=t==null?void 0:t.flush)!=null?r:"sync"})),L(n)}var J;const D=typeof window<"u",Ne=e=>typeof e<"u",pe=e=>typeof e=="function",Te=e=>typeof e=="string",T=()=>{},De=D&&((J=window==null?void 0:window.navigator)==null?void 0:J.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function $(e){return typeof e=="function"?e():Oe(e)}function z(e,t){function r(...n){return new Promise((a,o)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(a).catch(o)})}return r}const ve=e=>e();function Ae(e,t={}){let r,n,a=T;const o=s=>{clearTimeout(s),a(),a=T};return s=>{const u=$(e),c=$(t.maxWait);return r&&o(r),u<=0||c!==void 0&&c<=0?(n&&(o(n),n=null),Promise.resolve(s())):new Promise((f,v)=>{a=t.rejectOnCancel?v:f,c&&!n&&(n=setTimeout(()=>{r&&o(r),n=null,f(s())},c)),r=setTimeout(()=>{n&&o(n),n=null,f(s())},u)})}}function Re(e,t=!0,r=!0,n=!1){let a=0,o,l=!0,s=T,u;const c=()=>{o&&(clearTimeout(o),o=void 0,s(),s=T)};return v=>{const i=$(e),d=Date.now()-a,p=()=>u=v();return c(),i<=0?(a=Date.now(),p()):(d>i&&(r||!l)?(a=Date.now(),p()):t&&(u=new Promise((_,F)=>{s=n?F:_,o=setTimeout(()=>{a=Date.now(),l=!0,_(p()),c()},Math.max(0,i-d))})),!r&&!o&&(o=setTimeout(()=>l=!0,i)),l=!1,u)}}function Me(e=ve){const t=g(!0);function r(){t.value=!1}function n(){t.value=!0}const a=(...o)=>{t.value&&e(...o)};return{isActive:L(t),pause:r,resume:n,eventFilter:a}}function Ve(e){return e}function A(e){return ye()?(be(e),!0):!1}function ke(e,t=200,r={}){return z(Ae(t,r),e)}function Ct(e,t=200,r={}){const n=g(e.value),a=ke(()=>{n.value=e.value},t,r);return E(e,()=>a()),n}function xt(e,t=200,r=!1,n=!0,a=!1){return z(Re(t,r,n,a),e)}function Le(e){return typeof e=="function"?x(e):g(e)}function W(e,t=!0){ue()?Pe(e):t?e():ce(e)}function Nt(e,t,r={}){const{immediate:n=!0}=r,a=g(!1);let o=null;function l(){o&&(clearTimeout(o),o=null)}function s(){a.value=!1,l()}function u(...c){l(),a.value=!0,o=setTimeout(()=>{a.value=!1,o=null,e(...c)},$(t))}return n&&(a.value=!0,D&&u()),A(s),{isPending:L(a),start:u,stop:s}}function Tt(e=!1,t={}){const{truthyValue:r=!0,falsyValue:n=!1}=t,a=Se(e),o=g(e);function l(s){if(arguments.length)return o.value=s,o.value;{const u=$(r);return o.value=o.value===u?$(n):u,o.value}}return a?l:[o,l]}var H=Object.getOwnPropertySymbols,ze=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable,Qe=(e,t)=>{var r={};for(var n in e)ze.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&H)for(var n of H(e))t.indexOf(n)<0&&We.call(e,n)&&(r[n]=e[n]);return r};function Be(e,t,r={}){const n=r,{eventFilter:a=ve}=n,o=Qe(n,["eventFilter"]);return E(e,z(a,t),o)}var qe=Object.defineProperty,Je=Object.defineProperties,He=Object.getOwnPropertyDescriptors,R=Object.getOwnPropertySymbols,me=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable,U=(e,t,r)=>t in e?qe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ue=(e,t)=>{for(var r in t||(t={}))me.call(t,r)&&U(e,r,t[r]);if(R)for(var r of R(t))_e.call(t,r)&&U(e,r,t[r]);return e},Ge=(e,t)=>Je(e,He(t)),Ke=(e,t)=>{var r={};for(var n in e)me.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&R)for(var n of R(e))t.indexOf(n)<0&&_e.call(e,n)&&(r[n]=e[n]);return r};function Xe(e,t,r={}){const n=r,{eventFilter:a}=n,o=Ke(n,["eventFilter"]),{eventFilter:l,pause:s,resume:u,isActive:c}=Me(a);return{stop:Be(e,t,Ge(Ue({},o),{eventFilter:l})),pause:s,resume:u,isActive:c}}function P(e){var t;const r=$(e);return(t=r==null?void 0:r.$el)!=null?t:r}const b=D?window:void 0,ge=D?window.document:void 0;D&&window.navigator;D&&window.location;function S(...e){let t,r,n,a;if(Te(e[0])||Array.isArray(e[0])?([r,n,a]=e,t=b):[t,r,n,a]=e,!t)return T;Array.isArray(r)||(r=[r]),Array.isArray(n)||(n=[n]);const o=[],l=()=>{o.forEach(f=>f()),o.length=0},s=(f,v,i,d)=>(f.addEventListener(v,i,d),()=>f.removeEventListener(v,i,d)),u=E(()=>[P(t),$(a)],([f,v])=>{l(),f&&o.push(...r.flatMap(i=>n.map(d=>s(f,i,d,v))))},{immediate:!0,flush:"post"}),c=()=>{u(),l()};return A(c),c}let G=!1;function Dt(e,t,r={}){const{window:n=b,ignore:a=[],capture:o=!0,detectIframe:l=!1}=r;if(!n)return;De&&!G&&(G=!0,Array.from(n.document.body.children).forEach(i=>i.addEventListener("click",T)));let s=!0;const u=i=>a.some(d=>{if(typeof d=="string")return Array.from(n.document.querySelectorAll(d)).some(p=>p===i.target||i.composedPath().includes(p));{const p=P(d);return p&&(i.target===p||i.composedPath().includes(p))}}),f=[S(n,"click",i=>{const d=P(e);if(!(!d||d===i.target||i.composedPath().includes(d))){if(i.detail===0&&(s=!u(i)),!s){s=!0;return}t(i)}},{passive:!0,capture:o}),S(n,"pointerdown",i=>{const d=P(e);d&&(s=!i.composedPath().includes(d)&&!u(i))},{passive:!0}),l&&S(n,"blur",i=>{var d;const p=P(e);((d=n.document.activeElement)==null?void 0:d.tagName)==="IFRAME"&&!(p!=null&&p.contains(n.document.activeElement))&&t(i)})].filter(Boolean);return()=>f.forEach(i=>i())}function Q(e,t=!1){const r=g(),n=()=>r.value=Boolean(e());return n(),W(n,t),r}function Ye(e,t={}){const{window:r=b}=t,n=Q(()=>r&&"matchMedia"in r&&typeof r.matchMedia=="function");let a;const o=g(!1),l=()=>{!a||("removeEventListener"in a?a.removeEventListener("change",s):a.removeListener(s))},s=()=>{!n.value||(l(),a=r.matchMedia(Le(e).value),o.value=a.matches,"addEventListener"in a?a.addEventListener("change",s):a.addListener(s))};return de(s),A(()=>l()),o}function Ze(e){return JSON.parse(JSON.stringify(e))}const V=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},k="__vueuse_ssr_handlers__";V[k]=V[k]||{};const et=V[k];function he(e,t){return et[e]||t}function tt(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var rt=Object.defineProperty,K=Object.getOwnPropertySymbols,nt=Object.prototype.hasOwnProperty,at=Object.prototype.propertyIsEnumerable,X=(e,t,r)=>t in e?rt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Y=(e,t)=>{for(var r in t||(t={}))nt.call(t,r)&&X(e,r,t[r]);if(K)for(var r of K(t))at.call(t,r)&&X(e,r,t[r]);return e};const ot={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Z="vueuse-storage";function st(e,t,r,n={}){var a;const{flush:o="pre",deep:l=!0,listenToStorageChanges:s=!0,writeDefaults:u=!0,mergeDefaults:c=!1,shallow:f,window:v=b,eventFilter:i,onError:d=m=>{console.error(m)}}=n,p=(f?fe:g)(t);if(!r)try{r=he("getDefaultStorage",()=>{var m;return(m=b)==null?void 0:m.localStorage})()}catch(m){d(m)}if(!r)return p;const _=$(t),F=tt(_),h=(a=n.serializer)!=null?a:ot[F],{pause:w,resume:O}=Xe(p,()=>j(p.value),{flush:o,deep:l,eventFilter:i});return v&&s&&(S(v,"storage",I),S(v,Z,M)),I(),p;function j(m){try{if(m==null)r.removeItem(e);else{const y=h.write(m),C=r.getItem(e);C!==y&&(r.setItem(e,y),v&&v.dispatchEvent(new CustomEvent(Z,{detail:{key:e,oldValue:C,newValue:y,storageArea:r}})))}}catch(y){d(y)}}function N(m){const y=m?m.newValue:r.getItem(e);if(y==null)return u&&_!==null&&r.setItem(e,h.write(_)),_;if(!m&&c){const C=h.read(y);return pe(c)?c(C,_):F==="object"&&!Array.isArray(C)?Y(Y({},_),C):C}else return typeof y!="string"?y:h.read(y)}function M(m){I(m.detail)}function I(m){if(!(m&&m.storageArea!==r)){if(m&&m.key==null){p.value=_;return}if(!(m&&m.key!==e)){w();try{p.value=N(m)}catch(y){d(y)}finally{m?ce(O):O()}}}}}function we(e){return Ye("(prefers-color-scheme: dark)",e)}var lt=Object.defineProperty,ee=Object.getOwnPropertySymbols,it=Object.prototype.hasOwnProperty,ut=Object.prototype.propertyIsEnumerable,te=(e,t,r)=>t in e?lt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ct=(e,t)=>{for(var r in t||(t={}))it.call(t,r)&&te(e,r,t[r]);if(ee)for(var r of ee(t))ut.call(t,r)&&te(e,r,t[r]);return e};function ft(e={}){const{selector:t="html",attribute:r="class",initialValue:n="auto",window:a=b,storage:o,storageKey:l="vueuse-color-scheme",listenToStorageChanges:s=!0,storageRef:u,emitAuto:c}=e,f=ct({auto:"",light:"light",dark:"dark"},e.modes||{}),v=we({window:a}),i=x(()=>v.value?"dark":"light"),d=u||(l==null?g(n):st(l,n,o,{window:a,listenToStorageChanges:s})),p=x({get(){return d.value==="auto"&&!c?i.value:d.value},set(w){d.value=w}}),_=he("updateHTMLAttrs",(w,O,j)=>{const N=a==null?void 0:a.document.querySelector(w);if(!!N)if(O==="class"){const M=j.split(/\s/g);Object.values(f).flatMap(I=>(I||"").split(/\s/g)).filter(Boolean).forEach(I=>{M.includes(I)?N.classList.add(I):N.classList.remove(I)})}else N.setAttribute(O,j)});function F(w){var O;const j=w==="auto"?i.value:w;_(t,r,(O=f[j])!=null?O:j)}function h(w){e.onChanged?e.onChanged(w,F):F(w)}return E(p,h,{flush:"post",immediate:!0}),c&&E(i,()=>h(p.value),{flush:"post"}),W(()=>h(p.value)),p}function At(e,t,{window:r=b,initialValue:n=""}={}){const a=g(n),o=x(()=>{var l;return P(t)||((l=r==null?void 0:r.document)==null?void 0:l.documentElement)});return E([o,()=>$(e)],([l,s])=>{var u;if(l&&r){const c=(u=r.getComputedStyle(l).getPropertyValue(s))==null?void 0:u.trim();a.value=c||n}},{immediate:!0}),E(a,l=>{var s;(s=o.value)!=null&&s.style&&o.value.style.setProperty($(e),l)}),a}var dt=Object.defineProperty,pt=Object.defineProperties,vt=Object.getOwnPropertyDescriptors,re=Object.getOwnPropertySymbols,mt=Object.prototype.hasOwnProperty,_t=Object.prototype.propertyIsEnumerable,ne=(e,t,r)=>t in e?dt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,gt=(e,t)=>{for(var r in t||(t={}))mt.call(t,r)&&ne(e,r,t[r]);if(re)for(var r of re(t))_t.call(t,r)&&ne(e,r,t[r]);return e},ht=(e,t)=>pt(e,vt(t));function Rt(e={}){const{valueDark:t="dark",valueLight:r="",window:n=b}=e,a=ft(ht(gt({},e),{onChanged:(s,u)=>{var c;e.onChanged?(c=e.onChanged)==null||c.call(e,s==="dark"):u(s)},modes:{dark:t,light:r}})),o=we({window:n});return x({get(){return a.value==="dark"},set(s){s===o.value?a.value="auto":a.value=s?"dark":"light"}})}function Mt({document:e=ge}={}){if(!e)return g("visible");const t=g(e.visibilityState);return S(e,"visibilitychange",()=>{t.value=e.visibilityState}),t}var ae=Object.getOwnPropertySymbols,wt=Object.prototype.hasOwnProperty,Ot=Object.prototype.propertyIsEnumerable,yt=(e,t)=>{var r={};for(var n in e)wt.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&ae)for(var n of ae(e))t.indexOf(n)<0&&Ot.call(e,n)&&(r[n]=e[n]);return r};function bt(e,t,r={}){const n=r,{window:a=b}=n,o=yt(n,["window"]);let l;const s=Q(()=>a&&"ResizeObserver"in a),u=()=>{l&&(l.disconnect(),l=void 0)},c=E(()=>P(e),v=>{u(),s.value&&a&&v&&(l=new ResizeObserver(t),l.observe(v,o))},{immediate:!0,flush:"post"}),f=()=>{u(),c()};return A(f),{isSupported:s,stop:f}}function Vt(e,t={width:0,height:0},r={}){const{window:n=b,box:a="content-box"}=r,o=x(()=>{var u,c;return(c=(u=P(e))==null?void 0:u.namespaceURI)==null?void 0:c.includes("svg")}),l=g(t.width),s=g(t.height);return bt(e,([u])=>{const c=a==="border-box"?u.borderBoxSize:a==="content-box"?u.contentBoxSize:u.devicePixelContentBoxSize;if(n&&o.value){const f=P(e);if(f){const v=n.getComputedStyle(f);l.value=parseFloat(v.width),s.value=parseFloat(v.height)}}else if(c){const f=Array.isArray(c)?c:[c];l.value=f.reduce((v,{inlineSize:i})=>v+i,0),s.value=f.reduce((v,{blockSize:i})=>v+i,0)}else l.value=u.contentRect.width,s.value=u.contentRect.height},r),E(()=>P(e),u=>{l.value=u?t.width:0,s.value=u?t.height:0}),{width:l,height:s}}const oe=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function kt(e,t={}){const{document:r=ge,autoExit:n=!1}=t,a=e||(r==null?void 0:r.querySelector("html")),o=g(!1);let l=oe[0];const s=Q(()=>{if(r){for(const _ of oe)if(_[1]in r)return l=_,!0}else return!1;return!1}),[u,c,f,,v]=l;async function i(){!s.value||(r!=null&&r[f]&&await r[c](),o.value=!1)}async function d(){if(!s.value)return;await i();const _=P(a);_&&(await _[u](),o.value=!0)}async function p(){o.value?await i():await d()}return r&&S(r,v,()=>{o.value=!!(r!=null&&r[f])},!1),n&&A(i),{isSupported:s,isFullscreen:o,enter:d,exit:i,toggle:p}}var se;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(se||(se={}));var Pt=Object.defineProperty,le=Object.getOwnPropertySymbols,St=Object.prototype.hasOwnProperty,Et=Object.prototype.propertyIsEnumerable,ie=(e,t,r)=>t in e?Pt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,$t=(e,t)=>{for(var r in t||(t={}))St.call(t,r)&&ie(e,r,t[r]);if(le)for(var r of le(t))Et.call(t,r)&&ie(e,r,t[r]);return e};const Ft={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};$t({linear:Ve},Ft);function Lt(e,t,r,n={}){var a,o,l;const{clone:s=!1,passive:u=!1,eventName:c,deep:f=!1,defaultValue:v}=n,i=ue(),d=r||(i==null?void 0:i.emit)||((a=i==null?void 0:i.$emit)==null?void 0:a.bind(i))||((l=(o=i==null?void 0:i.proxy)==null?void 0:o.$emit)==null?void 0:l.bind(i==null?void 0:i.proxy));let p=c;t||(t="modelValue"),p=c||p||`update:${t.toString()}`;const _=h=>s?pe(s)?s(h):Ze(h):h,F=()=>Ne(e[t])?_(e[t]):v;if(u){const h=F(),w=g(h);return E(()=>e[t],O=>w.value=_(O)),E(w,O=>{(O!==e[t]||f)&&d(p,O)},{deep:f}),w}else return x({get(){return F()},set(h){d(p,h)}})}function zt({window:e=b}={}){if(!e)return g(!1);const t=g(e.document.hasFocus());return S(e,"blur",()=>{t.value=!1}),S(e,"focus",()=>{t.value=!0}),t}function Wt(e={}){const{window:t=b,initialWidth:r=1/0,initialHeight:n=1/0,listenOrientation:a=!0,includeScrollbar:o=!0}=e,l=g(r),s=g(n),u=()=>{t&&(o?(l.value=t.innerWidth,s.value=t.innerHeight):(l.value=t.document.documentElement.clientWidth,s.value=t.document.documentElement.clientHeight))};return u(),W(u),S("resize",u,{passive:!0}),a&&S("orientationchange",u,{passive:!0}),{width:l,height:s}}export{S as a,P as b,At as c,Nt as d,xt as e,De as f,Mt as g,zt as h,D as i,jt as j,Lt as k,kt as l,Rt as m,Tt as n,Dt as o,Wt as p,Vt as q,Ct as r,A as t,bt as u};
