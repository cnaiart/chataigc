import{a as e,b as t,o as l,e as s,f as o,R as a,g as i,h as u,t as n,j as p,i as r,F as d,m as c,v as m,n as f,J as h,k as b}from"./index-c4e9cb21.js";import{_ as y}from"./u-popup.550d714f.js";import{_ as x}from"./_plugin-vue_export-helper.1b428a4d.js";const k=x({name:"u-action-sheet",emits:["update:modelValue","input","click","close"],props:{value:{type:Boolean,default:!1},modelValue:{type:Boolean,default:!1},maskCloseAble:{type:Boolean,default:!0},list:{type:Array,default:()=>[]},tips:{type:Object,default:()=>({text:"",color:"",fontSize:"26"})},cancelBtn:{type:Boolean,default:!0},safeAreaInsetBottom:{type:Boolean,default:!1},borderRadius:{type:[String,Number],default:0},zIndex:{type:[String,Number],default:0},cancelText:{type:String,default:"取消"},labelName:{type:String,default:"text"},blur:{type:[Number,String],default:0}},computed:{valueCom(){return this.modelValue},tipsStyle(){let e={};return this.tips.color&&(e.color=this.tips.color),this.tips.fontSize&&(e.fontSize=this.tips.fontSize+"rpx"),e},itemStyle(){return e=>{let t={};return this.list[e].color&&(t.color=this.list[e].color),this.list[e].fontSize&&(t.fontSize=this.list[e].fontSize+"rpx"),this.list[e].disabled&&(t.color="#c0c4cc"),t}},uZIndex(){return this.zIndex?this.zIndex:this.$u.zIndex.popup}},data:()=>({popupValue:!1}),watch:{valueCom(e,t){this.popupValue=e}},methods:{close(){this.popupClose(),this.$emit("close")},popupClose(){this.$emit("input",!1),this.$emit("update:modelValue",!1)},itemClick(e){this.list[e].disabled||(this.$emit("click",e),this.$emit("input",!1),this.$emit("update:modelValue",!1))}}},[["render",function(x,k,v,C,S,_){const z=h,B=b,V=e(t("u-popup"),y);return l(),s(V,{blur:v.blur,mode:"bottom","border-radius":v.borderRadius,popup:!1,modelValue:S.popupValue,"onUpdate:modelValue":k[2]||(k[2]=e=>S.popupValue=e),maskCloseAble:v.maskCloseAble,length:"auto",safeAreaInsetBottom:v.safeAreaInsetBottom,onClose:_.popupClose,"z-index":_.uZIndex},{default:o((()=>[v.tips.text?(l(),s(B,{key:0,class:"u-tips u-border-bottom",style:a([_.tipsStyle])},{default:o((()=>[i(z,null,{default:o((()=>[u(n(v.tips.text),1)])),_:1})])),_:1},8,["style"])):p("v-if",!0),(l(!0),r(d,null,c(v.list,((e,t)=>(l(),s(B,{key:t,onTouchmove:k[0]||(k[0]=m((()=>{}),["stop","prevent"])),onClick:e=>_.itemClick(t),style:a([_.itemStyle(t)]),class:f(["u-action-sheet-item u-line-1",[t<v.list.length-1?"u-border-bottom":""]]),"hover-stay-time":150},{default:o((()=>[i(z,null,{default:o((()=>[u(n(e[v.labelName]),1)])),_:2},1024),e.subText?(l(),s(z,{key:0,class:"u-action-sheet-item__subtext u-line-1"},{default:o((()=>[u(n(e.subText),1)])),_:2},1024)):p("v-if",!0)])),_:2},1032,["onClick","style","class"])))),128)),v.cancelBtn?(l(),s(B,{key:1,class:"u-gab"})):p("v-if",!0),v.cancelBtn?(l(),s(B,{key:2,onTouchmove:k[1]||(k[1]=m((()=>{}),["stop","prevent"])),class:"u-actionsheet-cancel u-action-sheet-item","hover-class":"u-hover-class","hover-stay-time":150,onClick:_.close},{default:o((()=>[u(n(v.cancelText),1)])),_:1},8,["onClick"])):p("v-if",!0)])),_:1},8,["blur","border-radius","modelValue","maskCloseAble","safeAreaInsetBottom","onClose","z-index"])}],["__scopeId","data-v-5831dcf0"]]);export{k as _};