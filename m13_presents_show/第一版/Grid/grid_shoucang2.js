function ajax_collect(article_id, obj) {
    if (!Youhui.common.user.checklogin()) return false;

    var $this = $(obj);

    post_view(article_id);

    //获取当前post的标题
    var title = $this.attr('posttilte');

    var shoucangCookie = Youhui.tools.cookie("zdm_shoucang");
    if (shoucangCookie.indexOf("," + article_id) != -1) {
        floatTips(obj, "您已收藏");
        return;
    }
    else {
        Youhui.tools.cookie("zdm_shoucang", shoucangCookie + "," + article_id, {
            path: '/',
            domain: Youhui.CookieDomain,
            expires: 864000
        });
    }

    $.ajax({
        url: "/ajax/PostUserAction.ashx",
        data: { 'id': article_id, "type": 100, "title": title },
        type: "POST",
        success: function (json, textStatus) {
            if (json.code > 0) {
                var em = $this.find('em');
                if (em.length > 0) {
                    var val = parseInt(em.text());
                    em.text(val + 1);
                } else {
                    var val = parseInt($this.text());
                    $this.text(val + 1);
                }

                floatTips(obj, "已经收藏成功，在您账号中心可以查到！");
            } else {
                floatTips(obj, json.msg);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) { alert(errorThrown); }
    });
    return false;
}