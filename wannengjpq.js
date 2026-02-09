// 获取原始响应体
let body = $response.body;

if (body) {
    let obj = JSON.parse(body);

    // 修改关键字段
    obj.statu = 1; 
    obj.level = "4";
    obj.appIsAvai = 1; // 从 0 改为 1，确保功能可用
    obj.iosEndTimeStr = "2099-09-29 10:30:33"; // 保持格式一致，去掉末尾多余的 .0 试试
    obj.message = "VIP认证成功";
    


    // 重新转回字符串
    $done({ body: JSON.stringify(obj) });
} else {
    $done({});
}
