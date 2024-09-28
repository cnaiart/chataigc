"use strict";const t=require("../../common/vendor.js"),i={name:"DragButton",props:{size:{type:Number,default:200},zIndex:{type:Number,default:999},xEdge:{type:Number,default:0},yEdge:{type:Number,default:50},autoDocking:{type:Boolean,default:!0}},data:()=>({top:500,left:300,width:0,height:0,moving:!0}),mounted(){this.init()},methods:{init(){const{windowWidth:i,windowHeight:e,windowTop:h}=t.index.getSystemInfoSync();this._windowWidth=i,this._windowHeight=e,h&&(this._windowHeight+=h);t.index.createSelectorQuery().in(this).select("#drag-button").boundingClientRect((t=>{if(!t)return;const{width:i,height:e}=t;this.width=i,this.height=e,this._offsetWidth=i/2,this._offsetHeight=e/2,this.left=this._windowWidth-this.width-this.xEdge,this.top=this._windowHeight-this.height-this.yEdge})).exec()},touchmove({touches:t}){if(1!==t.length)return!1;this.moving=!0;const{clientX:i,clientY:e}=t[0];this.left=i-this._offsetWidth;const h=e-this._offsetHeight;this.top=h},touchend(){if(this.autoDocking){const t=this._windowWidth-this.width-this.xEdge;this.left<this._windowWidth/2-this._offsetWidth?this.left=this.xEdge:this.left=t}const t=this._windowHeight-this.height-this.yEdge;this.top<50?this.top=50:this.top>t&&(this.top=t),this.moving=!1}}};const e=t._export_sfc(i,[["render",function(i,e,h,o,s,n){return{a:h.autoDocking&&!s.moving?1:"",b:`${s.left}px`,c:`${s.top}px`,d:`${h.size}rpx`,e:`${h.size}rpx`,f:h.zIndex,g:t.o(((...t)=>n.touchend&&n.touchend(...t))),h:t.o(((...t)=>n.touchmove&&n.touchmove(...t)))}}],["__scopeId","data-v-e035b828"]]);wx.createComponent(e);
