/*! artDialog v6.0.2 | https://github.com/aui/artDialog */
!function () { function a(b) { var d = c[b], e = "exports"; return "object" == typeof d ? d : (d[e] || (d[e] = {}, d[e] = d.call(d[e], a, d[e], d) || d[e]), d[e]) } function b(a, b) { c[a] = b } var c = {}; b("jquery", function () { return jQuery }), b("popup", function (a) { function b() { this.destroyed = !1, this.__popup = c("<div />").attr({ tabindex: "-1" }).css({ display: "none", position: "absolute", outline: 0 }).html(this.innerHTML).appendTo("body"), this.__backdrop = c("<div />"), this.node = this.__popup[0], this.backdrop = this.__backdrop[0], d++ } var c = a("jquery"), d = 0, e = !("minWidth" in c("html")[0].style), f = !e; return c.extend(b.prototype, { node: null, backdrop: null, fixed: !1, destroyed: !0, open: !1, returnValue: "", autofocus: !0, align: "bottom left", backdropBackground: "#000", backdropOpacity: .7, innerHTML: "", className: "ui-popup", show: function (a) { if (this.destroyed) return this; var b = this, d = this.__popup; return this.__activeElement = this.__getActive(), this.open = !0, this.follow = a || this.follow, this.__ready || (d.addClass(this.className), this.modal && this.__lock(), d.html() || d.html(this.innerHTML), e || c(window).on("resize", this.__onresize = function () { b.reset() }), this.__ready = !0), d.addClass(this.className + "-show").attr("role", this.modal ? "alertdialog" : "dialog").css("position", this.fixed ? "fixed" : "absolute").show(), this.__backdrop.show(), this.reset().focus(), this.__dispatchEvent("show"), this }, showModal: function () { return this.modal = !0, this.show.apply(this, arguments) }, close: function (a) { return !this.destroyed && this.open && (void 0 !== a && (this.returnValue = a), this.__popup.hide().removeClass(this.className + "-show"), this.__backdrop.hide(), this.open = !1, this.blur(), this.__dispatchEvent("close")), this }, remove: function () { if (this.destroyed) return this; this.__dispatchEvent("beforeremove"), b.current === this && (b.current = null), this.__unlock(), this.__popup.remove(), this.__backdrop.remove(), e || c(window).off("resize", this.__onresize), this.__dispatchEvent("remove"); for (var a in this) delete this[a]; return this }, reset: function () { var a = this.follow; return a ? this.__follow(a) : this.__center(), this.__dispatchEvent("reset"), this }, focus: function () { var a = this.node, d = b.current; if (d && d !== this && d.blur(!1), !c.contains(a, this.__getActive())) { var e = this.__popup.find("[autofocus]")[0]; !this._autofocus && e ? this._autofocus = !0 : e = a, this.__focus(e) } return b.current = this, this.__popup.addClass(this.className + "-focus"), this.__zIndex(), this.__dispatchEvent("focus"), this }, blur: function () { var a = this.__activeElement, b = arguments[0]; return b !== !1 && this.__focus(a), this._autofocus = !1, this.__popup.removeClass(this.className + "-focus"), this.__dispatchEvent("blur"), this }, addEventListener: function (a, b) { return this.__getEventListener(a).push(b), this }, removeEventListener: function (a, b) { for (var c = this.__getEventListener(a), d = 0; d < c.length; d++) b === c[d] && c.splice(d--, 1); return this }, __getEventListener: function (a) { var b = this.__listener; return b || (b = this.__listener = {}), b[a] || (b[a] = []), b[a] }, __dispatchEvent: function (a) { var b = this.__getEventListener(a); this["on" + a] && this["on" + a](); for (var c = 0; c < b.length; c++) b[c].call(this) }, __focus: function (a) { try { this.autofocus && !/^iframe$/i.test(a.nodeName) && a.focus() } catch (b) { } }, __getActive: function () { try { var a = document.activeElement, b = a.contentDocument, c = b && b.activeElement || a; return c } catch (d) { } }, __zIndex: function () { var a = b.zIndex++; this.__popup.css("zIndex", a), this.__backdrop.css("zIndex", a - 1), this.zIndex = a }, __center: function () { var a = this.__popup, b = c(window), d = c(document), e = this.fixed, f = e ? 0 : d.scrollLeft(), g = e ? 0 : d.scrollTop(), h = b.width(), i = b.height(), j = a.width(), k = a.height(), l = (h - j) / 2 + f, m = 382 * (i - k) / 1e3 + g, n = a[0].style; n.left = Math.max(parseInt(l), f) + "px", n.top = Math.max(parseInt(m), g) + "px" }, __follow: function (a) { var b = a.parentNode && c(a), d = this.__popup; if (this.__followSkin && d.removeClass(this.__followSkin), b) { var e = b.offset(); if (e.left * e.top < 0) return this.__center() } var f = this, g = this.fixed, h = c(window), i = c(document), j = h.width(), k = h.height(), l = i.scrollLeft(), m = i.scrollTop(), n = d.width(), o = d.height(), p = b ? b.outerWidth() : 0, q = b ? b.outerHeight() : 0, r = this.__offset(a), s = r.left, t = r.top, u = g ? s - l : s, v = g ? t - m : t, w = g ? 0 : l, x = g ? 0 : m, y = w + j - n, z = x + k - o, A = {}, B = this.align.split(" "), C = this.className + "-", D = { top: "bottom", bottom: "top", left: "right", right: "left" }, E = { top: "top", bottom: "top", left: "left", right: "left" }, F = [{ top: v - o, bottom: v + q, left: u - n, right: u + p }, { top: v, bottom: v - o + q, left: u, right: u - n + p}], G = { left: u + p / 2 - n / 2, top: v + q / 2 - o / 2 }, H = { left: [w, y], top: [x, z] }; c.each(B, function (a, b) { F[a][b] > H[E[b]][1] && (b = B[a] = D[b]), F[a][b] < H[E[b]][0] && (B[a] = D[b]) }), B[1] || (E[B[1]] = "left" === E[B[0]] ? "top" : "left", F[1][B[1]] = G[E[B[1]]]), C += B.join("-") + " " + this.className + "-follow", f.__followSkin = C, b && d.addClass(C), A[E[B[0]]] = parseInt(F[0][B[0]]), A[E[B[1]]] = parseInt(F[1][B[1]]), d.css(A) }, __offset: function (a) { var b = a.parentNode, d = b ? c(a).offset() : { left: a.pageX, top: a.pageY }; a = b ? a : a.target; var e = a.ownerDocument, f = e.defaultView || e.parentWindow; if (f == window) return d; var g = f.frameElement, h = c(e), i = h.scrollLeft(), j = h.scrollTop(), k = c(g).offset(), l = k.left, m = k.top; return { left: d.left + l - i, top: d.top + m - j} }, __lock: function () { var a = this, d = this.__popup, e = this.__backdrop, g = { position: "fixed", left: 0, top: 0, width: "100%", height: "100%", overflow: "hidden", userSelect: "none", opacity: 0, background: this.backdropBackground }; d.addClass(this.className + "-modal"), b.zIndex = b.zIndex + 2, this.__zIndex(), f || c.extend(g, { position: "absolute", width: c(window).width() + "px", height: c(document).height() + "px" }), e.css(g).animate({ opacity: this.backdropOpacity }, 150).insertAfter(d).attr({ tabindex: "0" }).on("focus", function () { a.focus() }) }, __unlock: function () { this.modal && (this.__popup.removeClass(this.className + "-modal"), this.__backdrop.remove(), delete this.modal) } }), b.zIndex = 1024, b.current = null, b }), b("dialog-config", { content: '<span class="ui-dialog-loading">Loading..</span>', title: "", statusbar: "", button: null, ok: null, cancel: null, okValue: "ok", cancelValue: "cancel", cancelDisplay: !0, width: "", height: "", padding: "", skin: "", quickClose: !1, cssUri: "../css/ui-dialog.css", innerHTML: '<div i="dialog" class="ui-dialog"><div class="ui-dialog-arrow-a"></div><div class="ui-dialog-arrow-b"></div><table class="ui-dialog-grid"><tr><td i="header" class="ui-dialog-header"><button i="close" class="ui-dialog-close">&#215;</button><div i="title" class="ui-dialog-title"></div></td></tr><tr><td i="body" class="ui-dialog-body"><div i="content" class="ui-dialog-content"></div></td></tr><tr><td i="footer" class="ui-dialog-footer"><div i="statusbar" class="ui-dialog-statusbar"></div><div i="button" class="ui-dialog-button"></div></td></tr></table></div>' }), b("dialog", function (a) { var b = a("jquery"), c = a("popup"), d = a("dialog-config"), e = d.cssUri; if (e) { var f = a[a.toUrl ? "toUrl" : "resolve"]; f && (e = f(e), e = '<link rel="stylesheet" href="' + e + '" />', b("base")[0] ? b("base").before(e) : b("head").append(e)) } var g = 0, h = new Date - 0, i = !("minWidth" in b("html")[0].style), j = "createTouch" in document && !("onmousemove" in document) || /(iPhone|iPad|iPod)/i.test(navigator.userAgent), k = !i && !j, l = function (a, c, d) { var e = a = a || {}; ("string" == typeof a || 1 === a.nodeType) && (a = { content: a, fixed: !j }), a = b.extend(!0, {}, l.defaults, a), a._ = e; var f = a.id = a.id || h + g, i = l.get(f); return i ? i.focus() : (k || (a.fixed = !1), a.quickClose && (a.modal = !0, e.backdropOpacity || (a.backdropOpacity = 0)), b.isArray(a.button) || (a.button = []), void 0 !== d && (a.cancel = d), a.cancel && a.button.push({ id: "cancel", value: a.cancelValue, callback: a.cancel, display: a.cancelDisplay }), void 0 !== c && (a.ok = c), a.ok && a.button.push({ id: "ok", value: a.okValue, callback: a.ok, autofocus: !0 }), l.list[f] = new l.create(a)) }, m = function () { }; m.prototype = c.prototype; var n = l.prototype = new m; return l.create = function (a) { var d = this; b.extend(this, new c); var e = b(this.node).html(a.innerHTML); return this.options = a, this._popup = e, b.each(a, function (a, b) { "function" == typeof d[a] ? d[a](b) : d[a] = b }), a.zIndex && (c.zIndex = a.zIndex), e.attr({ "aria-labelledby": this._$("title").attr("id", "title:" + this.id).attr("id"), "aria-describedby": this._$("content").attr("id", "content:" + this.id).attr("id") }), this._$("close").css("display", this.cancel === !1 ? "none" : "").attr("title", this.cancelValue).on("click", function (a) { d._trigger("cancel"), a.preventDefault() }), this._$("dialog").addClass(this.skin), this._$("body").css("padding", this.padding), a.quickClose && b(this.backdrop).on("onmousedown" in document ? "mousedown" : "click", function () { return d._trigger("cancel"), !1 }), this._esc = function (a) { var b = a.target, e = b.nodeName, f = /^input|textarea$/i, g = c.current === d, h = a.keyCode; !g || f.test(e) && "button" !== b.type || 27 === h && d._trigger("cancel") }, b(document).on("keydown", this._esc), this.addEventListener("remove", function () { b(document).off("keydown", this._esc), delete l.list[this.id] }), g++, l.oncreate(this), this }, l.create.prototype = n, b.extend(n, { content: function (a) { return this._$("content").empty("")["object" == typeof a ? "append" : "html"](a), this.reset() }, title: function (a) { return this._$("title").text(a), this._$("header")[a ? "show" : "hide"](), this }, width: function (a) { return this._$("content").css("width", a), this.reset() }, height: function (a) { return this._$("content").css("height", a), this.reset() }, button: function (a) { a = a || []; var c = this, d = "", e = 0; return this.callbacks = {}, "string" == typeof a ? (d = a, e++) : b.each(a, function (a, b) { b.id = b.id || b.value, c.callbacks[b.id] = b.callback; var f = ""; b.display === !1 ? f = ' style="display:none"' : e++, d += '<button type="button" data-id="' + b.id + '"' + f + (b.disabled ? " disabled" : "") + (b.autofocus ? ' autofocus class="ui-dialog-autofocus"' : "") + ">" + b.value + "</button>" }), this._$("footer")[e ? "show" : "hide"](), this._$("button").html(d).on("click", "[data-id]", function (a) { var d = b(this); d.attr("disabled") || c._trigger(d.data("id")), a.preventDefault() }), this }, statusbar: function (a) { return this._$("statusbar").html(a)[a ? "show" : "hide"](), this }, _$: function (a) { return this._popup.find("[i=" + a + "]") }, _trigger: function (a) { var b = this.callbacks[a]; return "function" != typeof b || b.call(this) !== !1 ? this.close().remove() : this } }), l.oncreate = b.noop, l.getCurrent = function () { return c.current }, l.get = function (a) { return void 0 === a ? l.list : l.list[a] }, l.list = {}, l.defaults = d, l }), window.dialog = a("dialog") } ();
/**
 * 券妈妈基础对象
 *
 * @author  quanmama
 * @url     http://www.quanmama.com/
 * @name    base.js
 * @since   2011-5-18 17:21:10
 */
