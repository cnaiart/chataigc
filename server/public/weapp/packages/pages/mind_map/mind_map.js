"use strict";const e=require("../../../common/vendor.js"),s=require("../../../stores/user.js"),i=require("../../../utils/client.js"),r=require("../../../enums/appEnums.js"),t=require("../../../utils/imgPath.js"),u=require("../../../config/index.js");require("../../../api/user.js"),require("../../../utils/request/index.js"),require("../../../utils/request/http.js"),require("../../../enums/requestEnums.js"),require("../../../utils/request/cancel.js"),require("../../../router/index.js"),require("../../../utils/cache.js"),require("../../../enums/constantEnums.js"),require("../../../mixins/share.js"),require("../../../api/task.js"),require("../../../utils/util.js"),require("../../../stores/navigationBarTitle.js"),require("../../../stores/app.js"),require("../../../api/app.js"),require("../../../utils/auth.js");const n=e.defineComponent({__name:"mind_map",setup(n){const a=s.useUserStore(),o=e.computed((()=>i.getClient()==r.ClientEnum.ANDROID||i.getClient()==r.ClientEnum.IOS?"isApp":"noApp")),l=async s=>{const i=s.detail.data,r=await t.base64ToPath(i[0].base64);e.index.saveImageToPhotosAlbum({filePath:r,success:s=>{e.index.$u.toast("保存成功！")},fail:s=>{e.index.$u.toast("保存失败！")}})},m=e.computed((()=>`${u.config.baseUrl}mobile/packages/pages/mind_map/webview?is_web_view=1&token=${a.token}&client=${o.value}`));return(s,i)=>({a:s.$theme.navColor,b:s.$theme.navBgColor,c:s.$theme.pageStyle,d:e.unref(m),e:e.o(l)})}});wx.createPage(n);
