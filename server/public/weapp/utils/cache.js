"use strict";const e=require("../common/vendor.js"),t={key:"app_",set(t,r,n){t=this.getKey(t);let i={expire:n?this.time()+n:"",value:r};"object"==typeof i&&(i=JSON.stringify(i));try{e.index.setStorageSync(t,i)}catch(o){return null}},get(t){t=this.getKey(t);try{const r=e.index.getStorageSync(t);if(!r)return null;const{value:n,expire:i}=JSON.parse(r);return i&&i<this.time()?(e.index.removeStorageSync(t),null):n}catch(r){return null}},time:()=>Math.round((new Date).getTime()/1e3),remove(t){t=this.getKey(t),e.index.removeStorageSync(t)},getKey(e){return this.key+e}};exports.cache=t;
