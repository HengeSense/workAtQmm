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
	initialDiv();
	blocks = container.find('.aj-first-class');
	
	(function () {
		var scrollTop,
			top,
			height,
			windowHeight,
			lastScrollTop = $(document.body).scrollTop();
		$(window).on('scroll', function () {
			windowHeight = $(window).height();
			scrollTop = $(document.body).scrollTop();
			if (scrollTop - lastScrollTop > 100) { // 往下滚
				lastScrollTop = scrollTop;
				for(var i = 0; i < blocks.length; i++) {
					(function (obj) {
						obj.index = i;
						top = $(obj).offset().top;
						height = $(obj).height();
						if (scrollTop + windowHeight + 100 > top && (scrollTop + windowHeight + 1000 < top + height)) {
							// console.log(top + '===>' + obj.index);
							moniAjax(obj.index);
						}
					})(blocks[i]);
				}
			} else if (lastScrollTop - scrollTop > 100) {	//往下滚
				for(var i = 0; i < blocks.length; i++) {
					(function (obj) {
						obj.index = i;
						top = $(obj).offset().top;
						height = $(obj).height();
						if (scrollTop < top + height && scrollTop > top) {
							// console.log(top + '===>' + obj.index);
							moniAjax(obj.index);
						}
					})(blocks[i]);
				}				
			}
		});
	}());
	function initialDiv() {
		var ones = direction.find('.aj-one'),
			i,
			first = container.find('.aj-first-class').eq(0);
		first.attr('aj-has-ajax', '1');
		for (i = 1; i < ones.length; i++) {
			(function (obj) {
				obj.index = i;
				first.clone().html(obj.index + 1 + 'lou').attr('id', $(obj).attr('cid')).attr('floor-index', obj.index).css({'width':'1050px','height':'1100px','position':'relative'}).appendTo(container);
			})(ones[i]);
		}
		direction.find('.aj-one a').on('click', function (e) {
			var hash;
			e.preventDefault();
			hash = $(this).attr('href');
			$(document.body).animate({
				'scrollTop' : $(hash).offset().top - 100
			});
		});
		direction.find('.aj-one').on('click', function () {
			moniAjax($(this).index());			
		});
	}
	function moniAjax(floor, needLocate) {
		var obj = blocks.eq(floor);
		console.log("now load " + (floor + 1));
		if (obj.attr('aj-has-ajax') || floor === 0) {	//已经ajax过了
			return true;
		}
		wait(obj);
		obj.attr('aj-has-ajax', 1);
		console.log("I am loading....");
		div = document.createElement('div');
		cid = direction.find(".aj-one").eq(floor).attr("cid");
		url = "http://www.quanmama.com:8080/ajax/ajaxBestDealForCategoryPage.aspx?cid=" + cid + "&index=" + floor;
		if (location.href.indexOf('localhost') === -1) {
			$.get(url, "", function (back, status, xhr) {
				response = back;
				$(div).html(response);
				$(div).find('.aj-first-class .aj-content .aj-c-wrap').each(function () {
					if ($(this).find('li').length === 0) { //empty
						$(this).hide();
						$(this).parents('.aj-first-class').find('.aj-header .aj-h-ul .aj-li').eq($(this).index()).hide();
					}
				});
				$('#' + cid).html($(div).find('.aj-first-class').html());
				console.log("loading ok...");
			});			
		} else {
			setTimeout(function () {
				console.log('#' + cid);
				$('#' + cid).html("Hello World");
				console.log('loading ok...');
			}, 2000);
		}
	}
	function wait(obj) {
		$(obj).append("<div class='aj-ajax-delay-tishi' style='width:100%;height:200px;position:relative;'><div style='top:50%;' class='newLoading'></div></div>");
	}
});
