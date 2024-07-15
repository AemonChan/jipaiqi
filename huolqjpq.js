var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "validBefore": "2029-07-14T13:23:09.224823+00:00",
  "sign": "ZmY0OWRjZDFkOTQ1NGY5YmJhZTA1NzAwNDcxYzJiNTc=.MzA1MTE5OTY=.xME6KDAUyWYHH1A96+0jAuRT68oCWBZpCATuN9SDpRvNYbf3pU8vQCpn+KPeN6qMX9WNNys3tq/hWlbHM/P4BkIsXnca0PGegjZWh4PR67uAB97LHnvrGZX94Tk1vJwbfvnYSqceEXa4ThsH0iktmAGFnXm73AjzVg0YhMo+vNkE/bdMVk8qvIxuKD+PQbrTllM4HNvSzLff88a3i3+SyJhl+hM+vm5tkq58+cC0BvC3boMYSktP53fuCruPQeX8kMYG2ZKZCfz5QMRLiTBSFe3U3L1GU01lewyD+zZAAs/w7ohIJNVvQFJmYZpFix9HwnSYa4koXGtjvsCUj4wGXQ=="
}


body = JSON.stringify(obj);
$done({body});
