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


//--------------------------------------------------------------------
$(function () {
    var is_inited = 0;
    var zdmListForDuplicateCheck = [];
    var isThisPageHaveAnyMoreLis = true; //该页是否有更多列表项
    function initZdmListForDuplicateCheck() {
        if (is_inited == 0) {
            $(".zdm_list_li").each(function () {
                var zdm_id = parseInt($(this).attr("data-id"));
                if (zdm_id > 0 && zdmListForDuplicateCheck.indexOf(zdm_id) < 0) {
                    zdmListForDuplicateCheck.push(zdm_id);
                }
            });
            is_inited = 1;
        }
    }
    function youhuiListLoad(youhuiParams, successCallback, moreConfig) {
        youhuiParams = (typeof youhuiParams == 'object') ? youhuiParams : {};
        var ajaxData = $.extend({}, Qmm_config.youhuiInfo, youhuiParams);
        console.log(ajaxData);
        var otherConfig = {
            container : '#J_zhide_list'
        };
        otherConfig = $.extends(otherConfig, moreConfig);
        $.ajax({
            type: "get",
            url: "/myajax/mobileYouhuiListPage",
            data: ajaxData,
            dataType: "html",
            success: function (html) {
                Qmm_config.youhuiInfo = ajaxData;
                var backNum = $(html).find(".zdm_list_li").length,
                    cnt,
                    responseContainer = $(otherConfig.container);
                if (backNum < ajaxData.pagesize) {
                    $(".loadMore").hide();
                    $(".aj-getmore-by-click").hide();
                    isThisPageHaveAnyMoreLis = false;
                }
                if (backNum === 0 && parseInt(ajaxData.page) === 1) {
                    $(".list_preferential").load("/html/AJ/noContentPageForWap.htm");
                }
                if (backNum > 0) {
                    initZdmListForDuplicateCheck();
                    cnt = 0;
                    if (parseInt(Qmm_config.youhuiInfo.page) === 1) {
                        zdmListForDuplicateCheck = [];
                    }
                    $(html).find(".list").each(function () {
                        var now_zdm_id = parseInt($(this).attr("data-id"));
                        if (now_zdm_id > 0 && zdmListForDuplicateCheck.indexOf(now_zdm_id) < 0) {
                            zdmListForDuplicateCheck.push(now_zdm_id);
                            if (Qmm_config.youhuiInfo.page == 1 && cnt == 0) {
                                responseContainer.html($(this).prop("outerHTML"));
                            }
                            else {
                                responseContainer.append($(this).prop("outerHTML"));
                            }
                            cnt += 1;
                        }
                    });
                }
                Qmm_config.youhuiInfo.page = parseInt(Qmm_config.youhuiInfo.page, 10) + 1;
                successCallback && successCallback();
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $(".pagination").before('<p class="center" style="padding:30px 0;">很抱歉，您的网络可能有点问题，请尝试使用翻页浏览方式，或者<a id="ajaxErrorRetry">重试</a></p>');
            }
        });
    }
    (function () {
        var div = $(document);
        if (div.length <= 0) { return false; }
        var ajaxConfig,
            isAjaxNow = false;
        div.on('click', '.j_load', function () {
            var params = $(this).attr("data-params");
            ajaxConfig = resetYouhuiObj(params);
            ajaxFunc(ajaxConfig);
        });
        //------------------------------
        function resetYouhuiObj(params) {
            var prop = {},  // string to object
                one,
                result,
                i,
                arr = params.split(";");
            for (i = 0; i < arr.length; i++) {
                one = arr[i].split('=');
                if (one.length > 0) {
                    prop[one[0]] = one[1];
                }
            }
            result = $.extend({}, Qmm_config.pageInfo, prop);
            return result;
        }
        function ajaxFunc(ajaxConfig) {
            if (!isAjaxNow) {
                showDelay();
                isAjaxNow = true;
                if (parseInt(ajaxConfig.page, 10) === 1) {
                    isThisPageHaveAnyMoreLis = true;
                }
                youhuiListLoad(ajaxConfig, function () {
                    isAjaxNow = false;
                    hideDelay();
                });
            }
        }
        function showDelay() {
            $('#aj-delay-page').show();
        }
        function hideDelay() {
            $('#aj-delay-page').hide();
        }
    }());
});
