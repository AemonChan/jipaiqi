let body = $response.body;
if (!body) $done({});          // 提前 return，少一层嵌套

try {
  let obj = JSON.parse(body);
  Object.assign(obj, {         // 字段集中，改起来一目了然
    statu: 1,
    level: "4",
    appIsAvai: 1,
    iosEndTimeStr: "2099-12-31 22:00:00",
    message: "VIP认证成功"
  });
  $done({ body: JSON.stringify(obj) });
} catch (e) {
  $done({});                   // 解析失败原样放行，绝不中断请求
}
