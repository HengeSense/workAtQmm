/**
 * Created by james on 2015/10/13.
 */
// Sign up  // 邮箱认证在服务端开启的
var user = new Parse.User();
user.set("username", 'Boy2');
user.set("password", '123');
user.set("email", '735267452@qq.com');

user.signUp(null, {
    success : function (user) {
        console.log(user);
    },
    error : function (err) {
        console.log(err);
    }
});

// sign in
Parse.User.logIn("AJ", "123", {
    success : function (user) {
        console.log(user);
    },
    error : function () {
        
    }
});