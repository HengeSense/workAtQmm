ref.resetPassword({
    email : "735267452@qq.com"
}, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('OK');
    }
});