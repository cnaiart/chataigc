function r(){return $request.get({url:"/qrcode/config"})}function o(e){return $request.post({url:"/qrcode/imagine",params:e,method:"POST"})}function t(e){return $request.post({url:"/qrcode_records/detail",params:e})}function c(e){return $request.get({url:"/qrcode_records/records",params:e})}function d(e){return $request.post({url:"/qrcode_records/delete",params:e,method:"POST"})}export{r as a,o as b,d as c,t as d,c as q};