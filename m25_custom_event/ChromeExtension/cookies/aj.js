document.addEventListener('DOMContentLoaded', function () {
    var val = chrome.cookies.get({
        url : ".quanmama.com",
        name : 'zdm_vote'
    }, function (cookie) {
        alert(cookie);
    });
});