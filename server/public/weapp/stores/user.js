"use strict";const e=require("../api/user.js"),s=require("../enums/constantEnums.js"),t=require("../mixins/share.js"),r=require("../utils/auth.js"),n=require("../utils/cache.js"),o=require("../common/vendor.js").defineStore({id:"userStore",state:()=>({userInfo:{},token:r.getToken()||null,temToken:null}),getters:{isLogin:e=>!!e.token},actions:{async getUser(){const s=await e.getUserCenter({token:this.token});this.userInfo=s},login(e){this.token=e,n.cache.set(s.TOKEN_KEY,e),t.useSharedId()},logout(){this.token="",this.userInfo={},n.cache.remove(s.TOKEN_KEY)}}});exports.useUserStore=o;