"use strict";const a=require("../common/vendor.js"),e=require("../stores/user.js"),t=require("../utils/cache.js"),s=require("../enums/constantEnums.js"),p=a.createRouter({routes:[{path:"/pages/index/index",aliasPath:"/",meta:{share:!0}},{path:"/pages/ai_creation/ai_creation",meta:{share:!0}},{path:"/pages/skills/skills",meta:{share:!0}},{path:"/pages/app/app",meta:{share:!0}},{path:"/pages/empty/empty"},{path:"/pages/user/user",meta:{isTab:!0}},{path:"/pages/webview/webview"},{path:"/pages/login/login",meta:{white:!0}},{path:"/pages/pc_login/pc_login",meta:{white:!0}},{path:"/uni_modules/vk-uview-ui/components/u-avatar-cropper/u-avatar-cropper"},{path:"/packages/pages/square/square",meta:{share:!0}},{path:"/packages/pages/drawing/drawing",meta:{share:!0}},{path:"/packages/pages/customer_service/customer_service"},{path:"/packages/pages/user_set/user_set",meta:{auth:!0}},{path:"/packages/pages/follow_official/follow_official"},{path:"/packages/pages/task_center/task_center",meta:{auth:!0,share:!0}},{path:"/packages/pages/collection/collection",meta:{auth:!0}},{path:"/packages/pages/chat/chat",meta:{auth:!0,share:!0}},{path:"/packages/pages/as_us/as_us"},{path:"/packages/pages/agreement/agreement"},{path:"/packages/pages/404/404",name:"404",meta:{white:!0}},{path:"/packages/pages/register/register",meta:{white:!0}},{path:"/packages/pages/change_password/change_password",meta:{white:!0}},{path:"/packages/pages/forget_pwd/forget_pwd",meta:{white:!0}},{path:"/packages/pages/open_vip/open_vip",meta:{auth:!0}},{path:"/packages/pages/feedback/feedback",meta:{auth:!0}},{path:"/packages/pages/promotion_center/promotion_center",meta:{auth:!0}},{path:"/packages/pages/withdraw/withdraw",meta:{auth:!0}},{path:"/packages/pages/withdraw_record/withdraw_record",meta:{auth:!0}},{path:"/packages/pages/distribution_order/distribution_order",meta:{auth:!0}},{path:"/packages/pages/earnings_detail/earnings_detail",meta:{auth:!0}},{path:"/packages/pages/team_fans/team_fans",meta:{auth:!0}},{path:"/packages/pages/enlarge_user/enlarge_user",meta:{auth:!0}},{path:"/packages/pages/invite_poster/invite_poster",meta:{auth:!0}},{path:"/packages/pages/cancelaccount/cancelaccount",meta:{auth:!0}},{path:"/packages/pages/article_list/article_list",meta:{auth:!1,share:!0}},{path:"/packages/pages/article_detail/article_detail",meta:{auth:!0,share:!0}},{path:"/packages/pages/create/create",meta:{auth:!0,share:!0}},{path:"/packages/pages/create_history/create_history",meta:{auth:!0,share:!1}},{path:"/packages/pages/recharge/recharge",meta:{auth:!0,share:!1}},{path:"/packages/pages/redeem_code/redeem_code",meta:{auth:!0,share:!1}},{path:"/packages/pages/mind_map/mind_map",meta:{share:!1}},{path:"/packages/pages/mind_map/webview",meta:{share:!1,webview:!0}},{path:"/packages/pages/qrcode/qrcode",meta:{share:!1,auth:!1}},{path:"*",redirect:()=>({name:"404"})}],debug:!1,platform:"mp-weixin",h5:{}});let r=!0;p.beforeEach((async(a,p)=>{if(r){e.useUserStore().isLogin||a.meta.white||t.cache.set(s.BACK_URL,a.fullPath),r=!1}})),p.afterEach(((a,p)=>{e.useUserStore().isLogin||a.meta.white||t.cache.set(s.BACK_URL,a.fullPath)})),p.beforeEach((async(a,t)=>{var s,p,r;const h=e.useUserStore();if(((null==(s=a.query)?void 0:s.token)||(null==(p=a.query)?void 0:p.is_web_view))&&(h.token=(null==(r=a.query)?void 0:r.token)||null),console.log(h.isLogin,a),!h.isLogin&&a.meta.auth)return"/pages/login/login"})),exports.router=p;