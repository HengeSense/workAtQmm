function fixed_right(prop) {

    if ($("#pagefooter").length > 0 && $(".rightPanel").length > 0) {
        var footer = document.getElementById('pagefooter'),
			headerHeight = 181, 	//??
			footerHeight = $("#pagefooter").height(),
			windowHeight = $(window).height(),
			bodyHeight = windowHeight - headerHeight - footerHeight,
			leftHeight = $(".left_side").height(),
			rightHeight = $(".right_side").height(),
			rightOffsetTop = $('.right_side').offset().top,
			fixedTop = 40;

        var fixed_height_timer = setInterval(function () {
            if ($('.right_side').height() > rightHeight) {
                rightHeight = $('.right_side').height();
            }
            if ($('.left_side').height() > leftHeight) {
                leftHeight = $('.left_side').height();
            }
        }, 1000 / 12);
        setTimeout(function () {
            clearInterval(fixed_height_timer);
        }, 10 * 1000);

        var isShow = false,
			isBuchong = false,
			fixedOffsetFromFooter = 0,
			fixedTotalHeight = 0,
			scrollHeight,
			footerTop,
            timer = 0;

        $(window).on('resize', function () {
            for (var i = 0; i < prop.arr.length; i++) {
                $(prop.arr[i]).css({
                    'left': $('.right_side')[0].getBoundingClientRect().left
                });
            }
        });

        $(window).scroll(function () {
            if (!timer) {
                timer = setTimeout(function () {
                    doScroll();
                    timer = 0;
                }, 200);
            }
        });
        function doScroll() {
            if (prop.arr.length === 0) { return false; }
            fixedTotalHeight = 0;
            prop.arr.forEach(function (obj) {
                fixedTotalHeight += $(obj).height() + parseInt($(obj).css('margin-bottom'));
            });

            if (scrollHeight === $(window).scrollTop()) {//scroll x
                for (var i = 0; i < prop.arr.length; i++) {
                    $(prop.arr[i]).css({
                        'left': $('.right_side')[0].getBoundingClientRect().left
                    });
                }
                return true;
            }
            scrollHeight = $(window).scrollTop(),
			footerTop = footer.getBoundingClientRect().top;
            fixedBottom = prop.arr[prop.arr.length - 1].getBoundingClientRect().bottom;
            // var p = $(".g_g");
            if (leftHeight > rightHeight) {

                if (scrollHeight > (rightHeight + rightOffsetTop)) {

                    fixedOffsetFromFooter = footerTop - (fixedTop + fixedTotalHeight);
                    if (fixedOffsetFromFooter >= 0) {
                        fixedOffsetFromFooter = 0;
                    } else {
                        isShow = false;
                    }
                    var previousSiblingTotalHeight = 0;
                    for (var i = 0; i < prop.arr.length; i++) {

                        $(prop.arr[i]).css({
                            'position': 'fixed',
                            'top': fixedTop + previousSiblingTotalHeight + fixedOffsetFromFooter,
                            'left': $('.right_side')[0].getBoundingClientRect().left
                        });
                        previousSiblingTotalHeight = $(prop.arr[i]).height() + parseInt($(prop.arr[i]).css('margin-bottom'));

                    }
                } else {
                    for (var i = 0; i < prop.arr.length; i++) {
                        $(prop.arr[i]).css({
                            'position': 'static',
                            'top': '0px'
                        });
                    }
                }
            }            
        }
    }
}