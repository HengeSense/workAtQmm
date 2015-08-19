$(function () {
    var shopIndex = $('#aj-shop-index-page'),
        lis,
        i,
        blocks,
        divEle;
    if (shopIndex.length === 0) return false;
    lis = shopIndex.find('.aj-nav .aj-li');
    lis.each(function () {
        $(this).css('width', Math.floor(1 / lis.length * 100) + '%');
    });
    for (i = 1; i < lis.length; i++){
        divEle = document.createElement('div');
        $(divEle).attr('class', 'aj-block');
        $(divEle).html('<div class="newLoading"></div>');
        shopIndex.find('.aj-s-mid').append(divEle);
    }
    blocks = shopIndex.find('.aj-s-mid .aj-block');
    lis.on('click', function () {
        $(this).addClass('aj-select').siblings().removeClass('aj-select');
        blocks.eq($(this).index()).show().siblings().hide();
    });
    // sort line
    (function () {
        var showTypes,
            sortBtn;
        sortBtn = shopIndex.find('.aj-li-sort-type');
        sortBtn.on('click', function (e) {
            e.stopPropagation();
        });
        sortBtn.on('click', '.aj-s-t-wrap', function (e) {
            sortBtn.toggleClass('aj-hover');
        });
        sortBtn.on('click', '.aj-l-s-t-i-u-li', function (e) {
            e.stopPropagation();
            sortBtn.find('.aj-s-t-wrap').html($(this).html());
            sortBtn.removeClass('aj-hover');
        });
        $(document.body).on('click', function () {
            sortBtn.removeClass('aj-hover');
        });
        shopIndex.find('.aj-sort .aj-li-js').on('click', function () {
            $(this).addClass('aj-select').siblings().removeClass('aj-select');
        });
        showTypes = ['qmm-icon-view_list', 'qmm-icon-iconfont-qita'];
        shopIndex.find('.aj-sort .aj-li-show-type').on('click', function () {
            var span = $(this).find('span[class^="qmm-icon"]'),
                className = span.attr('class'),
                index = $.inArray(className, showTypes);
            if (index !== -1) {
                span.removeClass(className).addClass(showTypes[(index + 1) % showTypes.length]);
            }
            toggleShowStyle();
        });
        function toggleShowStyle(){
            shopIndex.find('.aj-s-mid').toggleClass('aj-show-style-grid');
        }
    })();
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