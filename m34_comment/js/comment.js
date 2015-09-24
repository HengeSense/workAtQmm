$(function () {

    //敲回车自动保存
    document.onkeydown = function (moz_ev) {
        var ev = null;
        if (window.event) {
            ev = window.event
        } else {
            ev = moz_ev
        }
        if (ev != null && ev.ctrlKey && ev.keyCode == 13) {

            var comment_isFocus = $("#textareaComment").is(":focus");
            if (true == comment_isFocus) {
                $("#textCommentSubmit").click()
            }


            var quick_isFocus = $("#quickComment").is(":focus");
            if (true == quick_isFocus) {
                $("#textCommentSubmitQuick").click()
            }

        }
    };

    //快速回复
    commentQuickReply(".reply");

    //举报
    //showHide(".comment_list", "", ".jubao");

    visibleOrNot(".operate_box", ".noGoods", "visibility");
    visibleOrNot("blockquote", ".comment_action", "display");
    tab(".tab_comment_li", ".tab_info", "current_item", "click");
    openClose(".seaAll", "", "comments");
//    popUp("#textareaComment", "#pop-login", "");
//    popUp(".comment_tips", "#pop-login", "");
    //comment_share_to_sina("i.check");

    var txt3 = '"><i class="icon-loginright"></i> 提交成功。',
        txt4 = '"><i class="icon-loginright"></i> 提交成功。若您的评论未显示，不是小编手快删帖，而是您的评论需审核，请谅解',
        txt5 = '"><i class="icon-loginright"></i> 为维护良好讨论环境，新注册用户的评论需人工审核后再显示，请谅解',
        txt8 = '"><i class="icon-loginright"></i> <span class="red">你的投票已超过次数限制或未达到投票权限，该评论仅作为普通评论</span>',
        txt10 = '评论同步新浪微博失败，您尚未绑定微博账号，<span class="red" id="goback">4</span>秒后将带您进入微博授权页',

        $submit = $("#commentform #textCommentSubmit"),
        $submitQuickBtn = $("#commentquickform #textCommentSubmitQuick");

    //评论提交检查
    $("#commentform").submit(function () {
        if ($.trim($("#textareaComment").val()) == "" || $.trim($("#textareaComment").val()) == $("#textareaComment").attr("default_data")) {
            if ($("#error").is(":hidden")) {
                $("#error").html("您是不是忘了说点什么？").slideDown().delay(3000).slideUp()
            }
        } else {
            submit_comment(0)
        }
        return false
    });

    //快速回复评论提交检查
    $("#commentquickform").submit(function () {
        if ($.trim($("#quickComment").val()) == "" || $.trim($("#quickComment").val()) == $("#textareaComment").attr("default_data")) {
            if ($("#quick_error").is(":hidden")) {
                $("#quick_error").html("您是不是忘了说点什么？").slideDown().delay(3000).slideUp()
            }
        } else {
            submit_comment(1)
        }
        return false
    });



    var wait = 15,
        submit_val = $submit.html(),
        waitquick = 15,
        quick_submit_val = $submitQuickBtn.html();

    function countdown() {
        if (wait > 0) {
            $submit.html(wait);
            wait--;
            setTimeout(countdown, 1000)
        } else {
            $submit.html(submit_val).attr("disabled", false).removeClass("btn_subGrey").addClass("btn_sub").fadeTo("slow", 1);
            wait = 15
        }
    }
    function quickcountdown() {
        if (waitquick > 0) {
            $submitQuickBtn.html(waitquick);
            waitquick--;
            setTimeout(quickcountdown, 1000)
        } else {
            $submitQuickBtn.html(quick_submit_val).attr("disabled", false).removeClass("btn_subGrey").addClass("btn_sub").fadeTo("slow", 1);
            waitquick = 15
        }
    }
    function count_down(obj) {
        var secs = parseInt($(obj).html());
        if (secs > 0) {
            $(obj).html(secs - 1);
            setTimeout(function () {
                count_down(obj)
            }, 1000)
        }
        if (secs == 0) {
            $(".sub_Success").fadeOut();
            $("#cover").fadeOut()
        }
    }
    function submit_comment(isQuickSumit) {
        var errorContainerId = "error";
        var btn = $submit;
        var loadingImg = $("#loading");
        if (1 == isQuickSumit) {
            var formObj = $("#commentquickform");
            errorContainerId = "quick_error";
            btn = $submitQuickBtn;
            loadingImg = $("#loadingquick");
            btn.attr("disabled", true).removeClass("btn_sub").addClass("btn_subGrey").fadeTo("slow", 1)
        } else {
            var formObj = $("#commentform");
            btn.attr("disabled", true).removeClass("btn_sub").addClass("btn_subGrey").fadeTo("slow", 1)
        }
        loadingImg.show();
        $.ajax({
            type: "POST",
            url: "/comment/addcomment",
            data: formObj.serialize(),
            dataType: "html",
            success: function (html) {
                loadingImg.hide();
                $("#li_comment_new").after(html);
            }
        })
    }

//    func_atta();
//    func_report()
});

