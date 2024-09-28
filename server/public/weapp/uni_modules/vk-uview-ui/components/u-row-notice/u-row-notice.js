"use strict";const t=require("../../../../common/vendor.js"),e={emits:["close","getMore"],props:{list:{type:Array,default:()=>[]},type:{type:String,default:"warning"},volumeIcon:{type:Boolean,default:!0},moreIcon:{type:Boolean,default:!1},closeIcon:{type:Boolean,default:!1},autoplay:{type:Boolean,default:!0},color:{type:String,default:""},bgColor:{type:String,default:""},show:{type:Boolean,default:!0},fontSize:{type:[Number,String],default:26},volumeSize:{type:[Number,String],default:34},speed:{type:[Number,String],default:160},playState:{type:String,default:"play"},padding:{type:[Number,String],default:"18rpx 24rpx"}},data:()=>({textWidth:0,boxWidth:0,animationDuration:"10s",animationPlayState:"paused",showText:""}),watch:{list:{immediate:!0,handler(t){this.showText=t.join("，"),this.$nextTick((()=>{this.initSize()}))}},playState(t){this.animationPlayState="play"==t?"running":"paused"},speed(t){this.initSize()}},computed:{computeColor(){return this.color?this.color:"none"==this.type?"#606266":this.type},textStyle(){let t={};return this.color?t.color=this.color:"none"==this.type&&(t.color="#606266"),t.fontSize=this.fontSize+"rpx",t},computeBgColor(){return this.bgColor?this.bgColor:"none"==this.type?"transparent":void 0}},mounted(){this.$nextTick((()=>{this.initSize()}))},methods:{initSize(){let e=[],o=new Promise(((e,o)=>{t.index.createSelectorQuery().in(this).select("#u-notice-content").boundingClientRect().exec((t=>{this.textWidth=t[0].width,e()}))}));e.push(o),Promise.all(e).then((()=>{this.animationDuration=this.textWidth/t.index.upx2px(this.speed)+"s",this.animationPlayState="paused",setTimeout((()=>{"play"==this.playState&&this.autoplay&&(this.animationPlayState="running")}),10)}))},click(t){this.$emit("click")},close(){this.$emit("close")},getMore(){this.$emit("getMore")}}};if(!Array){t.resolveComponent("u-icon")()}Math;const o=t._export_sfc(e,[["render",function(e,o,i,n,a,l){return t.e({a:i.show},i.show?t.e({b:i.volumeIcon},i.volumeIcon?{c:t.p({name:"volume-fill",size:i.volumeSize,color:l.computeColor})}:{},{d:t.t(a.showText),e:t.o(((...t)=>l.click&&l.click(...t))),f:t.s(l.textStyle),g:t.n("u-type-"+i.type),h:a.animationDuration,i:a.animationPlayState,j:i.moreIcon},i.moreIcon?{k:t.o(l.getMore),l:t.p({name:"arrow-right",size:26,color:l.computeColor})}:{},{m:i.closeIcon},i.closeIcon?{n:t.o(l.close),o:t.p({name:"close",size:24,color:l.computeColor})}:{},{p:l.computeBgColor,q:i.padding,r:t.n(i.type?`u-type-${i.type}-light-bg`:"")}):{})}],["__scopeId","data-v-ffca9182"]]);wx.createComponent(o);