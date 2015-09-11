ref.createUser({
    email : "123@aj.com",
    password : "123"
}, function (err, data) {
    if (err != null) {
        console.log("FAIL");
    } else {
        console.log("OK");
    }
});