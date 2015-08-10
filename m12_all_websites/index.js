(function () {
	var w = {},
		timer,
		scrollTimer,
		div = $('#J_nav_site .aj-line-ceil'),
		cid,
		blocks = $('#J_nav_site .aj-website-fenlei'),
		isScrollFromClick = false;
	resize();
	$(window).on('resize', function () {
		if (!timer) {
			timer = setTimeout(function () {
				resize();
				timer = 0;
			}, 100);
		}
	});
	$(window).on('scroll', function () {
		if (!scrollTimer) {
			scrollTimer = setTimeout(function () {
				scroll();
				scrollTimer = 0;
			}, 200);
		}
	});
	div.on('click', '.aj-li', function (e) {
		e.preventDefault();
		if ($(this).hasClass('aj-select')) return false;
		cid = $(this).find('a').attr('href');
		var obj = $(cid);
		isScrollFromClick = true;
		$(document.body).animate({'scrollTop' : obj.offset().top + obj.height() / 2 - $(window).height() /2  + 'px'}, function () {
			isScrollFromClick = false;
		});
		$(this).addClass('aj-select').siblings().removeClass('aj-select');
	});
	function resize() {
		w.width = $(window).width();
		div.css('left', (w.width - 1050) / 2 - div.width() - 20 + 'px');		
	}
	function scroll(){
		if (isScrollFromClick) {
			console.log(1);
			return false; //不处理来自点击导航引起的页面滚动
		}
		blocks.each(function (index, obj) {
			if (($(this).offset().top - $(document.body).scrollTop() < $(window).height() / 2) && ($(this).offset().top + $(this).height() - $(document.body).scrollTop() > $(window).height() /2)) {
				div.find('.aj-li').eq(index).addClass('aj-select').siblings().removeClass('aj-select');
			}
		});
	}
}());
