function haitaocoupon_shoucang(obj) {
    if (!Youhui.common.user.checklogin()) return false;
    var $this = $(obj);
    if ($this.attr("data-starred") == "false") 
	{
        $this.attr("data-starred", "true");
    } else {
        $this.attr("data-starred", "false");
    }

    var id = $this.attr('cid');

    var shoucangCookie = Youhui.tools.cookie("haitaocoupon_shoucang");
    if (shoucangCookie.indexOf("," + id) != -1) {
        Youhui.tools.cookie("haitaocoupon_shoucang", shoucangCookie.replace("," + id, ""), {
            path: '/',
            domain: Youhui.CookieDomain,
            expires: 864000
        });

        $.ajax({
            url: "/ajax/haitaocouponvote.ashx",
            data: { 'id': id, "type": "cancel_shoucang" },
            type: "POST",
            success: function (json, textStatus) {
                if (json.code > 0) {
                    floatTips(obj, "取消收藏成功！");
                } else {
                    floatTips(obj, json.msg);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) { alert(errorThrown); }
        });


        return;
    }
    else {
        Youhui.tools.cookie("haitaocoupon_shoucang", shoucangCookie + "," + id, {
            path: '/',
            domain: Youhui.CookieDomain,
            expires: 864000
        });
    }

    $.ajax({
        url: "/ajax/haitaocouponvote.ashx",
        data: { 'id': id, "type": "shoucang" },
        type: "POST",
        success: function (json, textStatus) {
            if (json.code > 0) {
                floatTips(obj, "已经收藏成功，在您账号中心可以查到！");
            } else {
                floatTips(obj, json.msg);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) { alert(errorThrown); }
    });
}