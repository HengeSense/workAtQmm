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
            container : '#J_zhide_list',
            listSelector : 'div.list'
        };
        otherConfig = $.extend(otherConfig, moreConfig);
        $.ajax({
            type: "get",
            url: "/myajax/youhuipage",
            data: ajaxData,
            dataType: "html",
            success: function (html) {
                Qmm_config.youhuiInfo = ajaxData;
                var backNum = $(html).find(otherConfig.listSelector).length,
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
        var div = $('#aj-top-nav-f-j');
        if (div.length <= 0) { return false; }
        var ajaxConfig,
            isAjaxNow = false,
            delayContainer  = $('.aj-delay-area');
        div.on('click', '.j_load', function (e) {
            e.preventDefault();
            var params = $(this).attr("data-params");
            if (params.length > 0) {
                ajaxConfig = resetYouhuiObj(params);
                ajaxFunc(ajaxConfig);
                $('#aj-top-nav-f-j').trigger("aj.rollTop");
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
            if (!delayContainer.hasClass('aj-has-add-delay-module')){
                if (delayContainer.css('position').toLowerCase() === 'static'){
                    delayContainer.css({
                        position : 'relative'
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
});
