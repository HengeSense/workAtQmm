$(function () {
    var ref = new Wilddog("https://ajlovechina.wilddogio.com/");

    var xx  = ref.child("users/gracehop");
//    xx.update({
//        "nickname2" : "Ajax"
//    });
//    xx.set({
//        author : "ajax"
//    });
    // 事件用来读取当前节点的静态数据快照， value 事件在初次获取到数据时被触发一次，
    // 此后每当数据发生变化都会被触发
    xx.on("value", function (snapshot) {
        console.log("value:" + snapshot.val());
    }, function (error) {
        console.log("Error:" + error.code);
    });
    xx.on("child_added", function (snapshot) {
        var newPost = snapshot.val();
        console.log("child_added:" + newPost);
    });
    // 当子节点数据发生了改变时，child_changed事件会被触发，
    // 事件回调方法中传入的参数是子节点改变后的数据快照
    xx.on("child_changed", function (snapshot) {
        var changed = snapshot.val();
        console.log("child_changed:" + changed);
    });
    xx.on("child_removed", function (snapshot) {
        var remove = snapshot.val();
        console.log("remove:" + remove);
    });
});