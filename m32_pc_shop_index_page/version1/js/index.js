$(function () {
    function Nav(){
        this.div = $('#aj-top-nav-f-j');
        this.left = $('#aj-left-side-f-j');
        this.config();
        this.fixedTop();
        this.fenlei();
        this.gridList();
        this.filter();
//        this.viewNum();
    }
    Nav.prototype = {
        config : function () {
            this.fixedTopVal = 32;
        },
        fixedTop : function () {
            var timer,      // for scroll
                timer2,     // for resize
                top,
                left,
                $this = this;
            top = $this.div.offset().top;
            left = $this.div.offset().left;
            $(window).on('scroll', function() {
                if (!timer) {
                    timer = setTimeout(function () {
                        if (top - $this.fixedTopVal <= $(document.body).scrollTop()) {
                            $this.div.css({
                                position : 'fixed',
                                top : $this.fixedTopVal + 'px',
                                left : left + 'px',
                                zIndex : 9999
                            });
                        } else {
                            $this.div.css({position : 'static'});
                            left = $this.div.offset().left;
                        }
                        timer = 0;
                    }, 200);
                }
            });
//            $(window).on('resize', function () {
//                if (!timer2)  {
//                    timer2 = setTimeout(function () {
//                        left = $this.div.offset().left;
//                        timer2 = 0;
//                    }, 200)
//                }
//            });
        },
        fenlei : function () {
            var aTags = this.div.find('.fenlei .a-tag'),
                id,
                aim,
                prop = {};
            this.div.on('click', '.fenlei .a-tag', function (e) {
                e.preventDefault();
                // style
                style(this);
                // scroll
                //scroll(this);
            });
            function style(obj) {
                if ($(this).hasClass('aj-select')) return false;
                $(aTags).removeClass('aj-select');
                $(obj).addClass('aj-select');
            }
            function scroll(obj) {
                id = $(obj).attr('href');
                if (prop[id]) {
                    aim = prop[id];
                } else {
                    aim = $(id);
                }
                if (aim) {
                    $(document.body).animate({
                        scrollTop : aim.offset().top - 110  + 'px'
                    });
                }
            }
        },
        gridList : function (){
            var aTags = this.div.find('.layout .aj-a'),
                listClassName = 'aj-grid-to-list-wrap',
                $this = this,
                type; // grid or list
            aTags.each(function () {
                if ($(this).hasClass('aj-select')) {
                    type = $(this).attr('aj-type');
                    return false;
                }
            });
            // self style
            this.div.on('click', '.layout .aj-a', function () {
                $(this).addClass('aj-select').siblings().removeClass('aj-select');
                type = $(this).attr('aj-type');
                changeGridList();
            });
            // change grid list style
            changeGridList();
            function changeGridList(){
                if (type === 'list') {
                    $this.left.addClass(listClassName);
                } else {
                    $this.left.removeClass(listClassName);
                }
            }
        },
        filter : function () {
            var aTags = this.div.find('.prorank .aj-a'),
                obj,
                filter = this.div.find('.filter');
                arr = ['qmm-icon-iconfont-down', 'qmm-icon-iconfont-top'];
            // style
            this.div.on('click', '.prorank .aj-a', function () {
                if ($(this).hasClass('aj-more-filter')) {
                    if ($(this).hasClass('aj-select')) {
                        filter.slideToggle();
                    } else {
                        filter.slideDown();
                    }
                } else {
                    filter.hide();
                }

                if ($(this).hasClass('aj-select')) {
                    obj = $(this).find('em');
                    $.each(arr, function (index, item) {
                        if (obj.hasClass(item)) {
                            obj.removeClass(item).addClass(arr[(index + 1) % arr.length]);
                            return false;
                        }
                    });
                } else {
                    $(this).addClass('aj-select').siblings().removeClass('aj-select');
                }
            });
        },
        viewNum : function() {
            var aTags = this.div.find('.displaynum .aj-a');
            this.div.on('click', '.displaynum .aj-a', function () {
                $(this).addClass('aj-select').siblings().removeClass('aj-select');
            });
        }
    };
    new Nav();
});