/*jslint browser : true*/
/*global $, jQuery, console*/
/*jslint plusplus : true*/
function fixed_right(prop) {
    "use strict";
    var w = window,
        footer = $('#pagefooter'),
        left_side_dom = $('.left_side'),
        right_side_dom = $('.right_side'),
        leftHeight = left_side_dom.height(),
        rightHeight = right_side_dom.height(),
        rightOffsetTop = right_side_dom.offset().top,
        fixedTop = 40,
        fixed_height_timer,
        isShow = false,
        fixedOffsetFromFooter = 0,
        fixedTotalHeight = 0,
        scrollHeight,
        footerTop,
        timer = 0,
        i;
    function doScroll() {
        if (prop.arr.length === 0) { return false; }
        fixedTotalHeight = 0;
        prop.arr.forEach(function (obj) {
            fixedTotalHeight += $(obj).height() + parseInt($(obj).css('margin-bottom'), 10);
        });
        if (scrollHeight === $(w).scrollTop()) {       //scroll x
            for (i = 0; i < prop.arr.length; i++) {
                $(prop.arr[i]).css({
                    'left': right_side_dom.offset().left
                });
            }
            return true;
        }
        scrollHeight = $(w).scrollTop();
        footerTop = footer.offset().top;
        if (leftHeight < rightHeight) { return false; }
        if (scrollHeight > (rightHeight + rightOffsetTop)) {
            fixedOffsetFromFooter = footerTop - (fixedTop + fixedTotalHeight);
            if (fixedOffsetFromFooter >= 0) {
                fixedOffsetFromFooter = 0;
            } else {
                isShow = false;
            }
            var previousSiblingTotalHeight = 0;
            for (i = 0; i < prop.arr.length; i++) {
                $(prop.arr[i]).css({
                    'position': 'fixed',
                    'top': fixedTop + previousSiblingTotalHeight + fixedOffsetFromFooter,
                    'left': $('.right_side')[0].getBoundingClientRect().left
                });
                previousSiblingTotalHeight = $(prop.arr[i]).height() + parseInt($(prop.arr[i]).css('margin-bottom'), 10);
            }
        } else {
            for (i = 0; i < prop.arr.length; i++) {
                $(prop.arr[i]).css({
                    'position': 'static',
                    'top': '0px'
                });
            }
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
            for (i = 0; i < prop.arr.length; i++) {
                $(prop.arr[i]).css({
                    'left': right_side_dom.offset().left
                });
            }
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