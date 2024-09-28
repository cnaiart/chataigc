import{aJ as Te,aN as q,ap as h,a9 as M,a as A,q as T,m as C,a1 as $,W,bg as $e,be as U,u as O,s as ce,bj as Fe,N as D,aA as b,o as P,c as H,w as v,f as R,n as ke,g as Re,aQ as pe,T as Se,B as fe,E as me,ay as Oe,aa as ee,af as Ne,aT as Pe,ac as De,ai as Be,h as j,aF as Ke,aZ as V,k as Z,y as X,a8 as ve,bd as Le,e as Ge,aG as Me,Q as x,F as Ae,aK as ze,G as Ue,aH as He,aI as ge}from"./entry.c7e0e7b4.js";import{c as N,E as Ye,O as Ve,w as ie}from"./index.aad710b7.js";import{E as Je}from"./index.ade63ee3.js";import{c as We,E as je,d as Qe,a as we,C as qe,b as Ze,e as Xe,f as xe,g as eo,F as oo,L as no}from"./dropdown.ee5c9419.js";import{c as be}from"./refs.94480413.js";const to=Te({style:{type:q([String,Array,Object])},currentTabId:{type:q(String)},defaultCurrentTabId:String,loop:Boolean,dir:{type:String,values:["ltr","rtl"],default:"ltr"},orientation:{type:q(String)},onBlur:Function,onFocus:Function,onMousedown:Function}),{ElCollection:ro,ElCollectionItem:lo,COLLECTION_INJECTION_KEY:oe,COLLECTION_ITEM_INJECTION_KEY:so}=We("RovingFocusGroup"),ne=Symbol("elRovingFocusGroup"),Ie=Symbol("elRovingFocusGroupItem"),ao={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},io=(e,o)=>{if(o!=="rtl")return e;switch(e){case h.right:return h.left;case h.left:return h.right;default:return e}},uo=(e,o,i)=>{const t=io(e.key,i);if(!(o==="vertical"&&[h.left,h.right].includes(t))&&!(o==="horizontal"&&[h.up,h.down].includes(t)))return ao[t]},co=(e,o)=>e.map((i,t)=>e[(t+o)%e.length]),te=e=>{const{activeElement:o}=document;for(const i of e)if(i===o||(i.focus(),o!==document.activeElement))return},de="currentTabIdChange",ue="rovingFocusGroup.entryFocus",po={bubbles:!1,cancelable:!0},fo=A({name:"ElRovingFocusGroupImpl",inheritAttrs:!1,props:to,emits:[de,"entryFocus"],setup(e,{emit:o}){var i;const t=T((i=e.currentTabId||e.defaultCurrentTabId)!=null?i:null),c=T(!1),u=T(!1),s=T(null),{getItems:l}=C(oe,void 0),p=$(()=>[{outline:"none"},e.style]),g=a=>{o(de,a)},w=()=>{c.value=!0},I=N(a=>{var f;(f=e.onMousedown)==null||f.call(e,a)},()=>{u.value=!0}),_=N(a=>{var f;(f=e.onFocus)==null||f.call(e,a)},a=>{const f=!O(u),{target:B,currentTarget:F}=a;if(B===F&&f&&!O(c)){const K=new Event(ue,po);if(F==null||F.dispatchEvent(K),!K.defaultPrevented){const m=l().filter(k=>k.focusable),S=m.find(k=>k.active),E=m.find(k=>k.id===O(t)),G=[S,E,...m].filter(Boolean).map(k=>k.ref);te(G)}}u.value=!1}),n=N(a=>{var f;(f=e.onBlur)==null||f.call(e,a)},()=>{c.value=!1}),d=(...a)=>{o("entryFocus",...a)};W(ne,{currentTabbedId:$e(t),loop:U(e,"loop"),tabIndex:$(()=>O(c)?-1:0),rovingFocusGroupRef:s,rovingFocusGroupRootStyle:p,orientation:U(e,"orientation"),dir:U(e,"dir"),onItemFocus:g,onItemShiftTab:w,onBlur:n,onFocus:_,onMousedown:I}),ce(()=>e.currentTabId,a=>{t.value=a??null}),Fe(s,ue,d)}});function mo(e,o,i,t,c,u){return D(e.$slots,"default")}var vo=M(fo,[["render",mo],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group-impl.vue"]]);const go=A({name:"ElRovingFocusGroup",components:{ElFocusGroupCollection:ro,ElRovingFocusGroupImpl:vo}});function wo(e,o,i,t,c,u){const s=b("el-roving-focus-group-impl"),l=b("el-focus-group-collection");return P(),H(l,null,{default:v(()=>[R(s,ke(Re(e.$attrs)),{default:v(()=>[D(e.$slots,"default")]),_:3},16)]),_:3})}var bo=M(go,[["render",wo],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group.vue"]]);const Io=A({components:{ElRovingFocusCollectionItem:lo},props:{focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},emits:["mousedown","focus","keydown"],setup(e,{emit:o}){const{currentTabbedId:i,loop:t,onItemFocus:c,onItemShiftTab:u}=C(ne,void 0),{getItems:s}=C(oe,void 0),l=pe(),p=T(null),g=N(n=>{o("mousedown",n)},n=>{e.focusable?c(O(l)):n.preventDefault()}),w=N(n=>{o("focus",n)},()=>{c(O(l))}),I=N(n=>{o("keydown",n)},n=>{const{key:d,shiftKey:a,target:f,currentTarget:B}=n;if(d===h.tab&&a){u();return}if(f!==B)return;const F=uo(n);if(F){n.preventDefault();let m=s().filter(S=>S.focusable).map(S=>S.ref);switch(F){case"last":{m.reverse();break}case"prev":case"next":{F==="prev"&&m.reverse();const S=m.indexOf(B);m=t.value?co(m,S+1):m.slice(S+1);break}}Se(()=>{te(m)})}}),_=$(()=>i.value===O(l));return W(Ie,{rovingFocusGroupItemRef:p,tabIndex:$(()=>O(_)?0:-1),handleMousedown:g,handleFocus:w,handleKeydown:I}),{id:l,handleKeydown:I,handleFocus:w,handleMousedown:g}}});function Eo(e,o,i,t,c,u){const s=b("el-roving-focus-collection-item");return P(),H(s,{id:e.id,focusable:e.focusable,active:e.active},{default:v(()=>[D(e.$slots,"default")]),_:3},8,["id","focusable","active"])}var ho=M(Io,[["render",Eo],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-item.vue"]]);const Q=Symbol("elDropdown"),{ButtonGroup:_o}=fe,Co=A({name:"ElDropdown",components:{ElButton:fe,ElButtonGroup:_o,ElScrollbar:Je,ElDropdownCollection:je,ElTooltip:Ye,ElRovingFocusGroup:bo,ElOnlyChild:Ve,ElIcon:me,ArrowDown:Oe},props:Qe,emits:["visible-change","click","command"],setup(e,{emit:o}){const i=ve(),t=ee("dropdown"),{t:c}=Ne(),u=T(),s=T(),l=T(null),p=T(null),g=T(null),w=T(null),I=T(!1),_=[h.enter,h.space,h.down],n=$(()=>({maxHeight:Pe(e.maxHeight)})),d=$(()=>[t.m(m.value)]),a=pe().value,f=$(()=>e.id||a);ce([u,U(e,"trigger")],([r,y],[z])=>{var le,se,ae;const ye=Le(y)?y:[y];(le=z==null?void 0:z.$el)!=null&&le.removeEventListener&&z.$el.removeEventListener("pointerenter",E),(se=r==null?void 0:r.$el)!=null&&se.removeEventListener&&r.$el.removeEventListener("pointerenter",E),(ae=r==null?void 0:r.$el)!=null&&ae.addEventListener&&ye.includes("hover")&&r.$el.addEventListener("pointerenter",E)},{immediate:!0}),De(()=>{var r,y;(y=(r=u.value)==null?void 0:r.$el)!=null&&y.removeEventListener&&u.value.$el.removeEventListener("pointerenter",E)});function B(){F()}function F(){var r;(r=l.value)==null||r.onClose()}function K(){var r;(r=l.value)==null||r.onOpen()}const m=Be();function S(...r){o("command",...r)}function E(){var r,y;(y=(r=u.value)==null?void 0:r.$el)==null||y.focus()}function L(){}function G(){const r=O(p);r==null||r.focus(),w.value=null}function k(r){w.value=r}function re(r){I.value||(r.preventDefault(),r.stopImmediatePropagation())}function J(){o("visible-change",!0)}function Y(r){(r==null?void 0:r.type)==="keydown"&&p.value.focus()}function Ce(){o("visible-change",!1)}return W(Q,{contentRef:p,role:$(()=>e.role),triggerId:f,isUsingKeyboard:I,onItemEnter:L,onItemLeave:G}),W("elDropdown",{instance:i,dropdownSize:m,handleClick:B,commandHandler:S,trigger:U(e,"trigger"),hideOnClick:U(e,"hideOnClick")}),{t:c,ns:t,scrollbar:g,wrapStyle:n,dropdownTriggerKls:d,dropdownSize:m,triggerId:f,triggerKeys:_,currentTabId:w,handleCurrentTabIdChange:k,handlerMainButtonClick:r=>{o("click",r)},handleEntryFocus:re,handleClose:F,handleOpen:K,handleBeforeShowTooltip:J,handleShowTooltip:Y,handleBeforeHideTooltip:Ce,onFocusAfterTrapped:r=>{var y,z;r.preventDefault(),(z=(y=p.value)==null?void 0:y.focus)==null||z.call(y,{preventScroll:!0})},popperRef:l,contentRef:p,triggeringElementRef:u,referenceElementRef:s}}});function yo(e,o,i,t,c,u){var s;const l=b("el-dropdown-collection"),p=b("el-roving-focus-group"),g=b("el-scrollbar"),w=b("el-only-child"),I=b("el-tooltip"),_=b("el-button"),n=b("arrow-down"),d=b("el-icon"),a=b("el-button-group");return P(),j("div",{class:Z([e.ns.b(),e.ns.is("disabled",e.disabled)])},[R(I,{ref:"popperRef",role:e.role,effect:e.effect,"fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"hide-after":e.trigger==="hover"?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":[e.ns.e("popper"),e.popperClass],"reference-element":(s=e.referenceElementRef)==null?void 0:s.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":e.trigger==="hover"?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,"virtual-triggering":e.splitButton,disabled:e.disabled,transition:`${e.ns.namespace.value}-zoom-in-top`,teleported:e.teleported,pure:"",persistent:"",onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},Ke({content:v(()=>[R(g,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:v(()=>[R(p,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:v(()=>[R(l,null,{default:v(()=>[D(e.$slots,"dropdown")]),_:3})]),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"])]),_:3},8,["wrap-style","view-class"])]),_:2},[e.splitButton?void 0:{name:"default",fn:v(()=>[R(w,{id:e.triggerId,ref:"triggeringElementRef",role:"button",tabindex:e.tabindex},{default:v(()=>[D(e.$slots,"default")]),_:3},8,["id","tabindex"])])}]),1032,["role","effect","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","virtual-triggering","disabled","transition","teleported","onBeforeShow","onShow","onBeforeHide"]),e.splitButton?(P(),H(a,{key:0},{default:v(()=>[R(_,V({ref:"referenceElementRef"},e.buttonProps,{size:e.dropdownSize,type:e.type,disabled:e.disabled,tabindex:e.tabindex,onClick:e.handlerMainButtonClick}),{default:v(()=>[D(e.$slots,"default")]),_:3},16,["size","type","disabled","tabindex","onClick"]),R(_,V({id:e.triggerId,ref:"triggeringElementRef"},e.buttonProps,{role:"button",size:e.dropdownSize,type:e.type,class:e.ns.e("caret-button"),disabled:e.disabled,tabindex:e.tabindex,"aria-label":e.t("el.dropdown.toggleDropdown")}),{default:v(()=>[R(d,{class:Z(e.ns.e("icon"))},{default:v(()=>[R(n)]),_:1},8,["class"])]),_:1},16,["id","size","type","class","disabled","tabindex","aria-label"])]),_:3})):X("v-if",!0)],2)}var To=M(Co,[["render",yo],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown.vue"]]);const $o=A({name:"DropdownItemImpl",components:{ElIcon:me},props:we,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:o}){const i=ee("dropdown"),{role:t}=C(Q,void 0),{collectionItemRef:c}=C(qe,void 0),{collectionItemRef:u}=C(so,void 0),{rovingFocusGroupItemRef:s,tabIndex:l,handleFocus:p,handleKeydown:g,handleMousedown:w}=C(Ie,void 0),I=be(c,u,s),_=$(()=>t.value==="menu"?"menuitem":t.value==="navigation"?"link":"button"),n=N(d=>{const{code:a}=d;if(a===h.enter||a===h.space)return d.preventDefault(),d.stopImmediatePropagation(),o("clickimpl",d),!0},g);return{ns:i,itemRef:I,dataset:{[Ze]:""},role:_,tabIndex:l,handleFocus:p,handleKeydown:n,handleMousedown:w}}}),Fo=["aria-disabled","tabindex","role"];function ko(e,o,i,t,c,u){const s=b("el-icon");return P(),j(Ae,null,[e.divided?(P(),j("li",V({key:0,role:"separator",class:e.ns.bem("menu","item","divided")},e.$attrs),null,16)):X("v-if",!0),Ge("li",V({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,onClick:o[0]||(o[0]=l=>e.$emit("clickimpl",l)),onFocus:o[1]||(o[1]=(...l)=>e.handleFocus&&e.handleFocus(...l)),onKeydown:o[2]||(o[2]=x((...l)=>e.handleKeydown&&e.handleKeydown(...l),["self"])),onMousedown:o[3]||(o[3]=(...l)=>e.handleMousedown&&e.handleMousedown(...l)),onPointermove:o[4]||(o[4]=l=>e.$emit("pointermove",l)),onPointerleave:o[5]||(o[5]=l=>e.$emit("pointerleave",l))}),[e.icon?(P(),H(s,{key:0},{default:v(()=>[(P(),H(Me(e.icon)))]),_:1})):X("v-if",!0),D(e.$slots,"default")],16,Fo)],64)}var Ro=M($o,[["render",ko],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item-impl.vue"]]);const Ee=()=>{const e=C("elDropdown",{}),o=$(()=>e==null?void 0:e.dropdownSize);return{elDropdown:e,_elDropdownSize:o}},So=A({name:"ElDropdownItem",components:{ElDropdownCollectionItem:Xe,ElRovingFocusItem:ho,ElDropdownItemImpl:Ro},inheritAttrs:!1,props:we,emits:["pointermove","pointerleave","click"],setup(e,{emit:o,attrs:i}){const{elDropdown:t}=Ee(),c=ve(),u=T(null),s=$(()=>{var n,d;return(d=(n=O(u))==null?void 0:n.textContent)!=null?d:""}),{onItemEnter:l,onItemLeave:p}=C(Q,void 0),g=N(n=>(o("pointermove",n),n.defaultPrevented),ie(n=>{if(e.disabled){p(n);return}const d=n.currentTarget;d===document.activeElement||d.contains(document.activeElement)||(l(n),n.defaultPrevented||d==null||d.focus())})),w=N(n=>(o("pointerleave",n),n.defaultPrevented),ie(n=>{p(n)})),I=N(n=>{if(!e.disabled)return o("click",n),n.type!=="keydown"&&n.defaultPrevented},n=>{var d,a,f;if(e.disabled){n.stopImmediatePropagation();return}(d=t==null?void 0:t.hideOnClick)!=null&&d.value&&((a=t.handleClick)==null||a.call(t)),(f=t.commandHandler)==null||f.call(t,e.command,c,n)}),_=$(()=>({...e,...i}));return{handleClick:I,handlePointerMove:g,handlePointerLeave:w,textContent:s,propsAndAttrs:_}}});function Oo(e,o,i,t,c,u){var s;const l=b("el-dropdown-item-impl"),p=b("el-roving-focus-item"),g=b("el-dropdown-collection-item");return P(),H(g,{disabled:e.disabled,"text-value":(s=e.textValue)!=null?s:e.textContent},{default:v(()=>[R(p,{focusable:!e.disabled},{default:v(()=>[R(l,V(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:v(()=>[D(e.$slots,"default")]),_:3},16,["onPointerleave","onPointermove","onClickimpl"])]),_:3},8,["focusable"])]),_:3},8,["disabled","text-value"])}var he=M(So,[["render",Oo],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item.vue"]]);const No=A({name:"ElDropdownMenu",props:xe,setup(e){const o=ee("dropdown"),{_elDropdownSize:i}=Ee(),t=i.value,{focusTrapRef:c,onKeydown:u}=C(ze,void 0),{contentRef:s,role:l,triggerId:p}=C(Q,void 0),{collectionRef:g,getItems:w}=C(eo,void 0),{rovingFocusGroupRef:I,rovingFocusGroupRootStyle:_,tabIndex:n,onBlur:d,onFocus:a,onMousedown:f}=C(ne,void 0),{collectionRef:B}=C(oe,void 0),F=$(()=>[o.b("menu"),o.bm("menu",t==null?void 0:t.value)]),K=be(s,g,c,I,B),m=N(E=>{var L;(L=e.onKeydown)==null||L.call(e,E)},E=>{const{currentTarget:L,code:G,target:k}=E;if(L.contains(k),h.tab===G&&E.stopImmediatePropagation(),E.preventDefault(),k!==O(s)||!oo.includes(G))return;const J=w().filter(Y=>!Y.disabled).map(Y=>Y.ref);no.includes(G)&&J.reverse(),te(J)});return{size:t,rovingFocusGroupRootStyle:_,tabIndex:n,dropdownKls:F,role:l,triggerId:p,dropdownListWrapperRef:K,handleKeydown:E=>{m(E),u(E)},onBlur:d,onFocus:a,onMousedown:f}}}),Po=["role","aria-labelledby"];function Do(e,o,i,t,c,u){return P(),j("ul",{ref:e.dropdownListWrapperRef,class:Z(e.dropdownKls),style:Ue(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:o[0]||(o[0]=(...s)=>e.onBlur&&e.onBlur(...s)),onFocus:o[1]||(o[1]=(...s)=>e.onFocus&&e.onFocus(...s)),onKeydown:o[2]||(o[2]=x((...s)=>e.handleKeydown&&e.handleKeydown(...s),["self"])),onMousedown:o[3]||(o[3]=x((...s)=>e.onMousedown&&e.onMousedown(...s),["self"]))},[D(e.$slots,"default")],46,Po)}var _e=M(No,[["render",Do],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-menu.vue"]]);const Uo=He(To,{DropdownItem:he,DropdownMenu:_e}),Ho=ge(he),Yo=ge(_e);export{Ho as E,Yo as a,Uo as b};