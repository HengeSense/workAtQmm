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
            this.fixedTop();
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
            this.div.css({
                width : this.div.width() + 'px'
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
        },
        fixedTop : function () {
            var timer = 0,
                offset = this.div.offset(),
                top = offset.top,
                left = offset.left,
                increment = 32,
                scrollTop,
                that = this;
            $(document).on('scroll', function () {
                if (!timer) {
                    timer = setTimeout(function () {
                        if (that.div.css('position') === 'static') {
                            top = that.div.offset().top;
                        }
                        scrollTop = $(document.body).scrollTop();
                        if (scrollTop + increment >= top) {
                            that.div.addClass('aj-fixed');
                        } else {
                            that.div.removeClass('aj-fixed');
                        }
                        timer = 0;
                    }, 200);
                }
            });
            $(that.div).on('aj.rollTop', function () {
                $(document.body).animate({
                    scrollTop : top - 100 + 'px'
                });
            });
            $(that.div).on('click', '.j_load', function () {
                $(that.div).trigger('aj.rollTop');
            });
        }
    };
    var div = $('.aj-pc-nav-o-o'),
        obj;
    if (div.length > 0) {
        obj = new Nav(div);
    }
});