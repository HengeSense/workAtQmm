$(function () {
    var left = $('#aj-all-types .aj-left-side'),
        right = $('#aj-all-types .aj-right-side'),
        top = $('#top'),
        lis,
        blocks,
        blocksWrap,
        i,
        divEle,
        bannerImgHeight,
        body = $('#body'),
        bannerImg = $('#body a img:first'),
        scrollTop = -1;0
    if (left.length === 0) return false;
    bannerImgHeight = bannerImg.height();
    var bannerTop = top.height() + bannerImgHeight;
    lis = left.find('.aj-li');
    blocksWrap = right.find('.aj-r-inside-wrap');
    left.css({'height' : $(window).height() - bannerTop + 'px'});
    left.css({top : bannerTop + 'px'});
    for (i = 1; i < lis.length; i++) {
        divEle = document.createElement('div');
        $(divEle).addClass('aj-block');
        $(divEle).html('<div class="newLoading"></div>');
        blocksWrap.append(divEle);
    }
    blocks = blocksWrap.find('.aj-block');
    lis.on('click', function () {
        $(this).addClass('aj-select').siblings().removeClass('aj-select');
        blocks.eq($(this).index()).show().siblings().hide();
    });
    right.css({height : $(window).height() - bannerTop + 'px'});
    right.css({top : bannerTop + 'px'});
    right.css({width : body.width() + 'px'});

	
	// ajax
	(function () {
        // 加载默认
        (function () {
            var container,
                from,
                cid;
            if (left.hasClass('aj-need-init-load')) {
                container = right.find('.aj-r-inside-wrap .aj-block').eq(0);
                from = left.find('.aj-l-ul .aj-li.aj-select');
                catid = from.attr('catid');
                load(container, catid, from);
            }
        })();
        // 点击li加载相应内容
		left.on('click', '.aj-l-ul .aj-li', function () {
            if ($(this).attr('aj-has-ajax-load-catid')) return true;
            var catid = $(this).attr('catid'),
                index = $(this).index();

            load(right.find('.aj-r-inside-wrap .aj-block').eq(index), catid, this);
        });
        // ajax的具体实现
        function load(container, catid, fromLi) {
            var url = "/myajax/ourcategoryguide?id=" + catid;
            container.load(url, function (res) {
                var div = document.createElement('div');
                $(div).html(res);
                $(div).html($(div).find('.aj-types-wrap').html());
                $(div).addClass('aj-types-wrap');
                $(this).html(div);
                clear(this);
                $(fromLi).attr('aj-has-ajax-load-catid', '1');
            });
        }
        // 剔除没有图片的列表项
        function clear(div) {
            var isOneTypeOK = false;
            $(div).find('.aj-type-one').each(function () {
                var isOneHaveImg = false;
                $(this).find('.aj-content-inside-one').each(function () {
                    var that = this;
                    $(this).find('.aj-img img').on('error', function () {
                        $(that).hide();
                    });
                    if ($(this).find('.aj-img img').attr('src') === '') {
                        $(this).hide();
                    } else {
                        isOneHaveImg = true;
                    }
                });
                if (!isOneHaveImg) {
                    $(this).hide();
                } else {
                    isOneTypeOK = true;
                }
            });
            if (!isOneTypeOK) {
                $(div).html("<div style='width:100%;text-align:center;margin:20px 0;'>亲,数据被吞掉了...</div>");
            }
        }
	})();


});




// 演示
//$(function () {
//    $('img[drc]').each(function () {
//        var drc;
//        drc = $(this).attr('drc');
//        var img = new Image(),
//            $this = this;
//        img.src = drc;
//        img.onload = function () {
//            $($this).attr('src', drc).removeAttr('drc');
//        }
//        img.onerror = function () {
//            $($this).attr('src', 'http://www.juanlaoda.com/AdminImageUpload/282030xintup.jpg').removeAttr('drc');
//        }
//    });
//    var typesWrap = $('#aj-all-types .aj-types-wrap'),
//        typesOne = typesWrap.find('.aj-type-one').eq(0),
//        i,
//        clone;
//    for (i = 0; i < 5; i++) {
//        typesWrap.append(typesOne.clone().find('.aj-img img').attr('src', 'types_imgs/' + (i % 3)+ '.jpg').end());
//    }
//});
