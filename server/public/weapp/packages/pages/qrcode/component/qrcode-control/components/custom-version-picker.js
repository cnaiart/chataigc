"use strict";const e=require("../../../../../../common/vendor.js");if(!Array){e.resolveComponent("u-icon")()}Math||((()=>"../../../../../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js")+o)();const o=()=>"../../../../../../components/drop-down/drop-down.js",t=e.defineComponent({__name:"custom-version-picker",props:{modelValue:{default:""},versionList:{default:[]}},emits:["update:modelValue"],setup(o,{emit:t}){const n=o;return e.watchEffect((()=>{const e=n.versionList;t("update:modelValue",e.v1||e[Object.keys(e)[0]])})),(n,s)=>({a:e.t("v"+o.modelValue||"请选择版本"),b:e.p({name:"arrow-down"}),c:e.f(o.versionList,((o,n,s)=>({a:e.t(n),b:o,c:e.o((e=>t("update:modelValue",o)),o)}))),d:e.p({mode:"up"})})}}),n=e._export_sfc(t,[["__scopeId","data-v-da3b00da"]]);wx.createComponent(n);
