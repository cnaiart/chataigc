import{P as k}from"./index.1c6c033d.js";import{E as R}from"./element-plus.38726bbd.js";import{F as N,_ as B,a as M}from"./index.8a8e47a8.js";import{u as H,b as O}from"./index.0aa35fa2.js";import{_ as Q}from"./index.ca229a30.js";import{D as j}from"./vuedraggable.9c55756f.js";import{d as q,r as i,$ as G,e as S,w as J,H as z,n as K,ag as U,o as W,c as X,V as n,ab as Y,M as p,a as s,Q as P,a4 as I,O as Z,P as x,I as ee,a1 as le,T as ae,b7 as oe,b6 as te}from"./@vue.581f5ce0.js";import{e as se}from"./@vueuse.788ba4d8.js";import{_ as ie}from"./vue-drag-resize.3665149e.js";const ne=q({components:{Popup:k,Draggable:j,FileItem:N,Material:B,Preview:M},props:{modelValue:{type:[String,Array],default:()=>[]},type:{type:String,default:"image"},size:{type:String,default:"100px"},fileSize:{type:String,default:"100px"},limit:{type:Number,default:1},disabled:{type:Boolean,default:!1},hiddenUpload:{type:Boolean,default:!1},uploadClass:{type:String,default:""},excludeDomain:{type:Boolean,default:!1}},emits:["change","update:modelValue"],setup(e,{emit:o}){const g=i(),_=i(),w=i(""),y=i(!1),a=i([]),m=i([]),r=i(!0),c=i(-1),{disabled:C,limit:d,modelValue:b}=G(e),{getImageUrl:f}=H(),t=S(()=>{switch(e.type){case"image":return"\u56FE\u7247";case"video":return"\u89C6\u9891";default:return""}}),v=S(()=>e.limit-a.value.length>0),h=S(()=>r.value?d.value==-1?null:d.value-a.value.length:1),E=se(()=>{const l=m.value.map(u=>e.excludeDomain?u.url:u.uri);r.value?a.value=[...a.value,...l]:a.value.splice(c.value,1,l.shift()),V()},1e3,!1),A=l=>{var u;C.value||(l>=0?(r.value=!1,c.value=l):r.value=!0,(u=g.value)==null||u.open())},F=l=>{m.value=l},V=()=>{const l=d.value!=1?a.value:a.value[0]||"";o("update:modelValue",l),o("change",l),$()},T=l=>{a.value.splice(l,1),V()},L=l=>{w.value=e.excludeDomain?f(l):l,y.value=!0},$=()=>{K(()=>{var l;e.hiddenUpload&&(a.value=[]),(l=_.value)==null||l.clearSelect()})};return J(b,l=>{a.value=Array.isArray(l)?l:l==""?[]:[l]},{immediate:!0}),z("limit",e.limit),z("hiddenUpload",e.hiddenUpload),{popupRef:g,materialRef:_,fileList:a,tipsText:t,handleConfirm:E,meterialLimit:h,showUpload:v,showPopup:A,selectChange:F,deleteImg:T,previewUrl:w,showPreview:y,handlePreview:L,handleClose:$,getImageUrl:f}}});const D=e=>(oe("data-v-33b9dd85"),e=e(),te(),e),re={class:"material-select"},de=["onClick"],ue={class:"operation-btns text-xs text-center"},pe=D(()=>s("span",null,"\u4FEE\u6539",-1)),me=ae(" | "),ce=["onClick"],fe=D(()=>s("span",null,"\u6DFB\u52A0",-1)),ve={class:"material-wrap"};function he(e,o,g,_,w,y){const a=U("file-item"),m=Q,r=U("draggable"),c=O,C=B,d=R,b=k,f=U("preview");return W(),X("div",re,[n(b,{ref:"popupRef",width:"830px","custom-class":"body-padding",title:`\u9009\u62E9${e.tipsText}`,onConfirm:e.handleConfirm,onClose:e.handleClose},Y({default:p(()=>[n(d,null,{default:p(()=>[s("div",ve,[n(C,{ref:"materialRef",type:e.type,"file-size":e.fileSize,limit:e.meterialLimit,onChange:e.selectChange},null,8,["type","file-size","limit","onChange"])])]),_:1})]),_:2},[e.hiddenUpload?void 0:{name:"trigger",fn:p(()=>[s("div",{class:"material-select__trigger clearfix",onClick:o[2]||(o[2]=I(()=>{},["stop"]))},[n(r,{class:"draggable",modelValue:e.fileList,"onUpdate:modelValue":o[0]||(o[0]=t=>e.fileList=t),animation:"300","item-key":"id"},{item:p(({element:t,index:v})=>[s("div",{class:P(["material-preview",{"is-disabled":e.disabled,"is-one":e.limit==1}]),onClick:h=>e.showPopup(v)},[n(m,{onClose:h=>e.deleteImg(v)},{default:p(()=>[n(a,{uri:e.excludeDomain?e.getImageUrl(t):t,"file-size":e.size,type:e.type},null,8,["uri","file-size","type"])]),_:2},1032,["onClose"]),s("div",ue,[pe,me,s("span",{onClick:I(h=>e.handlePreview(t),["stop"])},"\u67E5\u770B",8,ce)])],10,de)]),_:1},8,["modelValue"]),Z(s("div",{class:P(["material-upload",{"is-disabled":e.disabled,"is-one":e.limit==1,[e.uploadClass]:!0}]),onClick:o[1]||(o[1]=t=>e.showPopup(-1))},[ee(e.$slots,"upload",{},()=>[s("div",{class:"upload-btn",style:le({width:e.size,height:e.size})},[n(c,{size:25,name:"el-icon-Plus"}),fe],4)],!0)],2),[[x,e.showUpload]])])])}]),1032,["title","onConfirm","onClose"]),n(f,{modelValue:e.showPreview,"onUpdate:modelValue":o[3]||(o[3]=t=>e.showPreview=t),url:e.previewUrl,type:e.type},null,8,["modelValue","url","type"])])}const $e=ie(ne,[["render",he],["__scopeId","data-v-33b9dd85"]]);export{$e as _};