function func_atta(obj_name) {
    if (!obj_name || typeof(obj_name) == undefined) {
        obj_name = "#comment"
    }
    $(obj_name + " .atta").click(function () {

        if (!Youhui.common.user.checklogin()) return false;

        $(window).scrollTop($("#comments").offset().top - 50);
        var textcomment_obj = $("#textareaComment");
        if (textcomment_obj.length > 0) {
            var author = $(this).attr("title");
            var output = $.trim(textcomment_obj.val());
            if (output == default_data) {
                output = author + " "
            } else {
                var out_arr = output.split(" ");
                var flag = true;
                for (i = 0; i < out_arr.length; i++) {
                    if (author == out_arr[i]) {
                        flag = false;
                        break
                    }
                }
                if (flag) {
                    output = author + " " + output + " "
                } else {
                    output += " "
                }
            }
            textcomment_obj.focus().val(output);
            return true
        }

        return true
    })
}
function func_report(obj_name) {
    if (!obj_name || typeof(obj_name) == undefined) {
        obj_name = "#comment"
    }
    $(obj_name + " .jubao").each(function () {
        if ($(this).attr("id")) {
            var report_cid = $(this).attr("id").split("_")[1];
            if (report_cid == "" || report_cid == null || report_cid == "0") {
                return false
            }
            var result_json = getCookie(comment_report_cookiename);
            if (result_json) {
                var comment_report_cookie_list = json_decode(result_json);
                if (comment_report_cookie_list) {
                    for (var i in comment_report_cookie_list) {
                        if (comment_report_cookie_list[i] && comment_report_cookie_list[i] == report_cid) {
                            has_report_omment(report_cid)
                        }
                    }
                }
            }
        }
    }).click(function () {
        if ($(this).attr("id")) {
            var report_cid = $(this).attr("id").split("_")[1];
            if (report_cid == "" || report_cid == null || report_cid == "0") {
                return false
            }
            var boo_in_cookie = getBooInCookieArr1(comment_report_cookiename, report_cid);
            if (boo_in_cookie) {
                setCookieArr1(comment_report_cookiename, report_cid, 604800, "/", smzdm_domain);
                popUp("", "#pop-status-fail-twoLine", "您已经举报过了，我们正在处理，多谢反馈！");
                return false
            }
            var report_type = 1;
            var report_text = "";
            popPosition("#pop-report");
            $("#pop-report").show(function () {
                $(this).find("input[type='radio']").removeAttr("checked").click(function () {
                    var n = $(this).attr("id").split("_")[2];
                    report_type = n;
                    if (n == 9) {
                        $("#pop_report_opinion").show();
                        $("#pop_report_submit").attr("disabled", "disabled").removeClass("btn_login").addClass("btn_grey");
                        $("#pop_report_opinion").find("textarea").bind("keyup mouseup", function () {
                            var len = $(this).val().length;
                            report_text = $("#pop_report_opinion").find("textarea").val();
                            if (len >= 10) {
                                $("#pop_report_submit").removeAttr("disabled").removeClass("btn_grey").addClass("btn_login")
                            }
                        })
                    } else {
                        report_text = "";
                        if ($("#pop_report_opinion").is(":visible")) {
                            $("#pop_report_opinion").hide();
                            $("#pop_report_submit").removeAttr("disabled").removeClass("btn_grey").addClass("btn_login")
                        }
                    }
                })
            });
            $("#cover").show();
            popClose("#pop-report");
            $("#pop_report_submit").unbind("click").click(function () {
                $("#pop-report,#cover").hide();
                $("#pop_report_opinion").hide();
                $("#pop_report_opinion").find("textarea").val("");
                $.ajax({
                    type: "POST",
                    url: "/ajax_comment_report",
                    data: "type=" + report_type + "&content=" + report_text + "&cid=" + report_cid,
                    dataType: "json",
                    success: function (data) {
                        var result = eval(data);
                        if (0 == result.error_code) {
                            has_report_omment(report_cid);
                            setCookieArr1(comment_report_cookiename, report_cid, 604800, "/", smzdm_domain);
                            popUp("", "#pop-status-success", "举报成功！")
                        } else {
                            if (result.error_msg) {
                                popUp("", "#pop-status-fail", result.error_msg)
                            } else {
                                popUp("", "#pop-status-fail", "举报失败！")
                            }
                        }
                        return
                    }
                })
            });
            return
        }
    })
}
function has_report_omment(id) {
    $("#comment .tab_info .comment_listBox li #report_" + id).removeAttr("onclick").addClass("comment-report").html("已举报");
    return
}
function get_rating_num(licid, cid, isding) {
    var numID = "cdc_support_" + cid;
    if (0 == isding) {
        numID = "cdc_oppose_" + cid
    }
    var rs = $("#li_comment_" + licid + " #" + numID + ":first span").html();
    if (rs) {
        var st = rs.split("(")[1];
        rs = st.split(")")[0];
        (rs) ? rs = parseInt(rs) : rs = 0
    } else {
        rs = 0
    }
    return rs
}
function has_rating_omment(id, isding, dingnum, cainum) {
    if (1 == isding) {
        $("#comment .tab_info .comment_listBox li #cdc_support_" + id).removeAttr("onclick").addClass("current").html("顶<span>(" + dingnum + ")</span>");
        $("#comment .tab_info .comment_listBox li #cdc_oppose_" + id).removeAttr("onclick").removeClass("current")
    } else {
        $("#comment .tab_info .comment_listBox li #cdc_support_" + id).removeAttr("onclick").removeClass("current");
        $("#comment .tab_info .comment_listBox li #cdc_oppose_" + id).removeAttr("onclick").addClass("current").html("踩<span>(" + cainum + ")</span>")
    }
    return
}
function init_smile() {
    $(".icon-small").each(function () {
        $(this).click(function () {
            $(".smileLayerBg").hide();
            if ($(this).attr("isclick") == "1") {
                $(this).removeAttr("isclick")
            } else {
                $(".icon-small").each(function () {
                    $(this).removeAttr("isclick")
                });
                $(this).attr("isclick", "1");
                var layerP = $(this).parent();
                layerP.find(".smileLayerBg").show();
                layerP.find(".smileLayerBg .smileBox").hide().eq(0).show();
                layerP.find(".smileLayerBg .smilePage a").removeAttr("class").eq(0).attr("class", "current")
            }
        })
    });
    $(".smilePage a").click(function () {
        $(this).addClass("current").siblings().removeClass("current");
        $(".smileBox").hide().eq($(".smilePage a").index(this)).show()
    });
    $(".smileLayerBg li a").each(function () {
        $(this).click(function () {
            var temp_div = $(this).parent().parent().parent().parent();
            var textarea_obj = temp_div.parent().parent().find("textarea:first");
            temp_div.find(".smileLayerBg").css("display", "none");
            temp_div.find(".icon-small").removeAttr("isclick");
            var dstr = textarea_obj.attr("default");
            var str = textarea_obj.val();
            if (str == default_data) {
                str = ""
            }
            var sstr = str;
            if (dstr) {
                var sstr = str.replace(dstr, "")
            }
            textarea_obj.val(sstr);
            textarea_obj.insertContent($(this).attr("default-data"))
        })
    });
    return false
}

