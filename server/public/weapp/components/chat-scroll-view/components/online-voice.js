"use strict";const e=require("../../../common/vendor.js"),a=require("../../../api/chat.js"),u=require("../../../hooks/useAudioPlay.js"),t=require("../../../hooks/useRecorder.js"),s=require("../../../stores/app.js"),o=require("../../../config/index.js");if(require("../../../utils/request/index.js"),require("../../../utils/request/http.js"),require("../../../enums/requestEnums.js"),require("../../../utils/request/cancel.js"),require("../../../stores/user.js"),require("../../../api/user.js"),require("../../../enums/constantEnums.js"),require("../../../mixins/share.js"),require("../../../api/task.js"),require("../../../utils/util.js"),require("../../../stores/navigationBarTitle.js"),require("../../../router/index.js"),require("../../../utils/cache.js"),require("../../../utils/auth.js"),require("../../../lib/fft.js"),require("../../../api/app.js"),!Array){(e.resolveComponent("u-image")+e.resolveComponent("loading")+e.resolveComponent("u-icon")+e.resolveComponent("guided-popup")+e.resolveComponent("u-popup"))()}Math||((()=>"../../../uni_modules/vk-uview-ui/components/u-image/u-image.js")+(()=>"../../loading/loading.js")+(()=>"../../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js")+(()=>"../../guided-popup/guided-popup.js")+(()=>"../../../uni_modules/vk-uview-ui/components/u-popup/u-popup.js"))();const i=e.defineComponent({options:{styleIsolation:"shared"},__name:"online-voice",props:{show:{type:Boolean},data:null},emits:["update:show","update"],setup(i,{emit:r}){const n=i,l=e.reactive({0:"正在初始化对话...",1:"点击开始说话",2:"我在听，您请说...",3:"我好像没太听清，你可以再说一遍",4:"正在加载中，请稍后...",5:"您好像没有说话，点击按钮重试",6:"出错了，请重试",7:"稍等，让我想一想",8:"出错了，请重试",9:"正在回复，点击按钮打断"});let p=`${o.config.baseUrl}resource/image/api/default/voice.gif`;const d=s.useAppStore(),c=e.shallowRef(),v=e.computed({get:()=>n.show,set(e){r("update:show",e)}}),m=e.computed((()=>[1,6,5,6,8].includes(f.value))),h=e.ref(!1),f=e.ref(0),g=e.ref(0),j=e.ref(!1),q=e.ref(0),{start:y,stop:w,isRecording:_,authorize:x,close:C}=t.useRecorder({onstart(){j.value=!1,g.value=Date.now(),f.value=2},async onstop(e){if(z(null,0),R(),h.value){h.value=!1,f.value=4;try{const u=await a.audioTransfer(e.tempFilePath,{type:3});if(!u.text)return void(f.value=5);E(u.text,u.file)}catch(u){f.value=6}}else m.value||(f.value=1)},ondata(e){k(e);const a=Date.now();if(e.powerLevel>8&&(clearTimeout(q.value),f.value=2,j.value=!0,g.value=a,q.value=setTimeout((()=>{h.value=!0,w()}),2e3)),a-g.value>=5e3&&!j.value){if(3==f.value)return w(),void(f.value=5);f.value=3,g.value=a}}}),b=e.reactive({id:"audio-canvas",width:100,height:40,minHeight:5}),{render:k,stopRender:R,draw:z}=t.useRenderAudioGraph(b);let T=null;const A=e.ref(0),{play:P,pause:$,destroy:B}=u.useAudioPlay({api:a.getChatBroadcast,dataTransform:e=>e.file_url,params:e.reactive({records_id:A,content:0,type:3}),onstart(){f.value=9},onstop(){B(),v.value&&y()}}),E=(u,t)=>{f.value=7;try{a.chatSendText({...n.data,voice_file:t,question:u},{onstart(e){T=e},onmessage(a){a.trim().split("data:").forEach((async a=>{var u;const t=e.parse(a);if(!t)return;const{event:s,data:o,code:i}=t;"error"===s&&101===i?(f.value=1,null==(u=c.value)||u.open()):"error"===s&&(f.value=8,console.log(t),e.index.$u.toast(o)),"finish"===s&&setTimeout((async()=>{try{const e=await D();A.value=e[e.length-1].id,v.value&&await P(),r("update")}catch(e){f.value=8}}),100)}))},onclose(){}})}catch(s){f.value=8}},D=async()=>(await a.getChatRecord({type:n.data.type,other_id:1==n.data.type?void 0:n.data.other_id,category_id:1==n.data.type?n.data.other_id:void 0,page_no:1,page_size:1})).lists||[],I=async()=>{_.value?w():m.value?y():9==f.value&&$()};return e.watch(v,(async e=>{e?(f.value=0,f.value=1,z(null,0)):(_.value&&w(),null==T||T.abort(),$(),r("update"),B())})),(a,u)=>e.e({a:e.p({shape:"circle",width:"220",height:"220",src:e.unref(d).getChatConfig.chat_logo}),b:9==f.value},9==f.value?{c:e.p({size:"9rpx"})}:{},{d:e.t(e.unref(d).getWebsiteConfig.shop_name),e:e.unref(_),f:`${b.width}px`,g:`${b.height}px`,h:b.id,i:[4,9,7].includes(f.value)},[4,9,7].includes(f.value)?{j:e.unref(p)}:{},{k:e.p({name:"close",size:32}),l:e.o((e=>v.value=!1)),m:e.unref(m)},e.unref(m)?{n:e.p({name:"mic",size:60})}:{},{o:e.unref(_)},(e.unref(_),{}),{p:[4,7,0].includes(f.value)},([4,7,0].includes(f.value),{}),{q:9==f.value},9==f.value?{r:e.p({name:"pause-circle-fill",size:60})}:{},{s:e.o(I),t:e.t(l[f.value]),v:e.sr(c,"e10ebe00-7,e10ebe00-0",{k:"guidedPopupRef"}),w:e.o((a=>e.isRef(v)?v.value=a:null)),x:e.p({mode:"bottom","safe-area-inset-bottom":!0,mask:!1,height:"100%","z-index":"99999","custom-style":{background:"#191820"},modelValue:e.unref(v)})})}}),r=e._export_sfc(i,[["__scopeId","data-v-e10ebe00"]]);wx.createComponent(r);
