import{cC as m}from"./entry.c7e0e7b4.js";function p(f,T){const r=m(()=>null,"$2BiYE6t5Ya"),a=m(()=>null,"$FEm0ZA02tU"),{time:d=2e3,totalTime:c,count:e,callback:s=()=>!1}=T??{};let l=null,t=null,n=0;const i=()=>{if(console.log("count2:",e),t&&t<=Date.now()){o(),s();return}if(e&&n>=e){o(),s();return}n++,l=setTimeout(()=>{f().then(u=>{r.value=u,i()}).catch(u=>{a.value=u})},d)},g=()=>{t=c?Date.now()+c:null,i()},o=()=>{setTimeout(()=>{clearTimeout(l),l=null,t=null,n=0},0)};return{start:g,end:o,error:a,result:r}}export{p as u};
