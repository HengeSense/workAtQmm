$(function () {
    var ref = new Wilddog("https://ajlovechina.wilddogio.com/");
    // 创建一个回调来处理终端用户认证的结果
    function authHandler(error, authData) {
        if (error) {
            console.log("Login Failed!", error);
        } else {
            console.log("Authenticated successfully with payload:", authData);
        }
    }

//  通过一个自定义的Wilddog Token来认证用户
    ref.authWithCustomToken("<token>", authHandler);

// 或者使用email/password认证方式。
    ref.authWithPassword({
        email    : '735267452@aj.com',
        password : '123'
    }, authHandler);
    window.ref = ref;
// 或者弹出OAuth认证，比如新浪微博
//ref.authWithOAuthPopup("weibo", authHandler);
//ref.authWithOAuthRedirect("weibo", authHandler);

});