var Youhui = {
    CookieDomain: ".quanmama.com",
    tools: {
        cookie: function (name, value, options) {  //COOKIE操作
            if (typeof value != 'undefined') {
                options = options || {};
                if (value === null) {
                    value = '';
                    $.extend({}, options);
                    options.expires = -1;
                }
                var expires = '';
                if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
                    var date;
                    if (typeof options.expires == 'number') {
                        date = new Date();
                        date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
                    } else {
                        date = options.expires;
                    }
                    expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
                }
                var path = options.path ? '; path=' + (options.path) : '';
                var domain = options.domain ? '; domain=' + (options.domain) : '';
                var secure = options.secure ? '; secure' : '';
                document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
            } else {
                var cookieValue = '';
                if (document.cookie && document.cookie != '') {
                    var cookies = document.cookie.split(';');
                    for (var i = 0; i < cookies.length; i++) {
                        var cookie = cookies[i].trim();
                        if (cookie.substring(0, name.length + 1) == (name + '=')) {
                            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                            break;
                        }
                    }
                }
                return cookieValue;
            }
        }
    },
    addFavourite: function () {  //添加进收藏夹
        var a = "http://m.quanmama.com/?utm_source=favourite";
        var b = "网购优惠券，就上券妈妈！";
        if (document.all) {
            window.external.AddFavorite(a, b)
        } else if (window.sidebar) {
            window.sidebar.addPanel(b, a, "")
        } else {
            Youhui.dialog.notice("对不起，您的浏览器不支持此操作!\n请您拖动该链接到收藏夹或使用Ctrl+D收藏本站。")
        }
    },
    api: {	//AJAX接口调用
        ajax: function (type, action, data, callback, options) {
            if (action != undefined)
                var url = Youhui.SERVICEURL + action;
            else
                var url = location.pathname;
            $.ajax($.extend({
                url: url,
                data: data,
                async: true,
                type: typeof type != "undefined" ? type : "GET",
                //dataType: "json",
                //contentTypeString:"appliction/json; charset=UTF-8",
                ifModified: false,
                timeout: 8000,
                traditional: true,
                cache: true,
                success: callback,
                //dataFilter: function(data) {
                //return eval("(" + data + ")");
                //},
                error: function () {
                    $("#dialog_loading").remove();
                    return false;
                },
                beforeSend: function (XMLHttpRequest) {
                }
            }, options || {}));
        },
        get: function (action, data, callback, options) {
            this.ajax("GET", action, data, callback, options);
        },
        post: function (action, data, callback, options) {
            this.ajax("POST", action, data, callback, options);
        }
    },
    delayLoader: { //延迟加载
        init: function (options) {
            var opt = $.extend({
                srcname: 'drc',
                elements: "img",
                threshold: 0,
                placeholder: '/images/b.gif',
                failurelimit: 1,
                event: "scroll",
                direction: 1, //0:横、纵   1:纵   2:横
                effect: "fadeIn",
                effectspeed: 0,
                container: window
            }, options || {});
            var _this = this;

            var _elements = opt.elements;
            opt.elements = $(opt.elements + "[" + opt.srcname + "]");

            opt.container = $(opt.container);
            if (opt.event == "scroll") {
                $(opt.container).bind("scroll.loader resize.loader", function (event) {

                    opt.elements.each(function () {
                        if (_this._scrollY(this, opt)) {//&& _this._scrollX(this, opt)
                            if (!this.loaded) {
                                this.src = this.getAttribute(opt.srcname);
                                this.removeAttribute(opt.srcname);
                                this.loaded = true;
                                //alert($(this).parent().html());
                                //                                if (_elements != "img" && $.browser.msie) {
                                //                                    $(this).css("width", "auto");
                                //                                }
                            }
                        }
                    });

                    var temp = $.grep(opt.elements, function (element) {
                        return !element.loaded;
                    });
                    opt.elements = $(temp);
                });
            }

            //首屏
            opt.container.triggerHandler(opt.event);
            return this;
        },
        _scrollY: function (element, opt) {
            if (opt.direction == 0 || opt.direction == 1) {
                var fold = 0;
                if (opt.container[0] === window) {
                    fold = $(window).height() + $(window).scrollTop();
                } else {
                    fold = opt.container.offset().top + opt.container.height();
                }
                return fold > $(element).offset().top - opt.threshold;
            } else {
                return true;
            }
        },
        _scrollX: function (element, opt) {
            if (opt.direction == 0 || opt.direction == 2) {
                var fold = 0;
                if (opt.container[0] === window) {
                    fold = $(window).width() + $(window).scrollLeft();
                } else {
                    fold = opt.container.offset().left + opt.container.width();
                }
                return fold > $(element).offset().left - opt.threshold;
            } else {
                return true;
            }
        }
    }
};


