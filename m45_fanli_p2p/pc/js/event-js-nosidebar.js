(function (exports) {
    exports.BowserDetect = (function () {
        var ua = navigator.userAgent;
        var _IE = (function () {
            var v = 3, div = document.createElement('div'), all = div.getElementsByTagName('i');
            while (div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->', all[0]);
            return v > 4 ? v : false;
        }());

        function _platform() {
            var pf = "", matches;
            if (matches = /(quanmama)?.*?iPhone/i.exec(ua)) {
                pf = "iphone" + matches[1] ? "(quanmama)" : "";
            } else if (matches = /(quanmama)?.*?iPad/i.exec(ua)) {
                pf = "ipad" + matches[1] ? "(quanmama)" : "";
            } else if (matches = /(quanmama)?.*?Android/i.exec(ua)) {
                pf = "android" + matches[1] ? "(fanlli)" : "";
            } else if (/linux/i.exec(ua)) {
                pf = "linux";
            } else if (/macintosh|mac os x/i.exec(ua)) {
                pf = "mac";
            } else if (/windows|win32/i.exec(ua)) {
                pf = "windows";
            }
            return pf;
        }

        function _bname() {
            var bn = "";
            if (/firefox/i.test(ua)) {
                bn = "Firefox";
            } else if (/chrome/i.test(ua)) {
                if (/LBBROWSER/i.test(ua)) {
                    bn = "Liebao";
                } else if (/QQBrowser/i.test(ua)) {
                    bn = "QQBrowser";
                } else if (/MAXTHON/i.test(ua)) {
                    bn = "MAXTHON";
                } else if (/QIHU|360SE|360EE/i.test(ua)) {
                    bn = "360";
                } else if (/SE 2.x|MetaSr/i.test(ua)) {
                    bn = "Sougou";
                } else {
                    bn = "Chrome";
                }
            } else if (/safari/i.test(ua)) {
                bn = "Safari";
            } else if (/msie 10.0/i.test(ua)) {
                bn = "IE";
                this.bversion = 10;
            }
            return bn;
        }

        return{platform: _platform(), bname: _IE ? "IE" : _bname(), bversion: _IE ? _IE : (/msie 10.0/i.test(ua) ? 10 : "")};
    }());
    exports.CookieOperation = (function () {
        function _setCookie(name, value, expiryDays, domain, path, secure) {
            var builder = [name, "=", escape(value)];
            if (expiryDays) {
                var date = new Date();
                date.setTime(date.getTime() + (expiryDays * 86400000));
                builder.push(";expires=");
                builder.push(date.toUTCString());
            }
            if (domain) {
                builder.push(";domain=");
                builder.push(domain);
            }
            if (path) {
                builder.push(";path=");
                builder.push(path);
            }
            if (secure) {
                builder.push(";secure");
            }
            document.cookie = builder.join("");
        }

        function _getCookie(name) {
            var re = new RegExp('\\b' + name + '\\s*=\\s*([^;]*)', 'i');
            var match = re.exec(document.cookie);
            return(match && match.length > 1 ? unescape(match[1]) : '');
        }

        return{setCookie: _setCookie, getCookie: _getCookie};
    }());
}(this));
;
(function () {
    var StackTrace = function () {
    }, proto = StackTrace.prototype;
    proto.postUrl = "http://eagle.quanmama.com/index.php";
    proto.forbiddenRegs = [/Baiduspider/i];
    proto.xmlHttpRequst = (function () {
        var rlocalProtocol = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, rurl = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, ajaxLocation, ajaxLocParts, isLocal;
        try {
            ajaxLocation = location.href;
        }
        catch (e) {
            ajaxLocation = document.createElement("a");
            ajaxLocation.href = "";
            ajaxLocation = ajaxLocation.href;
        }
        ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];
        isLocal = rlocalProtocol.test(ajaxLocParts[1]);
        function createStandardXHR() {
            try {
                return new window.XMLHttpRequest();
            } catch (e) {
            }
        }

        function createActiveXHR() {
            try {
                return new window.ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
            }
        }

        return window.ActiveXObject ? (function () {
            return!isLocal && createStandardXHR() || createActiveXHR();
        }()) : createStandardXHR();
    })();
    proto.validate = function (ua) {
        var ret = true;
        var regs = this.forbiddenRegs;
        var i = 0, len = regs.length, reg;
        for (; i < len; i++) {
            reg = regs[i];
            if (reg.test(ua)) {
                ret = false;
                break;
            }
        }
        return ret;
    };
    proto.post = function (message, url, line) {
        var img = new Image(), builder = [];
        builder.push(this.postUrl);
        builder.push("?")
        builder.push("u=" + encodeURIComponent(window.location.href));
        builder.push("&");
        builder.push("em=" + encodeURIComponent((message ? message : "")));
        builder.push("&");
        builder.push("ln=" + encodeURIComponent((line != undefined ? line : "")));
        builder.push("&");
        builder.push("ua=" + encodeURIComponent(navigator.userAgent));
        builder.push("&");
        builder.push("su=" + encodeURIComponent((url ? url : "")));
        builder.push("&");
        builder.push("a=c");
        builder.push("&");
        builder.push("pf=" + BowserDetect.platform);
        builder.push("&");
        builder.push("bn=" + BowserDetect.bname);
        builder.push("&");
        builder.push("bv=" + BowserDetect.bversion);
        img.onload = img.onerror = function () {
            img.onload = img.onerror = null;
        }
        img.src = builder.join("");
    };
    proto.log = function () {
        var that = this;
        return function (message, url, line) {
            var hassentCookieName = "hassenterror";
            var hassentCookie = CookieOperation.getCookie(hassentCookieName);
            var permit = that.validate(navigator.userAgent);
            if (permit && hassentCookie < 5 && parseInt(Math.random() * 500) == 277) {
                CookieOperation.setCookie(hassentCookieName, hassentCookie ? parseInt(hassentCookie) + 1 : 1, (24 - new Date().getHours()) / 24, location.host, "/");
                that.post(message, url, line);
            }
        };
    };
    window.onerror = new StackTrace().log();
})();
;
(function (exports) {
    Function.prototype.method = function (name, fn) {
        if (typeof this.prototype[name] == "undefined")this.prototype[name] = fn;
    };
    !String.prototype.trim && String.method("trim", function () {
        return this.replace(/^\s+|\s+$/g, '');
    });
    !Function.prototype.bind && Function.method("bind", function (oThis) {
        if (typeof this !== "function") {
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        }
        var aArgs = Array.prototype.slice.call(arguments, 1), fToBind = this, fNOP = function () {
        }, fBound = function () {
            return fToBind.apply(this instanceof fNOP && oThis ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
        };
        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();
        return fBound;
    });
    String.method("format", function () {
        for (var s = this, i = 0; i < arguments.length; ++i) {
            s = s.replace(new RegExp("\\{" + i + "\\}", "g"), arguments[i]);
        }
        return s;
    });
    String.method("setCookie", function (value, expiryDays, domain, path, secure) {
        if (this.length == 0) {
            return;
        }
        var builder = [this, "=", escape(value)];
        if (expiryDays) {
            var date = new Date();
            date.setTime(date.getTime() + (expiryDays * 86400000));
            builder.push(";expires=");
            builder.push(date.toUTCString());
        }
        if (domain) {
            builder.push(";domain=");
            builder.push(domain);
        }
        if (path) {
            builder.push(";path=");
            builder.push(path);
        }
        if (secure) {
            builder.push(";secure");
        }
        document.cookie = builder.join("");
    });
    String.method("getCookie", function () {
        if (this.length == 0) {
            return'';
        }
        var re = new RegExp('\\b' + this + '\\s*=\\s*([^;]*)', 'i');
        var match = re.exec(document.cookie);
        return(match && match.length > 1 ? unescape(match[1]) : '');
    });
    String.method("delCookie", function (domain, path) {
        document.cookie = this + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" +
            (domain ? "; domain=" + domain : "") +
            (path ? "; path=" + path : "");
    });
    function StringBuilder() {
        this.strings = new Array();
    }

    StringBuilder.prototype.append = function (str) {
        this.strings.push(str);
        return this;
    };
    StringBuilder.prototype.toString = function () {
        return this.strings.join("");
    };
    var GeneralRegs = {alipay: /^(([a-zA-Z0-9])+([a-zA-Z0-9_\.\-])*\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4}))|(0{0,1}1[34578]{1}[0-9]{9})$/ig, bankaccount: /^([a-zA-Z0-9]|-)+$/ig, blank: /^\s*$/, cellphone: /^0{0,1}1[34578]{1}[0-9]{9}$/ig, email: /^([a-zA-Z0-9])+([a-zA-Z0-9_\.\-])*\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})$/ig, icard: /^(\d{18}|\d{15}|\d{17}x)$/ig, ihkcard: /^[a-z0-9]{1}\d{6,7}[a-z0-9]{1}$/ig, itwcard: /^[a-z]{1}\d{8,}$/ig, uname: /^[\u4e00-\u9fa5a-zA-Z\s]+$/ig, url: /^http(s)?:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/ig, vercode: /^\d{6}$/};
    var FLNS = {"register": function () {
        var a = arguments, o = null, i, j, d, rt;
        for (i = 0; i < a.length; ++i) {
            d = a[i].split(".");
            rt = d[0];
            if (typeof window[rt] == "undefined") {
                window[rt] = {add: function (k, v) {
                    if (!this[k]) {
                        this[k] = v;
                    }
                    return this;
                }};
            }
            o = window[rt];
            for (j = 1; j < d.length; ++j) {
                o[d[j]] = o[d[j]] || {};
                o = o[d[j]];
                o.add = function (k, v) {
                    if (!this[k]) {
                        this[k] = v;
                    }
                    return this;
                };
            }
        }
        return o;
    }};
    var InputValidation = {"isNumber": function (intArg) {
        return Object.prototype.toString.call(intArg) === "[object Number]";
    }, "isEmail": function (emailStr) {
        GeneralRegs.email.lastIndex = 0;
        return GeneralRegs.email.test(emailStr);
    }, "isName": function (nameStr) {
        GeneralRegs.uname.lastIndex = 0;
        return GeneralRegs.uname.test(nameStr);
    }, "isUrl": function (urlStr) {
        GeneralRegs.url.lastIndex = 0;
        return GeneralRegs.url.test(urlStr);
    }, "isPhone": function (phoneArg) {
        GeneralRegs.cellphone.lastIndex = 0;
        return GeneralRegs.cellphone.test(phoneArg);
    }, "isICard": function (icard) {
        return /^(?:(?:\d{18})|(?:\d{15})|(?:\d{17}x)|(?:[a-z0-9]{1}\d{6,7}[a-z0-9]{1})|(?:[a-z]{1}\d{8,}))$/ig.test(icard);
    }};
    var GeneralValidation = {"isIe": function () {
        return/*@cc_on !@*/false;
    }, "isIe6": function () {
        return!-[1, ] && !window.XMLHttpRequest;
    }};
    var GrenralEscape = {"escapeRegExp": function (text) {
        return text.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
    }, "escapeHTML": function (value) {
        return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }};
    exports.StringBuilder = StringBuilder;
    exports.InputValidation = InputValidation;
    exports.GeneralValidation = GeneralValidation;
    exports.GeneralRegs = GeneralRegs;
    exports.GrenralEscape = GrenralEscape;
    exports.FLNS = FLNS;
}(this));
//(function ($) {
//    $.extend(FLNS.register("quanmama"), {"Class": function (parent) {
//        var klass = function () {
//            this.init.apply(this, arguments);
//        };
//        if (parent) {
//            var subclass = function () {
//            };
//            subclass.prototype = parent.prototype;
//            klass.prototype = new subclass();
//        }
//        klass.prototype.init = function () {
//        };
//        klass.fn = klass.prototype;
//        klass.fn.parent = klass;
//        klass.extend = function (obj) {
//            var extended = obj.extended;
//            for (var i in obj) {
//                klass[i] = obj[i];
//            }
//            if (extended)extended(klass);
//        };
//        klass.inculde = function (obj) {
//            var included = obj.included;
//            for (var i in obj) {
//                klass.fn[i] = obj[i];
//            }
//            if (included)included(klass);
//        };
//        klass.proxy = function (func) {
//            var self = this;
//            return(function () {
//                return func.apply(self, arguments);
//            });
//        };
//        klass.fn.proxy = klass.proxy;
//        return klass;
//    }});
//    $.extend(FLNS.register("quanmama.Utility"), {"random": function (n) {
//        var uid = Math.random().toString(16).substr(2, n);
//        while (uid.length < n) {
//            uid = Math.random().toString(16).substr(2, n);
//        }
//        return uid;
//    }, "guid": function () {
//        return'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
//            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
//            return v.toString(16);
//        }).toUpperCase();
//    }, "staticTimeStamp": function (t) {
//        var getTime = new Date().getTime();
//        var returnts = parseInt(getTime / 300000);
//        var currentScriptPath = $('link[rel=stylesheet]').eq(0).attr('href');
//        if (t) {
//            returnts = parseInt(getTime / (60 * 1000 * t));
//        }
//        else if (typeof(currentScriptPath) !== "undefined") {
//            var timeStampArr = currentScriptPath.match(/^.*[\?\&](\d+\_\d+){1}$/i);
//            if (timeStampArr) {
//                returnts = timeStampArr[1];
//            }
//        }
//        return returnts;
//    }, "requirejs": function (jsArr, callback) {
//        var v = parseInt(new Date().getTime() / 300000);
//        if (!callback) {
//            callback = $.noop;
//        }
//        $.tools = $.tools || {};
//        var jsListConfig = {'overlay': {isload: $.tools.overlay, jsUrl: ""}, 'expose': {isload: $.tools.expose, jsUrl: "//static2.51fanli.net/common/libs/tools/expose.min.js"}, 'light': {isload: $.light, jsUrl: "//static2.51fanli.net/static/?f=passport/js/light/createpopup.js"}, 'easing': {isload: $.easing["easeOutBack"], jsUrl: "//static2.51fanli.net/common/plugins/easing/jquery.easing-min.js"}, 'switchable': {isload: $.fn.switchable, jsUrl: "//static2.51fanli.net/common/plugins/switchable/jquery.switchable-min.js"}};
//        var loadJs = (function () {
//            var arr = [];
//            $.each(jsArr, function (i, item) {
//                if (!jsListConfig[item]) {
//                    return true;
//                }
//                var jsObj = jsListConfig[item];
//                if (!jsObj['isload']) {
//                    var connect = /\?/.test(jsObj['jsUrl']) ? '&' : '?';
//                    var url = jsObj['jsUrl'];
//                    if (url.indexOf('/common/plugins/') > -1) {
//                        arr.push(url);
//                    }
//                    else {
//                        arr.push(url + connect + "v={0}".format(v));
//                    }
//                }
//            });
//            return arr;
//        })();
//        loadJs.length > 0 ? head && head.load(loadJs, callback) : callback();
//    }, "isLogin": "prouserid".getCookie() > 0, "rootDomain": (function () {
//        var tryExecLocation = /^.*?(\.(?:51)?quanmama\.com)$/ig.exec(location.hostname);
//        var rootDomain = ".quanmama.com";
//        if (tryExecLocation) {
//            rootDomain = tryExecLocation[1];
//        }
//        return rootDomain;
//    }()), "currentDomain": document.domain});
//})(jQuery);
(function (FPO) {
    var $origin = $({});
    FPO.add("subscribe", function () {
        $origin.on.apply($origin, arguments);
    });
    FPO.add("unsubscribe", function () {
        $origin.off.apply($origin, arguments);
    });
    FPO.add("publish", function () {
        $origin.trigger.apply($origin, $.makeArray(arguments));
    });
}(FLNS.register("quanmama.Pattern.Observer")));
(function () {
    try {
        document.execCommand('BackgroundImageCache', false, true);
    }
    catch (err) {
    }
})();
(function ($) {
    var jsonpid = 0;
    $.extend({"getScript": function (url, callback) {
        return $.ajax({url: url, cache: true, dataType: "script"}).done(callback);
    }, "getCacheJSONP": function (url, data, callback, isFixed) {
        var linkTs = $('link[rel="stylesheet"]').attr("href").split("?")[1];
        var lastPrm = arguments[arguments.length - 1];
        var isFixed = $.isFunction(lastPrm) ? isFixed = true : isFixed = lastPrm;
        var ts = (typeof linkTs != "undefined" && isFixed) ? linkTs : "83088605" + "_" + parseInt(new Date().getTime() / 300000);
        if ($.isFunction(data)) {
            callback = data;
            data = undefined;
        }
        return $.ajax({type: "GET", url: url, cache: true, data: data, jsonpCallback: "jQuery" + ts + (++jsonpid), success: callback, dataType: "jsonp"});
    }});
}(jQuery));
//(function ($) {
//    if (!'FirstUrl'.getCookie()) {
//        var ref = (!!document.referrer && document.referrer.indexOf('quanmama.com') < 0) ? document.referrer : 'http://www{0}/'.format(quanmama.Utility.rootDomain);
//        'FirstUrl'.setCookie(ref, '', quanmama.Utility.rootDomain, '/');
//    }
//    if (!'LandingUrl'.getCookie()) {
//        'LandingUrl'.setCookie(window.location.href, '', quanmama.Utility.rootDomain, '/');
//    }
//    $(document).on('click', 'a', function () {
//        var $this = $(this);
//        var url = $this.attr('href') || '';
//        var re = /&v=(\d+)/gi;
//        if (url.indexOf('fun.51fanli.com/goshop') != -1 || url.indexOf('fun.quanmama.com/goshop') != -1) {
//            if (url.indexOf('v=') == -1) {
//                url = url + '&v=' + new Date().getTime();
//            }
//            else {
//                url = url.replace(re, '&v=' + new Date().getTime());
//            }
//            $this.attr('href', url);
//        }
//    });
//})(jQuery);
//function open53kf() {
//    $.getJSON('//fun{0}/client/homepage/monitor?title=kefu&jsoncallback=?'.format(quanmama.Utility.rootDomain));
//    window.open('http://www.53kf.com/company.php?arg=51fanli&style=1', '_blank', 'height=473,width=703,fullscreen=3,top=200,left=200,status=yes,toolbar=no,menubar=no,resizable=no,scrollbars=no,location=no,titlebar=no,fullscreen=no');
//    return false;
//}
function addFavorite(obj, msg) {
    var url = obj.rev || window.location.href, title = obj.title || document.title;
    try {
        if (window.sidebar) {
            window.sidebar.addPanel(title, url, '');
        }
        else {
            if (window.opera && window.print) {
                obj.setAttribute('rel', 'sidebar');
                obj.setAttribute('href', url);
                obj.click();
            }
            else {
                window.external.AddFavorite(url, title);
            }
        }
    }
    catch (e) {
        alert(msg ? msg : '加入收藏失败，请使用Ctrl+D进行添加');
    }
    return false;
}
(function ($) {
    FLNS.register("taobaoRate");
    FLNS.taobaoRate = (function () {
        var rate = 0.45;
        var rateArr = [
            {"st": [2007, 0, 1, 0, 0, 0, 0], "ed": [2013, 8, 27, 23, 59, 59, 999], "rate": 0.45},
            {"st": [2013, 8, 28, 0, 0, 0, 0], "ed": [2013, 10, 1, 23, 59, 59, 999], "rate": 0.36},
            {"st": [2013, 10, 2, 0, 0, 0, 0], "ed": [2099, 11, 31, 23, 59, 59, 999], "rate": 0.45}
        ];
        var nowTime = new Date();

        function getT(date) {
            return new Date(date[0], date[1], date[2], date[3], date[4], date[5], date[6]);
        }

        for (var i = 0; i < rateArr.length; i++) {
            if (nowTime >= getT(rateArr[i]["st"]) && nowTime <= getT(rateArr[i]["ed"])) {
                rate = rateArr[i]["rate"];
                break;
            }
        }
        return rate;
    }());
    FLNS.register("UserBenifit");
    UserBenifit.add("calculate", function (priceJSON, callback) {
        var price = priceJSON.price;
        var originalPrice = priceJSON.originalPrice;
        if (!$.isNumeric(price)) {
            callback.call({price: 0}, null);
            return;
        }
        var userIdCookieValue = "prouserid".getCookie();
        var experientCookieName = "tb_rate";
        var experientCookieValue = experientCookieName.getCookie().toLowerCase();
        var ajaxUrl = "http://taobao.quanmama.com/service/getUserRateType";
        var baseRate = FLNS.taobaoRate;
        var criticalPointOne = 5.5;
        var criticalPointTwo = 2;
        var aboveRate = 0.25;
        var aboveRate1 = 0.55;
        var aboveRate2 = 0.25;
        var aboveRate3 = 0.35;
        var belowRate = 0.8;
        var beginDate = new Date(2013, 1, 1, 0, 0, 0, 0);
        var endDate = new Date(2013, 3, 30, 23, 59, 59, 999);
        var newBeginDate = new Date(2013, 4, 1, 0, 0, 0, 0);
        var newEndDate = new Date(2013, 5, 30, 23, 59, 59, 999);
        var nEndDate = new Date(2013, 5, 1, 0, 0, 0, 0);
        var nnEndDate = new Date(2013, 6, 30, 23, 59, 59, 999);
        var currentDate = new Date();
        var callback = $.isFunction(callback) ? callback : $.noop;
        var resultConfig = {basal: price * baseRate, colorful: price > criticalPointTwo ? belowRate * criticalPointTwo + aboveRate * (price - criticalPointTwo) : price * belowRate, firstStrategy: theFirstStrategy(), secondStrategy: theSecondStrategy(), thirdStrategy: theThirdStrategy(), fourthStrategy: theFourthStategy(), fifthStrategy: theFifthStategy()};
        var experientConfig = {"a": "basal", "b": "colorful", "c": "thirdStrategy", "d": "firstStrategy", "e": "secondStrategy", "f": "fourthStrategy", "g": "fifthStrategy", "p": "basal"};
        var experientConfig1 = {"a": "basal", "b": "basal", "c": "basal", "d": "basal", "e": "basal", "f": "fourthStrategy", "g": "fifthStrategy", "p": "basal"};
        var experientConfig2 = {"a": "basal", "b": "basal", "c": "basal", "d": "basal", "e": "basal", "f": "basal", "g": "basal", "p": "basal"};
        if (currentDate > nnEndDate) {
            callback.call({price: numberConvert(resultConfig["basal"])}, null);
            return;
        }
        if (currentDate >= newBeginDate && currentDate <= nEndDate) {
            experientConfig = experientConfig1;
        }
        else if (currentDate > nEndDate && currentDate <= nnEndDate) {
            experientConfig = experientConfig2;
        }
        if (!userIdCookieValue) {
            unloginHandler();
        }
        else {
            if (!experientCookieValue || experientCookieValue == "null") {
                $.ajax({url: ajaxUrl, dataType: "jsonp", jsonp: "jsoncallback", success: function (result) {
                    if (result.status == "1") {
                        callback.call({price: numberConvert(resultConfig[experientConfig[result.data.rateType.toLowerCase()]])}, null);
                    }
                    else {
                        unloginHandler();
                    }
                }, error: function () {
                    unloginHandler();
                }});
            }
            else {
                var tem = experientConfig[experientCookieValue] || 'basal';
                callback.call({price: numberConvert(resultConfig[tem])}, null);
            }
        }
        function unloginHandler() {
            callback.call({price: numberConvert(resultConfig["basal"])}, null);
        }

        function numberConvert(i) {
            return Number(new Number(i).toFixed(2));
        }

        function theFirstStrategy() {
            return price >= criticalPointTwo ? belowRate * criticalPointTwo + aboveRate1 * (price - criticalPointTwo) : price * belowRate;
        }

        function theSecondStrategy() {
            if (price < criticalPointTwo) {
                return price * belowRate;
            }
            else if (price >= criticalPointTwo && price < criticalPointOne) {
                return belowRate * criticalPointTwo + aboveRate2 * (price - criticalPointTwo)
            }
            else {
                return price * baseRate;
            }
        }

        function theThirdStrategy() {
            return price < criticalPointOne ? price * baseRate : baseRate * criticalPointOne + aboveRate3 * (price - criticalPointOne);
        }

        function theFourthStategy() {
            if (price < criticalPointTwo) {
                return price * belowRate;
            }
            else if (price >= criticalPointTwo && price < criticalPointOne) {
                return criticalPointTwo * belowRate + aboveRate * (price - criticalPointTwo)
            }
            else {
                return price * baseRate;
            }
        }

        function theFifthStategy() {
            var maxOne = 0.5;
            var maxTwo = 1;
            if (price <= 0.5) {
                return Math.min(maxOne, originalPrice * 0.35);
            }
            else if (price > 0.5 && price <= 1) {
                return Math.min(maxTwo, originalPrice * 0.35);
            }
            else if (price > 1 && price < criticalPointTwo) {
                return price * belowRate;
            }
            else if (price >= criticalPointTwo && price < criticalPointOne) {
                return criticalPointTwo * belowRate + aboveRate * (price - criticalPointTwo);
            }
            else {
                return price * baseRate;
            }
        }
    });
})(jQuery);
(function ($) {
    $("a[data-lc]").on("click", function () {
        var $this = $(this);
        var originHref = $this.attr("href");
        var lc = $this.attr("data-lc");
        if (!originHref) {
            return;
        }
        if (originHref.indexOf("?") > -1) {
            $this.attr("href", "{0}&lc={1}".format(originHref, lc));
        } else {
            $this.attr("href", "{0}?lc={1}".format(originHref, lc));
        }
    });
}(jQuery));
//(function () {
//    var hostDomain = quanmama.Utility.rootDomain;
//    var host = location.host.toLowerCase();
//    var newLocation = location.href.replace(/51fanli\.com/i, 'quanmama.com');
//    if (!host || hostDomain == '.quanmama.com' || /^(fun|trace)\./.test(host)) {
//        return;
//    }
//    else {
//        window.location.href = newLocation;
//    }
//})();
//var passportAppUrl = "//passport{0}".format(quanmama.Utility.rootDomain);
//var redirectPrefixAfterLogin = "{0}/redirect/loginsuccess".format(passportAppUrl);
//var redirectPrefixAfterRegister = "{0}/redirect/regsuccess".format(passportAppUrl);
//var verifyCodeImageUrl = "//fun{0}/verify.png?".format(quanmama.Utility.rootDomain);
//;
(function (exports) {
    var traceCrossPageCookie = "__fl_trace_cpc";
    var tid = 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    }).toUpperCase();
    var domain = (function () {
        var tryExecLocation = /^.*?(\.(?:51)?quanmama\.com)$/ig.exec(location.hostname);
        var rootDomain = ".quanmama.com";
        if (tryExecLocation) {
            rootDomain = tryExecLocation[1];
        }
        return rootDomain;
    }());
    var urlReg = /^(?:(?:http(?:s)?:\/\/)?[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])|(?:\/.*))*$/ig;
