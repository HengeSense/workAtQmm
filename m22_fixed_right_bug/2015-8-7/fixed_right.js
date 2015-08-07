/*jslint browser : true*/
/*global $, jQuery, console*/
/*jslint plusplus : true*/
function fixed_right() {
    var prop = {},
        w = window,
        footer = $('#pagefooter'),
        left_side_dom = $('.left_side'),
        right_side_dom = $('.right_side');
    if (right_side_dom.length <= 0 || left_side_dom.length <= 0) return false;
    var leftHeight = left_side_dom.height(),
        rightHeight = right_side_dom.height(),
        rightOffsetTop = right_side_dom.offset().top,
        fixedTop = 40,
        fixed_height_timer,
        fixedOffsetFromFooter = 0,
        fixedTotalHeight = 0,
        scrollHeight,
        footerTop,
        timer = 0,
        previousSiblingTotalHeight;
    prop.arr =  $('.rightPanel.floatFixed');
    function doScroll() {
        prop.arr = $('.rightPanel.floatFixed');
        if (prop.arr.length === 0) { return false; }
        fixedTotalHeight = 0;
        prop.arr.each(function () {
            fixedTotalHeight += $(this).height() + parseInt($(this).css('margin-bottom'), 10);
        });
        if (scrollHeight === $(w).scrollTop()) {       //scroll x
            prop.arr.each(function () {
                $(this).css({
                    'left': right_side_dom.offset().left
                });
            });
            return true;
        }
        scrollHeight = $(w).scrollTop();
        footerTop = footer.offset().top;
        if (leftHeight < rightHeight) { return false; }
        if (scrollHeight > (rightHeight + rightOffsetTop)) {
            fixedOffsetFromFooter = footerTop - (scrollHeight + fixedTop + fixedTotalHeight);
            if (fixedOffsetFromFooter >= 0) {
                fixedOffsetFromFooter = 0;
            }
            previousSiblingTotalHeight = 0;
            prop.arr.each(function () {
                $(this).css({
                    'position': 'fixed',
                    'top': fixedTop + previousSiblingTotalHeight + fixedOffsetFromFooter,
                    'left': right_side_dom.offset().left
                });
                previousSiblingTotalHeight += $(this).height() + parseInt($(this).css('margin-bottom'), 10);
            });
        } else {
            prop.arr.each(function () {
                $(this).css({
                    'position': 'static',
                    'top': '0px'
                });
            });
        }
    }
    if (footer.length > 0 && $(".rightPanel").length > 0) {
        fixed_height_timer = setInterval(function () {
            if (right_side_dom.height() > rightHeight) {
                rightHeight = right_side_dom.height();
            }
            if (left_side_dom.height() > leftHeight) {
                leftHeight = left_side_dom.height();
            }
        }, 1000 / 5);
        setTimeout(function () {
            clearInterval(fixed_height_timer);
        }, 10 * 1000);

        $(w).on('resize', function () {
            prop.arr.each(function () {
                $(this).css({
                    'left': right_side_dom.offset().left
                });
            });
        });
        $(w).on('scroll', function () {
            if (!timer) {
                timer = setTimeout(function () {
                    doScroll();
                    timer = 0;
                }, 200);
            }
        });
    }
}