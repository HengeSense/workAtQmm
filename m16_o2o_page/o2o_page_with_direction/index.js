$(function () {
	var div = $('#aj-first-class-direction'),
		selfHeight,
		width,
		height;
	selfHeight = $(div).height();
	$(div).on('click', '.aj-one', function() {
		$(div).find('.aj-one').removeClass('aj-select');
		$(this).addClass('aj-select');
	});
	check();
	$(window).on('resize', function () {
		check();
	});
	function check () {
		width = $(window).width();
		selfHeight = $(div).height();
		height = $(window).height();
		$(div).css('left', ((width - 1060) / 2 - 50) + 'px');
		$(div).css('margin-top', -(selfHeight / 2) + 'px');
		if ((width < (1050 + 80 + 10)) || (height < selfHeight + 50)) {
			$(div).hide();
		} else {
			$(div).show();
		}
	}
});