//    var CookieOperation = (function () {
//        function _setCookie(name, value, expiryDays, domain, path, secure) {
//            var builder = [name, "=", escape(value)];
//            if (expiryDays) {
//                var date = new Date();
//                date.setTime(date.getTime() + (expiryDays * 86400000));
//                builder.push(";expires=");
//                builder.push(date.toUTCString());
//            }
//            if (domain) {
//                builder.push(";domain=");
//                builder.push(domain);
//            }
//            if (path) {
//                builder.push(";path=");
//                builder.push(path);
//            }
//            if (secure) {
//                builder.push(";secure");
//            }
//            document.cookie = builder.join("");
//        }
//
//        function _getCookie(name) {
//            var re = new RegExp('\\b' + name + '\\s*=\\s*([^;]*)', 'i');
//            var match = re.exec(document.cookie);
//            return(match && match.length > 1 ? unescape(match[1]) : '');
//        }
//
//        return{setCookie: _setCookie, getCookie: _getCookie};
//    }());
    var StringOperation = {format: function (s, args) {
        for (var i = 0; i < args.length; ++i) {
            s = s.replace(new RegExp("\\{" + i + "\\}", "g"), args[i]);
        }
        return s;
    }, isUrl: function (url) {
        if (!url) {
            return false;
        }
        urlReg.lastIndex = 0;
        url = url.toString();
        return urlReg.test(url);
    }};
    var ptid = CookieOperation.getCookie(traceCrossPageCookie);
    exports.UBT = {isObject: function (obj) {
        return Object.prototype.toString.call(obj) === "[object Object]";
    }, uswitch: true, commonData: {referrer: encodeURIComponent(document.referrer), resolution_h: window.screen.height || 0, resolution_v: window.screen.width || 0, resolution_r: window.devicePixelRatio || 1, language: navigator.language || navigator.userLanguage, url: encodeURIComponent(location.href)}, mergeData: function (options) {
        var dataObj = this.commonData;
        if (this.isObject(options)) {
            for (var k in options) {
                if (options.hasOwnProperty(k)) {
                    dataObj[k] = options[k];
                }
            }
        }
        return this;
    }, _sendUrl: StringOperation.format("//eagle{0}/ubt.php", [domain]), _sendPV: function () {
        var builder = [];
        var dataObj = this.commonData;
        for (var j in dataObj) {
            if (dataObj.hasOwnProperty(j)) {
                builder.push(StringOperation.format("{0}={1}", [j, dataObj[j]]));
            }
        }
        builder.push("eventtype=pv");
        this._buildTrackImg(builder.join("&"));
    }, track: function () {
        if (!this.uswitch) {
            return;
        }
        var tArr = [];
        var builder = [];
        for (var i = 0, length = arguments.length; i < length; i++) {
            tArr.push([arguments[i]]);
        }
        builder.push("evttype=cd");
        builder.push(StringOperation.format("spm={0}", [encodeURIComponent(tArr.join("."))]));
        this._buildTrackImg(builder.join("&"));
        return false;
    }, _buildTrackImg: function (parastr) {
        var img = new Image();
        var userid = CookieOperation.getCookie("prouserid");
        var utmo = CookieOperation.getCookie("__utmo");
        var utmp = CookieOperation.getCookie("__utmp");
        var utmt = CookieOperation.getCookie("__utmt");
        var defaultParameterArr = [];
        if (utmo) {
            defaultParameterArr.push("utmo=" + utmo);
        }
        if (utmp) {
            defaultParameterArr.push("utmp=" + utmp);
        }
        if (utmt) {
            defaultParameterArr.push("utmt=" + utmt);
        }
        if (userid) {
            defaultParameterArr.push("userid=" + userid);
        }
        defaultParameterArr.push("tid=" + tid);
        if (ptid) {
            defaultParameterArr.push("ptid=" + ptid);
        }
        defaultParameterArr.push("timestamp=" + new Date().getTime());
        img.onload = img.onerror = function () {
            img.onload = img.onerror = null;
        }
        img.src = this._sendUrl + "?" + parastr + "&" + defaultParameterArr.join("&");
    }, PlugIns: {clickOperation: function (options) {
        var timeId;
        $(document).on("click", "a, button, i, span, input[type=button], input[type=submit], .J_fanli_ubt_trigger", function (ev) {
            var $this = $(this);
            var $ancestor = $this.parents();
            var ancestorLen = $ancestor.length;
            var temArr = [];
            var traceStr = "";
            var parameterArr = [];
            var $module = $this.closest(".J_ubt_module");
            var module = $module.length > 0 && $module.data("spm");
            var ubtindex = $this.data("ubtindex");
            var tagName = $this[0].tagName;
            var dataId = $this.data("id");
            var elementId = $this.attr("id");
            var klass = $.trim($this.attr("class") || "");
            var href = $this.attr("href");
            var text = $.trim($this.attr("data-ubttext") || $this.text() || "");
            var val = $this.val();
            var spm = $this.data("spm") || "";
            if (StringOperation.isUrl(href) && href.indexOf("spm") == -1 && spm) {
                if (-1 == href.indexOf('#')) {
                    href = StringOperation.format("{0}{1}spm={2}", [href, (href.indexOf('?') === -1) ? "?" : "&", spm]);
                }
                else {
                    var href_split = href.split('#');
                    href = StringOperation.format("{0}{1}spm={2}#{3}", [href_split[0], (href.indexOf('?') === -1) ? "?" : "&", spm, href_split[1]]);
                }
                $this.attr("href", href);
            }
            parameterArr.push("evttype=click");
            if (href && href != "javascript:void(0);" && href != "javascript:void(0)") {
                parameterArr.push("href=" + encodeURIComponent(href));
            }
            if (spm) {
                parameterArr.push("spm=" + spm);
            }
            if (module) {
                parameterArr.push("module=" + module);
            }
            if (ubtindex) {
                parameterArr.push("index=" + ubtindex);
            }
            parameterArr.push("depth=" + Math.round(($(window).scrollTop() / $(document).height()) * 100));
            temArr.push(tagName);
            if (dataId) {
                temArr.push(StringOperation.format("[data-id={0}]", [dataId]));
            }
            if (href) {
                temArr.push(StringOperation.format("[href={0}]", [href]));
            }
            if (elementId) {
                temArr.push(StringOperation.format("[id={0}]", [elementId]));
            }
            if (klass) {
                temArr.push(StringOperation.format("[class={0}]", [klass]));
            }
            if (text) {
                temArr.push(StringOperation.format("[text={0}]", [text]));
            }
            if (val) {
                temArr.push(StringOperation.format("[value={0}]", [val]));
            }
            traceStr += temArr.join("");
            temArr.length = 0;
            for (var i = 0; i < ancestorLen; i++) {
                var $currentNode = $ancestor.eq(i);
                var currentNode = $ancestor.get(i);
                var id = $currentNode.attr("id");
                var klass = $.trim($currentNode.attr("class") || "");
                var tagName = currentNode.tagName;
                if (tagName == "HTML" || tagName == "BODY") {
                    break;
                }
                temArr.push(tagName);
                if (id) {
                    temArr.push(StringOperation.format("[id={0}]", [id]));
                }
                if (klass) {
                    temArr.push(StringOperation.format("[class={0}]", [klass]));
                }
                if (i >= 5 - 1) {
                    break;
                }
                traceStr += "_" + temArr.join("");
                temArr.length = 0;
            }
            parameterArr.push("evt=click_" + encodeURIComponent(traceStr));
            if (timeId) {
                clearTimeout(timeId);
            }
            timeId = setTimeout(function () {
                UBT._buildTrackImg(parameterArr.join("&"));
            }, 25);
        });
        return UBT.PlugIns;
    }, scrollOperation: function () {
        var $w = $(window);
        var sid;
        var parameterArr = [];
        $w.on("scroll", function (ev) {
            if (sid) {
                clearTimeout(sid);
            }
            sid = setTimeout(function () {
                parameterArr.push("spm=" + Math.round(($w.scrollTop() / $(document).height()) * 100));
                parameterArr.push("evttype=scroll");
                UBT._buildTrackImg(parameterArr.join("&"));
                parameterArr.length = 0;
            }, 800);
        });
        return UBT.PlugIns;
    }}, init: function () {
        this._sendPV();
        CookieOperation.setCookie(traceCrossPageCookie, tid, "", domain, "/");
        return this;
    }};
}(this));
(function () {
    if (UBT.uswitch) {
        UBT.mergeData(typeof fgv != "undefined" && fgv.fanlitrace ? fgv.fanlitrace : {}).init();
        UBT.PlugIns.clickOperation().scrollOperation();
    }
}());
;
(function (a) {
    a.fn.placeholder = function (d) {
        d = a.extend({type: "value", color: "#BCBCBC", zIndex: false, klass: false, offset: [0, 0], repair: false, onLoad: false}, d);
        var b = document.createElement("input");
        var c = "placeholder"in b;
        if (!c) {
            return this.each(function () {
                var l = a(this);
                var q = l.attr("placeholder");
                var m = d.type;
                if (m == "label") {
                    var o = a('<label style="display:none;position:absolute;cursor:text;"></label>');
                    var f = l.attr("id");
                    var i = l.position();
                    var g = l.width();
                    var r = l.outerHeight();
                    var h = l.css("padding-left");
                    var n = l.css("z-index");
                    var s = l.css("font-size");
                    var e = l.css("text-indent");
                    if (!f) {
                        f = "placeholderId" + Math.random();
                        l.attr("id", f)
                    }
                    if (n != "auto") {
                        n = n + 1
                    }
                    if (!d.klass) {
                        o.css({"z-index": n, left: i.left + d.offset[0], top: i.top + d.offset[1], width: g + "px", "padding-left": h, color: d.color, "font-size": s, "line-height": r + "px", "text-indent": e})
                    } else {
                        o.addClass(d.klass)
                    }
                    o.text(q).attr("for", f).insertBefore(this);
                    function j() {
                        o.hide()
                    }

                    function p() {
                        var t = l.attr("placeholder");
                        if (l.val() == "") {
                            o.text(t).show()
                        }
                    }

                    if (d.onLoad) {
                        a(window).load(p)
                    } else {
                        p()
                    }
                    function k() {
                        var t = l.position();
                        o.css({left: t.left + d.offset[0], top: t.top + d.offset[1]})
                    }

                    l.on({"focus.placeholder": j, "blur.placeholder": p, "change.placeholder": p, "input.placeholder": p, "show.placeholder": function () {
                        k();
                        p()
                    }});
                    if (!window.screenX) {
                        l.on("keyup.placeholder", j);
                        o[0].onpaste = function () {
                            setTimeout(j, 30)
                        }
                    }
                    o[0].oncontextmenu = function () {
                        l.focus();
                        return false
                    };
                    o.on("click.placeholder", function () {
                        l.focus()
                    });
                    if (l.prop("disabled")) {
                        o.off("click.placeholder")
                    }
                    a(window).on({"resize.placeholder": k, "load.placeholder": k})
                } else {
                    if (m == "value") {
                        if (l.val() == "") {
                            l.addClass(d.klass).css("color", d.color).val(l.attr("placeholder"))
                        }
                        l.focus(function () {
                            if (l.val() == l.attr("placeholder")) {
                                l.removeClass(d.klass).css("color", "").val("")
                            }
                        }).blur(function () {
                            if (l.val() == "") {
                                l.addClass(d.klass).css("color", d.color).val(l.attr("placeholder"))
                            }
                        })
                    }
                }
            })
        }
    }
})(jQuery);
;
/*
 * jQuery UI Autocomplete 1.8.22
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Autocomplete
 *
 * Depends:
 * jquery.ui.core.js
 * jquery.ui.widget.js
 * jquery.ui.position.js
 */

