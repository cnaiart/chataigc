import{a as R,m as _,a1 as Q,o as u,h as f,e as a,f as m,w as s,F as V,r as Z,u as e,z as x,t as v,ay as K,x as W,E as X,B as Y,c as A,p as G,l as J}from"./entry.c7e0e7b4.js";import{a as O,b as h,E as ee}from"./index.60eeba3d.js";import{E as oe}from"./index.ade63ee3.js";/* empty css                *//* empty css                    *//* empty css                  *//* empty css                     */import{_ as te}from"./generation-type.vue.cd4f86dd.js";import{_ as le}from"./generation-mode.vue.73e6a5db.js";import{_ as S}from"./qrcode-display.vue.1243562d.js";import me from"./mewx-template.5d37ba66.js";import ae from"./zhishuyun-template.d68f76d3.js";import ne from"./pixel-style-type.4d426517.js";import I from"./custom-keyword.45de2fa1.js";import de from"./custom-model-picker.76eaaf54.js";import{_ as re}from"./custom-version-picker.vue.48b8b7a4.js";import L from"./custom-picture-size.d8443c4d.js";import M from"./custom-code-type.7749b395.js";import{QrcodeModeEnum as $}from"./qrcodeEnums.e7d40609.js";import{L as se}from"./index.4612bf49.js";import{_ as pe}from"./_plugin-vue_export-helper.c27b6911.js";import"./index.aad710b7.js";import"./dropdown.ee5c9419.js";import"./refs.94480413.js";import"./upload.43c3630c.js";import"./index.0b9306dd.js";import"./debounce.2af106a8.js";/* empty css                        */import"./index.fa4f9017.js";import"./index.cb3770be.js";import"./index.db4520c0.js";import"./index.5c4c12e6.js";import"./cloneDeep.c5be0cf1.js";import"./_baseClone.69bec34e.js";import"./_getTag.b4ecd864.js";import"./isEqual.5a66db24.js";import"./index.222a6e13.js";/* empty css                  */import"./index.5d92a97b.js";import"./el-tooltip.4ed993c7.js";import"./index.ba068d27.js";import"./index.cd5f7601.js";import"./strings.d42ea6f6.js";/* empty css                  *//* empty css               */const g=c=>(G("data-v-f1aeb647"),c=c(),J(),c),ie={class:"left-side flex flex-col justify-between"},ue={style:{"border-bottom":"1px solid #e5e5e5"},class:"flex justify-between items-center text-xl text-[#101010] font-medium mx-[15px] pb-[12px]"},_e=g(()=>a("span",null,"艺术二维码",-1)),fe={class:"text-black font-normal"},xe={class:"left-side__main px-[15px] pb-[20px]"},Ve=g(()=>a("h3",{class:"text-base font-bold mt-[12px]"},[a("span",null,"生成内容"),a("span",{class:"text-error"},"*")],-1)),ce=g(()=>a("h3",{class:"text-base font-bold mt-[12px]"},[a("span",null,"生成关键词"),a("span",{class:"text-error"},"*")],-1)),we={class:"left-side__footer text-center px-[15px]"},ye={class:"p-[10px] flex justify-center items-center"},be={class:"text-[#999999]"},ve={class:"text-primary"},ge=R({__name:"index",setup(c){const n=_("config"),t=_("qrcodeForm"),d=_("promptParams"),w=_("consumptionCount"),q=_("isReceiving"),B=_("drawingHandler"),P=Q(()=>{var o,p;const r=n.draw_model.findIndex(y=>y.model===t.model);return r==-1?"找不到模型":(w.value=(o=n.draw_model[r])==null?void 0:o.balance,(p=n.draw_model[r])==null?void 0:p.name)}),T=r=>{t.model=r,t.template_id="",t.model===$.ZHISHUYUN&&(t.type=1)},z=r=>{let o="";for(const p in r)r[p]!==""&&(o+=`--${p} ${r[p]} `);return o.trim()},D=()=>{t.prompt_params=z(d),B({params:t,isClear:!0})};return(r,o)=>{const p=X,y=ee,N=O,j=h,F=oe,H=Y;return u(),f("div",ie,[a("div",ue,[_e,m(j,{onCommand:T},{dropdown:s(()=>[m(N,null,{default:s(()=>[(u(!0),f(V,null,Z(e(n).draw_model,i=>(u(),A(y,{key:i.model,command:i.model},{default:s(()=>[x(v(i.name),1)]),_:2},1032,["command"]))),128))]),_:1})]),default:s(()=>[a("span",fe,[x(v(e(P))+" ",1),m(p,{class:"el-icon--right"},{default:s(()=>[m(e(K))]),_:1})])]),_:1})]),m(F,{class:"flex-1 min-h-0"},{default:s(()=>{var i,U,C,k;return[a("div",xe,[e(t).model===e($).MEWX?(u(),f(V,{key:0},[m(te,{modelValue:e(t),"onUpdate:modelValue":o[0]||(o[0]=l=>W(t)?t.value=l:null)},null,8,["modelValue"]),m(le,{modelValue:e(t).way,"onUpdate:modelValue":o[9]||(o[9]=l=>e(t).way=l)},{mode:s(()=>{var l,E;return[m(S,{modelValue:e(d).iw,"onUpdate:modelValue":o[1]||(o[1]=b=>e(d).iw=b)},null,8,["modelValue"]),m(me,{modelValue:e(t).template_id,"onUpdate:modelValue":o[2]||(o[2]=b=>e(t).template_id=b),template:(E=(l=e(n))==null?void 0:l.mewx)==null?void 0:E.template},null,8,["modelValue","template"])]}),custom:s(()=>[m(I,{modelValue:e(t).prompt,"onUpdate:modelValue":o[3]||(o[3]=l=>e(t).prompt=l),example:e(n).example},null,8,["modelValue","example"]),m(S,{modelValue:e(d).iw,"onUpdate:modelValue":o[4]||(o[4]=l=>e(d).iw=l)},null,8,["modelValue"]),m(de,{modelValue:e(t).model_id,"onUpdate:modelValue":o[5]||(o[5]=l=>e(t).model_id=l),modelList:e(n).mewx.model},null,8,["modelValue","modelList"]),m(re,{modelValue:e(d).v,"onUpdate:modelValue":o[6]||(o[6]=l=>e(d).v=l),versionList:e(n).mewx.version},null,8,["modelValue","versionList"]),m(L,{modelValue:e(d).ar,"onUpdate:modelValue":o[7]||(o[7]=l=>e(d).ar=l)},null,8,["modelValue"]),m(M,{modelValue:e(d).shape,"onUpdate:modelValue":o[8]||(o[8]=l=>e(d).shape=l)},null,8,["modelValue"])]),_:1},8,["modelValue"])],64)):(u(),f(V,{key:1},[Ve,m(se,{class:"mt-[10px]",modelValue:e(t).qr_content,"onUpdate:modelValue":o[10]||(o[10]=l=>e(t).qr_content=l),maxlength:"100",rows:4,placeholder:"请输入二维码内容, 文本或链接"},null,8,["modelValue"]),ce,m(I,{modelValue:e(t).prompt,"onUpdate:modelValue":o[11]||(o[11]=l=>e(t).prompt=l),example:e(n).example},null,8,["modelValue","example"]),m(L,{modelValue:e(t).aspect_ratio,"onUpdate:modelValue":o[12]||(o[12]=l=>e(t).aspect_ratio=l)},null,8,["modelValue"]),m(ne,{modelValue:e(t).pixel_style,"onUpdate:modelValue":o[13]||(o[13]=l=>e(t).pixel_style=l),template:(U=(i=e(n))==null?void 0:i.zhishuyun_qrcode)==null?void 0:U.pixel_style},null,8,["modelValue","template"]),m(M,{modelValue:e(t).marker_shape,"onUpdate:modelValue":o[14]||(o[14]=l=>e(t).marker_shape=l)},null,8,["modelValue"]),m(ae,{modelValue:e(t).template_id,"onUpdate:modelValue":o[15]||(o[15]=l=>e(t).template_id=l),way:e(t).way,"onUpdate:way":o[16]||(o[16]=l=>e(t).way=l),template:(k=(C=e(n))==null?void 0:C.zhishuyun_qrcode)==null?void 0:k.template},null,8,["modelValue","way","template"])],64))])]}),_:1}),a("div",we,[a("div",ye,[a("div",be,[e(w)?(u(),f(V,{key:0},[x(" 消耗 "),a("span",ve,v(e(w)||0),1),x(" 条绘画条数 ")],64)):(u(),f(V,{key:1},[x(" 会员免费 ")],64))])]),m(H,{size:"large",type:"default",class:"w-full submit-btn !text-btn-text",loading:e(q),onClick:o[17]||(o[17]=i=>D())},{default:s(()=>[x(" 立即生成 ")]),_:1},8,["loading"])])])}}});const xo=pe(ge,[["__scopeId","data-v-f1aeb647"]]);export{xo as default};
