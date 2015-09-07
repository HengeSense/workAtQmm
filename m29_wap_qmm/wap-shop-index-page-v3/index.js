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
    // 调整 top banner img 宽度 : 高度 = 3.5
    shopIndex.find('.aj-s-top').css({
        height : shopIndex.width() / 3.5 + 'px'
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

    // nav select
    (function () {
        var sort = shopIndex.find('.aj-sort'),
            beforeAfter = 'aj-li-ba-bg',
            filterChoice = sort.find('.aj-s-u-filter .aj-choice-name'),
            filterName = filterChoice.text(),     // 保存筛选的名称
            selectClass = "qmm-icon-iconfont-check";

        sort.on('click', '.aj-so-ul li.aj-s-u-li', function () {
            if ($(this).hasClass('aj-has-block')) {
                $(this).toggleClass(beforeAfter).siblings().removeClass(beforeAfter);
                showRelativeBlock($(this).attr('aj-for'), $(this).hasClass(beforeAfter));
            } else {
                $(this).siblings().removeClass(beforeAfter);
                sort.find('.aj-s-b-wrap .aj-s-b').hide();
            }
        });
        function showRelativeBlock(className, isShow) {
            if (isShow) {
                sort.find('.' + className).toggle().siblings().hide();
            } else {
                sort.find('.aj-s-b').hide();
            }
        }
        sort.on('click', '.aj-s-left li.aj-has-block', function () {
            var uls = $(this).parents('.aj-s-b').find('.aj-s-right .aj-ul');
            $(this).addClass('aj-select').siblings().removeClass('aj-select');
            uls.removeClass('aj-select').eq($(this).index()).addClass('aj-select');
        });
        sort.on('click', '.aj-s-right .aj-ul .aj-li', function () {
            if (!$(this).hasClass('aj-select')) {
                hide($(this).parents('.aj-s-b'));
            }
            choice(this);
            navShowChoice(this);
            $(this).find('span').addClass(selectClass);
            $(this).toggleClass('aj-select').siblings().removeClass('aj-select');
        });
        function choice(obj) {  // 在li上显示选择的名称
            if (!$(obj).hasClass('aj-select')) {    // 点击之前className还没有aj-select值
                sort.find('.aj-s-left li.aj-has-block.aj-select .aj-choice').html($(obj).text());
            } else {
                sort.find('.aj-s-left li.aj-has-block.aj-select .aj-choice').html('');
            }
        }
        function navShowChoice(obj) { //专门提供给filter用的逻辑 -> 点击选项后在导航上显示
            if ($(obj).parents('.aj-s-b.aj-s-b-f-filter').length > 0) {
                if ($(obj).hasClass('aj-select')) {
                    if ($(obj).text() == filterChoice.text()) {
                        filterChoice.text(filterName);
                    }
                } else {
                    filterChoice.text($(obj).text());
                }
            }
        }
        function hide(obj){ // 隐藏obj与小滑块
            sort.find('.aj-so-ul .aj-has-block').each(function () {
                if (obj.hasClass($(this).attr('aj-for'))) {
                    $(this).removeClass(beforeAfter);
                }
            });
            obj.hide();
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