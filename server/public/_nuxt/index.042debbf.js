import{_ as re}from"./index.vue.d8ead94c.js";import{_ as ce}from"./client-only.97a86643.js";import{_ as ie}from"./index.vue.3dfb5dc9.js";import{a as X,q as r,o as _,h as y,e as d,t as V,k as Q,u as a,f as p,w as h,G as ue,N as pe,y as Z,aC as de,X as me,Z as _e,b as fe,O as ve,C as q,S as ge,M as he,i as ye,aE as xe,x as we,F as O,r as J,Q as Ce,z as ke,cX as be,cY as Te,Y as Re,K,T as N,j as Le,c as Se}from"./entry.c7e0e7b4.js";import{_ as W}from"./_plugin-vue_export-helper.c27b6911.js";import{_ as Be}from"./chatting.908f8808.js";import{a as Ee}from"./model-picker.vue.0083d776.js";import{u as Ie}from"./index.88b551d2.js";import{c as Ne,a as De,b as ze}from"./chat.bab8475b.js";import{E as Pe}from"./index.ade63ee3.js";import{E as $e}from"./index.0b9306dd.js";import{f as Me}from"./index.cb3770be.js";import"./index.fa4f9017.js";import"./index.aad710b7.js";/* empty css                */import"./el-tooltip.4ed993c7.js";/* empty css                  */import"./index.67b2792c.js";import"./index.b72cfc4b.js";import"./dropdown.ee5c9419.js";/* empty css                   */import"./useLockFn.d62becec.js";import"./useCopy.162cbe26.js";import"./my.94b48df2.js";import"./index.222a6e13.js";import"./refs.94480413.js";/* empty css                     *//* empty css                  */import"./download.76c7fb53.js";import"./qrcode.vue.esm.3fb480da.js";import"./recharge.573a4938.js";import"./index.ba068d27.js";import"./index.cd5f7601.js";import"./strings.d42ea6f6.js";import"./isEqual.5a66db24.js";import"./_getTag.b4ecd864.js";import"./debounce.2af106a8.js";/* empty css                  *//* empty css               */import"./_commonjsHelpers.042e6b4d.js";import"./katex.c0798897.js";const Ae={class:"cursor-default"},Fe=X({__name:"index",props:{title:{type:String,default:""},length:{type:Number,default:0}},setup(C){const f=r(!0),D=()=>{f.value==!0?f.value=!1:f.value=!0};return(v,m)=>{const S=ie;return _(),y("div",null,[d("div",{class:"flex items-center justify-between mt-[15px] text-info",onClick:D},[d("div",Ae,V(C.title),1),d("div",{class:Q(["transition-transform rotate-",{"rotate-180":!a(f)}])},[p(S,{name:"el-icon-ArrowUp"})],2)]),p(de,null,{default:h(()=>[a(f)?(_(),y("div",{key:0,style:ue({"max-height":C.length*110+"px"}),class:"dropDownList overflow-hidden"},[pe(v.$slots,"menu",{},void 0,!0)],4)):Z("",!0)]),_:3})])}}});const Ue=W(Fe,[["__scopeId","data-v-2b7032c7"]]);function qe(C){return $request.get({url:"/skill/lists",params:C})}const Oe={class:"p-[16px]"},Ve=["onClick"],je={class:"ml-2 flex-1"},Ye={class:"font-bold"},Ge={class:"h-full"},He=["onClick"],Je=X({__name:"index",setup(C){const f=me(),D=_e();fe();const v=ve(),m=r(0),S=r(""),B=r(""),k=r([]),j=r(Number(D.query.id)),z=q({model:""}),P=r(),$=({id:e,title:t,image:o})=>{f.push({path:"/skill",query:{id:e}}),m.value=Number(e),x.page_no=1,n.value=[],T=0,S.value=t,B.value=o,N(async()=>{await A(),g.value.scrollToBottom()})},Y=ge(),n=r([]),g=r(null),b=r(),G=async()=>{k.value=await qe({keyword:b.value})},x=q({type:3,page_type:1,page_no:1,page_size:15}),E=r(!1),M=r(!1);let T=0;const A=async e=>{var t;M.value=!0,E.value=!0;try{const o=document.getElementsByClassName("contentList")[0],l=await ze({other_id:m.value,...x,page_no:e?1:x.page_no,page_size:e?1:x.page_size}),{page_no:i,page_size:w}=x;(i*w>l.count||n.value.length/2>=l.count)&&(E.value=!1);const L=l==null?void 0:l.lists.map(s=>s.type==1?{...s,from_avatar:v.userInfo.avatar}:{...s,from_avatar:B.value});e?(n.value.splice(-2,2),n.value=[...n.value,...L]):n.value=[...L,...n.value],await N();const u=Object.freeze(o==null?void 0:o.getBoundingClientRect());u&&T&&((t=g.value)==null||t.scrollTo(u.height-T)),T=u.height}catch(o){console.log("聊天记录错误",o)}finally{M.value=!1}},H=()=>{E.value&&T&&(x.page_no+=1,A())},{pauseAll:ee}=Ie(),R=r(!1),F=r(""),te=async e=>{try{if(R.value=!0,F.value=e,v.userInfo.is_chat_limit&&be(!0,Te))try{await Re.confirm("已超过会员对话上限次数，继续对话将会消耗账户的对话余额","对话上限提示",{showClose:!1,confirmButtonText:"继续",cancelButtonText:"关闭"})}catch{return}n.value.push({type:1,content:e,from_avatar:v.userInfo.avatar});const t=q({type:2,loading:!0,content:[],create_time:" ",from_avatar:B.value,id:""});n.value.push(t),await Ne({question:e,type:3,other_id:m.value,...z},{onstart(o){I=o,ee()},onmessage(o){o.trim().split("data:").forEach(async l=>{var i;if(l!=="")try{const w=JSON.parse(l),{id:L,event:u,data:s,code:U,index:c}=w;if(u=="error"&&U===101?(i=Y.value)==null||i.open():u=="error"&&(K.msgError(s),g.value.setInput(F.value)),s&&(t.content[c]||(t.content[c]=""),t.content[c]+=s),u==="finish"){t.loading=!1;return}}catch{}})},onclose(){R.value=!1,setTimeout(async()=>{await A(!0),await N(),g.value.scrollToBottom()},600),v.getUser()}})}catch{R.value=!1,g.value.setInput(F.value),n.value.splice(n.value.length-2,2)}N(()=>{g.value.scrollToBottom()})};let I=null;const oe=e=>{I==null||I.cancel(),e&&(n.value[e].loading=!1),R.value=!1},ae=async()=>{await K.confirm("确定清空对话？"),await De({type:3,other_id:m.value}),n.value=[]},se=()=>{j.value?k.value.forEach((e,t)=>{e.skill.forEach((o,l)=>{o.id==j.value&&$(k.value[t].skill[l])})}):$(k.value[0].skill[0])},ne=()=>{var i;const[e]=document.getElementsByClassName("actived");if(!e)return;const t=e.getBoundingClientRect(),o=(i=P.value)==null?void 0:i.wrapRef.getBoundingClientRect(),l=t.top-(o.height/2+o.top);P.value.setScrollTop(l)};return he(async()=>{await G(),await se(),ne()}),Me(b,e=>{G()},{debounce:500}),(e,t)=>{const o=re,l=ce,i=Ue,w=Be,L=Ee,u=Le;return _(),y("div",null,[p(u,{name:"default"},{panel:h(()=>[p(a(Pe),{class:"w-[240px] bg-white",ref_key:"scrollbarRef",ref:P},{default:h(()=>[d("div",Oe,[ye(d("input",{class:"bg-[#f8f8f8] w-full leading-[32px] rounded-[3px] outline-none px-[10px]","onUpdate:modelValue":t[0]||(t[0]=s=>we(b)?b.value=s:null),placeholder:"请输入关键词搜索"},null,512),[[xe,a(b)]]),(_(!0),y(O,null,J(a(k),(s,U)=>(_(),Se(i,{title:s.name,length:s.skill.length,key:U},{menu:h(()=>[(_(!0),y(O,null,J(s.skill,(c,le)=>(_(),y("div",{class:Q(["bg-[#F8F8F8] flex items-center p-[10px] mt-2 cursor-pointer",{actived:a(m)==c.id,unactived:a(m)!=c.id}]),key:le,onClick:Ke=>$(c)},[p(a($e),{src:c.image,class:"w-[34px] h-[34px] rounded-[8px]"},null,8,["src"]),d("div",je,[d("div",Ye,V(c.name),1),p(l,null,{default:h(()=>[p(o,{teleported:"",class:"text-tx-secondary",content:c.describe,line:2},null,8,["content"])]),_:2},1024)])],10,Ve))),128))]),_:2},1032,["title","length"]))),128))])]),_:1},512)]),default:h(()=>[d("div",Ge,[p(w,{model:a(z).model,"onUpdate:model":t[1]||(t[1]=s=>a(z).model=s),class:"h-full",ref_key:"chattingRef",ref:g,title:a(S),selectval:a(m),avatar:a(B),"chat-type":3,"send-disabled":a(R),"content-list":a(n),onClose:oe,onContentPost:te,onCleanChatLog:ae,onTop:H},{default:h(()=>[d("div",{class:"h-[40px] py-[10px] text-[#999] text-center cursor-pointer",onClick:Ce(H,["stop"])},[a(E)&&a(v).isLogin?(_(),y(O,{key:0},[ke(V(a(M)?"正在加载中...":"-- 点击加载 --"),1)],64)):Z("",!0)],8,He)]),_:1},8,["model","title","selectval","avatar","send-disabled","content-list"])]),p(L,{ref_key:"guidedPopupRef",ref:Y},null,512)]),_:1})])}}});const Mt=W(Je,[["__scopeId","data-v-1f820ace"]]);export{Mt as default};
