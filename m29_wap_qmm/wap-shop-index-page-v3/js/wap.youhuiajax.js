$(function () {
    var div = $("#aj-shop-index-page");
    var ajaxConfig,
        isAjaxNow = false;
    function resetYouhuiObj(params)
    {
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

    div.find('.aj-nav .aj-li').click(function () {
        var params = $(this).attr("data-params");

        ajaxConfig = resetYouhuiObj(params);

        ajaxFunc(ajaxConfig);
    });
    div.find('.aj-sort .aj-so-ul .aj-li-js').click(function() {
        var params = $(this).attr("data-params");
        ajaxConfig = resetYouhuiObj(params);


        ajaxFunc(ajaxConfig);
    });
    function ajaxFunc(ajaxConfig) {
        if (!isAjaxNow) {
            showDelay();
            isAjaxNow = true;
            youhuiListLoad(ajaxConfig, function () {
                isAjaxNow = false;
                hideDelay();
            });
        }else {
            console.log("Is ajax now!");
        }
    }
    function showDelay(){
        $('#aj-delay-page').show();
    }
    function hideDelay(){
        $('#aj-delay-page').hide();
    }
});