var body = $response.body;
var obj = JSON.parse(body);

obj = {
   "account" : "13306663405",
  "appUrl" : null,
  "kefuWx" : "wn5205208",
  "level" : "4",
  "statu" : 1,
  "message" : "token认证成功",
  "appIsAvai" : 1,
  "endTimeStr" : null,
  "iosEndTimeStr" : "2024-06-29 10:30:33.0",
  "androidEndTimeStr" : null,
  "token" : null
}


body = JSON.stringify(obj);
$done({body});