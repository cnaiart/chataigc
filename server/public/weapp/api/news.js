"use strict";const t=require("../utils/request/index.js");exports.getArticleCate=function(){return t.request.get({url:"/article/cate"})},exports.getArticleDetail=function(e){return t.request.get({url:"/article/detail",data:e})},exports.getArticleList=function(e){return t.request.get({url:"/article/lists",data:e})};
