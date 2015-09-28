$(function () {
    var is_inited = 0,
        zdmListForDuplicateCheck = [],
        isThisPageHaveAnyMoreLis = true; //该页是否有更多列表项
    var prop = {
        url : "/myajax/youhuipage",         // ajax请求地址
        backItemClassName : 'div.list',     // 返回的list的选择器
        container : '.aj-ajaxdata-wrap',    // 返回的list装入的容器
        clickParent : '#aj-ajaxdata',       // 导航点击ajax的容器
        delayArea : '.aj-delay-area',       // ajax时要遮盖并显示"转转"的区域选择器
        dataBindTag : '.j_load',             // data-params 所绑定的Tag的选择器
        pagesDelter : 4,                     // 每四页从"滚动ajax"切换到"点击ajax"
        bottomWhenAjax : 900,                // 当滚动至距离页面底部900px以下时触发ajax事件
        delayDivClassName : 'delay-roll-' + rand(),   // "转转转"样式div的classname
        delayShadowClassName : 'delay-shadow-' + rand(),     // ajax时的遮罩层
        clickToAjaxClassName : 'getmore-' + rand()         // 点击ajax的className
    };
    function rand() {
        return Math.round(Math.random() * 10000);
    }
    function initZdmListForDuplicateCheck() {
        if (is_inited == 0) {
            $(prop.backItemClassName).each(function () {
                var zdm_id = parseInt($(this).attr("data-id"));
                if (zdm_id > 0 && zdmListForDuplicateCheck.indexOf(zdm_id) < 0) {
                    zdmListForDuplicateCheck.push(zdm_id);
                }
            });
            is_inited = 1;
        }
    }
    function Load(youhuiParams, successCallback) {
        youhuiParams = (typeof youhuiParams == 'object') ? youhuiParams : {};
        var ajaxData = $.extend({}, Qmm_config.youhuiInfo, youhuiParams);
        console.log(ajaxData);
        $.ajax({
            type: "get",
            url: prop.url,
            data: ajaxData,
            dataType: "html",
            success: function (html) {
                Qmm_config.youhuiInfo = ajaxData;
                var backNum = $(html).find(prop.backItemClassName).length,
                    cnt,
                    responseContainer = $(prop.container);
                console.log(backNum);
                if (backNum < ajaxData.pagesize) {
                    $("." + prop.clickToAjaxClassName).hide();
                    isThisPageHaveAnyMoreLis = false;
                    $(prop.container).append("<div class='aj-no-more-content-pc' style='clear: both;text-align: center;padding: 15px;font-size: 15px;color:#666;'>没有更多内容了</div>");
                }
                if (backNum === 0 && parseInt(ajaxData.page) === 1) {
                    $(prop.container).load("/html/AJ/noContentPageForWap.htm");
                }
                if (backNum > 0) {
                    initZdmListForDuplicateCheck();
                    cnt = 0;
                    if (parseInt(Qmm_config.youhuiInfo.page) === 1) {
                        zdmListForDuplicateCheck = [];
                    }
                    $(html).find(prop.backItemClassName).each(function () {
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
                $(prop.container).append('<p class="center" style="padding:30px 0;">很抱歉, 您的网络可能有点问题, 或者<a id="ajaxErrorRetry">重试</a></p>');
            }
        });
    }
    // 点击导航的分页ajax 效果
    (function () {
        var div = $(prop.clickParent);
        if (div.length <= 0) { return false; }
        var ajaxConfig,
            isAjaxNow = false,
            delayContainer = $(prop.delayArea);
        div.on('click', prop.dataBindTag, function (e) {
            e.preventDefault();
            var params = $(this).attr("data-params");
            if (params.length > 0) {
                ajaxConfig = resetYouhuiObj(params);
                ajaxFunc(ajaxConfig);
            }
        });
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
                Load(ajaxConfig, function () {
                    isAjaxNow = false;
                    hideDelay();
                });
            }
        }
        function showDelay() {
            if (!delayContainer.hasClass('aj-has-add-delay-module')) {
                if (delayContainer.css('position').toLowerCase() === 'static') {
                    delayContainer.css({
                        position: 'relative'
                    });
                }
                delayContainer.addClass('aj-has-add-delay-module');
                delayContainer.append('<div class="aj-ajax-delay-shadow ' + prop.delayShadowClassName +
                    '"><img src="http://www.quanmama.com/AdminImageUpload/20148150838532.jpg"></div>');
            }
            delayContainer.find('.' + prop.delayShadowClassName).show();
        }
        function hideDelay(container) {
            delayContainer.hasClass('aj-has-add-delay-module') && delayContainer.find('.' + prop.delayShadowClassName).hide();
        }
    }());
    // 滚动, 点击 ajax 部分
    (function () {
        var win = window,
            doc = document,
            isAjaxNow = false,
            timer,
            container = $(prop.delayArea),
            delter;
        // 每多少页手动点击ajax
        if (typeof Qmm_config === 'undefined') return false;
        var howManyPagesThenClick = prop.pagesDelter;
        $(win).on('scroll', function () {
            if (!timer) {
                timer = setTimeout(function () {
                    timer = 0;
                    if (!isThisPageHaveAnyMoreLis){
                        return false;
                    }
                    if (isCloseBottom()) {
                        if (needAjax()) {
                            ajax();
                            hideClickModule();
                        } else {
                            addAjaxByClickModule();
                            showClickModule();
                        }
                    }
                }, 200);
            }
        });
        function isCloseBottom() {
            delter = $(doc.body).height() - $(win).scrollTop() - $(win).height();
            if (delter <= prop.bottomWhenAjax) {
                return true;
            } else {
                return false;
            }
        }
        function needAjax() {
            if (parseInt(Qmm_config.youhuiInfo.page) % howManyPagesThenClick !== 0) {
                return true;
            } else {
                return false;
            }
        }
        function addAjaxByClickModule() {
            if (!container.hasClass('aj-ajax-by-click')) {
                container.addClass('aj-ajax-by-click');
                container.append("<div class='getmore aj-getmore-by-click " + prop.clickToAjaxClassName + "'>加载更多</div>");
            }
        }
        function hideClickModule() {
            $('.' + prop.clickToAjaxClassName).hide();
        }
        function showClickModule() {
            $('.' + prop.clickToAjaxClassName).show();
        }
        container.on('click', '.' + prop.clickToAjaxClassName, function () {
            ajax();
        });
        function showDelay() {
            if (!container.hasClass('aj-has-add-delay-img')){
                container.addClass('aj-has-add-delay-img');
                container.append("<div class='aj-delay-div-inside " + prop.delayDivClassName  + "'><img  class='img' " +
                    "src='http://www.quanmama.com/AdminImageUpload/20148150838532.jpg'></div>");
            }
            container.find("." + prop.delayDivClassName).slideDown();
        }
        function hideDelay() {
            container.find('.' + prop.delayDivClassName).fadeOut();
        }
        function ajax() {
            var ajaxConfig;
            if (!isAjaxNow) {
                ajaxConfig  = {};
                isAjaxNow = true;
                showDelay();
                if (Qmm_config.youhuiInfo) {
                    Load(Qmm_config.youhuiInfo, function () {
                        isAjaxNow = false;
                        hideDelay();
                    });
                }
            }
        }
    }());
});