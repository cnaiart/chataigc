"use strict";const e=require("../../../../../common/vendor.js"),a=e.defineComponent({__name:"dalle3-size-type",props:{modelValue:{default:"standard"}},emits:["update:modelValue"],setup(a,{emit:l}){const t=a,u=e.computed({get:()=>t.modelValue,set:e=>{l("update:modelValue",e)}}),d=[{value:"standard",label:"标准"},{value:"hd",label:"HD-高清"}];return(a,l)=>({a:e.f(d,((a,l,t)=>({a:e.t(a.label),b:a.value,c:a.value===e.unref(u)?1:"",d:e.o((e=>u.value=a.value),a.value)})))})}}),l=e._export_sfc(a,[["__scopeId","data-v-7eee4e93"]]);wx.createComponent(l);