$(function () {		//楼层从0开始
	$('#pagecontent').on('mouseenter', '.aj-first-class .aj-header .aj-h-ul .aj-li', function (e) {
		$(this).siblings().removeClass('aj-select');
		$(this).addClass('aj-select');
		$(this).parents('.aj-first-class').find('.aj-content .aj-c-wrap').eq($(this).index()).show().siblings().hide();
	});
	var container = $('#pagecontent').children('.clear'),
		direction = $('#aj-first-class-direction'),
		stamp = 'floor-index',		//标记 div.aj-first-class 的楼层
		cid,
		url,
		blocks,
		block_height = 980,
		closeAjax = false;		//当点击锚标记滚动页面时，关闭滚动ajax监测
	initialDiv();	//初始化填充direction中显示有多少个楼层
	blocks = container.find('.aj-first-class');
	function initialDiv() {
		var ones = direction.find('.aj-one'),
			i,
			first = container.find('.aj-first-class').eq(0);
		first.attr('aj-has-ajax', '1');
		for (i = 1; i < ones.length; i++) {
			(function (obj) {
				obj.index = i;
				first.clone().removeAttr('aj-has-ajax').html('').attr('id', $(obj).attr('cid')).attr('floor-index', obj.index).css({'width':'1050px','height':block_height + 'px','position':'relative'}).appendTo(container);
			})(ones[i]);
		}
		direction.find('.aj-one a').on('click', function (e) {
			var hash;
			e.preventDefault();
			hash = $(this).attr('href');
			closeAjax = true;
			$(document.body).animate({
				'scrollTop' : $(hash).offset().top - 100
			}, function () {
				closeAjax = false;
			});
		});
		direction.find('.aj-one').on('click', function () {
			moniAjax($(this).index());			
		});
	}
	(function () {
		var scrollTop,
			top,
			height,
			windowHeight,
			isDown,			//是否往下
			lastScrollTop = $(document.body).scrollTop();
		$(window).on('scroll', function () {
			windowHeight = $(window).height();
			scrollTop = $(document.body).scrollTop();
			if (scrollTop - lastScrollTop > 100) { // 往下滚
				isDown = true;
				whichWillScrollIntoView();
				whichIsShowing();
			} else if (lastScrollTop - scrollTop > 100) {	//往上滚
				isDown = false;
				whichWillScrollIntoView();
				whichIsShowing();
			}
		});
		function whichWillScrollIntoView() {
			lastScrollTop = scrollTop;
			for(var i = 0; i < blocks.length; i++) {
				(function (obj) {
					obj.index = i;
					top = $(obj).offset().top;
					height = $(obj).height();
					if (closeAjax) return false;
					if (isDown) {
						if (scrollTop + windowHeight + 100 > top && (scrollTop + windowHeight - top < block_height) && !closeAjax) {
							moniAjax(obj.index);
						}						
					} else {
						if (scrollTop < top + height && scrollTop > top && !closeAjax) {
							moniAjax(obj.index);
						}
					}
				})(blocks[i]);
			}
		}
		function whichIsShowing() {
			for(var i = 0; i < blocks.length; i++) {
				if (blocks.eq(i).offset().top > scrollTop || (blocks.eq(i).offset().top + blocks.eq(i).height() > scrollTop + windowHeight*3/4)) {
					biaojiFloor(i);
					// moniAjax(i);
					break;
				}
			}			
		}
		function biaojiFloor(index) {
			direction.find('.aj-one').eq(index).addClass('aj-select').siblings().removeClass('aj-select');
		}
	}());
	function moniAjax(floor, needLocate) {
		var obj = blocks.eq(floor),
			div = document.createElement('div');
		if (obj.attr('aj-has-ajax') || floor === 0) {	//已经ajax过了
			return true;
		}
		obj.attr('aj-has-ajax', 1);
		wait(obj);
		console.log("now load" + (floor + 1));
		div = document.createElement('div');
		cid = direction.find(".aj-one").eq(floor).attr("cid");
		if (location.href.indexOf('localhost') === -1) {
			url = "http://www.quanmama.com:8080/ajax/ajaxBestDealForCategoryPage.aspx?cid=" + cid + "&index=" + floor;
		} else {
			url = "http://localhost/Github/workAtQmm/m16_o2o_page/o2o_page_modify/response.html";
		}
		$.get(url, "", function (back, status, xhr) {
			$(div).html(back);
			$(div).find('.aj-first-class .aj-content .aj-c-wrap').each(function () {
				if ($(this).find('li').length === 0) { //empty
					$(this).hide();
					$(this).parents('.aj-first-class').find('.aj-header .aj-h-ul .aj-li').eq($(this).index()).hide();
				}
			});
			$(div).find('.aj-header .aj-h-title span').html(floor + 1);
			$(obj).html($(div).find('.aj-first-class').html());
		});
	}
	function wait(obj) {
		$(obj).append("<div class='aj-ajax-delay-tishi' style='width:100%;height:200px;position:relative;'><div style='top:50%;' class='newLoading'></div></div>");
	}
});
