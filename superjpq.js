var body = $response.body;
var obj = JSON.parse(body);

obj = {
"state": 1
}


body = JSON.stringify(obj);
$done({body});
