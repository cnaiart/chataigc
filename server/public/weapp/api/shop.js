"use strict";const e=require("../utils/client.js"),t=require("../utils/request/index.js");exports.addVisit=function(){return t.request.post({url:"/index/visit",data:{terminal:e.client}})},exports.getDecorate=function(e){return t.request.get({url:"/index/decorate",data:e},{ignoreCancel:!0})};