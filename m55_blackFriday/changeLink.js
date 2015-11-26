$(function () {
    $(".dealout a").each(function () {
        var obj = $(this);
        var thislink = obj.attr("href");

        if (thislink && thislink.length > 0 && thislink.indexOf("quanmama") == -1
            && thislink.indexOf("localhost") == -1 && thislink.indexOf("http") != -1) {
            obj.attr("target", "_blank").attr("href", "http://www.quanmama.com/t/goto.aspx?from=deal&url=" + thislink);
        }
    });
});