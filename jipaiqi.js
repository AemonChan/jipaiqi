var body = $response.body;
var obj = JSON.parse(body);

obj = {
   "account" : "19329136299",
  "appUrl" : null,
  "kefuWx" : "wn5205208",
  "level" : "4",
  "statu" : 1,
  "message" : "tokenÈÏÖ¤³É¹¦",
  "appIsAvai" : 1,
  "endTimeStr" : null,
  "iosEndTimeStr" : "2025-09-29 10:30:33.0",
  "androidEndTimeStr" : null,
  "token" : null
}


body = JSON.stringify(obj);
$done({body});
