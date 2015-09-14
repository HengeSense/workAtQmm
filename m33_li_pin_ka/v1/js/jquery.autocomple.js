/**
 * jQuery鎻掍欢锛氳嚜鍔ㄥ畬鎴愭彁绀�
 *
 * @author  cntlis銆並arson浜屾淇敼
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
        iwidth: '0px', //涓嬫媺妗嗙殑瀹藉害
        iLengthLower: 1, //褰撹〃鍗曠殑闀垮害澶т簬iLengthLower灏忎簬iLengthUpper鏃舵墠寮€濮嬫墽琛屾悳绱�
        iLengthUpper: 50,
        method: "POST",         //浠ヤ粈涔堟柟娉曟彁浜ゆ暟鎹�
        strPara: "keyword", //鍙橀噺鍚嶇О
        dynamicPara: "", //鍔ㄦ€佸弬鏁�
        zIndex: 1, //鎻愮ず妗嗙殑Z-INDEX鍊�
        hasscroll: 0, //鏄惁鍑虹幇婊氬姩鏉�0鏃�1鏈�
        hasclose: 1, //鏄惁鎷ユ湁鍏抽棴绐楀彛
        success: function () { }, //鐐瑰嚮鎴栬€呭洖杞﹀悗鐨勫洖璋冨嚱鏁帮紝鍙繘琛岀畝鍗曞垽鏂�,json瀵硅薄杩斿洖 keyname,keyextend,keyrel
        error: function () { } //褰撴病鏈変换浣曡繑鍥炰俊鎭椂鎵ц
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
        strKeyBak = $("ul .selected .keyname", ac).text(); //涓篶lick浜嬩欢澧炲姞澶勭悊
        if (strKeyBak.length > 0 && strKeyBak != $(me).val()) {
            filldata(me);
        };
        floorHide();
    });
    var encode = function (v) {//濡傛灉鍖呭惈涓枃灏眅scape,閬垮厤閲嶅escape)
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
        if (code == 38 || code == 40 || code == 13 || code == 27 || code == 9) return;    //TAB/鍥炶溅銆丒SC銆佸悜涓娿€佸悜涓�
        if ((strKey == "" || strKeyNow != strKey) && strKeyNow.length >= iLengthLower && strKeyNow.length <= iLengthUpper) {
            $.ajax({
                type: doption.method,
                //dataType: "json",
                url: url,
                data: strPara != "" ? strData : "",
                success: function (html) {
                    if (html.length > 0) {

                        ac.html(html);

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
                        //娌℃湁鎼滅储鏁版嵁
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
        if (code == 27) { //ESC閿�
            floorHide();
        };
        if (code == 13) {//鍥炶溅閿�
            filldata(me); //涓昏鏄负浜嗚繘琛屽洖璋冨嚱鏁�,濂界粰鍓嶅彴涓€涓彁浜ょ殑浜嬩欢
            floorHide();
        }
        if (!isShow) return;
        var sel = $("ul .selected", ac);
        if (sel.length > 0) {	//濡傛灉宸茬粡鏈夐€夊畾
            if (code == 38) {	//鍚戜笂閿�
                if (sel.prev().text() != "") {	//濡傛灉涓嶆槸绗竴涓暟鎹�
                    sel.removeClass("selected").addClass("unselected").prev().removeClass("unselected").addClass("selected");
                    $(me).val($("ul .selected .keyname", ac).text());
                } else {
                    sel.removeClass("selected").addClass("unselected");
                    $(".keyinfo:last", ac).removeClass("unselected").addClass("selected");
                    $(me).val($("ul .selected .keyname", ac).text());
                }
            } else if (code == 40) {	//鍚戜笅閿�
                if (sel.next().text() != "") {	//濡傛灉涓嶆槸绗竴涓暟鎹�
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