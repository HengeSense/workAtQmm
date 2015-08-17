$(function () {
    var left = $('#aj-all-types .aj-left-side'),
        right = $('#aj-all-types .aj-right-side'),
        top = $('#top'),
        lis,
        blocks,
        blocksWrap,
        i,
        divEle
        scrollTop = -1;
    if (left.length === 0) return false;
    lis = left.find('.aj-li');
    blocksWrap = right.find('.aj-r-inside-wrap');
    left.css({'height' : $(window).height() - top.height() + 'px'});
    left.css({top : top.height() + 'px'});
    for (i = 1; i < lis.length; i++) {
        divEle = document.createElement('div');
        $(divEle).addClass('aj-block');
        $(divEle).html('<div class="newLoading"></div>');
        blocksWrap.append(divEle);
    }
    blocks = blocksWrap.find('.aj-block');
    lis.on('click', function () {
        $(this).addClass('aj-select').siblings().removeClass('aj-select');
        blocks.eq($(this).index()).show().siblings().hide();
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
        img.onerror = function () {
            $($this).attr('src', 'http://www.juanlaoda.com/AdminImageUpload/282030xintup.jpg').removeAttr('drc');
        }
    });
});