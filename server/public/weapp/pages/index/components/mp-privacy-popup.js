"use strict";const e=require("../../../common/vendor.js"),r=require("../../../stores/app.js");require("../../../api/app.js"),require("../../../utils/request/index.js"),require("../../../utils/request/http.js"),require("../../../enums/requestEnums.js"),require("../../../utils/request/cancel.js"),require("../../../stores/user.js"),require("../../../api/user.js"),require("../../../enums/constantEnums.js"),require("../../../mixins/share.js"),require("../../../api/task.js"),require("../../../utils/util.js"),require("../../../stores/navigationBarTitle.js"),require("../../../router/index.js"),require("../../../utils/cache.js"),require("../../../utils/auth.js"),require("../../../config/index.js");const s=e.defineComponent({__name:"mp-privacy-popup",setup(s){const t=r.useAppStore(),u=e.ref(""),i=e.ref(!1);e.wx$1.getPrivacySetting&&e.wx$1.getPrivacySetting({success(e){console.log(e),u.value=e.privacyContractName,i.value=e.needAuthorization}});const a=()=>{e.wx$1.openPrivacyContract({success:()=>{},fail:()=>{}})},n=()=>{e.index.$u.toast("同意隐私政策后可继续使用")},o=()=>{i.value=!1};return(r,s)=>e.e({a:i.value},i.value?{b:e.t(e.unref(t).getChatConfig.chat_title),c:e.t(u.value),d:e.o(a),e:e.o(n),f:e.o(o),g:e.o((()=>{})),h:e.o((()=>{}))}:{})}}),t=e._export_sfc(s,[["__scopeId","data-v-31be6370"]]);wx.createComponent(t);
