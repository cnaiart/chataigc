"use strict";const t=require("../../../../common/vendor.js"),e={name:"u-slider",emits:["update:modelValue","input","start","moving","end"],props:{value:{type:[Number,String],default:0},modelValue:{type:[Number,String],default:0},disabled:{type:Boolean,default:!1},blockWidth:{type:[Number,String],default:30},min:{type:[Number,String],default:0},max:{type:[Number,String],default:100},step:{type:[Number,String],default:1},height:{type:[Number,String],default:6},activeColor:{type:String,default:"#2979ff"},inactiveColor:{type:String,default:"#c0c4cc"},blockColor:{type:String,default:"#ffffff"},blockStyle:{type:Object,default:()=>({})}},data:()=>({startX:0,status:"end",newValue:0,distanceX:0,startValue:0,barStyle:{},sliderRect:{left:0,width:0}}),watch:{valueCom(t){"end"==this.status&&this.updateValue(this.valueCom,!1)}},created(){this.updateValue(this.valueCom,!1)},mounted(){this.$uGetRect(".u-slider").then((t=>{this.sliderRect=t}))},computed:{valueCom(){return this.modelValue}},methods:{onTouchStart(t){if(this.disabled)return;this.startX=0;let e=t.touches[0];this.startX=e.clientX,this.startValue=this.format(this.valueCom),this.status="start"},onTouchMove(t){if(this.disabled)return;"start"==this.status&&this.$emit("start");let e=t.touches[0];this.distanceX=e.clientX-this.sliderRect.left,this.newValue=this.distanceX/this.sliderRect.width*100,this.status="moving",this.$emit("moving"),this.updateValue(this.newValue,!0)},onTouchEnd(){this.disabled||("moving"===this.status&&(this.updateValue(this.newValue,!1),this.$emit("end")),this.status="end")},updateValue(t,e){const i=this.format(t);if(i>this.max||i>100)return;let s={width:i+"%"};1==e?s.transition="none":delete s.transition,this.$emit("input",i),this.$emit("update:modelValue",i),this.barStyle=s},format(t){return Math.round(Math.max(this.min,Math.min(t,this.max))/this.step)*this.step},onClick(t){if(this.disabled)return;const e=(t.detail.x-this.sliderRect.left)/this.sliderRect.width*100;this.updateValue(e,!1)}}};const i=t._export_sfc(e,[["render",function(e,i,s,a,o,l){return t.e({a:e.$slots.default||e.$slots.$default},e.$slots.default||e.$slots.$default?{}:{b:t.s(s.blockStyle),c:t.s({height:s.blockWidth+"rpx",width:s.blockWidth+"rpx",backgroundColor:s.blockColor})},{d:t.o(((...t)=>l.onTouchStart&&l.onTouchStart(...t))),e:t.o(((...t)=>l.onTouchMove&&l.onTouchMove(...t))),f:t.o(((...t)=>l.onTouchEnd&&l.onTouchEnd(...t))),g:t.o(((...t)=>l.onTouchEnd&&l.onTouchEnd(...t))),h:t.s(o.barStyle),i:t.s({height:s.height+"rpx",backgroundColor:s.activeColor}),j:t.o(((...t)=>l.onClick&&l.onClick(...t))),k:t.n(s.disabled?"u-slider--disabled":""),l:s.inactiveColor})}],["__scopeId","data-v-5ff1d8b4"]]);wx.createComponent(i);