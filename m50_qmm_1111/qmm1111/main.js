var smzdm_domain = "http://www.smzdm.com/resources/public/js/.smzdm.com";
var smzdm_www = "http://www.smzdm.com/";
var smzdm_haitao = "http://haitao.smzdm.com/";
var smzdm_faxian = "http://faxian.smzdm.com/";
var smzdm_jingyan = "http://jingyan.smzdm.com/";
var smzdm_news = "http://news.smzdm.com/";
var smzdm_show = "http://shaiwu.smzdm.com/";
var smzdm_test = "http://test.smzdm.com/";
var smzdm_qingdan = "http://qingdan.smzdm.com/";
var smzdm_yuanchuang = "http://post.smzdm.com/";
var cookie_length_limit = 20;
var comment_report_cookiename = "comment_report";
window.comment_report_cookie_list;
var comment_rating_cookiename = "comment_rating";
window.comment_rating_cookie_list;
var youhui_collection = smzdm_www + "/user/collection";
var faxian_collection = smzdm_www + "/user/love";
var show_collection = smzdm_www + "/user/show_love";
var jingyan_collection = smzdm_www + "/user/jy_love";
var haitao_collection = smzdm_www + "/user/haitao_love";
var news_collection = smzdm_www + "/user/news_love";
var test_collection = smzdm_www + "/user/test_love";
var yuanchuang_collection = smzdm_www + "/user/post_love";
var no_avatar = "default_small.png"/*tpa=http://res.smzdm.com/images/header/default_small.png*/;
var ad_scroll = 2;
var StringBuilder = function(b) {
    this.s = new Array(b);
    this.onMultiAppendBeforeHandle = null ;
    this.onMultiAppendBefore = function(c) {
        this.onMultiAppendBeforeHandle = c;
        return this;
    }
    ;
    this.append = function(c) {
        this.s.push(c);
        return this;
    }
    ;
    this.toString = function() {
        return this.s.join("");
    }
    ;
    this.clear = function() {
        this.s = new Array();
    }
    ;
    this.appendMultiFormat = function(d, e) {
        if (typeof (e) == "object") {
            for (var c in e) {
                if (this.onMultiAppendBeforeHandle != null ) {
                    this.onMultiAppendBeforeHandle(e[c]);
                }
                this.appendFormat(d, e[c]);
            }
        }
        return this;
    }
    ;
    this.appendFormat = function() {
        var p = arguments.length;
        if (p == 0) {
            return this;
        }
        var l = arguments[0];
        if (p == 1) {
            return this.append(l);
        }
        var d = arguments[1];
        if (d == null ) {
            d = "";
        }
        var h, m, o, g, j;
        if (typeof (d) == "object") {
            j = function(c, e) {
                return c[1][e];
            }
            ;
        } else {
            j = function(c, e) {
                return c[e - 0 + 1];
            }
            ;
        }
        for (h = 0; h < l.length; ) {
            o = l.charAt(h);
            if (o == "{") {
                m = l.indexOf("}", h);
                g = l.substring(h + 1, m);
                this.s.push(j(arguments, g));
                h = m + 1;
                continue;
            }
            this.s.push(o);
            h++;
        }
        return this;
    }
    ;
}
;
function Base64() {
    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    this.encode = function(d) {
        var b = "";
        var l, j, g, k, h, f, e;
        var c = 0;
        d = _utf8_encode(d);
        while (c < d.length) {
            l = d.charCodeAt(c++);
            j = d.charCodeAt(c++);
            g = d.charCodeAt(c++);
            k = l >> 2;
            h = ((l & 3) << 4) | (j >> 4);
            f = ((j & 15) << 2) | (g >> 6);
            e = g & 63;
            if (isNaN(j)) {
                f = e = 64;
            } else {
                if (isNaN(g)) {
                    e = 64;
                }
            }
            b = b + _keyStr.charAt(k) + _keyStr.charAt(h) + _keyStr.charAt(f) + _keyStr.charAt(e);
        }
        return b;
    }
    ;
    this.decode = function(d) {
        var b = "";
        var l, j, g;
        var k, h, f, e;
        var c = 0;
        d = d.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (c < d.length) {
            k = _keyStr.indexOf(d.charAt(c++));
            h = _keyStr.indexOf(d.charAt(c++));
            f = _keyStr.indexOf(d.charAt(c++));
            e = _keyStr.indexOf(d.charAt(c++));
            l = (k << 2) | (h >> 4);
            j = ((h & 15) << 4) | (f >> 2);
            g = ((f & 3) << 6) | e;
            b = b + String.fromCharCode(l);
            if (f != 64) {
                b = b + String.fromCharCode(j);
            }
            if (e != 64) {
                b = b + String.fromCharCode(g);
            }
        }
        b = _utf8_decode(b);
        return b;
    }
    ;
    _utf8_encode = function(d) {
        d = d.replace(/\r\n/g, "\n");
        var b = "";
        for (var f = 0; f < d.length; f++) {
            var e = d.charCodeAt(f);
            if (e < 128) {
                b += String.fromCharCode(e);
            } else {
                if ((e > 127) && (e < 2048)) {
                    b += String.fromCharCode((e >> 6) | 192);
                    b += String.fromCharCode((e & 63) | 128);
                } else {
                    b += String.fromCharCode((e >> 12) | 224);
                    b += String.fromCharCode(((e >> 6) & 63) | 128);
                    b += String.fromCharCode((e & 63) | 128);
                }
            }
        }
        return b;
    }
    ;
    _utf8_decode = function(b) {
        var d = "";
        var e = 0;
        var f = c1 = c2 = 0;
        while (e < b.length) {
            f = b.charCodeAt(e);
            if (f < 128) {
                d += String.fromCharCode(f);
                e++;
            } else {
                if ((f > 191) && (f < 224)) {
                    c2 = b.charCodeAt(e + 1);
                    d += String.fromCharCode(((f & 31) << 6) | (c2 & 63));
                    e += 2;
                } else {
                    c2 = b.charCodeAt(e + 1);
                    c3 = b.charCodeAt(e + 2);
                    d += String.fromCharCode(((f & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                    e += 3;
                }
            }
        }
        return d;
    }
    ;
}
var smzdm_user_view = getCookie("smzdm_user_view");
if (smzdm_user_view == "" || smzdm_user_view == null  || smzdm_user_view == "1") {
    var expiresTimes = 20 * 60 * 1000;
    var guid = guidGenerator();
    setCookie("smzdm_user_view", guid, expiresTimes, "/", "http://www.smzdm.com/resources/public/js/.smzdm.com");
}
var smzdm_user_source = getCookie("smzdm_user_source");
if (smzdm_user_source == "" || smzdm_user_source == null  || smzdm_user_view == "1") {
    var expiresTimes = 2 * 365 * 24 * 60 * 60 * 1000;
    var guid = guidGenerator();
    setCookie("smzdm_user_source", guid, expiresTimes, "/", "http://www.smzdm.com/resources/public/js/.smzdm.com");
}
function guidGenerator() {
    var b = function() {
        return (((1 + Math.random()) * 65536) | 0).toString(16).substring(1);
    }
    ;
    return (b() + b() + b() + b() + b() + b() + b() + b()).toUpperCase();
}
function tab(b, c, d, e) {
    if (e == "click") {
        $(b).click(function() {
            $(this).addClass(d).siblings().removeClass(d);
            $(c).hide().eq($(b).index(this)).show();
        }
        );
    } else {
        if (e == "hover") {
            $(b).mouseover(function() {
                $(this).addClass(d).siblings().removeClass(d);
                $(c).hide().eq($(b).index(this)).show();
            }
            );
        }
    }
}
function listIntoGraphic(b) {
    $(b).find("li").mouseover(function() {
        $(this).removeClass("listItem").addClass("listCurrent").siblings().removeClass("listCurrent").addClass("listItem");
    }
    );
}
function showHide(d, c, e) {
    var b;
    $(document).on("mouseover", d, function() {
        $(this).addClass(c);
        $(this).find(e).show();
        clearTimeout(b);
    }
    );
    $(document).on("mouseout", d, function() {
        b = setTimeout(function() {
            $(d).removeClass(c);
            $(d).find(e).hide();
        }
        , 1);
    }
    );
}
function showHideClick(b, c) {
    $(b).unbind("click").click(function() {
        var d = $(this).parent().find(c);
        if (d.is(":hidden")) {
            d.css("display", "block");
        } else {
            d.css("display", "none");
            d.find("i.i_checkbox").show().removeClass("icon-loginkuangright").removeClass("icon-rightframe");
            d.find(".checkbox_hide").removeAttr("checked");
            d.find(":text").each(function() {
                var e = $(this).attr("default_value");
                $(this).val(e);
                $(this).css("color", "#999");
            }
            );
            d.find(".link_box").each(function() {
                var e = $(this).find(":button").val();
                if (e == "-") {
                    $(this).remove();
                }
            }
            );
        }
        if ($(this).find("i").hasClass("icon-rightframe")) {
            $(this).find("i").removeClass("icon-rightframe");
            $(this).find("i").prev().removeAttr("checked");
        } else {
            $(this).find("i").addClass("icon-rightframe");
            $(this).find("i").prev().attr("checked", "true");
        }
    }
    );
}
function openClose(c, b, g) {
    if (g == "mallNav") {
        $(c).click(function() {
            $(this).prev().css("height", "auto");
            $(this).hide();
            $(this).next("a").show();
        }
        );
        $(b).click(function() {
            $(this).parent().find("ul").css("height", "64px");
            $(this).hide();
            $(this).prev("a").show();
        }
        );
    } else {
        if (g == "comments") {
            var f = $("blockquote").length;
            for (var d = 0; d < f; d++) {
                var e = $(c).prev(".comment_con").eq(d).height();
                if (parseInt($(c).prev(".comment_con").eq(d).height()) > 120) {
                    $(c).prev(".comment_con").eq(d).height(120);
                    $(c).eq(d).css("display", "block");
                } else {
                    $(c).eq(d).css("display", "none");
                }
            }
            $(c).click(function() {
                $(this).prev().css({
                    "height": "auto",
                    "max-height": "100%"
                });
                $(this).hide();
            }
            );
        }
    }
}
function indexTagChange() {
    var b;
    $(".cateBlock , .more_cate").hover(function() {
        var c;
        if ($(this).hasClass("cateBlock")) {
            c = $(this).index(".cateBlock");
        } else {
            c = $(this).index(".more_cate");
        }
        clearTimeout(b);
        $(".cateBlock").eq(c).addClass("cateCurrent").siblings().removeClass("cateCurrent");
        $(".more_cate").hide().eq(c).show();
    }
    , function() {
        var c;
        if ($(this).hasClass("cateBlock")) {
            c = $(this).index(".cateBlock");
        } else {
            c = $(this).index(".more_cate");
        }
        b = setTimeout(function() {
            $(".cateBlock").eq(c).removeClass("cateCurrent");
            $(".more_cate").eq(c).hide();
        }
        , 200);
    }
    );
}
function popPosition(f) {
    var e = $(window).width();
    var c = $(window).height();
    var b = $(f).width();
    var d = $(f).height();
    $(f).css({
        left: e / 2 - b / 2,
        top: c / 2 - d / 2
    });
}
function popClose(b) {
    $(b).find(".pop-close").click(function() {
        $("#cover").hide();
        $(b).hide();
    }
    );
    $("#cover").click(function() {
        $("#cover").hide();
        $(b).hide();
    }
    );
}
function popUp(d, e, b) {
    if (d != "") {
        $(d).click(function() {
            popPosition(e);
            $("#cover").show();
            $(e).show();
            popClose(e);
        }
        );
    } else {
        $(e).find(".pop_info").text(b);
        popPosition(e);
        $("#cover").show();
        $(e).show();
        var c = setTimeout(function() {
            $("#cover").hide();
            $(e).hide();
        }
        , 2000);
        $(e).find(".pop-close").click(function() {
            clearTimeout(c);
            $("#cover").hide();
            $(e).hide();
        }
        );
        $("#cover").click(function() {
            clearTimeout(c);
            $("#cover").hide();
            $(e).hide();
        }
        );
    }
}
function noMoreList() {
    if ($(".listNoMore").length == 0) {
        $(".leftWrap .list:last").after('<p class="listNoMore">没有更多文章了</p>');
    }
    scrollUnbind();
}
function more_link(b) {
    $(b).hover(function() {
        $(this).css("z-index", "6").find(".more_buy").show();
        $(this).find(".icon-down").removeClass().addClass("icon-up");
    }
    , function() {
        $(this).css("z-index", "2").find(".more_buy").hide();
        $(this).find(".icon-up").removeClass().addClass("icon-down");
    }
    );
}
function indexListLoad() {
    scrollUnbind();
    var b = $(".leftWrap .list:last").attr("timesort");
    $(".loadingPic").css("display", "block");
    $.ajax({
        type: "get",
        url: "/json_more",
        data: "timesort=" + b,
        dataType: "json",
        success: function(aj) {
            $(".loadingPic").css("display", "none");
            var aa = aj.length;
            if (aa > 0) {
                for (var ae = 0; ae < aa; ae++) {
                    var W = aj[ae].article_id;
                    var S = aj[ae].article_channel_id;
                    var ak = aj[ae].timesort;
                    var Q = aj[ae].article_title;
                    var g = typeof (aj[ae].article_title_height_light) != undefined ? aj[ae].article_title_height_light : "";
                    var v = aj[ae].article_content;
                    var af = aj[ae].article_date;
                    var l = aj[ae].article_url;
                    var U = aj[ae].article_channel;
                    var d = aj[ae].article_channel_url;
                    var u = aj[ae].article_comment;
                    var h = aj[ae].article_collection;
                    var N = aj[ae].article_pic;
                    var C = aj[ae].article_pic_style;
                    var ah = aj[ae].article_referrals;
                    var T = aj[ae].article_category;
                    var O = aj[ae].article_tese_tags;
                    var s = ""
                      , D = ""
                      , p = ""
                      , K = ""
                      , Z = ""
                      , B = ""
                      , M = "";
                    var f = '<a href="' + l + '#comments" class="comment" target="_blank" title="评论"><i class="icon-comment"><!--[if lt IE 8]>评论<![endif]--></i>' + u + "</a>";
                    var y = '<a id="collect_' + S + "_" + W + '" href="javascript:void(0);" onclick="ajax_collect(' + W + "," + S + ',this);" class="fav" title="收藏"><i class="icon-collect"><!--[if lt IE 8]>收藏<![endif]--></i><em>' + h + "</em></a>";
                    var z = 'articleid="' + S + "_" + W + '"';
                    if (T.title != "" || O.length > 0) {
                        if (T.title != "" && T.title != undefined) {
                            var w = T.category_url;
                            var H = T.title;
                            K += '<a href="' + w + '">' + H + "</a>";
                        }
                        if (O.length > 0) {
                            var al = O.length;
                            for (var ac = 0; ac < al; ac++) {
                                var c = O[ac].tag_url;
                                var q = O[ac].name;
                                Z += '<a href="' + c + '">' + q + "</a>";
                            }
                        }
                        if (K != "" || Z != "") {
                            p = "<span>标签：" + K + Z + "</span>";
                        }
                    }
                    if (S == 1 || S == 5) {
                        var P = aj[ae].article_price;
                        var o = aj[ae].article_mall;
                        var ai = aj[ae].article_mall_url;
                        var G = aj[ae].article_is_sold_out;
                        var V = aj[ae].article_is_timeout;
                        var t = aj[ae].article_worthy;
                        var R = aj[ae].article_unworthy;
                        var e = aj[ae].article_link;
                        var Y = aj[ae].article_link_list;
                        var L = '<a id="rating_worthy_' + W + '" href="javascript:void(0);" onclick="rating(' + W + ",1," + S + ');" class="good"><span class="scoreTotal"><b>值</b> <em>' + t + '</em></span><span class="scoredInfo">已打分</span><span class="scoreAnimate">+1</span></a>';
                        var I = '<a id="rating_unworthy_' + W + '" href="javascript:void(0);" onclick="rating(' + W + ",2," + S + ');" class="bad"><span class="scoreTotal"><b>不值</b> <em>' + R + '</em></span><span class="scoredInfo">已打分</span><span class="scoreAnimate">+1</span></a>';
                        if (ah != "") {
                            M = "<span>推荐人：" + ah + "</span>";
                        } else {
                            M = "";
                        }
                        if (V != 0) {
                            s = '<div class="list timeOut" timesort="' + ak + '" ' + z + '><div class="listTitle"><span class="icon">过期</span>';
                        } else {
                            if (G != 0) {
                                s = '<div class="list soldOut" timesort="' + ak + '" ' + z + '><div class="listTitle"><span class="icon">售罄</span>';
                            } else {
                                if (V == 0 && G == 0) {
                                    s = '<div class="list" timesort="' + ak + '" ' + z + '><div class="listTitle"><a class="icon" href="' + d + '">' + U + "</a>";
                                }
                            }
                        }
                        if (Y != "" && e != null ) {
                            var ag = Y.length;
                            for (var ad = 0; ad < ag; ad++) {
                                var r = Y[ad].link;
                                var x = Y[ad].name;
                                if (U == "优惠" || U == "海淘") {
                                    var m = aj[ae].taobao_url;
                                    if (Y[ad]["taobao_url"]["is_taobao"]) {
                                        D += '<li><a isconvert="1" href="' + r + '" title="' + x + '" target="_blank">' + x + "</a></li>";
                                    } else {
                                        D += '<li><a href="' + r + '" title="' + x + '" target="_blank">' + x + "</a></li>";
                                    }
                                } else {
                                    D += '<li><a href="' + r + '" title="' + x + '" target="_blank">' + x + "</a></li>";
                                }
                            }
                            var ab = aj[ae].top_category;
                            var A = aj[ae].domain;
                            var E = "";
                            if (U == "优惠") {
                                E = "onclick=\"ga('send', 'event','电商','国内_门户页_" + ab + "_列表_直达链接_" + A + "','" + W + "_" + Q + "');\"";
                            }
                            if (U == "海淘") {
                                E = "onclick=\"ga('send', 'event','电商','海外_门户页_" + ab + "_列表_直达链接_" + A + "','" + W + "_" + Q + "');\"";
                            }
                            if (U == "优惠" || U == "发现") {
                                var m = aj[ae].taobao_url;
                                if (m["is_taobao"]) {
                                    B = '<div class="buy"><a isconvert="1" href="' + e + '" ' + E + ' target="_blank">直达链接<i class="icon-down"></i></a><ul class="more_buy">' + D + "</ul></div>";
                                } else {
                                    B = '<div class="buy"><a href="' + e + '" ' + E + ' target="_blank">直达链接<i class="icon-down"></i></a><ul class="more_buy">' + D + "</ul></div>";
                                }
                            } else {
                                B = '<div class="buy"><a href="' + e + '" ' + E + ' target="_blank">直达链接<i class="icon-down"></i></a><ul class="more_buy">' + D + "</ul></div>";
                            }
                        } else {
                            if (Y == "" && e != null  && e != "") {
                                var ab = aj[ae].top_category;
                                var A = aj[ae].domain;
                                var E = "";
                                if (U == "优惠") {
                                    E = "onclick=\"ga('send', 'event','电商','国内_门户页_" + ab + "_列表_直达链接_" + A + "','" + W + "_" + Q + "');\"";
                                }
                                if (U == "海淘") {
                                    E = "onclick=\"ga('send', 'event','电商','海外_门户页_" + ab + "_列表_直达链接_" + A + "','" + W + "_" + Q + "');\"";
                                }
                                if (U == "优惠" || U == "发现") {
                                    var m = aj[ae].taobao_url;
                                    if (m["is_taobao"]) {
                                        B = '<div class="buy"><a isconvert="1" href="' + e + '" ' + E + ' target="_blank">直达链接<i>&gt;</i></a></div>';
                                    } else {
                                        B = '<div class="buy"><a href="' + e + '" ' + E + ' target="_blank">直达链接<i>&gt;</i></a></div>';
                                    }
                                } else {
                                    B = '<div class="buy"><a href="' + e + '" ' + E + ' target="_blank">直达链接<i>&gt;</i></a></div>';
                                }
                            } else {
                                if (Y == "" && e == "") {
                                    B = "";
                                }
                            }
                        }
                        var F = "";
                        if (o != "") {
                            if (ai != "") {
                                F = '<a href="' + ai + '" class="mall">' + o + "</a>";
                            } else {
                                F = '<span class="mall">' + o + "</span>";
                            }
                        }
                        $(".leftWrap .list:last").after(s + '<h4 class="itemName"><a target="_blank" href="' + l + '">' + Q + '<span class="red">' + P + '</span></a></h4><div class="clear"></div></div><a title="' + Q + '" class="picLeft" target="_blank" href="' + l + '"><img src="' + N + '" alt="' + Q + '"' + C + '/></a><div class="listRight"><div class="lrTop"><span class="lrTime">' + af + "</span>" + M + p + '</div><div class="lrInfo"><p>' + v + '<a href="' + l + '" target="_blank" title="阅读全文">阅读全文</a></p></div><div class="lrBot">' + L + I + y + f + '<div class="botPart">' + B + F + '</a></div><div class="clear"></div></div></div><div class="clear"></div></div>');
                    } else {
                        if (S == 3 || S == 4 || S == 6 || S == 7 || S == 11) {
                            var X = aj[ae].article_love_rating;
                            var J = '<a id="love_rating_' + S + "_" + W + '" href="javascript:void(0);" onclick="ajax_love(' + W + "," + S + ',this);" class="zan" title="赞"><i class="icon-zan2"><!--[if lt IE 8]>赞<![endif]--></i><em>' + X + '</em><span class="scoreAnimate">+1</span></a>';
                            if (ah != "") {
                                M = "<span>作者：" + ah + "</span>";
                            } else {
                                M = "";
                            }
                            g = g ? '<span class="red">' + g + "</span>" : "";
                            $(".leftWrap .list:last").after('<div class="list" timesort="' + ak + '" ' + z + '><div class="listTitle"><a class="icon" href="' + d + '">' + U + '</a><h4 class="itemName"><a target="_blank" href="' + l + '">' + Q + g + '</a></h4><div class="clear"></div></div><a title="' + Q + '" class="picLeft" target="_blank" href="' + l + '"><img src="' + N + '" alt="' + Q + '"' + C + '/></a><div class="listRight"><div class="lrTop"><span class="lrTime">' + af + "</span>" + M + p + '</div><div class="lrInfo"><p>' + v + '<a href="' + l + '" title="阅读全文"  target="_blank" >阅读全文</a></p></div><div class="lrBot">' + J + y + f + '<div class="clear"></div></div></div><div class="clear"></div></div>');
                        } else {
                            if (S == 10) {
                                $(".leftWrap .list:last").after('<div class="list ZTActivity" timesort="' + ak + '" ' + z + ">" + '<a href="' + l + '" target="_blank" class="picLeft" title=""><img src="' + N + '" width="440" height="146" /></a>' + '<div class="listRight">' + '<div class="listTitle">' + '    <span class="icon">专题</span>' + '    <span class="lrTime">' + af + "</span>" + '    <h4 class="itemName"><a href="' + l + '" target="_blank">' + Q + "</a></h4>" + '    <div class="lrBot">' + '<div id="bdshare" class="bdshare_t bds_tools get-codes-bdshare" data="{' + "'comment'':'','desc':'','text':'" + Q + "','title':'" + Q + "','url':'" + l + "','pic':'" + N + "'" + '}">' + '    <a href="javascript:void(0);" title="分享" class="bds_more shareWords fav" data-cmd="more" style="float:none;line-height:30px;margin-right:0;"><i class="icon-share"><!--[if lt IE 8]>分享<![endif]--></i></a>' + "</div>" + "    </div>" + '    <div class="clear"></div>' + " </div>	" + "</div>" + '<div class="clear"></div>' + "</div>");
                                bdShare.fn.init();
                            }
                        }
                    }
                }
                bindEventAfterLoad();
            } else {
                noMoreList();
            }
            scrollBind();
        },
        error: function() {
            $(".loadingPic").hide();
            $(".pagination").before('<p class="center" style="padding:30px 0;">很抱歉，您的网络可能有点问题，请尝试使用翻页浏览方式，或者<a id="ajaxErrorRetry">重试</a></p>');
            $("#ajaxErrorRetry").click(function() {
                indexListLoad();
                $(this).parent().remove();
            }
            );
        }
    });
}
function youhuiListLoad() {
    var b = $(".list:last").attr("timesort");
    $(".loadingPic").css("display", "block");
    scrollUnbind();
    $.ajax({
        type: "get",
        url: "/youhui/json_more",
        data: "timesort=" + b,
        dataType: "json",
        success: function(Z) {
            $(".loadingPic").css("display", "none");
            var P = Z.length;
            if (P > 0) {
                for (var S = 0; S < P; S++) {
                    var aa = Z[S].timesort;
                    var H = Z[S].article_title;
                    var s = Z[S].article_content;
                    var U = Z[S].article_date;
                    var f = Z[S].article_url;
                    var r = Z[S].article_comment;
                    var e = Z[S].article_collection;
                    var F = Z[S].article_pic;
                    var x = Z[S].article_pic_style;
                    var X = Z[S].article_referrals;
                    var K = Z[S].article_category;
                    var G = Z[S].article_tag;
                    var y = Z[S].article_title_mode;
                    var p = ""
                      , z = ""
                      , l = ""
                      , D = ""
                      , O = ""
                      , w = ""
                      , E = "";
                    var L = Z[S].article_id;
                    var I = Z[S].article_price;
                    var h = Z[S].article_mall;
                    var Y = Z[S].article_mall_url;
                    var C = Z[S].article_is_sold_out;
                    var M = Z[S].article_is_timeout;
                    var q = Z[S].article_worthy;
                    var J = Z[S].article_unworthy;
                    var d = Z[S].article_link;
                    var N = Z[S].article_link_list;
                    var g = Z[S].article_taobao_url;
                    var T = Z[S].article_top_category;
                    var v = Z[S].article_mall_domain;
                    var W = Z[S].article_author;
                    if (y == "title_mode") {
                        if (M != 0) {
                            p = '<div class="list titleMode timeOut" articleid="1_' + L + '" timesort="' + aa + '" articleid="' + L + '"><div class="listTitle"><span class="icon">过期</span>';
                        } else {
                            if (C != 0) {
                                p = '<div class="list list_preferential soldOut" articleid="1_' + L + '" timesort="' + aa + '" articleid="' + L + '"><div class="listTitle"><span class="icon">售罄</span>';
                            } else {
                                if (M == 0 && C == 0) {
                                    p = '<div class="list list_preferential" articleid="1_' + L + '" timesort="' + aa + '" articleid="' + L + '"><div class="listTitle">';
                                }
                            }
                        }
                        $(".list:last").after(p + '<h4 class="itemName"><a target="_blank" href="' + f + '">' + H + '<span class="red">' + I + '</span></a></h4><div class="clear"></div></div></div>');
                    } else {
                        if (K.title != "" || G.length > 0) {
                            if (K.title != "" && K.title != undefined) {
                                var t = K.category_url;
                                var B = K.title;
                                D += '<a href="' + t + '">' + B + "</a>";
                            }
                            if (G.length > 0) {
                                var ab = G.length;
                                for (var Q = 0; Q < ab; Q++) {
                                    var c = G[Q].tag_url;
                                    var m = G[Q].name;
                                    O += '<a href="' + c + '">' + m + "</a>";
                                }
                            }
                            if (D != "" || O != "") {
                                l = "<span>标签：" + D + O + "</span>";
                            }
                        }
                        if (X != "") {
                            E = "<span>推荐人：" + X + "</span>";
                        } else {
                            E = "";
                        }
                        if (M != 0) {
                            p = '<div class="list list_preferential timeOut" articleid="1_' + L + '" timesort="' + aa + '"><div class="listTitle"><span class="icon">过期</span>';
                        } else {
                            if (C != 0) {
                                p = '<div class="list list_preferential soldOut" articleid="1_' + L + '" timesort="' + aa + '"><div class="listTitle"><span class="icon">售罄</span>';
                            } else {
                                if (M == 0 && C == 0) {
                                    p = '<div class="list list_preferential" articleid="1_' + L + '" timesort="' + aa + '"><div class="listTitle">';
                                }
                            }
                        }
                        if (N != "" && d != null ) {
                            var V = N.length;
                            for (var R = 0; R < V; R++) {
                                var o = N[R].link;
                                var u = N[R].name;
                                if (N[R]["taobao_url"]["is_taobao"]) {
                                    z += '<li><a isconvert="1" href="' + o + '" title="' + u + '" target="_blank">' + u + "</a></li>";
                                } else {
                                    z += '<li><a href="' + o + '" title="' + u + '" target="_blank">' + u + "</a></li>";
                                }
                            }
                            if (g["is_taobao"]) {
                                w = '<div class="buy"><a isconvert="1" href="' + d + "\" onclick=\"ga('send', 'event','电商','国内_优惠精选_" + T + "_列表_直达链接_" + v + "_" + W + "','" + L + "_" + H + '\');" target="_blank">直达链接<i class="icon-down"></i></a><ul class="more_buy">' + z + "</ul></div>";
                            } else {
                                w = '<div class="buy"><a href="' + d + "\" onclick=\"ga('send', 'event','电商','国内_优惠精选_" + T + "_列表_直达链接_" + v + "_" + W + "','" + L + "_" + H + '\');" target="_blank">直达链接<i class="icon-down"></i></a><ul class="more_buy">' + z + "</ul></div>";
                            }
                        } else {
                            if (N == "" && d != null  && d != "") {
                                if (g["is_taobao"]) {
                                    w = "<div class=\"buy\"><a isconvert=\"1\" onclick=\"ga('send', 'event','电商','国内_优惠精选_" + T + "_列表_直达链接_" + v + "_" + W + "','" + L + "_" + H + '\');" href="' + d + '" target="_blank">直达链接<i>&gt;</i></a></div>';
                                } else {
                                    w = '<div class="buy"><a href="' + d + "\" onclick=\"ga('send', 'event','电商','国内_优惠精选_" + T + "_列表_直达链接_" + v + "_" + W + "','" + L + "_" + H + '\');" target="_blank">直达链接<i>&gt;</i></a></div>';
                                }
                            } else {
                                if (N == "" && d == "") {
                                    w = "";
                                }
                            }
                        }
                        var A = "";
                        if (h != "") {
                            if (Y != "") {
                                A = '<a href="' + Y + '" class="mall" >' + h + "</a>";
                            } else {
                                A = '<span class="mall">' + h + "</span>";
                            }
                        }
                        $(".list:last").after(p + '<h4 class="itemName"><a target="_blank" href="' + f + '">' + H + '<span class="red">' + I + '</span></a></h4><div class="clear"></div></div><a title="' + H + '" class="picLeft" target="_blank" href="' + f + '"><img src="' + F + '" alt="' + H + '"' + x + '/></a><div class="listRight"><div class="lrTop"><span class="lrTime">' + U + "</span>" + E + l + '</div><div class="lrInfo"><p>' + s + '<a href="' + f + '" title="阅读全文" target="_blank" >阅读全文</a></p></div><div class="lrBot"><a href="javascript:void(0);"  onclick="rating(' + L + ',1,1);"  id = "rating_worthy_' + L + '" class="good"><span class="scoreTotal"><b>值</b> ' + q + '</span><span class="scoredInfo">已打分</span><span class="scoreAnimate">+1</span></a><a href="javascript:void(0);"  onclick="rating(' + L + ',2,1);" id = "rating_unworthy_' + L + '" class="bad"><span class="scoreTotal"><b>不值</b> ' + J + '</span><span class="scoredInfo">已打分</span><span class="scoreAnimate">+1</span></a><a id="collect_1_' + L + '" href="javascript:void(0);"  onclick="ajax_collect(' + L + ',1);" class="fav" title="收藏"><i class="icon-collect"><!--[if lt IE 8]>收藏<![endif]--></i><em>' + e + '</em></a><a href="' + f + '#comments" class="comment" target="_blank" title="评论"><i class="icon-comment"><!--[if lt IE 8]>评论<![endif]--></i>' + r + '</a><div class="botPart">' + w + A + '</div><div class="clear"></div></div></div><div class="clear"></div></div>');
                    }
                }
                bindEventAfterLoad();
            } else {
                noMoreList();
            }
            scrollBind();
        },
        error: function() {
            $(".loadingPic").hide();
            $(".pagination").before('<p class="center" style="padding:30px 0;">很抱歉，您的网络可能有点问题，请尝试使用翻页浏览方式，或者<a id="ajaxErrorRetry">重试</a></p>');
            $("#ajaxErrorRetry").click(function() {
                youhuiListLoad();
                $(this).parent().remove();
            }
            );
        }
    });
}
function haitaoListLoad() {
    var b = $(".list:last").attr("timesort");
    $(".loadingPic").css("display", "block");
    scrollUnbind();
    $.ajax({
        type: "get",
        url: "/json_more",
        data: "timesort=" + b,
        dataType: "json",
        success: function(Y) {
            $(".loadingPic").css("display", "none");
            var O = Y.length;
            if (O > 0) {
                for (var R = 0; R < O; R++) {
                    var L = Y[R].article_id;
                    var Z = Y[R].article_timesort;
                    var G = Y[R].article_title;
                    var s = Y[R].article_content;
                    var T = Y[R].article_date;
                    var f = Y[R].article_url;
                    var r = Y[R].article_comment;
                    var e = Y[R].article_collection;
                    var E = Y[R].article_pic_url;
                    var x = Y[R].article_pic_style;
                    var W = Y[R].article_referrals;
                    var J = Y[R].article_category;
                    var F = Y[R].article_tags;
                    var g = Y[R].article_taobao_url;
                    var S = Y[R].article_top_category;
                    var w = Y[R].article_buy_btn_domain;
                    var p = ""
                      , y = ""
                      , l = ""
                      , C = ""
                      , N = ""
                      , v = ""
                      , D = "";
                    if (J.title != "" || F.length > 0) {
                        if (J.title != "" && J.title != undefined) {
                            var t = J.category_url;
                            var B = J.title;
                            C += '<a href="' + t + '">' + B + "</a>";
                        }
                        if (F.length > 0) {
                            var aa = F.length;
                            for (var P = 0; P < aa; P++) {
                                var c = F[P].tag_url;
                                var m = F[P].name;
                                N += '<a href="' + c + '">' + m + "</a>";
                            }
                        }
                        if (C != "" || N != "") {
                            l = "<span>标签：" + C + N + "</span>";
                        }
                    }
                    var H = Y[R].article_price;
                    var h = Y[R].article_mall;
                    var X = Y[R].article_mall_link;
                    var A = Y[R].article_is_sold_out;
                    var K = Y[R].article_is_timeout;
                    var d = Y[R].article_link;
                    var M = Y[R].article_link_arr;
                    var q = Y[R].article_worthy;
                    var I = Y[R].article_unworthy;
                    var V = Y[R].article_author;
                    if (W != "") {
                        D = "<span>推荐人：" + W + "</span>";
                    } else {
                        D = "";
                    }
                    if (K != 0) {
                        p = '<div class="list list_preferential timeOut" timesort="' + Z + '" articleid="5_' + L + '"><div class="listTitle"><span class="icon">过期</span>';
                    } else {
                        if (A != 0) {
                            p = '<div class="list list_preferential soldOut" timesort="' + Z + '" articleid="5_' + L + '"><div class="listTitle"><span class="icon">售罄</span>';
                        } else {
                            if (K == 0 && A == 0) {
                                p = '<div class="list list_preferential" timesort="' + Z + '" articleid="5_' + L + '"><div class="listTitle">';
                            }
                        }
                    }
                    if (M != "" && d != null ) {
                        var U = M.length;
                        for (var Q = 0; Q < U; Q++) {
                            var o = M[Q].link;
                            var u = M[Q].name;
                            if (M[Q]["taobao_url"]["is_taobao"]) {
                                y += '<li><a isconvert="1" href="' + o + '" title="' + u + '" target="_blank">' + u + "</a></li>";
                            } else {
                                y += '<li><a href="' + o + '" title="' + u + '" target="_blank">' + u + "</a></li>";
                            }
                        }
                        if (g["is_taobao"]) {
                            v = '<div class="buy"><a isconvert="1" href="' + d + "\" onclick=\"ga('send', 'event','电商','海外_海淘专区_" + S + "_列表_直达链接_" + w + "_" + V + "','" + L + "_" + G + '\');"  target="_blank">直达链接<i class="icon-down"></i></a><ul class="more_buy">' + y + "</ul></div>";
                        } else {
                            v = '<div class="buy"><a href="' + d + "\" onclick=\"ga('send', 'event','电商','海外_海淘专区_" + S + "_列表_直达链接_" + w + "_" + V + "','" + L + "_" + G + '\');"  target="_blank">直达链接<i class="icon-down"></i></a><ul class="more_buy">' + y + "</ul></div>";
                        }
                    } else {
                        if (M == "" && d != null ) {
                            if (g["is_taobao"]) {
                                v = '<div class="buy"><a isconvert="1" href="' + d + "\" onclick=\"ga('send', 'event','电商','海外_海淘专区_" + S + "_列表_直达链接_" + w + "_" + V + "','" + L + "_" + G + '\');"  target="_blank">直达链接<i>&gt;</i></a></div>';
                            } else {
                                v = '<div class="buy"><a href="' + d + "\" onclick=\"ga('send', 'event','电商','海外_海淘专区_" + S + "_列表_直达链接_" + w + "_" + V + "','" + L + "_" + G + '\');"  target="_blank">直达链接<i>&gt;</i></a></div>';
                            }
                        }
                    }
                    var z = "";
                    if (h != "") {
                        if (X != "") {
                            z = '<a href="' + X + '" class="mall">' + h + "</a>";
                        } else {
                            z = '<span class="mall">' + h + "</span>";
                        }
                    }
                    $(".list:last").after(p + '<h4 class="itemName"><a target="_blank" href="' + f + '">' + G + '<span class="red">' + H + '</span></a></h4><div class="clear"></div></div><a title="' + G + '" class="picLeft" target="_blank" href="' + f + '"><img src="' + E + '" alt="' + G + '"' + x + '/></a><div class="listRight"><div class="lrTop"><span class="lrTime">' + T + "</span>" + D + l + '</div><div class="lrInfo"><p>' + s + '<a href="' + f + '" title="阅读全文"  target="_blank" >阅读全文</a></p></div><div class="lrBot"><a id="rating_worthy_' + L + '" class="good" onclick="rating(' + L + ',1,5);" href="javascript:void(0);" ><span class="scoreTotal"><b>值</b> ' + q + '</span><span class="scoredInfo">已打分</span><span class="scoreAnimate">+1</span></a><a id="rating_unworthy_' + L + '" onclick="rating(' + L + ',2,5);" href="javascript:void(0);" class="bad"><span class="scoreTotal"><b>不值</b> ' + I + '</span><span class="scoredInfo">已打分</span><span class="scoreAnimate">+1</span></a><a id="collect_5_' + L + '" href="javascript:void(0);" onclick="ajax_collect(' + L + ',5,this);" class="fav" title="收藏"><i class="icon-collect"><!--[if lt IE 8]>收藏<![endif]--></i><em>' + e + '</em></a><a href="' + f + '#comments" class="comment" target="_blank" title="评论"><i class="icon-comment"><!--[if lt IE 8]>评论<![endif]--></i>' + r + '</a><div class="botPart">' + v + z + '</div><div class="clear"></div></div></div><div class="clear"></div></div>');
                }
                bindEventAfterLoad();
            } else {
                noMoreList();
            }
            scrollBind();
        },
        error: function() {
            $(".loadingPic").hide();
            $(".pagination").before('<p class="center" style="padding:30px 0;">很抱歉，您的网络可能有点问题，请尝试使用翻页浏览方式，或者<a id="ajaxErrorRetry">重试</a></p>');
            $("#ajaxErrorRetry").click(function() {
                haitaoListLoad();
                $(this).parent().remove();
            }
            );
        }
    });
}
function faxianListLoad() {
    var b = $(".discovery_list li:last").attr("timesort");
    $(".loadingPic").css("display", "block");
    scrollUnbind();
    $.ajax({
        type: "get",
        url: "/json_more",
        data: "timesort=" + b,
        dataType: "json",
        success: function(F) {
            $(".loadingPic").css("display", "none");
            var s = F.length;
            if (s > 0) {
                for (var x = 0; x < s; x++) {
                    var r = F[x].article_id;
                    var H = F[x].timesort;
                    var G = F[x].article_title;
                    var v = F[x].article_content;
                    var D = F[x].article_date;
                    var h = F[x].article_url;
                    var f = F[x].article_comment;
                    var k = F[x].article_pic_url;
                    var y = F[x].article_pic_style;
                    var c = F[x].article_referrals;
                    var w = F[x].article_price;
                    var j = F[x].article_mall;
                    var u = F[x].article_link;
                    var d = F[x].article_rating;
                    var C = F[x].article_avatar;
                    var q = F[x].article_avatar_url;
                    var t = F[x].article_u_num;
                    var B = F[x].home_url;
                    var E = F[x].article_taobao_url;
                    var z = F[x].article_post_id;
                    var m = F[x].article_haitao_id;
                    var p = ""
                      , e = "";
                    var o = F[x].article_top_category;
                    var g = F[x].article_mall_domain;
                    var l = F[x].article_author;
                    if (c != "") {
                        e = '<a href="' + q + '" target="_blank" class="rankAvatar" title="' + c + '" articleid="2_' + r + '">';
                        if (t == 1) {
                            if (c == "匿名用户") {
                                p = '<div class="rankAvatar">' + '<img width="24" src="' + C + '">' + '<span class="grey">匿名用户</span>' + "</div>";
                            } else {
                                p = '<a title="' + c + '" target="_blank" class="rankAvatar" href="' + q + '">' + '<img src="' + C + '" width="24" height="24">' + '<span class="rankTitle">' + c + "</span>" + "</a>";
                            }
                        } else {
                            p = '<span class="avatarMore">' + '<span class="avatarMore"><a class="a_underline"  target="_blank" href="' + q + '">' + c + "</a>等" + t + "人推荐</span>" + "</span>";
                        }
                    }
                    var A = "";
                    if (E["is_taobao"]) {
                        A = '<a isconvert="1" href="' + u + "\" onclick=\"ga('send', 'event','电商','国内_发现频道_" + o + "_列表_直达链接_" + g + "_" + l + "','" + r + "_" + G + '\');" target="_blank" class="directLink">直达链接</a>';
                    } else {
                        A = '<a href="' + u + "\" onclick=\"ga('send', 'event','电商','国内_发现频道_" + o + "_列表_直达链接_" + g + "_" + l + "','" + r + "_" + G + '\');" target="_blank" class="directLink">直达链接</a>';
                    }
                    post_id_str = z != 0 ? '<div class="yhjingxuan"><span>优惠精选</span></div>' : "";
                    if (z == 0) {
                        post_id_str = m != 0 ? '<div class="yhjingxuan"><span>海淘精选</span></div>' : "";
                    }
                    $(".discovery_list li:last").after('<li class="list" articleid="2_' + r + '" timesort="' + H + '">' + '<a href="' + h + '" target="_blank" class="picBox"><img src="' + k + '"  alt="" title="" ' + y + " /></a>" + '<div class="mall"><span class="mall_bg"></span><span class="mall_word">' + j + "</span></div>" + '<div class="listItem">' + '<h2 class="itemName"><a href="' + h + '" target="_blank"><span class="black">' + G + '</span><span class="red">' + w + "</span></a></h2>" + '<div class="itemUserInfo">' + p + '<span class="time">' + D + "</span>" + "</div>" + "<p>" + v + "</p>" + '<div class="item_buy_mall">' + '<div class="zan_fav_com">' + '<a id="rating_worthy_' + r + '" href="javascript:void(0);" onclick="rating(' + r + ',1,2);" class="zan" title="值"><i class="icon-zan2"><!--[if lt IE 8]>值<![endif]--></i><em>' + d + '</em><span class="scoreAnimate">+1</span></a>' + '<a href="' + h + '#comments" class="comment" title="评论" target="_blank"><i class="icon-comment"><!--[if lt IE 8]>评论<![endif]--></i><em>' + f + "</em></a>" + "</div>" + A + "</div>" + "</div>" + post_id_str + "</li>");
                }
                bindEventAfterLoad();
                imgResizeFit();
            } else {
                noMoreList();
            }
            scrollBind();
        },
        error: function() {
            $(".loadingPic").hide();
            $(".pagination").before('<p class="center" style="padding:30px 0;">很抱歉，您的网络可能有点问题，请尝试使用翻页浏览方式，或者<a id="ajaxErrorRetry">重试</a></p>');
            $("#ajaxErrorRetry").click(function() {
                faxianListLoad();
                $(this).parent().remove();
            }
            );
        }
    });
}
function cabbageListLoad() {
    var b = $(".discovery_list li:last").attr("timesort");
    $(".loadingPic").css("display", "block");
    scrollUnbind();
    $.ajax({
        type: "get",
        url: "/9kuai9/json_more",
        data: "timesort=" + b,
        dataType: "json",
        success: function(D) {
            $(".loadingPic").css("display", "none");
            var q = D.length;
            if (q > 0) {
                for (var v = 0; v < q; v++) {
                    var p = D[v].article_id;
                    var F = D[v].timesort;
                    var E = D[v].article_title;
                    var t = D[v].article_content;
                    var B = D[v].article_date;
                    var h = D[v].article_url;
                    var f = D[v].article_comment;
                    var k = D[v].article_pic_url;
                    var w = D[v].article_pic_style;
                    var c = D[v].article_referrals;
                    var u = D[v].article_price;
                    var j = D[v].article_mall;
                    var s = D[v].article_link;
                    var d = D[v].article_rating;
                    var A = D[v].article_avatar;
                    var o = D[v].article_avatar_url;
                    var r = D[v].article_u_num;
                    var z = D[v].home_url;
                    var C = D[v].article_taobao_url;
                    var x = D[v].article_post_id;
                    var m = ""
                      , e = "";
                    var l = D[v].article_top_category;
                    var g = D[v].article_mall_domain;
                    if (c != "") {
                        e = '<a href="' + o + '" target="_blank" class="rankAvatar" title="' + c + '" articleid="2_' + p + '">';
                        if (r == 1) {
                            if (c == "匿名用户") {
                                m = '<div class="rankAvatar">' + '<img width="24" src="' + A + '">' + '<span class="grey">匿名用户</span>' + "</div>";
                            } else {
                                m = '<a title="' + c + '" target="_blank" class="rankAvatar" href="' + o + '">' + '<img src="' + A + '" width="24" height="24">' + '<span class="rankTitle">' + c + "</span>" + "</a>";
                            }
                        } else {
                            m = '<span class="avatarMore">' + '<span class="avatarMore"><a class="a_underline"  target="_blank" href="' + o + '">' + c + "</a>等" + r + "人推荐</span>" + "</span>";
                        }
                    }
                    var y = "";
                    if (C["is_taobao"]) {
                        y = '<a isconvert="1" href="' + s + "\" onclick=\"ga('send', 'event','电商','国内_发现频道_" + l + "_列表_直达链接_" + g + "','" + p + "_" + E + '\');" target="_blank" class="directLink">直达链接</a>';
                    } else {
                        y = '<a href="' + s + "\" onclick=\"ga('send', 'event','电商','国内_发现频道_" + l + "_列表_直达链接_" + g + "','" + p + "_" + E + '\');" target="_blank" class="directLink">直达链接</a>';
                    }
                    post_id_str = x != 0 ? '<div class="yhjingxuan"><span>优惠精选</span></div>' : "";
                    $(".discovery_list li:last").after('<li class="list" articleid="2_' + p + '" timesort="' + F + '">' + '<a href="' + h + '" target="_blank" class="picBox"><img src="' + k + '"  alt="" title="" ' + w + " /></a>" + '<div class="mall"><span class="mall_bg"></span><span class="mall_word">' + j + "</span></div>" + '<div class="listItem">' + '<h2 class="itemName"><a href="' + h + '" target="_blank"><span class="black">' + E + '</span><span class="red">' + u + "</span></a></h2>" + '<div class="itemUserInfo">' + m + '<span class="time">' + B + "</span>" + "</div>" + "<p>" + t + "</p>" + '<div class="item_buy_mall">' + '<div class="zan_fav_com">' + '<a id="love_rating_2_' + p + '" href="javascript:void(0);" onclick="ajax_love(' + p + ',2,this);" class="zan" title="赞"><i class="icon-zan2"><!--[if lt IE 8]>赞<![endif]--></i><em>' + d + '</em><span class="scoreAnimate">+1</span></a>' + '<a href="' + h + '#comments" class="comment" title="评论" target="_blank"><i class="icon-comment"><!--[if lt IE 8]>评论<![endif]--></i><em>' + f + "</em></a>" + "</div>" + y + "</div>" + "</div>" + post_id_str + "</li>");
                }
                bindEventAfterLoad();
                imgResizeFit();
            } else {
                noMoreList();
            }
            scrollBind();
        },
        error: function() {
            $(".loadingPic").hide();
            $(".pagination").before('<p class="center" style="padding:30px 0;">很抱歉，您的网络可能有点问题，请尝试使用翻页浏览方式，或者<a id="ajaxErrorRetry">重试</a></p>');
            $("#ajaxErrorRetry").click(function() {
                cabbageListLoad();
                $(this).parent().remove();
            }
            );
        }
    });
}
function toptmallListLoad() {
    var d = $("#page").val();
    var c = $("#loadNums").val();
    var b = $("#is_load").val();
    if (b == 1) {
        return;
    }
    if (c > 5) {
        return;
    }
    $(".loadingPic").css("display", "block");
    scrollUnbind();
    $.ajax({
        type: "get",
        url: "/toptmall/json_more",
        data: "page=" + d,
        dataType: "json",
        success: function(k) {
            $(".loadingPic").css("display", "none");
            var h = k.length;
            if (h > 0 || !k.error == 1) {
                for (var l = 0; l < h; l++) {
                    var f = k[l].id;
                    var q = k[l].link;
                    var g = k[l].store_name;
                    var e = k[l].name;
                    var o = k[l].price;
                    var j = k[l].focus_img;
                    var p = k[l].praise;
                    var m = "";
                    m += '<li class="list">';
                    m += '        <a href="' + q + '" isconvert="1" target="_blank" class="picBox"><img src="' + j + '" alt="" title="" /></a>';
                    m += '        <div class="stores-name">' + g + "爆品</div>";
                    m += '        <div class="listItem">';
                    m += '            <h2 class="itemName"><a target="_blank" isconvert="1" href="' + q + '"><span class="black">' + e + "</span>";
                    m += '            <span class="red">' + o + "元<!-- 包邮（拍下立减） --></span></a></h2>";
                    m += '            <div class="item_buy_mall">';
                    m += '                <div class="zan_fav_com">';
                    m += '                    <a href="javascript:;" id="t_rating_' + f + '" class="zan" title="赞"><i class="icon-zan2"><!--[if lt IE 8]>赞<![endif]--></i><em>' + p + "</em></a>";
                    m += "                </div>";
                    m += '                <a href="' + q + '" isconvert="1" target="_blank" class="directLink">直达链接</a>';
                    m += "            </div>";
                    m += '        </div><input type="hidden" data-status="" class="id" value="' + f + '">';
                    m += "    </li>";
                    $(".discovery_list li:last").after(m);
                    $("#page").val(parseInt(d) + 1);
                    $("#loadNums").val(parseInt(c) + 1);
                }
                show_rating_status();
                bindEventAfterLoad();
                imgResizeFit();
            } else {
                noMoreList();
                $("#page").val(6);
            }
            scrollBind();
        },
        error: function() {
            $(".loadingPic").hide();
            $(".pagination").before('<p class="center" style="padding:30px 0;">很抱歉，您的网络可能有点问题，请尝试使用翻页浏览方式，或者<a id="ajaxErrorRetry">重试</a></p>');
            $("#ajaxErrorRetry").click(function() {
                toptmallListLoad();
                $(this).parent().remove();
            }
            );
        }
    });
}
function zixunListLoad() {
    var b = $(".list:last").attr("timesort");
    $(".loadingPic").css("display", "block");
    scrollUnbind();
    $.ajax({
        type: "get",
        url: "/json_more",
        data: "timesort=" + b,
        dataType: "json",
        success: function(P) {
            $(".loadingPic").css("display", "none");
            var H = P.length;
            if (H > 0) {
                for (var K = 0; K < H; K++) {
                    var Q = P[K].timesort;
                    var m = P[K].article_rzlx;
                    var E = P[K].channel_url;
                    var q = P[K].article_type_tittle;
                    var f = P[K].article_url;
                    var B = P[K].article_title;
                    var z = P[K].article_pic_url;
                    var v = P[K].article_pic_style;
                    var L = P[K].article_date;
                    var O = P[K].article_referrals;
                    var C = P[K].article_category;
                    var A = P[K].article_tag;
                    var D = P[K].article_id;
                    var M = P[K].article_rating;
                    var p = P[K].article_comment;
                    var e = P[K].article_collection;
                    var r = P[K].article_content;
                    var d = P[K].article_link;
                    var F = P[K].article_link_arr;
                    var o = ""
                      , y = ""
                      , G = ""
                      , g = ""
                      , w = ""
                      , u = "";
                    if (m != "") {
                        o = '<a class="icon" href="' + E + m + '">' + q + "</a>";
                    }
                    if (C != "" || A.length > 0) {
                        if (C != "") {
                            var s = C.category_url;
                            var x = C.title;
                            y += '<a href="' + s + '">' + x + "</a>";
                        }
                        if (A.length > 0) {
                            var R = A.length;
                            for (var I = 0; I < R; I++) {
                                var c = A[I].tag_url;
                                var h = A[I].name;
                                G += '<a href="' + c + '">' + h + "</a>";
                            }
                        }
                        g = "<span>标签：" + y + G + "</span>";
                    }
                    if (F != "" && d != null ) {
                        var N = F.length;
                        for (var J = 0; J < N; J++) {
                            var l = F[J].link;
                            var t = F[J].name;
                            w += '<li><a href="' + l + '" title="' + t + '" target="_blank">' + t + "</a></li>";
                        }
                        u = '<div class="buy"><a href="' + d + '" target="_blank">直达链接<i class="icon-down"></i></a><ul class="more_buy">' + w + "</ul></div>";
                    } else {
                        if (F == "" && d != "" && d != null ) {
                            u = '<div class="buy"><a href="' + d + '" target="_blank">直达链接<i>&gt;</i></a></div>';
                        }
                    }
                    $(".list:last").after('<div class="list" articleid="6_' + D + '" timesort="' + Q + '">' + '<div class="listTitle">' + o + '<h3 class="itemName"><a target="_blank" href="' + f + '">' + B + "</a></h3>" + '<div class="clear"></div>' + "</div>" + '<a title="" class="picLeft" target="_blank" href="' + f + '"><img ' + v + ' src="' + z + '"></a>' + '<div class="listRight">' + '<div class="lrTop">' + '<span class="lrTime">' + L + "</span>" + "<span>推荐人：" + O + "</span>" + g + "</div>" + '<div class="lrInfo"><p>' + r + '<a href="' + f + '" target="_blank">阅读全文</a></p></div>' + '<div class="lrBot">' + '<a id="love_rating_6_' + D + '" href="javascript:void(0);" onclick="ajax_love(' + D + ',6,this);" class="zan" title="赞"><i class="icon-zan2"><!--[if lt IE 8]>赞<![endif]--></i><em>' + M + '</em><span class="scoreAnimate">+1</span></a>' + '<a id="collect_6_' + D + '" href="javascript:void(0);" onclick="ajax_collect(' + D + ',6,this);" class="fav" title="收藏"><i class="icon-collect"><!--[if lt IE 8]>收藏<![endif]--></i><em>' + e + "</em></a>" + '<a title="评论" class="comment" href="' + f + '#comments" target="_blank"><i class="icon-comment"><!--[if lt IE 8]>评论<![endif]--></i>' + p + "</a>" + '<div class="botPart">' + u + "</div>" + '<div class="clear"></div>' + "</div>" + "</div>" + '<div class="clear"></div>' + "</div>");
                }
                bindEventAfterLoad();
            } else {
                noMoreList();
            }
            scrollBind();
        },
        error: function() {
            $(".loadingPic").hide();
            $(".pagination").before('<p class="center" style="padding:30px 0;">很抱歉，您的网络可能有点问题，请尝试使用翻页浏览方式，或者<a id="ajaxErrorRetry">重试</a></p>');
            $("#ajaxErrorRetry").click(function() {
                zixunListLoad();
                $(this).parent().remove();
            }
            );
        }
    });
}
function shaiwuListLoad() {
    var b = $(".list:last").attr("timesort");
    $(".loadingPic").css("display", "block");
    scrollUnbind();
    $.ajax({
        type: "get",
        url: "/json_more",
        data: "timesort=" + b,
        dataType: "json",
        success: function(y) {
            $(".loadingPic").css("display", "none");
            var r = y.length;
            if (r > 0) {
                for (var s = 0; s < r; s++) {
                    var p = y[s].article_id;
                    var x = y[s].article_channel;
                    var A = y[s].article_timesort;
                    var z = y[s].article_full_title;
                    var w = y[s].article_pub_time;
                    var g = y[s].article_url;
                    var f = y[s].article_comment_count;
                    var m = y[s].article_collection_count;
                    var d = y[s].article_love_rating_count;
                    var l = y[s].article_image;
                    var v = y[s].article_pic_style;
                    var c = y[s].article_user;
                    var q = y[s].ga_img;
                    var o = y[s].ga_author;
                    var u = y[s].ga_title;
                    var e = y[s].ga_favour;
                    var t = y[s].ga_collect;
                    var j = y[s].ga_comment;
                    var h = "";
                    if (c.sid > 0) {
                        h = '<a onclick="' + o + '" href="' + c.user_url + '" class="rankAvatar" target="_blank" title="' + c.name + '">' + '<img width="24" height="24" src="' + c.avatar + '" />' + '<span class="rankTitle">' + c.name + "</span></a>";
                    } else {
                        h = '<div class="rankAvatar">' + '<img width="24" height="24" src="' + c.avatar + '" />' + '<span class="grey">' + c.name + "</span></div>";
                    }
                    if (y[s].row_type == "test") {
                        var k = '<a class="icon" href="' + y[s].article_test_channel_url + '">众测</a>';
                    } else {
                        var k = "";
                    }
                    $(".list:last").after('<li class="list" timesort="' + A + '" articleid="' + x + "_" + p + '"><a href="' + g + '" onclick="' + q + '"  target="_blank" class="picBox">' + '<img src="' + l.url + '" alt="' + z + '" />' + "</a>" + '<div class="listItem"><div class="itemUserInfo">' + h + '<span class="time">' + w + '</span></div><h2 class="itemName">' + k + '<a onclick="' + u + '"  target="_blank" href="' + g + '">' + z + '</a></h2><a id="love_rating_' + x + "_" + p + '" href="javascript:void(0);" onclick="ajax_love(' + p + "," + x + ",this);" + e + '" class="zan" title="赞"><i class="icon-zan2"><!--[if lt IE 8]>赞<![endif]--></i><em>' + d + '</em><span class="scoreAnimate">+1</span></a><a id="collect_' + x + "_" + p + '" href="javascript:void(0);" onclick="ajax_collect(' + p + "," + x + ",this);" + t + '" class="fav" title="收藏"><i class="icon-collect"><!--[if lt IE 8]>收藏<![endif]--></i><em>' + m + '</em></a><a onclick="' + j + '"  href="' + g + '#comments" class="comment" title="评论" target="_blank"><i class="icon-comment"><!--[if lt IE 8]>评论<![endif]--></i>' + f + "</a></div></li>");
                }
                bindEventAfterLoad();
            } else {
                noMoreList();
            }
            scrollBind();
        },
        error: function() {
            $(".loadingPic").hide();
            $(".pagination").before('<p class="center" style="padding:30px 0;">很抱歉，您的网络可能有点问题，请尝试使用翻页浏览方式，或者<a id="ajaxErrorRetry">重试</a></p>');
            $("#ajaxErrorRetry").click(function() {
                shaiwuListLoad();
                $(this).parent().remove();
            }
            );
        }
    });
}
function jingyanListLoad() {
    var b = $(".list:last").attr("timesort");
    $(".loadingPic").css("display", "block");
    scrollUnbind();
    $.ajax({
        type: "get",
        url: "/json_more",
        data: "timesort=" + b,
        dataType: "json",
        success: function(t) {
            $(".loadingPic").css("display", "none");
            var o = t.length;
            if (o > 0) {
                for (var q = 0; q < o; q++) {
                    var m = t[q].article_id;
                    var s = t[q].article_channel;
                    var v = t[q].article_timesort;
                    var u = t[q].article_full_title;
                    var p = t[q].article_content;
                    var r = t[q].article_pub_time;
                    var f = t[q].article_url;
                    var d = t[q].article_comment_count;
                    var l = t[q].article_collection_count;
                    var h = t[q].article_image;
                    var k = t[q].article_user_name;
                    var j = t[q].article_user_url;
                    var e = t[q].article_user_sid;
                    var c = t[q].article_love_rating_count;
                    var g = "";
                    if (e > 0) {
                        g = "<span>作者：" + '<a target="_blank" href="' + j + '">' + k + "</a>" + "</span>";
                    } else {
                        g = "<span>作者：" + k + "</span>";
                    }
                    $(".list:last").after('<div class="list list_exp" timesort="' + v + '" articleid="' + s + "_" + m + '">' + '<div class="listTitle"><h4 class="itemName"><a target="_blank" href="' + f + '">' + u + '</a></h4><div class="clear"></div></div><a title="' + u + '" class="picLeft" target="_blank" href="' + f + '"><img src="' + h.url + '" alt="' + u + '"' + h.style + '/></a><div class="listRight"><div class="lrTop"><span class="lrTime">' + r + "</span>" + g + '</div><div class="lrInfo"><p>' + p + '<a href="' + f + '" title="阅读全文" target="_blank">阅读全文</a></p></div><div class="lrBot"><a id="love_rating_4_' + m + '" href="javascript:void(0);" onclick="ajax_love(' + m + ',4,this);" class="zan" title="赞"><i class="icon-zan2"><!--[if lt IE 8]>赞<![endif]--></i><em>' + c + '</em><span class="scoreAnimate">+1</span></a><a id="collect_4_' + m + '" href="javascript:void(0);" onclick="ajax_collect(' + m + ',4,this);" class="fav" title="收藏"><i class="icon-collect"><!--[if lt IE 8]>收藏<![endif]--></i><em>' + l + '</em></a><a href="' + f + '#comments" class="comment" title="评论" target="_blank"><i class="icon-comment"><!--[if lt IE 8]>评论<![endif]--></i>' + d + '</a><div class="clear"></div></div></div><div class="clear"></div></div>');
                }
                bindEventAfterLoad();
            } else {
                noMoreList();
            }
            scrollBind();
        },
        error: function() {
            $(".loadingPic").hide();
            $(".pagination").before('<p class="center" style="padding:30px 0;">很抱歉，您的网络可能有点问题，请尝试使用翻页浏览方式，或者<a id="ajaxErrorRetry">重试</a></p>');
            $("#ajaxErrorRetry").click(function() {
                jingyanListLoad();
                $(this).parent().remove();
            }
            );
        }
    });
}
function loadList() {
    var g = $(".leftWrap .list:last").offset().top;
    var f = $(window).scrollTop() + $(window).height() - $(".leftWrap .list:last").height() - 100;
    var d = $(".pagination .pageCurrent").text();
    var c = parseInt(d);
    var b = 3;
    var e = indexListLoad;
    switch ($("#channel").val()) {
    case "youhui":
        e = youhuiListLoad;
        break;
    case "haitao":
        e = haitaoListLoad;
        break;
    case "shaiwu":
        e = shaiwuListLoad;
        break;
    case "jingyan":
        e = jingyanListLoad;
        break;
    case "zixun":
        e = zixunListLoad;
        break;
    case "faxian":
        b = 5;
        e = faxianListLoad;
        break;
    case "cabbage":
        b = 5;
        e = cabbageListLoad;
        break;
    case "toptmall":
        b = 5;
        e = toptmallListLoad;
        break;
    }
    if (f > g) {
        if (c % b != 0) {
            e();
        }
    }
}
function setCurrentPage(e) {
    var c = $(".pagedown").find("a").attr("href");
    var b = c.split("/p");
    if ($(".pageup").length > 0) {
        var f = b[0] + "/p" + (e - 1);
        $(".pageup").find("a").attr("href", f);
    }
    if ($(".pagedown").length > 0) {
        var d = b[0] + "/p" + (e + 1);
        $(".pagedown").find("a").attr("href", d);
    }
    $(".pagination").find(".pageCurrent").removeClass("pageCurrent");
    $(".pagination").find("li").each(function() {
        var g = $(this).find("a").html();
        if (g == e) {
            $(this).find("a").addClass("pageCurrent");
        }
    }
    );
}
function scrollStart() {
    var b = $(".leftWrap .list").length;
    if (b > 0) {
        loadList();
    }
}
function scrollBind() {
    if ($("#channel").length > 0) {
        $(window).bind("scroll", scrollStart);
    }
}
function scrollUnbind() {
    $(window).unbind("scroll", scrollStart);
}
function bindEventAfterLoad() {
    if (getCookie("post_permission") && typeof (getCookie("post_permission")) != undefined) {
        listAddEditStart();
    }
    var c = $(".pagination .pageCurrent").text();
    var b = parseInt(c);
    setCurrentPage(b + 1);
    set_rating_current();
    set_collect_current();
    set_loverating_current();
    more_link(".buy");
}
function fixFooterPosition(d) {
    var c = $(window).height();
    var b = 110 + $(".wrap").height();
    if (c - b >= 80) {
        $(d).css({
            "position": "fixed",
            "left": "0",
            "bottom": "0"
        });
    } else {
        $(d).css("position", "static");
    }
}
function voteTopic(d, f, c, e, b) {
    $(d).unbind("click").click(function() {
        if (!$(this).find("i").is(":hidden")) {
            if ($(this).find("i").hasClass(c)) {
                $(this).find("i").removeClass(c);
                $(this).find("i").prev().removeAttr("checked");
            } else {
                $(this).find("i").addClass(c);
                $(this).find("i").prev().attr("checked", "true");
            }
            $(e).each(function() {
                if ($(this).find("." + c).length == f) {
                    $(this).find("i").each(function() {
                        if (!$(this).hasClass(c)) {
                            $(this).hide();
                        }
                    }
                    );
                } else {
                    $(this).find("i").each(function() {
                        if (!$(this).hasClass(c)) {
                            $(this).show();
                        }
                    }
                    );
                }
            }
            );
            if ($(e).find("." + c).length > 0 && $(e).find("." + c).length < 4) {
                $(d).parents("form").find(b).addClass("btn_voteCurrent").attr("disabled", false);
            } else {
                $(d).parents("form").find(b).removeClass("btn_voteCurrent").attr("disabled", true);
            }
        }
    }
    );
}
function clearCheckboxInput() {
    if ($(".bl_div_switch").length != 0) {
        var b = $(".bl_div_switch");
        $(b).find(".bl_switch").hide();
        $("i.i_checkbox").show().removeClass("icon-loginkuangright").removeClass("icon-rightframe");
        $(b).find(":text").each(function() {
            var c = $(this).attr("default_value");
            $(this).val(c);
            $(this).css("color", "#999");
        }
        );
        $(b).find(".link_box").each(function() {
            var c = $(this).find(":button").val();
            if (c == "-") {
                $(this).remove();
            }
        }
        );
    }
}
function showError(b, c) {
    b.html(c).fadeIn().delay(3000).fadeOut();
}
function login() {
    $("#btn_login").click(function() {
        var l = $(".notice_error");
        var b = $.trim($("#user_login").val());
        var j = $("#user_pass").val();
        var k = $.trim($("#captcha").val());
        var m = $("#rememberme").is(":checked") + 0;
        var e = $.trim($("#is_third").val());
        var d = $("#is_pop_login").val();
        if (b == "") {
            showError(l, "请输入用户名或邮箱");
        } else {
            if (j == "") {
                showError(l, "请输入密码");
            } else {
                if ($(".captcha_switch").is(":visible") && k == "") {
                    showError(l, "请输入验证码");
                } else {
                    var g = new Base64();
                    var o = 0;
                    if ($("#rememberme").is(":checked")) {
                        o = 1;
                    }
                    var c = "";
                    if (k == "geetest") {
                        var p = ["geetest_challenge", "geetest_validate", "geetest_seccode"];
                        for (var f in p) {
                            c += "&" + p[f] + "=" + encodeURIComponent($("input[name=" + p[f] + "]").val());
                        }
                    }
                    var h = $("#user_domain").val() + "/user/login/jsonp_check";
                    $.ajax({
                        type: "get",
                        url: h,
                        data: "user_login=" + encodeURIComponent(b) + "&user_pass=" + encodeURIComponent(j) + "&rememberme=" + m + "&is_third=" + e + "&is_pop=" + d + "&captcha=" + k + c,
                        dataType: "jsonp",
                        jsonp: "callback",
                        success: function(r) {
                            var t = r.data.redirect_to;
                            var s = r.data.is_use_captcha;
                            var x = r.error_code;
                            if (t != "" && t != undefined) {
                                window.location.href = t;
                            } else {
                                if (s) {
                                    var v = $("#captcha_img").attr("data-src");
                                    $("#captcha_img").attr("src", v);
                                    $(".captcha_switch").show();
                                }
                                if (x == 0) {
                                    if ($("#pop-login").length > 0) {
                                        location.reload();
                                    } else {
                                        var q = $.trim($("#redirect_to").val());
                                        if ("" == q) {
                                            q = "http://www.smzdm.com/";
                                        }
                                        window.location.href = q;
                                    }
                                }
                                var w = r.error_msg;
                                for (var u in w) {
                                    showError(l, w[u]);
                                    break;
                                }
                            }
                        },
                        error: function() {
                            showError(l, "网络错误，请稍后重试");
                        }
                    });
                }
            }
        }
        return false;
    }
    );
}
function showRegError(b, c) {
    b.siblings(".icon-loginright").hide().end().siblings(".error").html(c).show();
}
function register() {
    $("#register_form,#login_form").find(".form-input").each(function() {
        $(this).focus(function() {
            $(this).siblings(".error").hide();
            if ($(this).siblings(".grey").length > 0) {
                $(this).siblings(".grey").show();
            }
        }
        );
    }
    );
    $("#user_email").blur(function() {
        var c = $(this);
        var b = $.trim(c.val());
        if (b != "") {} else {
            showRegError($(this), "不能为空");
        }
    }
    );
    $("#user_pass").blur(function() {
        var b = $(this).val();
        $(this).siblings(".grey").hide();
        if (b != "") {
            if (b.length < 6 || b.length > 20) {
                showRegError($(this), "请将长度控制在6-20以内");
            } else {
                $(this).siblings(".error").hide().end().siblings(".icon-loginright").show();
            }
            if ($("#user_pass2").siblings(".error").is(":visible") && b == $("#user_pass2").val()) {
                $("#user_pass2").siblings(".error").hide().end().siblings(".icon-loginright").show();
            }
        } else {
            showRegError($(this), "不能为空");
        }
    }
    );
    $("#user_pass2").blur(function() {
        var c = $("#user_pass").val();
        var b = $(this).val();
        if (b != "") {
            if (b != c) {
                showRegError($(this), "密码不一致");
            } else {
                $(this).siblings(".error").hide().end().siblings(".icon-loginright").show();
            }
        } else {
            showRegError($(this), "不能为空");
        }
    }
    );
    $("#display_name").blur(function() {
        var c = $(this);
        var b = c.val();
        $(this).siblings(".grey").hide();
        if (b != "") {
            $.ajax({
                type: "post",
                url: "/user/register/ajax_check_display_name",
                data: "display_name=" + encodeURIComponent(b),
                dataType: "json",
                success: function(d) {
                    var g = d.error_code;
                    var f = d.error_msg;
                    if (g == 0) {
                        c.siblings(".error").hide().end().siblings(".icon-loginright").show();
                    } else {
                        for (var e in f) {
                            showRegError(c, f[e]);
                            break;
                        }
                    }
                },
                error: function() {
                    showRegError(c, "网络错误，请稍后重试");
                }
            });
        } else {
            showRegError(c, "不能为空");
        }
    }
    );
    $("#register_form #captcha").blur(function() {
        var c = $(this);
        var b = c.val();
        if (b != "") {
            $.ajax({
                type: "post",
                url: "/user/getcaptcha/ajax_check/register",
                data: "captcha=" + b,
                dataType: "json",
                success: function(d) {
                    var f = d;
                    var e = $("#captcha_error_text");
                    var g = $("#captcha_success");
                    if (f) {
                        e.hide();
                        g.show();
                    } else {
                        g.hide();
                        e.html("验证码不正确").show();
                    }
                },
                error: function() {
                    showRegError(c, "网络错误，请稍后重试");
                }
            });
        } else {
            showRegError(c, "不能为空");
        }
    }
    );
    $("#register_form").submit(function() {
        var d = $(this).find(".icon-loginright:visible").length;
        var e = new Base64();
        var g = $.trim($("#user_email").val());
        var f = $("#user_pass").val();
        var j = $("#user_pass2").val();
        var b = $.trim($("#display_name").val());
        var h = $.trim($("#captcha").val());
        var k = $("#agreement").is(":checked");
        var c = $(this).find("input[type='submit']");
        c.attr("disabled", "disabled").removeClass("btn_reg").addClass("btn_grey");
        if (d >= 4 && $("#agreement").is(":checked")) {
            $("#display_name").val(b);
            return true;
        } else {
            if (g == "") {
                $(".notice_error").html("邮箱不能为空");
            } else {
                if (f == "") {
                    $(".notice_error").html("密码不能为空");
                } else {
                    if (j == "") {
                        $(".notice_error").html("确认密码不能为空");
                    } else {
                        if (b == "") {
                            $(".notice_error").html("昵称不能为空");
                        } else {
                            if (h == "") {
                                $(".notice_error").html("验证码不能为空");
                            } else {
                                if (!k) {
                                    $(".notice_error").html("未同意《什么值得买用户使用协议》");
                                }
                            }
                        }
                    }
                }
            }
            setTimeout(function() {
                $(".notice_error").html("");
                c.removeAttr("disabled").removeClass("btn_grey").addClass("btn_reg");
            }
            , 3000);
            return false;
        }
    }
    );
}
function editUrlFilter(d, c) {
    var b = "http://youhui.bgm.smzdm.com/edit_guonei/" + c;
    switch (d) {
    case 2:
        b = "http://youhui.bgm.smzdm.com/edit_faxian/" + c;
        break;
    case 3:
        b = "http://post.bgm.smzdm.com/edit/" + c;
        break;
    case 4:
        b = "http://bgm.smzdm.com/experience/experience/ex_edit/" + c;
        break;
    case 5:
        b = "http://youhui.bgm.smzdm.com/edit_haitao/" + c;
        break;
    case 6:
        b = "http://bgm.smzdm.com/news/news/edit/" + c;
        break;
    case 7:
        b = "http://bgm.smzdm.com/probation/probreport/detail/" + c;
        break;
    case 11:
        b = "http://post.bgm.smzdm.com/edit/" + c;
        break;
    }
    return b;
}
function addEditInterface(g) {
    if (g.attr("articleid") != undefined) {
        var e = g.attr("articleid").split("_");
        var f = parseInt(e[0]);
        var d = parseInt(e[1]);
        var b = g.find(".lrTop");
        var c = editUrlFilter(f, d);
        if (g.find(".lrTop").length == 0) {
            if (f == 2) {
                b = g.find(".itemUserInfo");
            } else {
                if (f == 3) {
                    b = g.find(".listItem");
                }
            }
        }
        b.append('<span class="edit_interface"><a href="' + c + '" target="_blank">编辑</a></span>');
    }
}
function listAddEditStart() {
    $(".list").each(function() {
        if ($(this).find(".edit_interface").length == 0) {
            addEditInterface($(this));
        }
    }
    );
}
function detailAddEditStart() {
    var d = parseInt($("#channelID").val());
    var c = parseInt($("#articleID").val());
    var b = editUrlFilter(d, c);
    $(".article_meta:first").append('<span class="edit_interface"><a href="' + b + '" target="_blank">编辑</a></span>');
}
function set_checkin() {
    $("#user_info_tosign").unbind("click");
    var b = $("#user_domain").val();
    var b = "http://zhiyou.smzdm.com/";
    $.ajax({
        type: "get",
        url: b + "/user/checkin/jsonp_checkin",
        dataType: "jsonp",
        jsonp: "callback",
        success: function(f) {
            var c = f.error_code;
            var d = f.error_msg;
            var e = f.data;
            if (c == 0) {
                window.location.href = "http://zhiyou.smzdm.com/qiandao";
            } else {
                popUp("", "#pop-status", d["public"]);
            }
        },
        error: function() {
            $("#user_info_tosign").bind("click", set_checkin);
        }
    });
}
function requestUserInfo() {
    var c = $.trim($("#commentform #pid").val());
    var d = $.trim($("#commentform #type").val());
    var e = $("#user_domain").val();
    var f = e + "/user/info/jsonp_get_current";
    function b() {
        $("#user_info_tosign").unbind("click");
        $.ajax({
            type: "get",
            url: e + "/user/qiandao/jsonp_checkin",
            dataType: "jsonp",
            jsonp: "callback",
            success: function(h) {
                var k = h.error_code;
                if (k == 0) {
                    window.location.href = e + "/qiandao";
                } else {
                    var j = h.error_msg;
                    for (var g in j) {
                        popUp("", "#pop-status", j[g]);
                        break;
                    }
                }
            },
            error: function() {
                $("#user_info_tosign").bind("click", b);
            }
        });
    }
    $.ajax({
        type: "get",
        url: f,
        data: "pid=" + c + "&type=" + d,
        dataType: "jsonp",
        jsonp: "callback",
        success: function(N) {
            if (N.user.length != 0) {
                var j = N.user.user_smzdm_id;
                var m = N.user.display_name;
                var K = N.new_notice;
                var z = N.user.banright;
                var D = z.length;
                var u = N.user.avatar.split("small")[0] + "middle" + N.user.avatar.split("small")[1];
                var M = e + "/user";
                var H = N.user.point;
                var q = N.user.gold;
                var w = N.user.checkin.has_checkin;
                var B = N.user.checkin.daily_attendance_number;
                var s = N.user.checkin.set_checkin;
                var G = parseInt(K.message.num);
                var p = parseInt(K.comment.num);
                var k = N.user.capabilities;
                var l = N.user.is_comment_connect;
                var v = N.user.is_anonymous;
                var r = N.user.medal_logo;
                var g = N.user.grade_logo;
                var o = N.user.goldbl_logo;
                var y = N.user.rank_logo;
                $("body").append('<input id="log_status" type="hidden" value="1" />');
                if (k != "") {
                    if (k.administrator || k.editor || k.pinglun || k.edit_posts || k.moderate_comments) {
                        $("body").append('<input type="hidden" id="authority" value="editor" />');
                        $("#authority").val("all");
                    }
                }
                $("#navBar_login,#navBar_reg").hide();
                $("#navBar_login_Info").find(".nickName").html(m);
                $("#navBar_login_Info").show();
                if (G != 0 || p != 0) {
                    if (G != 0) {
                        var h = K.message.url;
                        $("#notice_message").attr("href", h).find("em").html(G);
                        $("#user_menu_message").find("a").attr("href", h).html("我的消息<span>" + G + "</span>");
                    } else {
                        $("#notice_message").hide();
                    }
                    if (p != 0) {
                        var I = K.comment.url;
                        $("#notice_comment").attr("href", I).find("em").html(p);
                        $("#user_menu_comment").find("a").attr("href", I).html("我的评论<span>" + p + "</span>");
                    } else {
                        $("#notice_comment").hide();
                    }
                    $("#chief_notice").show().find(".close").click(function() {
                        $("#chief_notice").hide();
                    }
                    );
                    $("#chief_notice").slideDown("slow");
                } else {
                    $("#chief_notice").hide();
                }
                if ($("#user_info").length > 0) {
                    $("#sign_login").hide();
                    $("#user_info_avatar").attr({
                        "src": u,
                        "alt": m
                    }).unwrap("span").wrap('<a href=" ' + M + ' " class="userPic" target="_blank"></a>');
                    var x = N.user.has_christmas_hat;
                    if (x) {
                        $(".userPic").before('<a class="hat" href="http://news.smzdm.com/p/16803" title="七夕快乐！" target="_blank"></a>');
                    }
                    $("#user_info_name").html(' <a href=" ' + M + ' " title=" ' + m + ' " target="_blank">' + m + "</a>" + r + g + o + " " + y);
                    $("#user_info_score").find("em").html(H).end().next("a").andSelf().show();
                    $("#user_info_gold").find("em").html(q).end().next("a").andSelf().show();
                    $("#user_info_tosign").unbind("click").bind("click", b);
                    if (w) {
                        var t = parseInt($("#user_info").attr("needMobileTips"));
                        $("#user_info_tosign").html("已签到" + B + "天").removeClass("signScore").addClass("signScored").unbind("click");
                        if (t != 1) {
                            $("#user_info_tosign").attr("href", e + "/qiandao ");
                        }
                    }
                    var O = $("#channel").val();
                    if (O != "index") {
                        var L = N.user.checkin.slogan;
                        $(".scoreBox").after(L);
                    }
                }
                if (v && 1 == v) {
                    $("#comment_avatar").attr({
                        "src": no_avatar,
                        "alt": "匿名用户"
                    }).unwrap("span").wrap('<a href="javascript:void(0);" class="userPic"></a>');
                    $("#comment_avatar").parent(".userPic").after(' <span class="comment_nickName grey">匿名用户</span> ');
                } else {
                    $("#comment_avatar").attr({
                        "src": u,
                        "alt": m
                    }).unwrap("span").wrap('<a href=" ' + M + ' " class="userPic" target="_blank" title=" ' + m + ' "></a>');
                    $("#comment_avatar").parent(".userPic").after(' <a href=" ' + M + ' " class="comment_nickName a_underline" target="_blank"  title=" ' + m + ' ">' + m + "</a> ");
                    if (N.user.has_christmas_hat) {
                        $("#comment_avatar").parent(".userPic").before('<a class="hat" href="http://news.smzdm.com/p/16803" title="七夕快乐！" target="_blank"></a> ');
                    }
                }
                $("#comment_tips").remove();
                $(".noLogin").removeClass("noLogin");
                var A = $("#textareaComment").attr("default_data");
                $("#textareaComment").unbind("click").val(A).focus(function() {
                    if ($(this).val() == A) {
                        $(this).val("");
                    }
                    $(this).css("color", "#666");
                }
                ).blur(function() {
                    if ($(this).val() == "") {
                        $(this).val(A).css("color", "#ccc");
                    }
                }
                ).change(function() {
                    $("#textCommentSubmit").removeAttr("disabled");
                }
                );
                $(".comment_switch").show(function() {
                    if (l == "yes" && $("#commentform").find(".check").length > 0) {
                        $("#commentform").find(".check").addClass("icon-rightframe");
                    } else {
                        if (l == "no" && $("#commentform").find(".check").length > 0) {
                            $("#commentform").find(".check").removeClass("icon-rightframe");
                        }
                    }
                }
                );
                $("#textCommentSubmit").removeAttr("disabled").removeClass("btn_subGrey").addClass("btn_sub");
                for (var F = 0; F < D; F++) {
                    if (z[F] == 1) {
                        var J = N.user.bantips;
                        $("#textareaComment").html("").attr("disabled", "disabled");
                        $("#comment_error").html(J).show();
                        $("#textCommentSubmit").removeClass("btn_sub").addClass("btn_subGrey").attr("disabled", "disabled");
                        $(".comment_switch").hide();
                        $(".atta,.reply").unbind("click");
                        break;
                    }
                }
                showHidenNotice(".login_Info", "#chief_notice");
                showHidenNotice(".submission", "#chief_notice");
            } else {
                var E = parseInt(N.login_error_num);
                if (E >= 3) {
                    var C = $("#captcha_img").attr("data-src");
                    $("#captcha_img").attr("src", C);
                    $(".captcha_switch").show();
                }
            }
            if (N.c_close_enter) {
                $("#textareaComment").html("").attr("disabled", "disabled");
                $("#textCommentSubmit").removeClass("btn_sub").addClass("btn_subGrey").attr("disabled", "disabled");
                $(".comment_switch").hide();
                $(".atta,.reply").unbind("click");
                if (N.user.length == 0) {
                    $(".noLogin .comment_tips").unbind("click").remove();
                }
            }
        },
        error: function() {}
    });
}
function showHidenNotice(c, b) {
    if (!$(b).is(":hidden")) {
        $(c).hover(function() {
            $(b).hide();
        }
        , function() {
            $(b).show();
        }
        );
    }
}
function login_reg_input(b) {
    SetInputCss(b);
    $(b).mouseup(function() {
        SetInputCss(b);
    }
    );
    $(b).blur(function() {
        if ($.trim($(this).val()) == "") {
            $(this).removeClass("form-input-focus");
            $(this).prev().removeClass("item-tip-focus");
        }
    }
    );
    $(b).focus(function() {
        if (!$(this).hasClass("form-input-focus")) {
            $(this).addClass("form-input-focus");
            $(this).prev().addClass("item-tip-focus");
        }
    }
    );
    $(".item-tip").click(function() {
        $(this).next().focus();
    }
    );
}
function SetInputCss(b) {
    $(b).each(function() {
        if ($.trim($(this).val()) != "") {
            $(this).addClass("form-input-focus");
            $(this).prev().addClass("item-tip-focus");
        }
    }
    );
}
slidingFunction = function() {
    var k = navigator.userAgent.toLowerCase();
    var o = {
        IE: /msie/.test(k),
        OPERA: /opera/.test(k),
        MOZ: /gecko/.test(k),
        IE5: /msie 5 /.test(k),
        IE55: /msie 5.5/.test(k),
        IE6: /msie 6/.test(k),
        IE7: /msie 7/.test(k),
        SAFARI: /safari/.test(k)
    };
    var m = $("#footer").height();
    var g = $(window).width();
    var r = $(window).height();
    var f = $("section.wrap").width();
    var h = $("#leftLayer").height();
    var j = $("#rightLayer").height();
    var q = g / 2 - f / 2 - 10 - 48;
    var d = r / 2 - h / 2 - 50;
    if (q > 0) {
        $("#leftLayer").show().css({
            "left": q,
            "top": d
        });
        $("#rightLayer").show().css("right", q);
    } else {
        if (q = 0) {
            $("#leftLayer").show().css({
                "left": 0,
                "top": d
            });
            $("#rightLayer").show().css("right", 0);
        } else {
            $("#leftLayer").hide();
            $("#rightLayer").hide();
        }
    }
    var c = document.body.scrollTop || document.documentElement.scrollTop;
    (c > 300) ? $("#backToTop").css("display", "block") : $("#backToTop").css("display", "none");
    if (o.IE6) {
        $("#rightLayer").css("top", c + r - 166);
    }
    var p = $("body").height();
    var e = document.getElementById("rightLayer");
    if (e) {
        var b = $("#rightLayer").height() + 18;
        if (p <= c + r + m - b + 135) {
            var l = c + r + m + 20 - p;
            $("#rightLayer").css({
                position: "fixed",
                bottom: l
            });
        } else {
            $("#rightLayer").css({
                position: "fixed",
                bottom: 0
            });
        }
    }
}
;
function imgResizeFit() {
    if ($(".img-need-resize").length > 0) {
        $(".img-need-resize").each(function() {
            var b = $(this).attr("src");
            $(this).attr("src", "");
            this.onload = function() {
                var e = $(this).parent().innerWidth();
                var j = $(this).parent().innerHeight();
                var c = $(this).width();
                var d = $(this).height();
                var g = c / d;
                if (g > 1) {
                    var f = e / g;
                    $(this).width(e);
                    $(this).height(f);
                    $(this).css("margin-top", j / 2 - f / 2);
                } else {
                    $(this).width(j * g);
                    $(this).height(j);
                }
            }
            ;
            $(this).attr("src", b);
        }
        );
    }
}
function fixed_right(d) {
    if ($("#footer").length > 0 && $(".rightPanel").length > 0) {
        var k = d, q = 0, o = $("header").height(), m = $("#footer").height(), b = $(window).height(), r = $(".leftWrap").height(), f = $("aside").height(), c = $(".rightPanel:last"), p = $(".g_g:last"), l = $(".g_g").length, e, g, j, h;
        if (k == 1) {
            g = c.offset().top;
            j = c.outerHeight(true);
        }
        if (k == 2) {
            g = c.prev().offset().top;
            j = c.outerHeight(true) + c.prev().outerHeight(true);
        }
        $(window).scroll(function() {
            q = $(window).scrollTop();
            e = l > 0 ? (p.outerHeight(true) + 40) : 0;
            var u = $("#footer").offset().top;
            if (r > f) {
                if (q >= g) {
                    if (k == 2) {
                        c.prev().css({
                            "position": "fixed",
                            "top": "40px"
                        });
                        h = 40 + c.prev().outerHeight(true);
                        c.css({
                            "position": "fixed",
                            "top": h
                        });
                    } else {
                        if (k == 1) {
                            c.css({
                                "position": "fixed",
                                "top": "40px"
                            });
                        }
                    }
                } else {
                    if (q < g) {
                        c.prev().css({
                            "position": "static",
                            "top": "0"
                        });
                        c.css({
                            "position": "static",
                            "top": "0"
                        });
                    }
                }
                if (q > u - e - j) {
                    var t = u - e - q - j;
                    var s = t + c.prev().outerHeight(true);
                    if (k == 2) {
                        c.prev().css({
                            "position": "fixed",
                            "top": t
                        });
                        c.css({
                            "position": "fixed",
                            "top": s
                        });
                    }
                    if (k == 1) {
                        c.css({
                            "position": "fixed",
                            "top": t
                        });
                    }
                }
            }
        }
        );
    }
}
$.fn.autoTextarea = function(b) {
    if ($("#quickReply")) {
        var d = {
            maxHeight: null ,
            minHeight: $(this).height()
        };
        var c = $.extend({}, d, b);
        $(this).bind("paste cut keydown keyup focus blur", function() {
            var f, g = this.style;
            this.style.height = c.minHeight + "px";
            var e = $(this).css("padding-top").split("", 1);
            var h = parseInt(e);
            if (this.scrollHeight > c.minHeight) {
                if (c.maxHeight && this.scrollHeight > c.maxHeight) {
                    f = c.maxHeight - h;
                    g.overflowY = "scroll";
                } else {
                    f = this.scrollHeight - h;
                    g.overflowY = "hidden";
                }
                g.height = (f - h) + "px";
            }
        }
        );
    }
}
;
var _RollingMonitoring = {
    anchorDirectory: function(d) {
        var b = $(".news_content>h2");
        var e = $(d).find("dd");
        if (b.length == 0) {
            $(d).hide();
        } else {
            $(d).fadeIn();
            b.clone(true).appendTo(e).wrapInner('<a href="javascript:void(0);"></a>');
            var c = e.find("a");
            c.each(function(f) {
                $(this).addClass("cl_" + f);
                $(this).children().css({
                    color: "",
                    fontSize: ""
                });
            }
            );
            b.each(function(f) {
                $(this).attr("id", "cl_" + f);
            }
            );
        }
    },
    navSuctionTop: function(b, e) {
        if ($(b).length) {
            var c = $(b).offset().top
              , g = $(b).outerHeight(true)
              , h = $(".navBarWrap").height()
              , d = g + h
              , f = h + $("header").outerHeight(true) + $(".crumbs").height() + $("article").innerHeight() - g;
            $(window).scroll(function() {
                var j = $(window).scrollTop();
                if (j >= c && j < f) {
                    $(b).css("position", "fixed").addClass("current");
                    $(".news_content").css("padding-top", d - h);
                } else {
                    if (j < c || j > f) {
                        $(b).css("position", "static").removeClass("current");
                        $(".news_content").css("padding-top", "0");
                    }
                }
                $(e).each(function() {
                    var l = $(this).offset().top
                      , k = l - h - g;
                    if (j >= k) {
                        $(b).find("h2").removeClass().eq($(e).index(this)).addClass("active");
                    } else {
                        $(b).find("h2").eq($(e).index(this)).removeClass();
                    }
                }
                );
            }
            );
        }
    },
    anchorTop: function(c, b) {
        if ($(c).length) {
            var d = $(c).offset().top
              , f = $(".navBarWrap").height()
              , e = $(c).outerHeight(true);
            $(window).scroll(function() {
                var g = $(window).scrollTop();
                if (g >= d - f) {
                    $(c).css("position", "fixed").addClass("current");
                    $(b).css("paddingTop", e);
                } else {
                    $(c).css("position", "static").removeClass("current");
                    $(b).css("paddingTop", 0);
                }
            }
            );
        }
    },
    anchorClick: function(b) {
        if ($(b).length) {
            $(b).find("a").each(function() {
                $(this).click(function() {
                    var e = $(b).outerHeight(true) + $(".navBarWrap").height();
                    var d = $(this).attr("class");
                    var c = $("#" + d).offset().top;
                    $("html,body").animate({
                        scrollTop: c - e
                    }, 150);
                    return false;
                }
                );
            }
            );
        }
    }
};
function banner_pages(b) {
    a = $(b).find(".slick-dots").find(".slick-active a").html();
    n = $(b).find(".slick-dots li:last a").html();
    if (a == undefined || n == undefined) {
        $(b).find(".custom_page").hide();
    } else {
        $(b).find(".custom_page").html(a + " / " + n);
        setTimeout(function() {
            banner_pages(b);
        }
        , 0);
    }
}
function scored(d, c) {
    var b = $(d);
    if (b.find("a").hasClass(c)) {
        b.mouseover(function() {
            $(this).find("." + c).css("display", "none");
            $(this).find(".scoredInfo").css("display", "block");
        }
        );
        b.mouseout(function() {
            $(this).find("." + c).css("display", "block");
            $(this).find(".scoredInfo").css("display", "none");
        }
        );
    }
}
function showMore(e, c, b) {
    var d = $(c).outerHeight();
    if (d > b) {
        $(e).css("display", "block");
        $(c).css("height", "100px");
        $(e).bind("click", function() {
            $(c).css("height", "auto");
            $(this).hide();
        }
        );
    }
}
function picScroll(b) {
    $(b).each(function() {
        var e = $(this).find(".smallImgList li").length;
        var k = $(this).find(".smallImgList li").outerWidth();
        var m = e * k;
        var f = 0;
        var c;
        var o = 7;
        var h = $(this).find(".smallImgList li").eq(0).find("a").attr("rel");
        var l = "<img src=" + h + '  alt="" />';
        $(this).find(".aimgcon").html(l);
        $(this).find(".smallImgList").css("width", m + "px");
        $(this).find(".smallImgList li").each(function(j) {
            $(this).click(function() {
                clearInterval(c);
                $(this).siblings("li").removeClass("thisimg").end().addClass("thisimg");
                f = j;
                var r = $(this).find("a").attr("rel");
                var q = "<img src=" + r + '  alt="" />';
                var s = '<span class="imgLoading"><img src="loading.gif"/*tpa=http://www.smzdm.com/resources/public/img/loading.gif*/ alt="图片加载中" title="图片加载中" /></span>';
                var p = $(this).parents(b);
                p.find(".aimgcon").html(q).fadeIn("slow");
                p.find(".imgLoading").remove();
                p.find(".imgContent").append(s);
                p.find(".aimgcon img").load(function() {
                    p.find(".imgLoading").remove();
                    p.find(".aimgcon img").fadeIn("slow");
                }
                );
                return false;
            }
            );
        }
        );
        $(this).find(".img-next").click(function() {
            clearInterval(c);
            if (!$(this).find(".smallImgList").is(":animated")) {
                f++;
                f = f % e;
                var q = $(this).parents(b).find(".smallImgList li");
                var r = q.eq(f).find("a").attr("rel");
                q.removeClass();
                q.eq(f).addClass("thisimg");
                var p = "<img src=" + r + '  alt="" />';
                var s = '<span class="imgLoading"><img src="loading.gif"/*tpa=http://www.smzdm.com/resources/public/img/loading.gif*/ alt="图片加载中" title="图片加载中" /></span>';
                var j = $(this).parents(b);
                j.find(".aimgcon").html(p).fadeIn("slow");
                j.find(".imgLoading").remove();
                j.find(".imgContent").append(s);
                j.find(".aimgcon img").load(function() {
                    j.find(".imgLoading").remove();
                    j.find(".aimgcon img").fadeIn("slow");
                }
                );
            }
            return false;
        }
        );
        $(this).find(".img-prev").click(function() {
            clearInterval(c);
            if (!$(this).find(".smallImgList").is(":animated")) {
                f--;
                f = f % e;
                var q = $(this).parents(b).find(".smallImgList li");
                var r = q.eq(f).find("a").attr("rel");
                q.removeClass();
                q.eq(f).addClass("thisimg");
                var p = "<img src=" + r + '  alt="" />';
                var s = '<span class="imgLoading"><img src="loading.gif"/*tpa=http://www.smzdm.com/resources/public/img/loading.gif*/ alt="图片加载中" title="图片加载中" /></span>';
                var j = $(this).parents(b);
                j.find(".aimgcon").html(p).fadeIn("slow");
                j.find(".imgLoading").remove();
                j.find(".imgContent").append(s);
                j.find(".aimgcon img").load(function() {
                    j.find(".imgLoading").remove();
                    j.find(".aimgcon img").fadeIn("slow");
                }
                );
            }
            return false;
        }
        );
        if ($(this).find(".smallImgTab").length) {
            if (e > o) {
                $(this).find(".prevPic").show();
                $(this).find(".nextPic").show();
            }
            var g = Math.ceil(e / o)
              , d = 0;
            $(this).find(".nextPic").click(function() {
                d++;
                d = d % g;
                var j = $(this).parent(".smallImgTab")
                  , p = j.find(".smallImgList");
                if (d < g) {
                    p.animate({
                        left: -k * o * d
                    });
                } else {
                    if (d == g) {
                        p.animate({
                            left: 0
                        });
                    }
                }
            }
            );
            $(this).find(".prevPic").click(function() {
                d--;
                d = d % g;
                var j = $(this).parent(".smallImgTab")
                  , p = j.find(".smallImgList");
                if (d > -g && d < 0) {
                    p.animate({
                        left: k * o * (-(g + d))
                    });
                } else {
                    if (d == 0) {
                        p.animate({
                            left: 0
                        });
                    }
                }
            }
            );
        }
    }
    );
}
$(function() {
    picScroll(".banner_scroll");
    showMore("#baoliao_show", "#baoliao_info", 100);
    _RollingMonitoring.anchorDirectory(".list_catalogue");
    _RollingMonitoring.anchorClick(".list_catalogue");
    _RollingMonitoring.anchorClick(".xiTop");
    $(window).load(function() {
        _RollingMonitoring.navSuctionTop(".list_catalogue", ".news_content>h2");
        _RollingMonitoring.anchorTop(".xiTop", ".indexList");
    }
    );
    if ($(".slider").length > 0) {
        $(".banner_page").slick({
            dots: true,
            infinite: true,
            autoplay: true,
            draggable: false,
            pauseOnHover: true,
            autoplaySpeed: 10000,
            speed: 400,
            slidesToShow: 4,
            slidesToScroll: 4
        });
        $(".banner_nopage").slick({
            dots: false,
            infinite: true,
            autoplay: true,
            draggable: false,
            pauseOnHover: true,
            autoplaySpeed: 10000,
            speed: 400,
            slidesToShow: 4,
            slidesToScroll: 4
        });
        $(".single-item").slick({
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 400,
            slidesToShow: 1,
            slidesToScroll: 1
        });
        $(".AddSlider").slick({
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 400,
            slidesToShow: 1,
            draggable: false,
            pauseOnHover: true,
            slidesToScroll: 1
        });
    }
    $("#quickComment").autoTextarea({
        maxHeight: 200
    });
    if (zhiyou_open) {
        zhiyou_relate.request_zhiyou_info();
    } else {
        requestUserInfo();
    }
    voteTopic("#topicOnExp li", 3, "icon-rightframe", "#voteForm", "#voteBtn");
    voteTopic("#topicOnExpLeft li", 3, "icon-rightframe", "#topic_vote_form", "#topic_vote_btn");
    voteTopic(".inner_per_item span", 2, "icon-loginkuangright", ".bl_white_bg", "");
    $(".bl_other_link").each(function() {
        $(this).focus(function() {
            var EPl = $(this).parent();
            var length = $(this).parents(".bl_white_bg").find(".icon-loginkuangright").length;
            if (length < 2) {
                EPl.find("i").addClass("icon-loginkuangright");
                EPl.find(".checkbox_hide").attr("checked", "true");
            }
            var ishave = $(this).parent().siblings().find(".icon-loginkuangright").length;
            if (length == 1 && ishave == 1) {
                $(this).parents(".bl_white_bg").find("i").not(".icon-loginkuangright").hide();
            }
        }
        );
    }
    );
    if (zhiyou_open) {
        var config = {
            "redirect_url": encodeURIComponent(window.location.href)
        };
        zhiyou_relate.popup_login_init(config);
    } else {
        login();
        register();
    }
    tab(".tab_li", ".tab_info", "current_item", "hover");
    tab(".tab_set_li", ".tab_set_info", "current_item", "hover");
    tab(".tab_faxian_li", ".tab_info_con", "current_item", "hover");
    tab(".mult-nav span", ".mult-nav-part", "mult-nav-hover", "hover");
    more_link(".buy");
    indexTagChange();
    listIntoGraphic(".rightHotExp");
    listIntoGraphic(".rightHotNews");
    listIntoGraphic(".hotOverseaNews");
    showHide(".moreNav", "moreNavHover", ".more_moreNav");
    showHide(".submission", "submissionHover", ".more_submission");
    showHide(".login_Info", "login_InfoHover", ".more_login_Info");
    showHide(".share_box", "", ".more_share");
    showHide(".erweimaWrap", "", ".erweimaContent");
    showHide(".mobile-go-buy", "", ".more-app-go-buy");
    showHide(".weixin-go-buy", "", ".more-app-go-buy");
    showHide("#show-order", "", ".more-show-order");
    showHideClick(".span_checkbox", ".bl_switch");
    zhankaiCon(".ninePicBox li a img", ".tabCon");
    placehold(".input_style");
    placehold(".inputBox");
    placehold(".bl_other_link");
    $("#bl_select_cate").change(function() {
        var optionVal = $("#bl_select_cate").find("option:selected").val();
        if (optionVal == "1") {
            $(".bl_select_switch").css("display", "none");
            $(".bl_input_switch").css("display", "block");
            $(".bl_div_switch").css("display", "block");
            $("#span_price").css("display", "block");
        } else {
            if (optionVal == "0") {
                $(".bl_select_switch").css("display", "block");
                $(".bl_input_switch").css("display", "none");
                $(".bl_div_switch").css("display", "none");
                $("#span_price").css("display", "none");
            }
        }
    }
    );
    openClose("a.more","a.pickup","mallNav");$(".button_add").bind("click", articleLinkAdd);
    $(".button_reduce").click(function() {
        $(this).parent().prevAll().addClass("moreitemlink");
        $(this).parent().next().removeClass("moreitemlink");
        $(this).parent().remove();
        var link_length = $(".good_link").length;
        if (link_length < 3) {
            $(".good_link").find(".button_add").removeClass("disabled");
        }
    }
    );
    if (zhiyou_open) {
        $("#navBar_login, #user_info_tosign, #sign_login a").addClass("zhiyou_login");
    } else {
        popUp("#navBar_login", "#pop-login", "");
        popUp("#user_info_tosign", "#pop-login", "");
        popUp("#sign_login a", "#pop-login", "");
    }
    popUp(".upload_content img", ".large_img", "");
    login_reg_input(".form-input");
    slidingFunction();
    $(".goTotop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 150);
    }
    );
    if ($("#channel").val() == "qingdan") {
        fixed_right(1);
    } else {
        var screenHeight = window.screen.height;
        if (screenHeight < 800) {
            fixed_right(1);
        } else {
            fixed_right(ad_scroll);
        }
    }
    fixFooterPosition("#footer_fixed");
    $(window).scroll(function() {
        slidingFunction();
    }
    );
    if ($("#noListLoad").length == 0) {
        scrollBind();
    }
    $(window).resize(function() {
        fixFooterPosition("#footer_fixed");
        slidingFunction();
        if ($("#channel").val() == "qingdan") {
            fixed_right(1);
        } else {
            var screenHeight = window.screen.height;
            if (screenHeight < 800) {
                fixed_right(1);
            } else {
                fixed_right(ad_scroll);
            }
        }
    }
    );
    imgResizeFit();
    set_collect_current();
    set_loverating_current();
    $("#quickComment").autoTextarea({
        maxHeight: 200
    });
    $("#voteBtn").click(function() {
        ga("send", "event", "经验盒子", "详情_系列_话题投票", "投票");
        $.ajax({
            url: "/add_vote",
            type: "post",
            data: $("#voteForm").serialize(),
            dataType: "json",
            success: function(data) {
                var d = data;
                if (d.error_code == 0) {
                    $("#vote_part").html(d.back_view);
                    $("#vote_count").html(d.vote_count);
                    $(".voteAnimate").each(function() {
                        var tmp_arr = $(this).attr("id").split("_");
                        var vid = tmp_arr[1];
                        if ($.inArray(vid, d.vote_items) != -1) {
                            $(this).fadeIn().animate({
                                top: "-5px"
                            }, "normal").fadeOut(300);
                        }
                    }
                    );
                    $(".progressing").each(function() {
                        $(this).data("origWidth", $(this).width()).width(0).animate({
                            width: $(this).data("origWidth")
                        }, 1200);
                    }
                    );
                } else {
                    if (d.back_view) {
                        $("#vote_part").html(d.back_view);
                        $(".progressing").each(function() {
                            $(this).data("origWidth", $(this).width()).width(0).animate({
                                width: $(this).data("origWidth")
                            }, 1200);
                        }
                        );
                    }
                    alert(d.error_msg);
                    return;
                }
            }
        });
    }
    );
    $("#topic_vote_btn").click(function() {
        ga("send", "event", "经验盒子", "列表_话题_投票按钮", "");
        $.ajax({
            url: "/add_vote",
            type: "post",
            data: $("#topic_vote_form").serialize(),
            dataType: "json",
            success: function(data) {
                var d = data;
                $(".listItem .i_checkbox").hide();
                $("#topic_vote_btn").hide();
                if (d.error_code == 0) {
                    $("#vote_part").html(d.back_view);
                    $("#vote_count").html(d.vote_count);
                    $("#topic_vote_btn").hide();
                    $("#vote_comment").html("投票成功！");
                    $("#topic_vote_count").html("&nbsp;" + d.vote_count + "&nbsp;");
                    $(".voteAnimate").each(function() {
                        var tmp_arr = $(this).attr("id").split("_");
                        var vid = tmp_arr[1];
                        if ($.inArray(vid, d.vote_items) != -1) {
                            $(this).fadeIn().animate({
                                top: "-5px"
                            }, "normal").fadeOut(300);
                        }
                    }
                    );
                    $(".progressing").each(function() {
                        $(this).data("origWidth", $(this).width()).width(0).animate({
                            width: $(this).data("origWidth")
                        }, 1200);
                    }
                    );
                } else {
                    if (d.back_view) {
                        $("#vote_part").html(d.back_view);
                        $(".progressing").each(function() {
                            $(this).data("origWidth", $(this).width()).width(0).animate({
                                width: $(this).data("origWidth")
                            }, 1200);
                        }
                        );
                    }
                    $("#vote_comment").hide();
                    alert(d.error_msg);
                    return;
                }
            }
        });
    }
    );
    $("#want_btn").click(function() {
        if ($.trim($("#want_txt").val()) != "" && $.trim($("#want_txt").val()) != "提交您想看到的其他经验吧~") {
            $.ajax({
                url: "/add_suggest",
                type: "post",
                data: $("#want_vote").serialize(),
                dataType: "json",
                success: function(data) {
                    var d = eval(data);
                    if (d.error_code == 0 || d.error_code == 1) {
                        $("#want_txt").val("");
                        $("#want_btn").removeClass(".btn_voteCurrent").attr("disabled", true);
                        $("body").append('<div class="pop pop_no_title" id="pop-vote"><i class="pop-close icon-cross-lighter"><!--[if lt IE 8]>x<![endif]--></i><div class="pop-content oneLine"><i class="icon-loginright"><!--[if lt IE 8]>√<![endif]--></i><p class="pop_info"></p></div></div>');
                        popUp("", "#pop-vote", d.error_msg);
                    }
                    return;
                }
            });
        } else {
            return;
        }
    }
    );
    $("#want_txt").keydown(function() {
        if ($("#want_txt").val().length >= 4 && $.trim($("#want_txt").val()) != "提交您想看到的其他经验吧~") {
            $("#want_btn").addClass("btn_voteCurrent").attr("disabled", false);
        } else {
            $("#want_btn").removeClass("btn_voteCurrent").attr("disabled", true);
        }
    }
    );
    var vote_period = getCookie("vote_period");
    if (vote_period != null  && ($("#cur_vote").val() == vote_period || $("#topic_cur_vote").val() == vote_period)) {
        $("#vote_yet").hide();
        $("#voted").show();
        $(".listItem .i_checkbox").hide();
        $("#topic_vote_btn").hide();
        $("#vote_comment").hide();
        $(".voteProgressing").each(function() {
            $(this).data("origWidth", $(this).width()).width(0).animate({
                width: $(this).data("origWidth")
            }, 1200);
        }
        );
    }
    if (getCookie("post_permission") && typeof (getCookie("post_permission")) != undefined) {
        if ($(".list").length > 0) {
            listAddEditStart();
        }
        if ($("#isDetail").length > 0) {
            detailAddEditStart();
        }
        if ($("#comments .tab_info .comment_listBox").length > 0) {
            $(".comment_listBox li.comment_list, .comment_listBox li.comment_list blockquote").each(function() {
                var commentID = $(this).attr("blockquote_cid");
                var userID = $(this).find(".user_name:first").attr("usmzdmid");
                if ($(this).hasClass("comment_list")) {
                    var commentIdArray = $(this).attr("id").split("_");
                    commentID = commentIdArray[commentIdArray.length - 1];
                }
                var mosaicDom = '<a href="javascript:void(0);" title="打码" onclick="mosaic_show_textarea(' + commentID + ')">打码</a>';
                if (zhiyou_open) {
                    var blackListDom = '<a href="http://users.bgm.smzdm.com/blackroom/user_add?smzdm_id=' + userID + '" title="关小黑屋">关小黑屋</a>';
                } else {
                    var blackListDom = '<a href="http://bgm.smzdm.com/blackroom/blackroom/user_add?user_smzdm_id=' + userID + '" title="关小黑屋">关小黑屋</a>';
                }
                if (userID == 0 || userID == undefined) {
                    blackListDom = "";
                }
                var deleteDom = '<a href="javascript:void(0);" onclick="commentDelete(' + commentID + ',1)" title="删除">删除</a>';
                var editDom = "";
                var controls = mosaicDom + blackListDom + deleteDom + editDom;
                $(this).find(".dingNum:last").before(controls);
            }
            );
        }
    }
    scored("#details-zan", "current");
}
);
function oncheckpage(b, c, f) {
    var e = $(f).parent().parent().find(".jumpToPage #input_num").val();
    var d = /^[1-9]+[0-9]*]*$/;
    if (d.test(e)) {
        if (e <= 0) {
            e = 1;
        }
        if (e > b) {
            e = b;
        }
        location.href = c + "1" + "#comments";
        if (e >= 1) {
            location.href = c + e + "#comments";
        }
    } else {
        alert("请输入有效数字！");
    }
    return true;
}
function json_encode(f) {
    var c = this.window.JSON;
    if (typeof c === "object" && typeof c.stringify === "function") {
        return c.stringify(f);
    }
    var d = f;
    var b = function(g) {
        var j = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        var h = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        };
        j.lastIndex = 0;
        return j.test(g) ? '"' + g.replace(j, function(k) {
            var l = h[k];
            return typeof l === "string" ? l : "\\u" + ("0000" + k.charCodeAt(0).toString(16)).slice(-4);
        }
        ) + '"' : '"' + g + '"';
    }
    ;
    var e = function(s, o) {
        var q = "";
        var h = "    ";
        var l = 0;
        var j = "";
        var t = "";
        var g = 0;
        var p = q;
        var m = [];
        var r = o[s];
        if (r && typeof r === "object" && typeof r.toJSON === "function") {
            r = r.toJSON(s);
        }
        switch (typeof r) {
        case "string":
            return b(r);
        case "number":
            return isFinite(r) ? String(r) : "null";
        case "boolean":
        case "null":
            return String(r);
        case "object":
            if (!r) {
                return "null";
            }
            q += h;
            m = [];
            if (Object.prototype.toString.apply(r) === "[object Array]") {
                g = r.length;
                for (l = 0; l < g; l += 1) {
                    m[l] = e(l, r) || "null";
                }
                t = m.length === 0 ? "[]" : q ? "[\n" + q + m.join(",\n" + q) + "\n" + p + "]" : "[" + m.join(",") + "]";
                q = p;
                return t;
            }
            for (j in r) {
                if (Object.hasOwnProperty.call(r, j)) {
                    t = e(j, r);
                    if (t) {
                        m.push(b(j) + (q ? ": " : ":") + t);
                    }
                }
            }
            t = m.length === 0 ? "{}" : q ? "{\n" + q + m.join(",\n" + q) + "\n" + p + "}" : "{" + m.join(",") + "}";
            q = p;
            return t;
        }
    }
    ;
    return e("", {
        "": d
    });
}
function json_decode(str_json) {
    var json = this.window.JSON;
    if (typeof json === "object" && typeof json.parse === "function") {
        return json.parse(str_json);
    }
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    var j;
    var text = str_json;
    cx.lastIndex = 0;
    if (cx.test(text)) {
        text = text.replace(cx, function(a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
        }
        );
    }
    if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
        j = eval("(" + text + ")");
        return j;
    }
    throw new SyntaxError("json_decode");
}
function getCookie(c) {
    var b, d = new RegExp("(^| )" + c + "=([^;]*)(;|$)");
    if (b = document.cookie.match(d)) {
        return unescape(b[2]);
    } else {
        return "";
    }
}
function setCookie(h, g, f, e, c, d) {
    f = f ? f : 604800;
    f = f * 1000;
    var b = new Date();
    b.setTime(b.getTime() + f);
    document.cookie = escape(h) + "=" + escape(g) + (b ? "; expires=" + b.toGMTString() : "") + (e ? "; path=" + e : "/") + (c ? "; domain=" + c : "") + (d ? "; secure" : "");
    return;
}
function setCookieArr1(k, h, m, q, f, b) {
    var c = getCookie(k);
    var o;
    if (c) {
        o = json_decode(c);
    }
    if (o) {
        var e = o.length;
        if (e >= cookie_length_limit) {
            var l = new Array();
            o[cookie_length_limit] = h;
            for (var g in o) {
                if (g <= e - 1) {
                    var d = parseInt(g) + 1;
                    l[g] = o[d.toString()];
                }
            }
            o = l;
        } else {
            o[e] = h;
        }
    } else {
        var o = new Array();
        o[0] = h;
    }
    var p = json_encode(o);
    m = m ? m : 604800;
    setCookie(k, p, m, q, f, b);
    return;
}
function getBooInCookieArr1(f, d) {
    var c = getCookie(f);
    if (c) {
        var e = json_decode(c);
        if (e) {
            for (var b in e) {
                if (e[b] && e[b] == d) {
                    return true;
                }
            }
        }
    }
    return false;
}
function setCookieArr2(m, f, e, p, r, k, c) {
    var g = getCookie(m);
    var b;
    if (g) {
        b = json_decode(g);
    }
    if (b) {
        var d = b.length;
        if (d >= cookie_length_limit) {
            var o = new Array();
            b[cookie_length_limit] = new Array();
            b[cookie_length_limit][0] = f;
            b[cookie_length_limit][1] = e;
            for (var l in b) {
                if (l <= d - 1) {
                    var h = parseInt(l) + 1;
                    o[l] = b[h.toString()];
                }
            }
            b = o;
        } else {
            b[d] = new Array();
            b[d][0] = f;
            b[d][1] = e;
        }
    } else {
        var b = new Array();
        b[0] = new Array();
        b[0][0] = f;
        b[0][1] = e;
    }
    var q = json_encode(b);
    p = p ? p : 604800;
    setCookie(m, q, p, r, k, c);
    return;
}
function getBooInCookieArr2(f, e) {
    var d = getCookie(f);
    if (d) {
        var b = json_decode(d);
        if (b) {
            for (var c in b) {
                if (b[c] && b[c][0] && b[c][0] == e) {
                    return true;
                }
            }
        }
    }
    return false;
}
function ajax_collect(article_id, channel, obj) {
    if (zhiyou_open) {
        zhiyou_relate.add_favorite(article_id, channel, obj);
        return;
    }
    if (!collect_status) {
        popUp("", "#pop-closed", "服务器君奔赴双11前线，家里没余粮，收藏君悲痛欲绝自挂东南枝了。");
        return;
    }
    var collection_uri = "";
    if (channel == 2) {
        var url = smzdm_faxian;
        collection_uri = faxian_collection;
    } else {
        if (channel == 3) {
            var url = smzdm_show;
            collection_uri = show_collection;
        } else {
            if (channel == 4) {
                var url = smzdm_jingyan;
                collection_uri = jingyan_collection;
            } else {
                if (channel == 5) {
                    var url = smzdm_haitao;
                    collection_uri = haitao_collection;
                } else {
                    if (channel == 6) {
                        var url = smzdm_news;
                        collection_uri = news_collection;
                    } else {
                        if (channel == 7) {
                            var url = smzdm_test;
                            collection_uri = test_collection;
                        } else {
                            if (channel == 11) {
                                var url = smzdm_yuanchuang;
                                collection_uri = yuanchuang_collection;
                            } else {
                                var url = smzdm_www;
                                collection_uri = youhui_collection;
                            }
                        }
                    }
                }
            }
        }
    }
    $.ajax({
        url: "/ajax_collect",
        type: "post",
        data: "article_id=" + article_id + "&channel=" + channel,
        dataType: "json",
        success: function(data) {
            var d = eval(data);
            if (d.error_code == 0) {
                if (collection_uri) {
                    $("#pop-collect .pop_info_show a:first").attr("href", collection_uri);
                }
                popPosition("#pop-collect");
                $("#pop-collect").show();
                $("#cover").show();
                popClose("#pop-collect");
                $("a[id='collect_" + channel + "_" + article_id + "']").each(function() {
                    $(this).attr("class", "fav current");
                    $(this).find("em").html(Number($(this).find("em").html()) + 1);
                }
                );
                popUp("", "#pop-collect", "");
            } else {
                if (d.error_code == 2) {
                    if (collection_uri) {
                        $("#pop-nocollect .pop_info_show a:first").attr("href", collection_uri);
                    }
                    popPosition("#pop-nocollect");
                    $("#pop-nocollect").show();
                    $("#cover").show();
                    popClose("#pop-nocollect");
                    $("a[id='collect_" + channel + "_" + article_id + "']").each(function() {
                        $(this).attr("class", "fav");
                        $(this).find("em").html(Number($(this).find("em").html()) - 1);
                    }
                    );
                    popUp("", "#pop-nocollect", "");
                } else {
                    if (d.error_code == 5) {
                        if (zhiyou_open) {
                            zhiyou_relate.popup_login_show();
                        } else {
                            popPosition("#pop-login");
                            $("#pop-login").show();
                            $("#cover").show();
                            popClose("#pop-login");
                        }
                    } else {
                        if (d.error_code == 6) {
                            popUp("", "#pop-closed", "服务器君奔赴双11前线，家里没余粮，收藏君悲痛欲绝自挂东南枝了。");
                        } else {}
                    }
                }
            }
            return;
        }
    });
}
function set_collect_current() {
    if (zhiyou_open) {
        zhiyou_relate.init_favorite_by_cookie();
        return;
    }
    $(".fav").each(function() {
        var e = new Array([1, "post"],[2, "faxian"],[3, "ordershow"],[4, "experience"],[5, "haitao"],[6, "news"],[7, "test"]);
        var h = $(this).attr("id");
        if (typeof (h) != "undefined") {
            var c = h.split("_");
            var f = c[2];
            var d = c[1];
            for (i = 0; i < e.length; i++) {
                var b = getCookie("smzdm_collection_" + e[i][1]);
                var g = b.split(",");
                if (d == e[i][0] && $.inArray(f, g) > -1) {
                    $(this).attr("class", "fav current");
                }
            }
        }
    }
    );
}
function ajax_love(article_id, channel, obj) {
    if (zhiyou_open) {
        var rating = 1;
        zhiyou_relate.add_rating("zan", article_id, channel, rating, obj);
        return;
    }
    if (channel == 2) {
        var url = smzdm_faxian;
    } else {
        if (channel == 3) {
            var url = smzdm_show;
        } else {
            if (channel == 4) {
                var url = smzdm_jingyan;
            } else {
                if (channel == 6) {
                    var url = smzdm_news;
                } else {
                    if (channel == 7) {
                        var url = smzdm_test;
                    }
                }
            }
        }
    }
    $(obj).removeAttr("onclick");
    $(obj).css("cursor", "default");
    $.ajax({
        url: "/ajax_love",
        type: "post",
        data: "article_id=" + article_id + "&channel=" + channel,
        dataType: "json",
        success: function(data) {
            var d = eval(data);
            if (d.error_code == 0) {} else {
                if (d.error_code == 2) {} else {
                    if (d.error_code == 6) {} else {}
                }
            }
            $(obj).find("span.addNumber").fadeIn().animate({
                top: "-35px"
            }, "normal").fadeOut(300);
            $(obj).attr("class", "zan current");
            scored("#details-zan", "current");
            if ($(obj).find("em").length > 0) {
                $(obj).find("span.scoreAnimate").fadeIn().animate({
                    top: "-35px"
                }, "normal").fadeOut(300, function() {
                    $(obj).find("em").html(Number($(obj).find("em").html()) + 1);
                }
                );
            } else {
                if ($(obj).parents(".show_exp_zan").find("em").length > 0) {
                    $(obj).parents(".show_exp_zan").find("em").html(Number($(obj).parents(".show_exp_zan").find("em").html()) + 1);
                } else {
                    $(obj).parents(".show_exp_zan").find(".grey").html("已有<em>1</em>人赞过");
                }
            }
            return;
        }
    });
}
function set_loverating_current() {
    if (zhiyou_open) {
        zhiyou_relate.init_rating_by_cookie();
        return;
    }
    $(".zan").each(function() {
        var e = new Array([2, "faxian"],[3, "ordershow"],[4, "experience"],[6, "news"],[7, "test"],[9, "qingdan"]);
        var h = $(this).attr("id");
        if (typeof (h) != "undefined") {
            var c = h.split("_");
            var f = c[3];
            var d = c[2];
            for (i = 0; i < e.length; i++) {
                var b = getCookie("smzdm_loverating_" + e[i][1]);
                var g = b.split(",");
                if (d == e[i][0] && $.inArray(f, g) > -1) {
                    $(this).attr("class", "zan current");
                    $(this).removeAttr("onclick");
                    $(this).css("cursor", "default");
                }
            }
        }
    }
    );
}
function ajax_report(article_id, obj) {
    $.ajax({
        url: "/ajax_report",
        type: "post",
        data: "article_id=" + article_id,
        dataType: "json",
        success: function(data) {
            var d = eval(data);
            if (d.error_code == 0) {
                reportstyle(obj, 0);
            } else {
                if (d.error_code == 2) {
                    reportstyle(obj, 2);
                } else {}
            }
            return;
        }
    });
}
$(function() {
    $(".noGoods").each(function() {
        var b = $(this).attr("id").split("_")[2];
        var c = getCookie("post_reported");
        var d = c.split(",");
        if ($.inArray(b, d) > -1) {
            $(this).html("已举报");
            $(this).removeAttr("onclick");
        }
    }
    );
}
);
function reportstyle(c, b) {
    $(c).html("已举报");
    $(c).removeAttr("onclick");
    if (b == 2) {
        popPosition("#pop-postreportexist");
        $("#pop-postreportexist").show();
        $("#cover").show();
        popClose("#pop-postreportexist");
        popUp("", "#pop-postreportexist", "");
    } else {
        popPosition("#pop-postreport");
        $("#pop-postreport").show();
        $("#cover").show();
        popClose("#pop-postreport");
        popUp("", "#pop-postreport", "");
    }
}
function rating(c, h, g) {
    if (zhiyou_open) {
        if (h == 1) {
            var f = 1;
        } else {
            var f = -1;
        }
        zhiyou_relate.add_rating("zhi_list", c, g, f);
        return;
    }
    var d = $("#rating_worthy_" + c);
    var e = $("#rating_unworthy_" + c);
    d.removeAttr("onclick").css("cursor", "default");
    e.removeAttr("onclick").css("cursor", "default");
    if (h == 1) {
        d.addClass("current").addClass("worthCurrent");
        e.addClass("unworthCurrent");
    } else {
        d.addClass("worthCurrent");
        e.addClass("current").addClass("unworthCurrent");
    }
    var b = "/ajax_rating";
    $.ajax({
        url: b,
        type: "post",
        data: {
            rating_acticle_id: c,
            rating_rating: h,
            rating_article_type: g
        },
        dataType: "json",
        success: function(j) {
            if (j.error_code == 0 || j.error_code == 2 || j.error_code == 6) {
                if (h == 1) {
                    d.find(" .scoreAnimate").fadeIn().animate({
                        top: "-30px"
                    }, "normal").fadeOut(300);
                    d.find(" .scoreTotal").html("<b>值</b> " + j.worthy_num);
                } else {
                    e.find(" .scoreAnimate").fadeIn().animate({
                        top: "30px"
                    }, "normal").fadeOut(300);
                    e.find(" .scoreTotal").html("<b>不值</b> " + j.unworthy_num);
                }
            }
        }
    });
}
function single_rating(j, c, h) {
    if (zhiyou_open) {
        if (c == 1) {
            var k = 1;
        } else {
            var k = -1;
        }
        zhiyou_relate.add_rating("zhi_in", j, h, k);
        return;
    }
    var g = $("#rating_" + j);
    var l = $("#rating_worthy");
    var d = $("#rating_unworthy");
    l.removeAttr("onclick").css("cursor", "default").addClass("worthCurrent");
    d.removeAttr("onclick").css("cursor", "default").addClass("unworthCurrent");
    scored("#details-zhi", "worthCurrent");
    scored("#details-buzhi", "unworthCurrent");
    var e = parseInt($("#rating_worthy_num").text());
    var f = parseInt($("#rating_unworthy_num").text());
    if (h == 5) {
        var b = smzdm_haitao + "/ajax_rating";
    } else {
        var b = smzdm_www + "/ajax_rating";
    }
    $.ajax({
        url: b,
        type: "post",
        data: {
            rating_acticle_id: j,
            rating_rating: c,
            rating_article_type: h
        },
        dataType: "json",
        success: function(p) {
            if (p.error_code == 0 || p.error_code == 2 || p.error_code == 6) {
                if (c == 1) {
                    $(g).find(".add").show().animate({
                        "top": "-30px"
                    }, 600).fadeOut("slow", function() {
                        $("#rating_worthy_num").html(e + 1);
                        $("#rating_all_num").html("已有 " + (e + f + 1) + " 用户参与");
                    }
                    );
                } else {
                    $(g).find(".reduce").show().animate({
                        "top": "80px"
                    }, 600).fadeOut("slow", function() {
                        $("#rating_unworthy_num").html(f + 1);
                        $("#rating_all_num").html("已有 " + (e + f + 1) + " 用户参与");
                    }
                    );
                }
                if (q == 0) {
                    var r = "";
                } else {
                    var q = parseInt(p.worthy_num);
                    var m = parseInt(p.unworthy_num);
                    var o = (q / (q + m)) * 100;
                    var r = o.toString() + "%";
                }
                g.find(" .progressing").css("width", r);
            }
        }
    });
}
set_rating_current();
function set_rating_current() {
    if (zhiyou_open) {
        zhiyou_relate.init_rating_by_cookie();
        return;
    }
    $(function() {
        $(".lrBot").each(function() {
            if (typeof ($(this).find(" .good").attr("id")) != "undefined") {
                var d = $(this).find(" .good").attr("id").split("_")[2];
                var c = getCookie("smzdm_rating_post");
                if (c) {
                    ste_current(d, c);
                }
                var b = getCookie("smzdm_rating_haitao");
                if (b) {
                    ste_current(d, b);
                }
            }
        }
        );
    }
    );
}
function ste_current(g, c) {
    if (zhiyou_open) {
        zhiyou_relate.init_rating_by_cookie();
        return;
    }
    var b = json_decode(c);
    for (var e in b) {
        if (g == e) {
            var d = $("#rating_worthy_" + g);
            var f = $("#rating_unworthy_" + g);
            d.removeAttr("onclick");
            f.removeAttr("onclick");
            if (b[e] == 1) {
                d.addClass("current").css("cursor", "default").addClass("worthCurrent");
                f.addClass("unworthCurrent");
            } else {
                if (b[e] == 2) {
                    d.addClass("worthCurrent");
                    f.addClass("current").css("cursor", "default").addClass("unworthCurrent");
                }
            }
        }
    }
}
$(function() {
    if (zhiyou_open) {
        return;
    }
    $(".score_rateBox").each(function() {
        if (typeof ($(this).attr("id")) != "undefined") {
            var d = $(this).attr("id").split("_")[1];
            var c = getCookie("smzdm_rating_post");
            if (c) {
                ste_current_single(d, c);
            }
            var b = getCookie("smzdm_rating_haitao");
            if (b) {
                ste_current_single(d, b);
            }
        }
    }
    );
}
);
function ste_current_single(g, c) {
    var b = json_decode(c);
    for (var e in b) {
        if (g == e) {
            var d = $("#rating_worthy");
            var f = $("#rating_unworthy");
            d.removeAttr("onclick").css("cursor", "default");
            f.removeAttr("onclick").css("cursor", "default");
            if (b[e] == 1) {
                d.addClass("worthCurrent");
            } else {
                if (b[e] == 2) {
                    f.addClass("unworthCurrent");
                    scored("#details-zhi", "worthCurrent");
                    scored("#details-buzhi", "unworthCurrent");
                }
            }
        }
    }
}
function placehold(b) {
    $(b).each(function() {
        var c = $(this).attr("default_value");
        if ($(this).attr("default_value")) {
            $(this).focus(function() {
                if ($(this).val() == c) {
                    $(this).val("");
                    $(this).css("color", "#333");
                }
            }
            );
            $(this).blur(function() {
                if ($(this).val() == "") {
                    $(this).val(c);
                    $(this).css("color", "#999");
                }
            }
            );
        }
    }
    );
}
function articleLinkAdd() {
    var b = $(".link_box").length;
    if (b <= 3) {
        var c = $(this).parent();
        c.after('<div class="link_box"><input type="text" name="coudanpin_title[]" class="input_style lFloat w160 mr20 grey" default_value="请输入商品名称" value="请输入商品名称" /><input type="text" name="coudanpin_link[]" class="input_style lFloat w340 grey" default_value="请输入凑单品链接" value="请输入凑单品链接" /><input type="button" class="lfloat button_add" value="+" ></div>');
        $(this).removeClass("button_add").addClass("button_reduce").val("-");
        $(this).unbind("click").bind("click", function() {
            $(this).parent().remove();
            $(".link_box").find(".button_add").each(function() {
                if ($(this).hasClass("button_add")) {
                    $(this).removeClass("disabled");
                }
            }
            );
        }
        );
        placehold(".input_style");
        c.next(".link_box").find(".button_add").bind("click", articleLinkAdd);
    }
    if (b == 3) {
        $(".link_box").find(".button_add").each(function() {
            if ($(this).hasClass("button_add")) {
                $(this).addClass("disabled");
            }
        }
        );
    }
}
$(window).load(function() {
    $(".siteBlock").each(function() {
        var f = $(this);
        var e = $(this).find("img");
        var d = $(this).height();
        var c = $(this).find("img").height();
        var b = d - c;
        if (c < d) {
            e.css("marginTop", (b) / 2);
        }
    }
    );
}
);
function zhankaiCon(d, b) {
    var d = $(d);
    for (var c = 0; c < d.length; c++) {
        d.eq(c).mouseover(function() {
            var f = $(this);
            var e = setTimeout(function() {
                f.parent().parent("li").addClass("active");
            }
            , 100);
            $(this).mouseout(function() {
                clearTimeout(e);
                $(this).parent().parent("li").removeClass("active");
            }
            );
        }
        );
        if ((c + 1) % 3 == 0) {
            d.eq(c).parent().parent("li").addClass("gogo");
        }
    }
}
function gettoday() {
    var b = new Date();
    now = b.getFullYear() + "/";
    now = now + (b.getMonth() + 1) + "/";
    now = now + b.getDate() + " ";
    now = now + b.getHours() + ":";
    now = now + b.getMinutes() + ":";
    now = now + b.getSeconds() + "";
    return now;
}
function gettodayend() {
    var b = new Date();
    end = b.getFullYear() + "/";
    end = end + (b.getMonth() + 1) + "/";
    end = end + b.getDate() + " ";
    end = end + "23:59:59";
    return end;
}
$(function() {
    $(document).on("click", ".zan", function() {
        if ($(this).is(".current")) {
            return;
        }
        var c = $(this).parents(".list").find(".id").val();
        var b = $(this).parents(".list").find(".id").attr("data-status");
        if (c > 0 && b != 1) {
            toptmall_rating($(this), c);
        }
        return;
    }
    );
    show_rating_status();
}
);
function show_rating_status() {
    var c = getCookie("love_mark_ids");
    if (!c) {
        return;
    }
    var b = json_decode(c);
    $.each(b, function(d, e) {
        $("#t_rating_" + e[0]).addClass("current").addClass("worthCurrent");
    }
    );
}
function toptmall_rating(g, c) {
    var k = parseInt(Date.parse(new Date()) / 1000);
    var m = getCookie("love_mark_ids");
    var e = 30 * 60;
    var j = Array();
    var o = true;
    var h = Array(c, k);
    if (m) {
        var d = json_decode(m);
        $.each(d, function(p, q) {
            if (k - parseInt(q[1]) < e) {
                j[p] = q;
                if (c == q[0]) {
                    o = false;
                }
            }
        }
        );
    }
    if (o) {
        j.push(h);
    }
    var l = json_encode(j);
    var b = smzdm_faxian + "/toptmall/ajax_love";
    var f = parseInt(g.find("em").html()) + 1;
    g.find("em").html(f);
    g.addClass("current").addClass("worthCurrent");
    g.parents(".list").find(".id").attr("data-status", 1);
    g.find(".scoreAnimate").fadeIn().animate({
        top: "-30px"
    }, "normal").fadeOut(300);
    $.post(b, {
        id: c
    }, function(p) {
        if (p.error == 0) {
            setCookie("love_mark_ids", l, e, false, false, false);
        }
    }
    , "json");
}
