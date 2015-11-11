/**
 * jQuery������Զ������ʾ
 *
 * @author  cntlis��Karson�����޸�
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
        iwidth: '0px', //������Ŀ��
        iLengthLower: 1, //�����ĳ��ȴ���iLengthLowerС��iLengthUpperʱ�ſ�ʼִ������
        iLengthUpper: 50,
        method: "POST",         //��ʲô�����ύ����
        strPara: "keyword", //��������
        dynamicPara: "", //��̬����
        zIndex: 1, //��ʾ���Z-INDEXֵ
        hasscroll: 0, //�Ƿ���ֹ�����0��1��
        hasclose: 1, //�Ƿ�ӵ�йرմ���
        success: function () { }, //������߻س���Ļص��������ɽ��м��ж�,json���󷵻� keyname,keyextend,keyrel
        error: function () { } //��û���κη�����Ϣʱִ��
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
        strKeyBak = $("ul .selected .keyname", ac).text(); //Ϊclick�¼����Ӵ���
        if (strKeyBak.length > 0 && strKeyBak != $(me).val()) {
            filldata(me);
        };
        floorHide();
    });
    var encode = function (v) {//����������ľ�escape,�����ظ�escape)
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
        if (code == 38 || code == 40 || code == 13 || code == 27 || code == 9) return;    //TAB/�س���ESC�����ϡ�����
        if ((strKey == "" || strKeyNow != strKey) && strKeyNow.length >= iLengthLower && strKeyNow.length <= iLengthUpper) {
            $.ajax({
                type: doption.method,
                //dataType: "json",
                url: url,
                data: strPara != "" ? strData : "",
                success: function (html) {
                    if (html.length > 0) {
                        var results = [];
                        results.push("<div class='aj-title'>����'" + strData.keyword + "'��ص��̳�</div>");
                        results.push(html);
                        results.push("<div class='aj-title'>����'" + strData.keyword + "'����Ż�ȯ</div>");
                        results.push("<div class='aj-title'>����'" + strData.keyword + "'���ֵ����</div>");
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
                        //û����������
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
        if (code == 27) { //ESC��
            floorHide();
        };
        if (code == 13) {//�س���
            filldata(me); //��Ҫ��Ϊ�˽��лص�����,�ø�ǰ̨һ���ύ���¼�
            floorHide();
        }
        if (!isShow) return;
        var sel = $("ul .selected", ac);
        if (sel.length > 0) {	//����Ѿ���ѡ��
            if (code == 38) {	//���ϼ�
                if (sel.prev().text() != "") {	//������ǵ�һ������
                    sel.removeClass("selected").addClass("unselected").prev().removeClass("unselected").addClass("selected");
                    $(me).val($("ul .selected .keyname", ac).text());
                } else {
                    sel.removeClass("selected").addClass("unselected");
                    $(".keyinfo:last", ac).removeClass("unselected").addClass("selected");
                    $(me).val($("ul .selected .keyname", ac).text());
                }
            } else if (code == 40) {	//���¼�
                if (sel.next().text() != "") {	//������ǵ�һ������
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