"use strict";const e=require("./alipay.js"),a=require("./balance.js"),n=require("./pay.js"),t=require("./wechat.js"),c=require("./e_wechat.js"),A=require("./e_alipay.js");var s=(e=>(e[e.BALANCE=1]="BALANCE",e[e.WECHAT=2]="WECHAT",e[e.ALIPAY=3]="ALIPAY",e[e.E_WECHAT=4]="E_WECHAT",e[e.E_ALIPAY=5]="E_ALIPAY",e))(s||{});const i=new t.Wechat;n.Pay.inject(s[2],i);const r=new a.Balance;n.Pay.inject(s[1],r);const y=new e.Alipay;n.Pay.inject(s[3],y);const E=new A.EAlipay;n.Pay.inject(s[5],E);const j=new c.EWechat;n.Pay.inject(s[4],j);const P=new n.Pay;exports.PayWayEnum=s,exports.pay=P;