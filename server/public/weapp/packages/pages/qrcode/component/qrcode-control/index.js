"use strict";const e=require("../../../../../common/vendor.js"),n=require("../../enums/qrcodeEnums.js");if(!Array){(e.resolveComponent("l-textarea")+e.resolveComponent("u-button"))()}Math||(o+r+a+t+l+p+i+s+d+u+(()=>"../../../../../components/l-textarea/l-textarea.js")+f+m+(()=>"../../../../../uni_modules/vk-uview-ui/components/u-button/u-button.js"))();const o=()=>"./generation-picker.js",r=()=>"./generation-type.js",u=()=>"./generation-mode.js",t=()=>"./components/qrcode-display.js",l=()=>"./components/mewx-template.js",m=()=>"./components/zhishuyun-template.js",a=()=>"./components/custom-keyword.js",p=()=>"./components/custom-model-picker.js",i=()=>"./components/custom-version-picker.js",s=()=>"./components/custom-picture-size.js",d=()=>"./components/custom-code-type.js",f=()=>"./components/pixel-style-type.js",c=e.defineComponent({__name:"index",setup(o){const r=e.inject("config"),u=e.inject("getConfig"),t=e.inject("pageIndex"),l=e.inject("qrcodeForm"),m=e.inject("promptParams"),a=e.inject("consumptionCount"),p=e.inject("isReceiving"),i=e.inject("drawingHandler"),s=e.ref(!1),d=async()=>{s.value=!0,await e.nextTick$1(),s.value=!1,u()},f=()=>{e.index.$u.debounce(d,500)},c=()=>{l.prompt_params=(e=>{let n="";for(const o in e)""!==e[o]&&(n+=`--${o} ${e[o]} `);return n.trim()})(m),i({params:l,isClear:!0})};return(o,u)=>{var i,d,v,j,x,y,_,w,h,V,g;return e.e({a:e.o((n=>e.unref(l).model=n)),b:e.o((n=>e.isRef(a)?a.value=n:null)),c:e.p({modelList:null==(i=e.unref(r))?void 0:i.draw_model,modelValue:e.unref(l).model,balance:e.unref(a)}),d:e.unref(l).model===e.unref(n.QrcodeModeEnum).MEWX},e.unref(l).model===e.unref(n.QrcodeModeEnum).MEWX?{e:e.o((n=>e.isRef(l)?l.value=n:null)),f:e.p({modelValue:e.unref(l)}),g:e.o((n=>e.unref(l).prompt=n)),h:e.p({example:null==(d=e.unref(r))?void 0:d.example,modelValue:e.unref(l).prompt}),i:e.o((n=>e.unref(m).iw=n)),j:e.p({modelValue:e.unref(m).iw}),k:e.o((n=>e.unref(l).template_id=n)),l:e.p({template:null==(j=null==(v=e.unref(r))?void 0:v.mewx)?void 0:j.template,modelValue:e.unref(l).template_id}),m:e.o((n=>e.unref(l).model_id=n)),n:e.p({modelList:null==(x=e.unref(r))?void 0:x.mewx.model,modelValue:e.unref(l).model_id}),o:e.o((n=>e.unref(m).v=n)),p:e.p({versionList:null==(y=e.unref(r))?void 0:y.mewx.version,modelValue:e.unref(m).v}),q:e.o((n=>e.unref(m).ar=n)),r:e.p({modelValue:e.unref(m).ar}),s:e.o((n=>e.unref(m).shape=n)),t:e.p({modelValue:e.unref(m).shape}),v:e.o((n=>e.unref(l).way=n)),w:e.p({modelValue:e.unref(l).way})}:{x:e.o((n=>e.unref(l).qr_content=n)),y:e.p({maxlength:"100",rows:4,placeholder:"请输入二维码内容, 文本或链接",modelValue:e.unref(l).qr_content}),z:e.o((n=>e.unref(l).prompt=n)),A:e.p({example:null==(_=e.unref(r))?void 0:_.example,modelValue:e.unref(l).prompt}),B:e.o((n=>e.unref(l).aspect_ratio=n)),C:e.p({modelValue:e.unref(l).aspect_ratio}),D:e.o((n=>e.unref(l).pixel_style=n)),E:e.p({template:null==(h=null==(w=e.unref(r))?void 0:w.zhishuyun_qrcode)?void 0:h.pixel_style,modelValue:e.unref(l).pixel_style}),F:e.o((n=>e.unref(l).marker_shape=n)),G:e.p({modelValue:e.unref(l).marker_shape}),H:e.o((n=>e.unref(l).template_id=n)),I:e.o((n=>e.unref(l).way=n)),J:e.p({template:null==(g=null==(V=e.unref(r))?void 0:V.zhishuyun_qrcode)?void 0:g.template,modelValue:e.unref(l).template_id,way:e.unref(l).way})},{K:s.value,L:e.o(f),M:e.unref(a)},e.unref(a)?{N:e.t(e.unref(a)||0)}:{},{O:e.o((e=>t.value=1)),P:e.o(c),Q:e.p({type:"primary","custom-style":{width:"100%",height:"82rpx",fontSize:"30rpx",margin:"0"},shape:"circle",loading:e.unref(p)})})}}});wx.createComponent(c);