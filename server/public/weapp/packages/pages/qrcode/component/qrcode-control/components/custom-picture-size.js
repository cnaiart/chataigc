"use strict";const e=require("../../../../../../common/vendor.js"),t=e.defineComponent({__name:"custom-picture-size",props:{modelValue:{default:"1:1"}},emits:["update:modelValue"],setup(t,{emit:s}){const l=[{scale:"1:1",style:"width: 40rpx; height: 40rpx"},{scale:"3:4",style:"width: 30rpx; height: 40rpx"},{scale:"4:3",style:"width: 40rpx; height: 30rpx"},{scale:"9:16",style:"width: 26rpx; height: 40rpx"},{scale:"16:9",style:"width: 40rpx; height: 24rpx"}];return(a,p)=>({a:e.f(l,((l,a,p)=>({a:e.s(l.style),b:e.t(l.scale),c:a,d:t.modelValue==l.scale?1:"",e:e.o((e=>s("update:modelValue",l.scale)),a)})))})}}),s=e._export_sfc(t,[["__scopeId","data-v-0e65e8bf"]]);wx.createComponent(s);