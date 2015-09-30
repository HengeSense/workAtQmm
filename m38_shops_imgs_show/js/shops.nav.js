$(function () {
    function Nav(div) {
        this.div = div;
        this.init();
    }
    Nav.prototype = {
        init : function () {
            this.exchange();
            this.yanshi();
        },
        exchange : function () {
            this.div.on('click', 'li', function () {
                $(this).addClass('aj-select').siblings().removeClass('aj-select');
            });
        },
        yanshi : function () { // 演示
            var num = 20,
                ul,
                li;
            ul = this.div.find('.shops .sps-all');
            li = ul.find('li');
            while(num --) {
                ul.append(li.clone());
            }
        }
    };
    var div = $('.aj-shops-show');
    if (div.length > 0) {
        new Nav(div);
    }
});



