import{_ as se}from"./index.f9197633.js";import{_ as me,M as re,B as ie,C as pe,x as _e,N as ce,F as Fe,K as be,L as fe,O as Ve,G as ve,H as Be,a2 as Ee,w as ye,y as Ae,D as Ce}from"./element-plus.38726bbd.js";import{d as N,e as G,o as r,c,W as E,aa as C,U as H,u as I,r as K,_ as M,s as W,V as e,M as u,w as De,a as n,L as B,S as T,T as _,n as ge,t as J}from"./@vue.581f5ce0.js";import{f as Q,b as ke}from"./index.0aa35fa2.js";import{u as he,a as we}from"./vue-router.f90229e4.js";import{t as Ue,g as qe}from"./code.f6f43846.js";import{u as xe}from"./useDictOptions.5809e50b.js";import{d as $e}from"./dict.e290f1c0.js";import{m as Re}from"./menu.0f5388bb.js";import{_ as Te}from"./relations-add.vue_vue_type_script_setup_true_lang.bc827fed.js";import{l as X}from"./lodash.ccf63c29.js";import"./vue-drag-resize.3665149e.js";import"./lodash-es.b552e321.js";import"./async-validator.fb49d0f5.js";import"./@vueuse.788ba4d8.js";import"./@element-plus.048d13fe.js";import"./dayjs.3bbbdfdd.js";import"./axios.ef5f3479.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./pinia.8de84ecb.js";import"./vue-demi.ebc8116b.js";import"./css-color-function.7bd56a8d.js";import"./color.4d72ae60.js";import"./clone.f3914b59.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.e3c4d4cf.js";import"./ms.a9ae1d6d.js";import"./nprogress.db25c43d.js";import"./vue-clipboard3.37da43ca.js";import"./clipboard.51333a27.js";import"./echarts.8d7a50ae.js";import"./zrender.1084fa23.js";import"./tslib.60310f1a.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.18a086c3.js";import"./index.1c6c033d.js";const Ie=N({__name:"index",props:{options:{default:()=>[]},value:null,config:{default:()=>({label:"name",value:"value"})}},setup(U){const F=U,q=G(()=>F.value!==null&&typeof F.value<"u"?Array.isArray(F.value)?F.value:String(F.value).split(","):[]),g=G(()=>F.options.filter(y=>q.value.includes(y[F.config.value])));return(y,x)=>(r(),c("div",null,[(r(!0),c(E,null,C(I(g),(t,A)=>(r(),c("span",{key:A},H(A!=0?"\u3001":"")+H(t[U.config.label]),1))),128))]))}}),Ne={class:"code-edit"},Se={class:"w-80"},Oe={class:"w-80"},Pe={class:"w-80"},Le={class:"w-80"},je=_("\u5355\u8868\uFF08curd\uFF09"),ze=_("\u6811\u8868\uFF08curd\uFF09"),Ge=_("\u7269\u7406\u5220\u9664"),He=_("\u8F6F\u5220\u9664"),Ke=n("div",{class:"form-tips"},"\u6307\u5B9A\u6811\u8868\u7684\u4E3B\u8981ID\uFF0C\u4E00\u822C\u4E3A\u4E3B\u952E",-1),Me=n("div",{class:"form-tips"},"\u6307\u5B9A\u6811\u8868\u7684\u7236ID\uFF0C\u6BD4\u5982\uFF1Aparent_id",-1),We={class:"w-80"},Je=n("div",{class:"form-tips"},[n("div",null," \u4F8B\uFF1A\u586B\u5199test,\u751F\u6210\u6587\u4EF6\u63CF\u8FF0\u4E3Atest\u63A7\u5236\u5668(test\u903B\u8F91/test\u6A21\u578B) ")],-1),Qe=_("\u538B\u7F29\u5305\u4E0B\u8F7D"),Xe=_("\u751F\u6210\u5230\u6A21\u5757"),Ye={class:"w-80"},Ze=n("div",{class:"form-tips"},"\u751F\u6210\u6587\u4EF6\u6240\u5728\u6A21\u5757",-1),el={class:"w-80"},ll=n("div",{class:"form-tips"},[n("div",null," \u4F8B\uFF1A\u586B\u5199test,\u5219\u5728app/\u6A21\u5757\u540D/controller/test\u4E0B\u751F\u6210\u63A7\u5236\u5668 ")],-1),ul={class:"w-80"},al=_("\u81EA\u52A8\u6784\u5EFA"),tl=_("\u624B\u52A8\u6DFB\u52A0"),ol=n("div",{class:"form-tips"}," \u81EA\u52A8\u6784\u5EFA\uFF1A\u81EA\u52A8\u6267\u884C\u751F\u6210\u83DC\u5355sql\u3002\u624B\u52A8\u6DFB\u52A0\uFF1A\u81EA\u884C\u6DFB\u52A0\u83DC\u5355\u3002 ",-1),nl=_(" \u65B0\u589E\u5173\u8054 "),dl={class:"mt-4"},sl=_(" \u7F16\u8F91 "),ml=_(" \u5220\u9664 "),rl=_("\u4FDD\u5B58"),il=N({name:"tableEdit"}),eu=N({...il,setup(U){const F=he(),q=we(),g=K("column"),y=K(!1),x=[{name:"\u4E00\u5BF9\u4E00",value:"has_one"},{name:"\u4E00\u5BF9\u591A",value:"has_many"}],t=M({id:"",table_name:"",table_comment:"",author:"",remark:"",template_type:0,generate_type:0,module_name:"",class_dir:"",class_comment:"",table_column:[],menu:{pid:0,name:"",type:0},tree:{tree_id:0,tree_pid:0,tree_name:0},delete:{name:"",type:0},relations:[]});let A=0;const S=W(),$=W(),O=M({table_name:[{required:!0,message:"\u8BF7\u8F93\u5165\u8868\u540D\u79F0"}],table_comment:[{required:!0,message:"\u8BF7\u8F93\u5165\u8868\u63CF\u8FF0"}],module_name:[{required:!0,message:"\u8BF7\u8F93\u5165\u6A21\u5757\u540D"}],generate_type:[{required:!0,trigger:"change"}],template_type:[{required:!0,trigger:"change"}],["menu.pid"]:[{required:!0,message:"\u8BF7\u9009\u62E9\u7236\u7EA7\u83DC\u5355"}],["menu.name"]:[{required:!0,message:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0"}],["delete.type"]:[{required:!0,trigger:"change"}],["delete.name"]:[{required:!0,message:"\u8BF7\u9009\u62E9\u5220\u9664\u5B57\u6BB5"}]}),P=async(i,a,V)=>{var b,p;y.value=!0,await ge(),a&&V!==void 0&&((b=$.value)==null||b.setFormData(a),A=V),(p=$.value)==null||p.open(i)},Y=i=>{const a=X.exports.cloneDeep(J(i));t.relations.push(a)},Z=async i=>{const a=X.exports.cloneDeep(J(i));console.log(A),t.relations.splice(A,1,a)},ee=i=>{t.relations.splice(i,1)},le=async()=>{const i=await Ue({id:F.query.id});Object.keys(t).forEach(a=>{t[a]=i[a]}),De(()=>t.generate_type,a=>{a==1&&Q.confirm("\u751F\u6210\u5230\u6A21\u5757\u65B9\u5F0F\u5982\u9047\u540C\u540D\u6587\u4EF6\u4F1A\u8986\u76D6\u65E7\u6587\u4EF6\uFF0C\u786E\u5B9A\u8981\u9009\u62E9\u6B64\u65B9\u5F0F\u5417\uFF1F").catch(()=>{t.generate_type=0})})},{optionsData:L}=xe({dict_type:{api:$e},menu:{api:Re,transformData(i){const a={id:0,name:"\u9876\u7EA7",children:[]};return a.children=i,[a]}}}),ue=async()=>{var i,a;try{await((i=S.value)==null?void 0:i.validate()),await qe(t),q.back()}catch(V){for(const b in V)Object.keys(O).includes(b)&&Q.msgError((a=V[b][0])==null?void 0:a.message)}};return le(),(i,a)=>{const V=me,b=re,p=ie,s=pe,k=_e,m=ce,D=Fe,d=be,v=fe,j=Ve,f=ve,h=Be,ae=Ee,te=ke,w=ye,z=Ie,oe=Ae,ne=Ce,de=se;return r(),c("div",Ne,[e(b,{class:"!border-none",shadow:"never"},{default:u(()=>[e(V,{content:"\u7F16\u8F91\u6570\u636E\u8868",onBack:a[0]||(a[0]=l=>i.$router.back())})]),_:1}),e(b,{class:"mt-4 !border-none",shadow:"never"},{default:u(()=>[e(ne,{ref_key:"formRef",ref:S,class:"ls-form",model:t,"label-width":"100px",rules:O},{default:u(()=>[e(oe,{modelValue:g.value,"onUpdate:modelValue":a[20]||(a[20]=l=>g.value=l)},{default:u(()=>[e(k,{label:"\u57FA\u7840\u4FE1\u606F",name:"base"},{default:u(()=>[e(s,{label:"\u8868\u540D\u79F0",prop:"table_name"},{default:u(()=>[n("div",Se,[e(p,{modelValue:t.table_name,"onUpdate:modelValue":a[1]||(a[1]=l=>t.table_name=l),placeholder:"\u8BF7\u8F93\u5165\u8868\u540D\u79F0",clearable:""},null,8,["modelValue"])])]),_:1}),e(s,{label:"\u8868\u63CF\u8FF0",prop:"table_comment"},{default:u(()=>[n("div",Oe,[e(p,{modelValue:t.table_comment,"onUpdate:modelValue":a[2]||(a[2]=l=>t.table_comment=l),placeholder:"\u8BF7\u8F93\u5165\u8868\u63CF\u8FF0",clearable:""},null,8,["modelValue"])])]),_:1}),e(s,{label:"\u4F5C\u8005"},{default:u(()=>[n("div",Pe,[e(p,{modelValue:t.author,"onUpdate:modelValue":a[3]||(a[3]=l=>t.author=l),clearable:""},null,8,["modelValue"])])]),_:1}),e(s,{label:"\u5907\u6CE8"},{default:u(()=>[n("div",Le,[e(p,{modelValue:t.remark,"onUpdate:modelValue":a[4]||(a[4]=l=>t.remark=l),class:"w-full",type:"textarea",autosize:{minRows:4,maxRows:4},maxlength:"200","show-word-limit":"",clearable:""},null,8,["modelValue"])])]),_:1})]),_:1}),e(k,{label:"\u5B57\u6BB5\u7BA1\u7406",name:"column"},{default:u(()=>[e(j,{data:t.table_column},{default:u(()=>[e(m,{label:"\u5B57\u6BB5\u5217\u540D",prop:"column_name"}),e(m,{label:"\u5B57\u6BB5\u63CF\u8FF0",prop:"column_comment","min-width":"120"},{default:u(({row:l})=>[e(p,{modelValue:l.column_comment,"onUpdate:modelValue":o=>l.column_comment=o,clearable:""},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(m,{label:"\u7269\u7406\u7C7B\u578B",prop:"column_type"}),e(m,{label:"\u5FC5\u586B",width:"80"},{default:u(({row:l})=>[e(D,{modelValue:l.is_required,"onUpdate:modelValue":o=>l.is_required=o,"true-label":1,"false-label":0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(m,{label:"\u63D2\u5165",width:"80"},{default:u(({row:l})=>[e(D,{modelValue:l.is_insert,"onUpdate:modelValue":o=>l.is_insert=o,"true-label":1,"false-label":0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(m,{label:"\u7F16\u8F91",width:"80"},{default:u(({row:l})=>[e(D,{modelValue:l.is_update,"onUpdate:modelValue":o=>l.is_update=o,"true-label":1,"false-label":0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(m,{label:"\u5217\u8868",width:"80"},{default:u(({row:l})=>[e(D,{modelValue:l.is_lists,"onUpdate:modelValue":o=>l.is_lists=o,"true-label":1,"false-label":0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(m,{label:"\u67E5\u8BE2",width:"80"},{default:u(({row:l})=>[e(D,{modelValue:l.is_query,"onUpdate:modelValue":o=>l.is_query=o,"true-label":1,"false-label":0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(m,{label:"\u67E5\u8BE2\u65B9\u5F0F"},{default:u(({row:l})=>[e(v,{modelValue:l.query_type,"onUpdate:modelValue":o=>l.query_type=o},{default:u(()=>[e(d,{label:"=",value:"="}),e(d,{label:"!=",value:"!="}),e(d,{label:">",value:">"}),e(d,{label:">=",value:">="}),e(d,{label:"<",value:"<"}),e(d,{label:"<=",value:"<="}),e(d,{label:"LIKE",value:"like"}),e(d,{label:"BETWEEN",value:"between"})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1}),e(m,{label:"\u663E\u793A\u7C7B\u578B","min-width":"120"},{default:u(({row:l})=>[e(v,{modelValue:l.view_type,"onUpdate:modelValue":o=>l.view_type=o},{default:u(()=>[e(d,{label:"\u6587\u672C\u6846",value:"input"}),e(d,{label:"\u6587\u672C\u57DF",value:"textarea"}),e(d,{label:"\u4E0B\u62C9\u6846",value:"select"}),e(d,{label:"\u5355\u9009\u6846",value:"radio"}),e(d,{label:"\u590D\u9009\u6846",value:"checkbox"}),e(d,{label:"\u65E5\u671F\u63A7\u4EF6",value:"datetime"}),e(d,{label:"\u56FE\u7247\u9009\u62E9\u63A7\u4EF6",value:"imageSelect"}),e(d,{label:"\u5BCC\u6587\u672C\u63A7\u4EF6",value:"editor"})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1}),e(m,{label:"\u5B57\u5178\u7C7B\u578B","min-width":"120"},{default:u(({row:l})=>[e(v,{modelValue:l.dict_type,"onUpdate:modelValue":o=>l.dict_type=o,clearable:"",disabled:!(l.view_type=="select"||l.view_type=="radio"||l.view_type=="checkbox"),placeholder:"\u5B57\u5178\u7C7B\u578B"},{default:u(()=>[(r(!0),c(E,null,C(I(L).dict_type,(o,R)=>(r(),B(d,{key:R,label:o.name,value:o.type,disabled:!o.status},null,8,["label","value","disabled"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","disabled"])]),_:1})]),_:1},8,["data"])]),_:1}),e(k,{label:"\u751F\u6210\u914D\u7F6E",name:"config"},{default:u(()=>[e(s,{label:"\u6A21\u677F\u7C7B\u578B",prop:"template_type"},{default:u(()=>[e(h,{modelValue:t.template_type,"onUpdate:modelValue":a[5]||(a[5]=l=>t.template_type=l)},{default:u(()=>[e(f,{label:0},{default:u(()=>[je]),_:1}),e(f,{label:1},{default:u(()=>[ze]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(s,{label:"\u5220\u9664\u7C7B\u578B",prop:"delete.type"},{default:u(()=>[e(h,{modelValue:t.delete.type,"onUpdate:modelValue":a[6]||(a[6]=l=>t.delete.type=l)},{default:u(()=>[e(f,{label:0},{default:u(()=>[Ge]),_:1}),e(f,{label:1},{default:u(()=>[He]),_:1})]),_:1},8,["modelValue"])]),_:1}),t.delete.type==1?(r(),B(s,{key:0,label:"\u5220\u9664\u5B57\u6BB5",prop:"delete.name"},{default:u(()=>[e(v,{class:"w-80",modelValue:t.delete.name,"onUpdate:modelValue":a[7]||(a[7]=l=>t.delete.name=l),clearable:""},{default:u(()=>[(r(!0),c(E,null,C(t.table_column,l=>(r(),B(d,{key:l.id,value:l.column_name,label:`${l.column_name}\uFF1A${l.column_comment}`},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1})):T("",!0),t.template_type==1?(r(),c(E,{key:1},[e(s,{label:"\u6811\u8868ID",prop:"treePrimary"},{default:u(()=>[n("div",null,[e(v,{class:"w-80",modelValue:t.tree.tree_id,"onUpdate:modelValue":a[8]||(a[8]=l=>t.tree.tree_id=l),clearable:""},{default:u(()=>[(r(!0),c(E,null,C(t.table_column,l=>(r(),B(d,{key:l.id,value:l.column_name,label:`${l.column_name}\uFF1A${l.column_comment}`},null,8,["value","label"]))),128))]),_:1},8,["modelValue"]),Ke])]),_:1}),e(s,{label:"\u6811\u8868\u7236ID",prop:"treeParent"},{default:u(()=>[n("div",null,[e(v,{class:"w-80",modelValue:t.tree.tree_pid,"onUpdate:modelValue":a[9]||(a[9]=l=>t.tree.tree_pid=l),clearable:""},{default:u(()=>[(r(!0),c(E,null,C(t.table_column,l=>(r(),B(d,{key:l.id,value:l.column_name,label:`${l.column_name}\uFF1A${l.column_comment}`},null,8,["value","label"]))),128))]),_:1},8,["modelValue"]),Me])]),_:1}),e(s,{label:"\u6811\u540D\u79F0",prop:"treeName"},{default:u(()=>[e(v,{class:"w-80",modelValue:t.tree.tree_name,"onUpdate:modelValue":a[10]||(a[10]=l=>t.tree.tree_name=l),clearable:""},{default:u(()=>[(r(!0),c(E,null,C(t.table_column,l=>(r(),B(d,{key:l.id,value:l.column_name,label:`${l.column_name}\uFF1A${l.column_comment}`},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1})],64)):T("",!0),e(s,{label:"\u7C7B\u63CF\u8FF0"},{default:u(()=>[n("div",We,[n("div",null,[e(p,{modelValue:t.class_comment,"onUpdate:modelValue":a[11]||(a[11]=l=>t.class_comment=l),placeholder:"\u8BF7\u8F93\u5165\u6587\u4EF6\u63CF\u8FF0",clearable:""},null,8,["modelValue"])]),Je])]),_:1}),e(s,{label:"\u751F\u6210\u65B9\u5F0F",prop:"generate_type"},{default:u(()=>[e(h,{modelValue:t.generate_type,"onUpdate:modelValue":a[12]||(a[12]=l=>t.generate_type=l)},{default:u(()=>[e(f,{label:0},{default:u(()=>[Qe]),_:1}),e(f,{label:1},{default:u(()=>[Xe]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(s,{label:"\u6A21\u5757\u540D",prop:"module_name"},{default:u(()=>[n("div",Ye,[e(p,{modelValue:t.module_name,"onUpdate:modelValue":a[13]||(a[13]=l=>t.module_name=l),placeholder:"\u8BF7\u8F93\u5165\u6A21\u5757\u540D",clearable:""},null,8,["modelValue"]),Ze])]),_:1}),e(s,{label:"\u7C7B\u76EE\u5F55"},{default:u(()=>[n("div",el,[n("div",null,[e(p,{modelValue:t.class_dir,"onUpdate:modelValue":a[14]||(a[14]=l=>t.class_dir=l),placeholder:"\u8BF7\u8F93\u5165\u6587\u4EF6\u6240\u5728\u76EE\u5F55",clearable:""},null,8,["modelValue"])]),ll])]),_:1}),e(s,{label:"\u7236\u7EA7\u83DC\u5355",prop:"menu.pid"},{default:u(()=>[e(ae,{class:"w-80",modelValue:t.menu.pid,"onUpdate:modelValue":a[15]||(a[15]=l=>t.menu.pid=l),data:I(L).menu,clearable:"","node-key":"id",props:{label:"name"},"default-expand-all":"",placeholder:"\u8BF7\u9009\u62E9\u7236\u7EA7\u83DC\u5355","check-strictly":""},null,8,["modelValue","data"])]),_:1}),e(s,{label:"\u83DC\u5355\u540D\u79F0",prop:"menu.name"},{default:u(()=>[n("div",ul,[e(p,{modelValue:t.menu.name,"onUpdate:modelValue":a[16]||(a[16]=l=>t.menu.name=l),placeholder:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0",clearable:""},null,8,["modelValue"])])]),_:1}),e(s,{label:"\u83DC\u5355\u6784\u5EFA",prop:"menu.type",required:""},{default:u(()=>[n("div",null,[e(h,{modelValue:t.menu.type,"onUpdate:modelValue":a[17]||(a[17]=l=>t.menu.type=l)},{default:u(()=>[e(f,{label:1},{default:u(()=>[al]),_:1}),e(f,{label:0},{default:u(()=>[tl]),_:1})]),_:1},8,["modelValue"]),ol])]),_:1})]),_:1}),e(k,{label:"\u5173\u8054\u914D\u7F6E",name:"relations"},{default:u(()=>[e(w,{type:"primary",onClick:a[18]||(a[18]=l=>P("add"))},{icon:u(()=>[e(te,{name:"el-icon-Plus"})]),default:u(()=>[nl]),_:1}),n("div",dl,[e(j,{data:t.relations,size:"mini"},{default:u(()=>[e(m,{prop:"type",label:"\u5173\u8054\u7C7B\u578B"},{default:u(({row:l})=>[e(z,{value:l.type,options:x},null,8,["value"])]),_:1}),e(m,{prop:"name",label:"\u5173\u8054\u540D\u79F0"}),e(m,{prop:"model",label:"\u5173\u8054\u6A21\u578B"}),e(m,{prop:"local_key",label:"\u5173\u8054\u952E"},{default:u(({row:l})=>[e(z,{value:l.local_key,options:t.table_column,config:{label:"column_comment",value:"column_name"}},null,8,["value","options"])]),_:1}),e(m,{prop:"foreign_key",label:"\u5916\u952E"}),e(m,{label:"\u64CD\u4F5C"},{default:u(({row:l,$index:o})=>[e(w,{link:"",type:"primary",onClick:R=>P("edit",l,o)},{default:u(()=>[sl]),_:2},1032,["onClick"]),e(w,{link:"",type:"danger",onClick:R=>ee(o)},{default:u(()=>[ml]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),y.value?(r(),B(Te,{key:0,column:t.table_column,types:x,ref_key:"editRef",ref:$,onAdd:Y,onEdit:Z,onClose:a[19]||(a[19]=l=>y.value=!1)},null,8,["column"])):T("",!0)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["model","rules"])]),_:1}),e(de,null,{default:u(()=>[e(w,{type:"primary",onClick:ue},{default:u(()=>[rl]),_:1})]),_:1})])}}});export{eu as default};
