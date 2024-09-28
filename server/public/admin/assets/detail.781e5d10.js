import{_ as Q,M as W,o as X,w as Y,C as Z,D as ee}from"./element-plus.38726bbd.js";import{_ as te}from"./index.vue_vue_type_script_setup_true_lang.8d1a4714.js";import{j as V,m as se,f as ue,b as ae}from"./index.0aa35fa2.js";import{u as ie}from"./vue-router.f90229e4.js";import{e as oe,f as le,h as re,i as ne,j as de}from"./consumer.b7c7cab4.js";import{_ as M}from"./account-adjust.vue_vue_type_script_setup_true_lang.7027eb23.js";import{_ as me}from"./vip-adjust.vue_vue_type_script_setup_true_lang.a06050fa.js";import{_ as _e}from"./reset-password.vue_vue_type_script_setup_true_lang.d8cc1de6.js";import{_ as ce}from"./leader-adjust.vue_vue_type_script_setup_true_lang.e277c346.js";import{_ as fe}from"./recordPop.vue_vue_type_script_setup_true_lang.8e42a6ac.js";import{d as N,_ as pe,r as w,s as y,ag as ve,ar as be,o as m,c as ye,V as e,M as t,L as _,S as F,a as o,T as i,U as r,O as p,u as h,n as L}from"./@vue.581f5ce0.js";import"./lodash-es.b552e321.js";import"./async-validator.fb49d0f5.js";import"./@vueuse.788ba4d8.js";import"./@element-plus.048d13fe.js";import"./dayjs.3bbbdfdd.js";import"./axios.ef5f3479.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.ccf63c29.js";import"./pinia.8de84ecb.js";import"./vue-demi.ebc8116b.js";import"./css-color-function.7bd56a8d.js";import"./color.4d72ae60.js";import"./clone.f3914b59.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.e3c4d4cf.js";import"./ms.a9ae1d6d.js";import"./vue-drag-resize.3665149e.js";import"./nprogress.db25c43d.js";import"./vue-clipboard3.37da43ca.js";import"./clipboard.51333a27.js";import"./echarts.8d7a50ae.js";import"./zrender.1084fa23.js";import"./tslib.60310f1a.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.18a086c3.js";import"./index.1c6c033d.js";import"./index.vue_vue_type_script_setup_true_lang.c6066b25.js";import"./usePaging.2d3fb421.js";const Fe={class:"flex items-center py-5 mb-10 bg-page"},De={class:"flex flex-col items-center justify-center basis-40"},ke=o("div",{class:"mb-2 text-tx-regular"},"\u7528\u6237\u5934\u50CF",-1),xe={class:"flex flex-col items-center justify-center basis-40"},Ee=o("div",{class:"text-tx-regular"},"\u5BF9\u8BDD\u4F59\u989D",-1),we={class:"flex items-center mt-2"},Ce=i(" \u8C03\u6574 "),Be={class:"flex flex-col items-center justify-center basis-40"},Ae=o("div",{class:"text-tx-regular"},"\u7ED8\u753B\u4F59\u989D",-1),he={class:"flex items-center mt-2"},je=i(" \u8C03\u6574 "),$e={class:"flex flex-col items-center justify-center basis-40"},ge=o("div",{class:"text-tx-regular"},"\u7D2F\u8BA1\u6D88\u8D39",-1),Re={class:"flex items-center mt-2"},Pe={class:"flex flex-col items-center justify-center basis-40"},qe=o("div",{class:"text-tx-regular"},"\u7D2F\u8BA1\u63D0\u95EE",-1),Ue={class:"flex items-center mt-2"},Ve={class:"flex flex-col items-center justify-center basis-40"},Me=o("div",{class:"text-tx-regular"},"\u7D2F\u8BA1\u7ED8\u753B",-1),Le={class:"flex items-center mt-2"},Ne=i(" \u67E5\u770B\u9080\u8BF7\u4EBA\u6570"),Se={class:"text-[#F2A626]"},ze=i(" \u67E5\u770B\u5206\u9500\u4FE1\u606F"),Te=i(" \u52A0\u5165\u9ED1\u540D\u5355 "),Ie=i(" \u79FB\u9664\u9ED1\u540D\u5355 "),Oe=i(" \u4F1A\u5458\u5F00\u901A\u8BB0\u5F55 "),He=i(" \u91CD\u7F6E\u5BC6\u7801 "),Ge=N({name:"consumerDetail"}),Nt=N({...Ge,setup(Je){const c=ie(),u=pe({id:"",avatar:"",channel:"",create_time:"",login_time:"",mobile:"",email:"",nickname:"",real_name:0,sex:0,sn:"",account:"",balance:"",total_amount:"",total_quiz:"",member_desc:"",member_end_time:"",member_perpetual:"",is_distribution:1,is_distribution_desc:"",distribution_status:"",distribution_time:"",is_end:"",inviter_id:"",inviter_name:"",invite_num:"",first_leader:"",second_leader:"",user_money:"",total_user_money:"",is_blacklist:0,channel_desc:"",member_end_time_desc:"",member_package_id:"",balance_draw:"",total_draw:""}),D=w(!1),k=w(!1),C=w(!1),S=y(),j=y(),$=y(),g=y(),v=async()=>{const l=await oe({id:c.query.id});Object.keys(u).forEach(s=>{u[s]=l[s]})},x=async(l,s)=>{se(l)||(await ne({id:c.query.id,field:s,value:l}),v())},z=async l=>{await le({user_id:c.query.id,...l}),D.value=!1,v()},T=async l=>{await re({user_id:c.query.id,...l}),k.value=!1,v()};v();const B=y(),A=w(!1),I=async()=>{var l,s;A.value=!0,await L(),(l=B.value)==null||l.open("add"),(s=B.value)==null||s.setFormData(u,c.query.id)},R=async l=>{await ue.confirm(`\u662F\u5426${l?"\u79FB\u51FA\u9ED1\u540D\u5355":"\u52A0\u5165\u9ED1\u540D\u5355"}`),await de({id:c.query.id}),await v()},O=()=>{j.value.open(c.query.id)},H=async()=>{var l;C.value=!0,await L(),(l=g.value)==null||l.open(c.query.id)};return(l,s)=>{const G=Q,P=W,J=X,n=Y,d=Z,b=ae,E=te,q=ve("router-link"),K=ee,f=be("perms");return m(),ye("div",null,[e(P,{class:"!border-none",shadow:"never"},{default:t(()=>[e(G,{content:"\u7528\u6237\u8BE6\u60C5",onBack:s[0]||(s[0]=a=>l.$router.back())})]),_:1}),e(P,{class:"mt-4 !border-none",header:"\u57FA\u672C\u8D44\u6599",shadow:"never"},{default:t(()=>[e(K,{ref_key:"formRef",ref:S,class:"ls-form",model:u,"label-width":"120px"},{default:t(()=>[o("div",Fe,[o("div",De,[ke,e(J,{src:u.avatar,size:58},null,8,["src"])]),o("div",xe,[Ee,o("div",we,[i(r(u.balance)+" ",1),p((m(),_(n,{type:"primary",link:"",onClick:s[1]||(s[1]=a=>D.value=!0)},{default:t(()=>[Ce]),_:1})),[[f,["user.user/adjustMoney"]]])])]),o("div",Be,[Ae,o("div",he,[i(r(u.balance_draw)+" ",1),p((m(),_(n,{type:"primary",link:"",onClick:s[2]||(s[2]=a=>k.value=!0)},{default:t(()=>[je]),_:1})),[[f,["user.user/adjustUserDraw"]]])])]),o("div",$e,[ge,o("div",Re,r(u.total_amount),1)]),o("div",Pe,[qe,o("div",Ue,r(u.total_quiz)+"\u6B21",1)]),o("div",Ve,[Me,o("div",Le,r(u.total_draw)+"\u6B21",1)])]),e(d,{label:"\u7528\u6237ID\uFF1A"},{default:t(()=>[i(r(u.sn),1)]),_:1}),e(d,{label:"\u7528\u6237\u6635\u79F0\uFF1A"},{default:t(()=>[i(r(u.nickname),1)]),_:1}),e(d,{label:"\u4F1A\u5458\uFF1A"},{default:t(()=>[i(r(`${u.member_desc}(${u.member_end_time_desc||"\u65E0"})`)+" ",1),e(n,{type:"primary",link:"",onClick:I},{default:t(()=>[e(b,{name:"el-icon-EditPen"})]),_:1})]),_:1}),e(d,{label:"\u771F\u5B9E\u59D3\u540D\uFF1A"},{default:t(()=>[i(r(u.real_name||"-")+" ",1),p((m(),_(E,{class:"ml-[10px]",onConfirm:s[3]||(s[3]=a=>x(a,"real_name")),limit:32},{default:t(()=>[e(n,{type:"primary",link:""},{default:t(()=>[e(b,{name:"el-icon-EditPen"})]),_:1})]),_:1})),[[f,["user.user/edit"]]])]),_:1}),e(d,{label:"\u6027\u522B\uFF1A"},{default:t(()=>[i(r(u.sex)+" ",1),p((m(),_(E,{class:"ml-[10px]",type:"select",options:[{label:"\u672A\u77E5",value:0},{label:"\u7537",value:1},{label:"\u5973",value:2}],onConfirm:s[4]||(s[4]=a=>x(a,"sex"))},{default:t(()=>[e(n,{type:"primary",link:""},{default:t(()=>[e(b,{name:"el-icon-EditPen"})]),_:1})]),_:1})),[[f,["user.user/edit"]]])]),_:1}),e(d,{label:"\u8054\u7CFB\u7535\u8BDD\uFF1A"},{default:t(()=>[i(r(u.mobile||"-")+" ",1),p((m(),_(E,{class:"ml-[10px]",type:"number",onConfirm:s[5]||(s[5]=a=>x(a,"mobile"))},{default:t(()=>[e(n,{type:"primary",link:""},{default:t(()=>[e(b,{name:"el-icon-EditPen"})]),_:1})]),_:1})),[[f,["user.user/edit"]]])]),_:1}),e(d,{label:"\u90AE\u7BB1\u8D26\u53F7\uFF1A"},{default:t(()=>[i(r(u.email||"-")+" ",1),p((m(),_(E,{class:"ml-[10px]",onConfirm:s[6]||(s[6]=a=>x(a,"email")),limit:32},{default:t(()=>[e(n,{type:"primary",link:""},{default:t(()=>[e(b,{name:"el-icon-EditPen"})]),_:1})]),_:1})),[[f,["user.user/edit"]]])]),_:1}),e(d,{label:"\u4E0A\u7EA7\u9080\u8BF7\u4EBA"},{default:t(()=>[i(r(u.inviter_name||"-")+" ",1),e(n,{type:"primary",link:"",onClick:H},{default:t(()=>[e(b,{name:"el-icon-EditPen"})]),_:1})]),_:1}),e(d,{label:"\u9080\u8BF7\u7684\u7528\u6237"},{default:t(()=>{var a;return[i(r((a=u.invite_num)!=null?a:"-")+" ",1),e(q,{to:{path:h(V)("distribution.distributor/belowLists"),query:{id:u.id}}},{default:t(()=>[e(n,{link:"",type:"primary"},{default:t(()=>[Ne]),_:1})]),_:1},8,["to"])]}),_:1}),e(d,{label:"\u5206\u9500\u8D44\u683C"},{default:t(()=>[o("span",Se,r(u.is_distribution_desc),1),e(q,{to:{path:h(V)("distribution.distributor/detail"),query:{id:u.id}}},{default:t(()=>[u.is_distribution==1?(m(),_(n,{key:0,link:"",type:"primary"},{default:t(()=>[ze]),_:1})):F("",!0)]),_:1},8,["to"])]),_:1}),e(d,{label:"\u6CE8\u518C\u6765\u6E90\uFF1A"},{default:t(()=>[i(r(u.channel_desc),1)]),_:1}),e(d,{label:"\u6CE8\u518C\u65F6\u95F4\uFF1A"},{default:t(()=>[i(r(u.create_time),1)]),_:1}),e(d,{label:"\u6700\u8FD1\u767B\u5F55\u65F6\u95F4\uFF1A"},{default:t(()=>[i(r(u.login_time),1)]),_:1}),p((m(),_(d,null,{default:t(()=>[u.is_blacklist==0?(m(),_(n,{key:0,onClick:s[7]||(s[7]=a=>R(0))},{default:t(()=>[Te]),_:1})):F("",!0),u.is_blacklist==1?(m(),_(n,{key:1,onClick:s[8]||(s[8]=a=>R(1))},{default:t(()=>[Ie]),_:1})):F("",!0),e(n,{onClick:O},{default:t(()=>[Oe]),_:1}),p((m(),_(n,{onClick:s[9]||(s[9]=a=>{var U;return(U=h($))==null?void 0:U.open()})},{default:t(()=>[He]),_:1})),[[f,["user.user/rePassword"]]])]),_:1})),[[f,["user.user/blacklist"]]])]),_:1},8,["model"])]),_:1}),e(M,{title:"\u5BF9\u8BDD\u4F59\u989D\u8C03\u6574",show:D.value,"onUpdate:show":s[10]||(s[10]=a=>D.value=a),value:u.balance,onConfirm:z},null,8,["show","value"]),e(M,{title:"\u7ED8\u753B\u4F59\u989D\u8C03\u6574",show:k.value,"onUpdate:show":s[11]||(s[11]=a=>k.value=a),value:u.balance_draw,onConfirm:T},null,8,["show","value"]),A.value?(m(),_(me,{key:0,ref_key:"editRef",ref:B,onSuccess:v,onClose:s[12]||(s[12]=a=>A.value=!1)},null,512)):F("",!0),e(fe,{ref_key:"recordPopRef",ref:j},null,512),e(_e,{"user-id":u.id,ref_key:"resetPasswordRef",ref:$},null,8,["user-id"]),C.value?(m(),_(ce,{key:1,ref_key:"leaderAdjustRef",ref:g,"user-info":u,onSuccess:v,onClose:s[13]||(s[13]=a=>C.value=!1)},null,8,["user-info"])):F("",!0)])}}});export{Nt as default};