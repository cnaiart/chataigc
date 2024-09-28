import{W as B,X as U,J as w}from"./element-plus.38726bbd.js";import{a as V,g as p,R as F,f}from"./index.0aa35fa2.js";import{d as D,s as P,r as m,e as y,o as i,c as g,V as L,M as S,I as R,L as N,a as v,W as j,aa as I,U as _,S as W}from"./@vue.581f5ce0.js";import{_ as q}from"./vue-drag-resize.3665149e.js";const J=D({components:{},props:{type:{type:String,default:"image"},multiple:{type:Boolean,default:!0},limit:{type:Number,default:10},data:{type:Object,default:()=>({})},showProgress:{type:Boolean,default:!1}},emits:["change","error","success"],setup(e,{emit:a}){const h=V(),u=P(),E=m(`${p.baseUrl}${p.urlPrefix}/upload/${e.type}`),C=y(()=>({token:h.token,version:p.version})),r=m(!1),o=m([]),d=(l,t,n)=>{r.value=!0};let s=0;const c=(l,t,n)=>{s++,s==o.value.length&&(s=0,o.value=[]),a("change",t),l.code==F.SUCCESS&&a("success",l),l.code==F.FAIL&&l.msg&&f.msgError(l.msg)},b=(l,t)=>{var n;s++,s==o.value.length&&(s=0,o.value=[]),f.msgError(`${t.name}\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25`),(n=u.value)==null||n.abort(t),r.value=!1,a("change",t),a("error",t)},k=()=>{f.msgError(`\u8D85\u51FA\u4E0A\u4F20\u4E0A\u9650${e.limit}\uFF0C\u8BF7\u91CD\u65B0\u4E0A\u4F20`)},A=()=>{o.value=[],r.value=!1},$=y(()=>{switch(e.type){case"image":return".jpg,.png,.gif,.jpeg";case"video":return".wmv,.avi,.mpg,.mpeg,.3gp,.mov,.mp4,.flv,.rmvb,.mkv";default:return"*"}});return{uploadRefs:u,action:E,headers:C,visible:r,fileList:o,getAccept:$,handleProgress:d,handleSuccess:c,handleError:b,handleExceed:k,handleClose:A}}}),M={class:"upload"},O={class:"file-list p-4"},X={class:"flex-1"};function z(e,a,h,u,E,C){const r=B,o=U,d=w;return i(),g("div",M,[L(r,{"file-list":e.fileList,"onUpdate:file-list":a[0]||(a[0]=s=>e.fileList=s),ref:"uploadRefs",action:e.action,multiple:e.multiple,limit:e.limit,"show-file-list":!1,headers:e.headers,data:e.data,"on-progress":e.handleProgress,"on-success":e.handleSuccess,"on-exceed":e.handleExceed,"on-error":e.handleError,accept:e.getAccept},{default:S(()=>[R(e.$slots,"default")]),_:3},8,["file-list","action","multiple","limit","headers","data","on-progress","on-success","on-exceed","on-error","accept"]),e.showProgress&&e.fileList.length?(i(),N(d,{key:0,modelValue:e.visible,"onUpdate:modelValue":a[1]||(a[1]=s=>e.visible=s),title:"\u4E0A\u4F20\u8FDB\u5EA6","close-on-click-modal":!1,width:"500px",modal:!1,onClose:e.handleClose},{default:S(()=>[v("div",O,[(i(!0),g(j,null,I(e.fileList,(s,c)=>(i(),g("div",{key:c,class:"mb-5"},[v("div",null,_(s.name),1),v("div",X,[L(o,{percentage:parseInt(s.percentage)},null,8,["percentage"])])]))),128))])]),_:1},8,["modelValue","onClose"])):W("",!0)])}const T=q(J,[["render",z]]);export{T as U};