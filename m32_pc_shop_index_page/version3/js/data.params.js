$(function () {
    var is_inited = 0,
        zdmListForDuplicateCheck = [],
        isThisPageHaveAnyMoreLis = true; //该页是否有更多列表项
    var prop = {
        url : "/myajax/youhuipage",
        backItemClassName : 'div.list',
        container : '.aj-ajaxdata-wrap',
        clickParent : '#aj-ajaxdata',
        delayArea : '.aj-delay-area'
    };
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
    function youhuiListLoad(youhuiParams, successCallback, moreConfig) {
        youhuiParams = (typeof youhuiParams == 'object') ? youhuiParams : {};
        var ajaxData = $.extend({}, Qmm_config.youhuiInfo, youhuiParams);
        console.log(ajaxData);
        var otherConfig = {
            container: prop.container,
            listSelector: prop.backItemClassName
        };
        otherConfig = $.extend(otherConfig, moreConfig);
        $.ajax({
            type: "get",
            url: prop.url,
            data: ajaxData,
            dataType: "html",
            success: function (html) {
                Qmm_config.youhuiInfo = ajaxData;
                var backNum = $(html).find(otherConfig.listSelector).length,
                    cnt,
                    responseContainer = $(otherConfig.container);
                console.log(backNum);
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
                    $(html).find(otherConfig.listSelector).each(function () {
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
        var div = $(prop.clickParent);
        if (div.length <= 0) { return false; }
        var ajaxConfig,
            isAjaxNow = false,
            delayContainer = $(prop.delayArea);
        div.on('click', '.j_load', function (e) {
            e.preventDefault();
            var params = $(this).attr("data-params");
            if (params.length > 0) {
                ajaxConfig = resetYouhuiObj(params);
                ajaxFunc(ajaxConfig);
            }
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
            if (!delayContainer.hasClass('aj-has-add-delay-module')) {
                if (delayContainer.css('position').toLowerCase() === 'static') {
                    delayContainer.css({
                        position: 'relative'
                    });
                }
                delayContainer.addClass('aj-has-add-delay-module');
                delayContainer.append('<div class="aj-delay-module-for-pc" style="position: absolute;z-index:100;background-color:white;' +
                    'opacity:0.6;filter:alpha(opacity=60);width:100%;height: 100%;top:0;left: 0"><img style="position: absolute;top:100px;left: 50%;margin-left: -25px;width:50px;height: 50px;" src="http://www.quanmama.com/AdminImageUpload/20148150838532.jpg"></div>');
            }
            delayContainer.find('.aj-delay-module-for-pc').show();
        }
        function hideDelay(container) {
            delayContainer.hasClass('aj-has-add-delay-module') && delayContainer.find('.aj-delay-module-for-pc').hide();
        }
    }());

    // 滚动, 点击 ajax 部分
    (function () {
        var win = window,
            doc = document,
            isAjaxNow = false,
            timer,
            container = $(".aj-ajaxdata-wrap"),
            delter;
        // 每多少页手动点击ajax
        if (typeof Qmm_config === 'undefined') return false;
        var howManyPagesThenClick = Qmm_config.youhuiInfo.howManyPagesThenClick || 4;
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
            if (delter <= 900) {
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
                container.append("<div class='getmore aj-getmore-by-click'>加载更多</div>");
            }
        }
        function hideClickModule() {
            $('.aj-getmore-by-click').hide();
        }
        function showClickModule() {
            $('.aj-getmore-by-click').show();
        }
        container.on('click', '.aj-getmore-by-click', function () {
            ajax();
        });
        function showDelay() {
            container.append("<div class='aj-delay-div-inside'><img  class='img' " +
                "src='http://www.quanmama.com/AdminImageUpload/20148150838532.jpg'></div>");

        }
        function hideDelay() {
            container.find('.aj-delay-div-inside').remove();
        }
        function ajax() {
            var ajaxConfig;
            if (!isAjaxNow) {
                ajaxConfig  = {};
                isAjaxNow = true;
                showDelay();
                if (Qmm_config.youhuiInfo) {
                    youhuiListLoad(Qmm_config.youhuiInfo, function () {
                        isAjaxNow = false;
                        hideDelay();
                    });
                }
            }
        }
    }());
});