import{_ as we}from"./index.f9197633.js";import{P as ke}from"./index.1c6c033d.js";import{t as ne,L as re,K as se,B as ie,v as pe,H as Re,$ as $e,G as je,C as me,D as de,c as Te,_ as Oe,M as Ue,a as qe,a0 as Ie,w as te,Y as Ne,N as Pe,O as Me}from"./element-plus.38726bbd.js";import{n as ze,o as ce,j as We}from"./lodash-es.b552e321.js";import{d as A,e as g,o as B,L as y,u as _,k as P,M as n,c as V,aa as I,W as j,R as Le,T,U as G,q as _e,v as Ge,h as Qe,B as ue,_ as fe,s as $,r as q,l as He,V as u,a as d,Q as Je,S as Ke,j as Ye,n as J,ag as Xe}from"./@vue.581f5ce0.js";import{l as Ze}from"./lodash.ccf63c29.js";import{f as et,b as tt,e as ut}from"./index.0aa35fa2.js";import{_ as lt}from"./picker.a9db97c4.js";import{u as ot,a as at}from"./vue-router.f90229e4.js";import{e as nt,a as rt,c as st}from"./creative_model.0e91f7fd.js";import{c as it}from"./creative_category.4ebe670b.js";import{S as pt}from"./sortablejs.0eba38f1.js";import{e as le}from"./@vueuse.788ba4d8.js";import"./vue-drag-resize.3665149e.js";import"./async-validator.fb49d0f5.js";import"./@element-plus.048d13fe.js";import"./dayjs.3bbbdfdd.js";import"./axios.ef5f3479.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./pinia.8de84ecb.js";import"./vue-demi.ebc8116b.js";import"./css-color-function.7bd56a8d.js";import"./color.4d72ae60.js";import"./clone.f3914b59.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.e3c4d4cf.js";import"./ms.a9ae1d6d.js";import"./nprogress.db25c43d.js";import"./vue-clipboard3.37da43ca.js";import"./clipboard.51333a27.js";import"./echarts.8d7a50ae.js";import"./zrender.1084fa23.js";import"./tslib.60310f1a.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.18a086c3.js";import"./index.8a8e47a8.js";import"./index.vue_vue_type_script_setup_true_lang.c6066b25.js";import"./index.ca229a30.js";import"./index.850f9b25.js";import"./index.vue_vue_type_script_setup_true_lang.8d1a4714.js";import"./usePaging.2d3fb421.js";import"./vue3-video-play.35f34caf.js";import"./vuedraggable.9c55756f.js";import"./vue.56b77d04.js";const mt={name:"WidgetCheckbox",title:"\u591A\u9009",props:[{name:"title",label:"\u5B57\u6BB5\u6807\u9898",type:"string",setter:{name:"String",props:{placeholder:"\u8BF7\u8F93\u5165\u5B57\u6BB5\u6807\u9898"}}},{name:"options",label:"\u9009\u9879",type:"array",tip:"\u6BCF\u4E00\u884C\u4E00\u4E2A\u9009\u9879\uFF0C\u6BCF\u884C\u6700\u591A\u4E0D\u8D85\u8FC750\u4E2A\u5B57\uFF0C\u6700\u591A50\u884C",setter:{name:"String",props:{placeholder:`\u793A\u4F8B\uFF1AA
B
C`,type:"textarea",rows:4,onChange(e,l){l.options=Array.from(new Set(l.options)).filter(a=>a)}}},getValue(e){return e.options.join(`
`)},setValue(e,l){e.options=l.split(`
`)},defaultValue:[]},{name:"defaultValue",label:"\u9ED8\u8BA4\u503C",type:"array",setter:{name:"Select",props:{"get:options"(e){return e.options},clearable:!0,multiple:!0}}},{name:"isRequired",label:"\u662F\u5426\u5FC5\u586B",type:"boolean",setter:{name:"Bool"},defaultValue:!1}],sort:5},dt=Object.freeze(Object.defineProperty({__proto__:null,default:mt},Symbol.toStringTag,{value:"Module"})),ct={name:"WidgetInput",title:"\u5355\u884C\u6587\u672C",props:[{name:"title",label:"\u5B57\u6BB5\u6807\u9898",type:"string",setter:{name:"String",props:{placeholder:"\u8BF7\u8F93\u5165\u5B57\u6BB5\u6807\u9898"}}},{name:"defaultValue",label:"\u9ED8\u8BA4\u503C",type:"string",condition:()=>!1,setter:"String",defaultValue:""},{name:"placeholder",label:"\u793A\u4F8B\u6587\u5B57",type:"string",setter:{name:"String",props:{placeholder:"\u8BF7\u8F93\u5165"}}},{name:"maxlength",label:"\u6700\u5927\u8F93\u5165\u957F\u5EA6",type:"number",setter:{name:"Number",props:{min:0}},defaultValue:200},{name:"isRequired",label:"\u662F\u5426\u5FC5\u586B",type:"boolean",setter:{name:"Bool"},defaultValue:!1}],sort:1},_t=Object.freeze(Object.defineProperty({__proto__:null,default:ct},Symbol.toStringTag,{value:"Module"})),ft={name:"WidgetRadio",title:"\u5355\u9009",props:[{name:"title",label:"\u5B57\u6BB5\u6807\u9898",type:"string",setter:{name:"String",props:{placeholder:"\u8BF7\u8F93\u5165\u5B57\u6BB5\u6807\u9898"}}},{name:"options",label:"\u9009\u9879",type:"array",tip:"\u6BCF\u4E00\u884C\u4E00\u4E2A\u9009\u9879\uFF0C\u6BCF\u884C\u6700\u591A\u4E0D\u8D85\u8FC750\u4E2A\u5B57\uFF0C\u6700\u591A50\u884C",setter:{name:"String",props:{placeholder:`\u793A\u4F8B\uFF1AA
B
C`,type:"textarea",rows:4,onChange(e,l){l.options=Array.from(new Set(l.options)).filter(a=>a)}}},getValue(e){return e.options.join(`
`)},setValue(e,l){e.options=l.split(`
`)},defaultValue:[]},{name:"defaultValue",label:"\u9ED8\u8BA4\u503C",type:"string",setter:{name:"Select",props:{"get:options"(e){return e.options},clearable:!0}}},{name:"isRequired",label:"\u662F\u5426\u5FC5\u586B",type:"boolean",setter:{name:"Bool"},defaultValue:!1}],sort:4},Ft=Object.freeze(Object.defineProperty({__proto__:null,default:ft},Symbol.toStringTag,{value:"Module"})),Bt={name:"WidgetSelect",title:"\u4E0B\u62C9\u9009\u9879",props:[{name:"title",label:"\u5B57\u6BB5\u6807\u9898",type:"string",setter:{name:"String",props:{placeholder:"\u8BF7\u8F93\u5165\u5B57\u6BB5\u6807\u9898"}}},{name:"options",label:"\u9009\u9879",type:"array",tip:"\u6BCF\u4E00\u884C\u4E00\u4E2A\u9009\u9879\uFF0C\u6BCF\u884C\u6700\u591A\u4E0D\u8D85\u8FC750\u4E2A\u5B57\uFF0C\u6700\u591A50\u884C",setter:{name:"String",props:{placeholder:`\u793A\u4F8B\uFF1AA
B
C`,type:"textarea",rows:4,onChange(e,l){l.options=Array.from(new Set(l.options)).filter(a=>a)}}},getValue(e){return e.options.join(`
`)},setValue(e,l){e.options=l.split(`
`)},defaultValue:[]},{name:"defaultValue",label:"\u9ED8\u8BA4\u503C",type:"string",setter:{name:"Select",props:{"get:options"(e){return e.options},clearable:!0}}},{name:"isRequired",label:"\u662F\u5426\u5FC5\u586B",type:"boolean",setter:{name:"Bool"},defaultValue:!1}],sort:3},bt=Object.freeze(Object.defineProperty({__proto__:null,default:Bt},Symbol.toStringTag,{value:"Module"})),gt={name:"WidgetTextarea",title:"\u591A\u884C\u6587\u672C",props:[{name:"title",label:"\u5B57\u6BB5\u6807\u9898",type:"string",setter:{name:"String",props:{placeholder:"\u8BF7\u8F93\u5165\u5B57\u6BB5\u6807\u9898"}}},{name:"placeholder",label:"\u793A\u4F8B\u6587\u5B57",type:"string",setter:{name:"String",props:{placeholder:"\u8BF7\u8F93\u5165"}}},{name:"rows",label:"\u9ED8\u8BA4\u884C\u6570",type:"number",setter:{name:"Number",props:{min:0}},defaultValue:4},{name:"defaultValue",label:"\u9ED8\u8BA4\u503C",type:"string",condition:()=>!1,setter:"String",defaultValue:""},{name:"maxlength",label:"\u6700\u5927\u8F93\u5165\u957F\u5EA6",type:"number",setter:{name:"Number",props:{min:0}},defaultValue:200},{name:"autosize",label:"\u9AD8\u5EA6\u81EA\u9002\u5E94",type:"boolean",setter:{name:"Bool"},defaultValue:!1},{name:"isRequired",label:"\u662F\u5426\u5FC5\u586B",type:"boolean",setter:{name:"Bool"},defaultValue:!1}],sort:2},vt=Object.freeze(Object.defineProperty({__proto__:null,default:gt},Symbol.toStringTag,{value:"Module"})),Vt={string:"",boolean:!1,number:0,array:()=>[],object:()=>({})};function yt(e,l={}){var a;if(!ze(e))return e;for(const o of e)if(o.name){let m=null;o.defaultValue!==void 0?m=o.defaultValue:m=(a=Vt[o.type])!=null?a:null,l[o.name]=ce(m)?m():m}return l}const Ct=e=>{if(typeof e!="string")return e;let l;const a=`return function() {
    const self = this
    try {
      return (${e}).apply(self, arguments)
    } catch(e) {
      console.log(e)
    }
  }`;try{l=new Function(a)()}catch(o){console.error(o)}return l},Et=A({__name:"bool",props:{modelValue:{type:Boolean}},emits:["update:modelValue"],setup(e,{emit:l}){const a=e,o=g({get(){return a.modelValue},set(m){l("update:modelValue",m)}});return(m,t)=>(B(),y(_(ne),{modelValue:_(o),"onUpdate:modelValue":t[0]||(t[0]=r=>P(o)?o.value=r:null)},null,8,["modelValue"]))}}),xt=A({__name:"select",props:{modelValue:null,options:null},emits:["update:modelValue"],setup(e,{emit:l}){const a=e,o=g({get(){return a.modelValue},set(t){l("update:modelValue",t)}}),m=g(()=>a.options.map(t=>Ze.exports.isObject(t)?t:{label:t,value:t}));return(t,r)=>(B(),y(_(re),{modelValue:_(o),"onUpdate:modelValue":r[0]||(r[0]=c=>P(o)?o.value=c:null),teleported:!0,style:{width:"100%"}},{default:n(()=>[(B(!0),V(j,null,I(_(m),c=>(B(),y(_(se),{key:c.value,label:c.label,value:c.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]))}}),At=A({__name:"string",props:{modelValue:null},emits:["update:modelValue"],setup(e,{emit:l}){const a=e,o=g({get(){return a.modelValue},set(m){l("update:modelValue",m)}});return(m,t)=>(B(),y(_(ie),{modelValue:_(o),"onUpdate:modelValue":t[0]||(t[0]=r=>P(o)?o.value=r:null)},null,8,["modelValue"]))}}),ht=A({__name:"number",props:{modelValue:null},emits:["update:modelValue"],setup(e,{emit:l}){const a=e,o=g({get(){return a.modelValue},set(m){l("update:modelValue",m)}});return(m,t)=>(B(),y(_(pe),{modelValue:_(o),"onUpdate:modelValue":t[0]||(t[0]=r=>P(o)?o.value=r:null)},null,8,["modelValue"]))}}),Dt=A({__name:"radio",props:{modelValue:{type:[String,Number,Boolean]},options:null,type:null},emits:["update:modelValue"],setup(e,{emit:l}){const a=e,o=g({get(){return a.modelValue},set(m){l("update:modelValue",m)}});return(m,t)=>(B(),y(_(Re),{modelValue:_(o),"onUpdate:modelValue":t[0]||(t[0]=r=>P(o)?o.value=r:null)},{default:n(()=>[(B(!0),V(j,null,I(e.options,r=>(B(),y(Le(a.type=="button"?_($e):_(je)),{key:r.value,label:r.value,name:r.label},{default:n(()=>[T(G(r.label),1)]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue"]))}}),St=Object.freeze(Object.defineProperty({__proto__:null,Bool:Et,Select:xt,String:At,Number:ht,Radio:Dt},Symbol.toStringTag,{value:"Module"})),Fe=new Map(Object.entries(St));console.log(Fe);function wt(e){return Fe.get(e)||null}function kt(e){const l=Be(e),a=wt(l);return a||null}function oe(e,l){return Ge(e)?null:_e(e)?l?e.name===l?e.props:null:e.props:null}function Be(e){return _e(e)?e.name:e}const Rt="on",ae="get:",$t=A({props:{modelValue:{type:Object,required:!0},setterName:{type:String},propsItem:{type:Object,required:!0}},emits:["update:modelValue"],setup(e,{emit:l}){const a=g(()=>{var c;const r=e.modelValue[e.propsItem.name];return e.propsItem.getValue&&(c=e.propsItem.getValue(e.modelValue))!=null?c:r}),o=r=>{const c=e.modelValue;c[e.propsItem.name]=r,e.propsItem.setValue&&e.propsItem.setValue(e.modelValue,r),l("update:modelValue",e.modelValue)},m=g(()=>{const r=oe(e.propsItem.setter,e.setterName);for(const c in r)ue(r[c])&&c.startsWith(ae)&&(r[c.replace(ae,"")]=r[c](e.modelValue));return r}),t=g(()=>{const r={},c=oe(e.propsItem.setter,e.setterName);for(const b in c){const h=c[b];b.startsWith(Rt)&&ue(h)&&(r[b]=function(w){h(w,e.modelValue)})}return r});return()=>{if(!e.setterName)return null;const r=kt(e.setterName);return r?Qe(r,{modelValue:a.value,"onUpdate:modelValue":o,...m.value,...t.value}):null}}});let jt=Date.now();function Tt(e=""){return e=e?`${e}_`:"",`${e}${(jt++).toString(36).toLowerCase()}`}const Ot={class:"flex flex-wrap mx-[-5px]"},Ut=["onClick"],qt={class:"flex-1"},It={class:"form-tips"},Nt=A({__name:"container",props:{modelValue:null},emits:["update:modelValue"],setup(e,{emit:l}){const a=e,o=Object.values(Object.assign({"./material/checkbox.ts":dt,"./material/input.ts":_t,"./material/radio.ts":Ft,"./material/select.ts":bt,"./material/textarea.ts":vt})).map(i=>(i==null?void 0:i.default)||(i==null?void 0:i.meta)).sort((i,F)=>i.sort-F.sort),m=fe({}),t=g({get(){return a.modelValue},set(i){l("update:modelValue",i)}}),r=$(),c=g({get(){const i=o.findIndex(F=>F.name===t.value.name);return b.value=o[i],i!==-1?i:0},set(i){var F,E,O,D;b.value=o[i],t.value=m[(F=b.value)==null?void 0:F.name]||{name:(E=b.value)==null?void 0:E.name,title:(O=b.value)==null?void 0:O.title,id:t.value.id||Tt(),props:yt(((D=b.value)==null?void 0:D.props)||{})}}}),b=q(),h=i=>{m[a.modelValue.name]=a.modelValue,c.value=i};He(()=>{var i;(i=t.value)!=null&&i.id||h(0)});const w=i=>i?ce(i)?i(t):i.type=="JSFunction"?Ct(i.value)(t):!0:!0;return(i,F)=>{const E=me,O=de;return B(),y(O,{ref_key:"formRef",ref:r,"label-width":"105px"},{default:n(()=>{var D;return[u(E,{label:"\u7C7B\u578B",prop:"name"},{default:n(()=>[d("div",Ot,[(B(!0),V(j,null,I(_(o),(v,k)=>(B(),V("div",{class:Je(["cursor-pointer px-4 border border-br border-solid rounded m-[5px]",{"border-primary text-primary":_(c)===k}]),key:k,onClick:K=>h(k)},G(v.title),11,Ut))),128))])]),_:1}),(B(!0),V(j,null,I((D=b.value)==null?void 0:D.props,v=>(B(),V(j,null,[w(v.condition)?(B(),y(E,{key:v.name+_(c),label:v.label,prop:v.name},{default:n(()=>[d("div",qt,[(B(),y(_($t),{key:v.name,modelValue:_(t).props,"onUpdate:modelValue":F[0]||(F[0]=k=>_(t).props=k),"setter-name":_(Be)(v.setter),"props-item":v},null,8,["modelValue","setter-name","props-item"])),d("div",It,G(v.tip),1)])]),_:2},1032,["label","prop"])):Ke("",!0)],64))),256))]}),_:1},512)}}}),Pt={class:"edit-popup"},Mt=A({__name:"popup",emits:["add","edit"],setup(e,{expose:l,emit:a}){const o=q({name:"",id:"",title:"",props:{}}),m=$(),t=$(),r=q("add"),c=g(()=>r.value=="edit"?"\u7F16\u8F91\u8868\u5355\u9879":"\u6DFB\u52A0\u8868\u5355\u9879"),b=async()=>{var i,F;await((i=m.value)==null?void 0:i.validate()),r.value=="add"?a("add",o.value):a("edit",o.value),(F=t.value)==null||F.close()};return l({open:(i="add")=>{var F;r.value=i,i==="add"&&(o.value={name:"",id:"",title:"",props:{}}),(F=t.value)==null||F.open()},setFormData:i=>{o.value=We(i)}}),(i,F)=>(B(),V("div",Pt,[u(ke,{ref_key:"popupRef",ref:t,title:_(c),async:!0,width:"550px","destroy-on-close":"",onConfirm:b},{default:n(()=>[u(Nt,{modelValue:o.value,"onUpdate:modelValue":F[0]||(F[0]=E=>o.value=E)},null,8,["modelValue"])]),_:1},8,["title"])]))}}),zt="/admin/assets/example.5f35833a.png";function Wt(e,l){if(e.focus(),e.selectionStart!==void 0){const a=e.selectionStart,o=e.selectionEnd;typeof e.setRangeText!==void 0?e.setRangeText(l):e.value=e.value.substring(0,a)+l+e.value.substring(o,e.value.length),e.selectionStart=a+l.length,e.selectionEnd=a+l.length}else e.value+=l;return e.value}const Lt={class:"w-[380px]"},Gt={class:"w-[380px]"},Qt={class:"w-[380px]"},Ht={class:"w-[380px]"},Jt={class:"flex flex-wrap mx-[-5px]"},Kt={class:"max-w-[100px]"},Yt={class:"flex flex-wrap max-w-[700px]"},Xt={class:"w-[200px] mr-[20px] mb-[20px]"},Zt={class:"flex items-center text-tx-regular text-xs"},eu=d("span",{class:"mr-[4px] mt-[2px]"},"\u56DE\u590D\u6761\u6570",-1),tu={class:"w-[200px] mr-[20px] mb-[20px]"},uu={class:"flex items-center text-tx-regular text-xs"},lu=d("span",{class:"mr-[4px] mt-[2px]"},"\u8BCD\u6C47\u5C5E\u6027",-1),ou={class:"w-[200px] mr-[20px] mb-[20px]"},au={class:"flex items-center text-tx-regular text-xs"},nu=d("span",{class:"mr-[4px] mt-[2px]"},"\u968F\u673A\u5C5E\u6027",-1),ru={class:"w-[200px] mr-[20px] mb-[20px]"},su={class:"flex items-center text-tx-regular text-xs"},iu=d("span",{class:"mr-[4px] mt-[2px]"},"\u8BDD\u9898\u5C5E\u6027",-1),pu={class:"flex-1 min-w-0 max-w-[1000px]"},mu={class:"flex"},du=T("\u6DFB\u52A0"),cu=T("\u67E5\u770B\u793A\u4F8B"),_u=d("img",{src:zt},null,-1),fu={class:"mt-4"},Fu={class:"move-icon cursor-move"},Bu=T(" \u7F16\u8F91 "),bu=T(" \u5220\u9664 "),gu=T("\u4FDD\u5B58"),Bl=A({__name:"edit",setup(e){const l=$(),{query:a}=ot(),o=at(),m=g(()=>a.mode=="edit"?"\u7F16\u8F91\u521B\u4F5C\u6A21\u578B":"\u65B0\u589E\u521B\u4F5C\u6A21\u578B"),t=fe({id:"",name:"",tips:"",category_id:"",content:"",sort:1,virtual_use_num:"",status:1,image:"",form:[],n:1,temperature:.7,top_p:.9,presence_penalty:.5}),r=$(),c=()=>{const f=r.value.$el.querySelector(".el-table__body tbody");pt.create(f,{animation:150,handle:".move-icon",onEnd:({newIndex:s,oldIndex:R})=>{console.log(s,R);const x=t.form,Q=x.splice(R,1)[0];x.splice(s,0,Q),t.form=[],J(()=>{t.form=x})}})},b=$(),h=f=>{var s;t.content=Wt((s=b.value)==null?void 0:s.textarea,`\${${f}}`)},w=q([]),i={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0"}],tips:[{required:!0,message:"\u8BF7\u8F93\u5165\u6A21\u578B\u63CF\u8FF0"}],content:[{required:!0,message:"\u8BF7\u8F93\u5165\u8C03\u6559\u6587\u6848"}],category_id:[{required:!0,message:"\u8BF7\u9009\u62E9\u6240\u5C5E\u7C7B\u76EE"}],image:[{required:!0,message:"\u8BF7\u9009\u62E9\u6A21\u578B\u56FE\u6807"}],form:[{type:"array",required:!0,message:"\u8BF7\u6DFB\u52A0\u8868\u5355\u5185\u5BB9"}]},F=$(),E=async()=>{var f;await J(),(f=F.value)==null||f.open("add")},O=le(f=>{const s=`field${t.form.length+1}`;t.form.push({...f,key:s})}),D=q(0),v=(f,s)=>{var R,x;D.value=s,(R=F.value)==null||R.open("edit"),(x=F.value)==null||x.setFormData(f)},k=async f=>{await et.confirm("\u786E\u5B9A\u5220\u9664\u5F53\u524D\u9879\uFF1F"),t.form.splice(f,1)},K=le(f=>{t.form[D.value]=f}),be=async()=>{var s;await((s=l.value)==null?void 0:s.validate());const f={...t,form:JSON.stringify(t.form)};a.mode=="edit"?await nt(f):await rt(f),o.back()},Y=q(!1),ge=async()=>{if(!a.id)return;Y.value=!0;const f=await st({id:a.id});Object.keys(f).forEach(s=>{t[s]=f[s]}),Y.value=!1};return(async()=>{const{lists:f}=await it();w.value=f})(),ge(),Ye(()=>{J(()=>{c()})}),(f,s)=>{const R=Oe,x=Ue,Q=lt,C=me,H=ie,ve=se,Ve=re,ye=ut,Ce=te,M=Xe("QuestionFilled"),z=Te,W=qe,L=Ie,N=te,Ee=Ne,xe=tt,U=Pe,X=ne,Ae=Me,Z=pe,he=de,De=Mt,Se=we;return B(),V("div",null,[u(x,{class:"!border-none",shadow:"never"},{default:n(()=>[u(R,{content:_(m),onBack:s[0]||(s[0]=p=>f.$router.back())},null,8,["content"])]),_:1}),u(x,{class:"!border-none mt-4",shadow:"never"},{default:n(()=>[u(he,{class:"ls-form",ref_key:"formRef",ref:l,rules:i,model:t,"label-width":"120px"},{default:n(()=>[u(C,{label:"\u56FE\u6807",prop:"image"},{default:n(()=>[u(Q,{modelValue:t.image,"onUpdate:modelValue":s[1]||(s[1]=p=>t.image=p),limit:1},null,8,["modelValue"])]),_:1}),u(C,{label:"\u6A21\u578B\u540D\u79F0",prop:"name"},{default:n(()=>[d("div",Lt,[u(H,{placeholder:"\u8BF7\u8F93\u5165\u6A21\u578B\u540D\u79F0",modelValue:t.name,"onUpdate:modelValue":s[2]||(s[2]=p=>t.name=p)},null,8,["modelValue"])])]),_:1}),u(C,{label:"\u6A21\u578B\u63CF\u8FF0",prop:"tips"},{default:n(()=>[d("div",Gt,[u(H,{placeholder:"\u8BF7\u8F93\u5165\u6A21\u578B\u63CF\u8FF0",type:"textarea",rows:2,modelValue:t.tips,"onUpdate:modelValue":s[3]||(s[3]=p=>t.tips=p)},null,8,["modelValue"])])]),_:1}),u(C,{label:"\u6240\u5C5E\u7C7B\u76EE",prop:"category_id"},{default:n(()=>[d("div",Qt,[u(Ve,{modelValue:t.category_id,"onUpdate:modelValue":s[4]||(s[4]=p=>t.category_id=p),placeholder:"\u8BF7\u9009\u62E9\u6240\u5C5E\u7C7B\u76EE",class:"w-full"},{default:n(()=>[(B(!0),V(j,null,I(w.value,(p,S)=>(B(),y(ve,{key:S,label:p.name,value:p.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])]),_:1}),u(C,{label:"\u8C03\u6559\u6587\u6848",prop:"content"},{default:n(()=>[d("div",null,[d("div",Ht,[u(H,{ref_key:"elInputRef",ref:b,placeholder:"\u8BF7\u8F93\u5165\u8C03\u6559\u6587\u6848",type:"textarea",rows:4,modelValue:t.content,"onUpdate:modelValue":s[5]||(s[5]=p=>t.content=p)},null,8,["modelValue"])]),d("div",Jt,[(B(!0),V(j,null,I(t.form,(p,S)=>(B(),V("div",{class:"mx-[5px] mt-[10px]",key:S},[u(Ce,{onClick:ee=>h(p.id)},{default:n(()=>[d("span",Kt,[u(ye,{content:p.props.title},null,8,["content"])])]),_:2},1032,["onClick"])]))),128))])])]),_:1}),u(C,{label:"\u6A21\u578B\u53C2\u6570",required:""},{default:n(()=>[d("div",Yt,[d("div",Xt,[d("div",Zt,[eu,u(W,{class:"box-item",effect:"dark",content:"\u4E3A\u6BCF\u4E2A\u8F93\u5165\u6D88\u606F\u751F\u6210\u591A\u4E2A\u56DE\u590D\uFF0C\u53D6\u503C\u8303\u56F4\u4E3A1~5\u4E4B\u95F4\u7684\u6574\u6570\u3002",placement:"top"},{default:n(()=>[u(z,{size:"16px"},{default:n(()=>[u(M)]),_:1})]),_:1})]),u(L,{modelValue:t.n,"onUpdate:modelValue":s[6]||(s[6]=p=>t.n=p),min:1,max:5},null,8,["modelValue"])]),d("div",tu,[d("div",uu,[lu,u(W,{class:"box-item",effect:"dark",content:"\u7528\u4E8E\u63A7\u5236\u751F\u6210\u6587\u672C\u7684\u968F\u673A\u6027\uFF0C\u53D6\u503C\u8303\u56F4\u4E3A0~1\u4E4B\u95F4\u7684\u6D6E\u70B9\u6570\uFF0C\u5EFA\u8BAE\u53D6\u503C0.7\u5DE6\u53F3\u3002",placement:"top"},{default:n(()=>[u(z,{size:"16px"},{default:n(()=>[u(M)]),_:1})]),_:1})]),u(L,{modelValue:t.temperature,"onUpdate:modelValue":s[7]||(s[7]=p=>t.temperature=p),min:0,max:1,step:.1},null,8,["modelValue","step"])]),d("div",ou,[d("div",au,[nu,u(W,{class:"box-item",effect:"dark",content:"\u7528\u4E8E\u63A7\u5236\u751F\u6210\u6587\u672C\u7684\u591A\u6837\u6027\uFF0C\u53D6\u503C\u8303\u56F4\u4E3A0~1\u4E4B\u95F4\u7684\u6D6E\u70B9\u6570\uFF0C\u5EFA\u8BAE\u53D6\u503C0.9\u5DE6\u53F3\u3002",placement:"top"},{default:n(()=>[u(z,{size:"16px"},{default:n(()=>[u(M)]),_:1})]),_:1})]),u(L,{modelValue:t.top_p,"onUpdate:modelValue":s[8]||(s[8]=p=>t.top_p=p),min:0,max:1,step:.1},null,8,["modelValue","step"])]),d("div",ru,[d("div",su,[iu,u(W,{class:"box-item",effect:"dark",content:"\u7528\u4E8E\u63A7\u5236\u751F\u6210\u6587\u672C\u4E2D\u662F\u5426\u51FA\u73B0\u7ED9\u5B9A\u7684\u5173\u952E\u8BCD\uFF0C\u53D6\u503C\u8303\u56F4\u4E3A0~1\u4E4B\u95F4\u7684\u6D6E\u70B9\u6570\uFF0C\u5EFA\u8BAE\u53D6\u503C0.5\u5DE6\u53F3\u3002",placement:"top"},{default:n(()=>[u(z,{size:"16px"},{default:n(()=>[u(M)]),_:1})]),_:1})]),u(L,{modelValue:t.presence_penalty,"onUpdate:modelValue":s[9]||(s[9]=p=>t.presence_penalty=p),step:.1,min:0,max:1},null,8,["modelValue","step"])])])]),_:1}),u(C,{label:"\u8868\u5355\u5185\u5BB9",prop:"form"},{default:n(()=>[d("div",pu,[d("div",mu,[u(N,{type:"primary",onClick:E},{default:n(()=>[du]),_:1}),u(Ee,{placement:"right",width:300,trigger:"hover"},{reference:n(()=>[u(N,{type:"primary",link:""},{default:n(()=>[cu]),_:1})]),default:n(()=>[_u]),_:1})]),d("div",fu,[u(Ae,{ref_key:"tableRef",ref:r,size:"large",class:"mt-4","row-key":"id",data:t.form},{default:n(()=>[u(U,{width:"50"},{default:n(()=>[d("div",Fu,[u(xe,{name:"el-icon-Rank"})])]),_:1}),u(U,{label:"\u5B57\u6BB5\u503C","min-width":"120"},{default:n(({row:p})=>[T(G(p.id),1)]),_:1}),u(U,{label:"\u5B57\u6BB5\u6807\u9898",prop:"props[title]","min-width":"200"}),u(U,{label:"\u7C7B\u578B",prop:"title","min-width":"100"}),u(U,{label:"\u662F\u5426\u5FC5\u586B",prop:"props[isRequired]","min-width":"100"},{default:n(({row:p})=>[u(X,{modelValue:p.props.isRequired,"onUpdate:modelValue":S=>p.props.isRequired=S},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),u(U,{label:"\u64CD\u4F5C",width:"120",fixed:"right"},{default:n(({row:p,$index:S})=>[u(N,{type:"primary",link:"",onClick:ee=>v(p,S)},{default:n(()=>[Bu]),_:2},1032,["onClick"]),u(N,{type:"primary",link:"",onClick:ee=>k(S)},{default:n(()=>[bu]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])])])]),_:1}),u(C,{label:"\u865A\u62DF\u4F7F\u7528\u4EBA\u6570",prop:"virtual_use_num"},{default:n(()=>[u(Z,{modelValue:t.virtual_use_num,"onUpdate:modelValue":s[10]||(s[10]=p=>t.virtual_use_num=p)},null,8,["modelValue"])]),_:1}),u(C,{label:"\u6392\u5E8F",prop:"sort"},{default:n(()=>[u(Z,{modelValue:t.sort,"onUpdate:modelValue":s[11]||(s[11]=p=>t.sort=p)},null,8,["modelValue"])]),_:1}),u(C,{label:"\u72B6\u6001",prop:"sort"},{default:n(()=>[u(X,{modelValue:t.status,"onUpdate:modelValue":s[12]||(s[12]=p=>t.status=p),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1}),u(De,{ref_key:"formDesignerRef",ref:F,onAdd:_(O),onEdit:_(K)},null,8,["onAdd","onEdit"]),u(Se,null,{default:n(()=>[u(N,{type:"primary",onClick:be},{default:n(()=>[gu]),_:1})]),_:1})])}}});export{Bl as default};