function comment_rating_ajax(type, rating, cid, pid, licid) {
    var dingnum = get_rating_num(licid, cid, 1);
    var cainum = get_rating_num(licid, cid, 0);
    var boo_in_cookie = getBooInCookieArr2(comment_rating_cookiename, cid);
    if (boo_in_cookie) {
        has_rating_omment(cid, rating, dingnum, cainum);
        setCookieArr2(comment_rating_cookiename, cid, rating, 604800, "/", smzdm_domain);
        alert("您已打分");
        return false
    }
    $.ajax({
        type: "POST",
        url: "/ajax_comment_rating",
        data: "cid=" + cid + "&rating=" + rating,
        dataType: "json",
        success: function (data) {
            var result = eval(data);
            if (rating == 0) {
                cainum = cainum + 1
            } else {
                dingnum = dingnum + 1
            }
            has_rating_omment(cid, rating, dingnum, cainum);
            if (0 == result.error_code) {
                setCookieArr2(comment_rating_cookiename, cid, rating, 604800, "/", smzdm_domain)
            }
            return
        }
    });
    return
}
function commentDelete(commentID, act) {
    var cid = commentID;
    if (window.confirm("确定删除该评论？")) {
        $.ajax({
            type: "POST",
            url: "/ajax_off_comment",
            data: "cid=" + cid + "&act=" + act,
            dataType: "json",
            success: function (data) {
                if (data.error_code == 0) {
                    $(".comment_listBox").find("#li_comment_" + cid).remove();
                    $(".comment_listBox").find("[blockquote_cid='" + cid + "']").remove();
                    popUp("", "#pop-status-success", "删除成功")
                }
            }
        })
    }
}(function ($) {
    $.fn.extend({
        insertContent: function (myValue, t) {
            var $t = $(this)[0];
            if (document.selection) {
                this.focus();
                var sel = document.selection.createRange();
                sel.text = myValue;
                this.focus();
                sel.moveStart("character", -l);
                var wee = sel.text.length;
                if (arguments.length == 2) {
                    var l = $t.value.length;
                    sel.moveEnd("character", wee + t);
                    t <= 0 ? sel.moveStart("character", wee - 2 * t - myValue.length) : sel.moveStart("character", wee - t - myValue.length);
                    sel.select()
                }
            } else {
                if ($t.selectionStart || $t.selectionStart == "0") {
                    var startPos = $t.selectionStart;
                    var endPos = $t.selectionEnd;
                    var scrollTop = $t.scrollTop;
                    $t.value = $t.value.substring(0, startPos) + myValue + $t.value.substring(endPos, $t.value.length);
                    this.focus();
                    $t.selectionStart = startPos + myValue.length;
                    $t.selectionEnd = startPos + myValue.length;
                    $t.scrollTop = scrollTop;
                    if (arguments.length == 2) {
                        $t.setSelectionRange(startPos - t, $t.selectionEnd + t);
                        this.focus()
                    }
                } else {
                    this.value += myValue;
                    this.focus()
                }
            }
        }
    })
})(jQuery);

