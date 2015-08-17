$(function () {
    var left = $('#aj-all-types .aj-left-side'),
        right = $('#aj-all-types .aj-right-side'),
        top = $('#top'),
        scrollTop = -1;
    if (left.length === 0) return false;
    left.css({'height' : $(window).height() - top.height() + 'px'});
    left.css({top : top.height() + 'px'});
    left.find('.aj-li').on('click', function () {
        $(this).addClass('aj-select').siblings().removeClass('aj-select');
    });
    right.css({height : $(window).height() - top.height() + 'px'});
});




// 演示
$(function () {
    $('img[drc]').each(function () {
        var drc;
        drc = $(this).attr('drc');
        var img = new Image(),
            $this = this;
        img.src = drc;
        img.onload = function () {
            $($this).attr('src', drc).removeAttr('drc');
        }
        img.onerro = function () {
            $($this).attr('src', 'http://www.juanlaoda.com/AdminImageUpload/282030xintup.jpg').removeAttr('drc');
        }
    });
});