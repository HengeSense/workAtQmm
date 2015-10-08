$(function () {
    var config = {
        'li_className' : '.hover-ops'
    };
    var old = $('#old'),
        now = $('#new'),
        btn = $('#generate');
    btn.on('click', function () {
        var source;
        source = old.val();
        (function () {
            var div = document.createElement('div');
            div = $(div);
            div.html(source);
            div.find('.list-main.list-main-adj').each(function () {
                var val = $(this).html();
                $(this).html(renderUl(val));
                $(this).addClass('aj-homepage-shops');
            });
            now.val(div.html());
        })();

        function renderUl(inside){
            var div = document.createElement('div'),
                lis,
                arr = [];
            div = $(div);
            div.html(inside);
            lis = div.find(config['li_className']);
            lis.each(function () {
                var prop = {};
                prop.storeUrl = $(this).attr('quanlink');
                prop.outlink = $(this).attr('outlink');
                prop.href = $(this).find('.link-mall2:eq(0)').attr('href');
                prop.storeLogo = $(this).find('.link-mall2:eq(0) img').attr('arc');
                prop.storeName = $(this).find('.link-mall2:eq(0) img').attr('alt');
                prop.storeTitle = $(this).find('.link-mall2:eq(1)').text();

                arr.push(prop);
            });
            return renderArr(arr);
        }
    });

    function renderArr(arr){
        var content = '';
        arr.forEach(function (item) {
            content += render(item);
        });
        return content;
    }
    function render(prop){
        var back = '';
        back += '<li class="shop"><a class="a1" href="'+ prop.href + '" target="_blank" title="' + prop.storeName + '">'+
            '<img class="img" alt="' + prop.storeName + '" src="' + prop.storeLogo + '">' +
                '<span class="sp1">'+ prop.storeTitle + '</span> </a><span class="zujian">' +
            '<div class="a2-wrap">'+
                '<a href="' + prop.outlink+ '" class="a2 buy" target="_blank">去购物</a>'+
                '<a href="' + prop.storeUrl + '" class="a2 quan" target="_blank">优惠券</a>' +
            '</span></li>';
        return back;
    }
});