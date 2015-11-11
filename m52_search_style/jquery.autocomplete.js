/**
 * jQuery插件：自动完成提示
 *
 * @author  cntlis、Karson二次修改
 * @url     http://blog.csdn.net/cntlis
 * @name    jquery.autocomplete.js
 * @since   2011-5-18 17:30:50
 */
$.fn.autocomplete = function (url, option) {
    var me = this;
    var strKey = $(me).val();
    var strKeyBak = "";
    var isShow = false;
    var doption = {
        iwidth: '0px', //下拉框的宽度
        iLengthLower: 1, //当表单的长度大于iLengthLower小于iLengthUpper时才开始执行搜索
        iLengthUpper: 50,
        method: "POST",         //以什么方法提交数据
        strPara: "keyword", //变量名称
        dynamicPara: "", //动态参数
        zIndex: 1, //提示框的Z-INDEX值
        hasscroll: 0, //是否出现滚动条0无1有
        hasclose: 1, //是否拥有关闭窗口
        success: function () { }, //点击或者回车后的回调函数，可进行简单判断,json对象返回 keyname,keyextend,keyrel
        error: function () { } //当没有任何返回信息时执行
    };
    $.extend(doption, option);
    var iLengthLower = doption.iLengthLower;
    var iLengthUpper = doption.iLengthUpper;
    var strPara = doption.strPara;
    if ($("#autocomplete").length < 1) {
        $("body").append("<div id='autocomplete' class='autocomplete'></div>");
    }
    var ac = $("#autocomplete");
    ac.hide();

    $(me).on('keyup', function (e) {

        keysearch(e.keyCode);
    });
    $(me).on('keydown', function (e) {

        LineSelect(e.keyCode);
    });
    $(me).bind("blur", function () {
        strKeyBak = $("ul .selected .keyname", ac).text(); //为click事件增加处理
        if (strKeyBak.length > 0 && strKeyBak != $(me).val()) {
            filldata(me);
        };
        floorHide();
    });
    var encode = function (v) {//如果包含中文就escape,避免重复escape)
        return v;
        return escape(v).replace(/\+/g, '%2B').replace(/\"/g, '%22').replace(/\'/g, '%27').replace(/\//g, '%2F');
    }

    function floorHide() {
        ac.hide().html("");
        strKey = "";
        isShow = false;
    }
    function floorShow() {
        var p = $(me).offset();
        var w = (doption.iwidth == "0px") ? $(me).width() + 12 : doption.iwidth;
        ac.css({
            'z-index:': doption.zIndex,
            width: w,
            top: parseInt(p.top + $(me).outerHeight()) + "px",
            left: parseInt(p.left) + "px"
        }).show();
        strKey = "";
        isShow = true;
    }
    function keysearch(code) {
        var strKeyNow = $(me).val();
        var strData = {
            keyword: strKeyNow
        };

        $("#new-suggest").hide();

        $(doption.dynamicPara).each(function (d) {
            eval("strData." + $(this).attr("name") + "='" + $(this).val() + "';");
        });
        if (code == 38 || code == 40 || code == 13 || code == 27 || code == 9) return;    //TAB/回车、ESC、向上、向下
        if ((strKey == "" || strKeyNow != strKey) && strKeyNow.length >= iLengthLower && strKeyNow.length <= iLengthUpper) {
            $.ajax({
                type: doption.method,
                //dataType: "json",
                url: url,
                data: strPara != "" ? strData : "",
                success: function (html) {
                    if (html.length > 0) {
                        var results = [];
                        results.push("<div class='aj-title'>搜索'" + strData.keyword + "'相关的商城</div>");
                        results.push(html);
                        results.push("<div class='aj-title'>搜索'" + strData.keyword + "'相关优惠券</div>");
                        results.push("<div class='aj-title'>搜索'" + strData.keyword + "'相关值得买</div>");
                        ac.html(results.join(""));

                        $(".keyinfo", ac).mouseover(function () {
                            $(".selected", ac).removeClass("selected");
                            $(this).removeClass("unselected").addClass("selected");
                        }).mouseout(function () {
                            $(this).removeClass("selected").addClass("unselected");
                        }).click(function () {
                            if (strKeyBak.length() > 0) {
                                filldata(me);
                            }
                        });
                        floorShow();
                    } else {
                        //没有搜索数据
                        floorHide();
                        return;
                    }
                }
            });
            strKey = $(me).val();
        }
        if (strKey.length == 0 || strKey.length <= iLengthLower || strKey.length >= iLengthUpper) floorHide();
    }
    function filldata(obj) {
        var kw = $("ul .selected .keyname", ac).text();
        var ke = $("ul .selected .keyextend", ac).text();
        var kr = $("ul .selected", ac).attr('rel');
        if (isShow && kw != '') {
            $(obj).val(kw);
            var data = {
                'keyword': kw,
                'keyextend': ke,
                'keyrel': kr
            };
            doption.success(data);
        } else {
            doption.error($(obj).val());
        }
    }
    function LineSelect(code) {
        if (code == 27) { //ESC键
            floorHide();
        };
        if (code == 13) {//回车键
            filldata(me); //主要是为了进行回调函数,好给前台一个提交的事件
            floorHide();
        }
        if (!isShow) return;
        var sel = $("ul .selected", ac);
        if (sel.length > 0) {	//如果已经有选定
            if (code == 38) {	//向上键
                if (sel.prev().text() != "") {	//如果不是第一个数据
                    sel.removeClass("selected").addClass("unselected").prev().removeClass("unselected").addClass("selected");
                    $(me).val($("ul .selected .keyname", ac).text());
                } else {
                    sel.removeClass("selected").addClass("unselected");
                    $(".keyinfo:last", ac).removeClass("unselected").addClass("selected");
                    $(me).val($("ul .selected .keyname", ac).text());
                }
            } else if (code == 40) {	//向下键
                if (sel.next().text() != "") {	//如果不是第一个数据
                    sel.removeClass("selected").addClass("unselected").next().removeClass("unselected").addClass("selected");
                    $(me).val($("ul .selected .keyname", ac).text());
                } else {
                    sel.removeClass("selected").addClass("unselected");
                    $(".keyinfo:first", ac).removeClass("unselected").addClass("selected");
                    $(me).val($("ul .selected .keyname", ac).text());
                }
            }
        } else if (code == 38) {
            $(".keyinfo:last", ac).removeClass("unselected").addClass("selected");
            $(me).val($(".keyinfo:last .keyname", ac).text());
        } else if (code == 40) {
            $(".keyinfo:first", ac).removeClass("unselected").addClass("selected");
            $(me).val($(".keyinfo:first .keyname", ac).text());
        }
    }
}