//$(function () {
//    function Nav(div) {
//        this.div = div;
////        this.init();
//    }
//    Nav.prototype = {
//        init : function () {
//            this.exchange();
////            this.yanshi();
//        },
//        exchange : function () {
//            this.div.on('click', 'li', function () {
//                $(this).addClass('aj-select').siblings().removeClass('aj-select');
//            });
//            var ul = this.div.find('.sps-all'),
//                status = ['status-show', 'status-hide'];
//            this.div.on('click', '.toggle-more', function () {
//                if ($(this).hasClass('status-hide')) {
//                    ul.addClass('height-auto');
//                    $(this).removeClass('status-hide').addClass('status-show');
//                } else {
//                    ul.removeClass('height-auto');
//                    $(this).removeClass('status-show').addClass('status-hide');
//                }
//            });
//        },
//        yanshi : function () { // 演示
//            var num = 20,
//                ul,
//                li;
//            ul = this.div.find('.shops .sps-all');
//            li = ul.find('li');
//            while(num --) {
//                ul.append(li.clone());
//            }
//        }
//    };
//    var div = $('.aj-shops-show');
//    if (div.length > 0) {
//        new Nav(div);
//    }
//});

$(function () {
    var div = $('.aj-shops-show'),
        to,
        from;
    if (div.length > 0) {
        to = div.find('.aj-ul-more .li-show-more a');
        from = div.find('.aj-ul-more .ul-inside .li.aj-select');
        if (from.length > 0) {
            to.html(from.find('a').html());
            to.parent('.li').addClass('aj-select');
        }
        NoShopsTishi();
    }
    function NoShopsTishi(){
        var ul = div.find('.aj-body ul.sps-all');
        if (ul.find('.shop').length === 0) {
            ul.append("<p style='text-align: center;padding: 20px 0;'>该分类下没有相关商家</p>");
        }
    }
});



