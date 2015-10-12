ref.changePassword({
    email : "123@aj.com",
    oldPassword : "123",
    newPassword : "1234"
}, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});