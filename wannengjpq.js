var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "priceStr" : "18;88;263",
  "maxver" : "230",
  "notice" : "感谢您使用万能记牌器，有任何问题请咨询微信客服。仅供娱乐，禁止赌博。",
  "minver" : "254",
  "taobaourl" : "http://www.baidu.com",
  "tuiCode" : "666",
  "weixin" : "有问题加微信:xf180797",
  "code" : "1284b162-41ee2abd",
  "homeurl" : "http://x.0797game.com/?id=6",
  "downurl" : "http://x.0797game.com/new330.apk",
  "nowTime" : 1717465025,
  "dian" : 1000,
}


body = JSON.stringify(obj);
$done({body});
