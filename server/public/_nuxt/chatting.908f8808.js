import{_ as $e}from"./index.88b551d2.js";import{aJ as Fe,aw as xe,aN as Ae,av as He,aq as ce,aO as Z,ar as ae,am as le,au as re,cP as de,a as A,ah as je,ai as Ke,aa as Ge,ag as Qe,a1 as N,cS as We,cg as qe,q as V,aT as Je,s as O,aj as Ze,M as Se,o as s,h as r,e as a,u as e,k as $,aD as Xe,c as w,w as u,aG as ie,E as G,y as d,t as D,f as i,cV as Ye,G as Q,Q as et,a9 as tt,a8 as ot,T as Ie,cZ as be,bi as nt,aH as st,N as X,c_ as at,B as P,p as me,l as _e,b as he,cW as Ce,x as W,z as F,K as q,O as Ve,S as Ee,C as lt,i as it,F as ue,r as pe,a2 as ct,v as rt,H as dt}from"./entry.c7e0e7b4.js";import{_ as Y}from"./index.vue.3dfb5dc9.js";import{E as ut}from"./index.aad710b7.js";/* empty css                */import"./el-tooltip.4ed993c7.js";/* empty css                  */import{E as pt}from"./index.67b2792c.js";import{_ as ye}from"./_plugin-vue_export-helper.c27b6911.js";import{E as ft}from"./index.b72cfc4b.js";/* empty css                   */import{b as fe,d as vt}from"./index.fa4f9017.js";import{u as mt}from"./useLockFn.d62becec.js";import{u as Be}from"./useCopy.162cbe26.js";import{j as _t,k as ht,a as yt,l as gt}from"./chat.bab8475b.js";import{c as wt}from"./my.94b48df2.js";import{E as Te}from"./index.ade63ee3.js";import{E as kt}from"./index.222a6e13.js";/* empty css                     *//* empty css                  */import{a as xt}from"./download.76c7fb53.js";import{Q as bt}from"./qrcode.vue.esm.3fb480da.js";import{_ as Ct}from"./model-picker.vue.0083d776.js";const $t=Fe({modelValue:{type:[Boolean,String,Number],default:!1},value:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},activeIcon:{type:xe},inactiveIcon:{type:xe},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},id:String,loading:{type:Boolean,default:!1},beforeChange:{type:Ae(Function)},size:{type:String,validator:He},tabindex:{type:[String,Number]}}),St={[ce]:t=>Z(t)||ae(t)||le(t),[re]:t=>Z(t)||ae(t)||le(t),[de]:t=>Z(t)||ae(t)||le(t)},It=["onClick"],Vt=["id","aria-checked","aria-disabled","name","true-value","false-value","disabled","tabindex","onKeydown"],Et=["aria-hidden"],Bt=["aria-hidden"],Tt=["aria-hidden"],ve="ElSwitch",Nt=A({name:ve}),Pt=A({...Nt,props:$t,emits:St,setup(t,{expose:S,emit:m}){const o=t,y=ot(),{formItem:f}=je(),g=Ke(),l=Ge("switch");Qe({from:'"value"',replacement:'"model-value" or "v-model"',scope:ve,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},N(()=>{var n;return!!((n=y.vnode.props)!=null&&n.value)}));const{inputId:b}=We(o,{formItemContext:f}),h=qe(N(()=>o.loading)),E=V(o.modelValue!==!1),x=V(),I=V(),R=N(()=>[l.b(),l.m(g.value),l.is("disabled",h.value),l.is("checked",_.value)]),H=N(()=>({width:Je(o.width)}));O(()=>o.modelValue,()=>{E.value=!0}),O(()=>o.value,()=>{E.value=!1});const B=N(()=>E.value?o.modelValue:o.value),_=N(()=>B.value===o.activeValue);[o.activeValue,o.inactiveValue].includes(B.value)||(m(ce,o.inactiveValue),m(re,o.inactiveValue),m(de,o.inactiveValue)),O(_,n=>{var k;x.value.checked=n,o.validateEvent&&((k=f==null?void 0:f.validate)==null||k.call(f,"change").catch(K=>Ze()))});const C=()=>{const n=_.value?o.inactiveValue:o.activeValue;m(ce,n),m(re,n),m(de,n),Ie(()=>{x.value.checked=_.value})},L=()=>{if(h.value)return;const{beforeChange:n}=o;if(!n){C();return}const k=n();[be(k),Z(k)].includes(!0)||nt(ve,"beforeChange must return type `Promise<boolean>` or `boolean`"),be(k)?k.then(T=>{T&&C()}).catch(T=>{}):k&&C()},j=N(()=>l.cssVarBlock({...o.activeColor?{"on-color":o.activeColor}:null,...o.inactiveColor?{"off-color":o.inactiveColor}:null,...o.borderColor?{"border-color":o.borderColor}:null})),z=()=>{var n,k;(k=(n=x.value)==null?void 0:n.focus)==null||k.call(n)};return Se(()=>{x.value.checked=_.value}),S({focus:z,checked:_}),(n,k)=>(s(),r("div",{class:$(e(R)),style:Q(e(j)),onClick:et(L,["prevent"])},[a("input",{id:e(b),ref_key:"input",ref:x,class:$(e(l).e("input")),type:"checkbox",role:"switch","aria-checked":e(_),"aria-disabled":e(h),name:n.name,"true-value":n.activeValue,"false-value":n.inactiveValue,disabled:e(h),tabindex:n.tabindex,onChange:C,onKeydown:Xe(L,["enter"])},null,42,Vt),!n.inlinePrompt&&(n.inactiveIcon||n.inactiveText)?(s(),r("span",{key:0,class:$([e(l).e("label"),e(l).em("label","left"),e(l).is("active",!e(_))])},[n.inactiveIcon?(s(),w(e(G),{key:0},{default:u(()=>[(s(),w(ie(n.inactiveIcon)))]),_:1})):d("v-if",!0),!n.inactiveIcon&&n.inactiveText?(s(),r("span",{key:1,"aria-hidden":e(_)},D(n.inactiveText),9,Et)):d("v-if",!0)],2)):d("v-if",!0),a("span",{ref_key:"core",ref:I,class:$(e(l).e("core")),style:Q(e(H))},[n.inlinePrompt?(s(),r("div",{key:0,class:$(e(l).e("inner"))},[n.activeIcon||n.inactiveIcon?(s(),w(e(G),{key:0,class:$(e(l).is("icon"))},{default:u(()=>[(s(),w(ie(e(_)?n.activeIcon:n.inactiveIcon)))]),_:1},8,["class"])):n.activeText||n.inactiveText?(s(),r("span",{key:1,class:$(e(l).is("text")),"aria-hidden":!e(_)},D(e(_)?n.activeText:n.inactiveText),11,Bt)):d("v-if",!0)],2)):d("v-if",!0),a("div",{class:$(e(l).e("action"))},[n.loading?(s(),w(e(G),{key:0,class:$(e(l).is("loading"))},{default:u(()=>[i(e(Ye))]),_:1},8,["class"])):d("v-if",!0)],2)],6),!n.inlinePrompt&&(n.activeIcon||n.activeText)?(s(),r("span",{key:1,class:$([e(l).e("label"),e(l).em("label","right"),e(l).is("active",e(_))])},[n.activeIcon?(s(),w(e(G),{key:0},{default:u(()=>[(s(),w(ie(n.activeIcon)))]),_:1})):d("v-if",!0),!n.activeIcon&&n.activeText?(s(),r("span",{key:1,"aria-hidden":!e(_)},D(n.activeText),9,Tt)):d("v-if",!0)],2)):d("v-if",!0)],14,It))}});var Dt=tt(Pt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]);const Lt=st(Dt),Ne=t=>(me("data-v-31572cec"),t=t(),_e(),t),Rt={class:"chat-message flex"},zt={key:0,class:"ml-auto"},Ut={class:"message-contain message-contain--my"},Mt=Ne(()=>a("span",{class:"text-xs ml-[4px]"},"复制",-1)),Ot={key:1,class:"flex-1 min-w-0 max-w-[750px]"},Ft={key:0,class:"h-[20px] ml-[10px] mb-[10px] text-tx-secondary"},At={class:"message-contain message-contain--his flex flex-col"},Ht={key:0,class:"flex items-center text-tx-secondary text-sm mt-[8px]"},jt={class:"flex items-center",style:{animation:"loading-rotate 2s linear infinite"}},Kt=Ne(()=>a("div",{class:"ml-[5px]"},"加载中，请稍等",-1)),Gt={key:1,class:"action-btns"},Qt={class:"ml-[10px]"},Wt=A({__name:"index",props:{loading:{type:Boolean,default:!1},stopping:{type:Boolean,default:!1},avatar:{type:String,default:""},time:{type:String,default:""},type:{type:Number,default:null},showCopyBtn:{type:Boolean,default:!0},showCollectBtn:{type:Boolean,default:!0},showRewriteBtn:{type:Boolean,default:!1},isCollet:{type:Number},showPoster:{type:Boolean,default:!0}},emits:["collect","close","copyContent","copyMyContent","poster","rewrite"],setup(t,{emit:S}){const m=()=>{S("collect")},o=()=>{S("copyMyContent")};return(y,f)=>{const g=G,l=Y,b=ut;return s(),r("div",Rt,[t.type==1?(s(),r("div",zt,[a("div",Ut,[X(y.$slots,"my",{},void 0,!0)]),a("div",{class:"flex items-center justify-end text-[#999999] pr-4 pt-2 cursor-pointer",onClick:o},[i(g,null,{default:u(()=>[i(e(at))]),_:1}),Mt])])):d("",!0),i(e(pt),{class:"message-avatar",size:40,src:t.avatar},null,8,["src"]),t.type==2?(s(),r("div",Ot,[t.time?(s(),r("div",Ft,D(t.time),1)):d("",!0),a("div",At,[a("div",null,[X(y.$slots,"rob",{},void 0,!0)]),t.loading?(s(),r("div",Ht,[a("div",jt,[i(l,{name:"el-icon-Loading",class:"circular"})]),Kt])):d("",!0),t.loading?d("",!0):(s(),r("div",Gt,[t.showRewriteBtn?(s(),w(b,{key:0,effect:"dark",content:"重写",placement:"top"},{default:u(()=>[i(e(P),{class:"mt-2",circle:"",onClick:f[0]||(f[0]=h=>S("rewrite"))},{icon:u(()=>[i(l,{name:"el-icon-RefreshRight"})]),_:1})]),_:1})):d("",!0),t.showCollectBtn?(s(),w(b,{key:1,effect:"dark",placement:"top",content:t.isCollet?"取消收藏":"收藏"},{default:u(()=>[i(e(P),{class:"mt-2",circle:"",onClick:m},{icon:u(()=>[t.isCollet?(s(),w(l,{key:0,color:"#FBAE00",size:"18",name:"el-icon-StarFilled"})):(s(),w(l,{key:1,name:"el-icon-Star"}))]),_:1})]),_:1},8,["content"])):d("",!0),t.showPoster?(s(),w(b,{key:2,effect:"dark",content:"生成海报",placement:"top"},{default:u(()=>[i(e(P),{class:"mt-2",circle:"",onClick:f[1]||(f[1]=h=>S("poster"))},{icon:u(()=>[i(l,{name:"el-icon-Picture"})]),_:1})]),_:1})):d("",!0)]))]),a("div",Qt,[X(y.$slots,"footer",{},void 0,!0)])])):d("",!0)])}}});const qt=ye(Wt,[["__scopeId","data-v-31572cec"]]);const Jt={key:0,class:"flex justify-center items-center rounded-lg h-[30px] px-[10px]"},Zt=a("span",{class:"mx-[6px] text-xs"},"联网模式",-1),Xt={class:"text-xs"},Yt=a("div",null," 1.开启联网模式后，AI机器人将可实时获取联网数据，由于网络搜索总结目前可能不太稳定，有时联网搜索出来的答案可能不太准确。 ",-1),eo=a("div",null," 2.联网模式不支持连续对话，请在单次提问中描述清楚问题。 ",-1),to={key:0},oo={class:"text-primary"},no=A({__name:"index",props:{modelValue:{type:Boolean}},emits:["update:modelValue"],setup(t,{emit:S}){const m=t,o=he(),y=fe(m,"modelValue",S),f=g=>{g?q.msgSuccess("联网功能已开启"):q.msgError("联网功能已关闭")};return O(y,g=>{const l=Ce("isOpenNetwork");l.value=String(g)}),Se(()=>{if(o.getChatConfig.network_is_open){const g=Ce("isOpenNetwork");y.value=!!g.value}}),(g,l)=>{const b=Lt,h=Y,E=P,x=ft;return e(o).getChatConfig.network_is_open?(s(),r("div",Jt,[i(b,{modelValue:e(y),"onUpdate:modelValue":l[0]||(l[0]=I=>W(y)?y.value=I:null),size:"small",onChange:f},null,8,["modelValue"]),Zt,i(x,{placement:"right",width:240,trigger:"hover",teleported:""},{reference:u(()=>[i(E,{link:""},{default:u(()=>[i(h,{name:"el-icon-Warning"})]),_:1})]),default:u(()=>[a("div",Xt,[Yt,eo,e(o).getChatConfig.network_balance?(s(),r("div",to,[F(" 3、开启联网后，每次对话将多消耗"),a("span",oo,D(e(o).getChatConfig.network_balance),1),F("条对话（会员不消耗，大模型内置支持联网时也不消耗条数） ")])):d("",!0)])]),_:1})])):d("",!0)}}}),so=t=>(me("data-v-81292c4c"),t=t(),_e(),t),ao={class:"h-[70vh]"},lo={class:"poster-bg flex flex-col"},io=["src"],co={class:"px-[20px] pt-[120px]"},ro={class:"bg-white rounded-lg p-[15px] text-tx-primary"},uo={class:"text-[18px] font-bold"},po={class:"line-clamp-2 leading-[25px]"},fo={class:"px-[20px] pt-[15px]"},vo={class:"flex items-center justify-between"},mo={class:"flex items-center"},_o=["src"],ho={class:"ml-[10px] text-[16px]"},yo={key:0},go=so(()=>a("div",null,"长按识别二维码",-1)),wo={class:"flex justify-end mt-[10px]"},ko=A({__name:"dialog-poster",setup(t,{expose:S}){const m=he(),o=V(!1),y=V(!1),f=V({}),g=V(!1),l=Ve(),b=Ee(),h=lt({title:"",content:""}),E=async()=>{var _;g.value=!0;try{const{data:C}=await ct({id:6});f.value=((_=JSON.parse(C)[0])==null?void 0:_.content)||{}}finally{g.value=!1}},x=N(()=>`${window.origin}/mobile?user_sn=${l.userInfo.sn}`),{copy:I}=Be(),R=N(()=>`${window.origin}/?user_sn=${l.userInfo.sn}`),H=async()=>{try{y.value=!0,await xt(b.value)}catch{q.msgError("下载失败，请重试")}finally{y.value=!1}},B=_=>{o.value=!0,h.title=_.title,h.content=_.content};return E(),S({open:B}),(_,C)=>{const L=$e,j=Te,z=Y,n=P,k=kt,K=rt;return s(),w(k,{modelValue:e(o),"onUpdate:modelValue":C[1]||(C[1]=T=>W(o)?o.value=T:null),title:"生成海报","show-close":"",width:"400px"},{default:u(()=>[a("div",ao,[it((s(),w(j,null,{default:u(()=>[e(g)?d("",!0):(s(),r("div",{key:0,ref_key:"posterRef",ref:b,class:"poster rounded-[10px] overflow-hidden pb-[10px]"},[a("div",lo,[a("img",{class:"w-full",src:e(f).default==2?e(m).getImageUrl(e(f).posterUrl):e(f).poster==1?e(m).getImageUrl(e(f).defaultUrl1):e(m).getImageUrl(e(f).defaultUrl2),alt:""},null,8,io),a("div",{class:"flex-1 min-h-0",style:Q({background:e(f).bgColor})},null,4)]),a("div",{class:"w-full h-full poster-contain1 bg-[#BBBBBB]",style:Q({color:e(f).textColor})},[a("div",co,[a("div",ro,[a("div",uo,[a("span",po,D(e(h).title),1)]),a("span",{class:$(["text-[14px]",{"line-clamp-[1]":e(f).showContentType==1}]),style:Q({"-webkit-line-clamp":e(f).contentNum})},[(s(!0),r(ue,null,pe(e(h).content,(T,J)=>(s(),r("div",{key:J,class:$(["mb-[15px]",{" pt-[15px] border-t border-solid border-br-light":J>0}])},[i(L,{content:T,"use-markdown":!0},null,8,["content"])],2))),128))],6)])]),a("div",fo,[a("div",vo,[a("div",mo,[a("img",{src:e(l).userInfo.avatar,alt:"",class:"w-[60px] h-[60px] rounded-full"},null,8,_o),a("div",ho,[a("div",null,D(e(l).userInfo.nickname),1),e(f).showData==1?(s(),r("div",yo,D(e(f).data),1)):d("",!0)])]),a("div",null,[i(bt,{value:e(x),size:100,margin:1},null,8,["value"]),go])])])],4)],512))]),_:1})),[[K,e(g)]])]),a("div",wo,[i(n,{round:"",onClick:H,loading:e(y)},{icon:u(()=>[i(z,{name:"el-icon-Download"})]),default:u(()=>[F(" 下载 ")]),_:1},8,["loading"]),i(n,{round:"",onClick:C[0]||(C[0]=T=>e(I)(e(R)))},{icon:u(()=>[i(z,{name:"el-icon-DocumentCopy"})]),default:u(()=>[F(" 复制链接 ")]),_:1})])]),_:1},8,["modelValue"])}}});const xo=ye(ko,[["__scopeId","data-v-81292c4c"]]),Pe=t=>(me("data-v-a4c94e4e"),t=t(),_e(),t),bo={class:"chatting flex flex-col flex-1 bg-white py-[20px] w-full min-w-0 rounded-[20px]"},Co={class:"flex-1 flex flex-col min-h-0"},$o={key:0,class:"text-center"},So={key:0,class:"px-[40px] pb-[40px]"},Io={class:"message-contain message--his"},Vo={key:0,class:"message-contain message--his"},Eo={key:0,class:"text-primary"},Bo={key:0,class:"message-contain message--my"},To={class:"lg:px-[50px] mx-[10px]"},No={key:0,class:"flex-1 flex justify-center items-center"},Po=Pe(()=>a("span",{class:"ml-[5px]"},"继续",-1)),Do=Pe(()=>a("span",{class:"ml-[5px]"},"停止",-1)),Lo={class:"flex items-center"},Ro={class:"flex items-end"},zo={class:"flex h-full items-end flex-1 rounded-sm overflow-hidden"},Uo=A({__name:"chatting",props:{contentList:{type:Array,default:()=>[]},selectval:{type:[String,Number],default:""},chatType:{type:Number,default:0},title:{type:String,default:""},sendDisabled:{type:Boolean},avatar:{type:String},model:{type:String},network:{type:Boolean}},emits:["loading","contentPost","cleanChatLog","close","update:model","update:network","top"],setup(t,{expose:S,emit:m}){const o=t,y=he(),f=Ve(),{isLogin:g,toggleShowLogin:l}=f,b=Ee(),h=V(""),E=V(null),x=V(null),I=fe(o,"model",m),R=fe(o,"network",m),H=p=>{Re(p)},B=V({}),_=async()=>{switch(o.chatType){case 2:B.value=await ht({id:o.selectval});break;case 3:B.value=await _t({id:o.selectval})}};O(()=>o.selectval,p=>{o.chatType!=0&&_()},{immediate:!1});const C=()=>{g||l()},L=V(!1),j=p=>{if(!(p.shiftKey&&p.keyCode===13)&&!L.value&&p.keyCode===13)return z(),p.preventDefault()},z=()=>{if(h.value.replace(/(^\s*)|(\s*$)/g,"")==""){q.msgError("输入为空！");return}o.sendDisabled||(g||l(),m("contentPost",h.value,I.value),Ie(()=>{te()}),n())},n=()=>{h.value=""},k=p=>{h.value=p},{lockFn:K}=mt(async()=>{const p=o.contentList[o.contentList.length-1],v=o.contentList.find(({id:U})=>U===p.id);v&&(await yt({type:o.chatType,id:p.id}),o.contentList.splice(o.contentList.length-2,2),m("contentPost",v.content,I.value))}),T=()=>{m("cleanChatLog")},J=async(p,v)=>{v.is_collect?(await wt({collect_id:v.is_collect}),v.is_collect=0):(await gt({records_id:p}),v.is_collect=1)},{copy:De}=Be(),ee=async p=>{await De(p)},Le=()=>x.value.wrapRef.scrollHeight-x.value.wrapRef.clientHeight,Re=({scrollTop:p})=>{p==0&&(console.log("刷新！"),m("top"))},ze=async p=>{const v=o.contentList.filter(U=>U.id==p);if(v.length!=2){q.msgError("上下文数据不对～");return}b.value.open({title:v[0].content,content:v[1].content})},te=()=>{const p=Le();x.value.setScrollTop(p)},Ue=p=>{x.value.setScrollTop(p)},{height:Me}=vt(E);return O(Me,p=>{o.sendDisabled&&te()}),S({scrollToBottom:te,scrollTo:Ue,cleanInput:n,setInput:k}),(p,v)=>{const U=$e,oe=qt,ge=Y,Oe=no;return s(),r("div",bo,[a("div",Co,[t.title?(s(),r("div",$o,D(t.title),1)):d("",!0),i(e(Te),{ref_key:"scrollbarRef",ref:x,height:"100%",onScroll:H},{default:u(()=>[X(p.$slots,"default",{},void 0,!0),a("div",{ref_key:"innerRef",ref:E,class:"contentList"},[!t.contentList.length&&e(B).tips?(s(),r("div",So,[a("div",Io,[t.chatType!=0?(s(),w(oe,{key:0,type:2,"is-collet":0,avatar:t.avatar,"show-collect-btn":!1,"show-copy-btn":!1,"show-poster":!1},{rob:u(()=>[i(U,{content:e(B).tips},null,8,["content"])]),_:1},8,["avatar"])):d("",!0)])])):d("",!0),(s(!0),r(ue,null,pe(t.contentList,(c,ne)=>(s(),r("div",{key:ne,class:"px-[40px] pb-[40px]"},[c.type===2?(s(),r("div",Vo,[i(oe,{avatar:c.from_avatar,type:2,loading:c.loading,stopping:!!c.content,"show-rewrite-btn":ne===t.contentList.length-1,time:c.create_time,"is-collet":c.is_collect,onCollect:M=>J(c.id,c),onCopyContent:M=>ee(c.content),onClose:M=>m("close",ne),onPoster:M=>ze(c.id),onRewrite:e(K)},{rob:u(()=>[c.loading&&!c.content.length?(s(),r("div",Eo," 等待回复中... ")):d("",!0),(s(!0),r(ue,null,pe(c.content,(M,se)=>{var we,ke;return s(),r("div",{key:se,class:$(["mb-[15px] last-of-type:mb-0",{"pt-[15px] border-t border-solid border-br-light":se>0}])},[i(U,{loading:c.loading,content:M,"use-markdown":!!((ke=(we=e(y).config)==null?void 0:we.chat)!=null&&ke.is_markdown),index:se,"record-id":c.id,"show-copy-btn":!c.loading,"show-voice-btn":!c.loading&&e(y).getIsVoiceOpen,onCopy:Mo=>ee(M)},null,8,["loading","content","use-markdown","index","record-id","show-copy-btn","show-voice-btn","onCopy"])],2)}),128))]),_:2},1032,["avatar","loading","stopping","show-rewrite-btn","time","is-collet","onCollect","onCopyContent","onClose","onPoster","onRewrite"])])):d("",!0),a("div",null,[c.type===1?(s(),r("div",Bo,[i(oe,{avatar:c.from_avatar,type:1,"show-poster":!1,onCopyMyContent:M=>ee(c.content)},{my:u(()=>[i(U,{content:c.content},null,8,["content"])]),_:2},1032,["avatar","onCopyMyContent"])])):d("",!0)])]))),128))],512)]),_:3},512)]),a("div",To,[t.contentList.length?(s(),r("div",No,[t.sendDisabled?(s(),w(e(P),{key:1,color:"#f6f6f6",round:!0,style:{"--el-button-disabled-text-color":"#999"},onClick:v[1]||(v[1]=c=>m("close"))},{default:u(()=>[i(ge,{name:"el-icon-VideoPause",size:18}),Do]),_:1})):(s(),w(e(P),{key:0,color:"#f6f6f6",round:!0,style:{"--el-button-disabled-text-color":"#999"},onClick:v[0]||(v[0]=c=>m("contentPost","继续",e(I)))},{default:u(()=>[i(ge,{name:"el-icon-VideoPlay",size:18}),Po]),_:1}))])):d("",!0),a("div",Lo,[i(Ct,{modelValue:e(I),"onUpdate:modelValue":v[2]||(v[2]=c=>W(I)?I.value=c:null)},null,8,["modelValue"]),t.chatType==1?(s(),w(Oe,{key:0,modelValue:e(R),"onUpdate:modelValue":v[3]||(v[3]=c=>W(R)?R.value=c:null),class:"m-[10px]"},null,8,["modelValue"])):d("",!0)]),a("div",Ro,[a("div",zo,[i(e(dt),{modelValue:e(h),"onUpdate:modelValue":v[4]||(v[4]=c=>W(h)?h.value=c:null),"input-style":{backgroundColor:"var(--el-bg-color-page)"},class:"min-h-full py-[4px]",placeholder:"请输入内容（Shift + Enter）= 换行",type:"textarea",autosize:{maxRows:4},resize:"none",onCompositionstart:v[5]||(v[5]=c=>L.value=!0),onCompositionend:v[6]||(v[6]=c=>L.value=!1),onKeydown:j,onClick:C},null,8,["modelValue","input-style"])]),i(e(P),{class:"ml-2",type:"primary",onClick:z,size:"large",disabled:t.sendDisabled},{default:u(()=>[F(" 发送 ")]),_:1},8,["disabled"]),i(e(P),{type:"primary",link:"",class:"ml-4",onClick:T},{default:u(()=>[F(" 清空对话 ")]),_:1})])]),i(xo,{ref_key:"posterRef",ref:b},null,512)])}}});const dn=ye(Uo,[["__scopeId","data-v-a4c94e4e"]]);export{dn as _};
