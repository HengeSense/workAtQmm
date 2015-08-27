$(function () {
    var div = $('#aj-mobile-search-module'),
        form = $('#aj-search-form'),
        contentBody = $('#aj-mobile-wrap');

    // search cookie
    (function () {
        var btn = div.find('.aj-search-input .aj-right'),
            recentSearch = div.find('.aj-recent-search-block'),
            input = div.find('.aj-s-i-wrap input'),
            cookieName = 'aj-wap-search-history';   // 保存用户搜索记录的cookie key值,value以 ","分隔
        // 记录保存
        form.on('submit', function () {
            var val = encodeURIComponent($.trim(input.val())),
                arr = [],
                bool = true, // default all values are unique
                cookie = Youhui.tools.cookie(cookieName);
            if (val === '') {
                return false;
            }
            if (cookie !== '') {
                arr = cookie.split(',');
            }
            arr.forEach(function (item) {
                if (item === val) {
                    bool = false;
                }
            });
            if (bool) {
                arr.push(val);
            }
            arr = arr.reverse().slice(0, 10).reverse();
            Youhui.tools.cookie(cookieName, arr.join(','), {
                expires : 10    //10 天后过期
            });
        });
        // submit form
        btn.on('click', function () {
            form.submit();
        });

        // 展现 recent search
        $(div).on('aj-show', function () {
            recentSearch.hide();
            var cookie = Youhui.tools.cookie(cookieName),
                wrap = recentSearch.find('.aj-self-hotkey'),
                span = document.createElement('span'),
                li = document.createElement('li'),
                arr = cookie.split(',');
            if (cookie === '') return false;
            recentSearch.show();
            arr = arr.reverse().slice(0, 10);   // qu最近搜索的10条记录
            arr.forEach(function (item) {
                var clone = $(li).clone();
                clone.html(decodeURIComponent(item));
                $(span).append(clone);
            });
            $(wrap).html(span);
        });
        // clear recent search
        recentSearch.on('click', '.aj-clear-recent-search-cookie', function () {
            Youhui.tools.cookie(cookieName, Youhui.tools.cookie(cookieName), {
                expires : -1
            });
            recentSearch.fadeOut();
        });
        // 点击单条记录
        recentSearch.on('click', '.aj-self-hotkey li', function () {
            searchThisWord($(this).text());
        });
        div.on('click', '.aj-sugges-hotkey li', function () {
            searchThisWord($(this).text());
        });
        function searchThisWord(val) {
            form[0]['keyword'].value = val;
            form.submit();
        }
    })();
    // types of search
    (function () {
        var btn = div.find('.aj-s-types'),
            name = btn.find('.aj-s-t-name'),
            wrap = div.find('.aj-s-types-list');
        // 初始化选择的type
        saveType();
        // 切换分类
        btn.on('click', function () {
            $(wrap).toggle();
        });
        wrap.on('click', '.aj-li', function (e) {
            e.stopPropagation();
            name.html($(this).html());
            wrap.hide();
            saveType();
        });
        // 记录用户选择的type
        function saveType(){
            wrap.find('.aj-li').each(function () {
                if ($(this).text() === name.text()) {
                    form[0]['type'].value = $(this).attr('aj-type-value');
                }
            });
        }
    })();
    // 商家,分类 等等area 折叠显示
    (function () {
        var wrap = div.find('.aj-nopading-blocks'),
            blocks = wrap.find('.aj-block'),
            arr = ['展示更多', '折叠当前'];
        $.each(blocks, function (index, item, arr) {
            var ul = $(this).find('.aj-ul'),
                lis = ul.find('.aj-li'),
                showMoreBtn = $(this).find('.aj-show-more');
            if (lis.length > 8) {
                showMoreBtn.show();
            }
        });
        wrap.find('.aj-show-more').on('click',function (e) {
            $(this).parents('.aj-content').find('.aj-ul').toggleClass('aj-no-max-height');
            $(this).html(arr[(arr.indexOf($(this).html()) + 1) % arr.length]);
        });
    })();
    //  show search page
    (function () {
        var btn = $('#top .login-wrapper');
//        btn.on('click', function (e) {
//            e.preventDefault();
//            if (div.css('display').toLowerCase() === 'none') {
//                showSearch();
//            } else {
//                hideSearch();
//            }
//        });
        showSearch();
        function showSearch(){
            div.show();
            contentBody.hide();
            $(div).trigger('aj-show');
        }
        function hideSearch(){
            div.hide();
            contentBody.show();
        }
    })();
});

// 演示代码
//$(function () {
//    var shops = [
//        'jd.jpg', 'yhd.jpg', 'amazon.jpg'
//    ];
//    var icons = [
//        'icon.jpg', 'icon2.jpg', 'icon3.jpg'
//    ];
//    var index = 0;
//    $('.aj-ul-only-img img').each(function () {
//        $(this).attr('src', 'search/' + shops[index % shops.length]);
//        index ++;
//    });
//    $('.aj-ul-default img').each(function () {
//        $(this).attr('src', 'search/' + icons[index % icons.length]);
//        index ++;
//    });
//});
