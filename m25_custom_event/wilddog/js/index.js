// https://ajlovechina.wilddogio.com/
$(function () {
    var ref = new Wilddog("https://ajlovechina.wilddogio.com/");
//    ref.set({
//        "name" : "Hello World!",
//        "author" : "Wilddog",
//        "location" : {
//            "city" : "beijing",
//            "zip" : 100000
//        }
//    });
//    ref.child("location/city").on("value", function(datasnapshot) {
//        alert(datasnapshot.val());   // 结果会弹出信息"beijing"
//    });
//    var usersRef = ref.child("users");
//    usersRef.set({
//        alanisawesome : {
//            date_of_birth : "June 23, 1912",
//            full_name : "Alan Turing"
//        },
//        gracehop : {
//            date_of_birth: "December 9, 1906",
//            full_name: "Grace Hopper"
//        }
//    });
    var public = ref.child("public"),
        private = ref.child("private");
    window.ref = ref;
    window.public = public;
    window.private = private;
});