$(function () {
	$('#pagecontent').on('mouseenter', '.aj-first-class .aj-header .aj-h-ul .aj-li', function (e) {
		$(this).siblings().removeClass('aj-select');
		$(this).addClass('aj-select');
		$(this).parents('.aj-first-class').find('.aj-content .aj-c-wrap').eq($(this).index()).show().siblings().hide();
	});
});
$(function () {
	var direction = $('#aj-first-class-direction'),
		container = $('#pagecontent').children('.clear'),
		blocks,
		lastTop = 0,
		nowTop,
		i;
	show(0);
	$(window).on('scroll', function () {
		nowTop = $(document.body).scrollTop();
		if (Math.abs(nowTop - lastTop) > 100) {
			lastTop = nowTop;
			blocks = container.find('.aj-first-class');
			for (i = 0; i < blocks.length; i++) {
				if ($(blocks[i]).offset().top - $(document.body).scrollTop() > 0 && $(blocks[i]).offset().top - $(document.body).scrollTop() < 300) {
					show(i);
					break;
				}
			}
		}
	});
	function show(index){
		direction.find('.aj-one').eq(index).addClass('aj-select').siblings().removeClass('aj-select');
	}
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
		if (distance < 150) {
			loadNextFloor();
		}
	});
	direction.on('click', '.aj-one', function () {
		console.log($(this).index());
		if (!isFloorLoaded($(this).index())) {
			moniAjax($(this).index(), true);
		}
	});
	function loadNextFloor() {
		lastFloor = parseInt(container.find('.aj-first-class').last().attr(stamp));
		if (!isLoading() && (lastFloor + 1 < direction.find(".aj-one").length) && !isFloorLoaded(lastFloor + 1)) {
			moniAjax(lastFloor + 1);
		}
	}
	function isFloorLoaded(floor) {
		return container.find(".aj-first-class[" + stamp + "='" + floor + "']").length > 0 ? true : false;
	}
	function isLoading(bool) {
		if (bool !== undefined) {
			bool ? container.attr('aj-is-loading', '1') : container.removeAttr('aj-is-loading');
		} else {
			return container.attr('aj-is-loading') ? true : false;
		}
	}
	function moniAjax(floor, needLocate) {
		isLoading(true);
		wait(false);
		wait();
		console.log("I am loading....");
		div = document.createElement('div');
		cid = direction.find(".aj-one").eq(floor).attr("cid");

		console.log(cid);
		url = "http://www.quanmama.com:8080/ajax/ajaxBestDealForCategoryPage.aspx?cid=" + cid + "&index=" + floor;
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
			for (var i = 0; i < blocks.length; i++) {
				if (parseInt($(blocks[i]).attr(stamp)) < floor && (blocks.eq(i + 1).length > 0) && (parseInt(blocks.eq(i + 1).attr(stamp)) > floor)) {
					$(div).insertAfter(blocks[i]);
					bool = true;
				}
			}
			if (!bool) {
				$(div).appendTo(container);
			}
			if (needLocate) {
				location.href = '#' + cid;
			}
			isLoading(false);
			console.log("loading ok...");
		});
	}
	function wait(bool) {
		if (bool !== undefined) {
			container.find('.aj-ajax-delay-tishi').remove();
		} else {
			container.append("<div class='aj-ajax-delay-tishi' style='width:100%;height:200px;position:relative;'><div style='top:50%;' class='newLoading'></div></div>");
		}
	}
});