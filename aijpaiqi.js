var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "message" : "ok",
  "data" : {
    "memberLevel" : 4,
    "registerChannel" : "AppStore",
    "memberLevelName" : null,
    "link" : null,
    "auroraId" : null,
    "birthDay" : null,
    "sex" : 1,
    "momentPublic" : false,
    "member" : false,
    "birthPlaceId" : null,
    "appleName" : null,
    "cid" : null,
    "birthPlaceName" : null,
    "uid" : "U1770531759231",
    "phone" : "18957888896",
    "avatar" : null,
    "userName" : "U1770531759231",
    "createTime" : "2026-02-08T14:22:39.000+08:00",
    "weChatName" : null,
    "expireTime" : "2066-02-08T14:22:39.000+08:00"
  },
  "code" : 200
}


body = JSON.stringify(obj);
$done({body});
