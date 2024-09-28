import{d as e,a as t,b as a,o as l,e as s,f as i,g as o,j as n,h as u,t as r,k as d,y as c,z as f,r as h,w as v,C as p,u as m,i as g,F as b,m as x,ay as y,ap as _,ax as w,n as k,R as C,Y as S,A as T,c as F,Z as I,aO as $,S as O,cx as z,b9 as j,b8 as X,aG as Y,K as B,b2 as N}from"./index-c4e9cb21.js";import{_ as R}from"./page-meta.0a6ed5a4.js";import{_ as H}from"./z-paging.0c0bd55f.js";import{_ as W,g as M,a as V}from"./icon_visit.7235669b.js";import{_ as U}from"./u-image.259ae993.js";import{_ as Z}from"./router-navigate.7694f14d.js";import{_ as G}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as A}from"./u-badge.4654495c.js";import{F as E}from"./floating-menu.33dda305.js";import"./u-icon.9d0b6bc8.js";const K=G(e({__name:"news-card",props:{item:{default:{}},newsId:{default:""}},setup:e=>(f,h)=>{const v=t(a("u-image"),U),p=d,m=c,g=t(a("router-navigate"),Z);return l(),s(g,{to:`/packages/pages/article_detail/article_detail?id=${e.newsId}`},{default:i((()=>[o(p,{class:"news-card flex bg-white px-[20rpx] py-[32rpx]"},{default:i((()=>[e.item.image?(l(),s(p,{key:0,class:"mr-[20rpx]"},{default:i((()=>[o(v,{src:e.item.image,width:"240",height:"180"},null,8,["src"])])),_:1})):n("v-if",!0),o(p,{class:"flex flex-col justify-between flex-1 news-card-content"},{default:i((()=>[o(p,{class:"text-lg font-medium news-card-content-title"},{default:i((()=>[u(r(e.item.title),1)])),_:1}),o(p,{class:"news-card-content-intro text-gray-400 text-sm mt-[16rpx]"},{default:i((()=>[u(r(e.item.desc),1)])),_:1}),o(p,{class:"text-muted text-xs w-full flex justify-between mt-[12rpx]"},{default:i((()=>[o(p,null,{default:i((()=>[u(r(e.item.create_time),1)])),_:1}),o(p,{class:"flex items-center"},{default:i((()=>[o(m,{src:W,class:"w-[30rpx] h-[30rpx]"}),o(p,{class:"ml-[10rpx]"},{default:i((()=>[u(r(e.item.click),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["to"])}}),[["__scopeId","data-v-43404489"]]),L=e({__name:"news-list",props:{cid:{default:0},i:null,index:null},setup(e){const o=e,n=f(null),u=h([]),r=h(!0);v((()=>o.index),(async()=>{var e;await y(),o.i==o.index&&r.value&&(r.value=!1,null==(e=n.value)||e.reload())}),{immediate:!0});const d=async(e,t)=>{try{const{lists:a}=await M({cid:o.cid,page_no:e,page_size:t});n.value.complete(a)}catch(a){console.log("报错=>",a),n.value.complete(!1)}};return p((()=>{var e;o.index!=o.i||m(r)||null==(e=n.value)||e.reload()})),(o,r)=>{const c=t(a("z-paging"),H);return l(),s(c,{"auto-show-back-to-top":"",auto:e.i==e.index,ref_key:"paging",ref:n,modelValue:u.value,"onUpdate:modelValue":r[0]||(r[0]=e=>u.value=e),"data-key":e.i,onQuery:d,fixed:!1,height:"100%","auto-clean-list-when-reload":!1,"auto-scroll-to-top-when-reload":!1},{default:i((()=>[(l(!0),g(b,null,x(u.value,((e,t)=>(l(),s(K,{key:t,item:e,newsId:e.id},null,8,["item","newsId"])))),128))])),_:1},8,["auto","modelValue","data-key"])}}});const Q=G({name:"u-sticky",emits:["fixed","unfixed"],props:{offsetTop:{type:[Number,String],default:0},index:{type:[Number,String],default:""},enable:{type:Boolean,default:!0},h5NavHeight:{type:[Number,String],default:44},bgColor:{type:String,default:"#ffffff"},zIndex:{type:[Number,String],default:""}},data(){return{fixed:!1,height:"auto",stickyTop:0,elClass:this.$u.guid(),left:0,width:"auto"}},watch:{offsetTop(e){this.initObserver()},enable(e){0==e?(this.fixed=!1,this.disconnectObserver("contentObserver")):this.initObserver()}},computed:{uZIndex(){return this.zIndex?this.zIndex:this.$u.zIndex.sticky}},mounted(){this.$nextTick((()=>{this.initObserver()}))},methods:{initObserver(){this.enable&&(this.stickyTop=0!=this.offsetTop?_(this.offsetTop)+this.h5NavHeight:this.h5NavHeight,this.disconnectObserver("contentObserver"),this.$uGetRect("."+this.elClass).then((e=>{this.height=e.height,this.left=e.left,this.width=e.width||"100%",this.$nextTick((()=>{this.observeContent()}))})))},observeContent(){this.disconnectObserver("contentObserver");const e=w(this,{thresholds:[.95,.98,1]});e.relativeToViewport({top:-this.stickyTop}),e.observe("."+this.elClass,(e=>{this.enable&&this.setFixed(e.boundingClientRect.top)})),this.contentObserver=e},setFixed(e){const t=e<this.stickyTop;t?this.$emit("fixed",this.index):this.fixed&&this.$emit("unfixed",this.index),this.fixed=t},disconnectObserver(e){const t=this[e];t&&t.disconnect()}},beforeUnmount(){this.disconnectObserver("contentObserver")}},[["render",function(e,t,a,n,u,r){const c=d;return l(),s(c,{class:""},{default:i((()=>[o(c,{class:k(["u-sticky-wrap",[u.elClass]]),style:C({height:u.fixed?u.height+"px":"auto",backgroundColor:a.bgColor})},{default:i((()=>[o(c,{class:"u-sticky",style:C({position:u.fixed?"fixed":"static",top:u.stickyTop+"px",left:u.left+"px",width:"string"==typeof u.width?u.width:u.width+"px",zIndex:r.uZIndex})},{default:i((()=>[S(e.$slots,"default",{},void 0,!0)])),_:3},8,["style"])])),_:3},8,["class","style"])])),_:3})}],["__scopeId","data-v-c0ceaa32"]]);const q=G(e({__name:"tabs",props:{isScroll:{type:Boolean,default:!0},current:{default:0},height:{default:80},fontSize:{default:28},duration:{default:.3},activeColor:{default:"#2073F4"},inactiveColor:{default:"#333"},barWidth:{default:40},barHeight:{default:4},gutter:{default:30},bgColor:{default:"#FFFFFF"},name:{default:"name"},count:{default:"count"},offset:{default:[5,20]},bold:{type:Boolean,default:!0},activeItemStyle:{default:{}},showBar:{type:Boolean,default:!0},barStyle:{default:{}},itemWidth:{default:"auto"},isFixed:{type:Boolean,default:!1},top:{default:0},stickyBgColor:{default:"#FFFFFF"},swipeable:{type:Boolean,default:!0}},emits:["change"],setup(e,{emit:c}){const f=e,{touch:p,resetTouchStatus:w,touchStart:Y,touchMove:B}=function(){const e=T({direction:"",deltaX:0,deltaY:0,offsetX:0,offsetY:0}),t=()=>{e.direction="",e.deltaX=0,e.deltaY=0,e.offsetX=0,e.offsetY=0};return{touch:e,resetTouchStatus:t,touchStart:a=>{t();const l=a.touches[0];e.startX=l.clientX,e.startY=l.clientY},touchMove:t=>{const a=t.touches[0];var l,s;e.deltaX=a.clientX-e.startX,e.deltaY=a.clientY-e.startY,e.offsetX=Math.abs(e.deltaX),e.offsetY=Math.abs(e.deltaY),e.direction=e.direction||((l=e.offsetX)>(s=e.offsetY)&&l>10?"horizontal":s>l&&s>10?"vertical":"")}}}(),N=h([]),R=h([]),H=h(0),W=h([]),M=h(0),V=h(0),U=h(0),Z=h("cu-tab"),G=h(f.current),E=h(!0),K=h(!1),L=X();v((()=>N.value),(async(e,t)=>{E.value||e.length===t.length||(G.value=0),await y(),P()})),v((()=>f.current),((e,t)=>{y((()=>{G.value=e,te()}))}),{immediate:!0});const q=F((()=>{const e={width:f.barWidth+"rpx",transform:`translate(${V.value}px, -100%)`,"transition-duration":`${E.value?0:f.duration}s`,"background-color":f.activeColor,height:f.barHeight+"rpx",opacity:E.value?0:1,"border-radius":f.barHeight/2+"px"};return Object.assign(e,f.barStyle),e})),D=F((()=>e=>{let t={height:f.height+"rpx","line-height":f.height+"rpx","font-size":f.fontSize+"rpx",padding:f.isScroll?`0 ${f.gutter}rpx`:"",flex:f.isScroll?"auto":"1",width:`${f.itemWidth}rpx`};return e==G.value&&f.bold&&(t.fontWeight="bold"),e==G.value?(t.color=f.activeColor,t=Object.assign(t,f.activeItemStyle)):t.color=f.inactiveColor,t})),J=()=>{N.value=R.value.map((e=>{const{name:t,dot:a,active:l,inited:s}=e.event,{updateRender:i}=e;return{name:t,dot:a,active:l,inited:s,updateRender:i}}))},P=async()=>{const e=await z("#"+Z.value,!1,L);U.value=e.left,M.value=e.width,ee()},ee=()=>{const e=j().in(L);for(let t=0;t<N.value.length;t++)e.select(`#tab-item-${t}`).fields({size:!0,rect:!0});e.exec((e=>{W.value=e,te()}))},te=()=>{const e=W.value[G.value];if(!e)return;const t=e.width,a=e.left-U.value-(M.value-t)/2;H.value=a<0?0:a;const l=e.left+e.width/2-U.value;V.value=l-_(f.barWidth)/2,1==E.value&&setTimeout((()=>{E.value=!1}),100),R.value.forEach(((e,t)=>{const a=t===G.value;a===e.event.active&&e.event.inited||e.updateRender(a)}))},ae=e=>{f.swipeable&&(K.value=!0,Y(e))},le=e=>{f.swipeable&&K.value&&B(e)},se=()=>{if(!f.swipeable||!K.value)return;if("horizontal"===p.direction&&p.offsetX>=50){let e,t=N.value.length,a=G.value;e=p.deltaX<=0?a>=t-1?0:a+1:a<=0?t-1:a-1,y((()=>{G.value=e,te()})),c("change",e)}K.value=!1};return I((()=>{J()})),$("handleChange",((e,t)=>{R.value.push({event:e,updateRender:t})})),$("updateTabs",J),(f,h)=>{const v=t(a("u-badge"),A),p=d,_=O,w=t(a("u-sticky"),Q);return l(),s(p,{class:"tabs"},{default:i((()=>[o(w,{enable:e.isFixed,"bg-color":e.stickyBgColor,"offset-top":e.top,"h5-nav-height":0},{default:i((()=>[o(p,{id:Z.value,style:C({background:e.bgColor})},{default:i((()=>[o(_,{style:C({height:e.height+"rpx"}),"scroll-x":"",class:"scroll-view","scroll-left":H.value,"scroll-with-animation":""},{default:i((()=>[o(p,{class:k(["scroll-box",{"tabs-scorll-flex":!e.isScroll}])},{default:i((()=>[(l(!0),g(b,null,x(N.value,((t,a)=>(l(),s(p,{class:"tab-item line1",id:"tab-item-"+a,key:a,onClick:e=>(e=>{e!=G.value&&(y((()=>{G.value=e,te()})),c("change",e))})(a),style:C([m(D)(a)])},{default:i((()=>[o(v,{count:t[e.count]||t.dot||0,offset:e.offset,size:"mini"},null,8,["count","offset"]),u(" "+r(t[e.name]||t.name),1)])),_:2},1032,["id","onClick","style"])))),128)),e.showBar?(l(),s(p,{key:0,class:"tab-bar",style:C([m(q)])},null,8,["style"])):n("v-if",!0)])),_:1},8,["class"])])),_:1},8,["style","scroll-left"])])),_:1},8,["id","style"])])),_:1},8,["enable","bg-color","offset-top"]),o(p,{class:"tab-content",onTouchstart:ae,onTouchmove:le,onTouchcancel:se,onTouchend:se},{default:i((()=>[n(' <view class="tab-track" :class="{\'tab-animated\': animated}" :style="[trackStyle]"> '),o(p,null,{default:i((()=>[S(f.$slots,"default",{},void 0,!0)])),_:3}),n(" </view> ")])),_:3})])),_:3})}}}),[["__scopeId","data-v-21e5ae41"]]),D=G(e({__name:"tab",props:{dot:{type:[Boolean,String],default:!1},name:{type:[Boolean,String],default:""},info:null},setup(e){const t=e,a=h(!1),o=h(!1),u=h(!1),r=h(void 0),c=Y("updateTabs"),f=Y("handleChange"),p=()=>{c&&c()},m=X();console.log(m),f(null==m?void 0:m.props,(e=>{r.value=r.value||e,a.value=e,u.value=r.value,o.value=e})),I((()=>{p()}));const g=F((()=>{const{dot:e,info:a}=t;return{dot:e,info:a}}));return v((()=>g.value),(()=>{p()})),v((()=>t.name),(e=>{p()})),(e,t)=>{const r=d;return l(),s(r,{class:k({active:a.value,inactive:!a.value,tab:!0}),style:C(o.value?"":"display: none;")},{default:i((()=>[u.value?S(e.$slots,"default",{key:0},void 0,!0):n("v-if",!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-18a9a9a6"]]),J=G(e({__name:"article_list",setup(e){const u=h([]),r=h(0),c=e=>{console.log(e),r.value=Number(e)};return B((e=>{(async()=>{const e=await V();u.value=[{name:"全部",id:""}].concat(e)})(),console.log(e),N({title:e.pageTitle})})),(e,f)=>{const h=t(a("page-meta"),R),v=d;return l(),g(b,null,[o(h,{"page-style":e.$theme.pageStyle},null,8,["page-style"]),o(v,{class:"news"},{default:i((()=>[n(" 内容 "),o(q,{current:r.value,onChange:c,height:"80","bar-width":"60",activeColor:e.$theme.primaryColor,barStyle:{bottom:"0"}},{default:i((()=>[(l(!0),g(b,null,x(u.value,((e,t)=>(l(),s(D,{key:t,name:e.name},{default:i((()=>[o(v,{class:"news-list pt-[20rpx]"},{default:i((()=>[o(L,{cid:e.id,i:t,index:r.value},null,8,["cid","i","index"])])),_:2},1024)])),_:2},1032,["name"])))),128))])),_:1},8,["current","activeColor"])])),_:1}),n("    悬浮菜单    "),o(E)],64)}}}),[["__scopeId","data-v-1f4b5698"]]);export{J as default};
