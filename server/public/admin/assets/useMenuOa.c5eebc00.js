import{f as A}from"./index.0aa35fa2.js";import{a as F,b as m,c as D}from"./wx_oa.faafad61.js";import{s as p,r as i,_ as E}from"./@vue.581f5ce0.js";const l=p(),a=i([]),r=i(0),y=({menuLength:n}={})=>E({name:[{required:!0,message:"\u5FC5\u586B\u9879\u4E0D\u80FD\u4E3A\u7A7A",trigger:["blur","change"]},{trigger:["blur","change"],validator(g,o,t,h,b){const c=new TextEncoder().encode(o);n!==void 0&&c.length>n?t(new Error("\u957F\u5EA6\u8D85\u51FA\u9650\u5236")):t()}}],menuType:[{required:!0,message:"\u5FC5\u586B\u9879\u4E0D\u80FD\u4E3A\u7A7A",trigger:["blur","change"]}],visitType:[{required:!0,message:"\u5FC5\u586B\u9879\u4E0D\u80FD\u4E3A\u7A7A",trigger:["blur","change"]}],url:[{required:!0,message:"\u5FC5\u586B\u9879\u4E0D\u80FD\u4E3A\u7A7A",trigger:["blur","change"]},{pattern:/(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/,message:"\u8BF7\u8F93\u5165\u5408\u6CD5\u7684\u7F51\u5740\u94FE\u63A5",trigger:["blur","change"]}],appId:[{required:!0,message:"\u5FC5\u586B\u9879\u4E0D\u80FD\u4E3A\u7A7A",trigger:["blur","change"]}],pagePath:[{required:!0,message:"\u5FC5\u586B\u9879\u4E0D\u80FD\u4E3A\u7A7A",trigger:["blur","change"]}]}),B=n=>(n&&(l.value=n),{menuList:a,menuIndex:r,handleAddMenu:()=>{a.value.push({name:"\u83DC\u5355\u540D\u79F0",has_menu:!1,type:"view",url:"",appid:"",pagepath:"",sub_button:[]})},handleAddSubMenu:e=>{const u=r.value;if(a.value[u].sub_button.length>=5){A.msgError("\u5DF2\u6DFB\u52A0\u4E0A\u9650\uFF5E");return}a.value[u].sub_button.push(e)},handleEditSubMenu:(e,u)=>{const s=r.value;a.value[s].sub_button[u]=e},handleDelMenu:e=>{e!=0&&r.value--,a.value.splice(e,1)},handleDelSubMenu:(e,u)=>{a.value[e].sub_button.splice(u,1)},getOaMenuFunc:async()=>{try{a.value=await F()}catch(e){console.log("\u83B7\u53D6\u83DC\u5355=>",e)}},handleSave:async()=>{const e=l.value.value;for(let u=0;u<e.length;u++)try{await e[u].menuFormRef.validate()}catch{r.value=u;return}await m(a.value)},handlePublish:async()=>{const e=l.value.value;for(let u=0;u<e.length;u++)try{await e[u].menuFormRef.validate()}catch{r.value=u;return}await D(a.value)}});export{y as g,B as u};
