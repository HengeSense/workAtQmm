$(function () {
    $(document).on('aj.goback', function () {
        if (!history.back()) {
            if (location.host.indexOf('localhost') !== -1) {
                console.log(1);
                location.href = location.origin + "/mobile/home";
            } else {
                console.log(2);
                location.href = '/';
            }
        } else {
            localStorage.setItem('123', '123');
        }
    });
});
