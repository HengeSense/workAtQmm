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
//    var user = new Parse.User();
//    user.set("username", "AJAX");
//    user.set("password", "123");
//    user.set("email", "735267452@qq.com");
//
//    user.set("phone", "18075076612");
//    user.signUp(null, {
//        success : function (user) {
//
//        },
//        error : function (user, err) {
//            console.log(err.code + '--' + err.message);
//        }
//    });
    var GameScore = new Parse.Object.extend("GameScore");

    var gs = new GameScore();
    window.gs = gs;

    var Blogs = new Parse.Object.extend("blogs");
    var blogs = new Blogs();
    var blogsQuery = new Parse.Query(Blogs);
    window.blogs = blogs;
    window.blogsQuery = blogsQuery;

    window.gs = new GameScore();

    var Users = new Parse.Object.extend('users');
    window.u = new Users();

    var Goods = new Parse.Object.extend('goods');
    window.g = new Goods();

    var Blogs = new Parse.Object.extend("blogs");
    window.b = new Blogs();
});