function clearReplyCss() {
    $("#quickComment").val("");
    $(".textarea_quick").height("auto")
}
function commentQuickReply(obj) {
    $(obj).click(function () {

        if (!Youhui.common.user.checklogin()) return false;

        clearReplyCss();
        var reply_div = $("#quickReply");

        var parentid = 0;
        if ($(this).attr("id")) {
            parentid = $(this).attr("id").split("_")[2];
            if (parentid == "" || parentid == null || parentid == "0" || parentid == 0) {
                parentid = 0
            }

            //alert(parentid);

            reply_div.find("#parentid").val(parentid)
        }
        var blank_div = $(this).parent().parent(".comment_conWrap").find(".blankDiv");

        //if ($(blank_div).html() == "") {
        $(blank_div).html(reply_div);
        $("#quickReply").show();
        $(this).parent(".comment_action").css({
            display: "block",
            visibility: "visible"
        })
//            } else {alert("2");
//                $("#quickReplyDiv").html(reply_div)
//            }
    })
}
function visibleOrNot(target, parentObj, method) {
    $(target).hover(function () {
        if (method = "visibility") {
            $(this).children().find(parentObj).css("visibility", "visible")
        } else {
            if (method = "display") {
                $(this).children().find(parentObj).css("display", "block")
            }
        }
    }, function () {
        if (method = "visibility") {
            $(this).children().find(parentObj).css("visibility", "hidden")
        } else {
            if (method = "display") {
                $(this).children().find(parentObj).css("display", "none")
            }
        }
    })
}
