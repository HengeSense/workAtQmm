$(function () {
    function Nav(div) {
        this.div = div;
        this.init();
    }
    Nav.prototype = {
        init : function () {
            this.event();
            this.resize();
            this.hideMoreIfNoMore();
        },
        event : function () {
            var that = this;
            this.div.on('click', '.ul-js .li-js', function () {
                $(this).addClass('aj-select').siblings().removeClass('aj-select');
                $(that.div).find('.li-more').removeClass('aj-select');
            });
            this.div.on('click', '.li-more .ul-w-li a', function () {
                that.chooseThis(this)
            });
        },
        resize : function () {
            var ul = this.div.find('.ul-wrap'),
                lis = ul.find('.ul-w-li'),
                width = lis.eq(0).outerWidth(),
                cols;
            cols = Math.floor(lis.length / 2);
            cols = cols < 1 ? 1 : cols;
            cols = cols > 4 ? 4 : cols;
            ul.css({
                width : cols *  width + 'px'
            });
        },
        chooseThis : function (from) {
            $(from).parents('.li-more').addClass('aj-select').find('.wrap .span').html($(from).html());
            this.div.find('.li-js').removeClass('aj-select');
        },
        hideMoreIfNoMore : function () {
            if (!this.isMoreInLiMore()) {
                this.div.find('.ul-right').hide();
            }
        },
        isMoreInLiMore : function () {
            return this.div.find('li.li-more .ul-wrap .ul-w-li').length > 0 ? true : false;
        }
    };
    var div = $('.aj-pc-nav'),
        obj;
    if (div.length > 0) {
        obj = new Nav(div);
    }
});