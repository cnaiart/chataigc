"use strict";const l=require("../common/vendor.js"),a=new Set;exports.useAudioPlay=e=>{const{api:u,dataTransform:o,params:n,onstart:r,onstop:v}=e||{},t=l.shallowRef(null),s=l.ref(!1),i=l.ref(!1),d=async()=>{t.value.play()},c=()=>{var l;null==(l=t.value)||l.stop(),i.value=!1},f=()=>{a.forEach((l=>{null==l||l.stop(),l.audioPlaying.value=!1}))},y=()=>{null==r||r(),i.value=!0},p=()=>{var l,a;((null==(l=t.value)?void 0:l.src)||(null==(a=t.value)?void 0:a._src))&&(null==v||v()),i.value=!1},w=()=>{i.value=!1},E=e=>{t.value=l.index.createInnerAudioContext(),t.value.audioPlaying=i,t.value.onPlay(y),t.value.onEnded(p),t.value.onError(w),t.value.onStop(p),a.add(t.value)},P=()=>{var l,e,u,o;t.value&&(null==(l=t.value)||l.offPlay(y),null==(e=t.value)||e.offEnded(p),null==(u=t.value)||u.offError(w),null==(o=t.value)||o.offStop(p),a.delete(t.value),t.value=null)};return l.onBeforeUnmount((()=>{i.value&&c(),P()})),{play:async()=>{var a,e;if(f(),(null==(a=t.value)?void 0:a.src)||(null==(e=t.value)?void 0:e._src))await d();else{s.value=!0;try{const l=await(null==u?void 0:u(n)),a=null==o?void 0:o(l);if(!a)throw Error("获取的语音url错误");t.value||E(a),t.value.src=a,await d()}catch(r){console.error(r),l.index.$u.toast("语音播报异常")}finally{s.value=!1}}},audioLoading:s,audioPlaying:i,pause:c,pauseAll:f,destroy:P}};
