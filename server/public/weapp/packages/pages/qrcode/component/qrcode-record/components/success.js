"use strict";const e=require("../../../../../../common/vendor.js"),t=require("../../../../../../utils/file.js"),a=require("../../../../../../common/assets.js");Math||o();const o=()=>"./picture.js",s=e.defineComponent({__name:"success",props:{value:{default:""}},setup(o){const s=e.inject("pageIndex"),n=e.inject("qrcodeForm"),r=e.inject("promptParams"),c=e.inject("deleteDrawing");return(u,i)=>({a:e.unref(a.IconDownload),b:e.o((e=>(async e=>{t.saveImageToPhotosAlbum(e.image)})(o.value))),c:e.unref(a.IconReload),d:e.o((e=>(async e=>{if(e.prompt_params.length){const t=e.prompt_params.split(" --");t[0]=t[0].substring(2),t.forEach((e=>{const t=e.split(" ");r[t[0]]=t[1]}))}Object.keys(n).forEach((t=>{n[t]=e[t]})),s.value=0})(o.value))),e:e.unref(a.IconDelete),f:e.o((e=>(async e=>{c([e.id])})(o.value))),g:e.p({picture:o.value.image,"lazy-img":o.value.image}),h:e.t(o.value.template_text||o.value.prompt),i:e.t(o.value.create_time)})}}),n=e._export_sfc(s,[["__scopeId","data-v-862a75d0"]]);wx.createComponent(n);