function redirectForMobile() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        if (window.location.href.indexOf("/quan_") > 0 || window.location.href.indexOf("/coupon/") > 0) {
            window.location.href = window.location.href.replace("www.quanmama.com", "m.quanmama.com").replace("/quan_", "/mquan_").replace("/coupon/", "/mcoupon/");
        }
        else {
            window.location.href = "http://m.quanmama.com";
        }
    }
}

Youhui.common = {
    user: {
        checklogin: function () {
            if (Youhui.common.user.info.userid == '') {
                var d = dialog({
                    title: '请先登录',
                    content: '<div style="padding:10px 30px;"><div class="d_content"><div class="gray connect_site clear" ><b>请您使用QQ或微博登录券妈妈</b><br /><br />' + $("#userweibo").html() + '&nbsp;&nbsp;</div></div></div>'
                });
                d.showModal();

                return false;
            }
            return true;
        },
        relogin: function () {
            if (Youhui.common.user.info.userid == '') {
                var d = dialog({
                    title: '请先登录',
                    content: '<div style="padding:10px 30px;"><div class="d_content"><div class="gray connect_site clear" ><b>请您使用QQ或微博登录券妈妈</b><br /><br />' + $("#userweibo").html() + '&nbsp;&nbsp;</div></div></div>'
                });
                d.showModal();

                return false;
            }
            return true;
        }
    }, //user end

    trackOrder: {
        doTrack: function (site, trackUrl, style) {
            var cookieKey = "qmmtrack";
            if (trackUrl == '') return;

            var ck = unescape(Youhui.tools.cookie(cookieKey));
            if (ck.indexOf("," + site) == -1) {

                Youhui.tools.cookie(cookieKey, ck + "," + site, {
                    path: '/',
                    domain: Youhui.CookieDomain
                    //expires: 1.0 / (24 * 6)//cookie只保存10分钟
                });

                if (style != 1) {
                    var trackIfm = document.createElement("iframe");
                    trackIfm.width = 0;
                    trackIfm.height = 0;
                    trackIfm.src = trackUrl;

                    try {
                        trackIfm.style = "display:none;";
                    } catch (ex) { }

                    try {
                        document.body.appendChild(trackIfm);
                    } catch (ex) {
                        try {
                            document.body.insertBefore(trackIfm, document.body.firstChild);
                        } catch (ex2) { }
                    }

                } else {
                    try {
                        //window.open(trackUrl, '_blank')
                    } catch (ex) {
                    }
                }
            } //if(ck!=1) end

        } //function end
    },
    coupon: {
        // Coupon draw
        draw: function (obj) {

            if (!Youhui.common.user.checklogin()) return false;
            var thisobj = $(obj);
            var id = thisobj.attr('i');
            var redir = parseInt(thisobj.attr("redir"));

            if (redir == 1) {
                Youhui.api.post("/quan/linkpull", {
                    id: id,
                    buycount: 1,
                    verifyCode: ''
                }, function (json) { });

                return true;
            }

            if (id === undefined) {
                return false;
            }

            var vf = parseInt(thisobj.attr("vf"));

            if (vf >= 1) {
                var verifyCode = $("#verifycode").val();
                if (verifyCode == undefined || verifyCode == "") {
                    var d = dialog({
                        content: '为防止恶意领取，麻烦先输入验证码!',
                        quickClose: true
                    });
                    d.show(document.getElementById('verifycode'));

                    //$("#verifycode").focus();
                    return false;
                }
            }

            var url = thisobj.attr("href");
            var score = parseInt(thisobj.attr("s"));
            var fee = parseFloat(thisobj.attr("fee"));
            var totalUser = parseInt(thisobj.attr("total"));
            var code = 0;
            var tips = '';
            var stop = false;
            var buycount = 1;


            if (score > 0) {
                tips += "消耗您的会员积分：" + score + "分<br />";
            }

            if (tips == '') {
                if (fee > 0.01) {

                    var d = dialog({
                        title: '券妈妈购买优惠券确认',
                        content: "<div style='padding:15px 30px;'><font color='#ff6600'>确定购买该优惠券吗？<br/>需要支付" + fee + "元购买该优惠券<br/></font></div>",
                        okValue: '确定',
                        ok: function () {
                            Youhui.common.coupon.pull(id, url, buycount);
                            return true;
                        },
                        cancelValue: '取消',
                        cancel: function () { }
                    });
                    d.showModal();

                } else {
                    var d = dialog({
                        title: '券妈妈领取优惠券确认',
                        content: "<div style='padding:15px 30px;'><font color='#ff6600'>确定领取该优惠券吗？<br/></font></div>",
                        okValue: '确定',
                        ok: function () {
                            Youhui.common.coupon.pull(id, url, buycount);
                            return true;
                        },
                        cancelValue: '取消',
                        cancel: function () { }
                    });
                    d.showModal();
                }
            } else {
                if (fee > 0.01) {
                    var d = dialog({
                        title: '券妈妈购买优惠券确认',
                        content: "<div style='padding:15px 30px;'><font color='#ff6600'>确定购买该优惠券吗？<br/>需要支付" + fee + "元购买该优惠券<br/></font><br/>领取该优惠券将会进行以下操作：<br /><font color='#ff6600'>" + tips + "</font>是否继续领取？</div>",
                        okValue: '确定',
                        ok: function () {
                            Youhui.common.coupon.pull(id, url, buycount);
                            return true;
                        },
                        cancelValue: '取消',
                        cancel: function () { }
                    });
                    d.showModal();

                } else {
                    var d = dialog({
                        title: '券妈妈领取优惠券确认',
                        content: "<div style='padding:15px 30px;'>领取该优惠券将会进行以下操作<br /><font color='#ff6600'>" + tips + "</font>是否继续领取？</div>",
                        okValue: '确定',
                        ok: function () {
                            Youhui.common.coupon.pull(id, url, buycount);
                            return true;
                        },
                        cancelValue: '取消',
                        cancel: function () { }
                    });
                    d.showModal();
                }
            }
            return false;
        }, // coupon draw

        pull: function (id, url, buycount) {
            var drawing_dialog = dialog({
                title: '系统正在为您提取券....',
                content: "亲,请耐心等待,券妈妈正在为您提取优惠券..."
            });
            drawing_dialog.show();

            //领取优惠券
            var verifyCode = $("#verifycode").val();

            Youhui.api.post("/quan/pull", {
                id: id,
                buycount: buycount,
                verifyCode: verifyCode
            }, function (json) {
                drawing_dialog.close().remove();

                if (json.code >= 1) {
                    var content = "<div id='test'><div class='d_content d_c_s'><form method='post' target='_blank' action='" + url + "'><div style='padding:10px 15px;' class='clear' id='pullinfo'>";
                    if (json.code == 1 || json.code == 2) {
                        content += "" + "优惠券代码：<br/>";
                        content += "<font color=red><b>" + json.result + "</font></b><br/><br/>";
                        content += "您所领的券可以在<a href=\"/mobile/center/\" target=\"_blank\">&nbsp;&nbsp;我的优惠券</a>&nbsp;查看<br/><br/>";
                    }
                    else if (json.code == 3) {
                        Youhui.common.user.relogin();
                        return false;
                    }
                    else {
                        content += "<div style='padding:10px 15px;' class='code' id='code_" + id + "'>" + json.result + "</div><br/>";
                    }

                    content += "<a href='/mobile/center/' target='_blank'><span>去\"我的优惠券\"</span></a><br/>";
                    content += "<a href='" + url + "' id='go_shopping' target='_blank'><span>去商家购物</span></a><br/>";
                    content += "</form></div></div></div>";

                    var d = dialog({
                        title: '恭喜你，已经成功领取优惠券！',
                        content: content
                    });

                    d.showModal();

                } else {

                    var d = dialog({
                        title: '错误提示',
                        content: json.result
                    });

                    d.showModal();
                }
            });
        }
    }
};

