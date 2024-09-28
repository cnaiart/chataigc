"use strict";const e=require("../../../../../../common/vendor.js"),t=require("../../../../../../common/assets.js"),u=require("../../../../../../api/drawing.js");if(require("../../../../../../utils/request/index.js"),require("../../../../../../utils/request/http.js"),require("../../../../../../enums/requestEnums.js"),require("../../../../../../utils/request/cancel.js"),require("../../../../../../stores/user.js"),require("../../../../../../api/user.js"),require("../../../../../../enums/constantEnums.js"),require("../../../../../../mixins/share.js"),require("../../../../../../api/task.js"),require("../../../../../../utils/util.js"),require("../../../../../../stores/navigationBarTitle.js"),require("../../../../../../router/index.js"),require("../../../../../../utils/cache.js"),require("../../../../../../stores/app.js"),require("../../../../../../api/app.js"),require("../../../../../../utils/auth.js"),require("../../../../../../config/index.js"),!Array){(e.resolveComponent("u-tabs")+e.resolveComponent("u-popup"))()}Math||((()=>"../../../../../../uni_modules/vk-uview-ui/components/u-tabs/u-tabs.js")+(()=>"../../../../../../uni_modules/vk-uview-ui/components/u-popup/u-popup.js"))();const r=e.defineComponent({__name:"keyword-suggestion",props:{modelValue:{default:""}},emits:["update:modelValue"],setup(r,{expose:a,emit:o}){const l=r,s=e.ref(!1),p=e.ref(0),i=e.ref([]),n=e.ref({prompt:[],cate_prompt:[]}),m=e.ref([]);e.watchEffect((()=>{""==l.modelValue&&(m.value=[])}));const c=e=>{const t=m.value.findIndex((t=>t==e));t>=0?m.value.splice(t,1):m.value.push(e)},v=e=>{p.value=e,j()},d=async()=>{try{i.value=await u.keywordCate(),await j()}catch(e){console.log("获取关键词分类错误",e)}},j=async()=>{try{n.value=await u.keywordPrompt({id:i.value[p.value].id})}catch(e){console.log("获取关键词错误",e)}};return a({open:()=>{s.value=!0,d()}}),(u,r)=>e.e({a:i.value.length},i.value.length?{b:e.o(v),c:e.p({list:i.value,"is-scroll":!0,"active-color":u.$theme.primaryColor,height:"80rpx","font-size":"28rpx",current:p.value})}:{},{d:n.value.prompt.length||n.value.cate_prompt.length},n.value.prompt.length||n.value.cate_prompt.length?e.e({e:e.f(n.value.cate_prompt,((t,u,r)=>({a:e.t(t.name),b:e.t(null==t?void 0:t.prompt.length),c:e.f(t.prompt,((t,u,r)=>({a:e.t(t.prompt),b:t.text,c:m.value.includes(t.prompt_en)?1:"",d:e.o((e=>c(t.prompt_en)),t.text)}))),d:u}))),f:n.value.prompt.length},n.value.prompt.length?e.e({g:n.value.cate_prompt.length},n.value.cate_prompt.length?{h:e.t(n.value.prompt.length)}:{},{i:e.f(n.value.prompt,((t,u,r)=>({a:e.t(t.prompt),b:t.text,c:m.value.includes(t.prompt_en)?1:"",d:e.o((e=>c(t.prompt_en)),t.text)})))}):{}):{j:t.NoDrawEmpty},{k:e.o((e=>(()=>{if(s.value=!1,""==l.modelValue.trim())o("update:modelValue",m.value.join(","));else{const e=l.modelValue+","+m.value.join(",");o("update:modelValue",e)}m.value=[]})())),l:e.o((e=>(s.value=!1,o("update:modelValue",m.value.join(",")+","),void(m.value=[])))),m:e.o((e=>s.value=e)),n:e.p({mode:"center",closeable:!0,"border-radius":"20","z-index":99999,modelValue:s.value})})}}),a=e._export_sfc(r,[["__scopeId","data-v-7bc73663"]]);wx.createComponent(a);