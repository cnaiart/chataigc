"use strict";const e=require("../../../common/vendor.js"),n=e.defineComponent({__name:"tab",props:{dot:{type:[Boolean,String],default:!1},name:{type:[Boolean,String],default:""},info:null},setup(n){const o=n,t=e.ref(!1),a=e.ref(!1),u=e.ref(!1),l=e.ref(void 0),r=e.inject("updateTabs"),c=e.inject("handleChange"),d=()=>{r&&r()},s=e.getCurrentInstance();console.log(s),c(null==s?void 0:s.props,(e=>{l.value=l.value||e,t.value=e,u.value=l.value,a.value=e})),e.onMounted((()=>{d()}));const v=e.computed((()=>{const{dot:e,info:n}=o;return{dot:e,info:n}}));return e.watch((()=>v.value),(()=>{d()})),e.watch((()=>o.name),(e=>{d()})),(n,o)=>e.e({a:u.value},(u.value,{}),{b:t.value?1:"",c:t.value?"":1,d:e.s(a.value?"":"display: none;")})}});wx.createComponent(n);
