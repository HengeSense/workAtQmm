/**
 * Created by james on 2015/10/12.
 */
$(function () {
//    var test = Parse.Object.extend("TestObject");
//    var testObject = new TestObject();
//    testObject.save({
//        foo : 'bar'
//    }).then(function (obj) {
//        console.log("OK");
//    });
    var user = new Parse.User();
    user.set("username", "AJAX");
    user.set("password", "123");
    user.set("email", "735267452@qq.com");

    user.set("phone", "18075076612");
    user.signUp(null, {
        success : function (user) {
            
        },
        error : function (user, err) {
            console.log(err.code + '--' + err.message);
        }
    });
});