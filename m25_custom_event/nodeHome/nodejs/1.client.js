var prop = {};
prop.url = 'http://127.0.0.1:520';
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