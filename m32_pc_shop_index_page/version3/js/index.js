$(function () {
    function Nav() {
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
        config: function () {
            this.fixedTopVal = 32;
        },
        fixedTop: function () {
            var timer,      // for scroll
                timer2,     // for resize
                top,
                left,
                wrapDiv = $('#aj-left-side-f-j'),
                $this = this;
            top = $this.div.offset().top;
            left = wrapDiv.offset().left;
            $(window).on('scroll', function () {
                if (!timer) {
                    timer = setTimeout(function () {
                        if (top - $this.fixedTopVal <= $(window).scrollTop()) {
                            fixedPosition();
                        } else {
                            $this.div.css({ position: 'static' });
                            left = wrapDiv.offset().left;
                        }
                        timer = 0;
                    }, 200);
                }
            });
            $(window).on('resize', function () {
                if (!timer2) {
                    timer2 = setTimeout(function () {
                        left = wrapDiv.offset().left;
                        timer2 = 0;
                        if (top - $this.fixedTopVal <= $(window).scrollTop()) {
                            fixedPosition();
                        }
                    }, 200);
                }
            });
            function fixedPosition() {
                $this.div.css({
                    position: 'fixed',
                    top: $this.fixedTopVal + 'px',
                    left: left + 'px',
                    zIndex: 9999
                });
            }
        },
        fenlei: function () {
            var aTags = this.div.find('.fenlei .a-tag'),
                layout_list = this.div.find('.layout .aj-list'),
                id,
                aim,
                $this = this,
                jiluLayout,       // 记录选择发现之前选择的分类样式
                prop = {};
            this.div.on('click', '.fenlei .a-tag', function (e) {
                //e.preventDefault();
                // style
                style(this);
                toggleLayout();
                // scroll
                //scroll(this);
            });
            toggleLayout();
            function toggleLayout(){     // 对于 发现 按钮,隐藏显示方式按钮
                var obj = $this.div.find('.fenlei .a-tag.aj-select');
                if ($.trim($(obj).text()) === '发现') {
                    $this.gridList('grid');
                    layout_list.hide();
                } else {
                    layout_list.show();
                }
            }
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
                        scrollTop: aim.offset().top - 110 + 'px'
                    });
                }
            }
        },
        getGridorlistName : function() {
            var tags = this.div.find('.layout .aj-a.aj-select');
            if (tags.length > 0) {
                return tags.attr('aj-type');
            } else {
                return undefined;
            }
        },
        gridList: function (typeValue) {
            var aTags = this.div.find('.layout .aj-a'),
                listClassName = 'aj-grid-to-list-wrap',
                listToGridClass = 'aj-list-to-grid-wrap',
                $this = this,
                type = typeValue; // grid or list
            aTags.each(function () {
                if (type === undefined) {
                    if ($(this).hasClass('aj-select')) {
                        type = $(this).attr('aj-type');
                        return false;
                    }
                } else {
                    if ($(this).attr('aj-type').toLowerCase() === typeValue.toLowerCase()) {
                        aTags.removeClass('aj-select');
                        $(this).addClass('aj-select');
                        return false;
                    }
                }
            });
            // self style
            this.div.on('click', '.layout .aj-a', function () {
                $(this).addClass('aj-select').siblings().removeClass('aj-select');
                type = $(this).attr('aj-type');
//                changeGridList();
                changeListToGrid();
            });
            // change grid list style
//            changeGridList();
//            function changeGridList() {
//                if (type === 'list') {
//                    $this.left.addClass(listClassName);
//                } else {
//                    $this.left.removeClass(listClassName);
//                }
//            }
            // 2015-09-17 改版后不使用ul 渲染视图,使用首页的div渲染
            // 所以要求把 list 强制转换成 Grid, 使用css
            changeListToGrid();
            function changeListToGrid() {
                if (type === 'list') {
                    $this.left.removeClass(listToGridClass);
                } else {
                    $this.left.addClass(listToGridClass);
                }
            }
        },
        filter: function () {
            var aTags = this.div.find('.prorank .aj-a'),
                obj,
                filter = this.div.find('.filter');
            arr = ['qmm-icon-iconfont-down', 'qmm-icon-iconfont-top'];
            // style
            this.div.on('click', '.prorank .aj-a', function (ev) {
                ev.stopPropagation();
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
            filter.on('click', function (e) {
                e.stopPropagation();
            });
            $(document.body).on('click', function () {
                filter.slideUp();
            });
        },
        viewNum: function () {
            var aTags = this.div.find('.displaynum .aj-a');
            this.div.on('click', '.displaynum .aj-a', function () {
                $(this).addClass('aj-select').siblings().removeClass('aj-select');
            });
        }
    };
    new Nav();
});