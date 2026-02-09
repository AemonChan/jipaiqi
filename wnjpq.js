var body = $response.body;
var obj = JSON.parse(body);

obj = {

  "dian" : 9999,
}


body = JSON.stringify(obj);
$done({body});