$(function () {

    var fav_cookie = unescape(Youhui.tools.cookie("myfav"));

    var fav_array = fav_cookie.split(',');

    for (var itemValue in fav_array) {
        $(".favitem" + fav_array[itemValue]).addClass("quxiao").val("取消收藏");
    }

    $(".Jmyfav").click(function () {
        fav_cookie = unescape(Youhui.tools.cookie("myfav"));

        var $this = $(this);
        var cid = $this.attr("cid");

        if ($this.hasClass("quxiao")) {

            var new_fav_cookie = fav_cookie.replace(cid + ",", "");

            Youhui.tools.cookie("myfav", new_fav_cookie, {
                path: '/',
                domain: Youhui.CookieDomain,
                expires: 8640000
            });

            alert("取消收藏成功！");

            $this.val("添加收藏").removeClass("quxiao");
        }
        else {
            $this.val("取消收藏").addClass("quxiao");

            Youhui.tools.cookie("myfav", cid + "," + fav_cookie, {
                path: '/',
                domain: Youhui.CookieDomain,
                expires: 8640000
            });

            alert("添加收藏成功！");
        }
    });

});

//--
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

function youhuiListLoad(youhuiParams, successCallback) {
    $(".loadMore").addClass("aj-is-loading");
    youhuiParams = (typeof youhuiParams == 'object') ? youhuiParams : {};
    var ajaxData = $.extend({}, Qmm_config.youhuiInfo, youhuiParams);
    console.log(ajaxData);
    $.ajax({
        type: "get",
        url: "/myajax/mobileYouhuiListPage",
        data: ajaxData,
        dataType: "html",
        success: function (html) {
            //Qmm_config.youhuiInfo = youhuiParams;
            var responseContainer = $(".list_preferential");
            Qmm_config.youhuiInfo = ajaxData;

            $(".loadMore").removeClass("aj-is-loading");
            var backNum = $(html).find(".zdm_list_li").length;
            console.log(backNum + '=== Page : ' + ajaxData.page);
            if (backNum > 0) {
                initZdmListForDuplicateCheck();
                var cnt = 0;

                if (parseInt(Qmm_config.youhuiInfo.page) === 1) {
                    zdmListForDuplicateCheck = [];
                }

                $(html).find(".zdm_list_li").each(function () {
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
            if (backNum < ajaxData.pagesize) {
                $(".loadMore").hide();
                $(".aj-getmore-by-click").hide();
                responseContainer.append('<li style="text-align: center;padding: 0;width: 100%;margin: 0;height: 40px;line-height: 40px;">没有更多了</li>');
                isThisPageHaveAnyMoreLis = false;
            }
            if (backNum === 0 && parseInt(ajaxData.page) === 1) {
                $(".list_preferential").load("/html/AJ/noContentPageForWap.htm");
            }

            Qmm_config.youhuiInfo.page = parseInt(Qmm_config.youhuiInfo.page, 10) + 1;
            successCallback && successCallback();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $(".loadMore").removeClass("aj-is-loading");
            $(".pagination").before('<p class="center" style="padding:30px 0;">很抱歉，您的网络可能有点问题，请尝试使用翻页浏览方式，或者<a id="ajaxErrorRetry">重试</a></p>');
            $("#ajaxErrorRetry").click(function () {
                youhuiListLoad();
                $(this).parent().remove();
            });
        }
    });
}

$(function () {
    $(".loadMore").click(function () {
        youhuiListLoad();
    });
});

// 滚动, 点击 ajax 部分
$(function () {
    var win = window,
        doc = document,
        isAjaxNow = false,
        timer,
        container = $("#aj-shop-index-page"),
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
        if (delter <= 200) {
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
});

// 控制 导航的样式
$(function () {
    var shopIndex = $('#aj-shop-index-page'),
        lis,
        i,
        blocks,
        divEle;
    if (shopIndex.length === 0) return false;
    lis = shopIndex.find('.aj-nav .aj-li');
    lis.each(function () {
        $(this).css('width', Math.floor(1 / lis.length * 100) + '%');
    });
    for (i = 1; i < lis.length; i++) {
        divEle = document.createElement('div');
        $(divEle).attr('class', 'aj-block');
        $(divEle).html('<div class="newLoading"></div>');
        shopIndex.find('.aj-s-mid').append(divEle);
    }
    blocks = shopIndex.find('.aj-s-mid .aj-block');
    lis.on('click', function () {
        $(this).addClass('aj-select').siblings().removeClass('aj-select');
        //blocks.eq($(this).index()).show().siblings().hide();
    });
    // 调整 top banner img 宽度 : 高度 = 3.5
    shopIndex.find('.aj-s-top').css({
        height: shopIndex.width() / 3.5 + 'px'
    });
    // sort line
    (function () {
        var showTypes,
            sortBtn;
        sortBtn = shopIndex.find('.aj-li-sort-type');
        sortBtn.on('click', function (e) {
            e.stopPropagation();
        });
        sortBtn.on('click', '.aj-s-t-wrap', function (e) {
            sortBtn.toggleClass('aj-hover');
        });
        sortBtn.on('click', '.aj-l-s-t-i-u-li', function (e) {
            e.stopPropagation();
            sortBtn.find('.aj-s-t-wrap').html($(this).html());
            sortBtn.removeClass('aj-hover');
        });
        $(document.body).on('click', function () {
            sortBtn.removeClass('aj-hover');
        });
        shopIndex.find('.aj-sort .aj-li-js').on('click', function () {
            $(this).addClass('aj-select').siblings().removeClass('aj-select');
        });
        showTypes = ['qmm-icon-view_list', 'qmm-icon-iconfont-qita'];
        shopIndex.find('.aj-sort .aj-li-show-type').on('click', function () {
            var span = $(this).find('span[class^="qmm-icon"]'),
                className = span.attr('class'),
                index = $.inArray(className, showTypes);
            if (index !== -1) {
                span.removeClass(className).addClass(showTypes[(index + 1) % showTypes.length]);
            }
            toggleShowStyle();
        });
        function toggleShowStyle() {
            shopIndex.find('.aj-s-mid').toggleClass('aj-show-style-grid');
        }
    })();

    // nav select
    (function () {
        var sort = shopIndex.find('.aj-sort'),
            beforeAfter = 'aj-li-ba-bg',
            filterChoice = sort.find('.aj-s-u-filter .aj-choice-name'),
            filterName = filterChoice.text(),     // 保存筛选的名称
            selectClass = "qmm-icon-iconfont-check";

        sort.on('click', '.aj-so-ul li.aj-s-u-li', function () {
            if ($(this).hasClass('aj-has-block')) {
                $(this).toggleClass(beforeAfter).siblings().removeClass(beforeAfter);
                showRelativeBlock($(this).attr('aj-for'), $(this).hasClass(beforeAfter));
            } else {
                $(this).siblings().removeClass(beforeAfter);
                sort.find('.aj-s-b-wrap .aj-s-b').hide();
            }
        });
        function showRelativeBlock(className, isShow) {
            if (isShow) {
                sort.find('.' + className).toggle().siblings().hide();
            } else {
                sort.find('.aj-s-b').hide();
            }
        }
        sort.on('click', '.aj-s-left li.aj-has-block', function () {
            var uls = $(this).parents('.aj-s-b').find('.aj-s-right .aj-ul');
            $(this).addClass('aj-select').siblings().removeClass('aj-select');
            uls.removeClass('aj-select').eq($(this).index()).addClass('aj-select');
        });
        sort.on('click', '.aj-s-right .aj-ul .aj-li', function () {
            if (!$(this).hasClass('aj-select')) {
                hide($(this).parents('.aj-s-b'));
            }
            choice(this);
            navShowChoice(this);
            $(this).find('span').addClass(selectClass);
            $(this).toggleClass('aj-select').siblings().removeClass('aj-select');
        });
        function choice(obj) {  // 在li上显示选择的名称
            if (!$(obj).hasClass('aj-select')) {    // 点击之前className还没有aj-select值
                sort.find('.aj-s-left li.aj-has-block.aj-select .aj-choice').html($(obj).text());
            } else {
                sort.find('.aj-s-left li.aj-has-block.aj-select .aj-choice').html('');
            }
        }
        function navShowChoice(obj) { //专门提供给filter用的逻辑 -> 点击选项后在导航上显示
            if ($(obj).parents('.aj-s-b.aj-s-b-f-filter').length > 0) {
                if ($(obj).hasClass('aj-select')) {
                    if ($(obj).text() == filterChoice.text()) {
                        filterChoice.text(filterName);
                    }
                } else {
                    filterChoice.text($(obj).text());
                }
            }
        }
        function hide(obj) { // 隐藏obj与小滑块
            sort.find('.aj-so-ul .aj-has-block').each(function () {
                if (obj.hasClass($(this).attr('aj-for'))) {
                    $(this).removeClass(beforeAfter);
                }
            });
            obj.hide();
        }
    })();
});

// 导航 点击 ajax
$(function () {
    var div = $("#aj-shop-index-page");
    if (div.length <= 0) { return false; }
    var ajaxConfig,
        isAjaxNow = false;
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

    div.find('.j_load').click(function () {
        var params = $(this).attr("data-params");

        ajaxConfig = resetYouhuiObj(params);

        ajaxFunc(ajaxConfig);
    });

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
        } else {
            console.log("Is ajax now!");
        }
    }
    function showDelay() {
        $('#aj-delay-page').show();
    }
    function hideDelay() {
        $('#aj-delay-page').hide();
    }
});

// 如果一行滚动8个修改高度
$(function () {
    var div = $('#aj-mobile-wrap #aj-top-types');
    if (div.length === 0) return false;
    div.find('.aj-one-type:not(.aj-t-tuijian)').each(function () {
        var uls = $(this).find('.aj-content .aj-ul'),
            lines;
        if (uls[0]) {
            lines = Math.ceil(uls.eq(0).find('li.aj-li').length / 4);
        }
        $(this).css({
            height: 40 + lines * 70 + 'px'
        });
    });
});