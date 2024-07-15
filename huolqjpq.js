var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "token" : "5c736fa2-e555-4e54-a023-13a11f5c6b9d",
  "userId" : 12351,
  "validBefore" : "2029-07-21T12:24:03.9350731+00:00"
}


body = JSON.stringify(obj);
$done({body});
