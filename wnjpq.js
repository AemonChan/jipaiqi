var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "nowTime" : "1717219423000",
  "dian" : 9999,
}


body = JSON.stringify(obj);
$done({body});

