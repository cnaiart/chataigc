import{ca as t,ae as e,ap as a,a as i,b as o,o as s,e as l,f as n,g as r,n as u,R as c,i as h,F as d,m as p,v as f,j as g,h as b,t as m,k as _,J as y,d as v,l as C,aa as B,M as k,c as P,w,aA as x,aB as T,u as S,cb as U,L as I}from"./index-c4e9cb21.js";import{_ as $}from"./u-icon.9d0b6bc8.js";import{_ as L}from"./u-badge.4654495c.js";import{_ as z}from"./_plugin-vue_export-helper.1b428a4d.js";const N=z({emits:["update:modelValue","input","change"],props:{value:{type:[String,Number],default:0},modelValue:{type:[String,Number],default:0},show:{type:Boolean,default:!0},bgColor:{type:String,default:"#ffffff"},height:{type:Number,default:100},iconSize:{type:[String,Number],default:40},midButtonSize:{type:[String,Number],default:90},activeColor:{type:String,default:"#303133"},inactiveColor:{type:String,default:"#606266"},midButton:{type:Boolean,default:!1},list:{type:Array,default:()=>[]},beforeSwitch:{type:Function,default:null},borderTop:{type:Boolean,default:!0},hideTabBar:{type:Boolean,default:!0}},data:()=>({midButtonLeft:"50%",pageUrl:""}),created(){this.hideTabBar&&t();let a=e();this.pageUrl=a[a.length-1].route},computed:{valueCom(){return this.modelValue},elIconPath(){return t=>{let e=this.list[t].pagePath;return e?e==this.pageUrl||e=="/"+this.pageUrl?this.list[t].selectedIconPath:this.list[t].iconPath:t==this.valueCom?this.list[t].selectedIconPath:this.list[t].iconPath}},elColor(){return t=>{let e=this.list[t].pagePath;return e?e==this.pageUrl||e=="/"+this.pageUrl?this.activeColor:this.inactiveColor:t==this.valueCom?this.activeColor:this.inactiveColor}},getPlaceHeight(){return`${a(this.height+(this.midButton?48:0))}px`}},mounted(){this.midButton&&this.getMidButtonLeft()},methods:{async clickHandler(t){if(this.beforeSwitch&&"function"==typeof this.beforeSwitch){let e=this.beforeSwitch.bind(this.$u.$parent.call(this))(t);e&&"function"==typeof e.then?await e.then((e=>{this.switchTab(t)})).catch((t=>{})):!0===e&&this.switchTab(t)}else this.switchTab(t)},switchTab(t){let e=this.list[t].pagePath;if(e){if(e==this.pageUrl||e=="/"+this.pageUrl)return;this.$emit("change",t)}else this.$emit("change",t),this.$emit("input",t),this.$emit("update:modelValue",t)},getOffsetRight:(t,e)=>e?-20:t>9?-40:-30,getMidButtonLeft(){let t=this.$u.sys().windowWidth;this.midButtonLeft=t/2+"px"}}},[["render",function(t,e,a,v,C,B){const k=i(o("u-icon"),$),P=i(o("u-badge"),L),w=_,x=y;return a.show?(s(),l(w,{key:0,class:"u-tabbar",onTouchmove:e[0]||(e[0]=f((()=>{}),["stop","prevent"]))},{default:n((()=>[r(w,{class:u(["u-tabbar__content safe-area-inset-bottom",{"u-border-top":a.borderTop}]),style:c({height:t.$u.addUnit(a.height),backgroundColor:a.bgColor})},{default:n((()=>[(s(!0),h(d,null,p(a.list,((t,e)=>(s(),l(w,{class:u(["u-tabbar__content__item",{"u-tabbar__content__circle":a.midButton&&t.midButton}]),key:e,onClick:f((t=>B.clickHandler(e)),["stop"]),style:c({backgroundColor:a.bgColor})},{default:n((()=>[r(w,{class:u([a.midButton&&t.midButton?"u-tabbar__content__circle__button":"u-tabbar__content__item__button"])},{default:n((()=>[r(k,{size:a.midButton&&t.midButton?a.midButtonSize:a.iconSize,name:B.elIconPath(e),"img-mode":"scaleToFill",color:B.elColor(e),"custom-prefix":t.customIcon?"custom-icon":"uicon"},null,8,["size","name","color","custom-prefix"]),t.count?(s(),l(P,{key:0,count:t.count,"is-dot":t.isDot,offset:[-2,B.getOffsetRight(t.count,t.isDot)]},null,8,["count","is-dot","offset"])):g("v-if",!0)])),_:2},1032,["class"]),r(w,{class:"u-tabbar__content__item__text",style:c({color:B.elColor(e)})},{default:n((()=>[r(x,{class:"u-line-1"},{default:n((()=>[b(m(t.text),1)])),_:2},1024)])),_:2},1032,["style"])])),_:2},1032,["class","onClick","style"])))),128)),a.midButton?(s(),l(w,{key:0,class:u(["u-tabbar__content__circle__border",{"u-border":a.borderTop}]),style:c({backgroundColor:a.bgColor,left:C.midButtonLeft})},null,8,["class","style"])):g("v-if",!0)])),_:1},8,["style","class"]),g(" 这里加上一个48rpx的高度,是为了增高有凸起按钮时的防塌陷高度(也即按钮凸出来部分的高度) "),r(w,{class:"u-fixed-placeholder safe-area-inset-bottom",style:c({height:B.getPlaceHeight})},null,8,["style"])])),_:1})):g("v-if",!0)}],["__scopeId","data-v-4d8c2029"]]),j=v({__name:"tabbar",setup(t){const e=C(),a=B(),n=k(),r=P((()=>{var t,a,i;return(null==(i=null==(a=null==(t=e.getTabbarConfig)?void 0:t.list)?void 0:a.filter((t=>"1"==t.is_show)))?void 0:i.map((t=>({iconPath:e.getImageUrl(t.unselected),selectedIconPath:e.getImageUrl(t.selected),text:t.name,link:t.link,pagePath:t.link.path}))))||[]})),u=["/pages/index/index","/pages/ai_creation/ai_creation","/pages/skills/skills","/pages/app/app","/pages/user/user"],c=()=>{const t=r.value.findIndex((t=>t.pagePath===a.path));return"/"==a.path?0:t},h=P((()=>c()>=0)),d=P((()=>{var t,a,i,o;return{activeColor:null==(a=null==(t=e.getTabbarConfig)?void 0:t.style)?void 0:a.selected_color,inactiveColor:null==(o=null==(i=e.getTabbarConfig)?void 0:i.style)?void 0:o.default_color}})),p=t=>{const e=r.value[t],a=u.includes(e.pagePath)?"switchTab":"reLaunch";I(e.link,!1,a)};return w(r,(t=>{const e=c();if(e>=0&&t.length){const a=t[e];n.add({path:a.pagePath,title:a.text}),n.setTitle()}}),{immediate:!0}),(t,e)=>{const a=i(o("u-tabbar"),N);return x((s(),l(a,U(S(d),{list:S(r),onChange:p,"hide-tab-bar":!0}),null,16,["list"])),[[T,S(h)]])}}});export{j as _};
