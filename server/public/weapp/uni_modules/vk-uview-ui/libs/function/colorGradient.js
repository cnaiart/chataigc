"use strict";function t(t,e=!0){if((t=t.toLowerCase())&&/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(t)){if(4===t.length){let e="#";for(let r=1;r<4;r+=1)e+=t.slice(r,r+1).concat(t.slice(r,r+1));t=e}let r=[];for(let e=1;e<7;e+=2)r.push(parseInt("0x"+t.slice(e,e+2)));return e?`rgb(${r[0]},${r[1]},${r[2]})`:r}if(/^(rgb|RGB)/.test(t)){return t.replace(/(?:\(|\)|rgb|RGB)*/g,"").split(",").map((t=>Number(t)))}return t}function e(t){let e=t;if(/^(rgb|RGB)/.test(e)){let t=e.replace(/(?:\(|\)|rgb|RGB)*/g,"").split(","),r="#";for(let e=0;e<t.length;e++){let l=Number(t[e]).toString(16);l=1==String(l).length?"0"+l:l,"0"===l&&(l+=l),r+=l}return 7!==r.length&&(r=e),r}if(!/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(e))return e;{let t=e.replace(/#/,"").split("");if(6===t.length)return e;if(3===t.length){let e="#";for(let r=0;r<t.length;r+=1)e+=t[r]+t[r];return e}}}const r={colorGradient:function(r="rgb(0, 0, 0)",l="rgb(255, 255, 255)",n=10){let o=t(r,!1),f=o[0],i=o[1],a=o[2],s=t(l,!1),g=(s[0]-f)/n,u=(s[1]-i)/n,c=(s[2]-a)/n,h=[];for(let t=0;t<n;t++){let r=e("rgb("+Math.round(g*t+f)+","+Math.round(u*t+i)+","+Math.round(c*t+a)+")");h.push(r)}return h},hexToRgb:t,rgbToHex:e,colorToRgba:function(t,r=.3){let l=(t=e(t)).toLowerCase();if(l&&/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(l)){if(4===l.length){var n="#";for(let t=1;t<4;t+=1)n+=l.slice(t,t+1).concat(l.slice(t,t+1));l=n}var o=[];for(let t=1;t<7;t+=2)o.push(parseInt("0x"+l.slice(t,t+2)));return"rgba("+o.join(",")+","+r+")"}return l}};exports.colorGradient=r;
