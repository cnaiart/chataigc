"use strict";const e=require("../../../../../common/vendor.js"),s=require("../../../../../api/drawing.js"),t=require("../../../../../common/assets.js");if(require("../../../../../utils/request/index.js"),require("../../../../../utils/request/http.js"),require("../../../../../enums/requestEnums.js"),require("../../../../../utils/request/cancel.js"),require("../../../../../stores/user.js"),require("../../../../../api/user.js"),require("../../../../../enums/constantEnums.js"),require("../../../../../mixins/share.js"),require("../../../../../api/task.js"),require("../../../../../utils/util.js"),require("../../../../../stores/navigationBarTitle.js"),require("../../../../../router/index.js"),require("../../../../../utils/cache.js"),require("../../../../../stores/app.js"),require("../../../../../api/app.js"),require("../../../../../utils/auth.js"),require("../../../../../config/index.js"),!Array){e.resolveComponent("z-paging")()}Math||(a+(()=>"../../../../../node-modules/z-paging/components/z-paging/z-paging.js"))();const a=()=>"./components/index.js",i=e.defineComponent({__name:"paging",props:{i:{default:0},index:{default:0},status:{default:3},setTaskRecordFunc:{default:()=>{}}},emits:["click"],setup(a,{emit:i}){const r=a,u=e.shallowRef(null),n=e.ref([]);e.watch((()=>r.i),(async()=>{var s;r.i==r.index&&(await e.nextTick$1(),null==(s=u.value)||s.reload())}),{immediate:!0});const o=async(e,t)=>{try{const{lists:a}=await s.drawingRecord({status:r.status,page_no:e,page_size:t});r.i==r.index&&r.setTaskRecordFunc({reload:u.value,lists:a}),u.value.complete(a)}catch(a){console.log("报错=>",a),u.value.complete(!1)}};return(s,i)=>({a:e.f(n.value,((s,t,a)=>({a:"03faac6e-1-"+a+",03faac6e-0",b:e.p({value:s,status:s.status}),c:t}))),b:e.sr(u,"03faac6e-0",{k:"paging"}),c:a.i,d:e.o(o),e:e.o((e=>n.value=e)),f:e.p({"auto-show-back-to-top":!0,auto:a.i==a.index,fixed:!1,height:"100%","auto-clean-list-when-reload":!0,"auto-scroll-to-top-when-reload":!1,"empty-view-img":e.unref(t.NoDrawEmpty),"empty-view-text":"暂无记录~",modelValue:n.value})})}});wx.createComponent(i);