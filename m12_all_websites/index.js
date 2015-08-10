(function () {
	var w = {},
		timer,
		div = $('.aj-line-ceil'),
		cid;
	$(window).on('resize', function () {
		if (!timer) {
			timer = setTimeout(function () {
				w.width = $(window).width();
				div.css('left', (w.width - 1050) / 2 - div.width() - 20 + 'px');
				timer = 0;
			}, 100);
		}
	});
	div.on('click', '.aj-li', function (e) {
		e.preventDefault();
		if ($(this).hasClass('aj-select')) return false;
		cid = $(this).find('a').attr('href');
		$(document.body).animate({'scrollTop' : $(cid).offset().top - 100 + 'px'});
		$(this).addClass('aj-select').siblings().removeClass('aj-select');
	});

}());
