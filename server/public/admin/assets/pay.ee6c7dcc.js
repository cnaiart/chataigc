import{r as n}from"./index.0aa35fa2.js";function e(){return n.get({url:"/setting.pay.pay_way/getPayWay"})}function g(t){return n.post({url:"/setting.pay.pay_way/setPayWay",params:t})}function i(){return n.get({url:"/setting.pay.pay_config/lists"})}function s(t){return n.post({url:"/setting.pay.pay_config/setConfig",params:t})}function o(t){return n.get({url:"/setting.pay.pay_config/getConfig",params:t})}function y(){return n.get({url:"/setting.pay.PayConfig/getIosPayConfig"})}function r(t){return n.post({url:"/setting.pay.PayConfig/setIosPayConfig",data:t})}function f(){return n.get({url:"/setting.pay.pay_config/getEpayConfig"})}function u(t){return n.post({url:"/setting.pay.pay_config/setEpayConfig",data:t})}export{i as a,f as b,u as c,e as d,g as e,y as f,o as g,r as h,s};