"use strict";const t=require("../../../../common/vendor.js"),i={name:"u-waterfall",emits:["update:modelValue","input"],props:{value:{type:Array,default:function(){return[]}},modelValue:{type:Array,default:function(){return[]}},addTime:{type:[Number,String],default:200},idKey:{type:String,default:"id"}},data:()=>({leftList:[],rightList:[],tempList:[],children:[]}),watch:{copyFlowList(t,i){let e=Array.isArray(i)&&i.length>0?i.length:0;this.tempList=this.tempList.concat(this.cloneData(t.slice(e))),this.splitData()}},mounted(){this.tempList=this.cloneData(this.copyFlowList),this.splitData()},computed:{valueCom(){return this.modelValue},copyFlowList(){return this.cloneData(this.valueCom)}},methods:{async splitData(){if(!this.tempList.length)return;let t=await this.$uGetRect("#u-left-column"),i=await this.$uGetRect("#u-right-column"),e=this.tempList[0];e&&(t.height<i.height?this.leftList.push(e):t.height>i.height?this.rightList.push(e):this.leftList.length<=this.rightList.length?this.leftList.push(e):this.rightList.push(e),this.tempList.splice(0,1),this.tempList.length&&setTimeout((()=>{this.splitData()}),this.addTime))},cloneData:t=>JSON.parse(JSON.stringify(t)),clear(){this.leftList=[],this.rightList=[],this.$emit("input",[]),this.$emit("update:modelValue",[]),this.tempList=[]},remove(t){let i=-1;i=this.leftList.findIndex((i=>i[this.idKey]==t)),-1!=i?this.leftList.splice(i,1):(i=this.rightList.findIndex((i=>i[this.idKey]==t)),-1!=i&&this.rightList.splice(i,1)),i=this.value.findIndex((i=>i[this.idKey]==t)),-1!=i&&(this.$emit("input",this.valueCom.splice(i,1)),this.$emit("update:modelValue",this.valueCom.splice(i,1)))},modify(t,i,e){let s=-1;if(s=this.leftList.findIndex((i=>i[this.idKey]==t)),-1!=s?this.leftList[s][i]=e:(s=this.rightList.findIndex((i=>i[this.idKey]==t)),-1!=s&&(this.rightList[s][i]=e)),s=this.valueCom.findIndex((i=>i[this.idKey]==t)),-1!=s){let t=this.cloneData(this.valueCom);t[s][i]=e,this.$emit("input",t),this.$emit("update:modelValue",t)}}}};const e=t._export_sfc(i,[["render",function(i,e,s,h,l,a){return{a:t.r("left",{leftList:l.leftList}),b:t.r("right",{rightList:l.rightList})}}],["__scopeId","data-v-947d8ea5"]]);wx.createComponent(e);