/* jQuery UI - v1.8.22 - 2012-07-24
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.core.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function (a, b) {
    function c(b, c) {
        var e = b.nodeName.toLowerCase();
        if ("area" === e) {
            var f = b.parentNode, g = f.name, h;
            return!b.href || !g || f.nodeName.toLowerCase() !== "map" ? !1 : (h = a("img[usemap=#" + g + "]")[0], !!h && d(h))
        }
        return(/input|select|textarea|button|object/.test(e) ? !b.disabled : "a" == e ? b.href || c : c) && d(b)
    }

    function d(b) {
        return!a(b).parents().andSelf().filter(function () {
            return a.curCSS(this, "visibility") === "hidden" || a.expr.filters.hidden(this)
        }).length
    }

    a.ui = a.ui || {};
    if (a.ui.version)return;
    a.extend(a.ui, {version: "1.8.22", keyCode: {ALT: 18, BACKSPACE: 8, CAPS_LOCK: 20, COMMA: 188, COMMAND: 91, COMMAND_LEFT: 91, COMMAND_RIGHT: 93, CONTROL: 17, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, INSERT: 45, LEFT: 37, MENU: 93, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108, NUMPAD_MULTIPLY: 106, NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SHIFT: 16, SPACE: 32, TAB: 9, UP: 38, WINDOWS: 91}}), a.fn.extend({propAttr: a.fn.prop || a.fn.attr, _focus: a.fn.focus, focus: function (b, c) {
        return typeof b == "number" ? this.each(function () {
            var d = this;
            setTimeout(function () {
                a(d).focus(), c && c.call(d)
            }, b)
        }) : this._focus.apply(this, arguments)
    }, scrollParent: function () {
        var b;
        return a.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? b = this.parents().filter(function () {
            return/(relative|absolute|fixed)/.test(a.curCSS(this, "position", 1)) && /(auto|scroll)/.test(a.curCSS(this, "overflow", 1) + a.curCSS(this, "overflow-y", 1) + a.curCSS(this, "overflow-x", 1))
        }).eq(0) : b = this.parents().filter(function () {
            return/(auto|scroll)/.test(a.curCSS(this, "overflow", 1) + a.curCSS(this, "overflow-y", 1) + a.curCSS(this, "overflow-x", 1))
        }).eq(0), /fixed/.test(this.css("position")) || !b.length ? a(document) : b
    }, zIndex: function (c) {
        if (c !== b)return this.css("zIndex", c);
        if (this.length) {
            var d = a(this[0]), e, f;
            while (d.length && d[0] !== document) {
                e = d.css("position");
                if (e === "absolute" || e === "relative" || e === "fixed") {
                    f = parseInt(d.css("zIndex"), 10);
                    if (!isNaN(f) && f !== 0)return f
                }
                d = d.parent()
            }
        }
        return 0
    }, disableSelection: function () {
        return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (a) {
            a.preventDefault()
        })
    }, enableSelection: function () {
        return this.unbind(".ui-disableSelection")
    }}), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function (c, d) {
        function h(b, c, d, f) {
            return a.each(e, function () {
                c -= parseFloat(a.curCSS(b, "padding" + this, !0)) || 0, d && (c -= parseFloat(a.curCSS(b, "border" + this + "Width", !0)) || 0), f && (c -= parseFloat(a.curCSS(b, "margin" + this, !0)) || 0)
            }), c
        }

        var e = d === "Width" ? ["Left", "Right"] : ["Top", "Bottom"], f = d.toLowerCase(), g = {innerWidth: a.fn.innerWidth, innerHeight: a.fn.innerHeight, outerWidth: a.fn.outerWidth, outerHeight: a.fn.outerHeight};
        a.fn["inner" + d] = function (c) {
            return c === b ? g["inner" + d].call(this) : this.each(function () {
                a(this).css(f, h(this, c) + "px")
            })
        }, a.fn["outer" + d] = function (b, c) {
            return typeof b != "number" ? g["outer" + d].call(this, b) : this.each(function () {
                a(this).css(f, h(this, b, !0, c) + "px")
            })
        }
    }), a.extend(a.expr[":"], {data: a.expr.createPseudo ? a.expr.createPseudo(function (b) {
        return function (c) {
            return!!a.data(c, b)
        }
    }) : function (b, c, d) {
        return!!a.data(b, d[3])
    }, focusable: function (b) {
        return c(b, !isNaN(a.attr(b, "tabindex")))
    }, tabbable: function (b) {
        var d = a.attr(b, "tabindex"), e = isNaN(d);
        return(e || d >= 0) && c(b, !e)
    }}), a(function () {
        var b = document.body, c = b.appendChild(c = document.createElement("div"));
        c.offsetHeight, a.extend(c.style, {minHeight: "100px", height: "auto", padding: 0, borderWidth: 0}), a.support.minHeight = c.offsetHeight === 100, a.support.selectstart = "onselectstart"in c, b.removeChild(c).style.display = "none"
    }), a.curCSS || (a.curCSS = a.css), a.extend(a.ui, {plugin: {add: function (b, c, d) {
        var e = a.ui[b].prototype;
        for (var f in d)e.plugins[f] = e.plugins[f] || [], e.plugins[f].push([c, d[f]])
    }, call: function (a, b, c) {
        var d = a.plugins[b];
        if (!d || !a.element[0].parentNode)return;
        for (var e = 0; e < d.length; e++)a.options[d[e][0]] && d[e][1].apply(a.element, c)
    }}, contains: function (a, b) {
        return document.compareDocumentPosition ? a.compareDocumentPosition(b) & 16 : a !== b && a.contains(b)
    }, hasScroll: function (b, c) {
        if (a(b).css("overflow") === "hidden")return!1;
        var d = c && c === "left" ? "scrollLeft" : "scrollTop", e = !1;
        return b[d] > 0 ? !0 : (b[d] = 1, e = b[d] > 0, b[d] = 0, e)
    }, isOverAxis: function (a, b, c) {
        return a > b && a < b + c
    }, isOver: function (b, c, d, e, f, g) {
        return a.ui.isOverAxis(b, d, f) && a.ui.isOverAxis(c, e, g)
    }})
})(jQuery);
;
/* jQuery UI - v1.8.22 - 2012-07-24
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.widget.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function (a, b) {
    if (a.cleanData) {
        var c = a.cleanData;
        a.cleanData = function (b) {
            for (var d = 0, e; (e = b[d]) != null; d++)try {
                a(e).triggerHandler("remove")
            } catch (f) {
            }
            c(b)
        }
    } else {
        var d = a.fn.remove;
        a.fn.remove = function (b, c) {
            return this.each(function () {
                return c || (!b || a.filter(b, [this]).length) && a("*", this).add([this]).each(function () {
                    try {
                        a(this).triggerHandler("remove")
                    } catch (b) {
                    }
                }), d.call(a(this), b, c)
            })
        }
    }
    a.widget = function (b, c, d) {
        var e = b.split(".")[0], f;
        b = b.split(".")[1], f = e + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][f] = function (c) {
            return!!a.data(c, b)
        }, a[e] = a[e] || {}, a[e][b] = function (a, b) {
            arguments.length && this._createWidget(a, b)
        };
        var g = new c;
        g.options = a.extend(!0, {}, g.options), a[e][b].prototype = a.extend(!0, g, {namespace: e, widgetName: b, widgetEventPrefix: a[e][b].prototype.widgetEventPrefix || b, widgetBaseClass: f}, d), a.widget.bridge(b, a[e][b])
    }, a.widget.bridge = function (c, d) {
        a.fn[c] = function (e) {
            var f = typeof e == "string", g = Array.prototype.slice.call(arguments, 1), h = this;
            return e = !f && g.length ? a.extend.apply(null, [!0, e].concat(g)) : e, f && e.charAt(0) === "_" ? h : (f ? this.each(function () {
                var d = a.data(this, c), f = d && a.isFunction(d[e]) ? d[e].apply(d, g) : d;
                if (f !== d && f !== b)return h = f, !1
            }) : this.each(function () {
                var b = a.data(this, c);
                b ? b.option(e || {})._init() : a.data(this, c, new d(e, this))
            }), h)
        }
    }, a.Widget = function (a, b) {
        arguments.length && this._createWidget(a, b)
    }, a.Widget.prototype = {widgetName: "widget", widgetEventPrefix: "", options: {disabled: !1}, _createWidget: function (b, c) {
        a.data(c, this.widgetName, this), this.element = a(c), this.options = a.extend(!0, {}, this.options, this._getCreateOptions(), b);
        var d = this;
        this.element.bind("remove." + this.widgetName, function () {
            d.destroy()
        }), this._create(), this._trigger("create"), this._init()
    }, _getCreateOptions: function () {
        return a.metadata && a.metadata.get(this.element[0])[this.widgetName]
    }, _create: function () {
    }, _init: function () {
    }, destroy: function () {
        this.element.unbind("." + this.widgetName).removeData(this.widgetName), this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled " + "ui-state-disabled")
    }, widget: function () {
        return this.element
    }, option: function (c, d) {
        var e = c;
        if (arguments.length === 0)return a.extend({}, this.options);
        if (typeof c == "string") {
            if (d === b)return this.options[c];
            e = {}, e[c] = d
        }
        return this._setOptions(e), this
    }, _setOptions: function (b) {
        var c = this;
        return a.each(b, function (a, b) {
            c._setOption(a, b)
        }), this
    }, _setOption: function (a, b) {
        return this.options[a] = b, a === "disabled" && this.widget()[b ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled" + " " + "ui-state-disabled").attr("aria-disabled", b), this
    }, enable: function () {
        return this._setOption("disabled", !1)
    }, disable: function () {
        return this._setOption("disabled", !0)
    }, _trigger: function (b, c, d) {
        var e, f, g = this.options[b];
        d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent;
        if (f)for (e in f)e in c || (c[e] = f[e]);
        return this.element.trigger(c, d), !(a.isFunction(g) && g.call(this.element[0], c, d) === !1 || c.isDefaultPrevented())
    }}
})(jQuery);
;
/* jQuery UI - v1.8.22 - 2012-07-24
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.position.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function (a, b) {
    a.ui = a.ui || {};
    var c = /left|center|right/, d = /top|center|bottom/, e = "center", f = {}, g = a.fn.position, h = a.fn.offset;
    a.fn.position = function (b) {
        if (!b || !b.of)return g.apply(this, arguments);
        b = a.extend({}, b);
        var h = a(b.of), i = h[0], j = (b.collision || "flip").split(" "), k = b.offset ? b.offset.split(" ") : [0, 0], l, m, n;
        return i.nodeType === 9 ? (l = h.width(), m = h.height(), n = {top: 0, left: 0}) : i.setTimeout ? (l = h.width(), m = h.height(), n = {top: h.scrollTop(), left: h.scrollLeft()}) : i.preventDefault ? (b.at = "left top", l = m = 0, n = {top: b.of.pageY, left: b.of.pageX}) : (l = h.outerWidth(), m = h.outerHeight(), n = h.offset()), a.each(["my", "at"], function () {
            var a = (b[this] || "").split(" ");
            a.length === 1 && (a = c.test(a[0]) ? a.concat([e]) : d.test(a[0]) ? [e].concat(a) : [e, e]), a[0] = c.test(a[0]) ? a[0] : e, a[1] = d.test(a[1]) ? a[1] : e, b[this] = a
        }), j.length === 1 && (j[1] = j[0]), k[0] = parseInt(k[0], 10) || 0, k.length === 1 && (k[1] = k[0]), k[1] = parseInt(k[1], 10) || 0, b.at[0] === "right" ? n.left += l : b.at[0] === e && (n.left += l / 2), b.at[1] === "bottom" ? n.top += m : b.at[1] === e && (n.top += m / 2), n.left += k[0], n.top += k[1], this.each(function () {
            var c = a(this), d = c.outerWidth(), g = c.outerHeight(), h = parseInt(a.curCSS(this, "marginLeft", !0)) || 0, i = parseInt(a.curCSS(this, "marginTop", !0)) || 0, o = d + h + (parseInt(a.curCSS(this, "marginRight", !0)) || 0), p = g + i + (parseInt(a.curCSS(this, "marginBottom", !0)) || 0), q = a.extend({}, n), r;
            b.my[0] === "right" ? q.left -= d : b.my[0] === e && (q.left -= d / 2), b.my[1] === "bottom" ? q.top -= g : b.my[1] === e && (q.top -= g / 2), f.fractions || (q.left = Math.round(q.left), q.top = Math.round(q.top)), r = {left: q.left - h, top: q.top - i}, a.each(["left", "top"], function (c, e) {
                a.ui.position[j[c]] && a.ui.position[j[c]][e](q, {targetWidth: l, targetHeight: m, elemWidth: d, elemHeight: g, collisionPosition: r, collisionWidth: o, collisionHeight: p, offset: k, my: b.my, at: b.at})
            }), a.fn.bgiframe && c.bgiframe(), c.offset(a.extend(q, {using: b.using}))
        })
    }, a.ui.position = {fit: {left: function (b, c) {
        var d = a(window), e = c.collisionPosition.left + c.collisionWidth - d.width() - d.scrollLeft();
        b.left = e > 0 ? b.left - e : Math.max(b.left - c.collisionPosition.left, b.left)
    }, top: function (b, c) {
        var d = a(window), e = c.collisionPosition.top + c.collisionHeight - d.height() - d.scrollTop();
        b.top = e > 0 ? b.top - e : Math.max(b.top - c.collisionPosition.top, b.top)
    }}, flip: {left: function (b, c) {
        if (c.at[0] === e)return;
        var d = a(window), f = c.collisionPosition.left + c.collisionWidth - d.width() - d.scrollLeft(), g = c.my[0] === "left" ? -c.elemWidth : c.my[0] === "right" ? c.elemWidth : 0, h = c.at[0] === "left" ? c.targetWidth : -c.targetWidth, i = -2 * c.offset[0];
        b.left += c.collisionPosition.left < 0 ? g + h + i : f > 0 ? g + h + i : 0
    }, top: function (b, c) {
        if (c.at[1] === e)return;
        var d = a(window), f = c.collisionPosition.top + c.collisionHeight - d.height() - d.scrollTop(), g = c.my[1] === "top" ? -c.elemHeight : c.my[1] === "bottom" ? c.elemHeight : 0, h = c.at[1] === "top" ? c.targetHeight : -c.targetHeight, i = -2 * c.offset[1];
        b.top += c.collisionPosition.top < 0 ? g + h + i : f > 0 ? g + h + i : 0
    }}}, a.offset.setOffset || (a.offset.setOffset = function (b, c) {
        /static/.test(a.curCSS(b, "position")) && (b.style.position = "relative");
        var d = a(b), e = d.offset(), f = parseInt(a.curCSS(b, "top", !0), 10) || 0, g = parseInt(a.curCSS(b, "left", !0), 10) || 0, h = {top: c.top - e.top + f, left: c.left - e.left + g};
        "using"in c ? c.using.call(b, h) : d.css(h)
    }, a.fn.offset = function (b) {
        var c = this[0];
        return!c || !c.ownerDocument ? null : b ? a.isFunction(b) ? this.each(function (c) {
            a(this).offset(b.call(this, c, a(this).offset()))
        }) : this.each(function () {
            a.offset.setOffset(this, b)
        }) : h.call(this)
    }), function () {
        var b = document.getElementsByTagName("body")[0], c = document.createElement("div"), d, e, g, h, i;
        d = document.createElement(b ? "div" : "body"), g = {visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none"}, b && a.extend(g, {position: "absolute", left: "-1000px", top: "-1000px"});
        for (var j in g)d.style[j] = g[j];
        d.appendChild(c), e = b || document.documentElement, e.insertBefore(d, e.firstChild), c.style.cssText = "position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;", h = a(c).offset(function (a, b) {
            return b
        }).offset(), d.innerHTML = "", e.removeChild(d), i = h.top + h.left + (b ? 2e3 : 0), f.fractions = i > 21 && i < 22
    }()
})(jQuery);
;
(function ($, undefined) {
    var requestIndex = 0;
    $.widget("ui.autocomplete", {options: {appendTo: "body", autoFocus: false, delay: 300, minLength: 1, position: {my: "left top", at: "left bottom", collision: "none"}, source: null, autoSubmitViaEnter: 0}, pending: 0, _create: function () {
        var self = this, doc = this.element[0].ownerDocument, suppressKeyPress;
        this.isMultiLine = this.element.is("textarea");
        this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off").attr({role: "textbox", "aria-autocomplete": "list", "aria-haspopup": "true"}).bind("keydown.autocomplete", function (event) {
            if (self.options.disabled || self.element.propAttr("readOnly")) {
                return
            }
            suppressKeyPress = false;
            var keyCode = $.ui.keyCode;
            switch (event.keyCode) {
                case keyCode.PAGE_UP:
                    self._move("previousPage", event);
                    break;
                case keyCode.PAGE_DOWN:
                    self._move("nextPage", event);
                    break;
                case keyCode.UP:
                    self._keyEvent("previous", event);
                    break;
                case keyCode.DOWN:
                    self._keyEvent("next", event);
                    break;
                case keyCode.ENTER:
                case keyCode.NUMPAD_ENTER:
                    if (self.menu.active && !self.options.autoSubmitViaEnter) {
                        suppressKeyPress = true;
                        event.preventDefault()
                    }
                case keyCode.TAB:
                    if (!self.menu.active) {
                        return
                    }
                    self.menu.select(event);
                    break;
                case keyCode.ESCAPE:
                    self.element.val(self.term);
                    self.close(event);
                    break;
                default:
                    clearTimeout(self.searching);
                    self.searching = setTimeout(function () {
                        if (self.term != self.element.val()) {
                            self.selectedItem = null;
                            self.search(null, event)
                        }
                    }, self.options.delay);
                    break
            }
        }).bind("keypress.autocomplete", function (event) {
            if (suppressKeyPress && !self.options.autoSubmitViaEnter) {
                suppressKeyPress = false;
                event.preventDefault()
            }
        }).bind("focus.autocomplete", function () {
            if (self.options.disabled) {
                return
            }
            self.selectedItem = null;
            self.previous = self.element.val()
        }).bind("blur.autocomplete", function (event) {
            if (self.options.disabled) {
                return
            }
            clearTimeout(self.searching);
            self.closing = setTimeout(function () {
                self.close(event);
                self._change(event)
            }, 150)
        });
        this._initSource();
        this.menu = $("<ul></ul>").addClass("ui-autocomplete").appendTo($(this.options.appendTo || "body", doc)[0]).mousedown(function (event) {
            var menuElement = self.menu.element[0];
            if (!$(event.target).closest(".ui-menu-item").length) {
                setTimeout(function () {
                    $(document).one('mousedown', function (event) {
                        if (event.target !== self.element[0] && event.target !== menuElement && !$.ui.contains(menuElement, event.target)) {
                            self.close()
                        }
                    })
                }, 1)
            }
            setTimeout(function () {
                clearTimeout(self.closing)
            }, 13)
        }).menu({focus: function (event, ui) {
            var item = ui.item.data("item.autocomplete");
            if (false !== self._trigger("focus", event, {item: item})) {
                if (/^key/.test(event.originalEvent.type)) {
                    self.element.val(item.value)
                }
            }
        }, selected: function (event, ui) {
            var item = ui.item.data("item.autocomplete"), previous = self.previous;
            if (self.element[0] !== doc.activeElement) {
                self.element.focus();
                self.previous = previous;
                setTimeout(function () {
                    self.previous = previous;
                    self.selectedItem = item
                }, 1)
            }
            if (false !== self._trigger("select", event, {item: item})) {
                self.element.val(item.value)
            }
            self.term = self.element.val();
            self.close(event);
            self.selectedItem = item
        }, blur: function (event, ui) {
            if (self.menu.element.is(":visible") && (self.element.val() !== self.term)) {
                self.element.val(self.term)
            }
        }}).zIndex(this.element.zIndex() + 1).css({top: 0, left: 0}).hide().data("menu");
        if ($.fn.bgiframe) {
            this.menu.element.bgiframe()
        }
        self.beforeunloadHandler = function () {
            self.element.removeAttr("autocomplete")
        };
        $(window).bind("beforeunload", self.beforeunloadHandler)
    }, destroy: function () {
        this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");
        this.menu.element.remove();
        $(window).unbind("beforeunload", this.beforeunloadHandler);
        $.Widget.prototype.destroy.call(this)
    }, _setOption: function (key, value) {
        $.Widget.prototype._setOption.apply(this, arguments);
        if (key === "source") {
            this._initSource()
        }
        if (key === "appendTo") {
            this.menu.element.appendTo($(value || "body", this.element[0].ownerDocument)[0])
        }
        if (key === "disabled" && value && this.xhr) {
            this.xhr.abort()
        }
    }, _initSource: function () {
        var self = this, array, url;
        if ($.isArray(this.options.source)) {
            array = this.options.source;
            this.source = function (request, response) {
                response($.ui.autocomplete.filter(array, request.term))
            }
        } else if (typeof this.options.source === "string") {
            url = this.options.source;
            this.source = function (request, response) {
                if (self.xhr) {
                    self.xhr.abort()
                }
                self.xhr = $.ajax({url: url, data: request, dataType: "json", success: function (data, status) {
                    response(data)
                }, error: function () {
                    response([])
                }})
            }
        } else {
            this.source = this.options.source
        }
    }, search: function (value, event) {
        value = value != null ? value : this.element.val();
        this.term = this.element.val();
        if (value.length < this.options.minLength) {
            return this.close(event)
        }
        clearTimeout(this.closing);
        if (this._trigger("search", event) === false) {
            return
        }
        return this._search(value)
    }, _search: function (value) {
        this.pending++;
        this.element.addClass("ui-autocomplete-loading");
        this.source({term: value}, this._response())
    }, _response: function () {
        var that = this, index = ++requestIndex;
        return function (content) {
            if (index === requestIndex) {
                that.__response(content)
            }
            that.pending--;
            if (!that.pending) {
                that.element.removeClass("ui-autocomplete-loading")
            }
        }
    }, __response: function (content) {
        if (!this.options.disabled && content && content.length) {
            content = this._normalize(content);
            this._suggest(content);
            this._trigger("open")
        } else {
            this.close()
        }
    }, close: function (event) {
        clearTimeout(this.closing);
        if (this.menu.element.is(":visible")) {
            this.menu.element.hide();
            this.menu.deactivate();
            this._trigger("close", event)
        }
    }, _change: function (event) {
        if (this.previous !== this.element.val()) {
            this._trigger("change", event, {item: this.selectedItem})
        }
    }, _normalize: function (items) {
        if (items.length && items[0].label && items[0].value) {
            return items
        }
        return $.map(items, function (item) {
            if (typeof item === "string") {
                return{label: item, value: item}
            }
            return $.extend({label: item.label || item.value, value: item.value || item.label}, item)
        })
    }, _suggest: function (items) {
        var ul = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
        this._renderMenu(ul, items);
        this.menu.deactivate();
        this.menu.refresh();
        ul.show();
        this._resizeMenu();
        ul.position($.extend({of: this.element}, this.options.position));
        if (this.options.autoFocus) {
            this.menu.next(new $.Event("mouseover"))
        }
    }, _resizeMenu: function () {
        var ul = this.menu.element;
        ul.outerWidth(Math.max(ul.width("").outerWidth() + 1, this.element.outerWidth()))
    }, _renderMenu: function (ul, items) {
        var self = this;
        $.each(items, function (index, item) {
            self._renderItem(ul, item)
        })
    }, _renderItem: function (ul, item) {
        return $("<li></li>").data("item.autocomplete", item).append($("<a></a>").text(item.label)).appendTo(ul)
    }, _move: function (direction, event) {
        if (!this.menu.element.is(":visible")) {
            this.search(null, event);
            return
        }
        if (this.menu.first() && /^previous/.test(direction) || this.menu.last() && /^next/.test(direction)) {
            this.element.val(this.term);
            this.menu.deactivate();
            return
        }
        this.menu[direction](event)
    }, widget: function () {
        return this.menu.element
    }, _keyEvent: function (keyEvent, event) {
        if (!this.isMultiLine || this.menu.element.is(":visible")) {
            this._move(keyEvent, event);
            event.preventDefault()
        }
    }});
    $.extend($.ui.autocomplete, {escapeRegex: function (value) {
        return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    }, filter: function (array, term) {
        var matcher = new RegExp($.ui.autocomplete.escapeRegex(term), "i");
        return $.grep(array, function (value) {
            return matcher.test(value.label || value.value || value)
        })
    }})
}(jQuery));
(function ($) {
    $.widget("ui.menu", {_create: function () {
        var self = this;
        this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role: "listbox", "aria-activedescendant": "ui-active-menuitem"}).click(function (event) {
            if (!$(event.target).closest(".ui-menu-item a").length) {
                return
            }
            event.preventDefault();
            self.select(event)
        });
        this.refresh()
    }, refresh: function () {
        var self = this;
        var items = this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "menuitem");
        items.children("a").addClass("ui-corner-all").attr("tabindex", -1).mouseenter(function (event) {
            self.activate(event, $(this).parent())
        }).mouseleave(function () {
            self.deactivate()
        })
    }, activate: function (event, item) {
        this.deactivate();
        if (this.hasScroll()) {
            var offset = item.offset().top - this.element.offset().top, scroll = this.element.scrollTop(), elementHeight = this.element.height();
            if (offset < 0) {
                this.element.scrollTop(scroll + offset)
            } else if (offset >= elementHeight) {
                this.element.scrollTop(scroll + offset - elementHeight + item.height())
            }
        }
        this.active = item.eq(0).children("a").addClass("ui-state-hover").attr("id", "ui-active-menuitem").end();
        this._trigger("focus", event, {item: item})
    }, deactivate: function () {
        if (!this.active) {
            return
        }
        this.active.children("a").removeClass("ui-state-hover").removeAttr("id");
        this._trigger("blur");
        this.active = null
    }, next: function (event) {
        this.move("next", ".ui-menu-item:first", event)
    }, previous: function (event) {
        this.move("prev", ".ui-menu-item:last", event)
    }, first: function () {
        return this.active && !this.active.prevAll(".ui-menu-item").length
    }, last: function () {
        return this.active && !this.active.nextAll(".ui-menu-item").length
    }, move: function (direction, edge, event) {
        if (!this.active) {
            this.activate(event, this.element.children(edge));
            return
        }
        var next = this.active[direction + "All"](".ui-menu-item").eq(0);
        if (next.length) {
            this.activate(event, next)
        } else {
            this.activate(event, this.element.children(edge))
        }
    }, nextPage: function (event) {
        if (this.hasScroll()) {
            if (!this.active || this.last()) {
                this.activate(event, this.element.children(".ui-menu-item:first"));
                return
            }
            var base = this.active.offset().top, height = this.element.height(), result = this.element.children(".ui-menu-item").filter(function () {
                var close = $(this).offset().top - base - height + $(this).height();
                return close < 10 && close > -10
            });
            if (!result.length) {
                result = this.element.children(".ui-menu-item:last")
            }
            this.activate(event, result)
        } else {
            this.activate(event, this.element.children(".ui-menu-item").filter(!this.active || this.last() ? ":first" : ":last"))
        }
    }, previousPage: function (event) {
        if (this.hasScroll()) {
            if (!this.active || this.first()) {
                this.activate(event, this.element.children(".ui-menu-item:last"));
                return
            }
            var base = this.active.offset().top, height = this.element.height(), result = this.element.children(".ui-menu-item").filter(function () {
                var close = $(this).offset().top - base + height - $(this).height();
                return close < 10 && close > -10
            });
            if (!result.length) {
                result = this.element.children(".ui-menu-item:first")
            }
            this.activate(event, result)
        } else {
            this.activate(event, this.element.children(".ui-menu-item").filter(!this.active || this.first() ? ":last" : ":first"))
        }
    }, hasScroll: function () {
        return this.element.height() < this.element[$.fn.prop ? "prop" : "attr"]("scrollHeight")
    }, select: function (event) {
        this._trigger("selected", event, {item: this.active})
    }})
}(jQuery));
;
(function (a) {
    function b(b, c, d) {
        var e = this, f = a(this), g = "beforeSwitch", h = "onSwitch";
        a.isFunction(c[g]) && f.bind(g, c[g]), a.isFunction(c[h]) && f.bind(h, c[h]), a.extend(e, {_initPlugins: function () {
            var b = a.switchable.Plugins, c = b.length, d = 0;
            for (; d < c; d++)b[d].init && b[d].init(e)
        }, _init: function () {
            e.container = b, e.config = c, !c.panels || !c.panels.jquery && a.type(c.panels) !== "string" ? e.panels = b.children() : e.panels = b.find(c.panels), e.length = Math.ceil(e.panels.length / c.steps);
            if (e.length < 1) {
                window.console && console.warn("No panel in " + d);
                return
            }
            e.index = c.initIndex === null ? undefined : c.initIndex + (c.initIndex < 0 ? e.length : 0), c.effect === "none" && e.panels.slice(e.index * c.steps, (e.index + 1) * c.steps).show();
            if (!!c.triggers) {
                var f, g, h;
                if (c.triggers.jquery)e.triggers = c.triggers.slice(0, e.length); else {
                    var i = a.type(c.triggers) === "string", j = [];
                    for (g = 1; g <= e.length; g++)j.push("<li>" + (i ? c.triggers : g) + "</li>");
                    e.triggers = a("<ul/>", {"class": c.triggersWrapCls, html: j.join("")})[c.putTriggers](b).find("li")
                }
                e.triggers.eq(e.index).addClass(c.currentTriggerCls);
                for (g = 0; g < e.length; g++)f = e.triggers.eq(g), f.click({index: g}, function (a) {
                    h = a.data.index;
                    if (!e._triggerIsValid(h))return;
                    e._cancelDelayTimer(), e.switchTo(h)
                }), c.triggerType === "mouse" && f.mouseenter({index: g}, function (a) {
                    h = a.data.index;
                    if (!e._triggerIsValid(h))return;
                    e._delayTimer = setTimeout(function () {
                        e.switchTo(h)
                    }, c.delay * 1e3)
                }).mouseleave(function () {
                    e._cancelDelayTimer()
                })
            }
        }, _triggerIsValid: function (a) {
            return e.index !== a
        }, _cancelDelayTimer: function () {
            e._delayTimer && (clearTimeout(e._delayTimer), e._delayTimer = undefined)
        }, _switchTrigger: function (a, b) {
            e.triggers.eq(a).removeClass(c.currentTriggerCls).end().eq(b).addClass(c.currentTriggerCls)
        }, _switchPanels: function (b, d, f) {
            a.switchable.Effects[c.effect].call(e, b, d, f)
        }, willTo: function (a) {
            return a ? e.index > 0 ? e.index - 1 : c.loop ? e.length - 1 : !1 : e.index < e.length - 1 ? e.index + 1 : c.loop ? 0 : !1
        }, switchTo: function (b, d) {
            var i = a.Event(g);
            f.trigger(i, [b]);
            if (i.isDefaultPrevented())return;
            return e._switchPanels(e.index, b, d), !c.triggers || e._switchTrigger(e.index, b), e.index = b, i.type = h, f.trigger(i, [b]), e
        }}), e._init(), e._initPlugins()
    }

    a.switchable = {Config: {triggers: !0, putTriggers: "insertAfter", triggersWrapCls: "switchable-triggers", currentTriggerCls: "current", panels: null, steps: 1, triggerType: "mouse", delay: .1, initIndex: 0, effect: "none", easing: "ease", duration: .5, loop: !0, beforeSwitch: null, onSwitch: null, api: !1}, Effects: {none: function (a, b) {
        var c = this, d = c.config;
        c.panels.slice(a * d.steps, (a + 1) * d.steps).hide().end().slice(b * d.steps, (b + 1) * d.steps).show()
    }}, Plugins: []}, a.fn.switchable = function (c) {
        var d = a(this), e = d.length, f = d.selector, g = [], h;
        c = a.extend({}, a.switchable.Config, c), c.effect = c.effect.toLowerCase();
        for (h = 0; h < e; h++)g[h] = new b(d.eq(h), c, f + "[" + h + "]");
        return c.api ? g[0] : d
    }
})(jQuery), function (a) {
    function b() {
        var a = document.documentElement, b = ["Webkit", "Moz"], c = "transition", d = "", e;
        if (a.style[c] !== undefined)d = c; else for (e = 0; e < 2; e++)if (a.style[c = b[e] + "Transition"] !== undefined) {
            d = c;
            break
        }
        return d
    }

    a.switchable.Anim = function (c, d, e, f, g, h) {
        var i = this, j = {}, k, l;
        a.switchable.Transition === undefined && (a.switchable.Transition = b()), k = a.switchable.Transition, a.extend(i, {isAnimated: !1, run: function () {
            if (i.isAnimated)return;
            e = e * 1e3;
            if (k)j[k + "Property"] = h || "all", j[k + "Duration"] = e + "ms", j[k + "TimingFunction"] = f, c.css(a.extend(d, j)), l = setTimeout(function () {
                i._clearCss(), i._complete()
            }, e); else {
                var b = /cubic-bezier\(([\s\d.,]+)\)/, g = f.match(b), m = a.switchable.TimingFn[f];
                if (m || g)f = a.switchable.Easing(g ? g[1] : m.match(b)[1]);
                c.animate(d, e, f, function () {
                    i._complete()
                })
            }
            return i.isAnimated = !0, i
        }, stop: function (a) {
            if (!i.isAnimated)return;
            return k ? (clearTimeout(l), l = undefined) : c.stop(!1, a), i.isAnimated = !1, i
        }, _complete: function () {
            g && g()
        }, _clearCss: function () {
            j[k + "Property"] = "none", c.css(j)
        }})
    }
}(jQuery), function (a) {
    function b(a) {
        return"cubic-bezier(" + a + ")"
    }

    function c(a) {
        var b = [], c = 101, d;
        for (d = 0; d <= c; d++)b[d] = a.call(null, d / c);
        return function (a) {
            if (a === 1)return b[c];
            var d = c * a, e = Math.floor(d), f = b[e], g = b[e + 1];
            return f + (g - f) * (d - e)
        }
    }

    function d(a, b, c, d, e, f) {
        function h(a) {
            return((g * a + bx) * a + cx) * a
        }

        function i(a) {
            return((ay * a + by) * a + cy) * a
        }

        function j(a) {
            return(3 * g * a + 2 * bx) * a + cx
        }

        function k(a) {
            return 1 / (200 * a)
        }

        function l(a, b) {
            return i(m(a, b))
        }

        function m(a, b) {
            function k(a) {
                return a >= 0 ? a : 0 - a
            }

            var c, d, e, f, g, i;
            for (e = a, i = 0; i < 8; i++) {
                f = h(e) - a;
                if (k(f) < b)return e;
                g = j(e);
                if (k(g) < 1e-6)break;
                e = e - f / g
            }
            c = 0, d = 1, e = a;
            if (e < c)return c;
            if (e > d)return d;
            while (c < d) {
                f = h(e);
                if (k(f - a) < b)return e;
                a > f ? c = e : d = e, e = (d - c) * .5 + c
            }
            return e
        }

        var g = bx = cx = ay = by = cy = 0;
        return cx = 3 * b, bx = 3 * (d - b) - cx, g = 1 - cx - bx, cy = 3 * c, by = 3 * (e - c) - cy, ay = 1 - cy - by, l(a, k(f))
    }

    a.switchable.TimingFn = {ease: b(".25, .1, .25, 1"), linear: b("0, 0, 1, 1"), "ease-in": b(".42, 0, 1, 1"), "ease-out": b("0, 0, .58, 1"), "ease-in-out": b(".42, 0, .58, 1")}, a.switchable.Easing = function (e) {
        var f, g, h = 0;
        e = e.split(","), g = e.length;
        for (; h < g; h++)e[h] = parseFloat(e[h]);
        if (g !== 4)window.console && console.warn(b(e.join(", ")) + " missing argument."); else {
            f = "cubic-bezier-" + e.join("-");
            if (!a.easing[f]) {
                var i = c(function (a) {
                    return d(a, e[0], e[1], e[2], e[3], 5)
                });
                a.easing[f] = function (a, b, c, d) {
                    return i.call(null, a)
                }
            }
        }
        return f
    }
}(jQuery), function (a) {
    a.extend(a.switchable.Config, {autoplay: !1, interval: 3, pauseOnHover: !0}), a.switchable.Plugins.push({name: "autoplay", init: function (b) {
        function h() {
            g = b.willTo(b.isBackward);
            if (g === !1) {
                b._cancelTimers();
                return
            }
            b.switchTo(g, b.isBackward ? "backward" : "forward")
        }

        function i() {
//            f = setInterval(function () {
//                h()
//            }, (c.interval + c.duration) * 1e3)
        }

        var c = b.config, d = !1, e, f, g;
        if (!c.autoplay || b.length <= 1)return;
        c.pauseOnHover && b.panels.add(b.triggers).hover(function () {
            b._pause()
        }, function () {
            d || b._play()
        }), a.extend(b, {_play: function () {
            b._cancelTimers(), b.paused = !1, e = setTimeout(function () {
                h(), i()
            }, c.interval * 1e3)
        }, _pause: function () {
            b._cancelTimers(), b.paused = !0
        }, _cancelTimers: function () {
            e && (clearTimeout(e), e = undefined), f && (clearInterval(f), f = undefined)
        }, play: function () {
            return b._play(), d = !1, b
        }, pause: function () {
            return b._pause(), d = !0, b
        }}), b._play()
    }})
}(jQuery), function (a) {
    a.extend(a.switchable.Config, {prev: null, next: null}), a.switchable.Plugins.push({name: "carousel", init: function (b) {
        var c = b.config, d = ["backward", "forward"], e = ["prev", "next"], f, g, h, i = 0;
        if (!c.prev && !c.next)return;
        for (; i < 2; i++)f = e[i], g = c[f], g && (h = b[f + "Btn"] = g.jquery ? g : a(g), h.click({direction: d[i]}, function (a) {
            a.preventDefault();
            if (b.config.autoplay) {
                b._pause()
            }
            ;
            if (!b.anim) {
                var c = a.data.direction, e = b.willTo(c === d[0]);
                e !== !1 && b.switchTo(e, c)
            }
            if (b.config.autoplay) {
                b._play()
            }
            ;
        }))
    }})
}(jQuery), function (a) {
    a.switchable.Effects.fade = function (b, c) {
        var d = this, e = d.config, f = d.panels, g = f.eq(b), h = f.eq(c);
        d.anim && (d.anim.stop(), f.eq(d.anim.to).css({zIndex: d.length}).end().eq(d.anim.from).css({opacity: 0, zIndex: 1})), h.css({opacity: 1}), d.anim = (new a.switchable.Anim(g, {opacity: 0}, e.duration, e.easing, function () {
            h.css({zIndex: d.length}), g.css({zIndex: 1}), d.anim = undefined
        }, "opacity")).run(), d.anim.from = b, d.anim.to = c
    }, a.switchable.Plugins.push({name: "fade effect", init: function (a) {
        var b = a.config, c = a.panels.eq(a.index);
        if (b.effect !== "fade" || b.steps !== 1)return;
        a.panels.not(c).css({opacity: 0, zIndex: 1}), c.css({opacity: 1, zIndex: a.length})
    }})
}(jQuery), function (a) {
    var b = ["scrollleft", "scrollright", "scrollup", "scrolldown"], c = "position", d = "absolute", e = "relative";
    a.extend(a.switchable.Config, {end2end: !1, groupSize: [], visible: null, clonedCls: "switchable-cloned"});
    for (var f = 0; f < 4; f++)a.switchable.Effects[b[f]] = function (b, c, d) {
        var e = this, f = e.config, g = e.length - 1, h = d === "backward", i = f.end2end && (h && b === 0 && c === g || d === "forward" && b === g && c === 0), j = {};
        j[e.isHoriz ? "left" : "top"] = i ? e._adjustPosition(h) : -e.groupSize[e.isHoriz ? 0 : 1] * c, e.anim && e.anim.stop(), e.anim = (new a.switchable.Anim(e.panels.parent(), j, f.duration, f.easing, function () {
            i && e._resetPosition(h), e.anim = undefined
        })).run()
    };
    a.switchable.Plugins.push({name: "scroll effect", init: function (f) {
        var g = f.config, h = g.steps, i = f.panels, j = i.parent(), k = a.inArray(g.effect, b), l = k === 0 || k === 1, m = i.eq(0).outerWidth(!0), n = i.eq(0).outerHeight(!0), o = l ? 0 : 1, p = f.length - 1, q = l ? "left" : "top", r = {};
        if (k === -1)return;
        f.groupSize = [g.groupSize[0] || m * h, g.groupSize[1] || n * h];
        if (g.end2end) {
            var s = i.length, t = !l && g.groupSize[0] ? f.groupSize[o] * f.length : (l ? m : n) * s, u = s - p * h, v = (l ? m : n) * u, w = !l && g.groupSize[0] ? f.groupSize[o] : v, x;
            g.loop = !0, g.visible && g.visible < s && g.visible > u && i.slice(0, g.visible).clone(!0).addClass(g.clonedCls).appendTo(j).click(function () {
                i.eq(a(this).index() - s).click()
            }), a.extend(f, {_adjustPosition: function (a) {
                return x = a ? p : 0, r[c] = e, r[q] = (a ? -1 : 1) * t, i.slice(x * h, (x + 1) * h).css(r), a ? w : -t
            }, _resetPosition: function (a) {
                x = a ? p : 0, r[c] = "", r[q] = "", i.slice(x * h, (x + 1) * h).css(r), r[c] = undefined, r[q] = a ? -f.groupSize[o] * p : 0, j.css(r)
            }})
        }
        f.container.css(c) == "static" && f.container.css(c, e), r[c] = d, r[q] = -f.groupSize[o] * f.index, j.css(r).css("width", l ? 2 * f.groupSize[o] * f.length : g.groupSize[0] ? g.groupSize[0] : undefined), f.isHoriz = l, f.isBackward = k === 1 || k === 3
    }})
}(jQuery), function (a) {
    var b = ["accordion", "horizaccordion"], c = [
        ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom", "borderTopWidth", "borderBottomWidth"],
        ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight", "borderLeftWidth", "borderRightWidth"]
    ];
    a.extend(a.switchable.Config, {multiple: !1, customProps: {}});
    for (var d = 0; d < 2; d++)a.switchable.Effects[b[d]] = function (b, c) {
        var d = this, e = d.config, f = b !== c;
        d.anim && d.anim.stop(f), d.anim = (new a.switchable.Anim(d.panels.eq(c), d.triggers.eq(c).hasClass(e.currentTriggerCls) ? d.collapseProps : d.expandProps[c], e.duration, e.easing, function () {
            d.anim = undefined
        })).run(), !e.multiple && b !== undefined && f && (d.anim2 && d.anim2.stop(f), d.anim2 = (new a.switchable.Anim(d.panels.eq(b), d.collapseProps, e.duration, e.easing, function () {
            d.anim2 = undefined
        })).run())
    };
    a.switchable.Plugins.push({name: "accordion effect", init: function (d) {
        var e = d.config, f = a.inArray(e.effect, b);
        if (f === -1 || e.steps !== 1)return;
        window.console && console.info("Remember to set the border-width for the accordion's panels, even without border."), a.extend(d, {_triggerIsValid: function (a) {
            return!0
        }, _switchTrigger: function (a, b) {
            var c = d.triggers, f = e.currentTriggerCls;
            c.eq(b).toggleClass(f), !e.multiple && a !== undefined && a !== b && c.eq(a).removeClass(f)
        }}), d.expandProps = [], d.collapseProps = {};
        var g = c[f].length, h = {}, i, j, k;
        for (k = 0; k < g; k++)d.collapseProps[c[f][k]] = 0;
        a.extend(d.collapseProps, e.customProps);
        for (k = 0; k < d.length; k++) {
            i = d.panels.eq(k);
            for (var l = 0; l < g; l++)j = c[f][l], h[j] = i.css(j);
            d.expandProps.push(a.extend({}, h)), i.css(a.extend({overflow: "hidden"}, k === d.index ? h : d.collapseProps))
        }
    }})
}(jQuery);
;
/* Lazy Load 1.9.3 - MIT license - Copyright 2010-2013 Mika Tuupola */
(function (n, t, i, r) {
    var u = n(t);
    n.fn.lazyload = function (f) {
        function s() {
            var t = 0;
            o.each(function () {
                var i = n(this);
                if ((!e.skip_invisible || i.is(":visible")) && !n.abovethetop(this, e) && !n.leftofbegin(this, e))if (n.belowthefold(this, e) || n.rightoffold(this, e)) {
                    if (++t > e.failure_limit)return!1
                } else i.trigger("appear"), t = 0
            })
        }

        var o = this, h, e = {threshold: 0, failure_limit: 0, event: "scroll", effect: "fadeIn", container: t, data_attribute: "original", skip_invisible: !0, appear: null, load: null, placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};
        return f && (r !== f.failurelimit && (f.failure_limit = f.failurelimit, delete f.failurelimit), r !== f.effectspeed && (f.effect_speed = f.effectspeed, delete f.effectspeed), n.extend(e, f)), h = e.container === r || e.container === t ? u : n(e.container), 0 === e.event.indexOf("scroll") && h.bind(e.event, function () {
            return s()
        }), this.each(function () {
            var i = this, t = n(i);
            i.loaded = !1, (t.attr("src") === r || t.attr("src") === !1) && t.is("img") && t.attr("src", e.placeholder);
            t.one("appear", function () {
                if (!this.loaded) {
                    if (e.appear) {
                        var r = o.length;
                        e.appear.call(i, r, e)
                    }
                    n("<img />").bind("load", function () {
                        var r = t.attr("data-" + e.data_attribute), u, f;
                        r && (t.hide(), t.is("img") ? t.attr("src", r) : t.css("background-image", "url('" + r + "')"), t[e.effect](e.effect_speed), i.loaded = !0, u = n.grep(o, function (n) {
                            return!n.loaded
                        }), o = n(u), e.load && (f = o.length, e.load.call(i, f, e)))
                    }).attr("src", t.attr("data-" + e.data_attribute))
                }
            });
            0 !== e.event.indexOf("scroll") && t.bind(e.event, function () {
                i.loaded || t.trigger("appear")
            })
        }), u.bind("resize", function () {
            s()
        }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && u.bind("pageshow", function (t) {
            t.originalEvent && t.originalEvent.persisted && o.each(function () {
                n(this).trigger("appear")
            })
        }), n(i).ready(function () {
            s()
        }), this
    }, n.belowthefold = function (i, f) {
        var e;
        return(e = f.container === r || f.container === t ? (t.innerHeight ? t.innerHeight : u.height()) + u.scrollTop() : n(f.container).offset().top + n(f.container).height()) <= n(i).offset().top - f.threshold
    }, n.rightoffold = function (i, f) {
        var e;
        return(e = f.container === r || f.container === t ? u.width() + u.scrollLeft() : n(f.container).offset().left + n(f.container).width()) <= n(i).offset().left - f.threshold
    }, n.abovethetop = function (i, f) {
        var e;
        return(e = f.container === r || f.container === t ? u.scrollTop() : n(f.container).offset().top) >= n(i).offset().top + f.threshold + n(i).height()
    }, n.leftofbegin = function (i, f) {
        var e;
        return(e = f.container === r || f.container === t ? u.scrollLeft() : n(f.container).offset().left) >= n(i).offset().left + f.threshold + n(i).width()
    }, n.inviewport = function (t, i) {
        return!n.rightoffold(t, i) && !n.leftofbegin(t, i) && !n.belowthefold(t, i) && !n.abovethetop(t, i)
    }, n.extend(n.expr[":"], {"below-the-fold": function (t) {
        return n.belowthefold(t, {threshold: 0})
    }, "above-the-top": function (t) {
        return!n.belowthefold(t, {threshold: 0})
    }, "right-of-screen": function (t) {
        return n.rightoffold(t, {threshold: 0})
    }, "left-of-screen": function (t) {
        return!n.rightoffold(t, {threshold: 0})
    }, "in-viewport": function (t) {
        return n.inviewport(t, {threshold: 0})
    }, "above-the-fold": function (t) {
        return!n.belowthefold(t, {threshold: 0})
    }, "right-of-fold": function (t) {
        return n.rightoffold(t, {threshold: 0})
    }, "left-of-fold": function (t) {
        return!n.rightoffold(t, {threshold: 0})
    }})
})(jQuery, window, document);
(function (a) {
    a.fn.sidebar = function (b) {
        b = a.extend({min: 1, fadeSpeed: 200, position: "bottom", anchorOffset: 0, relative: false, relativeWidth: 960, backToTop: false, backContainer: "#backToTop", smooth: ".smooth", overlay: false, onShow: null}, b);
        return this.each(function () {
            var i = a(this), o = a.browser, c = a(window), d = a(document), g = a("body, html"), n = b.fadeSpeed, j = i.css(b.position), h = /^\d+%$/.test(j) ? parseInt(parseInt(j, 10) / 100 * c.height()) : parseInt(j), m = (c.height() + b.min >= d.height()) && !b.backToTop;
            var e = function () {
                if (!!window.ActiveXObject && !window.XMLHttpRequest) {
                    i.css({position: "absolute"});
                    if (b.position == "bottom") {
                        i.css({top: c.scrollTop() + c.height() - i.height() - h})
                    }
                    if (b.position == "top") {
                        i.css({top: c.scrollTop() + h})
                    }
                }
                if (c.scrollTop() >= b.min || m) {
                    i.fadeIn(n);
                    if (typeof(b.onShow) === "function") {
                        b.onShow()
                    }
                } else {
                    i.fadeOut(n)
                }
            };
            if (b.min == 0 || m) {
                e()
            }
            c.on("scroll.sidebar", function () {
                e()
            });
            if (b.relative) {
                var l = b.relativeWidth, f = i.width(), k = (c.width() + l) / 2;
                i.css("left", k);
                c.on("resize.sidebar scroll.sidebar", function () {
                    var p = c.width();
                    if (b.overlay) {
                        k = (p - f * 2 > l) ? ((p + l) / 2) : (p - f)
                    } else {
                        k = (p + l) / 2
                    }
                    i.css("left", k)
                })
            }
            if (b.backToTop) {
                a(b.backContainer).click(function () {
                    g.animate({scrollTop: 0}, 100);
                    return false
                })
            }
            i.find(b.smooth).click(function (p) {
                var q = a(a(this).attr("href"));
                if (a(this).attr("href").charAt(0) == "#" && q.length > 0) {
                    p.preventDefault();
                    g.animate({scrollTop: q.offset().top - b.anchorOffset}, 100)
                }
            })
        })
    }
})(jQuery);
;
(function (a) {
    var b = {min: 1, max: null, top: 0, parentSelector: "", stickyClass: "stickybox", zIndex: 999};
    a.fn.sticky = function (c) {
        c = a.extend({}, b, c);
        var d = {};
        d.updateData = function (e) {
            c = a.extend({}, c, e)
        };
        return this.each(function () {
            var g = a(this), f = a(c.parentSelector), e = a.browser, h = a(window), j = !!window.ActiveXObject && !window.XMLHttpRequest;
            g.data("stricky", d);
            function i() {
                var k = h.scrollTop();
                if ((c.max == null && k >= c.min) || (c.max != null && k >= c.min && k < c.max)) {
                    g.addClass(c.stickyClass);
                    if (!j) {
                        g.css({position: "fixed", top: c.top, "z-index": c.zIndex})
                    } else {
                        var l = f.length ? a(c.parentSelector).offset().top : 0;
                        g.css({position: "absolute", top: k + c.top - l, "z-index": c.zIndex})
                    }
                } else {
                    g.removeClass(c.stickyClass).removeAttr("style")
                }
            }

            h.on("scroll.sticky", function () {
                i()
            })
        })
    }
})(jQuery);
;
(function (d, f) {
    var h = f(d);
    var g = f(document);
    var e = f(document.body);
    var b = f(document.documentElement);
    var a = e.add(b);
    d.AA_CONFIG = d.AA_CONFIG || {};
    d.AA_CONFIG = f.extend({animationLength: 750, easingFunction: "linear", scrollOffset: 0}, d.AA_CONFIG);
    h.on("load", function () {
        c();
        g.find('a[href^="#"], a[href^="."]').on("click", function () {
            var i = f(this).attr("href");
            if (i.charAt(0) === ".") {
                i = i.split("#");
                i.shift();
                i = "#" + i.join("#")
            }
            if (i === location.hash) {
                c(i)
            }
        });
        h.on("hashchange", function () {
            c()
        });
        h.on("mousewheel DOMMouseScroll touchstart mousedown MSPointerDown", function (i) {
            a.stop(true, false)
        })
    });
    function c(i) {
        var i = i || location.hash;
        var n = i.substring(1).split("|");
        var j = n[0];
        var k = n[1] || d.AA_CONFIG.animationLength;
        if (j.charAt(0).search(/[A-Za-z]/) > -1) {
            var p = g.find("#" + j)
        }
        var o = g.find('a[name="' + j + '"]');
        if ((o && o.length) || (p && p.length)) {
            return
        }
        var l = f(j).first();
        if (l && l.length) {
            var q = l
        } else {
            return
        }
        if (q && q.length) {
            var m = q.offset().top - d.AA_CONFIG.scrollOffset;
            a.stop(true, false).animate({scrollTop: m}, parseInt(k), d.AA_CONFIG.easingFunction)
        }
    }
})(window, jQuery);
;
(function ($) {
    function Countdown() {
        this.regional = [];
        this.regional[''] = {labels: ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Minutes', 'Seconds'], labels1: ['Year', 'Month', 'Week', 'Day', 'Hour', 'Minute', 'Second'], compactLabels: ['y', 'm', 'w', 'd'], whichLabels: null, digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], timeSeparator: ':', isRTL: false};
        this._defaults = {until: null, since: null, timezone: null, serverSync: null, format: 'dHMS', layout: '', compact: false, significant: 0, description: '', expiryUrl: '', expiryText: '', alwaysExpire: false, onExpiry: null, onTick: null, tickInterval: 1};
        $.extend(this._defaults, this.regional['']);
        this._serverSyncs = [];
        var c = (typeof Date.now == 'function' ? Date.now : function () {
            return new Date().getTime()
        });
        var d = (window.performance && typeof window.performance.now == 'function');

        function timerCallBack(a) {
            var b = (a < 1e12 ? (d ? (performance.now() + performance.timing.navigationStart) : c()) : a || c());
            if (b - f >= 1000) {
                x._updateTargets();
                f = b
            }
            e(timerCallBack)
        }

        var e = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null;
        var f = 0;
        if (!e || $.noRequestAnimationFrame) {
            $.noRequestAnimationFrame = null;
            setInterval(function () {
                x._updateTargets()
            }, 980)
        } else {
            f = window.animationStartTime || window.webkitAnimationStartTime || window.mozAnimationStartTime || window.oAnimationStartTime || window.msAnimationStartTime || c();
            e(timerCallBack)
        }
    }

    var Y = 0;
    var O = 1;
    var W = 2;
    var D = 3;
    var H = 4;
    var M = 5;
    var S = 6;
    $.extend(Countdown.prototype, {markerClassName: 'hasCountdown', propertyName: 'countdown', _rtlClass: 'countdown_rtl', _sectionClass: 'countdown_section', _amountClass: 'countdown_amount', _rowClass: 'countdown_row', _holdingClass: 'countdown_holding', _showClass: 'countdown_show', _descrClass: 'countdown_descr', _timerTargets: [], setDefaults: function (a) {
        this._resetExtraLabels(this._defaults, a);
        $.extend(this._defaults, a || {})
    }, UTCDate: function (a, b, c, e, f, g, h, i) {
        if (typeof b == 'object' && b.constructor == Date) {
            i = b.getMilliseconds();
            h = b.getSeconds();
            g = b.getMinutes();
            f = b.getHours();
            e = b.getDate();
            c = b.getMonth();
            b = b.getFullYear()
        }
        var d = new Date();
        d.setUTCFullYear(b);
        d.setUTCDate(1);
        d.setUTCMonth(c || 0);
        d.setUTCDate(e || 1);
        d.setUTCHours(f || 0);
        d.setUTCMinutes((g || 0) - (Math.abs(a) < 30 ? a * 60 : a));
        d.setUTCSeconds(h || 0);
        d.setUTCMilliseconds(i || 0);
        return d
    }, periodsToSeconds: function (a) {
        return a[0] * 31557600 + a[1] * 2629800 + a[2] * 604800 + a[3] * 86400 + a[4] * 3600 + a[5] * 60 + a[6]
    }, _attachPlugin: function (a, b) {
        a = $(a);
        if (a.hasClass(this.markerClassName)) {
            return
        }
        var c = {options: $.extend({}, this._defaults), _periods: [0, 0, 0, 0, 0, 0, 0]};
        a.addClass(this.markerClassName).data(this.propertyName, c);
        this._optionPlugin(a, b)
    }, _addTarget: function (a) {
        if (!this._hasTarget(a)) {
            this._timerTargets.push(a)
        }
    }, _hasTarget: function (a) {
        return($.inArray(a, this._timerTargets) > -1)
    }, _removeTarget: function (b) {
        this._timerTargets = $.map(this._timerTargets, function (a) {
            return(a == b ? null : a)
        })
    }, _updateTargets: function () {
        for (var i = this._timerTargets.length - 1; i >= 0; i--) {
            this._updateCountdown(this._timerTargets[i])
        }
    }, _optionPlugin: function (a, b, c) {
        a = $(a);
        var d = a.data(this.propertyName);
        if (!b || (typeof b == 'string' && c == null)) {
            var e = b;
            b = (d || {}).options;
            return(b && e ? b[e] : b)
        }
        if (!a.hasClass(this.markerClassName)) {
            return
        }
        b = b || {};
        if (typeof b == 'string') {
            var e = b;
            b = {};
            b[e] = c
        }
        if (b.layout) {
            b.layout = b.layout.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
        }
        this._resetExtraLabels(d.options, b);
        var f = (d.options.timezone != b.timezone);
        $.extend(d.options, b);
        this._adjustSettings(a, d, b.until != null || b.since != null || f);
        var g = new Date();
        if ((d._since && d._since < g) || (d._until && d._until > g)) {
            this._addTarget(a[0])
        }
        this._updateCountdown(a, d)
    }, _updateCountdown: function (a, b) {
        var c = $(a);
        b = b || c.data(this.propertyName);
        if (!b) {
            return
        }
        c.html(this._generateHTML(b)).toggleClass(this._rtlClass, b.options.isRTL);
        if ($.isFunction(b.options.onTick)) {
            var d = b._hold != 'lap' ? b._periods : this._calculatePeriods(b, b._show, b.options.significant, new Date());
            if (b.options.tickInterval == 1 || this.periodsToSeconds(d) % b.options.tickInterval == 0) {
                b.options.onTick.apply(a, [d])
            }
        }
        var e = b._hold != 'pause' && (b._since ? b._now.getTime() < b._since.getTime() : b._now.getTime() >= b._until.getTime());
        if (e && !b._expiring) {
            b._expiring = true;
            if (this._hasTarget(a) || b.options.alwaysExpire) {
                this._removeTarget(a);
                if ($.isFunction(b.options.onExpiry)) {
                    b.options.onExpiry.apply(a, [])
                }
                if (b.options.expiryText) {
                    var f = b.options.layout;
                    b.options.layout = b.options.expiryText;
                    this._updateCountdown(a, b);
                    b.options.layout = f
                }
                if (b.options.expiryUrl) {
                    window.location = b.options.expiryUrl
                }
            }
            b._expiring = false
        } else if (b._hold == 'pause') {
            this._removeTarget(a)
        }
        c.data(this.propertyName, b)
    }, _resetExtraLabels: function (a, b) {
        var c = false;
        for (var n in b) {
            if (n != 'whichLabels' && n.match(/[Ll]abels/)) {
                c = true;
                break
            }
        }
        if (c) {
            for (var n in a) {
                if (n.match(/[Ll]abels[02-9]|compactLabels1/)) {
                    a[n] = null
                }
            }
        }
    }, _adjustSettings: function (a, b, c) {
        var d;
        var e = 0;
        var f = null;
        for (var i = 0; i < this._serverSyncs.length; i++) {
            if (this._serverSyncs[i][0] == b.options.serverSync) {
                f = this._serverSyncs[i][1];
                break
            }
        }
        if (f != null) {
            e = (b.options.serverSync ? f : 0);
            d = new Date()
        } else {
            var g = ($.isFunction(b.options.serverSync) ? b.options.serverSync.apply(a, []) : null);
            d = new Date();
            e = (g ? d.getTime() - g.getTime() : 0);
            this._serverSyncs.push([b.options.serverSync, e])
        }
        var h = b.options.timezone;
        h = (h == null ? -d.getTimezoneOffset() : h);
        if (c || (!c && b._until == null && b._since == null)) {
            b._since = b.options.since;
            if (b._since != null) {
                b._since = this.UTCDate(h, this._determineTime(b._since, null));
                if (b._since && e) {
                    b._since.setMilliseconds(b._since.getMilliseconds() + e)
                }
            }
            b._until = this.UTCDate(h, this._determineTime(b.options.until, d));
            if (e) {
                b._until.setMilliseconds(b._until.getMilliseconds() + e)
            }
        }
        b._show = this._determineShow(b)
    }, _destroyPlugin: function (a) {
        a = $(a);
        if (!a.hasClass(this.markerClassName)) {
            return
        }
        this._removeTarget(a[0]);
        a.removeClass(this.markerClassName).empty().removeData(this.propertyName)
    }, _pausePlugin: function (a) {
        this._hold(a, 'pause')
    }, _lapPlugin: function (a) {
        this._hold(a, 'lap')
    }, _resumePlugin: function (a) {
        this._hold(a, null)
    }, _hold: function (a, b) {
        var c = $.data(a, this.propertyName);
        if (c) {
            if (c._hold == 'pause' && !b) {
                c._periods = c._savePeriods;
                var d = (c._since ? '-' : '+');
                c[c._since ? '_since' : '_until'] = this._determineTime(d + c._periods[0] + 'y' + d + c._periods[1] + 'o' + d + c._periods[2] + 'w' + d + c._periods[3] + 'd' + d + c._periods[4] + 'h' + d + c._periods[5] + 'm' + d + c._periods[6] + 's');
                this._addTarget(a)
            }
            c._hold = b;
            c._savePeriods = (b == 'pause' ? c._periods : null);
            $.data(a, this.propertyName, c);
            this._updateCountdown(a, c)
        }
    }, _getTimesPlugin: function (a) {
        var b = $.data(a, this.propertyName);
        return(!b ? null : (b._hold == 'pause' ? b._savePeriods : (!b._hold ? b._periods : this._calculatePeriods(b, b._show, b.options.significant, new Date()))))
    }, _determineTime: function (k, l) {
        var m = function (a) {
            var b = new Date();
            b.setTime(b.getTime() + a * 1000);
            return b
        };
        var n = function (a) {
            a = a.toLowerCase();
            var b = new Date();
            var c = b.getFullYear();
            var d = b.getMonth();
            var e = b.getDate();
            var f = b.getHours();
            var g = b.getMinutes();
            var h = b.getSeconds();
            var i = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g;
            var j = i.exec(a);
            while (j) {
                switch (j[2] || 's') {
                    case's':
                        h += parseInt(j[1], 10);
                        break;
                    case'm':
                        g += parseInt(j[1], 10);
                        break;
                    case'h':
                        f += parseInt(j[1], 10);
                        break;
                    case'd':
                        e += parseInt(j[1], 10);
                        break;
                    case'w':
                        e += parseInt(j[1], 10) * 7;
                        break;
                    case'o':
                        d += parseInt(j[1], 10);
                        e = Math.min(e, x._getDaysInMonth(c, d));
                        break;
                    case'y':
                        c += parseInt(j[1], 10);
                        e = Math.min(e, x._getDaysInMonth(c, d));
                        break
                }
                j = i.exec(a)
            }
            return new Date(c, d, e, f, g, h, 0)
        };
        var o = (k == null ? l : (typeof k == 'string' ? n(k) : (typeof k == 'number' ? m(k) : k)));
        if (o)o.setMilliseconds(0);
        return o
    }, _getDaysInMonth: function (a, b) {
        return 32 - new Date(a, b, 32).getDate()
    }, _normalLabels: function (a) {
        return a
    }, _generateHTML: function (c) {
        var d = this;
        c._periods = (c._hold ? c._periods : this._calculatePeriods(c, c._show, c.options.significant, new Date()));
        var e = false;
        var f = 0;
        var g = c.options.significant;
        var h = $.extend({}, c._show);
        for (var i = Y; i <= S; i++) {
            e |= (c._show[i] == '?' && c._periods[i] > 0);
            h[i] = (c._show[i] == '?' && !e ? null : c._show[i]);
            f += (h[i] ? 1 : 0);
            g -= (c._periods[i] > 0 ? 1 : 0)
        }
        var j = [false, false, false, false, false, false, false];
        for (var i = S; i >= Y; i--) {
            if (c._show[i]) {
                if (c._periods[i]) {
                    j[i] = true
                } else {
                    j[i] = g > 0;
                    g--
                }
            }
        }
        var k = (c.options.compact ? c.options.compactLabels : c.options.labels);
        var l = c.options.whichLabels || this._normalLabels;
        var m = function (a) {
            var b = c.options['compactLabels' + l(c._periods[a])];
            return(h[a] ? d._translateDigits(c, c._periods[a]) + (b ? b[a] : k[a]) + ' ' : '')
        };
        var n = function (a) {
            var b = c.options['labels' + l(c._periods[a])];
            return((!c.options.significant && h[a]) || (c.options.significant && j[a]) ? '<span class="' + x._sectionClass + '">' + '<span class="' + x._amountClass + '">' + d._translateDigits(c, c._periods[a]) + '</span><br/>' + (b ? b[a] : k[a]) + '</span>' : '')
        };
        return(c.options.layout ? this._buildLayout(c, h, c.options.layout, c.options.compact, c.options.significant, j) : ((c.options.compact ? '<span class="' + this._rowClass + ' ' + this._amountClass + (c._hold ? ' ' + this._holdingClass : '') + '">' + m(Y) + m(O) + m(W) + m(D) + (h[H] ? this._minDigits(c, c._periods[H], 2) : '') + (h[M] ? (h[H] ? c.options.timeSeparator : '') + this._minDigits(c, c._periods[M], 2) : '') + (h[S] ? (h[H] || h[M] ? c.options.timeSeparator : '') + this._minDigits(c, c._periods[S], 2) : '') : '<span class="' + this._rowClass + ' ' + this._showClass + (c.options.significant || f) + (c._hold ? ' ' + this._holdingClass : '') + '">' + n(Y) + n(O) + n(W) + n(D) + n(H) + n(M) + n(S)) + '</span>' + (c.options.description ? '<span class="' + this._rowClass + ' ' + this._descrClass + '">' + c.options.description + '</span>' : '')))
    }, _buildLayout: function (c, d, e, f, g, h) {
        var j = c.options[f ? 'compactLabels' : 'labels'];
        var k = c.options.whichLabels || this._normalLabels;
        var l = function (a) {
            return(c.options[(f ? 'compactLabels' : 'labels') + k(c._periods[a])] || j)[a]
        };
        var m = function (a, b) {
            return c.options.digits[Math.floor(a / b) % 10]
        };
        var o = {desc: c.options.description, sep: c.options.timeSeparator, yl: l(Y), yn: this._minDigits(c, c._periods[Y], 1), ynn: this._minDigits(c, c._periods[Y], 2), ynnn: this._minDigits(c, c._periods[Y], 3), y1: m(c._periods[Y], 1), y10: m(c._periods[Y], 10), y100: m(c._periods[Y], 100), y1000: m(c._periods[Y], 1000), ol: l(O), on: this._minDigits(c, c._periods[O], 1), onn: this._minDigits(c, c._periods[O], 2), onnn: this._minDigits(c, c._periods[O], 3), o1: m(c._periods[O], 1), o10: m(c._periods[O], 10), o100: m(c._periods[O], 100), o1000: m(c._periods[O], 1000), wl: l(W), wn: this._minDigits(c, c._periods[W], 1), wnn: this._minDigits(c, c._periods[W], 2), wnnn: this._minDigits(c, c._periods[W], 3), w1: m(c._periods[W], 1), w10: m(c._periods[W], 10), w100: m(c._periods[W], 100), w1000: m(c._periods[W], 1000), dl: l(D), dn: this._minDigits(c, c._periods[D], 1), dnn: this._minDigits(c, c._periods[D], 2), dnnn: this._minDigits(c, c._periods[D], 3), d1: m(c._periods[D], 1), d10: m(c._periods[D], 10), d100: m(c._periods[D], 100), d1000: m(c._periods[D], 1000), hl: l(H), hn: this._minDigits(c, c._periods[H], 1), hnn: this._minDigits(c, c._periods[H], 2), hnnn: this._minDigits(c, c._periods[H], 3), h1: m(c._periods[H], 1), h10: m(c._periods[H], 10), h100: m(c._periods[H], 100), h1000: m(c._periods[H], 1000), ml: l(M), mn: this._minDigits(c, c._periods[M], 1), mnn: this._minDigits(c, c._periods[M], 2), mnnn: this._minDigits(c, c._periods[M], 3), m1: m(c._periods[M], 1), m10: m(c._periods[M], 10), m100: m(c._periods[M], 100), m1000: m(c._periods[M], 1000), sl: l(S), sn: this._minDigits(c, c._periods[S], 1), snn: this._minDigits(c, c._periods[S], 2), snnn: this._minDigits(c, c._periods[S], 3), s1: m(c._periods[S], 1), s10: m(c._periods[S], 10), s100: m(c._periods[S], 100), s1000: m(c._periods[S], 1000)};
        var p = e;
        for (var i = Y; i <= S; i++) {
            var q = 'yowdhms'.charAt(i);
            var r = new RegExp('\\{' + q + '<\\}([\\s\\S]*)\\{' + q + '>\\}', 'g');
            p = p.replace(r, ((!g && d[i]) || (g && h[i]) ? '$1' : ''))
        }
        $.each(o, function (n, v) {
            var a = new RegExp('\\{' + n + '\\}', 'g');
            p = p.replace(a, v)
        });
        return p
    }, _minDigits: function (a, b, c) {
        b = '' + b;
        if (b.length >= c) {
            return this._translateDigits(a, b)
        }
        b = '0000000000' + b;
        return this._translateDigits(a, b.substr(b.length - c))
    }, _translateDigits: function (b, c) {
        return('' + c).replace(/[0-9]/g, function (a) {
            return b.options.digits[a]
        })
    }, _determineShow: function (a) {
        var b = a.options.format;
        var c = [];
        c[Y] = (b.match('y') ? '?' : (b.match('Y') ? '!' : null));
        c[O] = (b.match('o') ? '?' : (b.match('O') ? '!' : null));
        c[W] = (b.match('w') ? '?' : (b.match('W') ? '!' : null));
        c[D] = (b.match('d') ? '?' : (b.match('D') ? '!' : null));
        c[H] = (b.match('h') ? '?' : (b.match('H') ? '!' : null));
        c[M] = (b.match('m') ? '?' : (b.match('M') ? '!' : null));
        c[S] = (b.match('s') ? '?' : (b.match('S') ? '!' : null));
        return c
    }, _calculatePeriods: function (c, d, e, f) {
        c._now = f;
        c._now.setMilliseconds(0);
        var g = new Date(c._now.getTime());
        if (c._since) {
            if (f.getTime() < c._since.getTime()) {
                c._now = f = g
            } else {
                f = c._since
            }
        } else {
            g.setTime(c._until.getTime());
            if (f.getTime() > c._until.getTime()) {
                c._now = f = g
            }
        }
        var h = [0, 0, 0, 0, 0, 0, 0];
        if (d[Y] || d[O]) {
            var i = x._getDaysInMonth(f.getFullYear(), f.getMonth());
            var j = x._getDaysInMonth(g.getFullYear(), g.getMonth());
            var k = (g.getDate() == f.getDate() || (g.getDate() >= Math.min(i, j) && f.getDate() >= Math.min(i, j)));
            var l = function (a) {
                return(a.getHours() * 60 + a.getMinutes()) * 60 + a.getSeconds()
            };
            var m = Math.max(0, (g.getFullYear() - f.getFullYear()) * 12 + g.getMonth() - f.getMonth() + ((g.getDate() < f.getDate() && !k) || (k && l(g) < l(f)) ? -1 : 0));
            h[Y] = (d[Y] ? Math.floor(m / 12) : 0);
            h[O] = (d[O] ? m - h[Y] * 12 : 0);
            f = new Date(f.getTime());
            var n = (f.getDate() == i);
            var o = x._getDaysInMonth(f.getFullYear() + h[Y], f.getMonth() + h[O]);
            if (f.getDate() > o) {
                f.setDate(o)
            }
            f.setFullYear(f.getFullYear() + h[Y]);
            f.setMonth(f.getMonth() + h[O]);
            if (n) {
                f.setDate(o)
            }
        }
        var p = Math.floor((g.getTime() - f.getTime()) / 1000);
        var q = function (a, b) {
            h[a] = (d[a] ? Math.floor(p / b) : 0);
            p -= h[a] * b
        };
        q(W, 604800);
        q(D, 86400);
        q(H, 3600);
        q(M, 60);
        q(S, 1);
        if (p > 0 && !c._since) {
            var r = [1, 12, 4.3482, 7, 24, 60, 60];
            var s = S;
            var t = 1;
            for (var u = S; u >= Y; u--) {
                if (d[u]) {
                    if (h[s] >= t) {
                        h[s] = 0;
                        p = 1
                    }
                    if (p > 0) {
                        h[u]++;
                        p = 0;
                        s = u;
                        t = 1
                    }
                }
                t *= r[u]
            }
        }
        if (e) {
            for (var u = Y; u <= S; u++) {
                if (e && h[u]) {
                    e--
                } else if (!e) {
                    h[u] = 0
                }
            }
        }
        return h
    }});
    var w = ['getTimes'];

    function isNotChained(a, b) {
        if (a == 'option' && (b.length == 0 || (b.length == 1 && typeof b[0] == 'string'))) {
            return true
        }
        return $.inArray(a, w) > -1
    }

    $.fn.countdown = function (a) {
        var b = Array.prototype.slice.call(arguments, 1);
        if (isNotChained(a, b)) {
            return x['_' + a + 'Plugin'].apply(x, [this[0]].concat(b))
        }
        return this.each(function () {
            if (typeof a == 'string') {
                if (!x['_' + a + 'Plugin']) {
                    throw'Unknown command: ' + a;
                }
                x['_' + a + 'Plugin'].apply(x, [this].concat(b))
            } else {
                x._attachPlugin(this, a || {})
            }
        })
    };
    var x = $.countdown = new Countdown()
})(jQuery);
;
(function ($) {
    $.countdown.regional['zh-CN'] = {labels: ['年', '月', '周', '天', '时', '分', '秒'], labels1: ['年', '月', '周', '天', '时', '分', '秒'], compactLabels: ['年', '月', '周', '天'], compactLabels1: ['年', '月', '周', '天'], whichLabels: null, digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], timeSeparator: ':', isRTL: false};
    $.countdown.setDefaults($.countdown.regional['zh-CN']);
})(jQuery);
;
(function (a) {
    a.fn.sharebutton = function (b) {
        b = a.extend({url: document.location, title: document.title, summary: "", site: "", desc: "", pic: "", popup: true, width: 610, height: 500}, b);
        return this.each(function () {
            var i = a(this);
            var f = encodeURIComponent(b.site);
            var g = b.width;
            var c = b.height;

            function h(k, j) {
                k.attr({target: "_blank", href: j})
            }

            function d(m, k, j, l) {
                if (b.popup) {
                    var j = j || g;
                    var l = l || c;
                    window.open(k, f, "width=" + j + ",height=" + l + ", top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no")
                } else {
                    h(m, k)
                }
            }

            function e(j) {
                return{url: encodeURIComponent(j.data("url") || b.url), title: encodeURIComponent(j.data("title") || b.title), summary: encodeURIComponent(j.data("summary") || b.summary), desc: encodeURIComponent(j.data("desc") || b.desc), pic: encodeURIComponent(j.data("pic") || b.pic)}
            }

            i.on("click", ".fs-qzone", function () {
                var k = a(this);
                var j = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + e(k).url + "&title=" + e(k).title + "&summary=" + e(k).summary + "&desc=" + e(k).desc + "&pics=" + e(k).pic + "&site=" + f;
                d(a(this), j)
            });
            i.on("click", ".fs-tsina", function () {
                var k = a(this);
                var j = "http://service.weibo.com/share/share.php?title=" + e(k).desc + "&url=" + e(k).url + "&source=" + f + "&pic=" + e(k).pic + "&appkey=1321169129";
                d(a(this), j)
            });
            i.on("click", ".fs-tqq", function () {
                var k = a(this);
                var j = "http://share.v.t.qq.com/index.php?c=share&a=index&title=" + e(k).desc + "&url=" + e(k).url + "&site=" + f + "&pic=" + e(k).pic;
                d(a(this), j)
            });
            i.on("click", ".fs-renren", function () {
                var k = a(this);
                var j = "http://widget.renren.com/dialog/share?resourceUrl=" + e(k).url + "&srcUrl=" + e(k).url + "&title=" + e(k).title + "&description=" + e(k).desc + "&pic=" + e(k).pic;
                d(a(this), j)
            });
            i.on("click", ".fs-douban", function () {
                var k = a(this);
                var j = "http://shuo.douban.com/!service/share?href=" + e(k).url + "&name=" + e(k).title + "&text=" + e(k).desc;
                d(a(this), j)
            });
            i.on("click", ".fs-qq", function () {
                var k = a(this);
                var j = "http://connect.qq.com/widget/shareqq/index.html?url=" + e(k).url + "&title=" + e(k).title + "&desc=" + e(k).desc + "&pics=" + e(k).pic + "&summary=" + e(k).summary;
                d(a(this), j, 750, 620)
            });
            i.on("click", ".fs-qqmail", function () {
                var k = a(this);
                var j = "http://mail.qq.com/cgi-bin/qm_share?url=" + e(k).url + "&title=" + e(k).title + "&desc=" + e(k).desc + "&summary=" + e(k).summary + "&pics=" + e(k).pic + "&to=qqmail";
                h(a(this), j)
            });
            i.on("click", ".fs-gmail", function () {
                var k = a(this);
                var j = "https://mail.google.com/mail/?view=cm&su=" + e(k).title + "&body=" + e(k).desc + "%20" + e(k).url;
                h(a(this), j)
            });
            i.on("click", ".fs-163mail", function () {
                var k = a(this);
                var j = "http://mail.163.com/share/share2friend.htm#" + decodeURIComponent(e(k).desc) + "^^" + decodeURIComponent(e(k).pic) + "^^" + decodeURIComponent(e(k).url);
                h(a(this), j)
            })
        })
    }
})(jQuery);
;
(function (a) {
    a.tools = a.tools || {version: "v1.2.6"};
    var b;
    b = a.tools.expose = {conf: {maskId: "exposeMask", loadSpeed: "slow", bgiframe: false, closeSpeed: "fast", closeOnClick: !0, closeOnEsc: !0, zIndex: 9998, opacity: .6, startOpacity: 0, color: "#000", onLoad: null, onClose: null}};
    function c() {
        if (a.browser.msie) {
            var b = a(document).height(), c = a(window).height();
            return[window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, b - c < 20 ? c : b]
        }
        return[a(document).width(), a(document).height()]
    }

    function d(b) {
        if (b)return b.call(a.mask)
    }

    var e, f, g, h, i;
    a.mask = {load: function (j, k) {
        if (g)return this;
        typeof j == "string" && (j = {color: j}), j = j || h, h = j = a.extend(a.extend({}, b.conf), j), e = a("#" + j.maskId), e.length || (e = a("<div/>").attr("id", j.maskId), a("body").append(e));
        var l = c();
        e.css({position: "absolute", top: 0, left: 0, width: l[0], height: l[1], display: "none", zIndex: j.zIndex});
        if (d(j.onBeforeLoad) === !1)return this;
        if (j.bgiframe && a.fn.bgiframe)e.bgiframe();
        j.closeOnEsc && a(document).bind("keydown.mask", function (b) {
            b.keyCode == 27 && a.mask.close(b)
        }), j.closeOnClick && e.bind("click.mask", function (b) {
            a.mask.close(b)
        }), a(window).bind("resize.mask scroll.mask", function () {
            a.mask.fit()
        }), k && k.length && (i = k.eq(0).css("zIndex"), a.each(k, function () {
            var b = a(this);
            /relative|absolute|fixed/i.test(b.css("position")) || b.css("position", "relative")
        }), f = k.css({zIndex: Math.max(j.zIndex + 1, i == "auto" ? 0 : i)})), setTimeout(function () {
            //e.css({display: "block"}), a.mask.fit(), d(j.onLoad), g = "full"
        }, j.loadSpeed - 20), g = !0;
        return this
    }, close: function () {
        if (g) {
            if (d(h.onBeforeClose) === !1)return this;
            e.fadeOut(h.closeSpeed, function () {
                d(h.onClose), f && f.css({zIndex: i}), g = !1
            }), a(document).unbind("keydown.mask"), e.unbind("click.mask"), a(window).unbind("resize.mask")
        }
        return this
    }, fit: function () {
        if (g) {
            var a = c();
            e.css({width: a[0], height: a[1]})
        }
    }, getMask: function () {
        return e
    }, isLoaded: function (a) {
        return a ? g == "full" : g
    }, getConf: function () {
        return h
    }, getExposed: function () {
        return f
    }}, a.fn.mask = function (b) {
        a.mask.load(b);
        return this
    }, a.fn.expose = function (b) {
        a.mask.load(b, this);
        return this
    }
})(jQuery);
;
(function (c) {
    c.tools = c.tools || {version: "@VERSION"};
    c.tools.overlay = {addEffect: function (e, f, g) {
        b[e] = [f, g]
    }, conf: {close: null, closeOnClick: false, closeOnEsc: false, closeSpeed: "fast", effect: "default", fixed: !c.browser.msie || c.browser.version > 6, left: "center", load: false, mask: "#000", oneInstance: true, speed: "fast", target: null, top: "10%"}};
    var d = [], b = {};
    c.tools.overlay.addEffect("default", function (i, h) {
        var g = this.getConf(), e = c(window), f = this.getOverlay();
        if (g.fixed && f.height() + i.top < e.height()) {
            i.position = "fixed"
        } else {
            i.top += e.scrollTop();
            i.left += e.scrollLeft();
            i.position = "absolute"
        }
        f.css(i).fadeIn(g.speed, h)
    }, function (e) {
        this.getOverlay().fadeOut(this.getConf().closeSpeed, e)
    });
    function a(h, m) {
        var o = this, f = h.add(o), n = c(window), k, j, i, e = c.tools.expose && (m.mask || m.expose), l = Math.random().toString().slice(10);
        if (e) {
            if (typeof e == "string") {
                e = {color: e}
            }
            e.closeOnClick = e.closeOnEsc = false
        }
        var g = m.target || h.attr("rel");
        j = g ? c(g) : null || h;
        if (!j.length) {
            throw"Could not find Overlay: " + g
        }
        if (h && h.index(j) == -1) {
            h.click(function (p) {
                o.load(p);
                return p.preventDefault()
            })
        }
        c.extend(o, {load: function (v) {
            var q, w;
            if (o.isOpened()) {
                return o
            }
            var s = b[m.effect];
            if (!s) {
                throw'Overlay: cannot find effect : "' + m.effect + '"'
            }
            if (m.oneInstance) {
                c.each(d, function () {
                    this.close(v)
                })
            }
            q = o.getOverlay();
            w = q.find("img[data-original]");
            if (w.length) {
                w.each(function () {
                    var x = c(this), y = x.attr("data-original");
                    x.attr("src", y).removeAttr("data-original")
                })
            }
            v = v || c.Event();
            v.type = "onBeforeLoad";
            f.trigger(v);
            if (v.isDefaultPrevented()) {
                return o
            }
            i = true;
            if (e) {
                c(j).expose(e)
            }
            var u = m.top, t = m.left, p = j.outerWidth(true), r = j.outerHeight(true);
            if (typeof u == "string") {
                u = u == "center" ? Math.max((n.height() - r) / 2, 0) : parseInt(u, 10) / 100 * n.height()
            }
            if (t == "center") {
                t = Math.max((n.width() - p) / 2, 0)
            }
            s[0].call(o, {top: u, left: t}, function () {
                if (i) {
                    v.type = "onLoad";
                    f.trigger(v)
                }
            });
            if (e && m.closeOnClick) {
                c.mask.getMask().one("click", o.close)
            }
            if (m.closeOnClick) {
                c(document).on("click." + l, function (x) {
                    if (!c(x.target).parents(j).length) {
                        o.close(x)
                    }
                })
            }
            if (m.closeOnEsc) {
                c(document).on("keydown." + l, function (x) {
                    if (x.keyCode == 27) {
                        o.close(x)
                    }
                })
            }
            return o
        }, close: function (p) {
            if (!o.isOpened()) {
                return o
            }
            p = p || c.Event();
            p.type = "onBeforeClose";
            f.trigger(p);
            if (p.isDefaultPrevented()) {
                return
            }
            i = false;
            b[m.effect][1].call(o, function () {
                p.type = "onClose";
                f.trigger(p)
            });
            c(document).off("click." + l + " keydown." + l);
            if (e) {
                c.mask.close()
            }
            return o
        }, getOverlay: function () {
            return j
        }, getTrigger: function () {
            return h
        }, getClosers: function () {
            return k
        }, isOpened: function () {
            return i
        }, getConf: function () {
            return m
        }});
        n.on("resize", function () {
            var p = o.getOverlay();
            p.css("left", (n.width() - p.width()) / 2 + "px")
        });
        c.each("onBeforeLoad,onStart,onLoad,onBeforeClose,onClose".split(","), function (q, p) {
            if (c.isFunction(m[p])) {
                c(o).on(p, m[p])
            }
            o[p] = function (r) {
                if (r) {
                    c(o).on(p, r)
                }
                return o
            }
        });
        colsersSelector = m.close || ".close";
        k = j.find(colsersSelector);
        if (!k.length && !m.close) {
            k = c('<a class="close"></a>');
            j.prepend(k)
        }
        j.on("click", colsersSelector, function (p) {
            o.close(p)
        });
        if (m.load) {
            o.load()
        }
    }

    c.fn.overlay = function (e) {
        var f = this.data("overlay");
        if (f) {
            return f
        }
        if (c.isFunction(e)) {
            e = {onBeforeLoad: e}
        }
        e = c.extend(true, {}, c.tools.overlay.conf, e);
        this.each(function () {
            f = new a(c(this), e);
            d.push(f);
            c(this).data("overlay", f)
        });
        return e.api ? f : this
    }
})(jQuery);
;
(function (a) {
    a.tools = a.tools || {version: "v1.2.6"}, a.tools.tooltip = {conf: {effect: "toggle", fadeOutSpeed: "fast", predelay: 0, delay: 100, opacity: 1, tip: 0, fadeIE: !1, position: ["top", "center"], offset: [0, 0], relative: !1, cancelDefault: !0, events: {def: "mouseenter,mouseleave", input: "focus,blur", widget: "focus mouseenter,blur mouseleave", tooltip: "mouseenter,mouseleave"}, layout: "<div/>", tipClass: "tooltip"}, addEffect: function (a, c, d) {
        b[a] = [c, d]
    }};
    var b = {toggle: [function (a) {
        var b = this.getConf(), c = this.getTip(), d = b.opacity;
        d < 1 && c.css({opacity: d}), c.show(), a.call()
    }, function (a) {
        this.getTip().hide(), a.call()
    }], fade: [function (b) {
        var c = this.getConf();
        !a.browser.msie || c.fadeIE ? this.getTip().fadeTo(c.fadeInSpeed, c.opacity, b) : (this.getTip().show(), b())
    }, function (b) {
        var c = this.getConf();
        !a.browser.msie || c.fadeIE ? this.getTip().fadeOut(c.fadeOutSpeed, b) : (this.getTip().hide(), b())
    }]};

    function c(b, c, d) {
        var e = d.relative ? b.position().top : b.offset().top, f = d.relative ? b.position().left : b.offset().left, g = d.position[0];
        e -= c.outerHeight() - d.offset[0], f += b.outerWidth() + d.offset[1], /iPad/i.test(navigator.userAgent) && (e -= a(window).scrollTop());
        var h = c.outerHeight() + b.outerHeight();
        g == "center" && (e += h / 2), g == "bottom" && (e += h), g = d.position[1];
        var i = c.outerWidth() + b.outerWidth();
        g == "center" && (f -= i / 2), g == "left" && (f -= i);
        return{top: e, left: f}
    }

    function d(d, e) {
        var f = this, g = d.add(f), h, i = 0, j = 0, k = d.attr("title"), l = d.attr("data-tooltip"), m = b[e.effect], n, o = d.is(":input"), p = o && d.is(":checkbox, :radio, select, :button, :submit"), q = d.attr("type"), r = e.events[q] || e.events[o ? p ? "widget" : "input" : "def"];
        if (!m)throw"Nonexistent effect \"" + e.effect + "\"";
        r = r.split(/,\s*/);
        if (r.length != 2)throw"Tooltip: bad events configuration for " + q;
        d.bind(r[0], function (a) {
            clearTimeout(i), e.predelay ? j = setTimeout(function () {
                f.show(a)
            }, e.predelay) : f.show(a)
        }).bind(r[1], function (a) {
            clearTimeout(j), e.delay ? i = setTimeout(function () {
                f.hide(a)
            }, e.delay) : f.hide(a)
        }), k && e.cancelDefault && (d.removeAttr("title"), d.data("title", k)), a.extend(f, {show: function (b) {
            if (!h) {
                l ? h = a(l) : e.tip ? h = a(e.tip).eq(0) : k ? h = a(e.layout).addClass(e.tipClass).appendTo(document.body).hide().append(k) : (h = d.next(), h.length || (h = d.parent().next()));
                if (!h.length)throw"Cannot find tooltip for " + d
            }
            if (f.isShown())return f;
            h.stop(!0, !0);
            var o = c(d, h, e);
            e.tip && h.html(d.data("title")), b = a.Event(), b.type = "onBeforeShow", g.trigger(b, [o]);
            if (b.isDefaultPrevented())return f;
            o = c(d, h, e), h.css({position: "absolute", top: o.top, left: o.left}), n = !0, m[0].call(f, function () {
                b.type = "onShow", n = "full", g.trigger(b)
            });
            var p = e.events.tooltip.split(/,\s*/);
            h.data("__set") || (h.unbind(p[0]).bind(p[0], function () {
                clearTimeout(i), clearTimeout(j)
            }), p[1] && !d.is("input:not(:checkbox, :radio), textarea") && h.unbind(p[1]).bind(p[1], function (a) {
                a.relatedTarget != d[0] && d.trigger(r[1].split(" ")[0])
            }), e.tip || h.data("__set", !0));
            return f
        }, hide: function (c) {
            if (!h || !f.isShown())return f;
            c = a.Event(), c.type = "onBeforeHide", g.trigger(c);
            if (!c.isDefaultPrevented()) {
                n = !1, b[e.effect][1].call(f, function () {
                    c.type = "onHide", g.trigger(c)
                });
                return f
            }
        }, isShown: function (a) {
            return a ? n == "full" : n
        }, getConf: function () {
            return e
        }, getTip: function () {
            return h
        }, getTrigger: function () {
            return d
        }}), a.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","), function (b, c) {
            a.isFunction(e[c]) && a(f).bind(c, e[c]), f[c] = function (b) {
                b && a(f).bind(c, b);
                return f
            }
        })
    }

    a.fn.tooltip = function (b) {
        var c = this.data("tooltip");
        if (c)return c;
        b = a.extend(!0, {}, a.tools.tooltip.conf, b), typeof b.position == "string" && (b.position = b.position.split(/,?\s/)), this.each(function () {
            c = new d(a(this), b), a(this).data("tooltip", c)
        });
        return b.api ? c : this
    }
})(jQuery);
(function (a) {
    var b = a.tools.tooltip;
    b.dynamic = {conf: {classNames: "top right bottom left"}};
    function c(b) {
        var c = a(window), d = c.width() + c.scrollLeft(), e = c.height() + c.scrollTop();
        return[b.offset().top <= c.scrollTop(), d <= b.offset().left + b.width(), e <= b.offset().top + b.height(), c.scrollLeft() >= b.offset().left]
    }

    function d(a) {
        var b = a.length;
        while (b--)if (a[b])return!1;
        return!0
    }

    a.fn.dynamic = function (e) {
        typeof e == "number" && (e = {speed: e}), e = a.extend({}, b.dynamic.conf, e);
        var f = a.extend(!0, {}, e), g = e.classNames.split(/\s/), h;
        this.each(function () {
            var b = a(this).tooltip().onBeforeShow(function (b, e) {
                var i = this.getTip(), j = this.getConf();
                h || (h = [j.position[0], j.position[1], j.offset[0], j.offset[1], a.extend({}, j)]), a.extend(j, h[4]), j.position = [h[0], h[1]], j.offset = [h[2], h[3]], i.css({visibility: "hidden", position: "absolute", top: e.top, left: e.left}).show();
                var k = a.extend(!0, {}, f), l = c(i);
                if (!d(l)) {
                    l[2] && (a.extend(j, k.top), j.position[0] = "top", i.addClass(g[0])), l[3] && (a.extend(j, k.right), j.position[1] = "right", i.addClass(g[1])), l[0] && (a.extend(j, k.bottom), j.position[0] = "bottom", i.addClass(g[2])), l[1] && (a.extend(j, k.left), j.position[1] = "left", i.addClass(g[3]));
                    if (l[0] || l[2])j.offset[0] *= -1;
                    if (l[1] || l[3])j.offset[1] *= -1
                }
                i.css({visibility: "visible"}).hide()
            });
            b.onBeforeShow(function () {
                var a = this.getConf(), b = this.getTip();
                setTimeout(function () {
                    a.position = [h[0], h[1]], a.offset = [h[2], h[3]]
                }, 0)
            }), b.onHide(function () {
                var a = this.getTip();
                a.removeClass(e.classNames)
            }), ret = b
        });
        return e.api ? ret : this
    }
})(jQuery);
(function (a) {
    var b = a.tools.tooltip;
    a.extend(b.conf, {direction: "up", bounce: !1, slideOffset: 10, slideInSpeed: 200, slideOutSpeed: 200, slideFade: !a.browser.msie});
    var c = {up: ["-", "top"], down: ["+", "top"], left: ["-", "left"], right: ["+", "left"]};
    b.addEffect("slide", function (a) {
        var b = this.getConf(), d = this.getTip(), e = b.slideFade ? {opacity: b.opacity} : {}, f = c[b.direction] || c.up;
        e[f[1]] = f[0] + "=" + b.slideOffset, b.slideFade && d.css({opacity: 0}), d.show().animate(e, b.slideInSpeed, a)
    }, function (b) {
        var d = this.getConf(), e = d.slideOffset, f = d.slideFade ? {opacity: 0} : {}, g = c[d.direction] || c.up, h = "" + g[0];
        d.bounce && (h = h == "+" ? "-" : "+"), f[g[1]] = h + "=" + e, this.getTip().animate(f, d.slideOutSpeed, function () {
            a(this).hide(), b.call()
        })
    })
})(jQuery);
;
(function ($) {
    function rebuildMarkCode(adid) {
        var markCodeCookie = "markcode";
        var markCodeValue = "markcode".getCookie();
        var execArr = /^([^\.]+)\.([^\.]+)\.([^\.]+)\.([^\.]+)$/gi.exec(markCodeValue);
        if (!markCodeValue || !execArr) {
            markCodeCookie.setCookie("0.0.{0}.1".format(adid), 0, quanmama.Utility.rootDomain, "/")
        } else {
            markCodeCookie.setCookie("{0}.{1}.{2}.{3}".format(execArr[1], execArr[2], adid, $.isNumeric(execArr[4]) ? parseInt(execArr[4]) + 1 : 1, 0), 0, quanmama.Utility.rootDomain, "/")
        }
    }

    $.fanliAdTrack = {viewEvent: function (id) {
        if (typeof id != "undefined") {
            UBT.track("event", "view", "id", id)
        }
    }, clickEvent: function (id) {
        if (typeof id != "undefined") {
            UBT.track("event", "click", "id", id);
            rebuildMarkCode(id)
        }
    }};
    $.fn.adtracker = function (settings) {
        settings = $.extend({clickQuery: ".fa-link", viewQuery: ".fa-img"}, settings);
        return this.each(function () {
            var $this = $(this);
            $this.on("click", settings.viewQuery, function () {
                var $this = $(this);
                var id = $this.closest(settings.clickQuery).data("id") || $this.data("id");
                $.fanliAdTrack.clickEvent(id)
            });
            $this.find(settings.viewQuery).each(function () {
                var $this = $(this);
                var id = $this.closest(settings.clickQuery).data("id") || $this.data("id");
                $.fanliAdTrack.viewEvent(id)
            })
        })
    };
    $.fn.adloader = function (settings) {
        settings = $.extend({name: null, type: null, href: true, div: false, width: null, height: null, onReady: null, onLoad: null, onError: null}, settings);
        return this.each(function () {
            var $this = $(this);
            var prefix = "//event.quanmama.com/proxy.php?key=";
            var adName = settings.name || $this.data("name");
            var adType = settings.type || $this.data("type");
            var adWidth = settings.width || $this.data("width");
            var adHeight = settings.height || $this.data("height");
            var adHref = settings.href;
            var adDiv = settings.div;
            var adUrl = prefix + adName + "&stamp=" + parseInt((new Date).getTime() / 3e5);

            function renderList(json) {
                var html = [];
                var len = json.length;
                for (i = 0; i < len; i++) {
                    var it = json[i];
                    var href = it.link;
                    var chkHref = adHref && it.link != "";
                    if (it.file != "") {
                        if (chkHref) {
                            html.push('<a href="', href, '" data-id="', it.id, '" class="fa-link J_spm_fa_link" target="_blank" rel="nofollow">')
                        } else if (adDiv) {
                            html.push('<div class="fa-link" data-id="', it.id, '">')
                        }
                        html.push('<img src="', it.file, '"');
                        if (adWidth && adHeight) {
                            html.push(' width="', adWidth, '" height="', adHeight, '"')
                        }
                        html.push(' alt="', it.name, '" class="fa-img" />')
                    } else {
                        if (chkHref) {
                            html.push('<a href="', href, '" data-id="', it.id, '" class="fa-text J_spm_fa_link" target="_blank" rel="nofollow">')
                        } else if (adDiv) {
                            html.push('<div class="fa-link" data-id="', it.id, '">')
                        }
                        html.push(it.name)
                    }
                    if (chkHref) {
                        html.push("</a>")
                    } else if (adDiv) {
                        html.push("</div>")
                    }
                    $.fanliAdTrack.viewEvent(it.id)
                }
                html = html.join("");
                $this.append(html)
            }

            function renderRandom(json) {
                var html = [];
                var len = json.length;
                var i = Math.ceil(Math.random() * len);
                var it = json[i - 1];
                var chkHref = adHref && it.link != "";
                var href = it.link;
                if (chkHref) {
                    html.push('<a href="', href, '" data-id="', it.id, '" class="fa-link J_spm_fa_link" target="_blank" rel="nofollow">')
                } else if (adDiv) {
                    html.push('<div class="fa-link" data-id="', it.id, '">')
                }
                html.push('<img src="', it.file, '"');
                if (adWidth && adHeight) {
                    html.push(' width="', adWidth, '" height="', adHeight, '"')
                }
                html.push(' alt="', it.name, '" class="fa-img" />');
                if (chkHref) {
                    html.push("</a>")
                } else if (adDiv) {
                    html.push("</div>")
                }
                $.fanliAdTrack.viewEvent(it.id);
                html = html.join("");
                $this.append(html)
            }

            function build() {
                var json = [];
                try {
                    eval("json = " + adName + "Json;");
                    if (json.length > 0) {
                        if (adType == "random") {
                            renderRandom(json)
                        } else {
                            renderList(json)
                        }
                        if (settings.onReady != null) {
                            settings.onReady()
                        }
                        if (settings.onLoad != null) {
                            $this.find("img:last").load(function () {
                                settings.onLoad()
                            })
                        }
                    } else {
                        $this.hide();
                        if (settings.onError != null) {
                            settings.onError()
                        }
                    }
                } catch (e) {
                    if (window.console) {
                        console.warn("Hosts error(event.quanmama.com)??")
                    }
                }
            }

            if (window.head) {
                head.js(adUrl, function () {
                    build()
                })
            } else {
                $.ajax({url: adUrl, dataType: "script", cache: true, success: function () {
                    build()
                }})
            }
        })
    };
    $(window).on("load", function () {
        $(".J-adtracker, .J_adtracker").adtracker();
        $(".J_spm_fa_link").on("click", function () {
            var id = $(this).data("id");
            if (id) {
                UBT.track("event", "click", "id", id);
                rebuildMarkCode(id)
            }
        })
    })
})(typeof jQuery != "undefined" ? jQuery : window.Zepto);
;
//(function ($) {
//    var defaults = {sInputSelector: "#search-field", apiUrl: "http://fun.quanmama.com/api/search/searchshop", selectedClass: "ui-state-hover", sHiddenSelector: "#J_url", dUrlHiddenSelector: "#J_durl"};
//    $.extend({flSearch: function (options) {
//        var settings = $.extend(true, {}, defaults, options);
//        var $sInput = $(settings.sInputSelector);
//        var $form = $sInput.closest("form");
//        var $vh = $(settings.sHiddenSelector);
//        var $durlh = $(settings.dUrlHiddenSelector);
//        var currentMenuItem = {};
//        var isSelectedRedirect = 0;
//        var $taobaoTips = $("<div class='hp_taobao_71_tips' style='width:{0}px;' id='J_taobao_71_tips'>淘宝/天猫宝贝不能使用链接搜索！请复制宝贝标题进行搜索！</div>".format($sInput.outerWidth(true) - 30 - 2));
//        var $erOverlay;
//        var filterKey = $sInput.data("yyg_keyword");
//        var filterArray = filterKey ? filterKey.split(",") : [];
//        var oTbS8Pop = {$tbOverlay: null, searchFlag: false, searchCoVal: '11669', searchCoName: 'header-tbs8pop'};
//        bindBehavior();
//        function bindBehavior() {
//            quanmama.Utility.requirejs(['overlay', 'expose'], function () {
//                bindTbS8Pop();
//            });
//            if ($.fn.placeholder) {
//                $sInput.placeholder({type: 'label', klass: 'search-placeholder'});
//            }
//            $sInput.on("input.autocomplete", function () {
//                currentMenuItem = {};
//                $sInput.trigger('keydown.autocomplete');
//            }).autocomplete({source: function (request, response) {
//                var painVal = $.trim(request.term);
//                if (!painVal) {
//                    $(".ui-autocomplete").hide();
//                    $("#J_taobao_71_tips").hide();
//                    return;
//                }
//                if (/(taobao|tmall){1}\.com/g.test(painVal)) {
//                    if ($("#J_taobao_71_tips").length == 0) {
//                        $taobaoTips.appendTo($sInput.parent());
//                    } else {
//                        $("#J_taobao_71_tips").show();
//                    }
//                    $(".ui-autocomplete").hide();
//                    return;
//                } else {
//                    $("#J_taobao_71_tips").hide();
//                }
//                sourceSetting(request, response, painVal);
//            }, select: function (event, ui) {
//                selectSetting(event, ui);
//                return false;
//            }, focus: function (event, ui) {
//                focusSetting(event, ui);
//                return false;
//            }, position: {offset: "-2 1"}, appendTo: "#suggestmenu", minLength: 1, autoSubmitViaEnter: 1}).data("autocomplete")._renderItem = function (ul, item) {
//                return renderItem(ul, item);
//            };
//            $sInput.on("click", function (ev) {
//                var kc = ev.keyCode;
//                if (kc && (kc == 38 || kc == 40)) {
//                    return;
//                }
//                currentMenuItem = {};
//                $sInput.data("autocomplete")._search($sInput.val());
//            });
//            $form.on("submit", submitHandler);
//            $("#suggestmenu").delegate(".{0}".format(settings.selectedClass), "mousedown", function (event) {
//                isSelectedRedirect = 1;
//            });
//        }
//
//        function buildErOverlay() {
//            if (!$.tools.overlay) {
//                return false;
//            }
//            var erHtml = new StringBuilder();
//            erHtml.append('<div class="popover">').append('    <div class="pop-header"><h3 class="pop-title">返利网温馨提示</h3><a href="javascript:void(0);" class="close">&times;</a></div>').append('    <div><img src="../images/er.png" alt="" /></div>').append('</div>');
//            $erOverlay = $(erHtml.toString()).appendTo("body").overlay({top: "20%", api: true, fixed: false, onLoad: function () {
//                UBT.track("top_serach_er_open", "pc", "wd-{0}".format($.trim($sInput.val())));
//            }, onClose: function () {
//                UBT.track("top_serach_er_close", "pc", "wd-{0}".format($.trim($sInput.val())));
//            }});
//            $erOverlay.load();
//        }
//
//        function bindTbS8Pop() {
//            if (!$.tools.overlay) {
//                return false;
//            }
//            var aHtml = [];
//            aHtml.push('<div id="tb-s8-tips" class="yahei popover common-tb-popover" style="display:none;">');
//            aHtml.push('<div class="pop-header"><h3 class="pop-title">返利网温馨提示</h3><a href="javascript:void(0);" class="close">&times;</a></div>');
//            aHtml.push('<div class="pop-content">');
//            aHtml.push('<p class="tbpop-h2">亲~您将跳到<span style="color:#e22c37;">爱淘宝</span>~</p>');
//            aHtml.push('<p class="tbpop-h3">淘宝返利升级了！搜索结果都有返利哦~</p>');
//            aHtml.push('<p class="tb-pop-btndiv"><a href="javascript:void(0);" class="tb-pop-btn J_tb_pop_confirm">确定</a> <label><input type="checkbox" class="confirm-tb-nopop"/>不再提示</label></p>');
//            aHtml.push('</div>');
//            aHtml.push('</div>');
//            var $popTbTips = $(aHtml.join('')).appendTo('body');
//            oTbS8Pop.$tbOverlay = $popTbTips.overlay({top: '20%', onLoad: function () {
//                var $overlay = this.getOverlay();
//                $overlay.find("img.lazy").trigger("appear");
//            }, api: true});
//            $popTbTips.find('.J_tb_pop_confirm').click(function (ev) {
//                ev.preventDefault();
//                if ($(".confirm-tb-nopop").eq(0).prop("checked")) {
//                    oTbS8Pop.searchCoName.setCookie(oTbS8Pop.searchCoVal, 365, quanmama.Utility.rootDomain, '/');
//                } else {
//                    oTbS8Pop.searchFlag = true;
//                }
//                oTbS8Pop.$tbOverlay.close();
//                $form.submit();
//            });
//            $popTbTips.find('.close').click(function (ev) {
//                ev.preventDefault();
//                oTbS8Pop.searchFlag = true;
//                oTbS8Pop.$tbOverlay.close();
//                $form.submit();
//            });
//        }
//
//        function sourceSetting(request, response, searchValue) {
//            $.getCacheJSONP(settings.apiUrl + '?jsoncallback=?', {'keywords': searchValue}, function (result) {
//                response(buildSearchResult(result, searchValue));
//            });
//        }
//
//        function focusSetting(event, ui) {
//            var item = ui.item;
//            if (item.idx > 0) {
//                $("#suggestmenu li a:eq(0)").removeClass(settings.selectedClass);
//            }
//        }
//
//        function selectSetting(event, ui) {
//            var item = ui.item;
//            currentMenuItem = item;
//            $sInput.val(item.val);
//            $vh.val(item.url);
//            if (isSelectedRedirect == 1) {
//                isSelectedRedirect = 0;
//                $form.trigger("submit");
//            }
//        }
//
//        function renderItem(ul, item) {
//            var sb = new StringBuilder();
//            var $li = !item.isadvise ? $("<li class='stitleli'></li>") : $("<li class='sitemli'></li>");
//            var $a = $("<a href='javascript:void(0);'></a>");
//            if (item.hasspace) {
//                $a.addClass("sitem");
//            }
//            if (item.idx == 0) {
//                $a.addClass(settings.selectedClass);
//            }
//            sb.append(item.benefit ? "<span class='hasfl'>{0}</span>".format(item.benefit) : "").append(item.icon ? "<span style='_float:left;vertical-align:middle;margin:-2px 4px 0 0;_margin-top:8px;display:inline-block;width:16px;height:16px;background: transparent url({0}) no-repeat 0 0 scroll;'></span>".format(item.icon) : "").append(item.text);
//            return $li.data("item.autocomplete", item).append($a.html(sb.toString())).appendTo(ul.addClass('search-suggest'));
//        }
//
//        function submitHandler(ev) {
//            var ival = $.trim($sInput.val());
//            var sval = currentMenuItem.val || ival;
//            var coVal = oTbS8Pop.searchCoName.getCookie();
//            if (filterArray && $.inArray(ival, filterArray) > -1) {
//                if ($erOverlay) {
//                    $erOverlay.load();
//                } else {
//                    buildErOverlay();
//                }
//                return false;
//            }
//            if (!ival && $sInput.attr("placeholder") == "天猫双11红包抢先领") {
//                window.location.href = "http://zt.quanmama.com/zt/tmall_pc_151019";
//                return false;
//            }
//            if (!ival || ival == $sInput.attr("placeholder")) {
//                return false;
//            }
//            if (oTbS8Pop.$tbOverlay && currentMenuItem.type == 'taobao' && coVal != oTbS8Pop.searchCoVal) {
//                if (!oTbS8Pop.searchFlag) {
//                    oTbS8Pop.$tbOverlay.load();
//                    return false;
//                } else {
//                    oTbS8Pop.searchFlag = false;
//                }
//            }
//            UBT.track("global", "pc", "wd-{0}".format(ival));
//            $vh.val(currentMenuItem.url ? currentMenuItem.url : "");
//        }
//
//        function buildSearchResult(result, sval) {
//            var sb = new StringBuilder();
//            var data = result.data;
//            var len;
//            var temObj;
//            var temDataItem;
//            if (!result.status || data.length == 0) {
//                currentMenuItem = {};
//                return sb.strings;
//            }
//            len = data.length;
//            for (var i = 0; i <= len - 1; ++i) {
//                temObj = {};
//                temDataItem = data[i];
//                temObj.idx = (function () {
//                    return i;
//                })();
//                temObj.id = temDataItem.id;
//                temObj.url = temDataItem.url;
//                temObj.text = temDataItem.name;
//                temObj.val = temDataItem.val;
//                temObj.type = temDataItem.stype;
//                temObj.icon = temDataItem.icon;
//                temObj.benefit = temDataItem.benefit;
//                temObj.isadvise = temDataItem.isadvise;
//                temObj.hasspace = temDataItem.hasspace;
//                sb.append(temObj);
//            }
//            currentMenuItem = sb.strings[0];
//            return sb.strings;
//        }
//    }});
//    $.extend($.flSearch, {defaults: defaults});
//})(jQuery);
//;
//(function ($) {
//    var $topbar = $('#topbar');
//    window.prouserid = 'prouserid'.getCookie();
//    window.prousername = 'prousernameutf'.getCookie(), window.lngmsgcnt = 'lngmsgcnt'.getCookie();
//    // filesystem:http://fun.51fanli.com/temporary/igbjmhit/1446081560885.json
//    window.topbarGetInfo = $.getJSON('json.json', function (json) {
//        var data = json.data;
//        var usercookie = data.usercookie || "";
//        var redirectCookie = 'sign618_redirect';
//        if (prouserid > 0 && redirectCookie.getCookie() != 1 && data.sign618 == 1) {
//            redirectCookie.setCookie('1', ((24 - new Date().getHours()) / 24), quanmama.Utility.rootDomain, '/');
//            window.location.href = 'http://huodong.quanmama.com/sign618?from=20150611tz';
//        }
//        if (data.kefu) {
//            $topbar.data({'kfStatus': data.kefu.kf, 'telStatus': data.kefu.tel});
//        }
//        if (data.crm_mvp) {
//            $topbar.data({'hasCrmMvp': data.crm_mvp});
//        }
//        if (data.timestamp) {
//            $topbar.data({'timestamp': data.timestamp});
//        }
//        if (data.userinfo) {
//            $topbar.data({'bindEmail': data.userinfo.mail_validated, 'lv': data.userinfo.lv || 0});
//        }
//        if ($.isPlainObject(usercookie)) {
//            for (var k in usercookie) {
//                if (usercookie[k]) {
//                    if (!k.getCookie()) {
//                        k.setCookie(usercookie[k], 30, quanmama.Utility.rootDomain, "/");
//                    }
//                }
//            }
//            window.prouserid = 'prouserid'.getCookie();
//            window.prousername = 'prousernameutf'.getCookie();
//            quanmama.Utility.isLogin = "prouserid".getCookie() > 0;
//        }
//    }).done(topbarWrite);
//    window.utmtOps = $.getJSON("http://fun.quanmama.com/topheader/ajaxGetMvpStorys?jsoncallback=?", function (res) {
//        var data = res.data;
//        if (data.story_ids) {
//            $topbar.data({'betatest': data.story_ids});
//        }
//    });
//    function topbarWrite() {
//        var username = decodeURIComponent(decodeURIComponent(prousername));
//        $quickinfo = $('#J_topbar_quick_info'), $chklogin = $('#J_topbar_chklogin'), $menucs = $('#J_topbar_cs_btn'), isShowMsg = $topbar.data("closemsg") != 1, lv = $topbar.data("lv");
//        if (prouserid > 0) {
//            var newS = new StringBuilder();
//            newS.append('<div class="topbar-nav J-topbar-nav">').append('<div class="clearfix menu-hd menu-hd-name"><a class="l menu-name ellipsis" href="{1}/center/welcome" title={0}>{0}</a>'.format(username, passportAppUrl));
//            if (parseInt(lv) && lv > 0) {
//                newS.append('<a href="{2}/center/vip" class="l menu-lv"><img src="" alt="等级{1}" width="16" height="16"></a>'.format(lv, lv, passportAppUrl));
//            }
//            newS.append('<i class="arrow"></i></div>').append('<div class="menu-bd menu-user">').append('<em class="arrow"></em>').append('<dl>').append('<dd><a href="{0}/center/orders">我的订单</a></dd>'.format(passportAppUrl)).append('<dd><a href="{0}/center/deposit">我的返利</a></dd>'.format(passportAppUrl)).append('<dd><a href="http://quan{0}/membercenter/buyer/boughtcoupon/index">我的优惠券</a></dd>'.format(quanmama.Utility.rootDomain)).append('<dd><a href="{0}/center/safeuser/safecenter" rel="nofollow">账户设置</a></dd>'.format(passportAppUrl)).append('<dd class="last"><a href="{0}/logout" rel="nofollow">退出</a></dd>'.format(passportAppUrl)).append('</dl>').append('</div>').append('</div>').append('<div id="J_topbar_msg" class="topbar-msg clearfix"><a href="{0}/center/message"><i>消息</i><p class="msg-p"><span class="msg-span"><em>0</em></span></p></a></div>'.format(passportAppUrl));
//            $chklogin.html(newS.toString());
//            if (GeneralValidation.isIe6()) {
//                var $username = $chklogin.find('.menuname');
//                var csswidth = 80;
//                if ($username.width() > csswidth) {
//                    $username.width(csswidth);
//                }
//            }
//            ;
//            if (!lngmsgcnt) {
//                if (isShowMsg) {
//                    $.getJSON('{0}/client/user/getUserMessage?jsoncallback=?'.format(passportAppUrl), function (data) {
//                        if (data.status == 1) {
//                            lngmsgcnt = data.data;
//                            'lngmsgcnt'.setCookie(lngmsgcnt, '0.001', quanmama.Utility.rootDomain, '/');
//                        }
//                        else {
//                            lngmsgcnt = 0;
//                        }
//                        chkmsg(lngmsgcnt);
//                    });
//                }
//                else {
//                    $('#J_topbar_msg').find('.msg-span').remove();
//                }
//            }
//            else {
//                chkmsg(lngmsgcnt);
//            }
//            var crmMvp = $topbar.data('hasCrmMvp') || '';
//            if (crmMvp) {
//                var html = '<div class="topbar-shopvip"><a href="' + crmMvp + 'topbar" class="three">恭喜您获得8%的额外返利资格！</a><i></i></div>';
//                $('#J_topbar_msg').append(html);
//            }
//        }
//        else {
//            var url = encodeURIComponent(document.URL);
//            var nwsb = new StringBuilder();
//            nwsb.append('<div class="topbar-nav J-topbar-nav">').append('<div class="menu-hd"><a href="{0}/login?go_url={1}" rel="nofollow">马上登录</a><i class="arrow"></i></div>'.format(passportAppUrl, url)).append('<div class="menu-bd menu-login">').append('<em class="arrow"></em>').append('<dl>').append('<dd><a href="{0}/login?go_url={1}" rel="nofollow">返利登录</a></dd>'.format(passportAppUrl, url)).append('<dd><a href="{0}/oauth/jumpToUnion/type/taobao/ab/1/cooklogin/1" rel="nofollow">淘宝登录</a></dd>'.format(passportAppUrl)).append('<dd><a href="{0}/oauth/jumpToUnion/type/qq/ab/1/cooklogin/1" rel="nofollow">QQ登录</a></dd>'.format(passportAppUrl)).append('<dd><a href="{0}/oauth/jumpToUnion/type/sina/ab/1/cooklogin/1" rel="nofollow">新浪登录</a></dd>'.format(passportAppUrl)).append('<dd><a href="{0}/oauth/jumpToUnion/type/wechat/ab/1/cooklogin/1" rel="nofollow">微信登录</a></dd>'.format(passportAppUrl)).append('</dl>').append('</div>').append('</div>').append('<div class="topbar-reg"><a target="_blank" href="{1}/reg?action=yes&go_url={0}" rel="nofollow">免费注册</a></div>'.format(url, passportAppUrl));
//            $chklogin.html(nwsb.toString());
//        }
//        $quickinfo.show();
//    }
//
//    function chkmsg(lngmsgcnt) {
//        var $topUserMsg = $('#J_topbar_msg').find('a'), $userMsg = $('.usermsg'), html = '', title = '', klass = '', len = lngmsgcnt.toString().length;
//        if (lngmsgcnt == 0) {
//            title = '\u60a8\u6ca1\u6709\u65b0\u7684\u7ad9\u5185\u4fe1\uff01';
//            $topUserMsg.attr('title', title).addClass('e0');
//            $userMsg.closest('.usermsg-box').hide();
//        } else {
//            if (len == 1) {
//                html = '<em class="e2">' + lngmsgcnt + '</em>';
//                klass = 'e2';
//            } else if (len == 2) {
//                html = '<em class="e3">' + lngmsgcnt + '</em>';
//                klass = 'e3';
//            } else {
//                html = '<em class="e3">...</em>';
//                klass = 'e3';
//            }
//            title = '\u60a8\u8fd8\u6709' + lngmsgcnt + '\u5c01\u65b0\u7684\u7ad9\u5185\u4fe1\u672a\u67e5\u770b\uff01';
//            $topUserMsg.attr('title', title).find('span').prepend(html);
//            setTimeout(function () {
//                $topUserMsg.addClass(klass);
//                $topUserMsg.find('span').animate({'margin-top': '0'}, function () {
//                    $topUserMsg.find('em').eq(1).remove();
//                });
//            }, 500);
//            $userMsg.text(lngmsgcnt).closest('.usermsg-box').show();
//        }
//    }
//})(jQuery);
$(function () {
    var $topbar = $('#topbar');
    $topbar.on('mouseenter', '.J-topbar-nav', function () {
        var $this = $(this);
        $this.addClass('topbar-nav-hover');
        menuImgLazy();
    }).on('mouseleave', '.J-topbar-nav', function () {
        var $this = $(this);
        $this.removeClass('topbar-nav-hover');
    });
    $(document).on('click', '.btn-cs', function () {
        open53kf();
    });
    $('div.message').on('click', '.close', function () {
        $(this).parent().remove();
    });
    if ($.fn.adloader && $('#J-fa-topbar').length > 0) {
        $('#J-fa-topbar').adloader();
    }
    else {
        $('#J-fa-topbar').remove();
    }
    function menuImgLazy() {
        var $menuImgLazy = $('.J-menu-img-lazy');
        $menuImgLazy.each(function () {
            var $this = $(this);
            if ($this.data('original') != $this.attr('src')) {
                $this.attr('src', $this.data('original'))
            }
        });
    }
});
//$(function () {
//    var ajaxUrl = "{0}/Client/User/isNewbieGiftAvailable".format(passportAppUrl);
//    var logUrl = "{0}/Client/User/ajaxOpenGift".format(passportAppUrl);
//    var overlaySelector = "J-guys-popover";
//    var showAwardCookie = "51fanli_new_guys_8112";
//    var giveupCookieName = "cngflp_8112";
//    var openedCookieName = "cngflp_redb";
//    var docHref = document.location.href;
//    'prouserid'.getCookie() > 0 && init();
//    function init() {
//        $("body").append('<div id="{0}" class="popover popover-awards" style="display:none;"></div>'.format(overlaySelector));
//        buildOverlay();
//        bindLiveEvents();
//    }
//
//    function buildOverlay(reopen) {
//        if (showAwardCookie.getCookie() == "8112" && giveupCookieName.getCookie() != "1") {
//            $.ajax({url: reopen ? "{0}?status=1&location={1}".format(ajaxUrl, encodeURIComponent(docHref)) : "{0}?location={1}".format(ajaxUrl, encodeURIComponent(docHref)), dataType: "JSONP", jsonp: "jsoncallback", success: function (JSON) {
//                if (JSON.status == "1" || JSON.status == "3") {
//                    var $overlay = $("#{0}".format(overlaySelector));
//                    $overlay.append(JSON.data).find('#J_alipay_input').magnifier().placeholder();
//                    $overlay.overlay({fixed: false, closeOnClick: false, closeOnEsc: false, speed: 200, top: "12%", fixed: false, onClose: function () {
//                        setTimeout(function () {
//                            var $popGuide = $('#pop-guide');
//                            if ($popGuide.data('overlay') && !'home-guide'.getCookie()) {
//                                $popGuide.data('overlay').load();
//                            }
//                        }, 250);
//                        openedCookieName.setCookie("0", 1, quanmama.Utility.rootDomain, "/");
//                    }}).data("overlay").load();
//                    setTimeout(function () {
//                        bindDynamicEvents();
//                    }, 25);
//                }
//                else if (JSON.status == "4" || JSON.status == "5") {
//                    var $overlay = $("#{0}".format(overlaySelector));
//                    if (JSON.status == "5") {
//                        $overlay.addClass('popover-mvpapp9184');
//                        setTimeout(function () {
//                            $('#newbie-app-qrcode').adloader();
//                        }, 20)
//                    }
//                    $overlay.append(JSON.data);
//                    $overlay.overlay({fixed: false, closeOnClick: false, closeOnEsc: false, speed: 200, top: "12%", fixed: false, onClose: function () {
//                        openedCookieName.setCookie("0", 1, quanmama.Utility.rootDomain, "/");
//                    }}).data("overlay").load();
//                }
//                else if (JSON.status == "8") {
//                    var $overlay = $("#{0}".format(overlaySelector));
//                    $overlay.addClass('popover-nb10605');
//                    $overlay.append(JSON.data);
//                    $overlay.overlay({fixed: false, closeOnClick: false, closeOnEsc: false, speed: 200, top: "20%", fixed: false, onClose: function () {
//                        openedCookieName.setCookie("0", 1, quanmama.Utility.rootDomain, "/");
//                    }});
//                    setTimeout(function () {
//                        verc();
//                        $overlay.data("overlay").load();
//                        bindPop10605Event();
//                    }, 25);
//                }
//                else if (JSON.status == "7") {
//                    var $overlay = $("#{0}".format(overlaySelector));
//                    $overlay.addClass('popover-awards-9534').append(JSON.data).find('#J_alipay_input').magnifier().placeholder();
//                    $overlay.overlay({fixed: false, closeOnClick: false, closeOnEsc: false, speed: 200, top: "12%", fixed: false, onClose: function () {
//                        setTimeout(function () {
//                            var $popGuide = $('#pop-guide');
//                            if ($popGuide.data('overlay') && !'home-guide'.getCookie()) {
//                                $popGuide.data('overlay').load();
//                            }
//                        }, 250);
//                        openedCookieName.setCookie("0", 1, quanmama.Utility.rootDomain, "/");
//                    }}).data("overlay").load();
//                    setTimeout(function () {
//                        bindDynamicEvents(true);
//                    }, 25);
//                }
//                else if (JSON.status == 2 && $.fn.sidebar) {
//                    $("body").append(JSON.data);
//                    $(function () {
//                        var $btmpop = $('#J_newbie_btmpop');
//                        var $btmpopCon = $btmpop.find('.J_expand_con');
//                        var $btmpopOpen = $btmpop.find('.J_expand_newbie');
//                        var $btmpopClose = $("#J_newbie_btmpop_close");
//                        var $btmpopClick = $("#J_newbie_btmpop_click");
//                        var isAnimate = false;
//                        $btmpop.sidebar({min: 0, bottom: 0, relative: false});
//                        $btmpopOpen.click(function () {
//                            if (!isAnimate) {
//                                isAnimate = true;
//                                $btmpopCon.show();
//                                $btmpop.css({width: '703px'});
//                                $btmpopCon.animate({width: '596px'}, 500, function () {
//                                    $btmpop.addClass('newbie-btmpop-expand');
//                                    isAnimate = false;
//                                });
//                            }
//                        })
//                        $btmpopClose.click(function () {
//                            if (!isAnimate) {
//                                isAnimate = true;
//                                $btmpopCon.animate({width: 0}, 500, function () {
//                                    $btmpop.removeClass('newbie-btmpop-expand');
//                                    $btmpopCon.hide();
//                                    isAnimate = false;
//                                });
//                            }
//                        });
//                        $btmpopClick.click(function () {
//                            $btmpop.removeClass('newbie-btmpop-expand');
//                            $btmpopCon.hide();
//                        });
//                    });
//                }
//            }});
//        }
//    }
//
//    function bindPop10605Event() {
//        var $form = $('#J_pop10605form');
//        var $int = $form.find('.J_pop10605_nullv');
//        var $submit = $form.find('.J_submit');
//        var $result = $('#J_pop10605result');
//        var $resultJfbAcc = $result.find('.J_jfb_count');
//        $('#newbie-app-qrcode').adloader();
//        $int.inputNullValidation({triggerFocusEvent: false});
//        $submit.submitWithValidation({postUrl: "{0}/Client/User/ajaxRegistNewbeiInfo2?jsoncallback=?".format(passportAppUrl), postDataNameSelector: '.J_pop10605_tov', mustFillSelector: ".J_pop10605_nullv", isJsonpFormat: true, onSubmitSuccess: function () {
//            $form.hide();
//            $resultJfbAcc.text(this.data);
//            $result.show();
//        }});
//    }
//
//    function bindLiveEvents() {
//        var $doc = $(document);
//        var xhr;
//        $doc.on("click", "#J_envelope_open", function () {
//            if (xhr) {
//                xhr.abort();
//            }
//            xhr = $.ajax({url: logUrl, dataType: "JSONP", jsonp: "jsoncallback", success: function (result) {
//                if (result.status == 1) {
//                    $(".J_jfb_count").text(result.data);
//                    $("#J_awards_first_row").hide();
//                    $("#J_awards_second_row").show();
//                }
//            }});
//            return false;
//        });
//    }
//
//    function bindDynamicEvents(secondRowChangeW) {
//        var $inputAlipay = $('#J_alipay_input');
//        var $inputContact = $('#J_contact_input');
//        var $inputAlipayTip = $('#J_alipay_input_tip');
//        var $sbGet = $("#J_sb_get");
//        var mvp = $sbGet.data('mvp') == 1 ? true : false;
//        $(".nullv").inputNullValidation();
//        $sbGet.submitWithValidation({postUrl: "{0}/Client/User/ajaxRegistNewbeiInfo?jsoncallback=?".format(passportAppUrl), isJsonpFormat: true, onSubmitSuccess: function () {
//            if (mvp) {
//                $(".J_jfb_count").text(this.data);
//                $("#J_awards_first_row").hide();
//                if (typeof secondRowChangeW != 'undefined' && secondRowChangeW) {
//                    $("#{0}".format(overlaySelector)).css({'width': 550, 'margin-top': 50});
//                    $(window).trigger('resize');
//                }
//                $("#J_awards_second_row").show();
//            } else {
//                $("#J_push_get_msg_row").remove();
//                $("#J_awards_second_row").hide();
//                $("#J_awards_fourth_row").show();
//            }
//        }, onSubmitError: function () {
//            verc();
//        }});
//        $inputAlipay.blur(function () {
//            var vAli = $.trim($inputAlipay.val());
//            if (InputValidation.isEmail(vAli)) {
//                $inputContact.val('').attr({'placeholder': '请填写您的手机号', 'data-type': 'cellphone'}).placeholder();
//            } else {
//                var val = $inputContact.data('val');
//                if (val) {
//                    $inputContact.val(val);
//                }
//                $inputContact.attr({'placeholder': '请填写您的常用邮箱', 'data-type': 'mail'}).placeholder();
//            }
//        });
//        if ($inputAlipayTip.length > 0) {
//            $inputAlipay.on('blur.hidetip', function () {
//                $inputAlipayTip.hide();
//            });
//            $inputAlipay.on('focus.showtip', function () {
//                $inputAlipayTip.show();
//            });
//        }
//    }
//
//    function verc() {
//        setTimeout(function () {
//            $("#codeimg").attr("src", verifyCodeImageUrl + (new Date()).getTime());
//        }, 25);
//        return false;
//    }
//
//    window.verc = verc;
//});
//(function () {
//    "use strict";
//    var $window = $(window);
//    var contentUrl = "{0}/magicbar/user/customService?jsoncallback=?".format(passportAppUrl);
//    var jsUrl = "customservice.js";
//    var v = parseInt(new Date().getTime() / 300000);
//    var csInstance;
//    var triggerOffsetOriginal;
//    var postData = {};
//    $(document).on("click", ".J-mbar-mod-cs-show", function (ev) {
//        ev.preventDefault();
//        var $this = $(this);
//        triggerOffsetOriginal = $this.offset();
//        postData.klass = $this.data("klass");
//        if (csInstance) {
//            csInstance.trigger = $this;
//            resetModPosition();
//            csInstance.view.show();
//            return;
//        } else {
//            buildDom($this);
//        }
//    }).on('click', '.J-mbar-mod-cs-close', function () {
//        if (csInstance) {
//            csInstance.view.hide();
//        }
//    });
//    function buildDom($trigger) {
//        $.getCacheJSONP(contentUrl, postData).done(function (res) {
//            if (!res.status) {
//                return;
//            }
//            var $view = $(res.data).appendTo("body");
//            setTimeout(function () {
//                $.ajax({url: "{0}&v={1}".format(jsUrl, v), dataType: "script", cache: true}).done(function () {
//                    csInstance = new MagicBarCustomService();
//                    csInstance.view = $view;
//                    csInstance.trigger = $trigger;
//                    resetModPosition();
//                    csInstance.setup();
//                    csInstance.view.show();
//                });
//            }, 0);
//        });
//    }
//
//    function resetModPosition() {
//        var viewWidth = 350;
//        var viewHeight = $('.J-mbar-msg-box-cs').height() || 300;
//        var $view = csInstance.view;
//        var $trigger = csInstance.trigger;
//        var triggerOffset = $trigger.offset().top ? $trigger.offset() : triggerOffsetOriginal;
//        var triggerWidth = $trigger.outerWidth(true);
//        var triggerHeight = $trigger.outerHeight(true);
//        var winScrollTop = $(window).scrollTop();
//        var winScrollLeft = $(window).scrollLeft();
//        var targetLeft;
//        var targetTop;
//        var upDistance = triggerOffset.top - winScrollTop;
//        var downDistance = winScrollTop + $(window).height() - triggerOffset.top - triggerHeight;
//        var leftDistance = triggerOffset.left - winScrollLeft;
//        var rightDistance = winScrollLeft + $(window).width() - triggerOffset.left - triggerWidth;
//        targetTop = upDistance > downDistance ? triggerOffset.top - viewHeight : triggerOffset.top + triggerHeight;
//        targetLeft = leftDistance > rightDistance ? triggerOffset.left - viewWidth : triggerOffset.left;
//        $view.css({"left": targetLeft + "px", 'top': targetTop + "px"});
//    }
//}());
//utmtOps.done(function () {
//    (function ($) {
//        quanmama.ABTest = (function () {
//            var separator = "-";
//            var $topbar = $("#topbar");
//            var abTestCookieName = "__utmt";
//            var abTestCookieValue = abTestCookieName.getCookie();
//            var abTestCookieValueArr = abTestCookieValue ? abTestCookieValue.split(separator) : [];
//            var abTestTopbarValue = $topbar.data("betatest");
//            var hasABTestTopbarValue = $topbar.length > 0 && !!abTestTopbarValue;
//            var abTestTopbarValueArr = hasABTestTopbarValue ? abTestTopbarValue.split(separator) : [];
//
//            function _getMvpCookie(storyId) {
//                var returnValue = "";
//                var tryReg;
//                if (!abTestCookieValue || !storyId) {
//                    return returnValue;
//                }
//                tryReg = abTestCookieValue.match(new RegExp(storyId + "[a-zA-Z]"));
//                if (tryReg) {
//                    returnValue = tryReg[0];
//                }
//                return returnValue;
//            }
//
//            function _clearMvpCookies() {
//                if (hasABTestTopbarValue && abTestTopbarValue == "deleteab") {
//                    abTestCookieName.setCookie("0", -1, quanmama.Utility.rootDomain, "/");
//                    return;
//                }
//                var temObj = {};
//                var finalArr = [];
//                if (abTestCookieValueArr.length == 0 || abTestTopbarValueArr.length == 0) {
//                    return;
//                }
//                for (var i = 0, len = abTestCookieValueArr.length; i < len; ++i) {
//                    var tem = abTestCookieValueArr[i];
//                    var tryReg = tem.match(/^(\d*)([a-zA-Z])$/);
//                    if (tryReg) {
//                        temObj[tryReg[1]] = tem;
//                    }
//                }
//                for (var j = 0, jlen = abTestTopbarValueArr.length; j < jlen; ++j) {
//                    var temp = abTestTopbarValueArr[j];
//                    var tryItem = temObj[temp];
//                    if (tryItem) {
//                        finalArr.push(tryItem);
//                    }
//                }
//                abTestCookieName.setCookie(finalArr.join(separator), 365, quanmama.Utility.rootDomain, "/");
//            }
//
//            return{getMvpCookie: _getMvpCookie, clearMvpCookies: _clearMvpCookies}
//        }());
//    }(jQuery, FLNS.register("quanmama.ABTest")));
//    quanmama.ABTest.clearMvpCookies();
//});
(function () {
    quanmama.Common.add("ServiceOnline", function () {
        var $document = $(document);
        var triggerSelector = ".J_show_customservice";
        var overlaySelector = "#J_fanli_service_online_pop";
        var gotoTriggerSelector = ".J_goto_trigger";
        var gotoPanelSelector = ".J_goto_panel";
        var questionContSelect = ".J_fanli_service_online_content";
        var endingContSelect = ".J_fanli_service_online_ending";
        var ajaxUrl = "http://passport.quanmama.com/magicbar/user/customService?jsoncallback=?";

        function setup() {
            bindEvent();
        }

        function bindEvent() {
            $document.on("click", triggerSelector, function (ev) {
                ev.preventDefault();
                buildOverlay();
            }).on("click", gotoTriggerSelector, function () {
                var $this = $(this);
                gotoPanel($this);
            }).on("click", ".J_kf_trigger", function () {
                open53kf();
            }).on("click", ".J_goto_ending_trigger", function () {
                showEnding();
            });
        }

        function gotoPanel($trigger) {
            $trigger.parents(gotoPanelSelector).fadeOut("fast", function () {
                $(overlaySelector).find("{0}[data-number='{1}']".format(gotoPanelSelector, $trigger.attr("data-href"))).fadeIn("fast");
            });
            $(".J_kf_trigger").attr("id", "ubt-kf-{0}".format($trigger.data("href")));
        }

        function buildOverlay() {
            if ($(overlaySelector).length) {
                showOverlay();
            }
            else {
                $.getCacheJSONP(ajaxUrl, function (JSON) {
                    if (JSON.status == 1) {
                        $("body").append(JSON.data);
                        quanmama.Utility.requirejs(['overlay', 'expose'], showOverlay);
                        getKfStatus();
                    }
                });
            }
        }

        function getKfStatus() {
            topbarGetInfo.done(function () {
                var $topbar = $("#topbar");
                if ($topbar.data('kfStatus')) {
                    $(overlaySelector).find(".J-kf-online").show();
                }
                else {
                    $(overlaySelector).find(".J-kf-offline").show();
                }
            });
        }

        function showOverlay() {
            $(overlaySelector).data("overlay") ? $(overlaySelector).data("overlay").load() : bindOverlay();
        }

        function bindOverlay() {
            $(overlaySelector).overlay({top: "13%", mask: {color: "#000", opacity: 0.5}, fixed: false, onClose: function () {
                $(overlaySelector).find(gotoPanelSelector).hide();
                $(overlaySelector).find("{0}[data-number='0']".format(gotoPanelSelector)).show();
                $(overlaySelector).find(questionContSelect).show();
                $(overlaySelector).find(endingContSelect).hide();
            }}).data('overlay').load();
        };
        function showEnding() {
            $(overlaySelector).find(questionContSelect).fadeOut("fast", function () {
                $(overlaySelector).find(endingContSelect).fadeIn("fast");
            });
            setTimeout(function () {
                $(overlaySelector).data("overlay").close();
            }, 3000);
        }

        setup();
    }).ServiceOnline();
})(FLNS.register("quanmama.Common"));
;
//$(function () {
//    if ($('#search-form').length > 0) {
//        $.flSearch();
//    }
//});
//;
//(function ($) {
//    var stepsConfig = {login: {contentUrl: "http://passport{0}/light/user/lightlogin".format(quanmama.Utility.rootDomain), js: "http://json..net/static/passport_light_login_js.js", ns: "Login"}, bindCellphone: {contentUrl: "http://passport{0}/light/user/lightbindphone".format(quanmama.Utility.rootDomain), js: "http://static2.51fanli.net/static/passport_light_bindcellphone_js.js", ns: "BindCellphone"}, verPhone: {contentUrl: "http://passport{0}/light/user/lightverphone".format(quanmama.Utility.rootDomain), js: "http://static2.51fanli.net/static/passport_light_verphone_js.js", ns: "VerPhone"}, bindEmail: {contentUrl: "http://passport{0}/light/user/lightbindmail".format(quanmama.Utility.rootDomain), js: "http://static2.51fanli.net/static/passport_light_bindemail_js.js", ns: "BindEmail"}, bindSafeQuestion: {contentUrl: "http://passport{0}/light/user/lightBindSafeQuestion".format(quanmama.Utility.rootDomain), js: "http://static2.51fanli.net/static/passport_light_bindsafequestion_js.js", ns: "BindSafeQuestion"}, checkSafeQuestion: {contentUrl: "http://passport{0}/light/user/lightchecksafequestion".format(quanmama.Utility.rootDomain), js: "http://static2.51fanli.net/static/passport_light_checksafequestion_js.js", ns: "CheckSafeQuestion"}, checkVerifyCode: {contentUrl: "http://passport{0}/light/user/lightcheckverifycode".format(quanmama.Utility.rootDomain), js: "http://static2.51fanli.net/static/passport_light_checkverifycode_js.js", ns: "checkVerifyCode"}, inviteRegister: {contentUrl: "http://passport{0}/light/user/lightinviteregister".format(quanmama.Utility.rootDomain), js: "http://static2.51fanli.net/static/passport_light_invite_register_js.js", ns: "InviteRegister"}, inviteRegisterForLanding: {contentUrl: "http://passport{0}/light/user/lightinviteregister?type=lightinviteregisterforlanding".format(quanmama.Utility.rootDomain), js: "", ns: ""}, inviteRegisterForLanding2: {contentUrl: "http://passport{0}/light/user/lightinviteregister?type=lightinviteregisterforlanding2".format(quanmama.Utility.rootDomain), js: "", ns: ""}, inviteRegisterForLanding3: {contentUrl: "http://passport{0}/light/user/lightinviteregister?type=lightinviteregisterforlanding3".format(quanmama.Utility.rootDomain), js: "", ns: ""}, inviteRegisterForLanding4: {contentUrl: "http://passport{0}/light/user/lightinviteregister?type=lightinviteregisterforlanding4".format(quanmama.Utility.rootDomain), js: "", ns: ""}, inviteRegisterForLanding6: {contentUrl: "http://passport{0}/light/user/lightinviteregister?type=lightinviteregisterforlanding6".format(quanmama.Utility.rootDomain), js: "", ns: ""}, inviteRegisterForLanding10: {contentUrl: "http://passport{0}/light/user/lightinviteregister?type=lightinviteregisterforlanding10".format(quanmama.Utility.rootDomain), js: "", ns: ""}, inviteRegisterForLanding11: {contentUrl: "http://passport{0}/light/user/lightinviteregister?type=lightinviteregisterforlanding11".format(quanmama.Utility.rootDomain), js: "", ns: ""}, inviteRegisterForLanding12: {contentUrl: "http://passport{0}/light/user/lightinviteregister?type=lightinviteregisterforlanding12".format(quanmama.Utility.rootDomain), js: "", ns: ""}, inviteRegisterForLanding13: {contentUrl: "http://passport{0}/light/user/lightinviteregister?type=lightinviteregisterforlanding13".format(quanmama.Utility.rootDomain), js: "", ns: ""}, inviteRegisterForLanding14: {contentUrl: "http://passport{0}/light/user/lightinviteregister?type=lightinviteregisterforlanding14".format(quanmama.Utility.rootDomain), js: "", ns: ""}, inviteRegisterForLanding15: {contentUrl: "http://passport{0}/light/user/lightinviteregister?type=lightinviteregisterforlanding15".format(quanmama.Utility.rootDomain), js: "", ns: ""}, inviteRegisterForLanding16: {contentUrl: "http://passport{0}/light/user/lightinviteregister?type=lightinviteregisterforlanding16".format(quanmama.Utility.rootDomain), js: "", ns: ""}, inviteRegisterForLanding17: {contentUrl: "http://passport{0}/light/user/lightinviteregister?type=lightinviteregisnewlanding".format(quanmama.Utility.rootDomain), js: "", ns: ""}, bindIdentify: {contentUrl: "http://passport{0}/light/user/lightBindIdentify".format(quanmama.Utility.rootDomain), js: "http://static2.51fanli.net/static/passport_light_bindidentify_js.js", ns: "BindIdentify"}, verIdentify: {contentUrl: "http://passport{0}/light/user/lightVerIdentify".format(quanmama.Utility.rootDomain), js: "http://static2.51fanli.net/static/passport_light_veridentify_js.js", ns: "VerIdentify"}, verPayAccount: {contentUrl: "http://passport{0}/light/user/lightVerPayAccount".format(quanmama.Utility.rootDomain), js: "http://static2.51fanli.net/static/passport_light_verpayaccount_js.js", ns: "VerPayAccount"}, bindIdentifyAndName: {contentUrl: "http://passport{0}/light/user/lightBindIdentifyAndName".format(quanmama.Utility.rootDomain), js: "http://static2.51fanli.net/static/passport_light_bindidentifyandname_js.js", ns: "BindIdentifyAndName"}};
//    var defaults = {step: "login", overlaySelector: "lightpopup", popWidth: 370, popTop: '15%', onSubmitSuccess: $.noop, onSubmitError: $.noop, postData: {}};
//    $.extend({light: function (options) {
//        var settings = $.extend(true, {}, defaults, options);
//        var os = settings.overlaySelector;
//        var lightNamespace = "Light";
//        var onSubmitSuccess = settings.onSubmitSuccess;
//        var onSubmitError = settings.onSubmitError;
//        var postData = settings.postData;
//        setup();
//        function setup() {
//            var $overlay = $("#{0}".format(os));
//            $overlay.length > 0 ? $overlay.data("overlay").load() : buildOverlay();
//        }
//
//        function buildOverlay() {
//            var $overlay = $("<div id='{0}' style='width:{1}px; zoom:1;background:url(http://static2.51fanli.net/common/images/loading/circle-32.gif) no-repeat #fff center center; height:auto;'></div>".format(os, settings.popWidth)).appendTo("body");
//            $overlay.overlay({closeOnClick: false, closeOnEsc: false, top: settings.popTop, mask: {bgiframe: true}, onBeforeLoad: function () {
//                var $overlay = this.getOverlay();
//                var currentStep = settings.step;
//                var currntObj = stepsConfig[currentStep];
//                $.ajax({url: currntObj.contentUrl, type: "POST", dataType: "jsonp", cache: true, data: postData, jsonp: "jsoncallback", scriptCharset: "utf-8", success: function (result) {
//                    if (result.status = "1") {
//                        $overlay.html(result.data);
//                        if (currntObj.js && currntObj.js != "") {
//                            setTimeout(function () {
//                                if (window[lightNamespace] && window[lightNamespace][currntObj.ns]) {
//                                    onSubmitSuccess.call($overlay);
//                                }
//                                else {
//                                    $.ajax({url: currntObj.js + '?v=' + parseInt(new Date().getTime() / 300000), dataType: 'script', cache: true, scriptCharset: "utf-8", success: function () {
//                                        onSubmitSuccess.call($overlay);
//                                    }});
//                                }
//                            }, 0);
//                        }
//                        else {
//                            onSubmitSuccess.call($overlay);
//                        }
//                    }
//                }, error: function (xhr, ts, et) {
//                    xhr = null;
//                    onSubmitError();
//                }});
//            }, onLoad: function () {
//                var $overlay = this.getOverlay();
//                $overlay.on("click", ".close", function () {
//                    $(this).attr("data-autoload") == "1" ? window.location.reload() : $overlay.data("overlay").close();
//                });
//            }, onClose: function () {
//                var $overlay = this.getOverlay();
//                $overlay.off("click", ".close");
//                $overlay.html('').remove();
//            }}).data("overlay").load();
//        }
//    }});
//    $.extend($.light, {defaults: defaults});
//})(jQuery);
//;
(function ($) {
    "use strict";
    FLNS.register("Light.Utility");
    Light.Utility.add("loadLoginAndRegister", function (options) {
        var settings = $.extend(true, {}, {onLoginSuccess: function () {
            window.location.href = "{0}?go_url={1}".format(redirectPrefixAfterLogin, encodeURIComponent(window.location.href));
        }, onLoginError: $.noop, onRegisterSuccess: function () {
            window.location.href = "{0}?go_url={1}".format(redirectPrefixAfterRegister, encodeURIComponent(window.location.href));
        }, onRegisterError: $.noop, customRegisterSuccess: 0, postData: {}}, options);
        $.light({popWidth: 384, step: "login", postData: settings.postData, onSubmitSuccess: function () {
            $("#J_tab_div").lightTabGroup({onBeforeSwitch: function () {
                $(".msg_row").hide();
            }, moreTabShow: function (ts) {
                $(document).on("click", "#J_to_register, #J_to_register2", function (ev) {
                    ev.preventDefault();
                    ts(1);
                }).on("click", "#J_to_login_lazy", function (ev) {
                    ev.preventDefault();
                    var $remail = $("#J_r_email");
                    $("#J_ll_uc_input").focus().val($remail.val()).focusout();
                    $remail.val("");
                    ts(0);
                    $(".lr_status").remove();
                });
            }});
            Light.Login.init({onSubmitSuccess: settings.onLoginSuccess, onSubmitError: settings.onLoginError});
            Light.Register.init({onSubmitSuccess: settings.onRegisterSuccess, onSubmitError: settings.onRegisterError, customRegisterSuccess: settings.customRegisterSuccess});
        }});
    });
    Light.Utility.add("bindCellPhone", function (options) {
        var settings = $.extend(true, {}, {onSubmitSuccess: function () {
            window.location.reload();
        }, onSubmitError: $.noop, customSuccess: 0, postData: {}, isVoice: false}, options);
        $.light({step: "bindCellphone", postData: settings.postData, onSubmitSuccess: function () {
            Light.BindCellphone.init({onSubmitSuccess: settings.onSubmitSuccess, onSubmitError: settings.onSubmitError, customSuccess: settings.customSuccess, isVoice: settings.isVoice});
        }});
    });
    Light.Utility.add("verifyCellPhone", function (options) {
        var settings = $.extend(true, {}, {onSubmitSuccess: $.noop, onSubmitError: $.noop, postData: {}}, options);
        $.light({step: "verPhone", postData: settings.postData, onSubmitSuccess: function () {
            Light.VerPhone.init({onSubmitSuccess: settings.onSubmitSuccess, onSubmitError: settings.onSubmitError});
        }});
    });
    Light.Utility.add("checkSafeQuestion", function (options) {
        var settings = $.extend(true, {}, {onSubmitSuccess: $.noop, onSubmitError: $.noop, postData: {}}, options);
        $.light({step: "checkSafeQuestion", postData: settings.postData, onSubmitSuccess: function () {
            Light.CheckSafeQuestion.init({onSubmitSuccess: settings.onSubmitSuccess, onSubmitError: settings.onSubmitError});
        }});
    });
    Light.Utility.add("bindSafeQuestion", function (options) {
        var settings = $.extend(true, {}, {onSubmitSuccess: $.noop, onSubmitError: $.noop, postData: {}}, options);
        $.light({step: "bindSafeQuestion", postData: settings.postData, onSubmitSuccess: function () {
            Light.BindSafeQuestion.init({onSubmitSuccess: settings.onSubmitSuccess, onSubmitError: settings.onSubmitError});
        }});
    });
    Light.Utility.add("bindIdentify", function (options) {
        var settings = $.extend(true, {}, {onSubmitSuccess: $.noop, onSubmitError: $.noop, postData: {}}, options);
        $.light({step: "bindIdentify", postData: settings.postData, onSubmitSuccess: function () {
            Light.BindIdentify.init({onSubmitSuccess: settings.onSubmitSuccess, onSubmitError: settings.onSubmitError});
        }});
    });
    Light.Utility.add("verifyIdentify", function (options) {
        var settings = $.extend(true, {}, {onSubmitSuccess: $.noop, onSubmitError: $.noop, postData: {}}, options);
        $.light({step: "verIdentify", postData: settings.postData, onSubmitSuccess: function () {
            Light.VerIdentify.init({onSubmitSuccess: settings.onSubmitSuccess, onSubmitError: settings.onSubmitError});
        }});
    });
    Light.Utility.add("verifyPayAccount", function (options) {
        var settings = $.extend(true, {}, {onSubmitSuccess: $.noop, onSubmitError: $.noop, postData: {}}, options);
        $.light({step: "verPayAccount", postData: settings.postData, onSubmitSuccess: function () {
            Light.VerPayAccount.init({onSubmitSuccess: settings.onSubmitSuccess, onSubmitError: settings.onSubmitError});
        }});
    });
    Light.Utility.add("bindIdentifyAndName", function (options) {
        var settings = $.extend(true, {}, {onSubmitSuccess: $.noop, onSubmitError: $.noop, postData: {}}, options);
        $.light({step: "bindIdentifyAndName", postData: settings.postData, onSubmitSuccess: function () {
            Light.BindIdentifyAndName.init({onSubmitSuccess: settings.onSubmitSuccess, onSubmitError: settings.onSubmitError});
        }});
    });
})(jQuery);
(function ($) {
    FLNS.register("Light.Utility");
    Light.Utility.add("buildMsg", function (t, txt) {
        var sb = new StringBuilder();
        sb.append("<div class='top_tips'>").append("<i class='{0}'></i>".format(t)).append(txt).append("</div>");
        return sb.toString();
    });
})(jQuery);
;
;
(function ($) {
    var currentSearch = location.search;
    var showsignupArr = /showsignup=([^&]*)/gi.exec(currentSearch);
    var delayTime = 300;
    var animateTime = 500;
    var animateTimeTwo = 1000;
    var easing = "easeOutBack";
    var markcodeCookie = "markcode".getCookie();
    var passCookieCondition = !!(markcodeCookie && !(/^0\./g.test(markcodeCookie))) && !("prouserid".getCookie());
    var showSignupPop = function (url) {
        quanmama.Utility.requirejs(['overlay', 'expose', 'easing', 'light', 'switchable'], showPop);
        function showPop() {
            $.light({popWidth: 712, step: url, postData: {'go_url': window.location.href}, onSubmitSuccess: function () {
                var $spotlight = $('#J-lrfl-spotlight');
                var $panelsOneTip = $("#J-lrfl-panles-shopping").find(".J-lrfl-panles-title");
                var $panelsTwoTip = $("#J-lrfl-panles-economize").find(".J-lrfl-panles-title");
                var $panelsThreeTip = $("#J-lrfl-panles-quanmama").find(".J-lrfl-panles-title");
                panelsOneEffect();
                $spotlight.switchable({putTriggers: 'appendTo', panels: '.J-lrfl-panles', effect: 'scrollLeft', prev: '#J-lrfl-panles-prev', next: '#J-lrfl-panles-next', triggersWrapCls: null, autoplay: true, beforeSwitch: function (event, currentIndex) {
                    if (currentIndex != 0) {
                        panelsOneReset();
                    }
                    if (currentIndex != 1) {
                        panelsTwoReset();
                    }
                    if (currentIndex != 2) {
                        panelsThreeReset();
                    }
                }, onSwitch: function (event, currentIndex) {
                    if (currentIndex == 0) {
                        panelsOneEffect();
                    }
                    if (currentIndex == 1) {
                        panelsTwoEffect();
                    }
                    if (currentIndex == 2) {
                        panelsThreeEffect();
                    }
                }});
            }});
        }
    }

    function panelsOneEffect() {
        setTimeout(function () {
            $("#J-lrfl-panles-shopping .J-lrfl-panles-title").animate({top: "36", opacity: 1.0}, easing);
            $('.J-lrfl-panles-direction').animate({opacity: 1.0}, animateTimeTwo, easing);
        }, delayTime);
    }

    function panelsOneReset() {
        $("#J-lrfl-panles-shopping .J-lrfl-panles-title").animate({top: "-100", opacity: 0}, delayTime);
        $('.J-lrfl-panles-direction').animate({opacity: 0}, easing);
    }

    function panelsTwoEffect() {
        setTimeout(function () {
            $("#J-lrfl-panles-economize .J-lrfl-panles-title").animate({top: "36", opacity: 1.0}, animateTime, easing);
            $('.J-lrfl-panles-direction').animate({opacity: 1.0}, animateTimeTwo, easing);
        }, delayTime);
    }

    function panelsTwoReset() {
        $("#J-lrfl-panles-economize .J-lrfl-panles-title").animate({top: "-100", opacity: 0}, delayTime);
        $('.J-lrfl-panles-direction').animate({opacity: 0}, easing);
    }

    function panelsThreeEffect() {
        setTimeout(function () {
            $("#J-lrfl-panles-quanmama .J-lrfl-panles-title").animate({top: "36", opacity: 1.0}, animateTime, easing);
            $('.J-lrfl-panles-direction').animate({opacity: 1.0}, animateTimeTwo, easing);
            $('#J-lrfl-panles-step1').animate({right: "228", opacity: 1.0}, animateTime, easing);
            setTimeout(function () {
                $('#J-lrfl-panles-step2').animate({right: "154", opacity: 1.0}, animateTime, easing);
            }, delayTime);
            setTimeout(function () {
                $('#J-lrfl-panles-step3').animate({right: "80", opacity: 1.0}, animateTime, easing);
            }, 600);
        }, delayTime);
    }

    function panelsThreeReset() {
        $("#J-lrfl-panles-quanmama .J-lrfl-panles-title").animate({top: "-100", opacity: 0}, delayTime);
        $('.J-panles-direction').animate({opacity: 0}, easing);
        $('#J-lrfl-panles-step1').animate({right: "-163", opacity: 0}, animateTime, easing);
        $('#J-lrfl-panles-step2').animate({right: "-163", opacity: 0}, animateTime, easing);
        $('#J-lrfl-panles-step3').animate({right: "-163", opacity: 0}, animateTime, easing);
    }

    if (showsignupArr && passCookieCondition) {
        var url = "";
        if (showsignupArr[1] == "1") {
            url = "inviteRegisterForLanding";
        } else if (showsignupArr[1] == "4") {
            url = "inviteRegisterForLanding3";
        }
        url && showSignupPop(url);
    }
})(jQuery);
(function ($) {
    var currentSearch = location.search;
    var showsignupArr = /showsignup=([^&]*)/gi.exec(currentSearch);
    var markcodeCookie = "markcode".getCookie();
    var passCookieCondition = !!(markcodeCookie && !(/^0\./g.test(markcodeCookie))) && !("prouserid".getCookie());
    var showSignupPopBottom = function () {
        quanmama.Utility.requirejs(['overlay', 'expose', 'easing'], showPop);
        function showPop() {
            $.ajax({url: 'http://passport{0}/light/user/lightinviteregister'.format(quanmama.Utility.rootDomain), data: {'type': 'lightinviteregisterforlandingbtm', 'go_url': window.location.href}, type: "POST", dataType: "jsonp", jsonp: "jsoncallback", cache: true, scriptCharset: "utf-8", success: function (result) {
                if (result.status = "1") {
                    var $btmbar = $(result.data);
                    $btmbar.appendTo('body');
                    $btmbar.css('width', $(window).width());
                    $btmbar.sidebar({min: 0, fadeSpeed: 200, position: 'bottom', anchorOffset: 0, relative: false, relativeWidth: 990});
                }
            }});
        };
    }
    if (showsignupArr && showsignupArr[1] == "2" && passCookieCondition) {
        showSignupPopBottom();
    }
})(jQuery);
(function ($) {
    var currentSearch = location.search;
    var showsignupArr = /showsignup=([^&]*)/gi.exec(currentSearch);
    var markcodeCookie = "markcode".getCookie();
    var passCookieCondition = !!(markcodeCookie && !(/^0\./g.test(markcodeCookie))) && !("prouserid".getCookie());
    var showSignupPop = function () {
        quanmama.Utility.requirejs(['overlay', 'expose', 'easing', 'light', 'switchable'], showPop);
        function showPop() {
            $.light({popWidth: 712, step: url, postData: {'go_url': window.location.href}, onSubmitSuccess: function () {
                var $lightpopup = $('#lightpopup');
                $lightpopup.css('background', 'none');
                $('#J-three-login-close').click(function () {
                    $lightpopup.data('overlay').close();
                });
            }});
        }
    }
    if (showsignupArr && passCookieCondition) {
        var url = "";
        if (showsignupArr[1] == "3") {
            url = "inviteRegisterForLanding2";
        } else if (showsignupArr[1] == "10") {
            url = "inviteRegisterForLanding10";
        } else if (showsignupArr[1] == "11") {
            url = "inviteRegisterForLanding11";
        } else if (showsignupArr[1] == "12") {
            url = "inviteRegisterForLanding12";
        }
        url && showSignupPop(url);
    }
})(jQuery);
(function ($) {
    var currentSearch = location.search;
    var showsignupArr = /showsignup=([^&]*)/gi.exec(currentSearch);
    var markcodeCookie = "markcode".getCookie();
    var passCookieCondition = !!(markcodeCookie && !(/^0\./g.test(markcodeCookie))) && !("prouserid".getCookie());
    var showSignupPop2 = function () {
        quanmama.Utility.requirejs(['overlay', 'expose', 'easing', 'light', 'switchable'], showPop);
        function showPop() {
            $.light({popWidth: 712, step: url, postData: {'go_url': window.location.href}, onSubmitSuccess: function () {
                var $lightpopup = $('#lightpopup');
                var $exposeMask = $('#exposeMask');
                $lightpopup.css('background', 'none');
                $('#J-three-login-close').click(function () {
                    var $this = $(this);
                    if ($this.data('state') == "1") {
                        $lightpopup.hide();
                        $exposeMask.hide();
                        $this.data('state', '2');
                        setTimeout(function () {
                            $lightpopup.show();
                            $exposeMask.show();
                        }, 3000);
                    }
                    else {
                        $lightpopup.data('overlay').close();
                    }
                });
            }});
        }
    }
    if (showsignupArr && showsignupArr[1] == "5" && passCookieCondition) {
        var url = 'inviteRegisterForLanding4';
        showSignupPop2(url);
    }
})(jQuery);
(function ($) {
    var currentSearch = location.search;
    var showsignupArr = /showsignup=([^&]*)/gi.exec(currentSearch);
    var markcodeCookie = "markcode".getCookie();
    var passCookieCondition = !!(markcodeCookie && !(/^0\./g.test(markcodeCookie))) && !("prouserid".getCookie());
    var showSignupPop = function () {
        quanmama.Utility.requirejs(['overlay', 'expose', 'easing', 'light'], showPop);
        function showPop() {
            $.light({popWidth: 909, popTop: 'center', step: url, postData: {'go_url': window.location.href}, onSubmitSuccess: function () {
                $('#lightpopup').css({'background': 'none', 'margin-top': '-455px'});
            }});
        }
    }
    if (showsignupArr && showsignupArr[1] == "6" && passCookieCondition) {
        var url = 'inviteRegisterForLanding6';
        showSignupPop(url);
    }
})(jQuery);
(function ($) {
    var currentSearch = location.search;
    var showsignupArr = /showsignup=([^&]*)/gi.exec(currentSearch);
    var markcodeCookie = "markcode".getCookie();
    var passCookieCondition = !!(markcodeCookie && !(/^0\./g.test(markcodeCookie))) && !("prouserid".getCookie());
    var showSignupPop = function () {
        quanmama.Utility.requirejs(['overlay', 'expose', 'easing', 'light'], showPop);
        function showPop() {
            $.light({popWidth: 712, step: url, postData: {'go_url': window.location.href}, onSubmitSuccess: function () {
                $('#lightpopup').css('background', 'none');
            }});
        }
    }
    if (showsignupArr && passCookieCondition) {
        var url = "";
        if (showsignupArr[1] == "13") {
            url = "inviteRegisterForLanding13";
        } else if (showsignupArr[1] == "14") {
            url = "inviteRegisterForLanding14";
        } else if (showsignupArr[1] == "15") {
            url = "inviteRegisterForLanding15";
        }
        url && showSignupPop(url);
    }
})(jQuery);
(function ($) {
    var currentSearch = location.search;
    var showsignupArr = /showsignup=([^&]*)/gi.exec(currentSearch);
    var markcodeCookie = "markcode".getCookie();
    var passCookieCondition = !!(markcodeCookie && !(/^0\./g.test(markcodeCookie))) && !("prouserid".getCookie());
    var showSignupPop = function (url) {
        quanmama.Utility.requirejs(['overlay', 'expose', 'easing', 'light', 'switchable'], showPop);
        function showPop() {
            $.light({popWidth: 712, step: url, postData: {'go_url': window.location.href}, onSubmitSuccess: function () {
                var $spotlight = $('.J-panle-box');
                $('#lightpopup').css('background', 'none');
                $spotlight.switchable({triggers: false, putTriggers: 'appendTo', panels: '.J-panle', effect: 'scrollLeft', prev: '#J-arrow-prev', next: '#J-arrow-next', triggersWrapCls: null, autoplay: true});
            }});
        }
    }
    if (showsignupArr && showsignupArr[1] == "16" && passCookieCondition) {
        var url = 'inviteRegisterForLanding16';
        showSignupPop(url);
    }
})(jQuery);
(function ($) {
    var currentSearch = location.search;
    var showsignupArr = /showsignup=([^&]*)/gi.exec(currentSearch);
    var markcodeCookie = "markcode".getCookie();
    var passCookieCondition = !!(markcodeCookie && !(/^0\./g.test(markcodeCookie))) && !("prouserid".getCookie());
    var showSignupPop = function (url, showsignup) {
        quanmama.Utility.requirejs(['overlay', 'expose', 'light'], showPop);
        function showPop() {
            $.light({popWidth: 730, step: url, postData: {'go_url': window.location.href, 'showsignup': showsignup}});
        }
    }
    if (showsignupArr && showsignupArr[1] > 17 && passCookieCondition) {
        var url = 'inviteRegisterForLanding17';
        showSignupPop(url, showsignupArr[1]);
    }
})(jQuery);
;
(function ($) {
    FLNS.register('Huodong.Common');
    Huodong.Common.add('init', function () {
        $('img.lazy').lazyload({threshold: 200, failure_limit: 10, effect: 'fadeIn'});
        $('.event-adload').adloader();
        $('.event-smooth').on('click', function (ev) {
            ev.preventDefault();
            $('body, html').animate({scrollTop: $($(this).attr('href')).offset().top}, 100);
        });
        $('.J-flad-click').on('click', function () {
            var adid = $(this).data('adid');
            $.getJSON('http://huodong.quanmama.com/client/ajaxfladrecord?jsoncallback=?', {'id': adid});
        });
        $('.J_popup_event').overlay({top: 'center', fixed: false, onBeforeLoad: function () {
            this.getOverlay().find('img.lazy').trigger('appear');
        }});
    });
    Huodong.Common.add('initUrlAnchor', function () {
        var ele = getQueryString('anchor');
        var $ele = $(ele);

        function getQueryString(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) {
                return unescape(r[2]);
            }
            else {
                return null;
            }
        }

        if ($ele.length > 0) {
            $('body, html').animate({scrollTop: $ele.offset().top}, 100);
        }
    });
    Huodong.Common.add('reloadAnchor', function (name) {
        var hyphen = window.location.href.indexOf('?') > -1 ? '&' : '?';
        if (window.location.href.indexOf(name) > -1) {
            window.location.reload();
        }
        else {
            window.location.replace(window.location.href + hyphen + 'anchor=' + name);
        }
    });
    Huodong.Common.add('showLoginPopup', function () {
        $.light({popWidth: 384, step: "login", onSubmitSuccess: function () {
            $("#J_tab_div").lightTabGroup({onBeforeSwitch: function () {
                $(".msg_row").hide();
            }, moreTabShow: function (ts) {
                $(document).on("click", "#J_to_register, #J_to_register2", function (ev) {
                    ev.preventDefault();
                    ts(1);
                }).on("click", "#J_to_login_lazy", function (ev) {
                    ev.preventDefault();
                    var $remail = $("#J_r_email");
                    $("#J_ll_uc_input").focus().val($remail.val()).focusout();
                    $remail.val("");
                    ts(0);
                    $(".lr_status").remove();
                });
            }});
            Light.Login.init({onSubmitSuccess: function () {
                location.reload();
            }});
            Light.Register.init({onSubmitSuccess: function () {
                location.reload();
            }});
        }});
    });
    $(function () {
        Huodong.Common.init();
        Huodong.Common.initUrlAnchor();
    });
})(jQuery);
;
var _fanliBacktop = false;
;
(function ($) {
    $(function () {
        if ((typeof _fanliBacktop !== 'undefined') ? _fanliBacktop : true) {
            if ($.fn.sidebar) {
                $('#backtop').sidebar({min: 60, relative: true, relativeWidth: 980, backToTop: true, backContainer: '#btn-backtop'});
            }
        }
        var $footerFa = $('#J-footer-fa');
        if ('footerfa'.getCookie() != 1 && $footerFa.length > 0 && $footerFa.css('visibility') != 'hidden' && $.fn.sidebar && $.fn.adloader) {
            var footerFaClose = true;
            $footerFa.css({'background': $footerFa.find('img').attr('alt')});
            if ($.fn.sidebar) {
                $footerFa.sidebar({min: 0, relative: true, relativeWidth: -990});
            }
            if (footerFaClose) {
                $footerFa.append('<a href="javascript:void(0);" class="close">&times;</a>').on('click', '.close', function () {
                    $footerFa.remove();
                    'footerfa'.setCookie('1', '0.083', quanmama.Utility.rootDomain, '/');
                });
            }
        }
        else {
            $footerFa.remove();
        }
        function showWebNav() {
            var $trigger = $('.J_ft_showwebnav');
            var $panel = $('.J_ft_webnav');
            if ($panel.find('a').length > 0) {
                $trigger.click(function () {
                    if ($trigger.hasClass('expand')) {
                        $panel.hide();
                        $trigger.removeClass('expand').find('.J_arr').html('&and;');
                    } else {
                        $panel.show();
                        $trigger.addClass('expand').find('.J_arr').html('&or;');
                    }
                });
            }
            else {
                $trigger.remove();
            }
        }

        showWebNav();
    });
    FLNS.register("quanmama.Public.Footer");
    quanmama.Public.Footer.add("InviteEnter", function () {
        var $window = $(window);
        var $enterWrap = $("#J_fl_footer_invite_enter");
        var cookieName = "FL_FOOTER_INVITE_ENTER";
        var isIE6 = !!window.ActiveXObject && !window.XMLHttpRequest;
        if ($enterWrap.length) {
            setup();
        }
        function setup() {
            bindLiveEvent();
            buildIe6Fix();
        }

        function bindLiveEvent() {
            if (cookieName.getCookie() != "1") {
                $enterWrap.fadeIn("fast");
            }
            $enterWrap.on("click", ".J_close_btn", function () {
                $enterWrap.fadeOut("fast");
                cookieName.setCookie("1", 1, quanmama.Utility.rootDomain, "/");
            });
        }

        function buildIe6Fix() {
            if (isIE6) {
                $enterWrap.css({'position': 'absolute', 'top': $window.scrollTop() + $window.height() - $enterWrap.height()});
                $window.on('scroll.INVITE', function () {
                    $enterWrap.css({'position': 'absolute', 'top': $window.scrollTop() + $window.height() - $enterWrap.height()});
                });
            }
        }
    }).InviteEnter();
})(jQuery);
;
var _hmt = _hmt || [];
function Ftrack(base) {
    for (var i = 1, length = arguments.length; i < length; i++) {
        _hmt.push(['_trackEvent', base + '_' + arguments[i], 'click', '']);
    }
    return false;
}
(function () {
    var fanliId = '545c20cb01a15219bfeb0d1f103f99c1';
    var budouId = '8b40dd24ee21b28e2c2b108b4f804cb6';
    var _bdId = document.domain.indexOf('budou.com') > -1 ? budouId : fanliId;
    if (typeof(_baidu) != 'undefined') {
        _bdId = _baidu;
    }
    var hm = document.createElement("script");
    hm.src = '//hm.baidu.com/hm.js?' + _bdId;
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();