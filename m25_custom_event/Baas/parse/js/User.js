/**
 * Created by james on 2015/10/13.
 */
// Sign up
var user = new Parse.User();
user.set("username", 'Boy1');
user.set("password", '123');
user.set("email", '1234@aj.com');

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
        
    },
    error : function () {
        
    }
});