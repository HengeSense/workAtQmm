$(function () {
	var cid = 'cid',
		cookieName = 'faxianzdm_shoucang';
	function Stamp(div) {
		if (this instanceof Stamp) {
			this.div = div;
			this.initial();
			this.hover();
			this.event();
		} else {
			return new Stamp(div);
		}
	}
	Stamp.prototype = {
		initial : function () {
			this.calculateMaxleft();
		},
		event : function () {
			var that = this;
			$(window).on('resize', function () {
				that.calculateMaxleft();
			});
		},
		hover : function () {
			var html,
				that = this;
			$(this.div).on("mouseenter mouseleave", '.list', function (event) {
				if (event.type === 'mouseenter') {
					if (!$(this).attr('aj-has-hover')) {
						html = $(this).find('.aj-desc').html() +
							"<div class='aj-stamps aj-stamps-y'>" +
							$(this).find('.aj-stamps').html() +
							"</div>";
						var target = event.target;
						$(this).find('.aj-desc').html(html);
						$(this).attr('aj-has-hover', '1');
					}
					that.setStyleOfFavor(this);
					if (that.isLastInline(this)) {
						$(this).find('.aj-list-inside-wrap').css({'float' : 'right'});
					}
				} else if (event.type === 'mouseleave') {
					$(this).find('.aj-favor').css('display', 'none');
				}
			});
			$(this.div).on('mouseover', '.itemName .black', function () {
				if (!$(this).attr('title')) {
					$(this).attr('title', $.trim($(this).html()));
				}
			});
			$(this.div).on('mouseover', '.aj-favor', function () {
				if (!$(this).attr('title') && !$(this).hasClass('aj-have-favor')) {
					$(this).attr('title', '添加到收藏');
				} else if ($(this).hasClass('aj-have-favor')) {
					$(this).attr('title', '取消收藏');
				}
			});
			$(this.div).on('click', '.aj-favor', function () {
				if ($(this).hasClass('aj-have-favor')) {
					faxianzdm_shoucang(this, true);
				}else{
					faxianzdm_shoucang(this, false);
				}
				$(this).toggleClass('aj-have-favor');
				$(this).removeAttr('title');
			});
		},
		setStyleOfFavor : function (obj) {
			var aTag = $(obj).find('.aj-favor')[0],
				id = $(aTag).attr(cid);
			if (Youhui.tools.cookie(cookieName).indexOf("," + id) !== -1){
				$(aTag).addClass('aj-have-favor');
			}
			$(aTag).css('display', 'block');
		},
		calculateMaxleft : function () {
			var	divs = $(this.div).find('.list'),
				left = 0,
				i;
			if (divs.length < 4){
				return false;
			}
			for (i = 0; i <= 5; i++) {
				if ($(divs[i]).offset().left >= left) {
					left = $(divs[i]).offset().left;
				} else {
					break;
				}
			}
			this.maxLeft = left;
		},
		isLastInline : function (div) {
			return (Math.abs($(div).offset().left - this.maxLeft) < 10) ?
						true : false;
		}
	};
	var div = $('.discovery_list')[0];
	if (div) {
		Stamp(div);
	}

    function faxianzdm_shoucang(obj, isSc) {

        if (!Youhui.common.user.checklogin()) return false;

        var $this = $(obj),
			id = $this.attr('cid');

        if (isSc) {
            //获取当前post的标题
            var title = $this.attr('posttilte');
            var shoucangCookie = Youhui.tools.cookie("faxianzdm_shoucang");
            if (shoucangCookie.indexOf("," + id) != -1) {
                floatTips(obj, "您已收藏");
                return;
            }
            else {
                Youhui.tools.cookie("faxianzdm_shoucang", shoucangCookie + "," + article_id, {
                    path: '/',
                    domain: Youhui.CookieDomain,
                    expires: 864000
                });
            }

            $.ajax({
                url: "/ajax/PostUserAction.ashx",
                data: { 'id': id, "type": 100, "title": title },
                type: "POST",
                success: function (json, textStatus) {
                    if (json.code > 0) {
                        floatTips(obj, "已经收藏成功！");
                    } else {
                        floatTips(obj, json.msg);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) { alert(errorThrown); }
            });
            return;
        } else {
            var shoucangCookie = Youhui.tools.cookie("faxianzdm_shoucang");

            if (shoucangCookie.indexOf("," + id) != -1) {
                Youhui.tools.cookie("faxianzdm_shoucang", shoucangCookie.replace("," + id, ""), {
                path: '/',
                domain: Youhui.CookieDomain,
                expires: 864000
            });

            $.ajax({
                url: "/ajax/PostUserAction.ashx",
                data: { 'id': id, "type": 101},
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
        }
    }
});