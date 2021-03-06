$(function () {
	$('#pagecontent').on('mouseenter', '.aj-first-class .aj-header .aj-h-ul .aj-li', function (e) {
			$(this).siblings().removeClass('aj-select');
			$(this).addClass('aj-select');
			$(this).parents('.aj-first-class').find('.aj-content .aj-c-wrap').eq($(this).index()).show().siblings().hide();
	});
});
$(function () {	//楼层从0开始
	var response = $('#aj-ajax-load').val(),
		container = $('#pagecontent').children('.clear'),
		direction = $('#aj-first-class-direction'),
		div;
	var distance,
		stamp = 'floor-index',
		lastFloor,
		cid,
		url,
		blocks;
	$(window).on('scroll', function () {
		distance = $(container).offset().top + $(container).height() - $(document.body).scrollTop() - $(window).height();
		if (distance < 600) {
			loadNextFloor();
		}
	});
	direction.on('click', '.aj-one', function () {
		console.log($(this).index());
		moniAjax($(this).index());
	});
	function loadNextFloor() {
		lastFloor = parseInt(container.find('.aj-first-class').last().attr(stamp));
		if (!isLoading() && (lastFloor + 1 < direction.find(".aj-one").length) && !isFloorLoaded(lastFloor + 1)) {
			moniAjax(lastFloor + 1);
		}
	}
	function isFloorLoaded(floor) {
		return container.find(".aj-first-class[" + stamp+ "='" + floor + "']").length > 0 ? true : false;
	}
	function isLoading(bool) {
		if (bool !== undefined) {
			bool ? container.attr('aj-is-loading', '1') : container.removeAttr('aj-is-loading');
		} else {
			return container.attr('aj-is-loading') ? true : false;
		}
	}
	function moniAjax(floor) {		//加载哪个楼层
		isLoading(true);
		wait(false);
		wait();
		console.log("I am loading....");
		div = document.createElement('div');
		cid = direction.find(".aj-one").eq(floor).children('a').attr('href').replace(/^#/, '');
		console.log(cid);
		url = "http://www.quanmama.com:8080/ajax/ajaxBestDealForCategoryPage.aspx?cid=" + cid + "&index=" + floor;
		setTimeout(function () {
			$.get(url, "", function (back, status, xhr) {
				var bool = false;
				response = back;
				$(div).html(response);
				$(div).find('.aj-first-class .aj-content .aj-c-wrap').each(function () {
					if ($(this).find('li').length === 0) { //empty
						$(this).hide();
						$(this).parents('.aj-first-class').find('.aj-header .aj-h-ul .aj-li').eq($(this).index()).hide();
					}
				});
				$(div).find('.aj-first-class').attr(stamp, floor);
				wait(false);
				blocks = container.find('.aj-first-class');
				blocks.each(function () {
					if (parseInt($(this).attr(stamp)) < floor && blocks.eq($(this).index() + 1) && parseInt(blocks.eq($(this).index() + 1).attr(stamp)) > floor) {
						$(div).insertAfter(this);
						bool = true;
					}
				});
				if (!bool) {
					$(div).appendTo(container);
				}
				location.href = '#' + cid;
				isLoading(false);
				console.log("loading ok...");
			});
		}, 2000);
	}
	function wait(bool) {
		if (bool !== undefined) {
			container.find('.aj-ajax-delay-tishi').remove();
		} else {
			container.append("<div class='aj-ajax-delay-tishi' style='width:100%;height:200px;position:relative;'><div style='top:50%;' class='newLoading'></div></div>");
		}
	}
});