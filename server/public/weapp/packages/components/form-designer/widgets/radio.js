"use strict";const e=require("../../../../common/vendor.js"),t=e.defineComponent({__name:"radio",props:{defaultValue:null,modelValue:{default:""},options:{default:()=>[]}},emits:["update:modelValue"],setup(t,{emit:o}){const a=t,u=e.computed({get:()=>a.modelValue,set(e){o("update:modelValue",e)}});return e.onBeforeMount((()=>{a.defaultValue&&(u.value=a.defaultValue)})),(o,a)=>({a:e.f(t.options,((t,o,a)=>({a:e.t(t),b:o,c:e.o((e=>u.value=t),o),d:e.unref(u)===t?1:""})))})}}),o=e._export_sfc(t,[["__scopeId","data-v-7dba6fb8"]]);wx.createComponent(o);
