$(function () {
    $("img").bind("error", function () {
        var src,
            that = this,
            img = new Image();
        if ($(that).attr('aj-ignore-it')) {
            return false;
        }
        if (this.src.indexOf('juanlaoda.com') > -1 && this.src.indexOf('imgerror') == -1) {
            src = this.src.replace('juanlaoda.com', 'quanmama.com') + "?imgerror=1";
        }
        else if (this.src.indexOf('quanmama.com') > -1 && this.src.indexOf('imgerror') == -1) {
            src = this.src.replace('quanmama.com', 'juanlaoda.com') + "?imgerror=1";
        }
        else {
            src = "/images/b.gif";
        }
        img.src = src;
        img.onload = function () {
            $(that).attr('src', src);
        }
        img.onerror = function () {
            $(that).attr('aj-ignore-it', 1);
        }
    });
    $('img').each(function () {
        $(this).attr('src', '/imgs/111.jpg');
    });
});