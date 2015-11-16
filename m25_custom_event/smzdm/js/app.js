!function () {
    "use strict";
    function require(t, e, n) {
        var i = require.resolve(t);
        if (null != i) {
            var r = require.modules[i];
            if (!r._resolving && !r.exports) {
                var o = {};
                o.exports = {}, o.client = o.component = !0, r._resolving = !0, r.call(this, o.exports, require.relative(i), o), delete r._resolving, r.exports = o.exports
            }
            return r.exports
        }
    }

    require.modules = {}, require.aliases = {}, require.exts = ["", ".js", ".json", "/index.js", "/index.json"], require.resolve = function (t) {
        "/" === t.charAt(0) && (t = t.slice(1));
        for (var e = 0; 5 > e; e++) {
            var n = t + require.exts[e];
            if (require.modules.hasOwnProperty(n))return n;
            if (require.aliases.hasOwnProperty(n))return require.aliases[n]
        }
    }, require.normalize = function (t, e) {
        var n = [];
        if ("." != e.charAt(0))return e;
        t = t.split("/"), e = e.split("/");
        for (var i = 0; i < e.length; ++i)".." === e[i] ? t.pop() : "." != e[i] && "" != e[i] && n.push(e[i]);
        return t.concat(n).join("/")
    }, require.register = function (t, e) {
        require.modules[t] = e
    }, require.alias = function (t, e) {
        require.modules.hasOwnProperty(t) && (require.aliases[e] = t)
    }, require.relative = function (t) {
        function e(n) {
            var i = e.resolve(n);
            return require(i, t, n)
        }

        var n = require.normalize(t, "..");
        return e.resolve = function (e) {
            var i = e.charAt(0);
            if ("/" === i)return e.slice(1);
            if ("." === i)return require.normalize(n, e);
            for (var r = t.split("/"), o = r.length; o-- && "deps" !== r[o];);
            return e = r.slice(0, o + 2).join("/") + "/deps/" + e
        }, e.exists = function (t) {
            return require.modules.hasOwnProperty(e.resolve(t))
        }, e
    }, require.register("smzdm_pro/source/main.js", function (t, e) {
        var n = ",se-extension,chrome-extension,mxaddon-pkg";
        e(n.indexOf(location.href.split("://")[0]) > 0 ? "./view/" + location.href.split("/").reverse()[0].split(".html")[0] : "./view/content")
    }), require.register("smzdm_pro/source/config/config.js", function (t, e, n) {
        function i(t) {
            var t = o.api + t;
            return t += t.indexOf("?") > 0 ? "&" : "?", t += "f=chrome&", r.local("s") && (t += "s=" + r.local("s") + "&"), t
        }

        var r = e("../src/core/DBoy"), o = {
            api: "https://api.smzdm.com/v1",
            version: "2.4.6.0",
            channel: ["empty", "youhui", "shaiwu", "jingyan", "faxian", "haitao", "news"],
            variety: {post: "youhui", os: "shaiwu", exp: "jingyan", news: "news", ht: "haitao"},
            tny: "5Rkl*dIw76uq3$3",
            port: 9271,
            census: function () {
                var t = "Chrome", e = r.unit.browType();
                for (var n in e)e[n] && (t = n);
                return "&utm_source=browser&utm_medium=" + t + "&utm_campaign=push"
            }
        }, a = {
            special: function () {
                return i("/filter/tags?type=home")
            },
            category: function () {
                return i("/filter/categories/")
            },
            push_post: function () {
                return i("/youhui/push_posts/")
            },
            login: function () {
                return i("/user/login/")
            },
            userinfo: function () {
                return i("/user/info/")
            },
            getfav: function () {
                return i("/user/favorites/")
            },
            captcha: function () {
                return i("/user/captcha/?lang=en&flag=login")
            },
            addfav: function () {
                return i("/user/favorites/create/")
            },
            delfav: function () {
                return i("/user/favorites/destroy/")
            },
            report: function () {
                return i("/user/feedback")
            },
            pricetrend: "http://dcc.smzdm.com:" + o.port + "/GetProductPriceSeries.ashx",
            diffSubmit: "http://dcc.smzdm.com:" + o.port + "/SubmitUrl.ashx",
            collect: "http://dcc.smzdm.com:" + o.port + "/CollectProductStock.ashx",
            sites: "http://dcc.smzdm.com:" + o.port + "/GetStockSearchWebsites.ashx",
            FEEDBACK: i("check_bl_info"),
            RATE: "http://download.finance.yahoo.com/d/quotes.csv?e=.csv&f=sl1c8t1&s=USDCNY=x",
            VERSIONUPDATE: "http://res.smzdm.com/extension/chrome/json/updata.json"
        }, s = {start: !0, loopTime: 30}, l = {};
        n.exports = {app: o, url: a, pull: s, log: l}
    }), require.register("smzdm_pro/source/config/size.js", function (t, e, n) {
        n.exports = [{
            key: "clothing,men",
            name: "\u7537\u88C5",
            data: [{
                name: "\u4E0A\u8863",
                title: ["\u56FD\u9645", "\u7F8E\u56FD", "\u4E2D\u56FD", "\u80F8\u56F4(\u5398\u7C73)", "\u8170\u56F4(\u5398\u7C73)", "\u80A9\u5BBD(\u5398\u7C73)", "\u9002\u5408\u8EAB\u9AD8"],
                info: [["S", "36", "165/80A", "82~85", "72~75", "42", "163~167"], ["M", "38", "170/84A", "86~89", "76~79", "44", "168~172"], ["L", "40", "175/88A", "90~93", "80~84", "46", "173~177"], ["XL", "42", "180/92A", "94~97", "85~88", "48", "178~182"], ["XXL", "42", "185/96A", "98~102", "89~92", "50", "182~187"], ["XXXL", "44", "190/100A", "103~107", "93~96", "52", "187~190"]]
            }, {
                name: "\u4E0B\u88C5",
                title: ["\u56FD\u9645", "\u7F8E\u56FD", "\u4E2D\u56FD", "\u8170\u56F4(\u5E02\u5C3A)", "\u8170\u56F4(\u5398\u7C73)", "\u81C0\u56F4(\u5E02\u5C3A)", "\u81C0\u56F4(\u5398\u7C73)"],
                info: [["XXS", "28", "", "2\u5C3A1", "70", "2\u5C3A8", "93"], ["XS", "29", "160/66A", "2\u5C3A2", "73", "2\u5C3A9", "97"], ["S", "30", "165/70A", "2\u5C3A3", "77", "3\u5C3A", "100"], ["M", "31", "170/74A", "2\u5C3A4", "80", "3\u5C3A1", "103"], ["L", "32", "175/78A", "2\u5C3A5", "83", "3\u5C3A2", "107"], ["XL", "33", "180/82A", "2\u5C3A6", "87", "3\u5C3A3", "110"], ["XXL", "34", "185/86A", "2\u5C3A7", "90", "3\u5C3A4", "113"], ["XXL", "36", "185/86A", "2\u5C3A8", "93", "3\u5C3A5", "117"], ["XXXL", "38", "190/90A", "2\u5C3A9", "97", "3\u5C3A7-3\u5C3A8", "123-127"]]
            }]
        }, {
            key: "clothing,women",
            name: "\u5973\u88C5",
            data: [{
                name: "\u4E0A\u8863",
                title: ["\u56FD\u9645", "\u7F8E\u56FD", "\u4E2D\u56FD", "\u80F8\u56F4(\u5398\u7C73)", "\u8170\u56F4(\u5398\u7C73)", "\u80A9\u5BBD(\u5398\u7C73)", "\u9002\u5408\u8EAB\u9AD8"],
                info: [["XXXS", "30~32", "145/73A", "74~76", "58~60", "34", "147~150"], ["XXS", "32~34", "150/76A", "76~78", "60~62", "35", "150~153"], ["XS", "34", "155/80A", "78~81", "62~66", "36", "153~157"], ["S", "34~36", "160/84A", "82~85", "67~70", "38", "158~162"], ["M", "38~40", "165/88A", "86~89", "71~74", "40", "163~167"], ["L", "42", "170/92A", "90~93", "75~79", "42", "168~172"], ["XL", "44", "175/96A", "94~97", "80~84", "44", "173~177"], ["XXL", "46", "180/100A", "98~102", "85~89", "46", "177~180"]]
            }, {
                name: "\u4E0B\u88C5",
                title: ["\u56FD\u9645", "\u7F8E\u56FD", "\u4E2D\u56FD", "\u8170\u56F4(\u5E02\u5C3A)", "\u8170\u56F4(\u5398\u7C73)", "\u81C0\u56F4(\u5E02\u5C3A)", "\u81C0\u56F4(\u5398\u7C73)"],
                info: [["XXS", "0", "24", "1\u5C3A7", "57~60", "2\u5C3A4", "80~83"], ["XS", "2", "25", "1\u5C3A8", "60", "2\u5C3A5", "83"], ["S", "4", "26", "1\u5C3A9", "63", "2\u5C3A6", "87"], ["M", "6", "27", "2\u5C3A", "67", "2\u5C3A7", "90"], ["L", "8", "28", "2\u5C3A1", "70", "2\u5C3A8", "93"], ["XL", "10", "29", "2\u5C3A2", "73", "2\u5C3A9", "97"], ["XXL", "12", "30", "2\u5C3A3", "77", "3\u5C3A", "100"], ["XXXL", "14", "31", "2\u5C3A4", "80", "3\u5C3A1", "103"]]
            }]
        }, {
            key: "clothing,girls,boys",
            name: "\u7AE5\u88C5",
            data: [{
                name: "0~2\u5C81",
                title: ["\u7F8E\u56FD\u7801", "\u8EAB\u9AD8(\u5398\u7C73)", "\u91CD\u91CF(\u516C\u65A4)"],
                info: [["Preemie(P)", "0~43", "0~2.3"], ["Newborn(NB)", "0~55", "2.3~3.6"], ["3M", "55~61", "3.6~5.7"], ["6M", "61~67", "5.7~7.5"], ["9M", "67~72", "7.5~9.3"], ["12M", "72~78", "9.3~11.1"], ["18M", "78~83", "11.2~12.5"], ["24M", "83~86", "12.5~13.6"]]
            }, {
                name: "2~5\u5C81",
                title: ["\u7F8E\u56FD\u7801", "\u8EAB\u9AD8(\u5398\u7C73)", "\u91CD\u91CF(\u516C\u65A4)"],
                info: [["2T", "88~93", "13.2~14.1"], ["3T", "93~98", "14.1~15.4"], ["4T", "98~105", "15.4~17.2"], ["5T", "105~111", "17.3~19.1"]]
            }, {
                name: "4~12\u5C81",
                title: ["\u7F8E\u56FD\u7801", "\u8EAB\u9AD8(\u5398\u7C73)", "\u91CD\u91CF(\u516C\u65A4)"],
                info: [["4", "102~108", "16.8~17.7"], ["5", "108~114", "17.7~20"], ["6", "114~122", "22~22.2"], ["6X", "122~128", "22.2~25"], ["7", "122~128", "22.2~25"], ["8", "128~135", "25-28"], ["10", "135~140", "28.1~33.6"], ["12", "140~147", "33.6~39"]]
            }]
        }, {
            key: "shoes,women",
            name: "\u978B",
            data: [{
                name: "\u5973\u978B",
                title: ["\u7F8E\u56FD\u7801", "\u4E2D\u56FD\u7801", "\u811A\u957F(\u5398\u7C73)"],
                info: [["5", "35.5", "22.5"], ["5.5", "36", "23"], ["6", "36.5", "23.3"], ["6.5", "37", "23.5"], ["7", "37.5", "23.8"], ["7.5", "38", "24"], ["8", "38.5", "24.3"], ["8.5", "39", "24.5"], ["9", "39.5", "25"], ["9.5", "40", "25.5"], ["10", "40.5", "26"]]
            }]
        }, {
            key: "shoes,men",
            name: "\u978B",
            data: [{
                name: "\u7537\u978B",
                title: ["\u7F8E\u56FD\u7801", "\u4E2D\u56FD\u7801", "\u811A\u957F(\u5398\u7C73)"],
                info: [["6", "39", "24.1"], ["6.5", "40", "24.4"], ["7", "40.5", "24.8"], ["7.5", "41", "25.4"], ["8", "41.5", "25.7"], ["8.5", "42", "26"], ["9", "42.5", "26.7"], ["9.5", "43", "27"], ["10", "43.5", "27.3"], ["10.5", "44", "27.9"], ["11", "44.5", "28.3"], ["11.5", "45", "28.6"], ["12", "46", "29.4"], ["13", "47", "30.2"], ["14", "48", "31"], ["15", "49", "31.8"]]
            }]
        }, {
            key: "shoes,boys,girls",
            name: "\u7AE5\u978B",
            data: [{
                name: "0~12\u6708",
                title: ["\u7F8E\u56FD\u7801", "\u4E2D\u56FD\u7801", "\u811A\u957F(\u5398\u7C73)"],
                info: [["0.5", "16", "8.3"], ["1", "16", "8.9"], ["1.5", "17", "9.2"], ["2", "17", "9.5"], ["2.5", "18", "10.2"], ["3", "18", "10.5"], ["3.5", "19", "10.8"], ["4", "19", "11.4"], ["4.5", "20", "11.7"], ["5", "20", "12.1"]]
            }, {
                name: "1~5\u5C81",
                title: ["\u7F8E\u56FD\u7801", "\u4E2D\u56FD\u7801", "\u811A\u957F(\u5398\u7C73)"],
                info: [["5.5", "21", "12.7"], ["6", "22", "13"], ["6.5", "22", "13.3"], ["7", "23", "14"], ["7.5", "23", "14.3"], ["8", "24", "14.6"], ["8.5", "25", "15.2"], ["9", "25", "15.6"], ["9.5", "26", "15.9"], ["10", "27", "16.5"], ["10.5", "27", "16.8"], ["11", "28", "17.1"], ["11.5", "29", "17.8"], ["12", "30", "18.1"]]
            }, {
                name: "6~10\u5C81",
                title: ["\u7F8E\u56FD\u7801", "\u4E2D\u56FD\u7801", "\u811A\u957F(\u5398\u7C73)"],
                info: [["12.5", "30", "18.4"], ["13", "31", "19.1"], ["13.5", "31", "19.4"], ["1", "32", "19.7"], ["1.5", "33", "20.3"], ["2", "33", "20.6"], ["2.5", "34", "21"], ["3", "34", "21.6"], ["3.5", "35", "21.9"], ["4", "36", "22.2"][22.9], ["5", "37", "23.2"][23.5], ["6", "38", "23.5"][24.1], ["7", "39", "24.8"]]
            }]
        }, {
            key: "clothing,women,intimates",
            name: "\u5973\u88C5",
            data: [{
                name: "\u5185\u8863",
                title: ["\u4E2D\u56FD", "\u7F8E\u56FD", "\u4E0B\u80F8\u56F4(\u5398\u7C73)", "\u4E0A\u80F8\u56F4(\u5398\u7C73)"],
                info: [["65A", "30AA", "65", "70~73"], ["65B", "30A", "65", "74~76"], ["65C", "30B", "65", "77~79"], ["65D", "30C", "65", "79~81"], ["65DD", "30D", "65", "81~83"], ["70A", "32AA", "70", "79~81"], ["70B", "32A", "70", "82~84"], ["70C", "32B", "70", "84~86"], ["70D", "32C", "70", "86~88"], ["70DD", "32D", "70", "89~91"], ["75A", "34AA", "75", "83~86"], ["75B", "34A", "75", "87~89"], ["75C", "34B", "75", "89~91"], ["75D", "34C", "75", "91~93"], ["75DD", "34D", "75", "93~95"], ["80A", "36AA", "80", "89~91"], ["80B", "36A", "80", "92~94"], ["80C", "36B", "80", "94~96"], ["80D", "36C", "80", "96~98"], ["80DD", "36D", "80", "98~100"], ["85A", "38AA", "85", "94~96"], ["85B", "38A", "85", "97~99"], ["85C", "38B", "85", "99~101"], ["85D", "38C", "85", "101~103"], ["85DD", "38D", "85", "103~105"], ["90A", "40AA", "90", "99~101"], ["90B", "40A", "90", "102~104"], ["90C", "40B", "90", "104~106"], ["90D", "40C", "90", "106~108"], ["90DD", "40D", "90", "108~110"], ["\u2014\u2014", "\u2014\u2014", "95", "\u2014\u2014"], ["\u2014\u2014", "\u2014\u2014", "100", "\u2014\u2014"]]
            }]
        }]
    }), require.register("smzdm_pro/source/config/ship.js", function (t, e, n) {
        n.exports = {
            defaultCompany: {
                id: "defaultCompany",
                name: "\u9ED8\u8BA4",
                lines: [{
                    defaultShip: "",
                    type: "1",
                    id: "default1",
                    name: "\u9ED8\u8BA4",
                    url: "",
                    singlePrice: "52",
                    singleWeight: "1",
                    extendPrice: "26",
                    extendWeight: "1",
                    exchangeRate: "6.2",
                    minWeight: "2",
                    sepecialProm: "",
                    promptText: "(\u96502-8\u78C5)"
                }]
            },
            tianyi: {
                id: "tianyi",
                name: "\u5929\u7FFC",
                lines: [{
                    defaultShip: "",
                    type: "1",
                    id: "tianyi1",
                    name: "\u7F8E\u4E2D\u7EBF-A\u53E3\u5CB8",
                    url: "http://www.buytong.com/NetWork.aspx?type=1&",
                    singlePrice: "50",
                    singleWeight: "1",
                    extendPrice: "25",
                    extendWeight: "1",
                    exchangeRate: "6.25",
                    minWeight: "2",
                    sepecialProm: "",
                    promptText: "(\u96502-8\u78C5)"
                }, {
                    defaultShip: "",
                    type: "1",
                    id: "tianyi2",
                    name: "\u7F8E\u4E2D\u7EBF-C\u53E3\u5CB8",
                    url: "http://www.buytong.com/NetWork.aspx?type=1&",
                    singlePrice: "50",
                    singleWeight: "1",
                    extendPrice: "25",
                    extendWeight: "1",
                    exchangeRate: "6.25",
                    minWeight: "2",
                    sepecialProm: "",
                    promptText: "(\u96502-9\u78C5)"
                }, {
                    defaultShip: "",
                    type: "1",
                    id: "tianyi3",
                    name: "\u7F8E\u4E2D\u7EBF-X\u53E3\u5CB8",
                    url: "http://www.buytong.com/NetWork.aspx?type=1&",
                    singlePrice: "56.25",
                    singleWeight: "1",
                    extendPrice: "31.25",
                    extendWeight: "1",
                    exchangeRate: "6.25",
                    minWeight: "2",
                    sepecialProm: "",
                    promptText: "(\u96502-8\u78C5)"
                }, {
                    defaultShip: "",
                    type: "1",
                    id: "tianyi4",
                    name: "\u7F8E\u4E2D\u7EBF-USPS",
                    url: "http://www.buytong.com/NetWork.aspx?type=1&",
                    singlePrice: "250",
                    singleWeight: "1",
                    extendPrice: "37.5",
                    extendWeight: "1",
                    exchangeRate: "6.25",
                    minWeight: "2",
                    sepecialProm: "",
                    promptText: "(\u96502-8\u78C5)"
                }, {
                    defaultShip: "",
                    type: "1",
                    id: "tianyi5",
                    name: "\u7F8E\u6E2F\u7EBF-FEDEX",
                    url: "http://www.buytong.com/NetWork.aspx?type=1&",
                    singlePrice: "187.5",
                    singleWeight: "1",
                    extendPrice: "18.75",
                    extendWeight: "1",
                    exchangeRate: "6.25",
                    minWeight: "2",
                    sepecialProm: "",
                    promptText: "(\u96502-8\u78C5)"
                }]
            },
            zhuanyunzhongguo: {
                id: "zhuanyunzhongguo",
                name: "\u8F6C\u8FD0\u4E2D\u56FD",
                lines: [{
                    defaultShip: "",
                    type: "1",
                    id: "zhuanyunzhongguo1",
                    name: "\u6E20\u90531",
                    url: "http://www.buytong.com/NetWork.aspx?type=1&",
                    singlePrice: "49",
                    singleWeight: "1.10",
                    extendPrice: "6.9",
                    extendWeight: "0.22",
                    exchangeRate: "6.35",
                    minWeight: "2",
                    sepecialProm: "",
                    promptText: "(\u96502-8\u78C5)"
                }]
            },
            baitong: {
                id: "baitong",
                name: "\u767E\u901A",
                lines: [{
                    defaultShip: "",
                    type: "2",
                    id: "baitong1",
                    name: "\u4F18\u5148\u7EBFA",
                    url: "http://www.buytong.com/NetWork.aspx?type=1&",
                    singlePrice: "5",
                    singleWeight: "1",
                    extendPrice: "5",
                    extendWeight: "1",
                    exchangeRate: "6.35",
                    minWeight: "2",
                    sepecialProm: "",
                    promptText: "(\u96502-8\u78C5)"
                }, {
                    defaultShip: "",
                    type: "2",
                    id: "baitong2",
                    name: "\u7ECF\u6D4E\u7EBF",
                    url: "http://www.buytong.com/NetWork.aspx?type=1&",
                    singlePrice: "4",
                    singleWeight: "1",
                    extendPrice: "4",
                    extendWeight: "1",
                    exchangeRate: "6.35",
                    minWeight: "2",
                    sepecialProm: "",
                    promptText: "(\u96502-8\u78C5)"
                }, {
                    defaultShip: "",
                    type: "2",
                    id: "baitong3",
                    name: "\u4F18\u5148\u7EBFB",
                    url: "http://www.buytong.com/NetWork.aspx?type=1&",
                    singlePrice: "6",
                    singleWeight: "1",
                    extendPrice: "6",
                    extendWeight: "1",
                    exchangeRate: "6.35",
                    minWeight: "2",
                    sepecialProm: "",
                    promptText: "(\u96502-8\u78C5)"
                }, {
                    defaultShip: "",
                    type: "2",
                    id: "baitong4",
                    name: "\u670D\u88C5\u56E2\u8D2D\u4E13\u7EBF",
                    url: "http://www.buytong.com/NetWork.aspx?type=1&",
                    singlePrice: "4.5",
                    singleWeight: "1",
                    extendPrice: "4.5",
                    extendWeight: "1",
                    exchangeRate: "6.35",
                    minWeight: "5",
                    sepecialProm: "",
                    promptText: "(\u96502-8\u78C5)"
                }, {
                    defaultShip: "",
                    type: "2",
                    id: "baitong5",
                    name: "\u5976\u7C89\u56E2\u8D2D\u4E13\u7EBF",
                    url: "http://www.buytong.com/NetWork.aspx?type=1&",
                    singlePrice: "4.5",
                    singleWeight: "1",
                    extendPrice: "4.5",
                    extendWeight: "1",
                    exchangeRate: "6.2",
                    minWeight: "6",
                    sepecialProm: "",
                    promptText: "(\u96502-8\u78C5)"
                }, {
                    defaultShip: "",
                    type: "2",
                    id: "baitong6",
                    name: "\u767E\u901A\u7279\u5FEB\u7EBF",
                    url: "http://www.buytong.com/NetWork.aspx?type=1&",
                    singlePrice: "38",
                    singleWeight: "1",
                    extendPrice: "6",
                    extendWeight: "1",
                    exchangeRate: "6.35",
                    minWeight: "1",
                    sepecialProm: "",
                    promptText: "(\u96502-8\u78C5)"
                }]
            }
        }
    }), require.register("smzdm_pro/source/config/mall/6pm.js", function (t, e, n) {
        n.exports = {
            conf: {
                "www.6pm.com/*": {
                    panel: {
                        fn: ["sea"],
                        pageWidth: 960,
                        position: "#priceSlot",
                        className: "tabs_min",
                        listen: "#priceSlot .price",
                        query: {price: ["#priceSlot .price"]}
                    }
                }
            }
        }
    }), require.register("smzdm_pro/source/config/mall/amazon.js", function (t, e, n) {
        n.exports = {
            conf: {
                "www.amazon.cn": {},
                "www.amazon.com": {},
                "www.amazon.co.jp": {},
                "www.amazon.cn/*/dp/*|www.amazon.cn/gp/*": {
                    panel: {
                        fn: ["chart", "stock", "comment"],
                        position: "#price_feature_div"
                    }
                },
                "www.amazon.com/*dp/*|www.amazon.com/gp/*": {
                    src_data_difference: {
                        open: !0,
                        price: ["#priceblock_dealprice > span", "#priceblock_ourprice", "#buyingPriceValue"]
                    },
                    panel: {
                        fn: ["sea", "chart", "stock", "size", "comment", "keynote"],
                        position: "#price_feature_div,#ppd-top-3,#buyingPriceValue",
                        listen: "#price_feature_div,#kitsune-price_feature_div,#priceBlock,#quantity,#variation_color_name",
                        query: {
                            price: ["#priceblock_dealprice > span", "#price_feature_div span[class*='a-size-']", "#buyingPriceValue", "#buyingPriceValue", "#current-price"],
                            asin: ["#ASIN"],
                            num: ["#quantity"],
                            weight: ['a[href*="/gp/help/seller/shipping.html"]']
                        },
                        categorize: ["ul .detailBreadcrumb", "p a[class*='a-link-']", "ul[class*='a-size-']"]
                    },
                    translate: {}
                }
            }
        }
    }), require.register("smzdm_pro/source/config/mall/china-pub.js", function (t, e, n) {
        n.exports = {
            conf: {
                "key:sr": {},
                "key:product": {panel: {fn: ["chart", "stock", "comment"], position: "#xxjg"}}
            }
        }
    }), require.register("smzdm_pro/source/config/mall/dangdang.js", function (t, e, n) {
        n.exports = {
            conf: {
                "key:category": {},
                "key:product": {panel: {fn: ["chart", "stock", "comment"], position: ".sale .m_t4:first"}}
            }
        }
    }), require.register("smzdm_pro/source/config/mall/ebay.js", function (t, e, n) {
        n.exports = {
            conf: {
                "key:sr": {},
                "key:itm": {
                    panel: {
                        fn: ["sea", "chart", "stock", "comment"],
                        position: "#vi-spw-atf",
                        listen: "#prcIsum_bidPrice,#prcIsum",
                        query: {price: ["#prcIsum_bidPrice", "#prcIsum"]}
                    }
                }
            }
        }
    }), require.register("smzdm_pro/source/config/mall/efeihu.js", function (t, e, n) {
        n.exports = {
            conf: {
                "key:Pages": {},
                "key:Product": {panel: {fn: ["chart", "stock", "comment"], position: ".vi_summary_price"}}
            }
        }
    }), require.register("smzdm_pro/source/config/mall/gome.js", function (t, e, n) {
        n.exports = {
            conf: {
                "www.gome.com.cn": {},
                "key:category|key:pinpai": {},
                "key:product": {panel: {fn: ["chart", "stock", "comment"], position: ".prdprice"}},
                "key:market|key:fashion|key:electronic": {},
                "prom.gome.com.cn": {},
                "mall.gome.com.cn": {},
                "tuan.gome.com.cn/deal/*": {}
            }
        }
    }), require.register("smzdm_pro/source/config/mall/j1.js", function (t, e, n) {
        n.exports = {
            conf: {
                "key:sr": {},
                "key:product": {panel: {fn: ["chart", "stock", "comment"], position: ".new_detail_top .clearfix:eq(2)"}}
            }
        }
    }), require.register("smzdm_pro/source/config/mall/jd.js", function (t, e, n) {
        n.exports = {
            conf: {
                "www.jd.com": {},
                "list.jd.com|www.jd.com/pinpai/*": {},
                "item.jd.com": {
                    src_data_difference: {open: !1, price: ["#jd-price"]},
                    panel: {fn: ["chart", "stock", "comment", "recommend"], position: "#summary-price"}
                },
                "key:sale": {}
            }
        }
    }), require.register("smzdm_pro/source/config/mall/lusen.js", function (t, e, n) {
        n.exports = {
            conf: {
                "www.lusen.com": {},
                "key:ProductList|key:ProductCategoryList": {},
                "key:ProductInfo": {panel: {fn: ["chart", "stock", "comment"], position: "#DivProducInfo .line:last"}}
            }
        }
    }), require.register("smzdm_pro/source/config/mall/newegg.js", function (t, e, n) {
        n.exports = {
            conf: {
                "key:SubCategory": {},
                "key:Product": {panel: {fn: ["chart", "stock", "comment"], position: ".goods_price_now"}}
            }
        }
    }), require.register("smzdm_pro/source/config/mall/rayi.js", function (t, e, n) {
        n.exports = {
            conf: {
                "www.rayi.cn": {},
                "key:gallery": {},
                "key:brand": {},
                "key:product": {panel: {fn: ["chart", "stock", "comment"], position: ".goods-price li:last"}},
                "key:activity": {},
                "key:goodChannel": {},
                "http://www.tao3c.com/newTeamBuy/*": {},
                "static.tao3c.com": {}
            }
        }
    }), require.register("smzdm_pro/source/config/mall/sfbest.js", function (t, e, n) {
        n.exports = {
            conf: {
                "key:sr": {},
                "key:html": {panel: {fn: ["chart", "stock", "comment"], position: "#price-sf"}}
            }
        }
    }), require.register("smzdm_pro/source/config/mall/suning.js", function (t, e, n) {
        n.exports = {
            conf: {
                "key:list": {},
                "key:product": {panel: {fn: ["chart", "stock", "comment"], position: "#promotionPriceBox"}},
                "key:emall": {panel: {fn: ["chart", "stock", "comment"], position: "#promotionPriceBox"}}
            }
        }
    }), require.register("smzdm_pro/source/config/mall/tao3c.js", function (t, e, n) {
        n.exports = {
            conf: {
                "www.tao3c.com": {},
                "key:newTeamBuy": {},
                "key:ProductList": {},
                "key:staticpage": {},
                product: {panel: {fn: ["chart", "stock", "comment"], position: "#meanStarDiv2"}}
            }
        }
    }), require.register("smzdm_pro/source/config/mall/tmall.js", function (t, e, n) {
        n.exports = {
            conf: {
                "cart.htm": {src_data_cart: {url: ["cart.tmall.com/cart.htm", "unit.cart.tmall.com/cart.htm"]}},
                "key:sr": {},
                "key:item": {
                    panel: {
                        fn: ["chart", "search", "stock", "mall_grab", "comment"],
                        position: ".tb-meta",
                        searchTag: ["#J_BrandAttr .J_EbrandLogo"]
                    }
                },
                login: {url: "https://login.taobao.com/member/login.jhtml?style=miniall"}
            }
        }
    }), require.register("smzdm_pro/source/config/mall/vip.js", function (t, e, n) {
        n.exports = {
            conf: {
                "key:sr": {},
                "key:detail": {panel: {fn: ["chart", "stock", "comment"], position: ".pi_price_box"}}
            }
        }
    }), require.register("smzdm_pro/source/config/mall/womai.js", function (t, e, n) {
        n.exports = {
            conf: {
                "key:sr": {},
                "key:related": {panel: {fn: ["chart", "stock", "comment"], position: ".goods_cont_det"}},
                "key:Product": {panel: {fn: ["chart", "stock", "comment"], position: ".pro_m_line:first"}},
                "key:tuan": {panel: {fn: ["chart", "stock", "comment"], position: ".md_c"}}
            }
        }
    }), require.register("smzdm_pro/source/config/mall/yhd.js", function (t, e, n) {
        n.exports = {
            conf: {
                "key:ctg": {},
                "item.yhd.com/item/*": {panel: {fn: ["chart", "stock", "comment"], position: ".pricebox"}},
                "t.yhd.com/detail/*": {panel: {fn: ["chart", "stock", "comment"], position: ".unit_light"}},
                "s.yhd.com/item/*": {}
            }
        }
    }), require.register("smzdm_pro/source/config/mall/yixun.js", function (t, e, n) {
        n.exports = {conf: {"key:item": {panel: {fn: ["chart", "stock", "comment"], position: ".xprice:last"}}}}
    }), require.register("smzdm_pro/source/config/mall/yougou.js", function (t, e, n) {
        n.exports = {
            conf: {
                "key:sr": {},
                "key:c-": {panel: {fn: ["chart", "stock", "comment"], position: "#ygprice_area"}}
            }
        }
    }), require.register("smzdm_pro/source/lib/avalon.js", function (t, e, n) {
        function i() {
        }

        function r(t) {
        }

        function o(t) {
            return null == t ? String(t) : "object" == typeof t || "function" == typeof t ? Ae[xe.call(t)] || "object" : typeof t
        }

        function s(t, e, n) {
            return t = t !== +t || t % 1 ? n ? e : 0 : 0 > t ? -1 * t >= e ? 0 : t + e : t > e ? e : t
        }

        function l(t, e) {
            "string" == typeof t && (t = t.match(fe) || []);
            for (var n = {}, i = void 0 !== e ? e : 1, r = 0, o = t.length; o > r; r++)n[t[r]] = i;
            return n
        }

        function c() {
            return "avalon" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
        }

        function u(t) {
            if (t && "object" == typeof t) {
                var e = t.length, n = xe.call(t);
                if (/(Array|List|Collection|Map|Arguments)\]$/.test(n))return !0;
                if ("[object Object]" === n && +e === e && !(e % 1) && e >= 0)return !0
            }
            return !1
        }

        function p(t, e) {
            if (Array.isArray(t)) {
                var n = t.concat();
                t.length = 0;
                var i = V(t);
                return i.push.apply(i, n), i
            }
            if ("number" == typeof t.nodeType)return t;
            var r = {};
            e = e || {};
            for (var o, a = {}, s = {}, l = [], u = arguments[2] || {}, p = t.$skipArray, d = 0; o = Ee[d++];)delete t[o], s[o] = !0;
            if (Array.isArray(p))for (var o, d = 0; o = p[d++];)s[o] = !0;
            for (var d in t)f(d, t[d], e, s, a, l, u);
            r = Object.defineProperties(r, h(a));
            for (var o in s)r[o] = s[o];
            u.vmodel = r, r.$model = e, r.$events = {}, r.$id = c(), r.$accessors = a, r[ce] = [];
            for (var d in on)r[d] = on[d];
            Object.defineProperty(r, "hasOwnProperty", {
                value: function (t) {
                    return t in r.$model
                }, writable: !1, enumerable: !1, configurable: !0
            });
            for (var m, d = 0; m = l[d++];)ke[le] = m, m(), P(m), delete ke[le];
            return r
        }

        function d(t, e, n, i) {
            t.$events && on.$fire.call(t, e, n, i)
        }

        function h(t) {
            var e = {};
            for (var n in t)e[n] = {get: t[n], set: t[n], enumerable: !0, configurable: !0};
            return e
        }

        function f(t, e, n, i, r, a, s) {
            if (n[t] = e, i[t] || e && e.nodeType || "$" === t.charAt(0) && !s[t])return i[t] = e;
            var l = o(e);
            if ("function" === l)return i[t] = e;
            var c, u;
            if ("object" === l && "function" == typeof e.get && Object.keys(e).length <= 2) {
                var h = e.set, f = e.get;
                c = function (e) {
                    var i = s.vmodel, r = n[t], o = r;
                    if (!arguments.length)return avalon.openComputedCollect && P(c), e = n[t] = f.call(i), je(r, e) || (u = void 0, d(i, t, e, o)), e;
                    if (!he) {
                        if ("function" == typeof h) {
                            var a = i.$events[t];
                            i.$events[t] = [], h.call(i, e), i.$events[t] = a
                        }
                        je(u, e) || (u = e, e = n[t] = f.call(i), Ie && m(i.$id, t, e), D(c), d(i, t, e, o))
                    }
                }, a.push(c)
            } else me.test(l) ? (c = function (e) {
                var i = c.$vmodel, r = i.$model;
                if (!arguments.length)return P(i), i;
                if (!he && !je(r, e)) {
                    e = c.$vmodel = g(i, e, l);
                    var o = ze[e.$id];
                    o && o();
                    var a = s.vmodel;
                    n[t] = e.$model, D(i), d(a, t, n[t], r)
                }
            }, c.$vmodel = e.$model ? e : p(e, e), n[t] = c.$vmodel.$model) : (c = function (e) {
                var i = n[t];
                if (!arguments.length)return P(c), i;
                if (!je(i, e)) {
                    n[t] = e;
                    var r = s.vmodel;
                    Ie && m(r.$id, t, e), D(c), d(r, t, e, i)
                }
            }, n[t] = e);
            c[ce] = [], r[t] = c
        }

        function m(t, e, n) {
            var i = Re[t];
            i && i[e] && (i[e].$val = n)
        }

        function g(t, e, n) {
            if ("array" === n) {
                if (!Array.isArray(e))return t;
                var i = e.concat();
                return t.clear(), t.push.apply(t, i), t
            }
            var r = t[ce] || [];
            Re[t.$id] && (Ie--, delete Re[t.$id]);
            var o = p(e);
            return ze[o.$id] = function (t) {
                for (; t = r.shift();)!function (t) {
                    t.type && avalon.nextTick(function () {
                        t.rollback && t.rollback(), En[t.type](t, t.vmodels)
                    })
                }(t);
                delete ze[o.$id]
            }, o
        }

        function v(t) {
            for (var e in t)if (ye.call(t, e)) {
                var n = t[e];
                "function" == typeof v.plugins[e] ? v.plugins[e](n) : "object" == typeof v[e] ? avalon.mix(v[e], n) : v[e] = n
            }
            return this
        }

        function y(t) {
            return (t + "").replace(Be, "\\$&")
        }

        function x() {
            return (new XMLSerializer).serializeToString(this)
        }

        function b(t, e) {
            if (t && t.childNodes)for (var n, i = t.childNodes, r = 0; n = i[r++];)if (n.tagName) {
                var o = document.createElementNS(qe, n.tagName.toLowerCase());
                be.forEach.call(n.attributes, function (t) {
                    o.setAttribute(t.name, t.value)
                }), b(n, o), e.appendChild(o)
            }
        }

        function w(t) {
            return t.replace(/([a-z\d])([A-Z]+)/g, "$1-$2").toLowerCase()
        }

        function k(t) {
            return t.indexOf("-") < 0 && t.indexOf("_") < 0 ? t : t.replace(/[-_][^-_]/g, function (t) {
                return t.charAt(1).toUpperCase()
            })
        }

        function T(t) {
            try {
                t = "true" === t ? !0 : "false" === t ? !1 : "null" === t ? null : +t + "" === t ? +t : Xe.test(t) ? JSON.parse(t) : t
            } catch (e) {
            }
            return t
        }

        function S(t) {
            return t.window && t.document ? t : 9 === t.nodeType ? t.defaultView : !1
        }

        function C(t, e) {
            if (t.offsetWidth <= 0) {
                var n = getComputedStyle(t, null);
                if (Je.test(n.display)) {
                    var i = {node: t};
                    for (var r in Ve)i[r] = n[r], t.style[r] = Ve[r];
                    e.push(i)
                }
                var o = t.parentNode;
                o && 1 == o.nodeType && C(o, e)
            }
        }

        function _(t) {
            var e = t.tagName.toLowerCase();
            return "input" === e && /checkbox|radio/.test(t.type) ? "checked" : e
        }

        function A(t) {
            ke[le] = t, avalon.openComputedCollect = !0;
            var e = t.evaluator;
            if (e)if ("duplex" === t.type)t.handler(); else try {
                t.handler(e.apply(0, t.args), t.element, t)
            } catch (n) {
                delete t.evaluator, 3 === t.nodeType && (v.commentInterpolate ? t.element.replaceChild(ae.createComment(t.value), t.node) : t.node.data = De + t.value + Le), r("warning:evaluator of [" + t.value + "] throws error!")
            } else t();
            avalon.openComputedCollect = !1, delete ke[le]
        }

        function P(t) {
            if (ke[le]) {
                var e = t[ce];
                e && avalon.Array.ensure(e, ke[le])
            }
        }

        function D(t) {
            var e = t[ce];
            if (e && e.length)for (var n, i = we.call(arguments, 1), o = e.length; n = e[--o];) {
                var a = n.element;
                !a || On.contains(a) || Se.contains(a) ? "function" == typeof n ? n.apply(0, i) : n.getter ? n.handler.apply(n, i) : n.handler(n.evaluator.apply(0, n.args || []), a, n) : (e.splice(o, 1), r("debug: remove " + n.name))
            }
        }

        function L(t, e) {
            var n = 0 / 0, i = setInterval(function () {
                var r = t.innerHTML;
                r === n ? (clearInterval(i), e()) : n = r
            }, 15)
        }

        function O(t, e, n) {
            var i = t.getAttribute(se + "skip"), r = t.getAttributeNode(se + "important"), o = t.getAttributeNode(se + "controller");
            if ("string" != typeof i) {
                if (n = r || o) {
                    var a = Pe[n.value];
                    if (!a)return;
                    e = n === r ? [a] : [a].concat(e), t.removeAttribute(n.name), t.classList.remove(n.name), a.$events.element = t, t.addEventListener("dataavailable", function (e) {
                        "object" == typeof e.detail && t !== e.target && a.$fire.apply(a, e.detail)
                    })
                }
                E(t, e)
            }
        }

        function M(t, e) {
            for (var n = t.firstChild; n;) {
                var i = n.nextSibling, r = n.nodeType;
                1 === r ? O(n, e) : 3 === r && Oe.test(n.data) ? N(n, e) : v.commentInterpolate && 8 === r && !Oe.test(n.nodeValue) && N(n, e), n = i
            }
        }

        function N(t, e) {
            var n = [];
            if (8 === t.nodeType) {
                var i = [], r = R(t.nodeValue, i), o = {expr: !0, value: r};
                i.length && (o.filters = i);
                var a = [o]
            } else a = I(t.data);
            if (a.length) {
                for (var o, s = 0; o = a[s++];) {
                    var l = ae.createTextNode(o.value);
                    if (o.expr) {
                        var c = o.filters, u = {type: "text", node: l, nodeType: 3, value: o.value, filters: c};
                        c && -1 !== c.indexOf("html") && (avalon.Array.remove(c, "html"), u.type = "html", u.replaceNodes = [l], c.length || delete n.filters), n.push(u)
                    }
                    Ce.appendChild(l)
                }
                t.parentNode.replaceChild(Ce, t), n.length && j(n, e)
            }
        }

        function E(t, e) {
            for (var n, i, o = t.attributes, a = [], s = {}, l = 0; i = o[l++];)if (i.specified && (n = i.name.match(sn))) {
                var c = n[1], u = n[2] || "";
                if (s[i.name] = i.value, cn[c] && (u = c, c = "on"), "function" == typeof En[c]) {
                    var p = {
                        type: c,
                        param: u,
                        element: t,
                        name: n[0],
                        value: i.value,
                        priority: c in ln ? ln[c] : 10 * c.charCodeAt(0) + (Number(u) || 0)
                    };
                    "if" === c && "loop" === u && (p.priority += 100), e.length && (a.push(p), "widget" === c && (t.msData = t.msData || s))
                }
            }
            s["ms-checked"] && s["ms-duplex"] && r("warning!\u4E00\u4E2A\u5143\u7D20\u4E0A\u4E0D\u80FD\u540C\u65F6\u5B9A\u4E49ms-checked\u4E0Ems-duplex"), a.sort(function (t, e) {
                return t.priority - e.priority
            });
            var d = a[0] || {};
            switch (d.type) {
                case"if":
                case"repeat":
                case"widget":
                    j([d], e);
                    break;
                default:
                    j(a, e), !an[t.tagName] && Ne.test(t.innerHTML + t.textContent) && M(t, e)
            }
            t.patchRepeat && (t.patchRepeat(), t.patchRepeat = null)
        }

        function j(t, e) {
            for (var n, i = 0; n = t[i++];)n.vmodels = e, En[n.type](n, e), n.evaluator && n.name && n.element.removeAttribute(n.name);
            t.length = 0
        }

        function R(t, e) {
            return t.indexOf("|") > 0 && (t = t.replace(pn, "U2hvcnRDaXJjdWl0"), t = t.replace(un, function (t, n, i) {
                return e.push(n + (i || "")), ""
            }), t = t.replace(dn, "||")), t
        }

        function I(t) {
            for (var e, n, i = [], r = 0; ;) {
                if (n = t.indexOf(De, r), -1 === n)break;
                if (e = t.slice(r, n), e && i.push({
                        value: e,
                        expr: !1
                    }), r = n + De.length, n = t.indexOf(Le, r), -1 === n)break;
                if (e = t.slice(r, n)) {
                    var o = [];
                    e = R(e, o), i.push({value: e, expr: !0, filters: o.length ? o : void 0})
                }
                r = n + Le.length
            }
            return e = t.slice(r), e && i.push({value: e, expr: !1}), i
        }

        function z(t, e, n, i) {
            for (var r, o = [], a = " = " + n + ".", s = t.length; r = t[--s];)e.hasOwnProperty(r) && (o.push(r + a + r), "duplex" === i && (t.get = n + "." + r), t.splice(s, 1));
            return o
        }

        function B(t) {
            var e = {};
            return t.filter(function (t) {
                return e[t.$id] ? void 0 : (e[t.$id] = 1, !0)
            })
        }

        function H(t) {
            function e(i, r) {
                return n.push(i) > t && delete e[n.shift()], e[i] = r
            }

            var n = [];
            return e
        }

        function q(t, e, n, o) {
            var a = n.type, s = "html" === a || "text" === a ? n.filters : "", l = e.map(function (t) {
                    return t.$id.replace(Cn, "$1")
                }) + t + a + s, c = kn(t).concat(), u = [], p = [], d = [], h = "";
            e = B(e);
            for (var f = 0, m = e.length; m > f; f++)if (c.length) {
                var g = "vm" + le + "_" + f;
                p.push(g), d.push(e[f]), u.push.apply(u, z(c, e[f], g, o))
            }
            if (u.length || "duplex" !== o) {
                s && d.push(avalon.filters), n.args = d;
                var v = Tn[l];
                if (v)return void(n.evaluator = v);
                var h = u.join(", ");
                if (h && (h = "var " + h), s) {
                    t = "\nvar ret" + le + " = " + t;
                    var y, x = [];
                    x.push(t, "\r\n");
                    for (var b, f = 0; b = n.filters[f++];) {
                        var w = b.indexOf("(");
                        -1 !== w ? (y = b.slice(w + 1, b.lastIndexOf(")")).trim(), y = "," + y, b = b.slice(0, w).trim()) : y = "", x.push(" if(filters", le, ".", b, "){\n	try{\nret", le, " = filters", le, ".", b, "(ret", le, y, ")\n	}catch(e){} \n}\n")
                    }
                    t = x.join(""), t += "\nreturn ret" + le, p.push("filters" + le)
                } else {
                    if ("duplex" === a) {
                        var k = "'use strict';\nreturn function(vvv){\n	" + h + ";\n	if(!arguments.length){\n		return " + t + "\n	}\n	" + (Sn.test(t) ? t : c.get) + "= vvv;\n} ";
                        try {
                            v = Function.apply(i, p.concat(k)), n.evaluator = Tn(l, v)
                        } catch (T) {
                            r("debug: parse error," + T.message)
                        }
                        return
                    }
                    if ("on" === a) {
                        t = t.replace("(", ".call(this,"), "$event" === o && p.push(o), t = "\nreturn " + t + ";";
                        var S = t.lastIndexOf("\nreturn"), C = t.slice(0, S), _ = t.slice(S);
                        t = C + "\nif(avalon.openComputedCollect) return ;" + _
                    } else t = "\nreturn " + t + ";"
                }
                try {
                    v = Function.apply(i, p.concat("'use strict';\n" + h + t)), n.evaluator = Tn(l, v)
                } catch (T) {
                    r("debug: parse error," + T.message)
                } finally {
                    c = x = p = null
                }
            }
        }

        function W(t, e, n, i) {
            if (Array.isArray(i)) {
                var r = i.map(function (t) {
                    var n = {};
                    return t.expr ? q(t.value, e, n) || n : t.value
                });
                n.evaluator = function () {
                    for (var t, e = "", n = 0; t = r[n++];)e += "string" == typeof t ? t : t.evaluator.apply(0, t.args);
                    return e
                }, n.args = []
            } else q(t, e, n, i);
            n.evaluator && (n.handler = Nn[n.handlerName || n.type], n.evaluator.toString = function () {
                return n.type + " binding to eval(" + t + ")"
            }, A(n))
        }

        function F(t, e) {
            if (t = t.toLowerCase(), !_n[t]) {
                var n = ae.createElement(t);
                Se.appendChild(n), e = getComputedStyle(n, null).display, Se.removeChild(n), _n[t] = e
            }
            return _n[t]
        }

        function $(t, e, n) {
            var i = ae.createEvent("Events");
            i.initEvent(e, !0, !0), n && (i.detail = n), t.dispatchEvent(i)
        }

        function X() {
            this.disabled || this.oldValue === this.value || $(this, "input")
        }

        function Y() {
            for (var t = zn.length - 1; t >= 0; t--) {
                var e = zn[t];
                avalon.contains(Se, e) ? e.onTree && e.onTree() : e.msRetain || (e.offTree && e.offTree(), zn.splice(t, 1))
            }
            zn.length || clearInterval(In)
        }

        function G(t) {
            1 === zn.push(t) && (In = setInterval(Y, 30))
        }

        function U(t) {
            qn.call(this, t), t !== this.oldValue && $(this, "input")
        }

        function V(t) {
            var e = [];
            e.$id = c(), e[ce] = [], e.$model = t, e.$events = {}, e._ = p({length: t.length}), e._.$watch("length", function (t, n) {
                e.$fire("length", t, n)
            });
            for (var n in on)e[n] = on[n];
            return avalon.mix(e, Xn), e
        }

        function J(t) {
            var e = o(t);
            return me.test(e) && (t = t.$id ? t : p(t, t)), t
        }

        function Z(t) {
            for (var e, n = Yn(t), i = 0; e = n[i++];)"ms-if" == e.nodeValue && _e.appendChild(e.elem);
            for (; e = t.firstChild;)_e.appendChild(e);
            _e.innerHTML = ""
        }

        function K(t) {
            var e = Dn(this.callbackElement, this.callbackName, this.vmodels);
            if (e) {
                var n = this.parent;
                L(n, function () {
                    e.apply(n, t)
                })
            }
        }

        function Q(t, e, n, i) {
            function r() {
                if (delete Pe[a], t.group = 1, !t.fastRepeat) {
                    for (t.group = s.childNodes.length, s.parentNode.removeChild(s); s.firstChild;)e.appendChild(s.firstChild);
                    void 0 !== r.node && r.parent.insertBefore(e, r.node)
                }
            }

            var o = t.template.cloneNode(!0), a = i.$id, s = o.firstChild;
            return t.fastRepeat || (s = ae.createElement("msloop"), s.style.display = "none", s.appendChild(o)), s.setAttribute("ms-controller", a), n.push(s), e.appendChild(s), i.$outer = t.$outer, Pe[a] = i, s.patchRepeat = r
        }

        function te(t, e, n) {
            if (e.startRepeat) {
                var i = e.startRepeat, r = e.endRepeat;
                n += 1;
                for (var o = 0; n > o; o++)if (i = i.nextSibling, i == r)return r;
                return i
            }
            return t.childNodes[e.group * n] || null
        }

        function ee(t, e, n) {
            for (var i = e * (n || 1), r = Ce; --i >= 0;) {
                var o = t.nextSibling;
                if (r.appendChild(t), t = o, !t)break
            }
            return r
        }

        function ne(t, e, n) {
            var i = p({$key: t, $outer: n, $val: e}, 0, {$val: 1, $key: 1});
            return i.$id = "$proxy$with" + Math.random(), i
        }

        function ie(t, e, n, i) {
            var r, o = n.param || "el", a = {
                $remove: function () {
                    return n.getter().removeAt(r.$index)
                }, $itemName: o, $index: t, $outer: n.$outer, $first: 0 === t, $last: t === i
            };
            a[o] = e;
            for (var s = 0, l = Vn.length; l > s; s++) {
                var r = Vn[s];
                if (r.hasOwnProperty(o)) {
                    for (var s in a)r[s] = a[s];
                    return Vn.splice(s, 1), r
                }
            }
            var c = avalon.type(e);
            return ("object" === c || "function" === c) && (a.$skipArray = [o]), r = p(a, 0, Un), r.$id = "$proxy$" + n.type + Math.random(), r
        }

        function re(t) {
            var e = t.$accessors, n = t.$itemName;
            ["$index", "$last", "$first"].forEach(function (t) {
                e[t][ce].length = 0
            }), t[n][ce] && (t[n][ce].length = 0), Vn.unshift(t) > v.maxRepeatSize && Vn.pop()
        }

        function oe() {
            oi["ready!"].state = 2, ri.checkDeps(), oe = i
        }

        var ae = document, se = "ms-", le = Date.now(), ce = "$" + le, ue = this || (0, eval)("this"), pe = ue.require, de = ue.define, he = !1, fe = /[^, ]+/g, me = /^(?:object|array)$/, ge = /^\[object (Window|DOMWindow|global)\]$/, ve = Object.prototype, ye = ve.hasOwnProperty, xe = ve.toString, be = Array.prototype, we = be.slice, ke = {}, Te = ae.head, Se = ae.documentElement, Ce = ae.createDocumentFragment(), _e = ae.createElement("div"), Ae = {};
        "Boolean Number String Function Array Date RegExp Object Error".replace(fe, function (t) {
            Ae["[object " + t + "]"] = t.toLowerCase()
        }), ue.avalon = function (t) {
            return new avalon.init(t)
        }, avalon.init = function (t) {
            this[0] = this.element = t
        }, avalon.fn = avalon.prototype = avalon.init.prototype, avalon.type = o, avalon.isWindow = function (t) {
            return ge.test(xe.call(t))
        }, avalon.isPlainObject = function (t) {
            return !!t && "object" == typeof t && Object.getPrototypeOf(t) === ve
        }, avalon.mix = avalon.fn.mix = function () {
            var t, e, n, i, r, a, s = arguments[0] || {}, l = 1, c = arguments.length, u = !1;
            for ("boolean" == typeof s && (u = s, s = arguments[1] || {}, l++), "object" != typeof s && "function" !== o(s) && (s = {}), l === c && (s = this, l--); c > l; l++)if (null != (t = arguments[l]))for (e in t)n = s[e], i = t[e], s !== i && (u && i && (avalon.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, a = n && Array.isArray(n) ? n : []) : a = n && avalon.isPlainObject(n) ? n : {}, s[e] = avalon.mix(u, a, i)) : void 0 !== i && (s[e] = i));
            return s
        }, avalon.mix({
            rword: fe, subscribers: ce, version: 1.31, ui: {}, models: {}, log: r, noop: i, error: function (t, e) {
                throw new (e || Error)(t)
            }, oneObject: l, range: function (t, e, n) {
                n || (n = 1), null == e && (e = t || 0, t = 0);
                for (var i = -1, r = Math.max(0, Math.ceil((e - t) / n)), o = Array(r); ++i < r;)o[i] = t, t += n;
                return o
            }, slice: function (t, e, n) {
                return we.call(t, e, n)
            }, contains: function (t, e) {
                return t.contains(e)
            }, eventHooks: {}, bind: function (t, e, n, i) {
                var r = avalon.eventHooks, o = r[e];
                return "object" == typeof o && (e = o.type, o.deel && (n = o.deel(t, n))), t.addEventListener(e, n, !!i), n
            }, unbind: function (t, e, n, r) {
                var o = avalon.eventHooks, a = o[e];
                "object" == typeof a && (e = a.type), t.removeEventListener(e, n || i, !!r)
            }, css: function (t, e, n) {
                t instanceof avalon && (t = t[0]);
                var i = /[_-]/.test(e) ? k(e) : e;
                if (e = avalon.cssName(i) || i, void 0 === n || "boolean" == typeof n) {
                    var r = Ye[i + ":get"] || Ye["@:get"], o = r(t, e);
                    return n === !0 ? parseFloat(o) || 0 : o
                }
                if ("" === n)t.style[e] = ""; else {
                    if (null == n || n !== n)return;
                    isFinite(n) && !avalon.cssNumber[i] && (n += "px"), r = Ye[i + ":set"] || Ye["@:set"], r(t, e, n)
                }
            }, each: function (t, e) {
                if (t) {
                    var n = 0;
                    if (u(t))for (var i = t.length; i > n; n++)e(n, t[n]); else for (n in t)t.hasOwnProperty(n) && e(n, t[n])
                }
            }, getWidgetData: function (t, e) {
                var n = avalon(t).data(), i = {};
                for (var r in n)0 === r.indexOf(e) && (i[r.replace(e, "").replace(/\w/, function (t) {
                    return t.toLowerCase()
                })] = n[r]);
                return i
            }, parseJSON: JSON.parse, Array: {
                ensure: function (t, e) {
                    return -1 === t.indexOf(e) && t.push(e), t
                }, removeAt: function (t, e) {
                    return !!t.splice(e, 1).length
                }, remove: function (t, e) {
                    var n = t.indexOf(e);
                    return ~n ? avalon.Array.removeAt(t, n) : !1
                }
            }
        }), avalon.isArrayLike = u, avalon.nextTick = ue.setImmediate ? setImmediate.bind(ue) : function (t) {
            setTimeout(t, 0)
        }, Se.contains || (Node.prototype.contains = function (t) {
            return !!(16 & this.compareDocumentPosition(t))
        });
        var Pe = avalon.vmodels = {};
        avalon.define = function (t, e) {
            Pe[t] && r("warning: " + t + " \u5DF2\u7ECF\u5B58\u5728\u4E8Eavalon.vmodels\u4E2D");
            var n = {$watch: i};
            e(n);
            var o = p(n);
            return he = !0, e(o), he = !1, o.$id = t, Pe[t] = o
        };
        var De, Le, Oe, Me, Ne, Ee = String("$id,$watch,$unwatch,$fire,$events,$model,$skipArray,$accessors," + ce).match(fe), je = Object.is || function (t, e) {
                return 0 === t && 0 === e ? 1 / t === 1 / e : t !== t ? e !== e : t === e
            }, Re = {}, Ie = 0, ze = {}, Be = /[-.*+?^${}()|[\]\/\\]/g, He = {
            loader: function (t) {
                ue.define = t ? ri.define : de, ue.require = t ? ri : pe
            }, interpolate: function (t) {
                if (De = t[0], Le = t[1], De === Le)avalon.error("openTag!==closeTag", SyntaxError); else if (t + "" == "<!--,-->")v.commentInterpolate = !0; else {
                    var e = De + "test" + Le;
                    _e.innerHTML = e, _e.innerHTML !== e && _e.innerHTML.indexOf("&lt;") >= 0 && avalon.error("\u6B64\u5B9A\u754C\u7B26\u4E0D\u5408\u6CD5", SyntaxError), _e.innerHTML = ""
                }
                var n = y(De), i = y(Le);
                Oe = new RegExp(n + "(.*?)" + i), Me = new RegExp(n + "(.*?)" + i, "g"), Ne = new RegExp(n + ".*?" + i + "|\\sms-")
            }
        };
        v.debug = !0, v.plugins = He, v.plugins.interpolate(["{{", "}}"]), v.paths = {}, v.shim = {}, v.maxRepeatSize = 100, avalon.config = v;
        var qe = "http://www.w3.org/2000/svg", We = document.createElementNS(qe, "svg");
        We.innerHTML = '<Rect width="300" height="100"/>';
        var Fe = We.firstChild && "rect" === We.firstChild.tagName;
        ue.SVGElement && !Fe && Object.defineProperties(SVGElement.prototype, {
            outerHTML: {
                enumerable: !0,
                configurable: !0,
                get: x,
                set: function (t) {
                    var e = this.tagName.toLowerCase(), n = this.parentNode, i = avalon.parseHTML(t);
                    if ("svg" === e)n.insertBefore(i, this); else {
                        var r = document.createDocumentFragment();
                        b(i, r), n.insertBefore(r, this)
                    }
                    n.removeChild(this)
                }
            }, innerHTML: {
                enumerable: !0, configurable: !0, get: function () {
                    var t = this.outerHTML, e = new RegExp("<" + this.nodeName + '\\b(?:(["\'])[^"]*?(\\1)|[^>])*>', "i"), n = new RegExp("</" + this.nodeName + ">$", "i");
                    return t.replace(e, "").replace(n, "")
                }, set: function (t) {
                    avalon.clearHTML(this);
                    var e = avalon.parseHTML(t);
                    b(e, this)
                }
            }
        });
        var $e = /\S+/g;
        avalon.fn.mix({
            hasClass: function (t) {
                var e = this[0] || {};
                return 1 === e.nodeType && e.classList.contains(t)
            }, toggleClass: function (t, e) {
                var n, i, r = e, o = 0, a = t.match($e) || [], s = "boolean" == typeof e, l = this[0] || {};
                if (i = l.classList)for (; n = a[o++];)r = s ? r : !i.contains(n), i[r ? "add" : "remove"](n);
                return this
            }, attr: function (t, e) {
                return 2 === arguments.length ? (this[0].setAttribute(t, e), this) : this[0].getAttribute(t)
            }, data: function (t, e) {
                switch (t = "data-" + w(t || ""), arguments.length) {
                    case 2:
                        return this.attr(t, e), this;
                    case 1:
                        var n = this.attr(t);
                        return T(n);
                    case 0:
                        var i = {};
                        return be.forEach.call(this[0].attributes, function (e) {
                            e && (t = e.name, t.indexOf("data-") || (t = k(t.slice(5)), i[t] = T(e.value)))
                        }), i
                }
            }, removeData: function (t) {
                return t = "data-" + w(t), this[0].removeAttribute(t), this
            }, css: function (t, e) {
                if (avalon.isPlainObject(t))for (var n in t)avalon.css(this, n, t[n]); else var i = avalon.css(this, t, e);
                return void 0 !== i ? i : this
            }, position: function () {
                var t, e, n = this[0], i = {top: 0, left: 0};
                if (n)return "fixed" === this.css("position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), "HTML" !== t[0].tagName && (i = t.offset()), i.top += avalon.css(t[0], "borderTopWidth", !0), i.left += avalon.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - i.top - avalon.css(n, "marginTop", !0),
                    left: e.left - i.left - avalon.css(n, "marginLeft", !0)
                }
            }, offsetParent: function () {
                for (var t = this[0].offsetParent || Se; t && "HTML" !== t.tagName && "static" === avalon.css(t, "position");)t = t.offsetParent;
                return avalon(t || Se)
            }, bind: function (t, e, n) {
                return this[0] ? avalon.bind(this[0], t, e, n) : void 0
            }, unbind: function (t, e, n) {
                return this[0] && avalon.unbind(this[0], t, e, n), this
            }, val: function (t) {
                var e = this[0];
                if (e && 1 === e.nodeType) {
                    var n = 0 === arguments.length, i = n ? ":get" : ":set", r = Ze[_(e) + i];
                    if (r)var o = r(e, t); else {
                        if (n)return (e.value || "").replace(/\r/g, "");
                        e.value = t
                    }
                }
                return n ? o : this
            }
        }), "add,remove".replace(fe, function (t) {
            avalon.fn[t + "Class"] = function (e) {
                var n = this[0];
                return e && "string" == typeof e && n && 1 == n.nodeType && e.replace($e, function (e) {
                    n.classList[t](e)
                }), this
            }
        }), Se.dataset && (avalon.data = function (t, e) {
            var n = this[0].dataset;
            switch (arguments.length) {
                case 2:
                    return n[t] = e, this;
                case 1:
                    return e = n[t], T(e);
                case 0:
                    var i = {};
                    for (var t in n)i[t] = T(n[t]);
                    return i
            }
        });
        var Xe = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/;
        avalon.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
            avalon.fn[t] = function (n) {
                var i = this[0] || {}, r = S(i), o = "scrollTop" === t;
                return arguments.length ? void(r ? r.scrollTo(o ? avalon(r).scrollLeft() : n, o ? n : avalon(r).scrollTop()) : i[t] = n) : r ? r[e] : i[t]
            }
        });
        var Ye = avalon.cssHooks = {}, Ge = ["", "-webkit-", "-o-", "-moz-", "-ms-"], Ue = {
            "float": "cssFloat",
            background: "backgroundColor"
        };
        avalon.cssNumber = l("columnCount,order,fillOpacity,fontWeight,lineHeight,opacity,orphans,widows,zIndex,zoom"), avalon.cssName = function (t, e, n) {
            if (Ue[t])return Ue[t];
            e = e || Se.style;
            for (var i = 0, r = Ge.length; r > i; i++)if (n = k(Ge[i] + t), n in e)return Ue[t] = n;
            return null
        }, Ye["@:set"] = function (t, e, n) {
            t.style[e] = n
        }, Ye["@:get"] = function (t, e) {
            if (!t || !t.style)throw new Error("getComputedStyle\u8981\u6C42\u4F20\u5165\u4E00\u4E2A\u8282\u70B9 " + t);
            var n, i = getComputedStyle(t, null);
            return i && (n = i.getPropertyValue(e), "" === n && (n = t.style[e])), n
        }, Ye["opacity:get"] = function (t) {
            var e = Ye["@:get"](t, "opacity");
            return "" === e ? "1" : e
        }, "top,left".replace(fe, function (t) {
            Ye[t + ":get"] = function (e) {
                var n = Ye["@:get"](e, t);
                return /px$/.test(n) ? n : avalon(e).position()[t] + "px"
            }
        });
        var Ve = {position: "absolute", visibility: "hidden", display: "block"}, Je = /^(none|table(?!-c[ea]).+)/;
        "Width,Height".replace(fe, function (t) {
            var e = t.toLowerCase(), n = "client" + t, i = "scroll" + t, r = "offset" + t;
            Ye[e + ":get"] = function (e, n, i) {
                var r = "content-box";
                switch ("string" == typeof i && (r = i), n = "Width" === t ? ["Left", "Right"] : ["Top", "Bottom"], r) {
                    case"content-box":
                        return e["client" + t] - avalon.css(e, "padding" + n[0], !0) - avalon.css(e, "padding" + n[1], !0);
                    case"padding-box":
                        return e["client" + t];
                    case"border-box":
                        return e["offset" + t];
                    case"margin-box":
                        return e["offset" + t] + avalon.css(e, "margin" + n[0], !0) + avalon.css(e, "margin" + n[1], !0)
                }
            }, Ye[e + "&get"] = function (t) {
                var n = [];
                C(t, n);
                for (var i, r = Ye[e + ":get"](t), o = 0; i = n[o++];) {
                    t = i.node;
                    for (var a in i)"string" == typeof i[a] && (t.style[a] = i[a])
                }
                return r
            }, avalon.fn[e] = function (o) {
                var a = this[0];
                if (0 === arguments.length) {
                    if (a.setTimeout)return a["inner" + t];
                    if (9 === a.nodeType) {
                        var s = a.documentElement;
                        return Math.max(a.body[i], s[i], a.body[r], s[r], s[n])
                    }
                    return Ye[e + "&get"](a)
                }
                return this.css(e, o)
            }, avalon.fn["inner" + t] = function () {
                return Ye[e + ":get"](this[0], void 0, "padding-box")
            }, avalon.fn["outer" + t] = function (t) {
                return Ye[e + ":get"](this[0], void 0, t === !0 ? "margin-box" : "border-box")
            }
        }), avalon.fn.offset = function () {
            var t = this[0], e = {left: 0, top: 0};
            if (!t || !t.tagName || !t.ownerDocument)return e;
            var n = t.ownerDocument, i = n.documentElement, r = n.defaultView;
            return i.contains(t) ? (void 0 !== t.getBoundingClientRect && (e = t.getBoundingClientRect()), {
                top: e.top + r.pageYOffset - i.clientTop,
                left: e.left + r.pageXOffset - i.clientLeft
            }) : e
        };
        var Ze = {
            "select:get": function (t, e) {
                for (var n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, l = 0 > r ? s : o ? r : 0; s > l; l++)if (n = i[l], (n.selected || l === r) && !n.disabled) {
                    if (e = n.value, o)return e;
                    a.push(e)
                }
                return a
            }, "select:set": function (t, e, n) {
                e = [].concat(e);
                for (var i, r = 0; i = t.options[r++];)(i.selected = e.indexOf(i.value) >= 0) && (n = !0);
                n || (t.selectedIndex = -1)
            }
        }, Ke = /<([\w:]+)/, Qe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, tn = l("text/javascript", "text/ecmascript", "application/ecmascript", "application/javascript", "text/vbscript"), en = /<(?:tb|td|tf|th|tr|col|opt|leg|cap|area)/, nn = new function () {
            avalon.mix(this, {
                option: ae.createElement("select"),
                thead: ae.createElement("table"),
                td: ae.createElement("tr"),
                area: ae.createElement("map"),
                tr: ae.createElement("tbody"),
                col: ae.createElement("colgroup"),
                legend: ae.createElement("fieldset"),
                "*": ae.createElement("div")
            }), this.optgroup = this.option, this.tbody = this.tfoot = this.colgroup = this.caption = this.thead, this.th = this.td
        };
        avalon.clearHTML = function (t) {
            return t.textContent = "", t
        };
        var rn = ae.createElement("script");
        avalon.parseHTML = function (t) {
            if ("string" != typeof t && (t += ""), t = t.replace(Qe, "<$1></$2>").trim(), Gn.createContextualFragment && !en.test(t) && !/<script/i.test(t)) {
                var e = ae.createRange();
                return e.selectNodeContents(Se), e.createContextualFragment(t)
            }
            var n = Ce.cloneNode(!1), i = (Ke.exec(t) || ["", ""])[1].toLowerCase();
            i in nn || (i = "*");
            var r = nn[i];
            r.innerHTML = t;
            var o, a, s = r.getElementsByTagName("script");
            if (s.length)for (var l, c = 0; l = s[c++];)(!l.type || tn[l.type]) && (a = rn.cloneNode(!1), be.forEach.call(l.attributes, function (t) {
                t && (a[t.name] = t.value)
            }), a.text = l.text, l.parentNode.replaceChild(a, l));
            for (; o = r.firstChild;)n.appendChild(o);
            return n
        }, avalon.innerHTML = function (t, e) {
            if (/<script/i.test(e) || en.test(e)) {
                var n = this.parseHTML(e);
                this.clearHTML(t).appendChild(n)
            } else t.innerHTML = e
        };
        var on = {
            $watch: function (t, e) {
                if ("function" == typeof e) {
                    var n = this.$events[t];
                    n ? n.push(e) : this.$events[t] = [e]
                } else this.$events = this.$watch.backup;
                return this
            }, $unwatch: function (t, e) {
                var n = arguments.length;
                if (0 === n)this.$watch.backup = this.$events, this.$events = {}; else if (1 === n)this.$events[t] = []; else for (var i = this.$events[t] || [], r = i.length; ~--r < 0;)if (i[r] === e)return i.splice(r, 1);
                return this
            }, $fire: function (t) {
                var e = !1, n = !1;
                t.match(/^bubble!(\w+)$/) ? e = t = RegExp.$1 : t.match(/^capture!(\w+)$/) && (n = t = RegExp.$1);
                for (var i, r = this.$events, o = r[t] || [], a = r.$all || [], s = we.call(arguments, 1), l = 0; i = o[l++];)i.apply(this, s);
                for (var i, l = 0; i = a[l++];)i.apply(this, arguments);
                var c = r.element;
                if (c) {
                    var u = [t].concat(s);
                    if (e)$(c, "dataavailable", u); else if (n) {
                        var p = [];
                        for (var l in avalon.vmodels) {
                            var d = avalon.vmodels[l];
                            if (d && d.$events && d.$events.element) {
                                var h = d.$events.element;
                                avalon.contains(c, h) && c !== h && p.push(d)
                            }
                        }
                        p.forEach(function (t) {
                            t.$fire.apply(t, u)
                        })
                    }
                }
            }
        };
        avalon.scan = function (t, e) {
            t = t || Se;
            var n = e ? [].concat(e) : [];
            O(t, n)
        };
        var an = l("area,base,basefont,br,col,command,embed,hr,img,input,link,meta,param,source,track,wbr,noscript,noscript,script,style,textarea".toUpperCase()), sn = /ms-(\w+)-?(.*)/, ln = {
            "if": 10,
            repeat: 90,
            widget: 110,
            each: 1400,
            "with": 1500,
            duplex: 2e3,
            on: 3e3
        }, cn = l("animationend,blur,change,input,click,dblclick,focus,keydown,keypress,keyup,mousedown,mouseenter,mouseleave,mousemove,mouseout,mouseover,mouseup,scroll,submit"), un = /\|\s*(\w+)\s*(\([^)]*\))?/g, pn = /\|\|/g, dn = /U2hvcnRDaXJjdWl0/g, hn = /&lt;/g, fn = /&gt;/g, mn = "break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined", gn = /\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|[\s\t\n]*\.[\s\t\n]*[$\w\.]+/g, vn = /[^\w$]+/g, yn = new RegExp(["\\b" + mn.replace(/,/g, "\\b|\\b") + "\\b"].join("|"), "g"), xn = /\b\d[^,]*/g, bn = /^,+|,+$/g, wn = H(512), kn = function (t) {
            if (t = "," + t.trim(), wn[t])return wn[t];
            for (var e = t.replace(gn, "").replace(vn, ",").replace(yn, "").replace(xn, "").replace(bn, "").split(/^$|,+/), n = [], i = {}, r = 0; r < e.length; ++r) {
                var o = e[r];
                i[o] || (i[o] = n.push(o))
            }
            return wn(t, n)
        }, Tn = H(256), Sn = /\w\[.*\]|\w\.\w/, Cn = /(\$proxy\$[a-z]+)\d+$/;
        avalon.parseExprProxy = W;
        var _n = l("a,abbr,b,span,strong,em,font,i,kbd", "inline");
        avalon.mix(_n, l("div,h1,h2,h3,h4,h5,h6,section,p", "block")), avalon.parseDisplay = F;
        var An = function (t) {
            return "table-cell" == getComputedStyle(t, null).display
        }(ae.createElement("td")), Pn = /\(([^)]*)\)/;
        Te.insertAdjacentHTML("afterBegin", '<style id="avalonStyle">.avalonHide{ display: none!important }</style>');
        var Dn = function (t, e, n) {
            var i = t.getAttribute(e);
            if (i)for (var r, o = 0; r = n[o++];)if (r.hasOwnProperty(i) && "function" == typeof r[i])return r[i]
        }, Ln = avalon.templateCache = {}, On = ae.createElement("div"), Mn = /^\s+$/, Nn = avalon.bindingExecutors = {
            attr: function (t, e, n) {
                function i(t) {
                    c && (t = c.apply(e, [t].concat(s))), avalon.innerHTML(e, t), M(e, s), l && L(e, function () {
                        l.call(e)
                    })
                }

                var r = n.type, o = n.param;
                if ("css" === r)avalon(e).css(o, t); else if ("attr" === r) {
                    var a = t === !1 || null === t || void 0 === t;
                    a ? e.removeAttribute(o) : e.setAttribute(o, t)
                } else if ("include" === r && t) {
                    var s = n.vmodels, l = Dn(e, "data-include-rendered", s), c = Dn(e, "data-include-loaded", s);
                    if ("src" === n.param)if (Ln[t])i(Ln[t]); else {
                        var u = new ue.XMLHttpRequest;
                        u.onload = function () {
                            var e = u.status;
                            (e >= 200 && 300 > e || 304 === e) && i(Ln[t] = u.responseText)
                        }, u.open("GET", t, !0), u.withCredentials = !0, u.setRequestHeader("X-Requested-With", "XMLHttpRequest"), u.send(null)
                    } else {
                        var p = t && 1 == t.nodeType ? t : ae.getElementById(t);
                        avalon.nextTick(function () {
                            i(p.innerText || p.innerHTML)
                        })
                    }
                } else e[r] = t
            }, "class": function (t, e, n) {
                var i = avalon(e), r = n.type;
                if ("class" === r && n.param)i.toggleClass(n.param, !!t); else {
                    var o = n._evaluator ? !!n._evaluator.apply(e, n._args) : !0, a = n._class || t;
                    switch (r) {
                        case"class":
                            o && n.oldClass && i.removeClass(n.oldClass), i.toggleClass(a, o), n.oldClass = a;
                            break;
                        case"hover":
                        case"active":
                            if (!n.init) {
                                if ("hover" === r)var s = "mouseenter", l = "mouseleave"; else e.tabIndex = e.tabIndex || -1, s = "mousedown", l = "mouseup", i.bind("mouseleave", function () {
                                    o && i.removeClass(a)
                                });
                                i.bind(s, function () {
                                    o && i.addClass(a)
                                }), i.bind(l, function () {
                                    o && i.removeClass(a)
                                }), n.init = 1
                            }
                    }
                }
            }, data: function (t, e, n) {
                var i = "data-" + n.param;
                t && "object" == typeof t ? e[i] = t : e.setAttribute(i, String(t))
            }, checked: function (t, e, n) {
                var i = n.type;
                if ("enabled" === i)e.disabled = !t; else {
                    var r = "readonly" === i ? "readOnly" : i;
                    e[r] = !!t
                }
            }, repeat: function (t, e, n) {
                if (t) {
                    var i = this, r = i.group, o = i.startRepeat && i.startRepeat.parentNode;
                    o && (i.parent = o);
                    var a = i.parent, s = i.proxies, l = Ce.cloneNode(!1), c = [], u = {};
                    if ("del" === t || "move" === t)var p = te(a, i, e);
                    switch (t) {
                        case"add":
                            for (var d = n, h = i.getter().length - 1, f = 0, m = d.length; m > f; f++) {
                                var g = f + e, v = ie(g, d[f], i, h);
                                s.splice(g, 0, v), u = Q(i, l, c, v)
                            }
                            p = te(a, i, e), u.node = p, u.parent = a, a.insertBefore(l, p);
                            for (var y, f = 0; y = c[f++];)O(y, i.vmodels);
                            c = null;
                            break;
                        case"del":
                            for (var v, x = s.splice(e, n), f = 0; v = x[f++];)re(v);
                            Z(ee(p, r, n));
                            break;
                        case"index":
                            for (var h = s.length - 1; n = s[e]; e++)n.$index = e, n.$first = 0 === e, n.$last = e === h;
                            break;
                        case"clear":
                            if (i.startRepeat)for (; ;) {
                                var y = i.startRepeat.nextSibling;
                                if (!y || y === i.endRepeat)break;
                                l.appendChild(y)
                            } else l = a;
                            Z(l), s.length = 0;
                            break;
                        case"move":
                            var b = s.splice(e, 1)[0];
                            b && (s.splice(n, 0, b), l = ee(p, r), p = te(a, i, n), a.insertBefore(l, p));
                            break;
                        case"set":
                            var v = s[e];
                            v && (v[v.$itemName] = n);
                            break;
                        case"append":
                            var w = n, k = Dn(i.callbackElement, "data-with-sorted", i.vmodels), T = [];
                            for (var S in e)e.hasOwnProperty(S) && T.push(S);
                            if (k) {
                                var C = k.call(a, T);
                                C && Array.isArray(C) && C.length && (T = C)
                            }
                            for (var S, f = 0; S = T[f++];)u = Q(i, l, c, w[S]);
                            u.parent = a, u.node = i.endRepeat || null, a.insertBefore(l, u.node);
                            for (var n, f = 0; n = c[f++];)O(n, i.vmodels);
                            c = null
                    }
                    K.call(i, arguments)
                }
            }, html: function (t, e, n) {
                if (t = null == t ? "" : t, e || (e = n.element = n.node.parentNode), n.replaceNodes) {
                    var i, r;
                    if (11 === t.nodeType)i = t; else if (1 === t.nodeType || t.item)for (r = 1 === t.nodeType ? t.childNodes : t.item ? t : [], i = Ce.cloneNode(!0); r[0];)i.appendChild(r[0]); else i = avalon.parseHTML(t);
                    var o = avalon.slice(i.childNodes);
                    e.insertBefore(i, n.replaceNodes[0] || null);
                    for (var a, s = 0; a = n.replaceNodes[s++];)e.removeChild(a);
                    n.replaceNodes = o
                } else avalon.innerHTML(e, t);
                avalon.nextTick(function () {
                    M(e, n.vmodels)
                })
            }, "if": function (t, e, n) {
                var i = n.placehoder;
                if (t) {
                    if (!n.msInDocument) {
                        n.msInDocument = !0;
                        try {
                            i.parentNode.replaceChild(e, i)
                        } catch (o) {
                            r("debug: ms-if " + o.message)
                        }
                    }
                    Ne.test(e.outerHTML.replace(hn, "<").replace(fn, ">")) && E(e, n.vmodels)
                } else n.msInDocument && (n.msInDocument = !1, e.parentNode.replaceChild(i, e), i.elem = e, On.appendChild(e))
            }, on: function (t, e, n) {
                var r = n.evaluator, o = n.args, a = n.vmodels;
                if (t = n.hasArgs ? function (t) {
                        return r.apply(this, o.concat(t))
                    } : function (t) {
                        return r.apply(0, o).call(this, t)
                    }, e.$vmodel = a[0], e.$vmodels = a, n.param = n.param.replace(/-\d+$/, ""), "function" == typeof n.specialBind)n.specialBind(e, t); else var s = avalon.bind(e, n.param, t);
                n.rollback = function () {
                    "function" == typeof n.specialUnbind ? n.specialUnbind() : avalon.unbind(e, n.param, s)
                }, n.evaluator = n.handler = i
            }, text: function (t, e, n) {
                t = null == t ? "" : t;
                var i = n.node;
                if (3 === n.nodeType)try {
                    i.data = t
                } catch (r) {
                } else e || (e = n.element = i.parentNode), e.textContent = t
            }, visible: function (t, e, n) {
                e.style.display = t ? n.display : "none"
            }, widget: i
        }, En = avalon.bindingHandlers = {
            attr: function (t, e) {
                var n = t.value.trim(), i = !0;
                n.indexOf(De) > -1 && n.indexOf(Le) > 2 && (i = !1, Oe.test(n) && "" === RegExp.rightContext && "" === RegExp.leftContext && (i = !0, n = RegExp.$1)), t.handlerName = "attr", W(n, e, t, i ? null : I(t.value))
            }, "class": function (t, e) {
                var n, i = t.param, o = t.value;
                if (t.handlerName = "class", !i || isFinite(i)) {
                    t.param = "";
                    var a = o.replace(Me, function (t) {
                        return Math.pow(10, t.length - 1)
                    }), s = a.indexOf(":");
                    if (-1 === s)var l = o; else {
                        if (l = o.slice(0, s), n = o.slice(s + 1), q(n, e, t), !t.evaluator)return r("debug: ms-class '" + (n || "").trim() + "' \u4E0D\u5B58\u5728\u4E8EVM\u4E2D"), !1;
                        t._evaluator = t.evaluator, t._args = t.args
                    }
                    var c = Oe.test(l);
                    c || (t._class = l), W("", e, t, c ? I(l) : null)
                } else"class" === t.type && W(o, e, t)
            }, checked: function (t, e) {
                t.handlerName = "checked", W(t.value, e, t)
            }, duplex: function (t, e) {
                var n = t.element, r = n.tagName;
                if ("function" == typeof Rn[r] && (t.changed = Dn(n, "data-duplex-changed", e) || i, q(t.value, e, t, "duplex"), t.evaluator && t.args)) {
                    var o = n.form;
                    o && o.msValidate && o.msValidate(n), t.bound = function (e, i) {
                        n.addEventListener(e, i);
                        var r = t.rollback;
                        t.rollback = function () {
                            n.removeEventListener(e, i), r && r()
                        }
                    }, Rn[n.tagName](n, t.evaluator.apply(null, t.args), t)
                }
            }, repeat: function (t, e) {
                var n, i = t.type;
                q(t.value, e, t), "repeat" !== i && r("warning:\u5EFA\u8BAE\u4F7F\u7528ms-repeat\u4EE3\u66FFms-each, ms-with, ms-repeat\u53EA\u5360\u7528\u4E00\u4E2A\u6807\u7B7E\u5E76\u4E14\u6027\u80FD\u66F4\u597D");
                var a = t.callbackElement = t.parent = t.element;
                t.getter = function () {
                    return this.evaluator.apply(0, this.args || [])
                }, t.proxies = [];
                var s = !0;
                try {
                    n = t.getter(), me.test(o(n)) && (s = !1)
                } catch (l) {
                }
                var c = Ce.cloneNode(!1);
                if ("repeat" === i) {
                    var u = ae.createComment("ms-repeat-start"), p = ae.createComment("ms-repeat-end");
                    t.element = t.parent = a.parentNode, t.startRepeat = u, t.endRepeat = p, a.removeAttribute(t.name), t.parent.replaceChild(p, a), t.parent.insertBefore(u, p), c.appendChild(a)
                } else for (var d; d = a.firstChild;)3 === d.nodeType && Mn.test(d.data) ? a.removeChild(d) : c.appendChild(d);
                t.template = c, t.rollback = function () {
                    Nn.repeat.call(t, "clear");
                    var e = t.endRepeat, n = t.parent;
                    n.insertBefore(t.template, e || null), e && (n.removeChild(e), n.removeChild(t.startRepeat), t.element = t.callbackElement)
                };
                var h = t.value.split(".") || [];
                if (h.length > 1) {
                    h.pop();
                    for (var f, m = h[0], g = 0; f = e[g++];)if (f && f.hasOwnProperty(m) && f[m][ce]) {
                        f[m][ce].push(t);
                        break
                    }
                }
                if (!s) {
                    t.callbackName = "data-" + i + "-rendered", t.handler = Nn.repeat, t.$outer = {};
                    var v = "$key", y = "$val";
                    Array.isArray(n) && (v = "$first", y = "$last");
                    for (var x, g = 0; x = e[g++];)if (x.hasOwnProperty(v) && x.hasOwnProperty(y)) {
                        t.$outer = x;
                        break
                    }
                    if (d = c.firstChild, t.fastRepeat = !!d && 1 === d.nodeType && c.lastChild === d && !d.attributes["ms-controller"] && !d.attributes["ms-important"], n[ce] && n[ce].push(t), Array.isArray(n) || "each" === i)t.handler("add", 0, n); else {
                        var b = Re[n.$id];
                        if (!b) {
                            Ie++, b = Re[n.$id] = {};
                            for (var w in n)n.hasOwnProperty(w) && "hasOwnProperty" !== w && !function (t, e) {
                                b[t] = ne(t, e, {}), b[t].$watch("$val", function (e) {
                                    n[t] = e
                                })
                            }(w, n[w])
                        }
                        t.handler("append", n, b)
                    }
                }
            }, html: function (t, e) {
                W(t.value, e, t)
            }, "if": function (t, e) {
                var n = t.element;
                n.removeAttribute(t.name), t.placehoder || (t.msInDocument = t.placehoder = ae.createComment("ms-if")), t.vmodels = e, W(t.value, e, t)
            }, on: function (t, e) {
                var n = t.value, i = "$event";
                if (n.indexOf("(") > 0 && n.indexOf(")") > -1) {
                    var r = (n.match(Pn) || ["", ""])[1].trim();
                    ("" === r || "$event" === r) && (i = void 0, n = n.replace(Pn, ""))
                } else i = void 0;
                t.hasArgs = i, W(n, e, t, i)
            }, visible: function (t, e) {
                var n = t.element;
                if (!An && !Se.contains(n))var i = F(n.tagName);
                i = i || avalon(n).css("display"), t.display = "none" === i ? F(n.tagName) : i, W(t.value, e, t)
            }, widget: function (t, e) {
                var n = t.value.match(fe), r = t.element, o = n[0];
                "$" !== n[1] && n[1] || (n[1] = o + setTimeout("1")), t.value = n.join(",");
                var a = avalon.ui[o];
                if ("function" == typeof a) {
                    e = r.vmodels || e;
                    for (var s, l = n[2] || o, c = 0; s = e[c++];)if (s.hasOwnProperty(l) && "object" == typeof s[l]) {
                        var u = s;
                        break
                    }
                    if (u) {
                        var p = u[l];
                        p = p.$model || p;
                        var d = p[o + "Id"];
                        "string" == typeof d && (n[1] = d)
                    }
                    var h = avalon.getWidgetData(r, n[0]);
                    t[o + "Id"] = n[1], t[o + "Options"] = avalon.mix({}, a.defaults, p || {}, h), r.removeAttribute("ms-widget");
                    var f = a(r, t, e) || {};
                    if (t.evaluator = i, r.msData["ms-widget-id"] = f.$id || "", f.hasOwnProperty("$init") && f.$init(), f.hasOwnProperty("$remove")) {
                        var m = function () {
                            f.$remove(), r.msData = {}, delete Pe[f.$id]
                        };
                        jn ? r.addEventListener("DOMNodeRemoved", function (t) {
                            t.target === this && !this.msRetain && (ue.chrome ? "INPUT" === this.tagName && 1 === this.relatedNode.nodeType : 1) && m()
                        }) : (r.offTree = m, G(r))
                    }
                } else e.length && (r.vmodels = e)
            }
        }, jn = ae.implementation.hasFeature("MutationEvents", "2.0");
        "hover,active".replace(fe, function (t) {
            En[t] = En["class"]
        }), "with,each".replace(fe, function (t) {
            En[t] = En.repeat
        }), "disabled,enabled,readonly,selected".replace(fe, function (t) {
            En[t] = En.checked
        }), En.data = En.text = En.html, "title,alt,src,value,css,include,href".replace(fe, function (t) {
            En[t] = En.attr
        });
        var Rn = En.duplex;
        Rn.INPUT = function (t, e, n) {
            var i = n.param, r = n.bound, o = t.type, a = avalon(t), s = !1, l = !1, c = function (t) {
                s = !0, n.changed.call(this, t)
            }, u = function () {
                l = !0
            }, p = function () {
                l = !1
            }, d = function () {
                if (!l) {
                    var n = t.oldValue = t.value;
                    a.data("duplex-observe") !== !1 && (e(n), c.call(t, n))
                }
            };
            if (n.handler = function () {
                    var n = e();
                    n !== t.value && (t.value = n)
                }, "checkbox" === o && "radio" === i && (o = "radio"), "radio" === o)n.handler = function () {
                t.oldChecked = t.checked = /bool|text/.test(i) ? e() + "" === t.value : !!e()
            }, d = function () {
                if (a.data("duplex-observe") !== !1) {
                    var n = t.value;
                    "text" === i ? e(n) : "bool" === i ? (n = "true" === n, e(n)) : (n = !t.oldChecked, e(n), t.checked = n), c.call(t, n)
                }
            }, r(i ? "change" : "mousedown", d); else if ("checkbox" === o)d = function () {
                if (a.data("duplex-observe") !== !1) {
                    var n = t.checked ? "ensure" : "remove", i = e();
                    Array.isArray(i) ? avalon.Array[n](i, t.value) : avalon.error("ms-duplex\u4F4D\u4E8Echeckbox\u65F6\u8981\u6C42\u5BF9\u5E94\u4E00\u4E2A\u6570\u7EC4"), c.call(t, i)
                }
            }, n.handler = function () {
                var n = [].concat(e());
                t.checked = n.indexOf(t.value) >= 0
            }, r("change", d); else {
                var h = t.attributes["data-duplex-event"] || t.attributes["data-event"] || {};
                h = h.value, "change" === h ? r("change", d) : (r("input", d), r("compositionstart", u), r("compositionend", p))
            }
            t.oldValue = t.value, t.onTree = X, Bn(t), A(n);
            var f = setTimeout(function () {
                s || c.call(t, t.value), clearTimeout(f)
            }, 31)
        };
        var In, zn = [], Bn = i;
        try {
            var Hn = HTMLInputElement.prototype, qn = Object.getOwnPropertyDescriptor(Hn, "value").set;
            Object.defineProperty(Hn, "value", {set: U, configurable: !0})
        } catch (Wn) {
            Bn = G
        }
        Rn.SELECT = function (t, e, n) {
            function i() {
                if (r.data("duplex-observe") !== !1) {
                    var i = r.val();
                    i + "" !== t.oldValue && (e(i), t.oldValue = i + ""), n.changed.call(t, i)
                }
            }

            var r = avalon(t);
            n.handler = function () {
                var n = e();
                n = n && n.$model || n, n = Array.isArray(n) ? n.map(String) : n + "", n + "" !== t.oldValue && (r.val(n), t.oldValue = n + "")
            }, n.bound("change", i);
            var o = 0 / 0, a = setInterval(function () {
                var e = t.innerHTML;
                e === o ? (clearInterval(a), A(n)) : o = e
            }, 20)
        }, Rn.TEXTAREA = Rn.INPUT;
        var Fn = avalon.eventHooks;
        "onmouseenter"in Se || avalon.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (t, e) {
            Fn[t] = {
                type: e, deel: function (e, n) {
                    return function (i) {
                        var r = i.relatedTarget;
                        return r && (r === e || 16 & e.compareDocumentPosition(r)) ? void 0 : (delete i.type, i.type = t, n.call(e, i))
                    }
                }
            }
        }), avalon.each({AnimationEvent: "animationend", WebKitAnimationEvent: "webkitAnimationEnd"}, function (t, e) {
            ue[t] && !Fn.animationend && (Fn.animationend = {type: e})
        }), void 0 === document.onmousewheel && (Fn.mousewheel = {
            type: "DOMMouseScroll", deel: function (t, e) {
                return function (n) {
                    n.wheelDelta = n.detail > 0 ? -120 : 120, Object.defineProperty(n, "type", {value: "mousewheel"}), e.call(t, n)
                }
            }
        });
        var $n = be.splice, Xn = {
            _splice: $n, _add: function (t, e) {
                var n = this.length;
                e = "number" == typeof e ? e : n;
                for (var i = [], r = 0, o = t.length; o > r; r++)i[r] = J(t[r]);
                return $n.apply(this, [e, 0].concat(i)), D(this, "add", e, i), this._stopFireLength ? void 0 : this._.length = this.length
            }, _del: function (t, e) {
                var n = this._splice(t, e);
                return n.length && (D(this, "del", t, e), this._stopFireLength || (this._.length = this.length)), n
            }, push: function () {
                be.push.apply(this.$model, arguments);
                var t = this._add(arguments);
                return D(this, "index", t > 2 ? t - 2 : 0), t
            }, pushArray: function (t) {
                return this.push.apply(this, t)
            }, unshift: function () {
                be.unshift.apply(this.$model, arguments);
                var t = this._add(arguments, 0);
                return D(this, "index", arguments.length), t
            }, shift: function () {
                var t = this.$model.shift();
                return this._del(0, 1), D(this, "index", 0), t
            }, pop: function () {
                var t = this.$model.pop();
                return this._del(this.length - 1, 1), t
            }, splice: function (t) {
                t = s(t, this.length);
                var e, n = $n.apply(this.$model, arguments), i = [];
                return this._stopFireLength = !0, n.length && (i = this._del(t, n.length), e = !0), arguments.length > 2 && (this._add(we.call(arguments, 2), t), e = !0), this._stopFireLength = !1, this._.length = this.length, e && D(this, "index", 0), i
            }, contains: function (t) {
                return -1 !== this.indexOf(t)
            }, size: function () {
                return this._.length
            }, remove: function (t) {
                return this.removeAt(this.indexOf(t))
            }, removeAt: function (t) {
                return t >= 0 ? this.splice(t, 1) : []
            }, clear: function () {
                return this.$model.length = this.length = this._.length = 0, D(this, "clear", 0), this
            }, removeAll: function (t) {
                if (Array.isArray(t))t.forEach(function (t) {
                    this.remove(t)
                }, this); else if ("function" == typeof t)for (var e = this.length - 1; e >= 0; e--) {
                    var n = this[e];
                    t(n, e) && this.splice(e, 1)
                } else this.clear()
            }, ensure: function (t) {
                return this.contains(t) || this.push(t), this
            }, set: function (t, e) {
                if (t >= 0) {
                    var n = o(e);
                    e && e.$model && (e = e.$model);
                    var i = this[t];
                    if ("object" === n)for (var r in e)i.hasOwnProperty(r) && (i[r] = e[r]); else"array" === n ? i.clear().push.apply(i, e) : i !== e && (this[t] = e, this.$model[t] = e, D(this, "set", t, e))
                }
                return this
            }
        };
        "sort,reverse".replace(fe, function (t) {
            Xn[t] = function () {
                var e = this.$model, n = e.slice(0), i = !1;
                be[t].apply(e, arguments);
                for (var r = 0, o = n.length; o > r; r++) {
                    var a = e[r], s = n[r];
                    if (!je(a, s)) {
                        i = !0;
                        var l = n.indexOf(a, r), c = this._splice(l, 1)[0], u = n.splice(l, 1)[0];
                        this._splice(r, 0, c), n.splice(r, 0, u), D(this, "move", l, r)
                    }
                }
                return n = void 0, i && D(this, "index", 0), this
            }
        });
        var Yn = function (t) {
            for (var e, n = ae.createTreeWalker(t, NodeFilter.SHOW_COMMENT, null, null), i = []; e = n.nextNode();)i.push(e);
            return i
        }, Gn = ae.createRange(), Un = l("$index,$first,$last"), Vn = [], Jn = /<script[^>]*>([\S\s]*?)<\/script\s*>/gim, Zn = /^<(a|img)\s/i, Kn = /\s+(on[^=\s]+)(?:=("[^"]*"|'[^']*'|[^\s>]+))?/g, Qn = /<\w+\b(?:(["'])[^"]*?(\1)|[^>])*>/gi, ti = /\s+(src|href)(?:=("javascript[^"]*"|'javascript[^']*'))?/gi, ei = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, ni = /([^\#-~| |!])/g, ii = avalon.filters = {
            uppercase: function (t) {
                return t.toUpperCase()
            }, lowercase: function (t) {
                return t.toLowerCase()
            }, truncate: function (t, e, n) {
                return e = e || 30, n = void 0 === n ? "..." : n, t.length > e ? t.slice(0, e - n.length) + n : String(t)
            }, sanitize: ue.toStaticHTML ? toStaticHTML.bind(ue) : function (t) {
                return t.replace(Jn, "").replace(Qn, function (t) {
                    return Zn.test(t) && (t = t.replace(ti, " $1=''")), t.replace(Kn, " ").replace(/\s+/g, " ")
                })
            }, camelize: k, escape: function (t) {
                return String(t).replace(/&/g, "&amp;").replace(ei, function (t) {
                    var e = t.charCodeAt(0), n = t.charCodeAt(1);
                    return "&#" + (1024 * (e - 55296) + (n - 56320) + 65536) + ";"
                }).replace(ni, function (t) {
                    return "&#" + t.charCodeAt(0) + ";"
                }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }, currency: function (t, e) {
                return e = e || "\uFFE5", e + avalon.filters.number(t)
            }, number: function (t, e, n, i) {
                t = (t + "").replace(/[^0-9+\-Ee.]/g, "");
                var r = isFinite(+t) ? +t : 0, o = isFinite(+e) ? Math.abs(e) : 0, a = i || ",", s = n || ".", l = "", c = function (t, e) {
                    var n = Math.pow(10, e);
                    return "" + Math.round(t * n) / n
                };
                return l = (o ? c(r, o) : "" + Math.round(r)).split("."), l[0].length > 3 && (l[0] = l[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, a)), (l[1] || "").length < o && (l[1] = l[1] || "", l[1] += new Array(o - l[1].length + 1).join("0")), l.join(s)
            }
        };
        !new function () {
            function t(t) {
                return parseInt(t, 10)
            }

            function e(t, e, n) {
                var i = "";
                for (0 > t && (i = "-", t = -t), t = "" + t; t.length < e;)t = "0" + t;
                return n && (t = t.substr(t.length - e)), i + t
            }

            function n(t, n, i, r) {
                return function (o) {
                    var a = o["get" + t]();
                    return (i > 0 || a > -i) && (a += i), 0 === a && -12 === i && (a = 12), e(a, n, r)
                }
            }

            function i(t, e) {
                return function (n, i) {
                    var r = n["get" + t](), o = (e ? "SHORT" + t : t).toUpperCase();
                    return i[o][r]
                }
            }

            function r(t) {
                var n = -1 * t.getTimezoneOffset(), i = n >= 0 ? "+" : "";
                return i += e(Math[n > 0 ? "floor" : "ceil"](n / 60), 2) + e(Math.abs(n % 60), 2)
            }

            function a(t, e) {
                return t.getHours() < 12 ? e.AMPMS[0] : e.AMPMS[1]
            }

            function s(e) {
                var n;
                if (n = e.match(p)) {
                    var i = new Date(0), r = 0, o = 0, a = n[8] ? i.setUTCFullYear : i.setFullYear, s = n[8] ? i.setUTCHours : i.setHours;
                    n[9] && (r = t(n[9] + n[10]), o = t(n[9] + n[11])), a.call(i, t(n[1]), t(n[2]) - 1, t(n[3]));
                    var l = t(n[4] || 0) - r, c = t(n[5] || 0) - o, u = t(n[6] || 0), d = Math.round(1e3 * parseFloat("0." + (n[7] || 0)));
                    return s.call(i, l, c, u, d), i
                }
                return e
            }

            var l = {
                yyyy: n("FullYear", 4),
                yy: n("FullYear", 2, 0, !0),
                y: n("FullYear", 1),
                MMMM: i("Month"),
                MMM: i("Month", !0),
                MM: n("Month", 2, 1),
                M: n("Month", 1, 1),
                dd: n("Date", 2),
                d: n("Date", 1),
                HH: n("Hours", 2),
                H: n("Hours", 1),
                hh: n("Hours", 2, -12),
                h: n("Hours", 1, -12),
                mm: n("Minutes", 2),
                m: n("Minutes", 1),
                ss: n("Seconds", 2),
                s: n("Seconds", 1),
                sss: n("Milliseconds", 3),
                EEEE: i("Day"),
                EEE: i("Day", !0),
                a: a,
                Z: r
            }, c = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/, u = /^\d+$/, p = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/, d = /^(\d+)-(\d+)-(\d{4})$/, h = /^(\d+)\s+(\d+),(\d{4})$/;
            ii.date = function (e, n) {
                var i, r, a = ii.date.locate, p = "", f = [];
                if (n = n || "mediumDate", n = a[n] || n, "string" == typeof e) {
                    if (u.test(e))e = t(e); else {
                        var m = e.trim();
                        (m.match(d) || m.match(h)) && (e = RegExp.$3 + "/" + RegExp.$1 + "/" + RegExp.$2), e = s(e)
                    }
                    e = new Date(e)
                }
                if ("number" == typeof e && (e = new Date(e)), "date" === o(e)) {
                    for (; n;)r = c.exec(n), r ? (f = f.concat(r.slice(1)), n = f.pop()) : (f.push(n), n = null);
                    return f.forEach(function (t) {
                        i = l[t], p += i ? i(e, a) : t.replace(/(^'|'$)/g, "").replace(/''/g, "'")
                    }), p
                }
            };
            var f = {
                AMPMS: {0: "\u4E0A\u5348", 1: "\u4E0B\u5348"},
                DAY: {
                    0: "\u661F\u671F\u65E5",
                    1: "\u661F\u671F\u4E00",
                    2: "\u661F\u671F\u4E8C",
                    3: "\u661F\u671F\u4E09",
                    4: "\u661F\u671F\u56DB",
                    5: "\u661F\u671F\u4E94",
                    6: "\u661F\u671F\u516D"
                },
                MONTH: {
                    0: "1\u6708",
                    1: "2\u6708",
                    2: "3\u6708",
                    3: "4\u6708",
                    4: "5\u6708",
                    5: "6\u6708",
                    6: "7\u6708",
                    7: "8\u6708",
                    8: "9\u6708",
                    9: "10\u6708",
                    10: "11\u6708",
                    11: "12\u6708"
                },
                SHORTDAY: {
                    0: "\u5468\u65E5",
                    1: "\u5468\u4E00",
                    2: "\u5468\u4E8C",
                    3: "\u5468\u4E09",
                    4: "\u5468\u56DB",
                    5: "\u5468\u4E94",
                    6: "\u5468\u516D"
                },
                fullDate: "y\u5E74M\u6708d\u65E5EEEE",
                longDate: "y\u5E74M\u6708d\u65E5",
                medium: "yyyy-M-d ah:mm:ss",
                mediumDate: "yyyy-M-d",
                mediumTime: "ah:mm:ss",
                "short": "yy-M-d ah:mm",
                shortDate: "yy-M-d",
                shortTime: "ah:mm"
            };
            f.SHORTMONTH = f.MONTH, ii.date.locate = f
        };
        var ri, oi = avalon.modules = {"ready!": {exports: avalon}, avalon: {exports: avalon, state: 2}};
        !new function () {
            function t(t) {
                return (t || "").replace(/[?#].*/, "")
            }

            function e(t) {
                var e;
                try {
                    a.b.c()
                } catch (n) {
                    e = n.stack
                }
                if (e)return e = e.split(/[@ ]/g).pop(), e = "(" === e[0] ? e.slice(1, -1) : e.replace(/\s/, ""), e.replace(/(:\d+)?:\d+$/i, "");
                for (var i, r = (t ? ae : Te).getElementsByTagName("script"), o = r.length; i = r[--o];)if ((t || i.className === ce) && "interactive" === i.readyState)return i.className = i.src
            }

            function n(t, e) {
                for (var i in t)if ("\u53F8\u5F92\u6B63\u7F8E" === t[i] && 2 !== oi[i].state && (i === e || n(oi[i].deps, e)))return !0
            }

            function o() {
                t:for (var t, e = d.length; t = d[--e];) {
                    var n = oi[t], i = n.deps;
                    for (var r in i)if (ye.call(i, r) && 2 !== oi[r].state)continue t;
                    2 !== n.state && (d.splice(e, 1), u(n.id, n.args, n.factory), o())
                }
            }

            function s(e, n) {
                var i = t(e.src);
                return e.onload = e.onerror = null, n ? (setTimeout(function () {
                    Te.removeChild(e)
                }), void r("debug: \u52A0\u8F7D " + i + " \u5931\u8D25" + n + " " + !oi[i].state)) : !0
            }

            function l(e, n, r, o) {
                if ("ready!" === e || oi[e] && 2 === oi[e].state)return e;
                var a;
                if (e = e.replace(/^\w+!/, function (t) {
                        return a = t.slice(0, -1), ""
                    }), a = a || "js", a = He[a] || i, "object" == typeof v.shim[e] && (o = v.shim[e]), v.paths[e] && (e = v.paths[e]), /^(\w+)(\d)?:.*/.test(e))r = e; else {
                    n = n.substr(0, n.lastIndexOf("/"));
                    var s = e.charAt(0);
                    if ("." !== s && "/" !== s)r = p + e; else if ("./" === e.slice(0, 2))r = n + e.slice(1);
                    else if (".." === e.slice(0, 2))for (r = n + "/" + e; g.test(r);)r = r.replace(g, ""); else"/" === s ? r = n + e : avalon.error("\u4E0D\u7B26\u5408\u6A21\u5757\u6807\u8BC6\u89C4\u5219: " + e)
                }
                e = t(r);
                var l = a.ext;
                return l && e.slice(0 - l.length) !== l && (r += l), v.nocache && (r += (-1 === r.indexOf("?") ? "?" : "&") + Date.now()), a(r, o)
            }

            function c(t, e, n) {
                var i = ae.createElement("script");
                i.className = ce, i.onload = function () {
                    var i = h.pop();
                    i && i.delay(e), n && n(), r("debug: \u5DF2\u6210\u529F\u52A0\u8F7D " + t)
                }, i.onerror = function () {
                    s(i, !0)
                }, i.src = t, Te.appendChild(i), r("debug: \u6B63\u51C6\u5907\u52A0\u8F7D " + t)
            }

            function u(t, e, n) {
                for (var i, r = 0, o = []; i = e[r++];)o.push(oi[i].exports);
                var a = Object(oi[t]), s = n.apply(ue, o);
                return a.state = 2, void 0 !== s && (oi[t].exports = s), s
            }

            var p, d = [], h = [];
            He.js = function (e, n) {
                var i = t(e);
                return oi[i] || (oi[i] = {id: i, exports: {}}, n ? ri(n.deps || "", function () {
                    c(e, i, function () {
                        oi[i].state = 2, n.exports && (oi[i].exports = "function" == typeof n.exports ? n.exports() : ue[n.exports]), ri.checkDeps()
                    })
                }) : c(e, i)), i
            }, He.css = function (t) {
                var e = t.replace(/(#.+|\W)/g, "");
                if (!ae.getElementById(e)) {
                    var n = ae.createElement("link");
                    n.rel = "stylesheet", n.href = t, n.id = e, Te.insertBefore(n, Te.firstChild)
                }
            }, He.css.ext = ".css", He.js.ext = ".js", He.text = function (t) {
                var e = new XMLHttpRequest, n = t.replace(/[?#].*/, "");
                return oi[n] = {}, e.onload = function () {
                    oi[n].state = 2, oi[n].exports = e.responseText, ri.checkDeps()
                }, e.onerror = function () {
                    avalon.error(t + " \u5BF9\u5E94\u8D44\u6E90\u4E0D\u5B58\u5728\u6216\u6CA1\u6709\u5F00\u542F CORS")
                }, e.open("GET", t, !0), e.withCredentials = !0, e.setRequestHeader("X-Requested-With", "XMLHttpRequest"), e.send(), n
            }, "import"in ae.createElement("link") && (He.text = function (t) {
                function e(e, n) {
                    n && avalon.error(t + "\u5BF9\u5E94\u8D44\u6E90\u4E0D\u5B58\u5728\u6216\u6CA1\u6709\u5F00\u542F CORS"), setTimeout(function () {
                        Te.removeChild(i)
                    })
                }

                var n = t.replace(/[?#].*/, "");
                oi[n] = {};
                var i = ae.createElement("link");
                return i.rel = "import", i.href = t, i.onload = function () {
                    oi[n].state = 2;
                    var t = this["import"];
                    t && (oi[n].exports = t.documentElement.outerHTML, avalon.require.checkDeps()), e(0, t)
                }, i.onerror = e, Te.appendChild(i), n
            });
            var f = e(!0);
            f || (f = avalon.slice(document.scripts).pop().src);
            var m = t(f);
            p = v.base = m.slice(0, m.lastIndexOf("/") + 1);
            var g = /\/\w+\/\.\./;
            ri = avalon.require = function (t, e, n) {
                var i = {}, r = [], a = 0, s = 0, c = n || "callback" + setTimeout("1");
                n = n || p, String(t).replace(fe, function (t) {
                    var e = l(t, n);
                    e && (a++, oi[e] && 2 === oi[e].state && s++, i[e] || (r.push(e), i[e] = "\u53F8\u5F92\u6B63\u7F8E"))
                }), oi[c] = {id: c, factory: e, deps: i, args: r, state: 1}, a === s ? u(c, r, e) : d.unshift(c), o()
            }, ri.define = function (i, r, o) {
                var a = avalon.slice(arguments);
                if ("string" == typeof i)var s = a.shift();
                "function" == typeof a[0] && a.unshift([]);
                var l = oi[s] && oi[s].state >= 1 ? s : t(e());
                !oi[l] && s && (oi[l] = {id: l, factory: o, state: 1}), o = a[1], o.id = s, o.delay = function (t) {
                    a.push(t);
                    var e = !0;
                    try {
                        e = n(oi[t].deps, t)
                    } catch (i) {
                    }
                    e && avalon.error(t + "\u6A21\u5757\u4E0E\u4E4B\u524D\u7684\u6A21\u5757\u5B58\u5728\u5FAA\u73AF\u4F9D\u8D56\uFF0C\u8BF7\u4E0D\u8981\u76F4\u63A5\u7528script\u6807\u7B7E\u5F15\u5165" + t + "\u6A21\u5757"), delete o.delay, ri.apply(null, a)
                }, l ? o.delay(l, a) : h.push(o)
            }, ri.define.amd = oi, ri.config = v, ri.checkDeps = o
        }, "complete" === ae.readyState ? setTimeout(oe) : (ae.addEventListener("DOMContentLoaded", oe), ue.addEventListener("load", oe)), avalon.ready = function (t) {
            ri("ready!", t)
        }, avalon.config({loader: !1});
        var ai = "[ms-controller],[ms-important]";
        avalon.ready(function () {
            for (var t, e = ae.querySelectorAll(ai), n = [], i = 0; t = e[i++];)if (!t.__root__) {
                for (var r, o = t.querySelectorAll(ai), a = 0; r = o[a++];)r.__root__ = !0;
                n.push(t)
            }
            for (var t, i = 0; t = n[i++];)avalon.scan(t)
        }), n.exports = avalon
    }), require.register("smzdm_pro/source/lib/jquery.js", function (t, e, n) {
        !function (t, e) {
            "object" == typeof n && "object" == typeof n.exports ? n.exports = t.document ? e(t, !0) : function (t) {
                if (!t.document)throw new Error("jQuery requires a window with a document");
                return e(t)
            } : e(t)
        }("undefined" != typeof window ? window : this, function (t, e) {
            function n(t) {
                var e = t.length, n = Q.type(t);
                return "function" === n || Q.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
            }

            function i(t, e, n) {
                if (Q.isFunction(e))return Q.grep(t, function (t, i) {
                    return !!e.call(t, i, t) !== n
                });
                if (e.nodeType)return Q.grep(t, function (t) {
                    return t === e !== n
                });
                if ("string" == typeof e) {
                    if (se.test(e))return Q.filter(e, t, n);
                    e = Q.filter(e, t)
                }
                return Q.grep(t, function (t) {
                    return Y.call(e, t) >= 0 !== n
                })
            }

            function r(t, e) {
                for (; (t = t[e]) && 1 !== t.nodeType;);
                return t
            }

            function o(t) {
                var e = fe[t] = {};
                return Q.each(t.match(he) || [], function (t, n) {
                    e[n] = !0
                }), e
            }

            function a() {
                Z.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1), Q.ready()
            }

            function s() {
                Object.defineProperty(this.cache = {}, 0, {
                    get: function () {
                        return {}
                    }
                }), this.expando = Q.expando + Math.random()
            }

            function l(t, e, n) {
                var i;
                if (void 0 === n && 1 === t.nodeType)if (i = "data-" + e.replace(be, "-$1").toLowerCase(), n = t.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : xe.test(n) ? Q.parseJSON(n) : n
                    } catch (r) {
                    }
                    ye.set(t, e, n)
                } else n = void 0;
                return n
            }

            function c() {
                return !0
            }

            function u() {
                return !1
            }

            function p() {
                try {
                    return Z.activeElement
                } catch (t) {
                }
            }

            function d(t, e) {
                return Q.nodeName(t, "table") && Q.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
            }

            function h(t) {
                return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
            }

            function f(t) {
                var e = Re.exec(t.type);
                return e ? t.type = e[1] : t.removeAttribute("type"), t
            }

            function m(t, e) {
                for (var n = 0, i = t.length; i > n; n++)ve.set(t[n], "globalEval", !e || ve.get(e[n], "globalEval"))
            }

            function g(t, e) {
                var n, i, r, o, a, s, l, c;
                if (1 === e.nodeType) {
                    if (ve.hasData(t) && (o = ve.access(t), a = ve.set(e, o), c = o.events)) {
                        delete a.handle, a.events = {};
                        for (r in c)for (n = 0, i = c[r].length; i > n; n++)Q.event.add(e, r, c[r][n])
                    }
                    ye.hasData(t) && (s = ye.access(t), l = Q.extend({}, s), ye.set(e, l))
                }
            }

            function v(t, e) {
                var n = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
                return void 0 === e || e && Q.nodeName(t, e) ? Q.merge([t], n) : n
            }

            function y(t, e) {
                var n = e.nodeName.toLowerCase();
                "input" === n && Se.test(t.type) ? e.checked = t.checked : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
            }

            function x(e, n) {
                var i, r = Q(n.createElement(e)).appendTo(n.body), o = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(r[0])) ? i.display : Q.css(r[0], "display");
                return r.detach(), o
            }

            function b(t) {
                var e = Z, n = He[t];
                return n || (n = x(t, e), "none" !== n && n || (Be = (Be || Q("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Be[0].contentDocument, e.write(), e.close(), n = x(t, e), Be.detach()), He[t] = n), n
            }

            function w(t, e, n) {
                var i, r, o, a, s = t.style;
                return n = n || Fe(t), n && (a = n.getPropertyValue(e) || n[e]), n && ("" !== a || Q.contains(t.ownerDocument, t) || (a = Q.style(t, e)), We.test(a) && qe.test(e) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 !== a ? a + "" : a
            }

            function k(t, e) {
                return {
                    get: function () {
                        return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                    }
                }
            }

            function T(t, e) {
                if (e in t)return e;
                for (var n = e[0].toUpperCase() + e.slice(1), i = e, r = Ve.length; r--;)if (e = Ve[r] + n, e in t)return e;
                return i
            }

            function S(t, e, n) {
                var i = Xe.exec(e);
                return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
            }

            function C(t, e, n, i, r) {
                for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > o; o += 2)"margin" === n && (a += Q.css(t, n + ke[o], !0, r)), i ? ("content" === n && (a -= Q.css(t, "padding" + ke[o], !0, r)), "margin" !== n && (a -= Q.css(t, "border" + ke[o] + "Width", !0, r))) : (a += Q.css(t, "padding" + ke[o], !0, r), "padding" !== n && (a += Q.css(t, "border" + ke[o] + "Width", !0, r)));
                return a
            }

            function _(t, e, n) {
                var i = !0, r = "width" === e ? t.offsetWidth : t.offsetHeight, o = Fe(t), a = "border-box" === Q.css(t, "boxSizing", !1, o);
                if (0 >= r || null == r) {
                    if (r = w(t, e, o), (0 > r || null == r) && (r = t.style[e]), We.test(r))return r;
                    i = a && (J.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
                }
                return r + C(t, e, n || (a ? "border" : "content"), i, o) + "px"
            }

            function A(t, e) {
                for (var n, i, r, o = [], a = 0, s = t.length; s > a; a++)i = t[a], i.style && (o[a] = ve.get(i, "olddisplay"), n = i.style.display, e ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Te(i) && (o[a] = ve.access(i, "olddisplay", b(i.nodeName)))) : (r = Te(i), "none" === n && r || ve.set(i, "olddisplay", r ? n : Q.css(i, "display"))));
                for (a = 0; s > a; a++)i = t[a], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[a] || "" : "none"));
                return t
            }

            function P(t, e, n, i, r) {
                return new P.prototype.init(t, e, n, i, r)
            }

            function D() {
                return setTimeout(function () {
                    Je = void 0
                }), Je = Q.now()
            }

            function L(t, e) {
                var n, i = 0, r = {height: t};
                for (e = e ? 1 : 0; 4 > i; i += 2 - e)n = ke[i], r["margin" + n] = r["padding" + n] = t;
                return e && (r.opacity = r.width = t), r
            }

            function O(t, e, n) {
                for (var i, r = (nn[e] || []).concat(nn["*"]), o = 0, a = r.length; a > o; o++)if (i = r[o].call(n, e, t))return i
            }

            function M(t, e, n) {
                var i, r, o, a, s, l, c, u, p = this, d = {}, h = t.style, f = t.nodeType && Te(t), m = ve.get(t, "fxshow");
                n.queue || (s = Q._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
                    s.unqueued || l()
                }), s.unqueued++, p.always(function () {
                    p.always(function () {
                        s.unqueued--, Q.queue(t, "fx").length || s.empty.fire()
                    })
                })), 1 === t.nodeType && ("height"in e || "width"in e) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = Q.css(t, "display"), u = "none" === c ? ve.get(t, "olddisplay") || b(t.nodeName) : c, "inline" === u && "none" === Q.css(t, "float") && (h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                }));
                for (i in e)if (r = e[i], Ke.exec(r)) {
                    if (delete e[i], o = o || "toggle" === r, r === (f ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[i])continue;
                        f = !0
                    }
                    d[i] = m && m[i] || Q.style(t, i)
                } else c = void 0;
                if (Q.isEmptyObject(d))"inline" === ("none" === c ? b(t.nodeName) : c) && (h.display = c); else {
                    m ? "hidden"in m && (f = m.hidden) : m = ve.access(t, "fxshow", {}), o && (m.hidden = !f), f ? Q(t).show() : p.done(function () {
                        Q(t).hide()
                    }), p.done(function () {
                        var e;
                        ve.remove(t, "fxshow");
                        for (e in d)Q.style(t, e, d[e])
                    });
                    for (i in d)a = O(f ? m[i] : 0, i, p), i in m || (m[i] = a.start, f && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
                }
            }

            function N(t, e) {
                var n, i, r, o, a;
                for (n in t)if (i = Q.camelCase(n), r = e[i], o = t[n], Q.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), a = Q.cssHooks[i], a && "expand"in a) {
                    o = a.expand(o), delete t[i];
                    for (n in o)n in t || (t[n] = o[n], e[n] = r)
                } else e[i] = r
            }

            function E(t, e, n) {
                var i, r, o = 0, a = en.length, s = Q.Deferred().always(function () {
                    delete l.elem
                }), l = function () {
                    if (r)return !1;
                    for (var e = Je || D(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, o = 1 - i, a = 0, l = c.tweens.length; l > a; a++)c.tweens[a].run(o);
                    return s.notifyWith(t, [c, o, n]), 1 > o && l ? n : (s.resolveWith(t, [c]), !1)
                }, c = s.promise({
                    elem: t,
                    props: Q.extend({}, e),
                    opts: Q.extend(!0, {specialEasing: {}}, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: Je || D(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (e, n) {
                        var i = Q.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                        return c.tweens.push(i), i
                    },
                    stop: function (e) {
                        var n = 0, i = e ? c.tweens.length : 0;
                        if (r)return this;
                        for (r = !0; i > n; n++)c.tweens[n].run(1);
                        return e ? s.resolveWith(t, [c, e]) : s.rejectWith(t, [c, e]), this
                    }
                }), u = c.props;
                for (N(u, c.opts.specialEasing); a > o; o++)if (i = en[o].call(c, t, u, c.opts))return i;
                return Q.map(u, O, c), Q.isFunction(c.opts.start) && c.opts.start.call(t, c), Q.fx.timer(Q.extend(l, {
                    elem: t,
                    anim: c,
                    queue: c.opts.queue
                })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
            }

            function j(t) {
                return function (e, n) {
                    "string" != typeof e && (n = e, e = "*");
                    var i, r = 0, o = e.toLowerCase().match(he) || [];
                    if (Q.isFunction(n))for (; i = o[r++];)"+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
                }
            }

            function R(t, e, n, i) {
                function r(s) {
                    var l;
                    return o[s] = !0, Q.each(t[s] || [], function (t, s) {
                        var c = s(e, n, i);
                        return "string" != typeof c || a || o[c] ? a ? !(l = c) : void 0 : (e.dataTypes.unshift(c), r(c), !1)
                    }), l
                }

                var o = {}, a = t === kn;
                return r(e.dataTypes[0]) || !o["*"] && r("*")
            }

            function I(t, e) {
                var n, i, r = Q.ajaxSettings.flatOptions || {};
                for (n in e)void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
                return i && Q.extend(!0, t, i), t
            }

            function z(t, e, n) {
                for (var i, r, o, a, s = t.contents, l = t.dataTypes; "*" === l[0];)l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                if (i)for (r in s)if (s[r] && s[r].test(i)) {
                    l.unshift(r);
                    break
                }
                if (l[0]in n)o = l[0]; else {
                    for (r in n) {
                        if (!l[0] || t.converters[r + " " + l[0]]) {
                            o = r;
                            break
                        }
                        a || (a = r)
                    }
                    o = o || a
                }
                return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
            }

            function B(t, e, n, i) {
                var r, o, a, s, l, c = {}, u = t.dataTypes.slice();
                if (u[1])for (a in t.converters)c[a.toLowerCase()] = t.converters[a];
                for (o = u.shift(); o;)if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = u.shift())if ("*" === o)o = l; else if ("*" !== l && l !== o) {
                    if (a = c[l + " " + o] || c["* " + o], !a)for (r in c)if (s = r.split(" "), s[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                        a === !0 ? a = c[r] : c[r] !== !0 && (o = s[0], u.unshift(s[1]));
                        break
                    }
                    if (a !== !0)if (a && t["throws"])e = a(e); else try {
                        e = a(e)
                    } catch (p) {
                        return {state: "parsererror", error: a ? p : "No conversion from " + l + " to " + o}
                    }
                }
                return {state: "success", data: e}
            }

            function H(t, e, n, i) {
                var r;
                if (Q.isArray(e))Q.each(e, function (e, r) {
                    n || _n.test(t) ? i(t, r) : H(t + "[" + ("object" == typeof r ? e : "") + "]", r, n, i)
                }); else if (n || "object" !== Q.type(e))i(t, e); else for (r in e)H(t + "[" + r + "]", e[r], n, i)
            }

            function q(t) {
                return Q.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
            }

            var W = [], F = W.slice, $ = W.concat, X = W.push, Y = W.indexOf, G = {}, U = G.toString, V = G.hasOwnProperty, J = {}, Z = t.document, K = "2.1.1", Q = function (t, e) {
                return new Q.fn.init(t, e)
            }, te = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ee = /^-ms-/, ne = /-([\da-z])/gi, ie = function (t, e) {
                return e.toUpperCase()
            };
            Q.fn = Q.prototype = {
                jquery: K, constructor: Q, selector: "", length: 0, toArray: function () {
                    return F.call(this)
                }, get: function (t) {
                    return null != t ? 0 > t ? this[t + this.length] : this[t] : F.call(this)
                }, pushStack: function (t) {
                    var e = Q.merge(this.constructor(), t);
                    return e.prevObject = this, e.context = this.context, e
                }, each: function (t, e) {
                    return Q.each(this, t, e)
                }, map: function (t) {
                    return this.pushStack(Q.map(this, function (e, n) {
                        return t.call(e, n, e)
                    }))
                }, slice: function () {
                    return this.pushStack(F.apply(this, arguments))
                }, first: function () {
                    return this.eq(0)
                }, last: function () {
                    return this.eq(-1)
                }, eq: function (t) {
                    var e = this.length, n = +t + (0 > t ? e : 0);
                    return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
                }, end: function () {
                    return this.prevObject || this.constructor(null)
                }, push: X, sort: W.sort, splice: W.splice
            }, Q.extend = Q.fn.extend = function () {
                var t, e, n, i, r, o, a = arguments[0] || {}, s = 1, l = arguments.length, c = !1;
                for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || Q.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)if (null != (t = arguments[s]))for (e in t)n = a[e], i = t[e], a !== i && (c && i && (Q.isPlainObject(i) || (r = Q.isArray(i))) ? (r ? (r = !1, o = n && Q.isArray(n) ? n : []) : o = n && Q.isPlainObject(n) ? n : {}, a[e] = Q.extend(c, o, i)) : void 0 !== i && (a[e] = i));
                return a
            }, Q.extend({
                expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
                    throw new Error(t)
                }, noop: function () {
                }, isFunction: function (t) {
                    return "function" === Q.type(t)
                }, isArray: Array.isArray, isWindow: function (t) {
                    return null != t && t === t.window
                }, isNumeric: function (t) {
                    return !Q.isArray(t) && t - parseFloat(t) >= 0
                }, isPlainObject: function (t) {
                    return "object" !== Q.type(t) || t.nodeType || Q.isWindow(t) ? !1 : t.constructor && !V.call(t.constructor.prototype, "isPrototypeOf") ? !1 : !0
                }, isEmptyObject: function (t) {
                    var e;
                    for (e in t)return !1;
                    return !0
                }, type: function (t) {
                    return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? G[U.call(t)] || "object" : typeof t
                }, globalEval: function (t) {
                    var e, n = eval;
                    t = Q.trim(t), t && (1 === t.indexOf("use strict") ? (e = Z.createElement("script"), e.text = t, Z.head.appendChild(e).parentNode.removeChild(e)) : n(t))
                }, camelCase: function (t) {
                    return t.replace(ee, "ms-").replace(ne, ie)
                }, nodeName: function (t, e) {
                    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
                }, each: function (t, e, i) {
                    var r, o = 0, a = t.length, s = n(t);
                    if (i) {
                        if (s)for (; a > o && (r = e.apply(t[o], i), r !== !1); o++); else for (o in t)if (r = e.apply(t[o], i), r === !1)break
                    } else if (s)for (; a > o && (r = e.call(t[o], o, t[o]), r !== !1); o++); else for (o in t)if (r = e.call(t[o], o, t[o]), r === !1)break;
                    return t
                }, trim: function (t) {
                    return null == t ? "" : (t + "").replace(te, "")
                }, makeArray: function (t, e) {
                    var i = e || [];
                    return null != t && (n(Object(t)) ? Q.merge(i, "string" == typeof t ? [t] : t) : X.call(i, t)), i
                }, inArray: function (t, e, n) {
                    return null == e ? -1 : Y.call(e, t, n)
                }, merge: function (t, e) {
                    for (var n = +e.length, i = 0, r = t.length; n > i; i++)t[r++] = e[i];
                    return t.length = r, t
                }, grep: function (t, e, n) {
                    for (var i, r = [], o = 0, a = t.length, s = !n; a > o; o++)i = !e(t[o], o), i !== s && r.push(t[o]);
                    return r
                }, map: function (t, e, i) {
                    var r, o = 0, a = t.length, s = n(t), l = [];
                    if (s)for (; a > o; o++)r = e(t[o], o, i), null != r && l.push(r); else for (o in t)r = e(t[o], o, i), null != r && l.push(r);
                    return $.apply([], l)
                }, guid: 1, proxy: function (t, e) {
                    var n, i, r;
                    return "string" == typeof e && (n = t[e], e = t, t = n), Q.isFunction(t) ? (i = F.call(arguments, 2), r = function () {
                        return t.apply(e || this, i.concat(F.call(arguments)))
                    }, r.guid = t.guid = t.guid || Q.guid++, r) : void 0
                }, now: Date.now, support: J
            }), Q.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
                G["[object " + e + "]"] = e.toLowerCase()
            });
            var re = function (t) {
                function e(t, e, n, i) {
                    var r, o, a, s, l, c, p, h, f, m;
                    if ((e ? e.ownerDocument || e : H) !== M && O(e), e = e || M, n = n || [], !t || "string" != typeof t)return n;
                    if (1 !== (s = e.nodeType) && 9 !== s)return [];
                    if (E && !i) {
                        if (r = ye.exec(t))if (a = r[1]) {
                            if (9 === s) {
                                if (o = e.getElementById(a), !o || !o.parentNode)return n;
                                if (o.id === a)return n.push(o), n
                            } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(a)) && z(e, o) && o.id === a)return n.push(o), n
                        } else {
                            if (r[2])return Q.apply(n, e.getElementsByTagName(t)), n;
                            if ((a = r[3]) && w.getElementsByClassName && e.getElementsByClassName)return Q.apply(n, e.getElementsByClassName(a)), n
                        }
                        if (w.qsa && (!j || !j.test(t))) {
                            if (h = p = B, f = e, m = 9 === s && t, 1 === s && "object" !== e.nodeName.toLowerCase()) {
                                for (c = C(t), (p = e.getAttribute("id")) ? h = p.replace(be, "\\$&") : e.setAttribute("id", h), h = "[id='" + h + "'] ", l = c.length; l--;)c[l] = h + d(c[l]);
                                f = xe.test(t) && u(e.parentNode) || e, m = c.join(",")
                            }
                            if (m)try {
                                return Q.apply(n, f.querySelectorAll(m)), n
                            } catch (g) {
                            } finally {
                                p || e.removeAttribute("id")
                            }
                        }
                    }
                    return A(t.replace(le, "$1"), e, n, i)
                }

                function n() {
                    function t(n, i) {
                        return e.push(n + " ") > k.cacheLength && delete t[e.shift()], t[n + " "] = i
                    }

                    var e = [];
                    return t
                }

                function i(t) {
                    return t[B] = !0, t
                }

                function r(t) {
                    var e = M.createElement("div");
                    try {
                        return !!t(e)
                    } catch (n) {
                        return !1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), e = null
                    }
                }

                function o(t, e) {
                    for (var n = t.split("|"), i = t.length; i--;)k.attrHandle[n[i]] = e
                }

                function a(t, e) {
                    var n = e && t, i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || U) - (~t.sourceIndex || U);
                    if (i)return i;
                    if (n)for (; n = n.nextSibling;)if (n === e)return -1;
                    return t ? 1 : -1
                }

                function s(t) {
                    return function (e) {
                        var n = e.nodeName.toLowerCase();
                        return "input" === n && e.type === t
                    }
                }

                function l(t) {
                    return function (e) {
                        var n = e.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && e.type === t
                    }
                }

                function c(t) {
                    return i(function (e) {
                        return e = +e, i(function (n, i) {
                            for (var r, o = t([], n.length, e), a = o.length; a--;)n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                        })
                    })
                }

                function u(t) {
                    return t && typeof t.getElementsByTagName !== G && t
                }

                function p() {
                }

                function d(t) {
                    for (var e = 0, n = t.length, i = ""; n > e; e++)i += t[e].value;
                    return i
                }

                function h(t, e, n) {
                    var i = e.dir, r = n && "parentNode" === i, o = W++;
                    return e.first ? function (e, n, o) {
                        for (; e = e[i];)if (1 === e.nodeType || r)return t(e, n, o)
                    } : function (e, n, a) {
                        var s, l, c = [q, o];
                        if (a) {
                            for (; e = e[i];)if ((1 === e.nodeType || r) && t(e, n, a))return !0
                        } else for (; e = e[i];)if (1 === e.nodeType || r) {
                            if (l = e[B] || (e[B] = {}), (s = l[i]) && s[0] === q && s[1] === o)return c[2] = s[2];
                            if (l[i] = c, c[2] = t(e, n, a))return !0
                        }
                    }
                }

                function f(t) {
                    return t.length > 1 ? function (e, n, i) {
                        for (var r = t.length; r--;)if (!t[r](e, n, i))return !1;
                        return !0
                    } : t[0]
                }

                function m(t, n, i) {
                    for (var r = 0, o = n.length; o > r; r++)e(t, n[r], i);
                    return i
                }

                function g(t, e, n, i, r) {
                    for (var o, a = [], s = 0, l = t.length, c = null != e; l > s; s++)(o = t[s]) && (!n || n(o, i, r)) && (a.push(o), c && e.push(s));
                    return a
                }

                function v(t, e, n, r, o, a) {
                    return r && !r[B] && (r = v(r)), o && !o[B] && (o = v(o, a)), i(function (i, a, s, l) {
                        var c, u, p, d = [], h = [], f = a.length, v = i || m(e || "*", s.nodeType ? [s] : s, []), y = !t || !i && e ? v : g(v, d, t, s, l), x = n ? o || (i ? t : f || r) ? [] : a : y;
                        if (n && n(y, x, s, l), r)for (c = g(x, h), r(c, [], s, l), u = c.length; u--;)(p = c[u]) && (x[h[u]] = !(y[h[u]] = p));
                        if (i) {
                            if (o || t) {
                                if (o) {
                                    for (c = [], u = x.length; u--;)(p = x[u]) && c.push(y[u] = p);
                                    o(null, x = [], c, l)
                                }
                                for (u = x.length; u--;)(p = x[u]) && (c = o ? ee.call(i, p) : d[u]) > -1 && (i[c] = !(a[c] = p))
                            }
                        } else x = g(x === a ? x.splice(f, x.length) : x), o ? o(null, a, x, l) : Q.apply(a, x)
                    })
                }

                function y(t) {
                    for (var e, n, i, r = t.length, o = k.relative[t[0].type], a = o || k.relative[" "], s = o ? 1 : 0, l = h(function (t) {
                        return t === e
                    }, a, !0), c = h(function (t) {
                        return ee.call(e, t) > -1
                    }, a, !0), u = [function (t, n, i) {
                        return !o && (i || n !== P) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i))
                    }]; r > s; s++)if (n = k.relative[t[s].type])u = [h(f(u), n)]; else {
                        if (n = k.filter[t[s].type].apply(null, t[s].matches), n[B]) {
                            for (i = ++s; r > i && !k.relative[t[i].type]; i++);
                            return v(s > 1 && f(u), s > 1 && d(t.slice(0, s - 1).concat({value: " " === t[s - 2].type ? "*" : ""})).replace(le, "$1"), n, i > s && y(t.slice(s, i)), r > i && y(t = t.slice(i)), r > i && d(t))
                        }
                        u.push(n)
                    }
                    return f(u)
                }

                function x(t, n) {
                    var r = n.length > 0, o = t.length > 0, a = function (i, a, s, l, c) {
                        var u, p, d, h = 0, f = "0", m = i && [], v = [], y = P, x = i || o && k.find.TAG("*", c), b = q += null == y ? 1 : Math.random() || .1, w = x.length;
                        for (c && (P = a !== M && a); f !== w && null != (u = x[f]); f++) {
                            if (o && u) {
                                for (p = 0; d = t[p++];)if (d(u, a, s)) {
                                    l.push(u);
                                    break
                                }
                                c && (q = b)
                            }
                            r && ((u = !d && u) && h--, i && m.push(u))
                        }
                        if (h += f, r && f !== h) {
                            for (p = 0; d = n[p++];)d(m, v, a, s);
                            if (i) {
                                if (h > 0)for (; f--;)m[f] || v[f] || (v[f] = Z.call(l));
                                v = g(v)
                            }
                            Q.apply(l, v), c && !i && v.length > 0 && h + n.length > 1 && e.uniqueSort(l)
                        }
                        return c && (q = b, P = y), m
                    };
                    return r ? i(a) : a
                }

                var b, w, k, T, S, C, _, A, P, D, L, O, M, N, E, j, R, I, z, B = "sizzle" + -new Date, H = t.document, q = 0, W = 0, F = n(), $ = n(), X = n(), Y = function (t, e) {
                    return t === e && (L = !0), 0
                }, G = "undefined", U = 1 << 31, V = {}.hasOwnProperty, J = [], Z = J.pop, K = J.push, Q = J.push, te = J.slice, ee = J.indexOf || function (t) {
                        for (var e = 0, n = this.length; n > e; e++)if (this[e] === t)return e;
                        return -1
                    }, ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ie = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", oe = re.replace("w", "w#"), ae = "\\[" + ie + "*(" + re + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ie + "*\\]", se = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ae + ")*)|.*)\\)|)", le = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"), ce = new RegExp("^" + ie + "*," + ie + "*"), ue = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"), pe = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"), de = new RegExp(se), he = new RegExp("^" + oe + "$"), fe = {
                    ID: new RegExp("^#(" + re + ")"),
                    CLASS: new RegExp("^\\.(" + re + ")"),
                    TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + ae),
                    PSEUDO: new RegExp("^" + se),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + ne + ")$", "i"),
                    needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
                }, me = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, xe = /[+~]/, be = /'|\\/g, we = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"), ke = function (t, e, n) {
                    var i = "0x" + e - 65536;
                    return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                };
                try {
                    Q.apply(J = te.call(H.childNodes), H.childNodes), J[H.childNodes.length].nodeType
                } catch (Te) {
                    Q = {
                        apply: J.length ? function (t, e) {
                            K.apply(t, te.call(e))
                        } : function (t, e) {
                            for (var n = t.length, i = 0; t[n++] = e[i++];);
                            t.length = n - 1
                        }
                    }
                }
                w = e.support = {}, S = e.isXML = function (t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return e ? "HTML" !== e.nodeName : !1
                }, O = e.setDocument = function (t) {
                    var e, n = t ? t.ownerDocument || t : H, i = n.defaultView;
                    return n !== M && 9 === n.nodeType && n.documentElement ? (M = n, N = n.documentElement, E = !S(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function () {
                        O()
                    }, !1) : i.attachEvent && i.attachEvent("onunload", function () {
                        O()
                    })), w.attributes = r(function (t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), w.getElementsByTagName = r(function (t) {
                        return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
                    }), w.getElementsByClassName = ve.test(n.getElementsByClassName) && r(function (t) {
                            return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
                        }), w.getById = r(function (t) {
                        return N.appendChild(t).id = B, !n.getElementsByName || !n.getElementsByName(B).length
                    }), w.getById ? (k.find.ID = function (t, e) {
                        if (typeof e.getElementById !== G && E) {
                            var n = e.getElementById(t);
                            return n && n.parentNode ? [n] : []
                        }
                    }, k.filter.ID = function (t) {
                        var e = t.replace(we, ke);
                        return function (t) {
                            return t.getAttribute("id") === e
                        }
                    }) : (delete k.find.ID, k.filter.ID = function (t) {
                        var e = t.replace(we, ke);
                        return function (t) {
                            var n = typeof t.getAttributeNode !== G && t.getAttributeNode("id");
                            return n && n.value === e
                        }
                    }), k.find.TAG = w.getElementsByTagName ? function (t, e) {
                        return typeof e.getElementsByTagName !== G ? e.getElementsByTagName(t) : void 0
                    } : function (t, e) {
                        var n, i = [], r = 0, o = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; n = o[r++];)1 === n.nodeType && i.push(n);
                            return i
                        }
                        return o
                    }, k.find.CLASS = w.getElementsByClassName && function (t, e) {
                            return typeof e.getElementsByClassName !== G && E ? e.getElementsByClassName(t) : void 0
                        }, R = [], j = [], (w.qsa = ve.test(n.querySelectorAll)) && (r(function (t) {
                        t.innerHTML = "<select msallowclip=''><option selected=''></option></select>", t.querySelectorAll("[msallowclip^='']").length && j.push("[*^$]=" + ie + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || j.push("\\[" + ie + "*(?:value|" + ne + ")"), t.querySelectorAll(":checked").length || j.push(":checked")
                    }), r(function (t) {
                        var e = n.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && j.push("name" + ie + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || j.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), j.push(",.*:")
                    })), (w.matchesSelector = ve.test(I = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && r(function (t) {
                        w.disconnectedMatch = I.call(t, "div"), I.call(t, "[s!='']:x"), R.push("!=", se)
                    }), j = j.length && new RegExp(j.join("|")), R = R.length && new RegExp(R.join("|")), e = ve.test(N.compareDocumentPosition), z = e || ve.test(N.contains) ? function (t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t, i = e && e.parentNode;
                        return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                    } : function (t, e) {
                        if (e)for (; e = e.parentNode;)if (e === t)return !0;
                        return !1
                    }, Y = e ? function (t, e) {
                        if (t === e)return L = !0, 0;
                        var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !w.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === H && z(H, t) ? -1 : e === n || e.ownerDocument === H && z(H, e) ? 1 : D ? ee.call(D, t) - ee.call(D, e) : 0 : 4 & i ? -1 : 1)
                    } : function (t, e) {
                        if (t === e)return L = !0, 0;
                        var i, r = 0, o = t.parentNode, s = e.parentNode, l = [t], c = [e];
                        if (!o || !s)return t === n ? -1 : e === n ? 1 : o ? -1 : s ? 1 : D ? ee.call(D, t) - ee.call(D, e) : 0;
                        if (o === s)return a(t, e);
                        for (i = t; i = i.parentNode;)l.unshift(i);
                        for (i = e; i = i.parentNode;)c.unshift(i);
                        for (; l[r] === c[r];)r++;
                        return r ? a(l[r], c[r]) : l[r] === H ? -1 : c[r] === H ? 1 : 0
                    }, n) : M
                }, e.matches = function (t, n) {
                    return e(t, null, null, n)
                }, e.matchesSelector = function (t, n) {
                    if ((t.ownerDocument || t) !== M && O(t), n = n.replace(pe, "='$1']"), !(!w.matchesSelector || !E || R && R.test(n) || j && j.test(n)))try {
                        var i = I.call(t, n);
                        if (i || w.disconnectedMatch || t.document && 11 !== t.document.nodeType)return i
                    } catch (r) {
                    }
                    return e(n, M, null, [t]).length > 0
                }, e.contains = function (t, e) {
                    return (t.ownerDocument || t) !== M && O(t), z(t, e)
                }, e.attr = function (t, e) {
                    (t.ownerDocument || t) !== M && O(t);
                    var n = k.attrHandle[e.toLowerCase()], i = n && V.call(k.attrHandle, e.toLowerCase()) ? n(t, e, !E) : void 0;
                    return void 0 !== i ? i : w.attributes || !E ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
                }, e.error = function (t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, e.uniqueSort = function (t) {
                    var e, n = [], i = 0, r = 0;
                    if (L = !w.detectDuplicates, D = !w.sortStable && t.slice(0), t.sort(Y), L) {
                        for (; e = t[r++];)e === t[r] && (i = n.push(r));
                        for (; i--;)t.splice(n[i], 1)
                    }
                    return D = null, t
                }, T = e.getText = function (t) {
                    var e, n = "", i = 0, r = t.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof t.textContent)return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling)n += T(t)
                        } else if (3 === r || 4 === r)return t.nodeValue
                    } else for (; e = t[i++];)n += T(e);
                    return n
                }, k = e.selectors = {
                    cacheLength: 50,
                    createPseudo: i,
                    match: fe,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {dir: "parentNode", first: !0},
                        " ": {dir: "parentNode"},
                        "+": {dir: "previousSibling", first: !0},
                        "~": {dir: "previousSibling"}
                    },
                    preFilter: {
                        ATTR: function (t) {
                            return t[1] = t[1].replace(we, ke), t[3] = (t[3] || t[4] || t[5] || "").replace(we, ke), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        }, CHILD: function (t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                        }, PSEUDO: function (t) {
                            var e, n = !t[6] && t[2];
                            return fe.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && de.test(n) && (e = C(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (t) {
                            var e = t.replace(we, ke).toLowerCase();
                            return "*" === t ? function () {
                                return !0
                            } : function (t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        }, CLASS: function (t) {
                            var e = F[t + " "];
                            return e || (e = new RegExp("(^|" + ie + ")" + t + "(" + ie + "|$)")) && F(t, function (t) {
                                    return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== G && t.getAttribute("class") || "")
                                })
                        }, ATTR: function (t, n, i) {
                            return function (r) {
                                var o = e.attr(r, t);
                                return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                            }
                        }, CHILD: function (t, e, n, i, r) {
                            var o = "nth" !== t.slice(0, 3), a = "last" !== t.slice(-4), s = "of-type" === e;
                            return 1 === i && 0 === r ? function (t) {
                                return !!t.parentNode
                            } : function (e, n, l) {
                                var c, u, p, d, h, f, m = o !== a ? "nextSibling" : "previousSibling", g = e.parentNode, v = s && e.nodeName.toLowerCase(), y = !l && !s;
                                if (g) {
                                    if (o) {
                                        for (; m;) {
                                            for (p = e; p = p[m];)if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType)return !1;
                                            f = m = "only" === t && !f && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (f = [a ? g.firstChild : g.lastChild], a && y) {
                                        for (u = g[B] || (g[B] = {}), c = u[t] || [], h = c[0] === q && c[1], d = c[0] === q && c[2], p = h && g.childNodes[h]; p = ++h && p && p[m] || (d = h = 0) || f.pop();)if (1 === p.nodeType && ++d && p === e) {
                                            u[t] = [q, h, d];
                                            break
                                        }
                                    } else if (y && (c = (e[B] || (e[B] = {}))[t]) && c[0] === q)d = c[1]; else for (; (p = ++h && p && p[m] || (d = h = 0) || f.pop()) && ((s ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++d || (y && ((p[B] || (p[B] = {}))[t] = [q, d]), p !== e)););
                                    return d -= r, d === i || d % i === 0 && d / i >= 0
                                }
                            }
                        }, PSEUDO: function (t, n) {
                            var r, o = k.pseudos[t] || k.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                            return o[B] ? o(n) : o.length > 1 ? (r = [t, t, "", n], k.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function (t, e) {
                                for (var i, r = o(t, n), a = r.length; a--;)i = ee.call(t, r[a]), t[i] = !(e[i] = r[a])
                            }) : function (t) {
                                return o(t, 0, r)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: i(function (t) {
                            var e = [], n = [], r = _(t.replace(le, "$1"));
                            return r[B] ? i(function (t, e, n, i) {
                                for (var o, a = r(t, null, i, []), s = t.length; s--;)(o = a[s]) && (t[s] = !(e[s] = o))
                            }) : function (t, i, o) {
                                return e[0] = t, r(e, null, o, n), !n.pop()
                            }
                        }), has: i(function (t) {
                            return function (n) {
                                return e(t, n).length > 0
                            }
                        }), contains: i(function (t) {
                            return function (e) {
                                return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                            }
                        }), lang: i(function (t) {
                            return he.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(we, ke).toLowerCase(), function (e) {
                                var n;
                                do if (n = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                        }), target: function (e) {
                            var n = t.location && t.location.hash;
                            return n && n.slice(1) === e.id
                        }, root: function (t) {
                            return t === N
                        }, focus: function (t) {
                            return t === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        }, enabled: function (t) {
                            return t.disabled === !1
                        }, disabled: function (t) {
                            return t.disabled === !0
                        }, checked: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        }, selected: function (t) {
                            return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                        }, empty: function (t) {
                            for (t = t.firstChild; t; t = t.nextSibling)if (t.nodeType < 6)return !1;
                            return !0
                        }, parent: function (t) {
                            return !k.pseudos.empty(t)
                        }, header: function (t) {
                            return ge.test(t.nodeName)
                        }, input: function (t) {
                            return me.test(t.nodeName)
                        }, button: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        }, text: function (t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        }, first: c(function () {
                            return [0]
                        }), last: c(function (t, e) {
                            return [e - 1]
                        }), eq: c(function (t, e, n) {
                            return [0 > n ? n + e : n]
                        }), even: c(function (t, e) {
                            for (var n = 0; e > n; n += 2)t.push(n);
                            return t
                        }), odd: c(function (t, e) {
                            for (var n = 1; e > n; n += 2)t.push(n);
                            return t
                        }), lt: c(function (t, e, n) {
                            for (var i = 0 > n ? n + e : n; --i >= 0;)t.push(i);
                            return t
                        }), gt: c(function (t, e, n) {
                            for (var i = 0 > n ? n + e : n; ++i < e;)t.push(i);
                            return t
                        })
                    }
                }, k.pseudos.nth = k.pseudos.eq;
                for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})k.pseudos[b] = s(b);
                for (b in{submit: !0, reset: !0})k.pseudos[b] = l(b);
                return p.prototype = k.filters = k.pseudos, k.setFilters = new p, C = e.tokenize = function (t, n) {
                    var i, r, o, a, s, l, c, u = $[t + " "];
                    if (u)return n ? 0 : u.slice(0);
                    for (s = t, l = [], c = k.preFilter; s;) {
                        (!i || (r = ce.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(o = [])), i = !1, (r = ue.exec(s)) && (i = r.shift(), o.push({
                            value: i,
                            type: r[0].replace(le, " ")
                        }), s = s.slice(i.length));
                        for (a in k.filter)!(r = fe[a].exec(s)) || c[a] && !(r = c[a](r)) || (i = r.shift(), o.push({
                            value: i,
                            type: a,
                            matches: r
                        }), s = s.slice(i.length));
                        if (!i)break
                    }
                    return n ? s.length : s ? e.error(t) : $(t, l).slice(0)
                }, _ = e.compile = function (t, e) {
                    var n, i = [], r = [], o = X[t + " "];
                    if (!o) {
                        for (e || (e = C(t)), n = e.length; n--;)o = y(e[n]), o[B] ? i.push(o) : r.push(o);
                        o = X(t, x(r, i)), o.selector = t
                    }
                    return o
                }, A = e.select = function (t, e, n, i) {
                    var r, o, a, s, l, c = "function" == typeof t && t, p = !i && C(t = c.selector || t);
                    if (n = n || [], 1 === p.length) {
                        if (o = p[0] = p[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === e.nodeType && E && k.relative[o[1].type]) {
                            if (e = (k.find.ID(a.matches[0].replace(we, ke), e) || [])[0], !e)return n;
                            c && (e = e.parentNode), t = t.slice(o.shift().value.length)
                        }
                        for (r = fe.needsContext.test(t) ? 0 : o.length; r-- && (a = o[r], !k.relative[s = a.type]);)if ((l = k.find[s]) && (i = l(a.matches[0].replace(we, ke), xe.test(o[0].type) && u(e.parentNode) || e))) {
                            if (o.splice(r, 1), t = i.length && d(o), !t)return Q.apply(n, i), n;
                            break
                        }
                    }
                    return (c || _(t, p))(i, e, !E, n, xe.test(t) && u(e.parentNode) || e), n
                }, w.sortStable = B.split("").sort(Y).join("") === B, w.detectDuplicates = !!L, O(), w.sortDetached = r(function (t) {
                    return 1 & t.compareDocumentPosition(M.createElement("div"))
                }), r(function (t) {
                    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                }) || o("type|href|height|width", function (t, e, n) {
                    return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                }), w.attributes && r(function (t) {
                    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                }) || o("value", function (t, e, n) {
                    return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
                }), r(function (t) {
                    return null == t.getAttribute("disabled")
                }) || o(ne, function (t, e, n) {
                    var i;
                    return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
                }), e
            }(t);
            Q.find = re, Q.expr = re.selectors, Q.expr[":"] = Q.expr.pseudos, Q.unique = re.uniqueSort, Q.text = re.getText, Q.isXMLDoc = re.isXML, Q.contains = re.contains;
            var oe = Q.expr.match.needsContext, ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, se = /^.[^:#\[\.,]*$/;
            Q.filter = function (t, e, n) {
                var i = e[0];
                return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? Q.find.matchesSelector(i, t) ? [i] : [] : Q.find.matches(t, Q.grep(e, function (t) {
                    return 1 === t.nodeType
                }))
            }, Q.fn.extend({
                find: function (t) {
                    var e, n = this.length, i = [], r = this;
                    if ("string" != typeof t)return this.pushStack(Q(t).filter(function () {
                        for (e = 0; n > e; e++)if (Q.contains(r[e], this))return !0
                    }));
                    for (e = 0; n > e; e++)Q.find(t, r[e], i);
                    return i = this.pushStack(n > 1 ? Q.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
                }, filter: function (t) {
                    return this.pushStack(i(this, t || [], !1))
                }, not: function (t) {
                    return this.pushStack(i(this, t || [], !0))
                }, is: function (t) {
                    return !!i(this, "string" == typeof t && oe.test(t) ? Q(t) : t || [], !1).length
                }
            });
            var le, ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ue = Q.fn.init = function (t, e) {
                var n, i;
                if (!t)return this;
                if ("string" == typeof t) {
                    if (n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ce.exec(t), !n || !n[1] && e)return !e || e.jquery ? (e || le).find(t) : this.constructor(e).find(t);
                    if (n[1]) {
                        if (e = e instanceof Q ? e[0] : e, Q.merge(this, Q.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : Z, !0)), ae.test(n[1]) && Q.isPlainObject(e))for (n in e)Q.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                        return this
                    }
                    return i = Z.getElementById(n[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = Z, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : Q.isFunction(t) ? "undefined" != typeof le.ready ? le.ready(t) : t(Q) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), Q.makeArray(t, this))
            };
            ue.prototype = Q.fn, le = Q(Z);
            var pe = /^(?:parents|prev(?:Until|All))/, de = {children: !0, contents: !0, next: !0, prev: !0};
            Q.extend({
                dir: function (t, e, n) {
                    for (var i = [], r = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;)if (1 === t.nodeType) {
                        if (r && Q(t).is(n))break;
                        i.push(t)
                    }
                    return i
                }, sibling: function (t, e) {
                    for (var n = []; t; t = t.nextSibling)1 === t.nodeType && t !== e && n.push(t);
                    return n
                }
            }), Q.fn.extend({
                has: function (t) {
                    var e = Q(t, this), n = e.length;
                    return this.filter(function () {
                        for (var t = 0; n > t; t++)if (Q.contains(this, e[t]))return !0
                    })
                }, closest: function (t, e) {
                    for (var n, i = 0, r = this.length, o = [], a = oe.test(t) || "string" != typeof t ? Q(t, e || this.context) : 0; r > i; i++)for (n = this[i]; n && n !== e; n = n.parentNode)if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Q.find.matchesSelector(n, t))) {
                        o.push(n);
                        break
                    }
                    return this.pushStack(o.length > 1 ? Q.unique(o) : o)
                }, index: function (t) {
                    return t ? "string" == typeof t ? Y.call(Q(t), this[0]) : Y.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                }, add: function (t, e) {
                    return this.pushStack(Q.unique(Q.merge(this.get(), Q(t, e))))
                }, addBack: function (t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                }
            }), Q.each({
                parent: function (t) {
                    var e = t.parentNode;
                    return e && 11 !== e.nodeType ? e : null
                }, parents: function (t) {
                    return Q.dir(t, "parentNode")
                }, parentsUntil: function (t, e, n) {
                    return Q.dir(t, "parentNode", n)
                }, next: function (t) {
                    return r(t, "nextSibling")
                }, prev: function (t) {
                    return r(t, "previousSibling")
                }, nextAll: function (t) {
                    return Q.dir(t, "nextSibling")
                }, prevAll: function (t) {
                    return Q.dir(t, "previousSibling")
                }, nextUntil: function (t, e, n) {
                    return Q.dir(t, "nextSibling", n)
                }, prevUntil: function (t, e, n) {
                    return Q.dir(t, "previousSibling", n)
                }, siblings: function (t) {
                    return Q.sibling((t.parentNode || {}).firstChild, t)
                }, children: function (t) {
                    return Q.sibling(t.firstChild)
                }, contents: function (t) {
                    return t.contentDocument || Q.merge([], t.childNodes)
                }
            }, function (t, e) {
                Q.fn[t] = function (n, i) {
                    var r = Q.map(this, e, n);
                    return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = Q.filter(i, r)), this.length > 1 && (de[t] || Q.unique(r), pe.test(t) && r.reverse()), this.pushStack(r)
                }
            });
            var he = /\S+/g, fe = {};
            Q.Callbacks = function (t) {
                t = "string" == typeof t ? fe[t] || o(t) : Q.extend({}, t);
                var e, n, i, r, a, s, l = [], c = !t.once && [], u = function (o) {
                    for (e = t.memory && o, n = !0, s = r || 0, r = 0, a = l.length, i = !0; l && a > s; s++)if (l[s].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                        e = !1;
                        break
                    }
                    i = !1, l && (c ? c.length && u(c.shift()) : e ? l = [] : p.disable())
                }, p = {
                    add: function () {
                        if (l) {
                            var n = l.length;
                            !function o(e) {
                                Q.each(e, function (e, n) {
                                    var i = Q.type(n);
                                    "function" === i ? t.unique && p.has(n) || l.push(n) : n && n.length && "string" !== i && o(n)
                                })
                            }(arguments), i ? a = l.length : e && (r = n, u(e))
                        }
                        return this
                    }, remove: function () {
                        return l && Q.each(arguments, function (t, e) {
                            for (var n; (n = Q.inArray(e, l, n)) > -1;)l.splice(n, 1), i && (a >= n && a--, s >= n && s--)
                        }), this
                    }, has: function (t) {
                        return t ? Q.inArray(t, l) > -1 : !(!l || !l.length)
                    }, empty: function () {
                        return l = [], a = 0, this
                    }, disable: function () {
                        return l = c = e = void 0, this
                    }, disabled: function () {
                        return !l
                    }, lock: function () {
                        return c = void 0, e || p.disable(), this
                    }, locked: function () {
                        return !c
                    }, fireWith: function (t, e) {
                        return !l || n && !c || (e = e || [], e = [t, e.slice ? e.slice() : e], i ? c.push(e) : u(e)), this
                    }, fire: function () {
                        return p.fireWith(this, arguments), this
                    }, fired: function () {
                        return !!n
                    }
                };
                return p
            }, Q.extend({
                Deferred: function (t) {
                    var e = [["resolve", "done", Q.Callbacks("once memory"), "resolved"], ["reject", "fail", Q.Callbacks("once memory"), "rejected"], ["notify", "progress", Q.Callbacks("memory")]], n = "pending", i = {
                        state: function () {
                            return n
                        }, always: function () {
                            return r.done(arguments).fail(arguments), this
                        }, then: function () {
                            var t = arguments;
                            return Q.Deferred(function (n) {
                                Q.each(e, function (e, o) {
                                    var a = Q.isFunction(t[e]) && t[e];
                                    r[o[1]](function () {
                                        var t = a && a.apply(this, arguments);
                                        t && Q.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        }, promise: function (t) {
                            return null != t ? Q.extend(t, i) : i
                        }
                    }, r = {};
                    return i.pipe = i.then, Q.each(e, function (t, o) {
                        var a = o[2], s = o[3];
                        i[o[1]] = a.add, s && a.add(function () {
                            n = s
                        }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function () {
                            return r[o[0] + "With"](this === r ? i : this, arguments), this
                        }, r[o[0] + "With"] = a.fireWith
                    }), i.promise(r), t && t.call(r, r), r
                }, when: function (t) {
                    var e, n, i, r = 0, o = F.call(arguments), a = o.length, s = 1 !== a || t && Q.isFunction(t.promise) ? a : 0, l = 1 === s ? t : Q.Deferred(), c = function (t, n, i) {
                        return function (r) {
                            n[t] = this, i[t] = arguments.length > 1 ? F.call(arguments) : r, i === e ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                        }
                    };
                    if (a > 1)for (e = new Array(a), n = new Array(a), i = new Array(a); a > r; r++)o[r] && Q.isFunction(o[r].promise) ? o[r].promise().done(c(r, i, o)).fail(l.reject).progress(c(r, n, e)) : --s;
                    return s || l.resolveWith(i, o), l.promise()
                }
            });
            var me;
            Q.fn.ready = function (t) {
                return Q.ready.promise().done(t), this
            }, Q.extend({
                isReady: !1, readyWait: 1, holdReady: function (t) {
                    t ? Q.readyWait++ : Q.ready(!0)
                }, ready: function (t) {
                    (t === !0 ? --Q.readyWait : Q.isReady) || (Q.isReady = !0, t !== !0 && --Q.readyWait > 0 || (me.resolveWith(Z, [Q]), Q.fn.triggerHandler && (Q(Z).triggerHandler("ready"), Q(Z).off("ready"))))
                }
            }), Q.ready.promise = function (e) {
                return me || (me = Q.Deferred(), "complete" === Z.readyState ? setTimeout(Q.ready) : (Z.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1))), me.promise(e)
            }, Q.ready.promise();
            var ge = Q.access = function (t, e, n, i, r, o, a) {
                var s = 0, l = t.length, c = null == n;
                if ("object" === Q.type(n)) {
                    r = !0;
                    for (s in n)Q.access(t, e, s, n[s], !0, o, a)
                } else if (void 0 !== i && (r = !0, Q.isFunction(i) || (a = !0), c && (a ? (e.call(t, i), e = null) : (c = e, e = function (t, e, n) {
                        return c.call(Q(t), n)
                    })), e))for (; l > s; s++)e(t[s], n, a ? i : i.call(t[s], s, e(t[s], n)));
                return r ? t : c ? e.call(t) : l ? e(t[0], n) : o
            };
            Q.acceptData = function (t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            }, s.uid = 1, s.accepts = Q.acceptData, s.prototype = {
                key: function (t) {
                    if (!s.accepts(t))return 0;
                    var e = {}, n = t[this.expando];
                    if (!n) {
                        n = s.uid++;
                        try {
                            e[this.expando] = {value: n}, Object.defineProperties(t, e)
                        } catch (i) {
                            e[this.expando] = n, Q.extend(t, e)
                        }
                    }
                    return this.cache[n] || (this.cache[n] = {}), n
                }, set: function (t, e, n) {
                    var i, r = this.key(t), o = this.cache[r];
                    if ("string" == typeof e)o[e] = n; else if (Q.isEmptyObject(o))Q.extend(this.cache[r], e); else for (i in e)o[i] = e[i];
                    return o
                }, get: function (t, e) {
                    var n = this.cache[this.key(t)];
                    return void 0 === e ? n : n[e]
                }, access: function (t, e, n) {
                    var i;
                    return void 0 === e || e && "string" == typeof e && void 0 === n ? (i = this.get(t, e), void 0 !== i ? i : this.get(t, Q.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e)
                }, remove: function (t, e) {
                    var n, i, r, o = this.key(t), a = this.cache[o];
                    if (void 0 === e)this.cache[o] = {}; else {
                        Q.isArray(e) ? i = e.concat(e.map(Q.camelCase)) : (r = Q.camelCase(e), e in a ? i = [e, r] : (i = r, i = i in a ? [i] : i.match(he) || [])), n = i.length;
                        for (; n--;)delete a[i[n]]
                    }
                }, hasData: function (t) {
                    return !Q.isEmptyObject(this.cache[t[this.expando]] || {})
                }, discard: function (t) {
                    t[this.expando] && delete this.cache[t[this.expando]]
                }
            };
            var ve = new s, ye = new s, xe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, be = /([A-Z])/g;
            Q.extend({
                hasData: function (t) {
                    return ye.hasData(t) || ve.hasData(t)
                }, data: function (t, e, n) {
                    return ye.access(t, e, n)
                }, removeData: function (t, e) {
                    ye.remove(t, e)
                }, _data: function (t, e, n) {
                    return ve.access(t, e, n)
                }, _removeData: function (t, e) {
                    ve.remove(t, e)
                }
            }), Q.fn.extend({
                data: function (t, e) {
                    var n, i, r, o = this[0], a = o && o.attributes;
                    if (void 0 === t) {
                        if (this.length && (r = ye.get(o), 1 === o.nodeType && !ve.get(o, "hasDataAttrs"))) {
                            for (n = a.length; n--;)a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = Q.camelCase(i.slice(5)), l(o, i, r[i])));
                            ve.set(o, "hasDataAttrs", !0)
                        }
                        return r
                    }
                    return "object" == typeof t ? this.each(function () {
                        ye.set(this, t)
                    }) : ge(this, function (e) {
                        var n, i = Q.camelCase(t);
                        if (o && void 0 === e) {
                            if (n = ye.get(o, t), void 0 !== n)return n;
                            if (n = ye.get(o, i), void 0 !== n)return n;
                            if (n = l(o, i, void 0), void 0 !== n)return n
                        } else this.each(function () {
                            var n = ye.get(this, i);
                            ye.set(this, i, e), -1 !== t.indexOf("-") && void 0 !== n && ye.set(this, t, e)
                        })
                    }, null, e, arguments.length > 1, null, !0)
                }, removeData: function (t) {
                    return this.each(function () {
                        ye.remove(this, t)
                    })
                }
            }), Q.extend({
                queue: function (t, e, n) {
                    var i;
                    return t ? (e = (e || "fx") + "queue", i = ve.get(t, e), n && (!i || Q.isArray(n) ? i = ve.access(t, e, Q.makeArray(n)) : i.push(n)), i || []) : void 0
                }, dequeue: function (t, e) {
                    e = e || "fx";
                    var n = Q.queue(t, e), i = n.length, r = n.shift(), o = Q._queueHooks(t, e), a = function () {
                        Q.dequeue(t, e)
                    };
                    "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, a, o)), !i && o && o.empty.fire()
                }, _queueHooks: function (t, e) {
                    var n = e + "queueHooks";
                    return ve.get(t, n) || ve.access(t, n, {
                            empty: Q.Callbacks("once memory").add(function () {
                                ve.remove(t, [e + "queue", n])
                            })
                        })
                }
            }), Q.fn.extend({
                queue: function (t, e) {
                    var n = 2;
                    return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? Q.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                        var n = Q.queue(this, t, e);
                        Q._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && Q.dequeue(this, t)
                    })
                }, dequeue: function (t) {
                    return this.each(function () {
                        Q.dequeue(this, t)
                    })
                }, clearQueue: function (t) {
                    return this.queue(t || "fx", [])
                }, promise: function (t, e) {
                    var n, i = 1, r = Q.Deferred(), o = this, a = this.length, s = function () {
                        --i || r.resolveWith(o, [o])
                    };
                    for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)n = ve.get(o[a], t + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
                    return s(), r.promise(e)
                }
            });
            var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ke = ["Top", "Right", "Bottom", "Left"], Te = function (t, e) {
                return t = e || t, "none" === Q.css(t, "display") || !Q.contains(t.ownerDocument, t)
            }, Se = /^(?:checkbox|radio)$/i;
            !function () {
                var t = Z.createDocumentFragment(), e = t.appendChild(Z.createElement("div")), n = Z.createElement("input");
                n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), J.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", J.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
            }();
            var Ce = "undefined";
            J.focusinBubbles = "onfocusin"in t;
            var _e = /^key/, Ae = /^(?:mouse|pointer|contextmenu)|click/, Pe = /^(?:focusinfocus|focusoutblur)$/, De = /^([^.]*)(?:\.(.+)|)$/;
            Q.event = {
                global: {},
                add: function (t, e, n, i, r) {
                    var o, a, s, l, c, u, p, d, h, f, m, g = ve.get(t);
                    if (g)for (n.handler && (o = n, n = o.handler, r = o.selector), n.guid || (n.guid = Q.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function (e) {
                        return typeof Q !== Ce && Q.event.triggered !== e.type ? Q.event.dispatch.apply(t, arguments) : void 0
                    }), e = (e || "").match(he) || [""], c = e.length; c--;)s = De.exec(e[c]) || [], h = m = s[1], f = (s[2] || "").split(".").sort(), h && (p = Q.event.special[h] || {}, h = (r ? p.delegateType : p.bindType) || h, p = Q.event.special[h] || {}, u = Q.extend({
                        type: h,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && Q.expr.match.needsContext.test(r),
                        namespace: f.join(".")
                    }, o), (d = l[h]) || (d = l[h] = [], d.delegateCount = 0, p.setup && p.setup.call(t, i, f, a) !== !1 || t.addEventListener && t.addEventListener(h, a, !1)), p.add && (p.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, u) : d.push(u), Q.event.global[h] = !0)
                },
                remove: function (t, e, n, i, r) {
                    var o, a, s, l, c, u, p, d, h, f, m, g = ve.hasData(t) && ve.get(t);
                    if (g && (l = g.events)) {
                        for (e = (e || "").match(he) || [""], c = e.length; c--;)if (s = De.exec(e[c]) || [], h = m = s[1], f = (s[2] || "").split(".").sort(), h) {
                            for (p = Q.event.special[h] || {}, h = (i ? p.delegateType : p.bindType) || h, d = l[h] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;)u = d[o], !r && m !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(o, 1), u.selector && d.delegateCount--, p.remove && p.remove.call(t, u));
                            a && !d.length && (p.teardown && p.teardown.call(t, f, g.handle) !== !1 || Q.removeEvent(t, h, g.handle), delete l[h])
                        } else for (h in l)Q.event.remove(t, h + e[c], n, i, !0);
                        Q.isEmptyObject(l) && (delete g.handle, ve.remove(t, "events"))
                    }
                },
                trigger: function (e, n, i, r) {
                    var o, a, s, l, c, u, p, d = [i || Z], h = V.call(e, "type") ? e.type : e, f = V.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (a = s = i = i || Z, 3 !== i.nodeType && 8 !== i.nodeType && !Pe.test(h + Q.event.triggered) && (h.indexOf(".") >= 0 && (f = h.split("."), h = f.shift(), f.sort()), c = h.indexOf(":") < 0 && "on" + h, e = e[Q.expando] ? e : new Q.Event(h, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : Q.makeArray(n, [e]), p = Q.event.special[h] || {}, r || !p.trigger || p.trigger.apply(i, n) !== !1)) {
                        if (!r && !p.noBubble && !Q.isWindow(i)) {
                            for (l = p.delegateType || h, Pe.test(l + h) || (a = a.parentNode); a; a = a.parentNode)d.push(a), s = a;
                            s === (i.ownerDocument || Z) && d.push(s.defaultView || s.parentWindow || t)
                        }
                        for (o = 0; (a = d[o++]) && !e.isPropagationStopped();)e.type = o > 1 ? l : p.bindType || h, u = (ve.get(a, "events") || {})[e.type] && ve.get(a, "handle"), u && u.apply(a, n), u = c && a[c], u && u.apply && Q.acceptData(a) && (e.result = u.apply(a, n), e.result === !1 && e.preventDefault());
                        return e.type = h, r || e.isDefaultPrevented() || p._default && p._default.apply(d.pop(), n) !== !1 || !Q.acceptData(i) || c && Q.isFunction(i[h]) && !Q.isWindow(i) && (s = i[c], s && (i[c] = null), Q.event.triggered = h, i[h](), Q.event.triggered = void 0, s && (i[c] = s)), e.result
                    }
                },
                dispatch: function (t) {
                    t = Q.event.fix(t);
                    var e, n, i, r, o, a = [], s = F.call(arguments), l = (ve.get(this, "events") || {})[t.type] || [], c = Q.event.special[t.type] || {};
                    if (s[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                        for (a = Q.event.handlers.call(this, t, l), e = 0; (r = a[e++]) && !t.isPropagationStopped();)for (t.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(o.namespace)) && (t.handleObj = o, t.data = o.data, i = ((Q.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, t), t.result
                    }
                },
                handlers: function (t, e) {
                    var n, i, r, o, a = [], s = e.delegateCount, l = t.target;
                    if (s && l.nodeType && (!t.button || "click" !== t.type))for (; l !== this; l = l.parentNode || this)if (l.disabled !== !0 || "click" !== t.type) {
                        for (i = [], n = 0; s > n; n++)o = e[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? Q(r, this).index(l) >= 0 : Q.find(r, this, null, [l]).length), i[r] && i.push(o);
                        i.length && a.push({elem: l, handlers: i})
                    }
                    return s < e.length && a.push({elem: this, handlers: e.slice(s)}), a
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "), filter: function (t, e) {
                        return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function (t, e) {
                        var n, i, r, o = e.button;
                        return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || Z, i = n.documentElement, r = n.body, t.pageX = e.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
                    }
                },
                fix: function (t) {
                    if (t[Q.expando])return t;
                    var e, n, i, r = t.type, o = t, a = this.fixHooks[r];
                    for (a || (this.fixHooks[r] = a = Ae.test(r) ? this.mouseHooks : _e.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, t = new Q.Event(o), e = i.length; e--;)n = i[e], t[n] = o[n];
                    return t.target || (t.target = Z), 3 === t.target.nodeType && (t.target = t.target.parentNode), a.filter ? a.filter(t, o) : t
                },
                special: {
                    load: {noBubble: !0}, focus: {
                        trigger: function () {
                            return this !== p() && this.focus ? (this.focus(), !1) : void 0
                        }, delegateType: "focusin"
                    }, blur: {
                        trigger: function () {
                            return this === p() && this.blur ? (this.blur(), !1) : void 0
                        }, delegateType: "focusout"
                    }, click: {
                        trigger: function () {
                            return "checkbox" === this.type && this.click && Q.nodeName(this, "input") ? (this.click(), !1) : void 0
                        }, _default: function (t) {
                            return Q.nodeName(t.target, "a")
                        }
                    }, beforeunload: {
                        postDispatch: function (t) {
                            void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                        }
                    }
                },
                simulate: function (t, e, n, i) {
                    var r = Q.extend(new Q.Event, n, {type: t, isSimulated: !0, originalEvent: {}});
                    i ? Q.event.trigger(r, null, e) : Q.event.dispatch.call(e, r), r.isDefaultPrevented() && n.preventDefault()
                }
            }, Q.removeEvent = function (t, e, n) {
                t.removeEventListener && t.removeEventListener(e, n, !1)
            }, Q.Event = function (t, e) {
                return this instanceof Q.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? c : u) : this.type = t, e && Q.extend(this, e), this.timeStamp = t && t.timeStamp || Q.now(), void(this[Q.expando] = !0)) : new Q.Event(t, e)
            }, Q.Event.prototype = {
                isDefaultPrevented: u,
                isPropagationStopped: u,
                isImmediatePropagationStopped: u,
                preventDefault: function () {
                    var t = this.originalEvent;
                    this.isDefaultPrevented = c, t && t.preventDefault && t.preventDefault()
                },
                stopPropagation: function () {
                    var t = this.originalEvent;
                    this.isPropagationStopped = c, t && t.stopPropagation && t.stopPropagation()
                },
                stopImmediatePropagation: function () {
                    var t = this.originalEvent;
                    this.isImmediatePropagationStopped = c, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
                }
            }, Q.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function (t, e) {
                Q.event.special[t] = {
                    delegateType: e, bindType: e, handle: function (t) {
                        var n, i = this, r = t.relatedTarget, o = t.handleObj;
                        return (!r || r !== i && !Q.contains(i, r)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
                    }
                }
            }), J.focusinBubbles || Q.each({focus: "focusin", blur: "focusout"}, function (t, e) {
                var n = function (t) {
                    Q.event.simulate(e, t.target, Q.event.fix(t), !0)
                };
                Q.event.special[e] = {
                    setup: function () {
                        var i = this.ownerDocument || this, r = ve.access(i, e);
                        r || i.addEventListener(t, n, !0), ve.access(i, e, (r || 0) + 1)
                    }, teardown: function () {
                        var i = this.ownerDocument || this, r = ve.access(i, e) - 1;
                        r ? ve.access(i, e, r) : (i.removeEventListener(t, n, !0), ve.remove(i, e))
                    }
                }
            }), Q.fn.extend({
                on: function (t, e, n, i, r) {
                    var o, a;
                    if ("object" == typeof t) {
                        "string" != typeof e && (n = n || e, e = void 0);
                        for (a in t)this.on(a, e, n, t[a], r);
                        return this
                    }
                    if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1)i = u; else if (!i)return this;
                    return 1 === r && (o = i, i = function (t) {
                        return Q().off(t), o.apply(this, arguments)
                    }, i.guid = o.guid || (o.guid = Q.guid++)), this.each(function () {
                        Q.event.add(this, t, i, n, e)
                    })
                }, one: function (t, e, n, i) {
                    return this.on(t, e, n, i, 1)
                }, off: function (t, e, n) {
                    var i, r;
                    if (t && t.preventDefault && t.handleObj)return i = t.handleObj, Q(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                    if ("object" == typeof t) {
                        for (r in t)this.off(r, e, t[r]);
                        return this
                    }
                    return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = u), this.each(function () {
                        Q.event.remove(this, t, n, e)
                    })
                }, trigger: function (t, e) {
                    return this.each(function () {
                        Q.event.trigger(t, e, this)
                    })
                }, triggerHandler: function (t, e) {
                    var n = this[0];
                    return n ? Q.event.trigger(t, e, n, !0) : void 0
                }
            });
            var Le = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Oe = /<([\w:]+)/, Me = /<|&#?\w+;/, Ne = /<(?:script|style|link)/i, Ee = /checked\s*(?:[^=]|=\s*.checked.)/i, je = /^$|\/(?:java|ecma)script/i, Re = /^true\/(.*)/, Ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ze = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
            ze.optgroup = ze.option, ze.tbody = ze.tfoot = ze.colgroup = ze.caption = ze.thead, ze.th = ze.td, Q.extend({
                clone: function (t, e, n) {
                    var i, r, o, a, s = t.cloneNode(!0), l = Q.contains(t.ownerDocument, t);
                    if (!(J.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || Q.isXMLDoc(t)))for (a = v(s), o = v(t), i = 0, r = o.length; r > i; i++)y(o[i], a[i]);
                    if (e)if (n)for (o = o || v(t), a = a || v(s), i = 0, r = o.length; r > i; i++)g(o[i], a[i]); else g(t, s);
                    return a = v(s, "script"), a.length > 0 && m(a, !l && v(t, "script")), s
                }, buildFragment: function (t, e, n, i) {
                    for (var r, o, a, s, l, c, u = e.createDocumentFragment(), p = [], d = 0, h = t.length; h > d; d++)if (r = t[d], r || 0 === r)if ("object" === Q.type(r))Q.merge(p, r.nodeType ? [r] : r); else if (Me.test(r)) {
                        for (o = o || u.appendChild(e.createElement("div")), a = (Oe.exec(r) || ["", ""])[1].toLowerCase(), s = ze[a] || ze._default, o.innerHTML = s[1] + r.replace(Le, "<$1></$2>") + s[2], c = s[0]; c--;)o = o.lastChild;
                        Q.merge(p, o.childNodes), o = u.firstChild, o.textContent = ""
                    } else p.push(e.createTextNode(r));
                    for (u.textContent = "", d = 0; r = p[d++];)if ((!i || -1 === Q.inArray(r, i)) && (l = Q.contains(r.ownerDocument, r), o = v(u.appendChild(r), "script"), l && m(o), n))for (c = 0; r = o[c++];)je.test(r.type || "") && n.push(r);
                    return u
                }, cleanData: function (t) {
                    for (var e, n, i, r, o = Q.event.special, a = 0; void 0 !== (n = t[a]); a++) {
                        if (Q.acceptData(n) && (r = n[ve.expando], r && (e = ve.cache[r]))) {
                            if (e.events)for (i in e.events)o[i] ? Q.event.remove(n, i) : Q.removeEvent(n, i, e.handle);
                            ve.cache[r] && delete ve.cache[r]
                        }
                        delete ye.cache[n[ye.expando]]
                    }
                }
            }), Q.fn.extend({
                text: function (t) {
                    return ge(this, function (t) {
                        return void 0 === t ? Q.text(this) : this.empty().each(function () {
                            (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                        })
                    }, null, t, arguments.length)
                }, append: function () {
                    return this.domManip(arguments, function (t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = d(this, t);
                            e.appendChild(t)
                        }
                    })
                }, prepend: function () {
                    return this.domManip(arguments, function (t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = d(this, t);
                            e.insertBefore(t, e.firstChild)
                        }
                    })
                }, before: function () {
                    return this.domManip(arguments, function (t) {
                        this.parentNode && this.parentNode.insertBefore(t, this)
                    })
                }, after: function () {
                    return this.domManip(arguments, function (t) {
                        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                    })
                }, remove: function (t, e) {
                    for (var n, i = t ? Q.filter(t, this) : this, r = 0; null != (n = i[r]); r++)e || 1 !== n.nodeType || Q.cleanData(v(n)), n.parentNode && (e && Q.contains(n.ownerDocument, n) && m(v(n, "script")), n.parentNode.removeChild(n));
                    return this
                }, empty: function () {
                    for (var t, e = 0; null != (t = this[e]); e++)1 === t.nodeType && (Q.cleanData(v(t, !1)), t.textContent = "");
                    return this
                }, clone: function (t, e) {
                    return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function () {
                        return Q.clone(this, t, e)
                    })
                }, html: function (t) {
                    return ge(this, function (t) {
                        var e = this[0] || {}, n = 0, i = this.length;
                        if (void 0 === t && 1 === e.nodeType)return e.innerHTML;
                        if ("string" == typeof t && !Ne.test(t) && !ze[(Oe.exec(t) || ["", ""])[1].toLowerCase()]) {
                            t = t.replace(Le, "<$1></$2>");
                            try {
                                for (; i > n; n++)e = this[n] || {}, 1 === e.nodeType && (Q.cleanData(v(e, !1)), e.innerHTML = t);
                                e = 0
                            } catch (r) {
                            }
                        }
                        e && this.empty().append(t)
                    }, null, t, arguments.length)
                }, replaceWith: function () {
                    var t = arguments[0];
                    return this.domManip(arguments, function (e) {
                        t = this.parentNode, Q.cleanData(v(this)), t && t.replaceChild(e, this)
                    }), t && (t.length || t.nodeType) ? this : this.remove()
                }, detach: function (t) {
                    return this.remove(t, !0)
                }, domManip: function (t, e) {
                    t = $.apply([], t);
                    var n, i, r, o, a, s, l = 0, c = this.length, u = this, p = c - 1, d = t[0], m = Q.isFunction(d);
                    if (m || c > 1 && "string" == typeof d && !J.checkClone && Ee.test(d))return this.each(function (n) {
                        var i = u.eq(n);
                        m && (t[0] = d.call(this, n, i.html())), i.domManip(t, e)
                    });
                    if (c && (n = Q.buildFragment(t, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
                        for (r = Q.map(v(n, "script"), h), o = r.length; c > l; l++)a = n, l !== p && (a = Q.clone(a, !0, !0), o && Q.merge(r, v(a, "script"))), e.call(this[l], a, l);
                        if (o)for (s = r[r.length - 1].ownerDocument, Q.map(r, f), l = 0; o > l; l++)a = r[l], je.test(a.type || "") && !ve.access(a, "globalEval") && Q.contains(s, a) && (a.src ? Q._evalUrl && Q._evalUrl(a.src) : Q.globalEval(a.textContent.replace(Ie, "")))
                    }
                    return this
                }
            }), Q.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function (t, e) {
                Q.fn[t] = function (t) {
                    for (var n, i = [], r = Q(t), o = r.length - 1, a = 0; o >= a; a++)n = a === o ? this : this.clone(!0), Q(r[a])[e](n), X.apply(i, n.get());
                    return this.pushStack(i)
                }
            });
            var Be, He = {}, qe = /^margin/, We = new RegExp("^(" + we + ")(?!px)[a-z%]+$", "i"), Fe = function (t) {
                return t.ownerDocument.defaultView.getComputedStyle(t, null)
            };
            !function () {
                function e() {
                    a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", r.appendChild(o);
                    var e = t.getComputedStyle(a, null);
                    n = "1%" !== e.top, i = "4px" === e.width, r.removeChild(o)
                }

                var n, i, r = Z.documentElement, o = Z.createElement("div"), a = Z.createElement("div");
                a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", J.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(a), t.getComputedStyle && Q.extend(J, {
                    pixelPosition: function () {
                        return e(), n
                    }, boxSizingReliable: function () {
                        return null == i && e(), i
                    }, reliableMarginRight: function () {
                        var e, n = a.appendChild(Z.createElement("div"));
                        return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", r.appendChild(o), e = !parseFloat(t.getComputedStyle(n, null).marginRight), r.removeChild(o), e
                    }
                }))
            }(), Q.swap = function (t, e, n, i) {
                var r, o, a = {};
                for (o in e)a[o] = t.style[o], t.style[o] = e[o];
                r = n.apply(t, i || []);
                for (o in e)t.style[o] = a[o];
                return r
            };
            var $e = /^(none|table(?!-c[ea]).+)/, Xe = new RegExp("^(" + we + ")(.*)$", "i"), Ye = new RegExp("^([+-])=(" + we + ")", "i"), Ge = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }, Ue = {letterSpacing: "0", fontWeight: "400"}, Ve = ["Webkit", "O", "Moz", "ms"];
            Q.extend({
                cssHooks: {
                    opacity: {
                        get: function (t, e) {
                            if (e) {
                                var n = w(t, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {"float": "cssFloat"},
                style: function (t, e, n, i) {
                    if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                        var r, o, a, s = Q.camelCase(e), l = t.style;
                        return e = Q.cssProps[s] || (Q.cssProps[s] = T(l, s)), a = Q.cssHooks[e] || Q.cssHooks[s], void 0 === n ? a && "get"in a && void 0 !== (r = a.get(t, !1, i)) ? r : l[e] : (o = typeof n, "string" === o && (r = Ye.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(Q.css(t, e)), o = "number"), null != n && n === n && ("number" !== o || Q.cssNumber[s] || (n += "px"), J.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), a && "set"in a && void 0 === (n = a.set(t, n, i)) || (l[e] = n)), void 0)
                    }
                },
                css: function (t, e, n, i) {
                    var r, o, a, s = Q.camelCase(e);
                    return e = Q.cssProps[s] || (Q.cssProps[s] = T(t.style, s)), a = Q.cssHooks[e] || Q.cssHooks[s], a && "get"in a && (r = a.get(t, !0, n)), void 0 === r && (r = w(t, e, i)), "normal" === r && e in Ue && (r = Ue[e]), "" === n || n ? (o = parseFloat(r), n === !0 || Q.isNumeric(o) ? o || 0 : r) : r
                }
            }), Q.each(["height", "width"], function (t, e) {
                Q.cssHooks[e] = {
                    get: function (t, n, i) {
                        return n ? $e.test(Q.css(t, "display")) && 0 === t.offsetWidth ? Q.swap(t, Ge, function () {
                            return _(t, e, i)
                        }) : _(t, e, i) : void 0
                    }, set: function (t, n, i) {
                        var r = i && Fe(t);
                        return S(t, n, i ? C(t, e, i, "border-box" === Q.css(t, "boxSizing", !1, r), r) : 0)
                    }
                }
            }), Q.cssHooks.marginRight = k(J.reliableMarginRight, function (t, e) {
                return e ? Q.swap(t, {display: "inline-block"}, w, [t, "marginRight"]) : void 0
            }), Q.each({margin: "", padding: "", border: "Width"}, function (t, e) {
                Q.cssHooks[t + e] = {
                    expand: function (n) {
                        for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)r[t + ke[i] + e] = o[i] || o[i - 2] || o[0];
                        return r
                    }
                }, qe.test(t) || (Q.cssHooks[t + e].set = S)
            }), Q.fn.extend({
                css: function (t, e) {
                    return ge(this, function (t, e, n) {
                        var i, r, o = {}, a = 0;
                        if (Q.isArray(e)) {
                            for (i = Fe(t), r = e.length; r > a; a++)o[e[a]] = Q.css(t, e[a], !1, i);
                            return o
                        }
                        return void 0 !== n ? Q.style(t, e, n) : Q.css(t, e)
                    }, t, e, arguments.length > 1)
                }, show: function () {
                    return A(this, !0)
                }, hide: function () {
                    return A(this)
                }, toggle: function (t) {
                    return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                        Te(this) ? Q(this).show() : Q(this).hide()
                    })
                }
            }), Q.Tween = P, P.prototype = {
                constructor: P, init: function (t, e, n, i, r, o) {
                    this.elem = t, this.prop = n, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (Q.cssNumber[n] ? "" : "px")
                }, cur: function () {
                    var t = P.propHooks[this.prop];
                    return t && t.get ? t.get(this) : P.propHooks._default.get(this)
                }, run: function (t) {
                    var e, n = P.propHooks[this.prop];
                    return this.pos = e = this.options.duration ? Q.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : P.propHooks._default.set(this), this
                }
            }, P.prototype.init.prototype = P.prototype, P.propHooks = {
                _default: {
                    get: function (t) {
                        var e;
                        return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = Q.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                    }, set: function (t) {
                        Q.fx.step[t.prop] ? Q.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[Q.cssProps[t.prop]] || Q.cssHooks[t.prop]) ? Q.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                    }
                }
            }, P.propHooks.scrollTop = P.propHooks.scrollLeft = {
                set: function (t) {
                    t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
                }
            }, Q.easing = {
                linear: function (t) {
                    return t
                }, swing: function (t) {
                    return .5 - Math.cos(t * Math.PI) / 2
                }
            }, Q.fx = P.prototype.init, Q.fx.step = {};
            var Je, Ze, Ke = /^(?:toggle|show|hide)$/, Qe = new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$", "i"), tn = /queueHooks$/, en = [M], nn = {
                "*": [function (t, e) {
                    var n = this.createTween(t, e), i = n.cur(), r = Qe.exec(e), o = r && r[3] || (Q.cssNumber[t] ? "" : "px"), a = (Q.cssNumber[t] || "px" !== o && +i) && Qe.exec(Q.css(n.elem, t)), s = 1, l = 20;
                    if (a && a[3] !== o) {
                        o = o || a[3], r = r || [], a = +i || 1;
                        do s = s || ".5", a /= s, Q.style(n.elem, t, a + o); while (s !== (s = n.cur() / i) && 1 !== s && --l)
                    }
                    return r && (a = n.start = +a || +i || 0, n.unit = o, n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), n
                }]
            };
            Q.Animation = Q.extend(E, {
                tweener: function (t, e) {
                    Q.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                    for (var n, i = 0, r = t.length; r > i; i++)n = t[i], nn[n] = nn[n] || [], nn[n].unshift(e)
                }, prefilter: function (t, e) {
                    e ? en.unshift(t) : en.push(t)
                }
            }), Q.speed = function (t, e, n) {
                var i = t && "object" == typeof t ? Q.extend({}, t) : {
                    complete: n || !n && e || Q.isFunction(t) && t,
                    duration: t,
                    easing: n && e || e && !Q.isFunction(e) && e
                };
                return i.duration = Q.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in Q.fx.speeds ? Q.fx.speeds[i.duration] : Q.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                    Q.isFunction(i.old) && i.old.call(this), i.queue && Q.dequeue(this, i.queue)
                }, i
            }, Q.fn.extend({
                fadeTo: function (t, e, n, i) {
                    return this.filter(Te).css("opacity", 0).show().end().animate({opacity: e}, t, n, i)
                }, animate: function (t, e, n, i) {
                    var r = Q.isEmptyObject(t), o = Q.speed(e, n, i), a = function () {
                        var e = E(this, Q.extend({}, t), o);
                        (r || ve.get(this, "finish")) && e.stop(!0)
                    };
                    return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
                }, stop: function (t, e, n) {
                    var i = function (t) {
                        var e = t.stop;
                        delete t.stop, e(n)
                    };
                    return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                        var e = !0, r = null != t && t + "queueHooks", o = Q.timers, a = ve.get(this);
                        if (r)a[r] && a[r].stop && i(a[r]); else for (r in a)a[r] && a[r].stop && tn.test(r) && i(a[r]);
                        for (r = o.length; r--;)o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
                        (e || !n) && Q.dequeue(this, t)
                    })
                }, finish: function (t) {
                    return t !== !1 && (t = t || "fx"), this.each(function () {
                        var e, n = ve.get(this), i = n[t + "queue"], r = n[t + "queueHooks"], o = Q.timers, a = i ? i.length : 0;
                        for (n.finish = !0, Q.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;)o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                        for (e = 0; a > e; e++)i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish
                    })
                }
            }), Q.each(["toggle", "show", "hide"], function (t, e) {
                var n = Q.fn[e];
                Q.fn[e] = function (t, i, r) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(L(e, !0), t, i, r)
                }
            }), Q.each({
                slideDown: L("show"),
                slideUp: L("hide"),
                slideToggle: L("toggle"),
                fadeIn: {opacity: "show"},
                fadeOut: {opacity: "hide"},
                fadeToggle: {opacity: "toggle"}
            }, function (t, e) {
                Q.fn[t] = function (t, n, i) {
                    return this.animate(e, t, n, i)
                }
            }), Q.timers = [], Q.fx.tick = function () {
                var t, e = 0, n = Q.timers;
                for (Je = Q.now(); e < n.length; e++)t = n[e], t() || n[e] !== t || n.splice(e--, 1);
                n.length || Q.fx.stop(), Je = void 0
            }, Q.fx.timer = function (t) {
                Q.timers.push(t), t() ? Q.fx.start() : Q.timers.pop()
            }, Q.fx.interval = 13, Q.fx.start = function () {
                Ze || (Ze = setInterval(Q.fx.tick, Q.fx.interval))
            }, Q.fx.stop = function () {
                clearInterval(Ze), Ze = null
            }, Q.fx.speeds = {slow: 600, fast: 200, _default: 400}, Q.fn.delay = function (t, e) {
                return t = Q.fx ? Q.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, n) {
                    var i = setTimeout(e, t);
                    n.stop = function () {
                        clearTimeout(i)
                    }
                })
            }, function () {
                var t = Z.createElement("input"), e = Z.createElement("select"), n = e.appendChild(Z.createElement("option"));
                t.type = "checkbox", J.checkOn = "" !== t.value, J.optSelected = n.selected, e.disabled = !0, J.optDisabled = !n.disabled, t = Z.createElement("input"), t.value = "t", t.type = "radio", J.radioValue = "t" === t.value
            }();
            var rn, on, an = Q.expr.attrHandle;
            Q.fn.extend({
                attr: function (t, e) {
                    return ge(this, Q.attr, t, e, arguments.length > 1)
                }, removeAttr: function (t) {
                    return this.each(function () {
                        Q.removeAttr(this, t)
                    })
                }
            }), Q.extend({
                attr: function (t, e, n) {
                    var i, r, o = t.nodeType;
                    if (t && 3 !== o && 8 !== o && 2 !== o)return typeof t.getAttribute === Ce ? Q.prop(t, e, n) : (1 === o && Q.isXMLDoc(t) || (e = e.toLowerCase(), i = Q.attrHooks[e] || (Q.expr.match.bool.test(e) ? on : rn)), void 0 === n ? i && "get"in i && null !== (r = i.get(t, e)) ? r : (r = Q.find.attr(t, e), null == r ? void 0 : r) : null !== n ? i && "set"in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : void Q.removeAttr(t, e))
                }, removeAttr: function (t, e) {
                    var n, i, r = 0, o = e && e.match(he);
                    if (o && 1 === t.nodeType)for (; n = o[r++];)i = Q.propFix[n] || n, Q.expr.match.bool.test(n) && (t[i] = !1), t.removeAttribute(n)
                }, attrHooks: {
                    type: {
                        set: function (t, e) {
                            if (!J.radioValue && "radio" === e && Q.nodeName(t, "input")) {
                                var n = t.value;
                                return t.setAttribute("type", e), n && (t.value = n), e
                            }
                        }
                    }
                }
            }), on = {
                set: function (t, e, n) {
                    return e === !1 ? Q.removeAttr(t, n) : t.setAttribute(n, n), n
                }
            }, Q.each(Q.expr.match.bool.source.match(/\w+/g), function (t, e) {
                var n = an[e] || Q.find.attr;
                an[e] = function (t, e, i) {
                    var r, o;
                    return i || (o = an[e], an[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, an[e] = o), r
                }
            });
            var sn = /^(?:input|select|textarea|button)$/i;
            Q.fn.extend({
                prop: function (t, e) {
                    return ge(this, Q.prop, t, e, arguments.length > 1)
                }, removeProp: function (t) {
                    return this.each(function () {
                        delete this[Q.propFix[t] || t]
                    })
                }
            }), Q.extend({
                propFix: {"for": "htmlFor", "class": "className"}, prop: function (t, e, n) {
                    var i, r, o, a = t.nodeType;
                    if (t && 3 !== a && 8 !== a && 2 !== a)return o = 1 !== a || !Q.isXMLDoc(t), o && (e = Q.propFix[e] || e, r = Q.propHooks[e]), void 0 !== n ? r && "set"in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get"in r && null !== (i = r.get(t, e)) ? i : t[e]
                }, propHooks: {
                    tabIndex: {
                        get: function (t) {
                            return t.hasAttribute("tabindex") || sn.test(t.nodeName) || t.href ? t.tabIndex : -1
                        }
                    }
                }
            }), J.optSelected || (Q.propHooks.selected = {
                get: function (t) {
                    var e = t.parentNode;
                    return e && e.parentNode && e.parentNode.selectedIndex, null
                }
            }), Q.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                Q.propFix[this.toLowerCase()] = this
            });
            var ln = /[\t\r\n\f]/g;
            Q.fn.extend({
                addClass: function (t) {
                    var e, n, i, r, o, a, s = "string" == typeof t && t, l = 0, c = this.length;
                    if (Q.isFunction(t))return this.each(function (e) {
                        Q(this).addClass(t.call(this, e, this.className))
                    });
                    if (s)for (e = (t || "").match(he) || []; c > l; l++)if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ln, " ") : " ")) {
                        for (o = 0; r = e[o++];)i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        a = Q.trim(i), n.className !== a && (n.className = a)
                    }
                    return this
                }, removeClass: function (t) {
                    var e, n, i, r, o, a, s = 0 === arguments.length || "string" == typeof t && t, l = 0, c = this.length;
                    if (Q.isFunction(t))return this.each(function (e) {
                        Q(this).removeClass(t.call(this, e, this.className))
                    });
                    if (s)for (e = (t || "").match(he) || []; c > l; l++)if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ln, " ") : "")) {
                        for (o = 0; r = e[o++];)for (; i.indexOf(" " + r + " ") >= 0;)i = i.replace(" " + r + " ", " ");
                        a = t ? Q.trim(i) : "", n.className !== a && (n.className = a)
                    }
                    return this
                }, toggleClass: function (t, e) {
                    var n = typeof t;
                    return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(Q.isFunction(t) ? function (n) {
                        Q(this).toggleClass(t.call(this, n, this.className, e), e)
                    } : function () {
                        if ("string" === n)for (var e, i = 0, r = Q(this), o = t.match(he) || []; e = o[i++];)r.hasClass(e) ? r.removeClass(e) : r.addClass(e); else(n === Ce || "boolean" === n) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : ve.get(this, "__className__") || "")
                    })
                }, hasClass: function (t) {
                    for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(ln, " ").indexOf(e) >= 0)return !0;
                    return !1
                }
            });
            var cn = /\r/g;
            Q.fn.extend({
                val: function (t) {
                    var e, n, i, r = this[0];
                    {
                        if (arguments.length)return i = Q.isFunction(t), this.each(function (n) {
                            var r;
                            1 === this.nodeType && (r = i ? t.call(this, n, Q(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : Q.isArray(r) && (r = Q.map(r, function (t) {
                                return null == t ? "" : t + ""
                            })), e = Q.valHooks[this.type] || Q.valHooks[this.nodeName.toLowerCase()], e && "set"in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                        });
                        if (r)return e = Q.valHooks[r.type] || Q.valHooks[r.nodeName.toLowerCase()], e && "get"in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(cn, "") : null == n ? "" : n)
                    }
                }
            }), Q.extend({
                valHooks: {
                    option: {
                        get: function (t) {
                            var e = Q.find.attr(t, "value");
                            return null != e ? e : Q.trim(Q.text(t))
                        }
                    }, select: {
                        get: function (t) {
                            for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, l = 0 > r ? s : o ? r : 0; s > l; l++)if (n = i[l], !(!n.selected && l !== r || (J.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Q.nodeName(n.parentNode, "optgroup"))) {
                                if (e = Q(n).val(), o)return e;
                                a.push(e)
                            }
                            return a
                        }, set: function (t, e) {
                            for (var n, i, r = t.options, o = Q.makeArray(e), a = r.length; a--;)i = r[a], (i.selected = Q.inArray(i.value, o) >= 0) && (n = !0);
                            return n || (t.selectedIndex = -1), o
                        }
                    }
                }
            }), Q.each(["radio", "checkbox"], function () {
                Q.valHooks[this] = {
                    set: function (t, e) {
                        return Q.isArray(e) ? t.checked = Q.inArray(Q(t).val(), e) >= 0 : void 0
                    }
                }, J.checkOn || (Q.valHooks[this].get = function (t) {
                    return null === t.getAttribute("value") ? "on" : t.value
                })
            }), Q.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
                Q.fn[e] = function (t, n) {
                    return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
                }
            }), Q.fn.extend({
                hover: function (t, e) {
                    return this.mouseenter(t).mouseleave(e || t)
                }, bind: function (t, e, n) {
                    return this.on(t, null, e, n)
                }, unbind: function (t, e) {
                    return this.off(t, null, e)
                }, delegate: function (t, e, n, i) {
                    return this.on(e, t, n, i)
                }, undelegate: function (t, e, n) {
                    return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
                }
            });
            var un = Q.now(), pn = /\?/;
            Q.parseJSON = function (t) {
                return JSON.parse(t + "")
            }, Q.parseXML = function (t) {
                var e, n;
                if (!t || "string" != typeof t)return null;
                try {
                    n = new DOMParser, e = n.parseFromString(t, "text/xml")
                } catch (i) {
                    e = void 0
                }
                return (!e || e.getElementsByTagName("parsererror").length) && Q.error("Invalid XML: " + t), e
            };
            var dn, hn, fn = /#.*$/, mn = /([?&])_=[^&]*/, gn = /^(.*?):[ \t]*([^\r\n]*)$/gm, vn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, yn = /^(?:GET|HEAD)$/, xn = /^\/\//, bn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, wn = {}, kn = {}, Tn = "*/".concat("*");
            try {
                hn = location.href
            } catch (Sn) {
                hn = Z.createElement("a"), hn.href = "", hn = hn.href
            }
            dn = bn.exec(hn.toLowerCase()) || [], Q.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: hn,
                    type: "GET",
                    isLocal: vn.test(dn[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Tn,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {xml: /xml/, html: /html/, json: /json/},
                    responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                    converters: {"* text": String, "text html": !0, "text json": Q.parseJSON, "text xml": Q.parseXML},
                    flatOptions: {url: !0, context: !0}
                },
                ajaxSetup: function (t, e) {
                    return e ? I(I(t, Q.ajaxSettings), e) : I(Q.ajaxSettings, t)
                },
                ajaxPrefilter: j(wn),
                ajaxTransport: j(kn),
                ajax: function (t, e) {
                    function n(t, e, n, a) {
                        var l, u, v, y, b, k = e;
                        2 !== x && (x = 2, s && clearTimeout(s), i = void 0, o = a || "", w.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, n && (y = z(p, w, n)), y = B(p, y, w, l), l ? (p.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (Q.lastModified[r] = b), b = w.getResponseHeader("etag"), b && (Q.etag[r] = b)), 204 === t || "HEAD" === p.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = y.state, u = y.data, v = y.error, l = !v)) : (v = k, (t || !k) && (k = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || k) + "", l ? f.resolveWith(d, [u, k, w]) : f.rejectWith(d, [w, k, v]), w.statusCode(g), g = void 0, c && h.trigger(l ? "ajaxSuccess" : "ajaxError", [w, p, l ? u : v]), m.fireWith(d, [w, k]), c && (h.trigger("ajaxComplete", [w, p]), --Q.active || Q.event.trigger("ajaxStop")))
                    }

                    "object" == typeof t && (e = t, t = void 0), e = e || {};
                    var i, r, o, a, s, l, c, u, p = Q.ajaxSetup({}, e), d = p.context || p, h = p.context && (d.nodeType || d.jquery) ? Q(d) : Q.event, f = Q.Deferred(), m = Q.Callbacks("once memory"), g = p.statusCode || {}, v = {}, y = {}, x = 0, b = "canceled", w = {
                        readyState: 0,
                        getResponseHeader: function (t) {
                            var e;
                            if (2 === x) {
                                if (!a)for (a = {}; e = gn.exec(o);)a[e[1].toLowerCase()] = e[2];
                                e = a[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function () {
                            return 2 === x ? o : null
                        },
                        setRequestHeader: function (t, e) {
                            var n = t.toLowerCase();
                            return x || (t = y[n] = y[n] || t, v[t] = e), this
                        },
                        overrideMimeType: function (t) {
                            return x || (p.mimeType = t), this
                        },
                        statusCode: function (t) {
                            var e;
                            if (t)if (2 > x)for (e in t)g[e] = [g[e], t[e]]; else w.always(t[w.status]);
                            return this
                        },
                        abort: function (t) {
                            var e = t || b;
                            return i && i.abort(e), n(0, e), this
                        }
                    };
                    if (f.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, p.url = ((t || p.url || hn) + "").replace(fn, "").replace(xn, dn[1] + "//"), p.type = e.method || e.type || p.method || p.type, p.dataTypes = Q.trim(p.dataType || "*").toLowerCase().match(he) || [""], null == p.crossDomain && (l = bn.exec(p.url.toLowerCase()), p.crossDomain = !(!l || l[1] === dn[1] && l[2] === dn[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (dn[3] || ("http:" === dn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = Q.param(p.data, p.traditional)), R(wn, p, e, w), 2 === x)return w;
                    c = p.global, c && 0 === Q.active++ && Q.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !yn.test(p.type), r = p.url, p.hasContent || (p.data && (r = p.url += (pn.test(r) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = mn.test(r) ? r.replace(mn, "$1_=" + un++) : r + (pn.test(r) ? "&" : "?") + "_=" + un++)), p.ifModified && (Q.lastModified[r] && w.setRequestHeader("If-Modified-Since", Q.lastModified[r]), Q.etag[r] && w.setRequestHeader("If-None-Match", Q.etag[r])), (p.data && p.hasContent && p.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", p.contentType), w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Tn + "; q=0.01" : "") : p.accepts["*"]);
                    for (u in p.headers)w.setRequestHeader(u, p.headers[u]);
                    if (p.beforeSend && (p.beforeSend.call(d, w, p) === !1 || 2 === x))return w.abort();
                    b = "abort";
                    for (u in{success: 1, error: 1, complete: 1})w[u](p[u]);
                    if (i = R(kn, p, e, w)) {
                        w.readyState = 1, c && h.trigger("ajaxSend", [w, p]), p.async && p.timeout > 0 && (s = setTimeout(function () {
                            w.abort("timeout")
                        }, p.timeout));
                        try {
                            x = 1, i.send(v, n)
                        } catch (k) {
                            if (!(2 > x))throw k;
                            n(-1, k)
                        }
                    } else n(-1, "No Transport");
                    return w
                },
                getJSON: function (t, e, n) {
                    return Q.get(t, e, n, "json")
                },
                getScript: function (t, e) {
                    return Q.get(t, void 0, e, "script")
                }
            }), Q.each(["get", "post"], function (t, e) {
                Q[e] = function (t, n, i, r) {
                    return Q.isFunction(n) && (r = r || i, i = n, n = void 0), Q.ajax({
                        url: t,
                        type: e,
                        dataType: r,
                        data: n,
                        success: i
                    })
                }
            }), Q.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
                Q.fn[e] = function (t) {
                    return this.on(e, t)
                }
            }), Q._evalUrl = function (t) {
                return Q.ajax({url: t, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
            }, Q.fn.extend({
                wrapAll: function (t) {
                    var e;
                    return Q.isFunction(t) ? this.each(function (e) {
                        Q(this).wrapAll(t.call(this, e))
                    }) : (this[0] && (e = Q(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                        for (var t = this; t.firstElementChild;)t = t.firstElementChild;
                        return t
                    }).append(this)), this)
                }, wrapInner: function (t) {
                    return this.each(Q.isFunction(t) ? function (e) {
                        Q(this).wrapInner(t.call(this, e))
                    } : function () {
                        var e = Q(this), n = e.contents();
                        n.length ? n.wrapAll(t) : e.append(t)
                    })
                }, wrap: function (t) {
                    var e = Q.isFunction(t);
                    return this.each(function (n) {
                        Q(this).wrapAll(e ? t.call(this, n) : t)
                    })
                }, unwrap: function () {
                    return this.parent().each(function () {
                        Q.nodeName(this, "body") || Q(this).replaceWith(this.childNodes)
                    }).end()
                }
            }), Q.expr.filters.hidden = function (t) {
                return t.offsetWidth <= 0 && t.offsetHeight <= 0
            }, Q.expr.filters.visible = function (t) {
                return !Q.expr.filters.hidden(t)
            };
            var Cn = /%20/g, _n = /\[\]$/, An = /\r?\n/g, Pn = /^(?:submit|button|image|reset|file)$/i, Dn = /^(?:input|select|textarea|keygen)/i;
            Q.param = function (t, e) {
                var n, i = [], r = function (t, e) {
                    e = Q.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
                if (void 0 === e && (e = Q.ajaxSettings && Q.ajaxSettings.traditional), Q.isArray(t) || t.jquery && !Q.isPlainObject(t))Q.each(t, function () {
                    r(this.name, this.value)
                }); else for (n in t)H(n, t[n], e, r);
                return i.join("&").replace(Cn, "+")
            }, Q.fn.extend({
                serialize: function () {
                    return Q.param(this.serializeArray())
                }, serializeArray: function () {
                    return this.map(function () {
                        var t = Q.prop(this, "elements");
                        return t ? Q.makeArray(t) : this
                    }).filter(function () {
                        var t = this.type;
                        return this.name && !Q(this).is(":disabled") && Dn.test(this.nodeName) && !Pn.test(t) && (this.checked || !Se.test(t))
                    }).map(function (t, e) {
                        var n = Q(this).val();
                        return null == n ? null : Q.isArray(n) ? Q.map(n, function (t) {
                            return {name: e.name, value: t.replace(An, "\r\n")}
                        }) : {name: e.name, value: n.replace(An, "\r\n")}
                    }).get()
                }
            }), Q.ajaxSettings.xhr = function () {
                try {
                    return new XMLHttpRequest
                } catch (t) {
                }
            };
            var Ln = 0, On = {}, Mn = {0: 200, 1223: 204}, Nn = Q.ajaxSettings.xhr();
            t.ActiveXObject && Q(t).on("unload", function () {
                for (var t in On)On[t]()
            }), J.cors = !!Nn && "withCredentials"in Nn, J.ajax = Nn = !!Nn, Q.ajaxTransport(function (t) {
                var e;
                return J.cors || Nn && !t.crossDomain ? {
                    send: function (n, i) {
                        var r, o = t.xhr(), a = ++Ln;
                        if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)for (r in t.xhrFields)o[r] = t.xhrFields[r];
                        t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (r in n)o.setRequestHeader(r, n[r]);
                        e = function (t) {
                            return function () {
                                e && (delete On[a], e = o.onload = o.onerror = null, "abort" === t ? o.abort() : "error" === t ? i(o.status, o.statusText) : i(Mn[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {text: o.responseText} : void 0, o.getAllResponseHeaders()))
                            }
                        }, o.onload = e(), o.onerror = e("error"), e = On[a] = e("abort");
                        try {
                            o.send(t.hasContent && t.data || null)
                        } catch (s) {
                            if (e)throw s
                        }
                    }, abort: function () {
                        e && e()
                    }
                } : void 0
            }), Q.ajaxSetup({
                accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
                contents: {script: /(?:java|ecma)script/},
                converters: {
                    "text script": function (t) {
                        return Q.globalEval(t), t
                    }
                }
            }), Q.ajaxPrefilter("script", function (t) {
                void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
            }), Q.ajaxTransport("script", function (t) {
                if (t.crossDomain) {
                    var e, n;
                    return {
                        send: function (i, r) {
                            e = Q("<script>").prop({
                                async: !0,
                                charset: t.scriptCharset,
                                src: t.url
                            }).on("load error", n = function (t) {
                                e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
                            }), Z.head.appendChild(e[0])
                        }, abort: function () {
                            n && n()
                        }
                    }
                }
            });
            var En = [], jn = /(=)\?(?=&|$)|\?\?/;
            Q.ajaxSetup({
                jsonp: "callback", jsonpCallback: function () {
                    var t = En.pop() || Q.expando + "_" + un++;
                    return this[t] = !0, t
                }
            }), Q.ajaxPrefilter("json jsonp", function (e, n, i) {
                var r, o, a, s = e.jsonp !== !1 && (jn.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && jn.test(e.data) && "data");
                return s || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = Q.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(jn, "$1" + r) : e.jsonp !== !1 && (e.url += (pn.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
                    return a || Q.error(r + " was not called"), a[0]
                }, e.dataTypes[0] = "json", o = t[r], t[r] = function () {
                    a = arguments
                }, i.always(function () {
                    t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, En.push(r)), a && Q.isFunction(o) && o(a[0]), a = o = void 0
                }), "script") : void 0
            }), Q.parseHTML = function (t, e, n) {
                if (!t || "string" != typeof t)return null;
                "boolean" == typeof e && (n = e, e = !1), e = e || Z;
                var i = ae.exec(t), r = !n && [];
                return i ? [e.createElement(i[1])] : (i = Q.buildFragment([t], e, r), r && r.length && Q(r).remove(), Q.merge([], i.childNodes))
            };
            var Rn = Q.fn.load;
            Q.fn.load = function (t, e, n) {
                if ("string" != typeof t && Rn)return Rn.apply(this, arguments);
                var i, r, o, a = this, s = t.indexOf(" ");
                return s >= 0 && (i = Q.trim(t.slice(s)), t = t.slice(0, s)), Q.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), a.length > 0 && Q.ajax({
                    url: t,
                    type: r,
                    dataType: "html",
                    data: e
                }).done(function (t) {
                    o = arguments, a.html(i ? Q("<div>").append(Q.parseHTML(t)).find(i) : t)
                }).complete(n && function (t, e) {
                        a.each(n, o || [t.responseText, e, t])
                    }), this
            }, Q.expr.filters.animated = function (t) {
                return Q.grep(Q.timers, function (e) {
                    return t === e.elem
                }).length
            };
            var In = t.document.documentElement;
            Q.offset = {
                setOffset: function (t, e, n) {
                    var i, r, o, a, s, l, c, u = Q.css(t, "position"), p = Q(t), d = {};
                    "static" === u && (t.style.position = "relative"), s = p.offset(), o = Q.css(t, "top"), l = Q.css(t, "left"), c = ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1, c ? (i = p.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), Q.isFunction(e) && (e = e.call(t, n, s)), null != e.top && (d.top = e.top - s.top + a), null != e.left && (d.left = e.left - s.left + r), "using"in e ? e.using.call(t, d) : p.css(d)
                }
            }, Q.fn.extend({
                offset: function (t) {
                    if (arguments.length)return void 0 === t ? this : this.each(function (e) {
                        Q.offset.setOffset(this, t, e)
                    });
                    var e, n, i = this[0], r = {top: 0, left: 0}, o = i && i.ownerDocument;
                    if (o)return e = o.documentElement, Q.contains(e, i) ? (typeof i.getBoundingClientRect !== Ce && (r = i.getBoundingClientRect()), n = q(o), {
                        top: r.top + n.pageYOffset - e.clientTop,
                        left: r.left + n.pageXOffset - e.clientLeft
                    }) : r
                }, position: function () {
                    if (this[0]) {
                        var t, e, n = this[0], i = {top: 0, left: 0};
                        return "fixed" === Q.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), Q.nodeName(t[0], "html") || (i = t.offset()), i.top += Q.css(t[0], "borderTopWidth", !0), i.left += Q.css(t[0], "borderLeftWidth", !0)), {
                            top: e.top - i.top - Q.css(n, "marginTop", !0),
                            left: e.left - i.left - Q.css(n, "marginLeft", !0)
                        }
                    }
                }, offsetParent: function () {
                    return this.map(function () {
                        for (var t = this.offsetParent || In; t && !Q.nodeName(t, "html") && "static" === Q.css(t, "position");)t = t.offsetParent;
                        return t || In
                    })
                }
            }), Q.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, n) {
                var i = "pageYOffset" === n;
                Q.fn[e] = function (r) {
                    return ge(this, function (e, r, o) {
                        var a = q(e);
                        return void 0 === o ? a ? a[n] : e[r] : void(a ? a.scrollTo(i ? t.pageXOffset : o, i ? o : t.pageYOffset) : e[r] = o)
                    }, e, r, arguments.length, null)
                }
            }), Q.each(["top", "left"], function (t, e) {
                Q.cssHooks[e] = k(J.pixelPosition, function (t, n) {
                    return n ? (n = w(t, e), We.test(n) ? Q(t).position()[e] + "px" : n) : void 0
                })
            }), Q.each({Height: "height", Width: "width"}, function (t, e) {
                Q.each({padding: "inner" + t, content: e, "": "outer" + t}, function (n, i) {
                    Q.fn[i] = function (i, r) {
                        var o = arguments.length && (n || "boolean" != typeof i), a = n || (i === !0 || r === !0 ? "margin" : "border");
                        return ge(this, function (e, n, i) {
                            var r;
                            return Q.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? Q.css(e, n, a) : Q.style(e, n, i, a)
                        }, e, o ? i : void 0, o, null)
                    }
                })
            }), Q.fn.size = function () {
                return this.length
            }, Q.fn.andSelf = Q.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
                return Q
            });
            var zn = t.jQuery, Bn = t.$;
            return Q.noConflict = function (e) {
                return t.$ === Q && (t.$ = Bn), e && t.jQuery === Q && (t.jQuery = zn), Q
            }, typeof e === Ce && (t.jQuery = t.$ = Q), Q
        })
    }), require.register("smzdm_pro/source/lib/highcharts.js", function (t, e) {
        !function () {
            function t(t, e) {
                var n;
                t || (t = {});
                for (n in e)t[n] = e[n];
                return t
            }

            function n() {
                var t, e, n = arguments, i = {}, r = function (t, e) {
                    var n, i;
                    "object" != typeof t && (t = {});
                    for (i in e)e.hasOwnProperty(i) && (n = e[i], t[i] = n && "object" == typeof n && "[object Array]" !== Object.prototype.toString.call(n) && "renderTo" !== i && "number" != typeof n.nodeType ? r(t[i] || {}, n) : e[i]);
                    return t
                };
                for (n[0] === !0 && (i = n[1], n = Array.prototype.slice.call(n, 2)), e = n.length, t = 0; e > t; t++)i = r(i, n[t]);
                return i
            }

            function i() {
                for (var t = 0, e = arguments, n = e.length, i = {}; n > t; t++)i[e[t++]] = e[t];
                return i
            }

            function r(t, e) {
                return parseInt(t, e || 10)
            }

            function o(t) {
                return "string" == typeof t
            }

            function a(t) {
                return "object" == typeof t
            }

            function s(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }

            function l(t) {
                return "number" == typeof t
            }

            function c(t) {
                return fe.log(t) / fe.LN10
            }

            function u(t) {
                return fe.pow(10, t)
            }

            function p(t, e) {
                for (var n = t.length; n--;)if (t[n] === e) {
                    t.splice(n, 1);
                    break
                }
            }

            function d(t) {
                return t !== F && null !== t
            }

            function h(t, e, n) {
                var i, r;
                if (o(e))d(n) ? t.setAttribute(e, n) : t && t.getAttribute && (r = t.getAttribute(e)); else if (d(e) && a(e))for (i in e)t.setAttribute(i, e[i]);
                return r
            }

            function f(t) {
                return s(t) ? t : [t]
            }

            function m() {
                var t, e, n = arguments, i = n.length;
                for (t = 0; i > t; t++)if (e = n[t], "undefined" != typeof e && null !== e)return e
            }

            function g(e, n) {
                Ae && !Ne && n && n.opacity !== F && (n.filter = "alpha(opacity=" + 100 * n.opacity + ")"), t(e.style, n)
            }

            function v(e, n, i, r, o) {
                var a = de.createElement(e);
                return n && t(a, n), o && g(a, {
                    padding: 0,
                    border: Je,
                    margin: 0
                }), i && g(a, i), r && r.appendChild(a), a
            }

            function y(e, n) {
                var i = function () {
                };
                return i.prototype = new e, t(i.prototype, n), i
            }

            function x(t, e, n, i) {
                var o = G.lang, a = +t || 0, s = -1 === e ? (a.toString().split(".")[1] || "").length : isNaN(e = be(e)) ? 2 : e, l = void 0 === n ? o.decimalPoint : n, c = void 0 === i ? o.thousandsSep : i, u = 0 > a ? "-" : "", p = String(r(a = be(a).toFixed(s))), d = p.length > 3 ? p.length % 3 : 0;
                return u + (d ? p.substr(0, d) + c : "") + p.substr(d).replace(/(\d{3})(?=\d)/g, "$1" + c) + (s ? l + be(a - p).toFixed(s).slice(2) : "")
            }

            function b(t, e) {
                return new Array((e || 2) + 1 - String(t).length).join(0) + t
            }

            function w(t, e, n) {
                var i = t[e];
                t[e] = function () {
                    var t = Array.prototype.slice.call(arguments);
                    return t.unshift(i), n.apply(this, t)
                }
            }

            function k(t, e) {
                var n, i = /f$/, r = /\.([0-9])/, o = G.lang;
                return i.test(t) ? (n = t.match(r), n = n ? n[1] : -1, null !== e && (e = x(e, n, o.decimalPoint, t.indexOf(",") > -1 ? o.thousandsSep : ""))) : e = U(t, e), e
            }

            function T(t, e) {
                for (var n, i, r, o, a, s, l, c = "{", u = !1, p = []; -1 !== (l = t.indexOf(c));) {
                    if (n = t.slice(0, l), u) {
                        for (i = n.split(":"), r = i.shift().split("."), a = r.length, s = e, o = 0; a > o; o++)s = s[r[o]];
                        i.length && (s = k(i.join(":"), s)), p.push(s)
                    } else p.push(n);
                    t = t.slice(l + 1), u = !u, c = u ? "}" : "{"
                }
                return p.push(t), p.join("")
            }

            function S(t) {
                return fe.pow(10, ge(fe.log(t) / fe.LN10))
            }

            function C(t, e, n, i) {
                var r, o;
                for (n = m(n, 1), r = t / n, e || (e = [1, 2, 2.5, 5, 10], i && i.allowDecimals === !1 && (1 === n ? e = [1, 2, 5, 10] : .1 >= n && (e = [1 / n]))), o = 0; o < e.length && (t = e[o], !(r <= (e[o] + (e[o + 1] || e[o])) / 2)); o++);
                return t *= n
            }

            function _() {
                this.color = 0, this.symbol = 0
            }

            function A(t, e) {
                var n, i, r = t.length;
                for (i = 0; r > i; i++)t[i].ss_i = i;
                for (t.sort(function (t, i) {
                    return n = e(t, i), 0 === n ? t.ss_i - i.ss_i : n
                }), i = 0; r > i; i++)delete t[i].ss_i
            }

            function P(t) {
                for (var e = t.length, n = t[0]; e--;)t[e] < n && (n = t[e]);
                return n
            }

            function D(t) {
                for (var e = t.length, n = t[0]; e--;)t[e] > n && (n = t[e]);
                return n
            }

            function L(t, e) {
                var n;
                for (n in t)t[n] && t[n] !== e && t[n].destroy && t[n].destroy(), delete t[n]
            }

            function O(t) {
                Y || (Y = v(Fe)), t && Y.appendChild(t), Y.innerHTML = ""
            }

            function M(t, e) {
                var n = "Highcharts error #" + t + ": www.highcharts.com/errors/" + t;
                if (e)throw n;
                he.console
            }

            function N(t) {
                return parseFloat(t.toPrecision(14))
            }

            function E(t, e) {
                V = m(t, e.animation)
            }

            function j() {
                var t = G.global.useUTC, e = t ? "getUTC" : "get", n = t ? "setUTC" : "set";
                te = 6e4 * (t && G.global.timezoneOffset || 0), Q = t ? Date.UTC : function (t, e, n, i, r, o) {
                    return new Date(t, e, m(n, 1), m(i, 0), m(r, 0), m(o, 0)).getTime()
                }, ee = e + "Minutes", ne = e + "Hours", ie = e + "Day", re = e + "Date", oe = e + "Month", ae = e + "FullYear", se = n + "Minutes", le = n + "Hours", ce = n + "Date", ue = n + "Month", pe = n + "FullYear"
            }

            function R(t) {
                return G = n(!0, G, t), j(), G
            }

            function I() {
                return G
            }

            function z() {
            }

            function B(t, e, n, i) {
                this.axis = t, this.pos = e, this.type = n || "", this.isNew = !0, n || i || this.addLabel()
            }

            function H() {
                this.init.apply(this, arguments)
            }

            function q() {
                this.init.apply(this, arguments)
            }

            function W(t, e, n, i, r) {
                var o = t.chart.inverted;
                this.axis = t, this.isNegative = n, this.options = e, this.x = i, this.total = null, this.points = {}, this.stack = r, this.alignOptions = {
                    align: e.align || (o ? n ? "left" : "right" : "center"),
                    verticalAlign: e.verticalAlign || (o ? "middle" : n ? "bottom" : "top"),
                    y: m(e.y, o ? 4 : n ? 14 : -6),
                    x: m(e.x, o ? n ? -6 : 6 : 0)
                }, this.textAlign = e.textAlign || (o ? n ? "right" : "left" : "center")
            }

            var F, $, X, Y, G, U, V, J, Z, K, Q, te, ee, ne, ie, re, oe, ae, se, le, ce, ue, pe, de = document, he = window, fe = Math, me = fe.round, ge = fe.floor, ve = fe.ceil, ye = fe.max, xe = fe.min, be = fe.abs, we = fe.cos, ke = fe.sin, Te = fe.PI, Se = 2 * Te / 360, Ce = navigator.userAgent, _e = he.opera, Ae = /msie/i.test(Ce) && !_e, Pe = 8 === de.documentMode, De = /AppleWebKit/.test(Ce), Le = /Firefox/.test(Ce), Oe = /(Mobile|Android|Windows Phone)/.test(Ce), Me = "http://www.w3.org/2000/svg", Ne = !!de.createElementNS && !!de.createElementNS(Me, "svg").createSVGRect, Ee = Le && parseInt(Ce.split("Firefox/")[1], 10) < 4, je = !Ne && !Ae && !!de.createElement("canvas").getContext, Re = {}, Ie = 0, ze = function () {
            }, Be = [], He = 0, qe = "Highcharts", We = "4.0.1", Fe = "div", $e = "absolute", Xe = "relative", Ye = "hidden", Ge = "highcharts-", Ue = "visible", Ve = "px", Je = "none", Ze = "M", Ke = "L", Qe = /^[0-9]+$/, tn = "", en = "hover", nn = "select", rn = "millisecond", on = "second", an = "minute", sn = "hour", ln = "day", cn = "week", un = "month", pn = "year", dn = "stroke-width", hn = {}, fn = he.Highcharts = he.Highcharts ? M(16, !0) : {};
            U = function (e, n, i) {
                if (!d(n) || isNaN(n))return "Invalid date";
                e = m(e, "%Y-%m-%d %H:%M:%S");
                var r, o = new Date(n - te), a = o[ne](), s = o[ie](), l = o[re](), c = o[oe](), u = o[ae](), p = G.lang, h = p.weekdays, f = t({
                    a: h[s].substr(0, 3),
                    A: h[s],
                    d: b(l),
                    e: l,
                    b: p.shortMonths[c],
                    B: p.months[c],
                    m: b(c + 1),
                    y: u.toString().substr(2, 2),
                    Y: u,
                    H: b(a),
                    I: b(a % 12 || 12),
                    l: a % 12 || 12,
                    M: b(o[ee]()),
                    p: 12 > a ? "AM" : "PM",
                    P: 12 > a ? "am" : "pm",
                    S: b(o.getSeconds()),
                    L: b(me(n % 1e3), 3)
                }, fn.dateFormats);
                for (r in f)for (; -1 !== e.indexOf("%" + r);)e = e.replace("%" + r, "function" == typeof f[r] ? f[r](n) : f[r]);
                return i ? e.substr(0, 1).toUpperCase() + e.substr(1) : e
            }, _.prototype = {
                wrapColor: function (t) {
                    this.color >= t && (this.color = 0)
                }, wrapSymbol: function (t) {
                    this.symbol >= t && (this.symbol = 0)
                }
            }, Z = i(rn, 1, on, 1e3, an, 6e4, sn, 36e5, ln, 864e5, cn, 6048e5, un, 26784e5, pn, 31556952e3), J = {
                init: function (t, e, n) {
                    e = e || "";
                    var i, r, o, a, s, l = t.shift, c = e.indexOf("C") > -1, u = c ? 7 : 3, p = e.split(" "), d = [].concat(n), h = function (t) {
                        for (o = t.length; o--;)t[o] === Ze && t.splice(o + 1, 0, t[o + 1], t[o + 2], t[o + 1], t[o + 2])
                    };
                    if (c && (h(p), h(d)), t.isArea && (a = p.splice(p.length - 6, 6), s = d.splice(d.length - 6, 6)), l <= d.length / u && p.length === d.length)for (; l--;)d = [].concat(d).splice(0, u).concat(d);
                    if (t.shift = 0, p.length)for (i = d.length; p.length < i;)r = [].concat(p).splice(p.length - u, u), c && (r[u - 6] = r[u - 2], r[u - 5] = r[u - 1]), p = p.concat(r);
                    return a && (p = p.concat(a), d = d.concat(s)), [p, d]
                }, step: function (t, e, n, i) {
                    var r, o = [], a = t.length;
                    if (1 === n)o = i; else if (a === e.length && 1 > n)for (; a--;)r = parseFloat(t[a]), o[a] = isNaN(r) ? t[a] : n * parseFloat(e[a] - r) + r; else o = e;
                    return o
                }
            };
            var mn = e("../lib/jquery");
            he.HighchartsAdapter = he.HighchartsAdapter || mn && {
                    init: function (t) {
                        var e, n = mn.fx, i = n.step, r = mn.Tween, a = r && r.propHooks, s = mn.cssHooks.opacity;
                        mn.extend(mn.easing, {
                            easeOutQuad: function (t, e, n, i, r) {
                                return -i * (e /= r) * (e - 2) + n
                            }
                        }), mn.each(["cur", "_default", "width", "height", "opacity"], function (t, e) {
                            var o, s = i;
                            "cur" === e ? s = n.prototype : "_default" === e && r && (s = a[e], e = "set"), o = s[e], o && (s[e] = function (n) {
                                var i;
                                return n = t ? n : this, "align" !== n.prop ? (i = n.elem, i.attr ? i.attr(n.prop, "cur" === e ? F : n.now) : o.apply(this, arguments)) : void 0
                            })
                        }), w(s, "get", function (t, e, n) {
                            return e.attr ? e.opacity || 0 : t.call(this, e, n)
                        }), e = function (e) {
                            var n, i = e.elem;
                            e.started || (n = t.init(i, i.d, i.toD), e.start = n[0], e.end = n[1], e.started = !0), i.attr("d", t.step(e.start, e.end, e.pos, i.toD))
                        }, r ? a.d = {set: e} : i.d = e, this.each = Array.prototype.forEach ? function (t, e) {
                            return Array.prototype.forEach.call(t, e)
                        } : function (t, e) {
                            for (var n = 0, i = t.length; i > n; n++)if (e.call(t[n], t[n], n, t) === !1)return n
                        }, mn.fn.highcharts = function () {
                            var t, e, n, i = "Chart", r = arguments;
                            return this[0] && (o(r[0]) && (i = r[0], r = Array.prototype.slice.call(r, 1)), t = r[0], t !== F && (t.chart = t.chart || {}, t.chart.renderTo = this[0], n = new fn[i](t, r[1]), e = this), t === F && (e = Be[h(this[0], "data-highcharts-chart")])), e
                        }
                    }, getScript: mn.getScript, inArray: mn.inArray, adapterRun: function (t, e) {
                        return mn(t)[e]()
                    }, grep: mn.grep, map: function (t, e) {
                        for (var n = [], i = 0, r = t.length; r > i; i++)n[i] = e.call(t[i], t[i], i, t);
                        return n
                    }, offset: function (t) {
                        return mn(t).offset()
                    }, addEvent: function (t, e, n) {
                        mn(t).bind(e, n)
                    }, removeEvent: function (t, e, n) {
                        var i = de.removeEventListener ? "removeEventListener" : "detachEvent";
                        de[i] && t && !t[i] && (t[i] = function () {
                        }), mn(t).unbind(e, n)
                    }, fireEvent: function (e, n, i, r) {
                        var o, a = mn.Event(n), s = "detached" + n;
                        !Ae && i && (delete i.layerX, delete i.layerY, delete i.returnValue), t(a, i), e[n] && (e[s] = e[n], e[n] = null), mn.each(["preventDefault", "stopPropagation"], function (t, e) {
                            var n = a[e];
                            a[e] = function () {
                                try {
                                    n.call(a)
                                } catch (t) {
                                    "preventDefault" === e && (o = !0)
                                }
                            }
                        }), mn(e).trigger(a), e[s] && (e[n] = e[s], e[s] = null), !r || a.isDefaultPrevented() || o || r(a)
                    }, washMouseEvent: function (t) {
                        var e = t.originalEvent || t;
                        return e.pageX === F && (e.pageX = t.pageX, e.pageY = t.pageY), e
                    }, animate: function (t, e, n) {
                        var i = mn(t);
                        t.style || (t.style = {}), e.d && (t.toD = e.d, e.d = 1), i.stop(), e.opacity !== F && t.attr && (e.opacity += "px"), i.animate(e, n)
                    }, stop: function (t) {
                        mn(t).stop()
                    }
                };
            var gn = he.HighchartsAdapter, vn = gn || {};
            gn && gn.init.call(gn, J);
            var yn = vn.adapterRun, xn = vn.getScript, bn = vn.inArray, wn = vn.each, kn = vn.grep, Tn = vn.offset, Sn = vn.map, Cn = vn.addEvent, _n = vn.removeEvent, An = vn.fireEvent, Pn = vn.washMouseEvent, Dn = vn.animate, Ln = vn.stop, On = {
                enabled: !0,
                x: 0,
                y: 15,
                style: {color: "#606060", cursor: "default", fontSize: "11px"}
            };
            G = {
                colors: ["#7cb5ec", "#434348", "#90ed7d", "#f7a35c", "#8085e9", "#f15c80", "#e4d354", "#8085e8", "#8d4653", "#91e8e1"],
                symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
                lang: {
                    loading: "Loading...",
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    decimalPoint: ".",
                    numericSymbols: ["k", "M", "G", "T", "P", "E"],
                    resetZoom: "Reset zoom",
                    resetZoomTitle: "Reset zoom level 1:1",
                    thousandsSep: ","
                },
                global: {
                    useUTC: !0,
                    canvasToolsURL: "http://code.highcharts.com/4.0.1/modules/canvas-tools.js",
                    VMLRadialGradientURL: "http://code.highcharts.com/4.0.1/gfx/vml-radial-gradient.png"
                },
                chart: {
                    borderColor: "#4572A7",
                    borderRadius: 0,
                    defaultSeriesType: "line",
                    ignoreHiddenSeries: !0,
                    spacing: [10, 10, 15, 10],
                    backgroundColor: "#FFFFFF",
                    plotBorderColor: "#C0C0C0",
                    resetZoomButton: {theme: {zIndex: 20}, position: {align: "right", x: -10, y: 10}}
                },
                title: {text: "Chart title", align: "center", margin: 15, style: {color: "#333333", fontSize: "18px"}},
                subtitle: {text: "", align: "center", style: {color: "#555555"}},
                plotOptions: {
                    line: {
                        allowPointSelect: !1,
                        showCheckbox: !1,
                        animation: {duration: 1e3},
                        events: {},
                        lineWidth: 2,
                        marker: {
                            lineWidth: 0,
                            radius: 4,
                            lineColor: "#FFFFFF",
                            states: {
                                hover: {enabled: !0},
                                select: {fillColor: "#FFFFFF", lineColor: "#000000", lineWidth: 2}
                            }
                        },
                        point: {events: {}},
                        dataLabels: n(On, {
                            align: "center", enabled: !1, formatter: function () {
                                return null === this.y ? "" : x(this.y, -1)
                            }, verticalAlign: "bottom", y: 0
                        }),
                        cropThreshold: 300,
                        pointRange: 0,
                        states: {hover: {marker: {}, halo: {size: 10, opacity: .25}}, select: {marker: {}}},
                        stickyTracking: !0,
                        turboThreshold: 1e3
                    }
                },
                labels: {style: {position: $e, color: "#3E576F"}},
                legend: {
                    enabled: !0,
                    align: "center",
                    layout: "horizontal",
                    labelFormatter: function () {
                        return this.name
                    },
                    borderColor: "#909090",
                    borderRadius: 0,
                    navigation: {activeColor: "#274b6d", inactiveColor: "#CCC"},
                    shadow: !1,
                    itemStyle: {color: "#333333", fontSize: "12px", fontWeight: "bold"},
                    itemHoverStyle: {color: "#000"},
                    itemHiddenStyle: {color: "#CCC"},
                    itemCheckboxStyle: {position: $e, width: "13px", height: "13px"},
                    symbolPadding: 5,
                    verticalAlign: "bottom",
                    x: 0,
                    y: 0,
                    title: {style: {fontWeight: "bold"}}
                },
                loading: {
                    labelStyle: {fontWeight: "bold", position: Xe, top: "1em"},
                    style: {position: $e, backgroundColor: "white", opacity: .5, textAlign: "center"}
                },
                tooltip: {
                    enabled: !0,
                    animation: Ne,
                    backgroundColor: "rgba(249, 249, 249, .85)",
                    borderWidth: 1,
                    borderRadius: 3,
                    dateTimeLabelFormats: {
                        millisecond: "%A, %b %e, %H:%M:%S.%L",
                        second: "%A, %b %e, %H:%M:%S",
                        minute: "%A, %b %e, %H:%M",
                        hour: "%A, %b %e, %H:%M",
                        day: "%A, %b %e, %Y",
                        week: "Week from %A, %b %e, %Y",
                        month: "%B %Y",
                        year: "%Y"
                    },
                    headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
                    pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
                    shadow: !0,
                    snap: Oe ? 25 : 10,
                    style: {color: "#333333", cursor: "default", fontSize: "12px", padding: "8px", whiteSpace: "nowrap"}
                },
                credits: {
                    enabled: !0,
                    text: "Highcharts.com",
                    href: "http://www.highcharts.com",
                    position: {align: "right", x: -10, verticalAlign: "bottom", y: -5},
                    style: {cursor: "pointer", color: "#909090", fontSize: "9px"}
                }
            };
            var Mn = G.plotOptions, Nn = Mn.line;
            j();
            var En = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/, jn = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/, Rn = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/, In = function (t) {
                function e(t) {
                    t && t.stops ? c = Sn(t.stops, function (t) {
                        return In(t[1])
                    }) : (s = En.exec(t), s ? u = [r(s[1]), r(s[2]), r(s[3]), parseFloat(s[4], 10)] : (s = jn.exec(t), s ? u = [r(s[1], 16), r(s[2], 16), r(s[3], 16), 1] : (s = Rn.exec(t), s && (u = [r(s[1]), r(s[2]), r(s[3]), 1]))))
                }

                function i(e) {
                    var i;
                    return c ? (i = n(t), i.stops = [].concat(i.stops), wn(c, function (t, n) {
                        i.stops[n] = [i.stops[n][0], t.get(e)]
                    })) : i = u && !isNaN(u[0]) ? "rgb" === e ? "rgb(" + u[0] + "," + u[1] + "," + u[2] + ")" : "a" === e ? u[3] : "rgba(" + u.join(",") + ")" : t, i
                }

                function o(t) {
                    if (c)wn(c, function (e) {
                        e.brighten(t)
                    }); else if (l(t) && 0 !== t) {
                        var e;
                        for (e = 0; 3 > e; e++)u[e] += r(255 * t), u[e] < 0 && (u[e] = 0), u[e] > 255 && (u[e] = 255)
                    }
                    return this
                }

                function a(t) {
                    return u[3] = t, this
                }

                var s, c, u = [];
                return e(t), {get: i, brighten: o, rgba: u, setOpacity: a}
            };
            z.prototype = {
                init: function (t, e) {
                    var n = this;
                    n.element = "span" === e ? v(e) : de.createElementNS(Me, e), n.renderer = t
                }, opacity: 1, animate: function (t, e, i) {
                    var r = m(e, V, !0);
                    Ln(this), r ? (r = n(r, {}), i && (r.complete = i), Dn(this, t, r)) : (this.attr(t), i && i())
                }, colorGradient: function (t, e, i) {
                    var r, o, a, l, c, u, p, h, f, m, g, v = this.renderer, y = [];
                    if (t.linearGradient ? o = "linearGradient" : t.radialGradient && (o = "radialGradient"), o) {
                        a = t[o], l = v.gradients, u = t.stops, f = i.radialReference, s(a) && (t[o] = a = {
                            x1: a[0],
                            y1: a[1],
                            x2: a[2],
                            y2: a[3],
                            gradientUnits: "userSpaceOnUse"
                        }), "radialGradient" === o && f && !d(a.gradientUnits) && (a = n(a, {
                            cx: f[0] - f[2] / 2 + a.cx * f[2],
                            cy: f[1] - f[2] / 2 + a.cy * f[2],
                            r: a.r * f[2],
                            gradientUnits: "userSpaceOnUse"
                        }));
                        for (m in a)"id" !== m && y.push(m, a[m]);
                        for (m in u)y.push(u[m]);
                        y = y.join(","), l[y] ? g = l[y].attr("id") : (a.id = g = Ge + Ie++, l[y] = c = v.createElement(o).attr(a).add(v.defs), c.stops = [], wn(u, function (t) {
                            var e;
                            0 === t[1].indexOf("rgba") ? (r = In(t[1]), p = r.get("rgb"), h = r.get("a")) : (p = t[1], h = 1), e = v.createElement("stop").attr({
                                offset: t[0],
                                "stop-color": p,
                                "stop-opacity": h
                            }).add(c), c.stops.push(e)
                        })), i.setAttribute(e, "url(" + v.url + "#" + g + ")")
                    }
                }, attr: function (t, e) {
                    var n, i, r, o, a = this.element, s = this;
                    if ("string" == typeof t && e !== F && (n = t, t = {}, t[n] = e), "string" == typeof t)s = (this[t + "Getter"] || this._defaultGetter).call(this, t, a); else {
                        for (n in t)i = t[n], o = !1, this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(n) && (r || (this.symbolAttr(t), r = !0), o = !0), !this.rotation || "x" !== n && "y" !== n || (this.doTransform = !0), o || (this[n + "Setter"] || this._defaultSetter).call(this, i, n, a), this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(n) && this.updateShadows(n, i);
                        this.doTransform && (this.updateTransform(), this.doTransform = !1)
                    }
                    return s
                }, updateShadows: function (t, e) {
                    for (var n = this.shadows, i = n.length; i--;)n[i].setAttribute(t, "height" === t ? ye(e - (n[i].cutHeight || 0), 0) : "d" === t ? this.d : e)
                }, addClass: function (t) {
                    var e = this.element, n = h(e, "class") || "";
                    return -1 === n.indexOf(t) && h(e, "class", n + " " + t), this
                }, symbolAttr: function (t) {
                    var e = this;
                    wn(["x", "y", "r", "start", "end", "width", "height", "innerR", "anchorX", "anchorY"], function (n) {
                        e[n] = m(t[n], e[n])
                    }), e.attr({d: e.renderer.symbols[e.symbolName](e.x, e.y, e.width, e.height, e)})
                }, clip: function (t) {
                    return this.attr("clip-path", t ? "url(" + this.renderer.url + "#" + t.id + ")" : Je)
                }, crisp: function (t) {
                    var e, n, i = this, r = {}, o = t.strokeWidth || i.strokeWidth || i.attr && i.attr("stroke-width") || 0;
                    n = me(o) % 2 / 2, t.x = ge(t.x || i.x || 0) + n, t.y = ge(t.y || i.y || 0) + n, t.width = ge((t.width || i.width || 0) - 2 * n), t.height = ge((t.height || i.height || 0) - 2 * n), t.strokeWidth = o;
                    for (e in t)i[e] !== t[e] && (i[e] = r[e] = t[e]);
                    return r
                }, css: function (e) {
                    var n, i, o, a = this, s = a.styles, l = {}, c = a.element, u = "", p = !s;
                    if (e && e.color && (e.fill = e.color), s)for (i in e)e[i] !== s[i] && (l[i] = e[i], p = !0);
                    if (p) {
                        if (n = a.textWidth = e && e.width && "text" === c.nodeName.toLowerCase() && r(e.width), s && (e = t(s, l)), a.styles = e, n && (je || !Ne && a.renderer.forExport) && delete e.width, Ae && !Ne)g(a.element, e); else {
                            o = function (t, e) {
                                return "-" + e.toLowerCase()
                            };
                            for (i in e)u += i.replace(/([A-Z])/g, o) + ":" + e[i] + ";";
                            h(c, "style", u)
                        }
                        n && a.added && a.renderer.buildText(a)
                    }
                    return a
                }, on: function (t, e) {
                    var n = this, i = n.element;
                    return X && "click" === t ? (i.ontouchstart = function (t) {
                        n.touchEventFired = Date.now(), t.preventDefault(), e.call(i, t)
                    }, i.onclick = function (t) {
                        (-1 === Ce.indexOf("Android") || Date.now() - (n.touchEventFired || 0) > 1100) && e.call(i, t)
                    }) : i["on" + t] = e, this
                }, setRadialReference: function (t) {
                    return this.element.radialReference = t, this
                }, translate: function (t, e) {
                    return this.attr({translateX: t, translateY: e})
                }, invert: function () {
                    var t = this;
                    return t.inverted = !0, t.updateTransform(), t
                }, updateTransform: function () {
                    var t, e = this, n = e.translateX || 0, i = e.translateY || 0, r = e.scaleX, o = e.scaleY, a = e.inverted, s = e.rotation, l = e.element;
                    a && (n += e.attr("width"), i += e.attr("height")), t = ["translate(" + n + "," + i + ")"], a ? t.push("rotate(90) scale(-1,1)") : s && t.push("rotate(" + s + " " + (l.getAttribute("x") || 0) + " " + (l.getAttribute("y") || 0) + ")"), (d(r) || d(o)) && t.push("scale(" + m(r, 1) + " " + m(o, 1) + ")"), t.length && l.setAttribute("transform", t.join(" "))
                }, toFront: function () {
                    var t = this.element;
                    return t.parentNode.appendChild(t), this
                }, align: function (t, e, n) {
                    var i, r, a, s, l, c = {}, u = this.renderer, d = u.alignedObjects;
                    return t ? (this.alignOptions = t, this.alignByTranslate = e, (!n || o(n)) && (this.alignTo = l = n || "renderer", p(d, this), d.push(this), n = null)) : (t = this.alignOptions, e = this.alignByTranslate, l = this.alignTo), n = m(n, u[l], u), i = t.align, r = t.verticalAlign, a = (n.x || 0) + (t.x || 0), s = (n.y || 0) + (t.y || 0), ("right" === i || "center" === i) && (a += (n.width - (t.width || 0)) / {
                            right: 1,
                            center: 2
                        }[i]), c[e ? "translateX" : "x"] = me(a), ("bottom" === r || "middle" === r) && (s += (n.height - (t.height || 0)) / ({
                            bottom: 1,
                            middle: 2
                        }[r] || 1)), c[e ? "translateY" : "y"] = me(s), this[this.placed ? "animate" : "attr"](c), this.placed = !0, this.alignAttr = c, this
                }, getBBox: function () {
                    var e, n, i, r = this, o = r.bBox, a = r.renderer, s = r.rotation, l = r.element, c = r.styles, u = s * Se, p = r.textStr;
                    if (("" === p || Qe.test(p)) && (i = "num." + p.toString().length + (c ? "|" + c.fontSize + "|" + c.fontFamily : "")), i && (o = a.cache[i]), !o) {
                        if (l.namespaceURI === Me || a.forExport) {
                            try {
                                o = l.getBBox ? t({}, l.getBBox()) : {width: l.offsetWidth, height: l.offsetHeight}
                            } catch (d) {
                            }
                            (!o || o.width < 0) && (o = {width: 0, height: 0})
                        } else o = r.htmlGetBBox();
                        a.isSVG && (e = o.width, n = o.height, Ae && c && "11px" === c.fontSize && "16.9" === n.toPrecision(3) && (o.height = n = 14), s && (o.width = be(n * ke(u)) + be(e * we(u)), o.height = be(n * we(u)) + be(e * ke(u)))), r.bBox = o, i && (a.cache[i] = o)
                    }
                    return o
                }, show: function (t) {
                    return t && this.element.namespaceURI === Me ? (this.element.removeAttribute("visibility"), this) : this.attr({visibility: t ? "inherit" : Ue})
                }, hide: function () {
                    return this.attr({visibility: Ye})
                }, fadeOut: function (t) {
                    var e = this;
                    e.animate({opacity: 0}, {
                        duration: t || 150, complete: function () {
                            e.hide()
                        }
                    })
                }, add: function (t) {
                    var e, n, i, o, a, s = this.renderer, l = t || s, c = l.element || s.box, u = this.element, p = this.zIndex;
                    if (t && (this.parentGroup = t), this.parentInverted = t && t.inverted, void 0 !== this.textStr && s.buildText(this), p && (l.handleZ = !0, p = r(p)), l.handleZ)for (e = c.childNodes, o = 0; o < e.length; o++)if (n = e[o], i = h(n, "zIndex"), n !== u && (r(i) > p || !d(p) && d(i))) {
                        c.insertBefore(u, n), a = !0;
                        break
                    }
                    return a || c.appendChild(u), this.added = !0, this.onAdd && this.onAdd(), this
                }, safeRemoveChild: function (t) {
                    var e = t.parentNode;
                    e && e.removeChild(t)
                }, destroy: function () {
                    var t, e, n, i = this, r = i.element || {}, o = i.shadows, a = i.renderer.isSVG && "SPAN" === r.nodeName && i.parentGroup;
                    if (r.onclick = r.onmouseout = r.onmouseover = r.onmousemove = r.point = null, Ln(i), i.clipPath && (i.clipPath = i.clipPath.destroy()), i.stops) {
                        for (n = 0; n < i.stops.length; n++)i.stops[n] = i.stops[n].destroy();
                        i.stops = null
                    }
                    for (i.safeRemoveChild(r), o && wn(o, function (t) {
                        i.safeRemoveChild(t)
                    }); a && 0 === a.div.childNodes.length;)t = a.parentGroup, i.safeRemoveChild(a.div), delete a.div, a = t;
                    i.alignTo && p(i.renderer.alignedObjects, i);
                    for (e in i)delete i[e];
                    return null
                }, shadow: function (t, e, n) {
                    var i, r, o, a, s, l, c = [], u = this.element;
                    if (t) {
                        for (a = m(t.width, 3), s = (t.opacity || .15) / a, l = this.parentInverted ? "(-1,-1)" : "(" + m(t.offsetX, 1) + ", " + m(t.offsetY, 1) + ")", i = 1; a >= i; i++)r = u.cloneNode(0), o = 2 * a + 1 - 2 * i, h(r, {
                            isShadow: "true",
                            stroke: t.color || "black",
                            "stroke-opacity": s * i,
                            "stroke-width": o,
                            transform: "translate" + l,
                            fill: Je
                        }), n && (h(r, "height", ye(h(r, "height") - o, 0)), r.cutHeight = o), e ? e.element.appendChild(r) : u.parentNode.insertBefore(r, u), c.push(r);
                        this.shadows = c
                    }
                    return this
                }, xGetter: function (t) {
                    return "circle" === this.element.nodeName && (t = {
                            x: "cx",
                            y: "cy"
                        }[t] || t), this._defaultGetter(t)
                }, _defaultGetter: function (t) {
                    var e = m(this[t], this.element ? this.element.getAttribute(t) : null, 0);
                    return /^[0-9\.]+$/.test(e) && (e = parseFloat(e)), e
                }, dSetter: function (t, e, n) {
                    t && t.join && (t = t.join(" ")), /(NaN| {2}|^$)/.test(t) && (t = "M 0 0"), n.setAttribute(e, t), this[e] = t
                }, dashstyleSetter: function (t) {
                    var e;
                    if (t = t && t.toLowerCase()) {
                        for (t = t.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(","), e = t.length; e--;)t[e] = r(t[e]) * this.element.getAttribute("stroke-width");
                        t = t.join(","), this.element.setAttribute("stroke-dasharray", t)
                    }
                }, alignSetter: function (t) {
                    this.element.setAttribute("text-anchor", {left: "start", center: "middle", right: "end"}[t])
                }, opacitySetter: function (t, e, n) {
                    this[e] = t, n.setAttribute(e, t)
                }, "stroke-widthSetter": function (t, e, n) {
                    0 === t && (t = 1e-5), this.strokeWidth = t, n.setAttribute(e, t)
                }, titleSetter: function (t) {
                    var e = this.element.getElementsByTagName("title")[0];
                    e || (e = de.createElementNS(Me, "title"), this.element.appendChild(e)), e.textContent = t
                }, textSetter: function (t) {
                    t !== this.textStr && (delete this.bBox, this.textStr = t, this.added && this.renderer.buildText(this))
                }, fillSetter: function (t, e, n) {
                    "string" == typeof t ? n.setAttribute(e, t) : t && this.colorGradient(t, e, n)
                }, zIndexSetter: function (t, e, n) {
                    n.setAttribute(e, t), this[e] = t
                }, _defaultSetter: function (t, e, n) {
                    n.setAttribute(e, t)
                }
            }, z.prototype.yGetter = z.prototype.xGetter, z.prototype.translateXSetter = z.prototype.translateYSetter = z.prototype.rotationSetter = z.prototype.verticalAlignSetter = z.prototype.scaleXSetter = z.prototype.scaleYSetter = function (t, e) {
                this[e] = t, this.doTransform = !0
            }, z.prototype.strokeSetter = z.prototype.fillSetter;
            var zn = function () {
                this.init.apply(this, arguments)
            };
            zn.prototype = {
                Element: z, init: function (t, e, n, i, r) {
                    var o, a, s, l = this, c = location;
                    o = l.createElement("svg").attr({version: "1.1"}).css(this.getStyle(i)), a = o.element, t.appendChild(a), -1 === t.innerHTML.indexOf("xmlns") && h(a, "xmlns", Me), l.isSVG = !0, l.box = a, l.boxWrapper = o, l.alignedObjects = [], l.url = (Le || De) && de.getElementsByTagName("base").length ? c.href.replace(/#.*?$/, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "", s = this.createElement("desc").add(), s.element.appendChild(de.createTextNode("Created with " + qe + " " + We)), l.defs = this.createElement("defs").add(), l.forExport = r, l.gradients = {}, l.cache = {}, l.setSize(e, n, !1);
                    var u, p;
                    Le && t.getBoundingClientRect && (l.subPixelFix = u = function () {
                        g(t, {left: 0, top: 0}), p = t.getBoundingClientRect(), g(t, {
                            left: ve(p.left) - p.left + Ve,
                            top: ve(p.top) - p.top + Ve
                        })
                    }, u(), Cn(he, "resize", u))
                }, getStyle: function (e) {
                    return this.style = t({
                        fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                        fontSize: "12px"
                    }, e)
                }, isHidden: function () {
                    return !this.boxWrapper.getBBox().width
                }, destroy: function () {
                    var t = this, e = t.defs;
                    return t.box = null, t.boxWrapper = t.boxWrapper.destroy(), L(t.gradients || {}), t.gradients = null, e && (t.defs = e.destroy()), t.subPixelFix && _n(he, "resize", t.subPixelFix), t.alignedObjects = null, null
                }, createElement: function (t) {
                    var e = new this.Element;
                    return e.init(this, t), e
                }, draw: function () {
                }, buildText: function (t) {
                    for (var e, n, i, o = t.element, a = this, s = a.forExport, l = m(t.textStr, "").toString(), c = -1 !== l.indexOf("<"), u = o.childNodes, p = h(o, "x"), d = t.styles, f = t.textWidth, v = d && d.lineHeight, y = u.length, x = function (t) {
                        return v ? r(v) : a.fontMetrics(/(px|em)$/.test(t && t.style.fontSize) ? t.style.fontSize : d && d.fontSize || a.style.fontSize || 12).h
                    }; y--;)o.removeChild(u[y]);
                    return c || -1 !== l.indexOf(" ") ? (n = /<.*style="([^"]+)".*>/, i = /<.*href="(http[^"]+)".*>/, f && !t.added && this.box.appendChild(o), e = c ? l.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g) : [l], "" === e[e.length - 1] && e.pop(), wn(e, function (e, r) {
                        var l, c = 0;
                        e = e.replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||"), l = e.split("|||"), wn(l, function (e) {
                            if ("" !== e || 1 === l.length) {
                                var u, m = {}, v = de.createElementNS(Me, "tspan");
                                if (n.test(e) && (u = e.match(n)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), h(v, "style", u)), i.test(e) && !s && (h(v, "onclick", 'location.href="' + e.match(i)[1] + '"'), g(v, {cursor: "pointer"})), e = (e.replace(/<(.|\n)*?>/g, "") || " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">"), " " !== e && (v.appendChild(de.createTextNode(e)), c ? m.dx = 0 : r && null !== p && (m.x = p), h(v, m), !c && r && (!Ne && s && g(v, {display: "block"}), h(v, "dy", x(v), De && v.offsetHeight)), o.appendChild(v), c++, f))for (var y, b, w, k = e.replace(/([^\^])-/g, "$1- ").split(" "), T = k.length > 1 && "nowrap" !== d.whiteSpace, S = t._clipHeight, C = [], _ = x(), A = 1; T && (k.length || C.length);)delete t.bBox, w = t.getBBox(), b = w.width, !Ne && a.forExport && (b = a.measureSpanWidth(v.firstChild.data, t.styles)), y = b > f, y && 1 !== k.length ? (v.removeChild(v.firstChild), C.unshift(k.pop())) : (k = C, C = [], k.length && (A++, S && A * _ > S ? (k = ["..."], t.attr("title", t.textStr)) : (v = de.createElementNS(Me, "tspan"), h(v, {
                                    dy: _,
                                    x: p
                                }), u && h(v, "style", u), o.appendChild(v), b > f && (f = b)))), k.length && v.appendChild(de.createTextNode(k.join(" ").replace(/- /g, "-")))
                            }
                        })
                    }), void 0) : void o.appendChild(de.createTextNode(l))
                }, button: function (e, i, r, o, a, s, l, c, u) {
                    var p, d, h, f, m, g, v = this.label(e, i, r, u, null, null, null, null, "button"), y = 0, x = {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    };
                    return a = n({
                        "stroke-width": 1,
                        stroke: "#CCCCCC",
                        fill: {linearGradient: x, stops: [[0, "#FEFEFE"], [1, "#F6F6F6"]]},
                        r: 2,
                        padding: 5,
                        style: {color: "black"}
                    }, a), h = a.style, delete a.style, s = n(a, {
                        stroke: "#68A",
                        fill: {linearGradient: x, stops: [[0, "#FFF"], [1, "#ACF"]]}
                    }, s), f = s.style, delete s.style, l = n(a, {
                        stroke: "#68A",
                        fill: {linearGradient: x, stops: [[0, "#9BD"], [1, "#CDF"]]}
                    }, l), m = l.style, delete l.style, c = n(a, {style: {color: "#CCC"}}, c), g = c.style, delete c.style, Cn(v.element, Ae ? "mouseover" : "mouseenter", function () {
                        3 !== y && v.attr(s).css(f)
                    }), Cn(v.element, Ae ? "mouseout" : "mouseleave", function () {
                        3 !== y && (p = [a, s, l][y], d = [h, f, m][y], v.attr(p).css(d))
                    }), v.setState = function (t) {
                        v.state = y = t, t ? 2 === t ? v.attr(l).css(m) : 3 === t && v.attr(c).css(g) : v.attr(a).css(h)
                    }, v.on("click", function () {
                        3 !== y && o.call(v)
                    }).attr(a).css(t({cursor: "default"}, h))
                }, crispLine: function (t, e) {
                    return t[1] === t[4] && (t[1] = t[4] = me(t[1]) - e % 2 / 2), t[2] === t[5] && (t[2] = t[5] = me(t[2]) + e % 2 / 2), t
                }, path: function (e) {
                    var n = {fill: Je};
                    return s(e) ? n.d = e : a(e) && t(n, e), this.createElement("path").attr(n)
                }, circle: function (t, e, n) {
                    var i = a(t) ? t : {x: t, y: e, r: n}, r = this.createElement("circle");
                    return r.xSetter = function (t) {
                        this.element.setAttribute("cx", t)
                    }, r.ySetter = function (t) {
                        this.element.setAttribute("cy", t)
                    }, r.attr(i)
                }, arc: function (t, e, n, i, r, o) {
                    var s;
                    return a(t) && (e = t.y, n = t.r, i = t.innerR, r = t.start, o = t.end, t = t.x), s = this.symbol("arc", t || 0, e || 0, n || 0, n || 0, {
                        innerR: i || 0,
                        start: r || 0,
                        end: o || 0
                    }), s.r = n, s
                }, rect: function (t, e, n, i, r, o) {
                    r = a(t) ? t.r : r;
                    var s = this.createElement("rect"), l = a(t) ? t : t === F ? {} : {
                        x: t,
                        y: e,
                        width: ye(n, 0),
                        height: ye(i, 0)
                    };
                    return o !== F && (l.strokeWidth = o, l = s.crisp(l)), r && (l.r = r), s.rSetter = function (t) {
                        h(this.element, {rx: t, ry: t})
                    }, s.attr(l)
                }, setSize: function (t, e, n) {
                    var i = this, r = i.alignedObjects, o = r.length;
                    for (i.width = t, i.height = e, i.boxWrapper[m(n, !0) ? "animate" : "attr"]({
                        width: t,
                        height: e
                    }); o--;)r[o].align()
                }, g: function (t) {
                    var e = this.createElement("g");
                    return d(t) ? e.attr({"class": Ge + t}) : e
                }, image: function (e, n, i, r, o) {
                    var a, s = {preserveAspectRatio: Je};
                    return arguments.length > 1 && t(s, {
                        x: n,
                        y: i,
                        width: r,
                        height: o
                    }), a = this.createElement("image").attr(s), a.element.setAttributeNS ? a.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", e) : a.element.setAttribute("hc-svg-href", e), a
                }, symbol: function (e, n, i, r, o, a) {
                    var s, l, c, u, p, d = this.symbols[e], h = d && d(me(n), me(i), r, o, a), f = /^url\((.*?)\)$/;
                    return h ? (s = this.path(h), t(s, {
                        symbolName: e,
                        x: n,
                        y: i,
                        width: r,
                        height: o
                    }), a && t(s, a)) : f.test(e) && (p = function (t, e) {
                        t.element && (t.attr({
                            width: e[0],
                            height: e[1]
                        }), t.alignByTranslate || t.translate(me((r - e[0]) / 2), me((o - e[1]) / 2)))
                    }, c = e.match(f)[1], u = Re[c], s = this.image(c).attr({
                        x: n,
                        y: i
                    }), s.isImg = !0, u ? p(s, u) : (s.attr({width: 0, height: 0}), l = v("img", {
                        onload: function () {
                            p(s, Re[c] = [this.width, this.height])
                        }, src: c
                    }))), s
                }, symbols: {
                    circle: function (t, e, n, i) {
                        var r = .166 * n;
                        return [Ze, t + n / 2, e, "C", t + n + r, e, t + n + r, e + i, t + n / 2, e + i, "C", t - r, e + i, t - r, e, t + n / 2, e, "Z"]
                    }, square: function (t, e, n, i) {
                        return [Ze, t, e, Ke, t + n, e, t + n, e + i, t, e + i, "Z"]
                    }, triangle: function (t, e, n, i) {
                        return [Ze, t + n / 2, e, Ke, t + n, e + i, t, e + i, "Z"]
                    }, "triangle-down": function (t, e, n, i) {
                        return [Ze, t, e, Ke, t + n, e, t + n / 2, e + i, "Z"]
                    }, diamond: function (t, e, n, i) {
                        return [Ze, t + n / 2, e, Ke, t + n, e + i / 2, t + n / 2, e + i, t, e + i / 2, "Z"]
                    }, arc: function (t, e, n, i, r) {
                        var o = r.start, a = r.r || n || i, s = r.end - .001, l = r.innerR, c = r.open, u = we(o), p = ke(o), d = we(s), h = ke(s), f = r.end - o < Te ? 0 : 1;
                        return [Ze, t + a * u, e + a * p, "A", a, a, 0, f, 1, t + a * d, e + a * h, c ? Ze : Ke, t + l * d, e + l * h, "A", l, l, 0, f, 0, t + l * u, e + l * p, c ? "" : "Z"]
                    }, callout: function (t, e, n, i, r) {
                        var o, a = 6, s = 6, l = xe(r && r.r || 0, n, i), c = l + s, u = r && r.anchorX, p = r && r.anchorY, d = me(r.strokeWidth || 0) % 2 / 2;
                        return t += d, e += d, o = ["M", t + l, e, "L", t + n - l, e, "C", t + n, e, t + n, e, t + n, e + l, "L", t + n, e + i - l, "C", t + n, e + i, t + n, e + i, t + n - l, e + i, "L", t + l, e + i, "C", t, e + i, t, e + i, t, e + i - l, "L", t, e + l, "C", t, e, t, e, t + l, e], u && u > n && p > e + c && e + i - c > p ? o.splice(13, 3, "L", t + n, p - s, t + n + a, p, t + n, p + s, t + n, e + i - l) : u && 0 > u && p > e + c && e + i - c > p ? o.splice(33, 3, "L", t, p + s, t - a, p, t, p - s, t, e + l) : p && p > i && u > t + c && t + n - c > u ? o.splice(23, 3, "L", u + s, e + i, u, e + i + a, u - s, e + i, t + l, e + i) : p && 0 > p && u > t + c && t + n - c > u && o.splice(3, 3, "L", u - s, e, u, e - a, u + s, e, n - l, e), o
                    }
                }, clipRect: function (t, e, n, i) {
                    var r, o = Ge + Ie++, a = this.createElement("clipPath").attr({id: o}).add(this.defs);
                    return r = this.rect(t, e, n, i, 0).add(a), r.id = o, r.clipPath = a, r
                }, text: function (t, e, n, i) {
                    var r, o = this, a = je || !Ne && o.forExport, s = {};
                    return i && !o.forExport ? o.html(t, e, n) : (s.x = Math.round(e || 0), n && (s.y = Math.round(n)), (t || 0 === t) && (s.text = t), r = o.createElement("text").attr(s), a && r.css({position: $e}), i || (r.xSetter = function (t, e, n) {
                        var i, r, o = n.childNodes;
                        for (r = 1; r < o.length; r++)i = o[r], i.getAttribute("x") === n.getAttribute("x") && i.setAttribute("x", t);
                        n.setAttribute(e, t)
                    }), r)
                }, fontMetrics: function (t) {
                    t = t || this.style.fontSize, t = /px/.test(t) ? r(t) : /em/.test(t) ? 12 * parseFloat(t) : 12;
                    var e = 24 > t ? t + 4 : me(1.2 * t), n = me(.8 * e);
                    return {h: e, b: n}
                }, label: function (e, i, r, o, a, s, l, c, u) {
                    function p() {
                        var e, n, i = C.element.style;
                        g = (void 0 === v || void 0 === y || S.styles.textAlign) && C.textStr && C.getBBox(), S.width = (v || g.width || 0) + 2 * A + P, S.height = (y || g.height || 0) + 2 * A, w = A + T.fontMetrics(i && i.fontSize).b, k && (m || (e = me(-_ * A), n = c ? -w : 0, S.box = m = o ? T.symbol(o, e, n, S.width, S.height, L) : T.rect(e, n, S.width, S.height, 0, L[dn]), m.attr("fill", Je).add(S)), m.isImg || m.attr(t({
                            width: me(S.width),
                            height: me(S.height)
                        }, L)), L = null)
                    }

                    function h() {
                        var t, e = S.styles, n = e && e.textAlign, i = P + A * (1 - _);
                        t = c ? 0 : w, d(v) && g && ("center" === n || "right" === n) && (i += {
                                center: .5,
                                right: 1
                            }[n] * (v - g.width)), (i !== C.x || t !== C.y) && (C.attr("x", i), t !== F && C.attr("y", t)), C.x = i, C.y = t
                    }

                    function f(t, e) {
                        m ? m.attr(t, e) : L[t] = e
                    }

                    var m, g, v, y, x, b, w, k, T = this, S = T.g(u), C = T.text("", 0, 0, l).attr({zIndex: 1}), _ = 0, A = 3, P = 0, D = 0, L = {};
                    S.onAdd = function () {
                        C.add(S), S.attr({text: e || "", x: i, y: r}), m && d(a) && S.attr({anchorX: a, anchorY: s})
                    }, S.widthSetter = function (t) {
                        v = t
                    }, S.heightSetter = function (t) {
                        y = t
                    }, S.paddingSetter = function (t) {
                        d(t) && t !== A && (A = t, h())
                    }, S.paddingLeftSetter = function (t) {
                        d(t) && t !== P && (P = t, h())
                    }, S.alignSetter = function (t) {
                        _ = {left: 0, center: .5, right: 1}[t]
                    }, S.textSetter = function (t) {
                        t !== F && C.textSetter(t), p(), h()
                    }, S["stroke-widthSetter"] = function (t, e) {
                        t && (k = !0), D = t % 2 / 2, f(e, t)
                    }, S.strokeSetter = S.fillSetter = S.rSetter = function (t, e) {
                        "fill" === e && t && (k = !0), f(e, t)
                    }, S.anchorXSetter = function (t, e) {
                        a = t, f(e, t + D - x)
                    }, S.anchorYSetter = function (t, e) {
                        s = t, f(e, t - b)
                    }, S.xSetter = function (t) {
                        S.x = t, _ && (t -= _ * ((v || g.width) + A)), x = me(t), S.attr("translateX", x)
                    }, S.ySetter = function (t) {
                        b = S.y = me(t), S.attr("translateY", b)
                    };
                    var O = S.css;
                    return t(S, {
                        css: function (t) {
                            if (t) {
                                var e = {};
                                t = n(t), wn(["fontSize", "fontWeight", "fontFamily", "color", "lineHeight", "width", "textDecoration", "textShadow"], function (n) {
                                    t[n] !== F && (e[n] = t[n], delete t[n])
                                }), C.css(e)
                            }
                            return O.call(S, t)
                        }, getBBox: function () {
                            return {width: g.width + 2 * A, height: g.height + 2 * A, x: g.x - A, y: g.y - A}
                        }, shadow: function (t) {
                            return m && m.shadow(t), S
                        }, destroy: function () {
                            _n(S.element, "mouseenter"), _n(S.element, "mouseleave"), C && (C = C.destroy()), m && (m = m.destroy()), z.prototype.destroy.call(S), S = T = p = h = f = null
                        }
                    })
                }
            }, $ = zn, t(z.prototype, {
                htmlCss: function (e) {
                    var n = this, i = n.element, r = e && "SPAN" === i.tagName && e.width;
                    return r && (delete e.width, n.textWidth = r, n.updateTransform()), n.styles = t(n.styles, e), g(n.element, e), n
                }, htmlGetBBox: function () {
                    var t = this, e = t.element, n = t.bBox;
                    return n || ("text" === e.nodeName && (e.style.position = $e), n = t.bBox = {
                        x: e.offsetLeft,
                        y: e.offsetTop,
                        width: e.offsetWidth,
                        height: e.offsetHeight
                    }), n
                }, htmlUpdateTransform: function () {
                    if (!this.added)return void(this.alignOnAdd = !0);
                    var t = this, e = t.renderer, n = t.element, i = t.translateX || 0, o = t.translateY || 0, a = t.x || 0, s = t.y || 0, l = t.textAlign || "left", c = {
                        left: 0,
                        center: .5,
                        right: 1
                    }[l], u = t.shadows;
                    if (g(n, {marginLeft: i, marginTop: o}), u && wn(u, function (t) {
                            g(t, {marginLeft: i + 1, marginTop: o + 1})
                        }), t.inverted && wn(n.childNodes, function (t) {
                            e.invertChild(t, n)
                        }), "SPAN" === n.tagName) {
                        var p, h, f = t.rotation, v = r(t.textWidth), y = [f, l, n.innerHTML, t.textWidth].join(",");
                        y !== t.cTT && (h = e.fontMetrics(n.style.fontSize).b, d(f) && t.setSpanRotation(f, c, h), p = m(t.elemWidth, n.offsetWidth), p > v && /[ \-]/.test(n.textContent || n.innerText) && (g(n, {
                            width: v + Ve,
                            display: "block",
                            whiteSpace: "normal"
                        }), p = v), t.getSpanCorrection(p, h, c, f, l)), g(n, {
                            left: a + (t.xCorr || 0) + Ve,
                            top: s + (t.yCorr || 0) + Ve
                        }), De && (h = n.offsetHeight), t.cTT = y
                    }
                }, setSpanRotation: function (t, e, n) {
                    var i = {}, r = Ae ? "-ms-transform" : De ? "-webkit-transform" : Le ? "MozTransform" : _e ? "-o-transform" : "";
                    i[r] = i.transform = "rotate(" + t + "deg)", i[r + (Le ? "Origin" : "-origin")] = i.transformOrigin = 100 * e + "% " + n + "px", g(this.element, i)
                }, getSpanCorrection: function (t, e, n) {
                    this.xCorr = -t * n, this.yCorr = -e
                }
            }), t(zn.prototype, {
                html: function (e, n, i) {
                    var r = this.createElement("span"), o = r.element, a = r.renderer;
                    return r.textSetter = function (t) {
                        t !== o.innerHTML && delete this.bBox, o.innerHTML = this.textStr = t
                    }, r.xSetter = r.ySetter = r.alignSetter = r.rotationSetter = function (t, e) {
                        "align" === e && (e = "textAlign"), r[e] = t, r.htmlUpdateTransform()
                    }, r.attr({text: e, x: me(n), y: me(i)}).css({
                        position: $e,
                        whiteSpace: "nowrap",
                        fontFamily: this.style.fontFamily,
                        fontSize: this.style.fontSize
                    }), r.css = r.htmlCss, a.isSVG && (r.add = function (e) {
                        var n, i, s = a.box.parentNode, l = [];
                        if (this.parentGroup = e, e) {
                            if (n = e.div, !n) {
                                for (i = e; i;)l.push(i), i = i.parentGroup;
                                wn(l.reverse(), function (e) {
                                    var i;
                                    n = e.div = e.div || v(Fe, {className: h(e.element, "class")}, {
                                            position: $e,
                                            left: (e.translateX || 0) + Ve,
                                            top: (e.translateY || 0) + Ve
                                        }, n || s), i = n.style, t(e, {
                                        translateXSetter: function (t, n) {
                                            i.left = t + Ve, e[n] = t, e.doTransform = !0
                                        }, translateYSetter: function (t, n) {
                                            i.top = t + Ve, e[n] = t, e.doTransform = !0
                                        }, visibilitySetter: function (t, e) {
                                            i[e] = t
                                        }
                                    })
                                })
                            }
                        } else n = s;
                        return n.appendChild(o), r.added = !0, r.alignOnAdd && r.htmlUpdateTransform(), r
                    }), r
                }
            });
            var Bn, Hn;
            if (!Ne && !je) {
                fn.VMLElement = Hn = {
                    init: function (t, e) {
                        var n = this, i = ["<", e, ' filled="f" stroked="f"'], r = ["position: ", $e, ";"], o = e === Fe;
                        ("shape" === e || o) && r.push("left:0;top:0;width:1px;height:1px;"), r.push("visibility: ", o ? Ye : Ue), i.push(' style="', r.join(""), '"/>'), e && (i = o || "span" === e || "img" === e ? i.join("") : t.prepVML(i), n.element = v(i)), n.renderer = t
                    }, add: function (t) {
                        var e = this, n = e.renderer, i = e.element, r = n.box, o = t && t.inverted, a = t ? t.element || t : r;
                        return o && n.invertChild(i, a), a.appendChild(i), e.added = !0, e.alignOnAdd && !e.deferUpdateTransform && e.updateTransform(), e.onAdd && e.onAdd(), e
                    }, updateTransform: z.prototype.htmlUpdateTransform, setSpanRotation: function () {
                        var t = this.rotation, e = we(t * Se), n = ke(t * Se);
                        g(this.element, {filter: t ? ["progid:DXImageTransform.Microsoft.Matrix(M11=", e, ", M12=", -n, ", M21=", n, ", M22=", e, ", sizingMethod='auto expand')"].join("") : Je})
                    }, getSpanCorrection: function (t, e, n, i, r) {
                        var o, a = i ? we(i * Se) : 1, s = i ? ke(i * Se) : 0, l = m(this.elemHeight, this.element.offsetHeight), c = r && "left" !== r;
                        this.xCorr = 0 > a && -t, this.yCorr = 0 > s && -l, o = 0 > a * s, this.xCorr += s * e * (o ? 1 - n : n), this.yCorr -= a * e * (i ? o ? n : 1 - n : 1), c && (this.xCorr -= t * n * (0 > a ? -1 : 1), i && (this.yCorr -= l * n * (0 > s ? -1 : 1)), g(this.element, {textAlign: r}))
                    }, pathToVML: function (t) {
                        for (var e = t.length, n = []; e--;)l(t[e]) ? n[e] = me(10 * t[e]) - 5 : "Z" === t[e] ? n[e] = "x" : (n[e] = t[e], !t.isArc || "wa" !== t[e] && "at" !== t[e] || (n[e + 5] === n[e + 7] && (n[e + 7] += t[e + 7] > t[e + 5] ? 1 : -1), n[e + 6] === n[e + 8] && (n[e + 8] += t[e + 8] > t[e + 6] ? 1 : -1)));
                        return n.join(" ") || "x"
                    }, clip: function (t) {
                        var e, n, i = this;
                        return t ? (e = t.members, p(e, i), e.push(i), i.destroyClip = function () {
                            p(e, i)
                        }, n = t.getCSS(i)) : (i.destroyClip && i.destroyClip(), n = {clip: Pe ? "inherit" : "rect(auto)"}), i.css(n)
                    }, css: z.prototype.htmlCss, safeRemoveChild: function (t) {
                        t.parentNode && O(t)
                    }, destroy: function () {
                        return this.destroyClip && this.destroyClip(), z.prototype.destroy.apply(this)
                    }, on: function (t, e) {
                        return this.element["on" + t] = function () {
                            var t = he.event;
                            t.target = t.srcElement, e(t)
                        }, this
                    }, cutOffPath: function (t, e) {
                        var n;
                        return t = t.split(/[ ,]/), n = t.length, (9 === n || 11 === n) && (t[n - 4] = t[n - 2] = r(t[n - 2]) - 10 * e), t.join(" ")
                    }, shadow: function (t, e, n) {
                        var i, o, a, s, l, c, u, p = [], d = this.element, h = this.renderer, f = d.style, g = d.path;
                        if (g && "string" != typeof g.value && (g = "x"), l = g, t) {
                            for (c = m(t.width, 3), u = (t.opacity || .15) / c, i = 1; 3 >= i; i++)s = 2 * c + 1 - 2 * i, n && (l = this.cutOffPath(g.value, s + .5)), a = ['<shape isShadow="true" strokeweight="', s, '" filled="false" path="', l, '" coordsize="10 10" style="', d.style.cssText, '" />'], o = v(h.prepVML(a), null, {
                                left: r(f.left) + m(t.offsetX, 1),
                                top: r(f.top) + m(t.offsetY, 1)
                            }), n && (o.cutOff = s + 1), a = ['<stroke color="', t.color || "black", '" opacity="', u * i, '"/>'], v(h.prepVML(a), null, null, o), e ? e.element.appendChild(o) : d.parentNode.insertBefore(o, d), p.push(o);
                            this.shadows = p
                        }
                        return this
                    }, updateShadows: ze, setAttr: function (t, e) {
                        Pe ? this.element[t] = e : this.element.setAttribute(t, e)
                    }, classSetter: function (t) {
                        this.element.className = t
                    }, dashstyleSetter: function (t, e, n) {
                        var i = n.getElementsByTagName("stroke")[0] || v(this.renderer.prepVML(["<stroke/>"]), null, null, n);
                        i[e] = t || "solid", this[e] = t
                    }, dSetter: function (t, e, n) {
                        var i, r = this.shadows;
                        if (t = t || [], this.d = t.join(" "), n.path = t = this.pathToVML(t), r)for (i = r.length; i--;)r[i].path = r[i].cutOff ? this.cutOffPath(t, r[i].cutOff) : t;
                        this.setAttr(e, t)
                    }, fillSetter: function (t, e, n) {
                        var i = n.nodeName;
                        "SPAN" === i ? n.style.color = t : "IMG" !== i && (n.filled = t !== Je, this.setAttr("fillcolor", this.renderer.color(t, n, e, this)))
                    }, opacitySetter: ze, rotationSetter: function (t, e, n) {
                        var i = n.style;
                        this[e] = i[e] = t, i.left = -me(ke(t * Se) + 1) + Ve, i.top = me(we(t * Se)) + Ve
                    }, strokeSetter: function (t, e, n) {
                        this.setAttr("strokecolor", this.renderer.color(t, n, e))
                    }, "stroke-widthSetter": function (t, e, n) {
                        n.stroked = !!t, this[e] = t, l(t) && (t += Ve), this.setAttr("strokeweight", t)
                    }, titleSetter: function (t, e) {
                        this.setAttr(e, t)
                    }, visibilitySetter: function (t, e, n) {
                        "inherit" === t && (t = Ue), this.shadows && wn(this.shadows, function (n) {
                            n.style[e] = t
                        }), "DIV" === n.nodeName && (t = t === Ye ? "-999em" : 0, Pe || (n.style[e] = t ? Ue : Ye), e = "top"), n.style[e] = t
                    }, xSetter: function (t, e, n) {
                        this[e] = t, "x" === e ? e = "left" : "y" === e && (e = "top"), this.updateClipping ? (this[e] = t, this.updateClipping()) : n.style[e] = t
                    }, zIndexSetter: function (t, e, n) {
                        n.style[e] = t
                    }
                }, Hn = y(z, Hn), Hn.prototype.ySetter = Hn.prototype.widthSetter = Hn.prototype.heightSetter = Hn.prototype.xSetter;
                var qn = {
                    Element: Hn, isIE8: Ce.indexOf("MSIE 8.0") > -1, init: function (e, n, i, r) {
                        var o, a, s, l = this;
                        if (l.alignedObjects = [], o = l.createElement(Fe).css(t(this.getStyle(r), {position: Xe})), a = o.element, e.appendChild(o.element), l.isVML = !0, l.box = a, l.boxWrapper = o, l.cache = {}, l.setSize(n, i, !1), !de.namespaces.hcv) {
                            de.namespaces.add("hcv", "urn:schemas-microsoft-com:vml"), s = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } ";
                            try {
                                de.createStyleSheet().cssText = s
                            } catch (c) {
                                de.styleSheets[0].cssText += s
                            }
                        }
                    }, isHidden: function () {
                        return !this.box.offsetWidth
                    }, clipRect: function (e, n, i, r) {
                        var o = this.createElement(), s = a(e);
                        return t(o, {
                            members: [],
                            left: (s ? e.x : e) + 1,
                            top: (s ? e.y : n) + 1,
                            width: (s ? e.width : i) - 1,
                            height: (s ? e.height : r) - 1,
                            getCSS: function (e) {
                                var n = e.element, i = n.nodeName, r = "shape" === i, o = e.inverted, a = this, s = a.top - (r ? n.offsetTop : 0), l = a.left, c = l + a.width, u = s + a.height, p = {clip: "rect(" + me(o ? l : s) + "px," + me(o ? u : c) + "px," + me(o ? c : u) + "px," + me(o ? s : l) + "px)"};
                                return !o && Pe && "DIV" === i && t(p, {width: c + Ve, height: u + Ve}), p
                            },
                            updateClipping: function () {
                                wn(o.members, function (t) {
                                    t.element && t.css(o.getCSS(t))
                                })
                            }
                        })
                    }, color: function (t, e, n, i) {
                        var r, o, a, s = this, l = /^rgba/, c = Je;
                        if (t && t.linearGradient ? a = "gradient" : t && t.radialGradient && (a = "pattern"), a) {
                            var u, p, d, h, f, m, g, y, x, b, w, k, T = t.linearGradient || t.radialGradient, S = "", C = t.stops, _ = [], A = function () {
                                o = ['<fill colors="' + _.join(",") + '" opacity="', y, '" o:opacity2="', g, '" type="', a, '" ', S, 'focus="100%" method="any" />'], v(s.prepVML(o), null, null, e)
                            };
                            if (w = C[0], k = C[C.length - 1], w[0] > 0 && C.unshift([0, w[1]]), k[0] < 1 && C.push([1, k[1]]), wn(C, function (t, e) {
                                    l.test(t[1]) ? (r = In(t[1]), u = r.get("rgb"), p = r.get("a")) : (u = t[1], p = 1), _.push(100 * t[0] + "% " + u), e ? (y = p, x = u) : (g = p, b = u)
                                }), "fill" === n)if ("gradient" === a)d = T.x1 || T[0] || 0, h = T.y1 || T[1] || 0, f = T.x2 || T[2] || 0, m = T.y2 || T[3] || 0, S = 'angle="' + (90 - 180 * fe.atan((m - h) / (f - d)) / Te) + '"', A(); else {
                                var P, D = T.r, L = 2 * D, O = 2 * D, M = T.cx, N = T.cy, E = e.radialReference, j = function () {
                                    E && (P = i.getBBox(), M += (E[0] - P.x) / P.width - .5, N += (E[1] - P.y) / P.height - .5, L *= E[2] / P.width, O *= E[2] / P.height), S = 'src="' + G.global.VMLRadialGradientURL + '" size="' + L + "," + O + '" origin="0.5,0.5" position="' + M + "," + N + '" color2="' + b + '" ', A()
                                };
                                i.added ? j() : i.onAdd = j, c = x
                            } else c = u
                        } else if (l.test(t) && "IMG" !== e.tagName)r = In(t), o = ["<", n, ' opacity="', r.get("a"), '"/>'], v(this.prepVML(o), null, null, e), c = r.get("rgb"); else {
                            var R = e.getElementsByTagName(n);
                            R.length && (R[0].opacity = 1, R[0].type = "solid"), c = t
                        }
                        return c
                    }, prepVML: function (t) {
                        var e = "display:inline-block;behavior:url(#default#VML);", n = this.isIE8;
                        return t = t.join(""), n ? (t = t.replace("/>", ' xmlns="urn:schemas-microsoft-com:vml" />'), t = -1 === t.indexOf('style="') ? t.replace("/>", ' style="' + e + '" />') : t.replace('style="', 'style="' + e)) : t = t.replace("<", "<hcv:"), t
                    }, text: zn.prototype.html, path: function (e) {
                        var n = {coordsize: "10 10"};
                        return s(e) ? n.d = e : a(e) && t(n, e), this.createElement("shape").attr(n)
                    }, circle: function (t, e, n) {
                        var i = this.symbol("circle");
                        return a(t) && (n = t.r, e = t.y, t = t.x), i.isCircle = !0, i.r = n, i.attr({x: t, y: e})
                    }, g: function (t) {
                        var e, n;
                        return t && (n = {className: Ge + t, "class": Ge + t}), e = this.createElement(Fe).attr(n)
                    }, image: function (t, e, n, i, r) {
                        var o = this.createElement("img").attr({src: t});
                        return arguments.length > 1 && o.attr({x: e, y: n, width: i, height: r}), o
                    }, createElement: function (t) {
                        return "rect" === t ? this.symbol(t) : zn.prototype.createElement.call(this, t)
                    }, invertChild: function (t, e) {
                        var n = this, i = e.style, o = "IMG" === t.tagName && t.style;
                        g(t, {
                            flip: "x",
                            left: r(i.width) - (o ? r(o.top) : 1),
                            top: r(i.height) - (o ? r(o.left) : 1),
                            rotation: -90
                        }), wn(t.childNodes, function (e) {
                            n.invertChild(e, t)
                        })
                    }, symbols: {
                        arc: function (t, e, n, i, r) {
                            var o, a = r.start, s = r.end, l = r.r || n || i, c = r.innerR, u = we(a), p = ke(a), d = we(s), h = ke(s);
                            return s - a === 0 ? ["x"] : (o = ["wa", t - l, e - l, t + l, e + l, t + l * u, e + l * p, t + l * d, e + l * h], r.open && !c && o.push("e", Ze, t, e), o.push("at", t - c, e - c, t + c, e + c, t + c * d, e + c * h, t + c * u, e + c * p, "x", "e"), o.isArc = !0, o)
                        }, circle: function (t, e, n, i, r) {
                            return r && (n = i = 2 * r.r), r && r.isCircle && (t -= n / 2, e -= i / 2), ["wa", t, e, t + n, e + i, t + n, e + i / 2, t + n, e + i / 2, "e"]
                        }, rect: function (t, e, n, i, r) {
                            return zn.prototype.symbols[d(r) && r.r ? "callout" : "square"].call(0, t, e, n, i, r)
                        }
                    }
                };
                fn.VMLRenderer = Bn = function () {
                    this.init.apply(this, arguments)
                }, Bn.prototype = n(zn.prototype, qn), $ = Bn
            }
            zn.prototype.measureSpanWidth = function (t, e) {
                var n, i = de.createElement("span"), r = de.createTextNode(t);
                return i.appendChild(r), g(i, e), this.box.appendChild(i), n = i.offsetWidth, O(i), n
            };
            var Wn, Fn;
            je && (fn.CanVGRenderer = Wn = function () {
                Me = "http://www.w3.org/1999/xhtml"
            }, Wn.prototype.symbols = {}, Fn = function () {
                function t() {
                    var t, n = e.length;
                    for (t = 0; n > t; t++)e[t]();
                    e = []
                }

                var e = [];
                return {
                    push: function (n, i) {
                        0 === e.length && xn(i, t), e.push(n)
                    }
                }
            }(), $ = Wn), B.prototype = {
                addLabel: function () {
                    var e, n, i, r, o = this, a = o.axis, s = a.options, c = a.chart, p = a.horiz, h = a.categories, f = a.names, g = o.pos, v = s.labels, y = a.tickPositions, x = p && h && !v.step && !v.staggerLines && !v.rotation && c.plotWidth / y.length || !p && (c.margin[3] || .33 * c.chartWidth), b = g === y[0], w = g === y[y.length - 1], k = h ? m(h[g], f[g], g) : g, T = o.label, S = y.info;
                    a.isDatetimeAxis && S && (r = s.dateTimeLabelFormats[S.higherRanks[g] || S.unitName]), o.isFirst = b, o.isLast = w, e = a.labelFormatter.call({
                        axis: a,
                        chart: c,
                        isFirst: b,
                        isLast: w,
                        dateTimeLabelFormat: r,
                        value: a.isLog ? N(u(k)) : k
                    }), n = x && {width: ye(1, me(x - 2 * (v.padding || 10))) + Ve}, n = t(n, v.style), d(T) ? T && T.attr({text: e}).css(n) : (i = {align: a.labelAlign}, l(v.rotation) && (i.rotation = v.rotation), x && v.ellipsis && (i._clipHeight = a.len / y.length), o.label = d(e) && v.enabled ? c.renderer.text(e, 0, 0, v.useHTML).attr(i).css(n).add(a.labelGroup) : null)
                }, getLabelSize: function () {
                    var t = this.label, e = this.axis;
                    return t ? t.getBBox()[e.horiz ? "height" : "width"] : 0
                }, getLabelSides: function () {
                    var t = this.label.getBBox(), e = this.axis, n = e.horiz, i = e.options, r = i.labels, o = n ? t.width : t.height, a = n ? r.x - o * {
                        left: 0,
                        center: .5,
                        right: 1
                    }[e.labelAlign] : 0, s = n ? o + a : o;
                    return [a, s]
                }, handleOverflow: function (t, e) {
                    var n, i, r, o, a, s = !0, l = this.axis, c = this.isFirst, u = this.isLast, p = l.horiz, d = p ? e.x : e.y, h = l.reversed, f = l.tickPositions, m = this.getLabelSides(), g = m[0], v = m[1], y = this.label.line || 0, x = l.labelEdge, b = l.justifyLabels && (c || u);
                    if (x[y] === F || d + g > x[y] ? x[y] = d + v : b || (s = !1), b) {
                        a = l.justifyToPlot, n = a ? l.pos : 0, i = a ? n + l.len : l.chart.chartWidth;
                        do t += c ? 1 : -1, r = l.ticks[f[t]]; while (f[t] && (!r || r.label.line !== y));
                        o = r && r.label.xy && r.label.xy.x + r.getLabelSides()[c ? 0 : 1], c && !h || u && h ? n > d + g && (d = n - g, r && d + v > o && (s = !1)) : d + v > i && (d = i - v, r && o > d + g && (s = !1)), e.x = d
                    }
                    return s
                }, getPosition: function (t, e, n, i) {
                    var r = this.axis, o = r.chart, a = i && o.oldChartHeight || o.chartHeight;
                    return {
                        x: t ? r.translate(e + n, null, null, i) + r.transB : r.left + r.offset + (r.opposite ? (i && o.oldChartWidth || o.chartWidth) - r.right - r.left : 0),
                        y: t ? a - r.bottom + r.offset - (r.opposite ? r.height : 0) : a - r.translate(e + n, null, null, i) - r.transB
                    }
                }, getLabelPosition: function (t, e, n, i, r, o, a, s) {
                    var l = this.axis, c = l.transA, u = l.reversed, p = l.staggerLines, h = l.chart.renderer.fontMetrics(r.style.fontSize).b, f = r.rotation;
                    return t = t + r.x - (o && i ? o * c * (u ? -1 : 1) : 0), e = e + r.y - (o && !i ? o * c * (u ? 1 : -1) : 0), f && 2 === l.side && (e -= h - h * we(f * Se)), d(r.y) || f || (e += h - n.getBBox().height / 2), p && (n.line = a / (s || 1) % p, e += n.line * (l.labelOffset / p)), {
                        x: t,
                        y: e
                    }
                }, getMarkPath: function (t, e, n, i, r, o) {
                    return o.crispLine([Ze, t, e, Ke, t + (r ? 0 : -n), e + (r ? n : 0)], i)
                }, render: function (t, e, n) {
                    var i, r, o, a = this, s = a.axis, l = s.options, c = s.chart, u = c.renderer, p = s.horiz, d = a.type, h = a.label, f = a.pos, g = l.labels, v = a.gridLine, y = d ? d + "Grid" : "grid", x = d ? d + "Tick" : "tick", b = l[y + "LineWidth"], w = l[y + "LineColor"], k = l[y + "LineDashStyle"], T = l[x + "Length"], S = l[x + "Width"] || 0, C = l[x + "Color"], _ = l[x + "Position"], A = a.mark, P = g.step, D = !0, L = s.tickmarkOffset, O = a.getPosition(p, f, L, e), M = O.x, N = O.y, E = p && M === s.pos + s.len || !p && N === s.pos ? -1 : 1;
                    this.isActive = !0, b && (i = s.getPlotLinePath(f + L, b * E, e, !0), v === F && (o = {
                        stroke: w,
                        "stroke-width": b
                    }, k && (o.dashstyle = k), d || (o.zIndex = 1), e && (o.opacity = 0), a.gridLine = v = b ? u.path(i).attr(o).add(s.gridGroup) : null), !e && v && i && v[a.isNew ? "attr" : "animate"]({
                        d: i,
                        opacity: n
                    })), S && T && ("inside" === _ && (T = -T), s.opposite && (T = -T), r = a.getMarkPath(M, N, T, S * E, p, u), A ? A.animate({
                        d: r,
                        opacity: n
                    }) : a.mark = u.path(r).attr({
                        stroke: C,
                        "stroke-width": S,
                        opacity: n
                    }).add(s.axisGroup)), h && !isNaN(M) && (h.xy = O = a.getLabelPosition(M, N, h, p, g, L, t, P), a.isFirst && !a.isLast && !m(l.showFirstLabel, 1) || a.isLast && !a.isFirst && !m(l.showLastLabel, 1) ? D = !1 : s.isRadial || g.step || g.rotation || e || 0 === n || (D = a.handleOverflow(t, O)), P && t % P && (D = !1), D && !isNaN(O.y) ? (O.opacity = n, h[a.isNew ? "attr" : "animate"](O), a.isNew = !1) : h.attr("y", -9999))
                }, destroy: function () {
                    L(this, this.axis)
                }
            }, fn.PlotLineOrBand = function (t, e) {
                this.axis = t, e && (this.options = e, this.id = e.id)
            }, fn.PlotLineOrBand.prototype = {
                render: function () {
                    var t, e, i, r, o, a, s = this, l = s.axis, u = l.horiz, p = (l.pointRange || 0) / 2, h = s.options, f = h.label, g = s.label, v = h.width, y = h.to, x = h.from, b = d(x) && d(y), w = h.value, k = h.dashStyle, T = s.svgElem, S = [], C = h.color, _ = h.zIndex, A = h.events, L = {}, O = l.chart.renderer;
                    if (l.isLog && (x = c(x), y = c(y), w = c(w)), v)S = l.getPlotLinePath(w, v), L = {
                        stroke: C,
                        "stroke-width": v
                    }, k && (L.dashstyle = k); else {
                        if (!b)return;
                        x = ye(x, l.min - p), y = xe(y, l.max + p), S = l.getPlotBandPath(x, y, h), C && (L.fill = C), h.borderWidth && (L.stroke = h.borderColor, L["stroke-width"] = h.borderWidth)
                    }
                    if (d(_) && (L.zIndex = _), T)S ? T.animate({d: S}, null, T.onGetPath) : (T.hide(), T.onGetPath = function () {
                        T.show()
                    }, g && (s.label = g = g.destroy())); else if (S && S.length && (s.svgElem = T = O.path(S).attr(L).add(), A)) {
                        t = function (t) {
                            T.on(t, function (e) {
                                A[t].apply(s, [e])
                            })
                        };
                        for (e in A)t(e)
                    }
                    return f && d(f.text) && S && S.length && l.width > 0 && l.height > 0 ? (f = n({
                        align: u && b && "center",
                        x: u ? !b && 4 : 10,
                        verticalAlign: !u && b && "middle",
                        y: u ? b ? 16 : 10 : b ? 6 : -4,
                        rotation: u && !b && 90
                    }, f), g || (L = {
                        align: f.textAlign || f.align,
                        rotation: f.rotation
                    }, d(_) && (L.zIndex = _), s.label = g = O.text(f.text, 0, 0, f.useHTML).attr(L).css(f.style).add()), i = [S[1], S[4], m(S[6], S[1])], r = [S[2], S[5], m(S[7], S[2])], o = P(i), a = P(r), g.align(f, !1, {
                        x: o,
                        y: a,
                        width: D(i) - o,
                        height: D(r) - a
                    }), g.show()) : g && g.hide(), s
                }, destroy: function () {
                    p(this.axis.plotLinesAndBands, this), delete this.axis, L(this)
                }
            }, K = {
                getPlotBandPath: function (t, e) {
                    var n = this.getPlotLinePath(e), i = this.getPlotLinePath(t);
                    return i && n ? i.push(n[4], n[5], n[1], n[2]) : i = null, i
                }, addPlotBand: function (t) {
                    this.addPlotBandOrLine(t, "plotBands")
                }, addPlotLine: function (t) {
                    this.addPlotBandOrLine(t, "plotLines")
                }, addPlotBandOrLine: function (t, e) {
                    var n = new fn.PlotLineOrBand(this, t).render(), i = this.userOptions;
                    return n && (e && (i[e] = i[e] || [], i[e].push(t)), this.plotLinesAndBands.push(n)), n
                }, removePlotBandOrLine: function (t) {
                    for (var e = this.plotLinesAndBands, n = this.options, i = this.userOptions, r = e.length; r--;)e[r].id === t && e[r].destroy();
                    wn([n.plotLines || [], i.plotLines || [], n.plotBands || [], i.plotBands || []], function (e) {
                        for (r = e.length; r--;)e[r].id === t && p(e, e[r])
                    })
                }
            }, H.prototype = {
                defaultOptions: {
                    dateTimeLabelFormats: {
                        millisecond: "%H:%M:%S.%L",
                        second: "%H:%M:%S",
                        minute: "%H:%M",
                        hour: "%H:%M",
                        day: "%e. %b",
                        week: "%e. %b",
                        month: "%b '%y",
                        year: "%Y"
                    },
                    endOnTick: !1,
                    gridLineColor: "#C0C0C0",
                    labels: On,
                    lineColor: "#C0D0E0",
                    lineWidth: 1,
                    minPadding: .01,
                    maxPadding: .01,
                    minorGridLineColor: "#E0E0E0",
                    minorGridLineWidth: 1,
                    minorTickColor: "#A0A0A0",
                    minorTickLength: 2,
                    minorTickPosition: "outside",
                    startOfWeek: 1,
                    startOnTick: !1,
                    tickColor: "#C0D0E0",
                    tickLength: 10,
                    tickmarkPlacement: "between",
                    tickPixelInterval: 100,
                    tickPosition: "outside",
                    tickWidth: 1,
                    title: {align: "middle", style: {color: "#707070"}},
                    type: "linear"
                },
                defaultYAxisOptions: {
                    endOnTick: !0,
                    gridLineWidth: 1,
                    tickPixelInterval: 72,
                    showLastLabel: !0,
                    labels: {x: -8, y: 3},
                    lineWidth: 0,
                    maxPadding: .05,
                    minPadding: .05,
                    startOnTick: !0,
                    tickWidth: 0,
                    title: {rotation: 270, text: "Values"},
                    stackLabels: {
                        enabled: !1, formatter: function () {
                            return x(this.total, -1)
                        }, style: On.style
                    }
                },
                defaultLeftAxisOptions: {labels: {x: -15, y: null}, title: {rotation: 270}},
                defaultRightAxisOptions: {labels: {x: 15, y: null}, title: {rotation: 90}},
                defaultBottomAxisOptions: {labels: {x: 0, y: 20}, title: {rotation: 0}},
                defaultTopAxisOptions: {labels: {x: 0, y: -15}, title: {rotation: 0}},
                init: function (t, e) {
                    var n = e.isX, i = this;
                    i.horiz = t.inverted ? !n : n, i.isXAxis = n, i.coll = n ? "xAxis" : "yAxis", i.opposite = e.opposite, i.side = e.side || (i.horiz ? i.opposite ? 0 : 2 : i.opposite ? 1 : 3), i.setOptions(e);
                    var r = this.options, o = r.type, a = "datetime" === o;
                    i.labelFormatter = r.labels.formatter || i.defaultLabelFormatter, i.userOptions = e, i.minPixelPadding = 0, i.chart = t, i.reversed = r.reversed, i.zoomEnabled = r.zoomEnabled !== !1, i.categories = r.categories || "category" === o, i.names = [], i.isLog = "logarithmic" === o, i.isDatetimeAxis = a, i.isLinked = d(r.linkedTo), i.tickmarkOffset = i.categories && "between" === r.tickmarkPlacement ? .5 : 0, i.ticks = {}, i.labelEdge = [], i.minorTicks = {}, i.plotLinesAndBands = [], i.alternateBands = {}, i.len = 0, i.minRange = i.userMinRange = r.minRange || r.maxZoom, i.range = r.range, i.offset = r.offset || 0, i.stacks = {}, i.oldStacks = {}, i.max = null, i.min = null, i.crosshair = m(r.crosshair, f(t.options.tooltip.crosshairs)[n ? 0 : 1], !1);
                    var s, l = i.options.events;
                    -1 === bn(i, t.axes) && (n && !this.isColorAxis ? t.axes.splice(t.xAxis.length, 0, i) : t.axes.push(i), t[i.coll].push(i)), i.series = i.series || [], t.inverted && n && i.reversed === F && (i.reversed = !0), i.removePlotBand = i.removePlotBandOrLine, i.removePlotLine = i.removePlotBandOrLine;
                    for (s in l)Cn(i, s, l[s]);
                    i.isLog && (i.val2lin = c, i.lin2val = u)
                },
                setOptions: function (t) {
                    this.options = n(this.defaultOptions, this.isXAxis ? {} : this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], n(G[this.coll], t))
                },
                defaultLabelFormatter: function () {
                    var t, e, n = this.axis, i = this.value, r = n.categories, o = this.dateTimeLabelFormat, a = G.lang.numericSymbols, s = a && a.length, l = n.options.labels.format, c = n.isLog ? i : n.tickInterval;
                    if (l)e = T(l, this); else if (r)e = i; else if (o)e = U(o, i); else if (s && c >= 1e3)for (; s-- && e === F;)t = Math.pow(1e3, s + 1), c >= t && null !== a[s] && (e = x(i / t, -1) + a[s]);
                    return e === F && (e = be(i) >= 1e4 ? x(i, 0) : x(i, -1, F, "")), e
                },
                getSeriesExtremes: function () {
                    var t = this, e = t.chart;
                    t.hasVisibleSeries = !1, t.dataMin = t.dataMax = null, t.buildStacks && t.buildStacks(), wn(t.series, function (n) {
                        if (n.visible || !e.options.chart.ignoreHiddenSeries) {
                            var i, r, o, a = n.options, s = a.threshold;
                            t.hasVisibleSeries = !0, t.isLog && 0 >= s && (s = null), t.isXAxis ? (i = n.xData, i.length && (t.dataMin = xe(m(t.dataMin, i[0]), P(i)), t.dataMax = ye(m(t.dataMax, i[0]), D(i)))) : (n.getExtremes(), o = n.dataMax, r = n.dataMin, d(r) && d(o) && (t.dataMin = xe(m(t.dataMin, r), r), t.dataMax = ye(m(t.dataMax, o), o)), d(s) && (t.dataMin >= s ? (t.dataMin = s, t.ignoreMinPadding = !0) : t.dataMax < s && (t.dataMax = s, t.ignoreMaxPadding = !0)))
                        }
                    })
                },
                translate: function (t, e, n, i, r, o) {
                    var a, s = this, c = 1, u = 0, p = i ? s.oldTransA : s.transA, d = i ? s.oldMin : s.min, h = s.minPixelPadding, f = (s.options.ordinal || s.isLog && r) && s.lin2val;
                    return p || (p = s.transA), n && (c *= -1, u = s.len), s.reversed && (c *= -1, u -= c * (s.sector || s.len)), e ? (t = t * c + u, t -= h, a = t / p + d, f && (a = s.lin2val(a))) : (f && (t = s.val2lin(t)), "between" === o && (o = .5), a = c * (t - d) * p + u + c * h + (l(o) ? p * o * s.pointRange : 0)), a
                },
                toPixels: function (t, e) {
                    return this.translate(t, !1, !this.horiz, null, !0) + (e ? 0 : this.pos)
                },
                toValue: function (t, e) {
                    return this.translate(t - (e ? 0 : this.pos), !0, !this.horiz, null, !0)
                },
                getPlotLinePath: function (t, e, n, i, r) {
                    var o, a, s, l, c, u = this, p = u.chart, d = u.left, h = u.top, f = n && p.oldChartHeight || p.chartHeight, g = n && p.oldChartWidth || p.chartWidth, v = u.transB;
                    return r = m(r, u.translate(t, null, null, n)), o = s = me(r + v), a = l = me(f - r - v), isNaN(r) ? c = !0 : u.horiz ? (a = h, l = f - u.bottom, (d > o || o > d + u.width) && (c = !0)) : (o = d, s = g - u.right, (h > a || a > h + u.height) && (c = !0)), c && !i ? null : p.renderer.crispLine([Ze, o, a, Ke, s, l], e || 1)
                },
                getLinearTickPositions: function (t, e, n) {
                    var i, r, o = N(ge(e / t) * t), a = N(ve(n / t) * t), s = [];
                    if (e === n && l(e))return [e];
                    for (i = o; a >= i && (s.push(i), i = N(i + t), i !== r);)r = i;
                    return s
                },
                getMinorTickPositions: function () {
                    var t, e, n, i = this, r = i.options, o = i.tickPositions, a = i.minorTickInterval, s = [];
                    if (i.isLog)for (n = o.length, e = 1; n > e; e++)s = s.concat(i.getLogTickPositions(a, o[e - 1], o[e], !0)); else if (i.isDatetimeAxis && "auto" === r.minorTickInterval)s = s.concat(i.getTimeTicks(i.normalizeTimeTickInterval(a), i.min, i.max, r.startOfWeek)), s[0] < i.min && s.shift(); else for (t = i.min + (o[0] - i.min) % a; t <= i.max; t += a)s.push(t);
                    return s
                },
                adjustForMinRange: function () {
                    var t, e, n, i, r, o, a, s, l = this, c = l.options, u = l.min, p = l.max, h = l.dataMax - l.dataMin >= l.minRange;
                    if (l.isXAxis && l.minRange === F && !l.isLog && (d(c.min) || d(c.max) ? l.minRange = null : (wn(l.series, function (t) {
                            for (r = t.xData, o = t.xIncrement ? 1 : r.length - 1, n = o; n > 0; n--)i = r[n] - r[n - 1], (e === F || e > i) && (e = i)
                        }), l.minRange = xe(5 * e, l.dataMax - l.dataMin))), p - u < l.minRange) {
                        var f = l.minRange;
                        t = (f - p + u) / 2, a = [u - t, m(c.min, u - t)], h && (a[2] = l.dataMin), u = D(a), s = [u + f, m(c.max, u + f)], h && (s[2] = l.dataMax), p = P(s), f > p - u && (a[0] = p - f, a[1] = m(c.min, p - f), u = D(a))
                    }
                    l.min = u, l.max = p
                },
                setAxisTranslation: function (t) {
                    var e, n, i = this, r = i.max - i.min, a = i.axisPointRange || 0, s = 0, l = 0, c = i.linkedParent, u = !!i.categories, p = i.transA;
                    (i.isXAxis || u || a) && (c ? (s = c.minPointOffset, l = c.pointRangePadding) : wn(i.series, function (t) {
                        var n = u ? 1 : i.isXAxis ? t.pointRange : i.axisPointRange || 0, c = t.options.pointPlacement, p = t.closestPointRange;
                        n > r && (n = 0), a = ye(a, n), s = ye(s, o(c) ? 0 : n / 2), l = ye(l, "on" === c ? 0 : n), !t.noSharedTooltip && d(p) && (e = d(e) ? xe(e, p) : p)
                    }), n = i.ordinalSlope && e ? i.ordinalSlope / e : 1, i.minPointOffset = s *= n, i.pointRangePadding = l *= n, i.pointRange = xe(a, r), i.closestPointRange = e), t && (i.oldTransA = p), i.translationSlope = i.transA = p = i.len / (r + l || 1), i.transB = i.horiz ? i.left : i.bottom, i.minPixelPadding = p * s
                },
                setTickPositions: function (t) {
                    var e, n, i, r, o = this, a = o.chart, s = o.options, u = o.isLog, p = o.isDatetimeAxis, h = o.isXAxis, f = o.isLinked, g = o.options.tickPositioner, v = s.maxPadding, y = s.minPadding, x = s.tickInterval, b = s.minTickInterval, w = s.tickPixelInterval, k = o.categories;
                    if (f ? (o.linkedParent = a[o.coll][s.linkedTo], n = o.linkedParent.getExtremes(), o.min = m(n.min, n.dataMin), o.max = m(n.max, n.dataMax), s.type !== o.linkedParent.options.type && M(11, 1)) : (o.min = m(o.userMin, s.min, o.dataMin), o.max = m(o.userMax, s.max, o.dataMax)), u && (!t && xe(o.min, m(o.dataMin, o.min)) <= 0 && M(10, 1), o.min = N(c(o.min)), o.max = N(c(o.max))), o.range && d(o.max) && (o.userMin = o.min = ye(o.min, o.max - o.range), o.userMax = o.max, o.range = null), o.beforePadding && o.beforePadding(), o.adjustForMinRange(), k || o.axisPointRange || o.usePercentage || f || !d(o.min) || !d(o.max) || (e = o.max - o.min, e && (d(s.min) || d(o.userMin) || !y || !(o.dataMin < 0) && o.ignoreMinPadding || (o.min -= e * y), d(s.max) || d(o.userMax) || !v || !(o.dataMax > 0) && o.ignoreMaxPadding || (o.max += e * v))), l(s.floor) && (o.min = ye(o.min, s.floor)), l(s.ceiling) && (o.max = xe(o.max, s.ceiling)), o.min === o.max || void 0 === o.min || void 0 === o.max ? o.tickInterval = 1 : f && !x && w === o.linkedParent.options.tickPixelInterval ? o.tickInterval = o.linkedParent.tickInterval : (o.tickInterval = m(x, k ? 1 : (o.max - o.min) * w / ye(o.len, w)), !d(x) && o.len < w && !this.isRadial && !this.isLog && !k && s.startOnTick && s.endOnTick && (r = !0, o.tickInterval /= 4)), h && !t && wn(o.series, function (t) {
                            t.processData(o.min !== o.oldMin || o.max !== o.oldMax)
                        }), o.setAxisTranslation(!0), o.beforeSetTickPositions && o.beforeSetTickPositions(), o.postProcessTickInterval && (o.tickInterval = o.postProcessTickInterval(o.tickInterval)), o.pointRange && (o.tickInterval = ye(o.pointRange, o.tickInterval)), !x && o.tickInterval < b && (o.tickInterval = b), p || u || x || (o.tickInterval = C(o.tickInterval, null, S(o.tickInterval), s)), o.minorTickInterval = "auto" === s.minorTickInterval && o.tickInterval ? o.tickInterval / 5 : s.minorTickInterval, o.tickPositions = i = s.tickPositions ? [].concat(s.tickPositions) : g && g.apply(o, [o.min, o.max]), i || (!o.ordinalPositions && (o.max - o.min) / o.tickInterval > ye(2 * o.len, 200) && M(19, !0), i = p ? o.getTimeTicks(o.normalizeTimeTickInterval(o.tickInterval, s.units), o.min, o.max, s.startOfWeek, o.ordinalPositions, o.closestPointRange, !0) : u ? o.getLogTickPositions(o.tickInterval, o.min, o.max) : o.getLinearTickPositions(o.tickInterval, o.min, o.max), r && i.splice(1, i.length - 2), o.tickPositions = i), !f) {
                        var T, _ = i[0], A = i[i.length - 1], P = o.minPointOffset || 0;
                        s.startOnTick ? o.min = _ : o.min - P > _ && i.shift(), s.endOnTick ? o.max = A : o.max + P < A && i.pop(), 1 === i.length && (T = be(o.max) > 1e13 ? 1 : .001, o.min -= T, o.max += T)
                    }
                },
                setMaxTicks: function () {
                    var t = this.chart, e = t.maxTicks || {}, n = this.tickPositions, i = this._maxTicksKey = [this.coll, this.pos, this.len].join("-");
                    !this.isLinked && !this.isDatetimeAxis && n && n.length > (e[i] || 0) && this.options.alignTicks !== !1 && (e[i] = n.length), t.maxTicks = e
                },
                adjustTickAmount: function () {
                    var t = this, e = t.chart, n = t._maxTicksKey, i = t.tickPositions, r = e.maxTicks;
                    if (r && r[n] && !t.isDatetimeAxis && !t.categories && !t.isLinked && t.options.alignTicks !== !1 && this.min !== F) {
                        var o, a = t.tickAmount, s = i.length;
                        if (t.tickAmount = o = r[n], o > s) {
                            for (; i.length < o;)i.push(N(i[i.length - 1] + t.tickInterval));
                            t.transA *= (s - 1) / (o - 1), t.max = i[i.length - 1]
                        }
                        d(a) && o !== a && (t.isDirty = !0)
                    }
                },
                setScale: function () {
                    var t, e, n, i, r = this, o = r.stacks;
                    if (r.oldMin = r.min, r.oldMax = r.max, r.oldAxisLength = r.len, r.setAxisSize(), i = r.len !== r.oldAxisLength, wn(r.series, function (t) {
                            (t.isDirtyData || t.isDirty || t.xAxis.isDirty) && (n = !0)
                        }), i || n || r.isLinked || r.forceRedraw || r.userMin !== r.oldUserMin || r.userMax !== r.oldUserMax) {
                        if (!r.isXAxis)for (t in o)for (e in o[t])o[t][e].total = null, o[t][e].cum = 0;
                        r.forceRedraw = !1, r.getSeriesExtremes(), r.setTickPositions(), r.oldUserMin = r.userMin, r.oldUserMax = r.userMax, r.isDirty || (r.isDirty = i || r.min !== r.oldMin || r.max !== r.oldMax)
                    } else if (!r.isXAxis) {
                        r.oldStacks && (o = r.stacks = r.oldStacks);
                        for (t in o)for (e in o[t])o[t][e].cum = o[t][e].total
                    }
                    r.setMaxTicks()
                },
                setExtremes: function (e, n, i, r, o) {
                    var a = this, s = a.chart;
                    i = m(i, !0), o = t(o, {min: e, max: n}), An(a, "setExtremes", o, function () {
                        a.userMin = e, a.userMax = n, a.eventArgs = o, a.isDirtyExtremes = !0, i && s.redraw(r)
                    })
                },
                zoom: function (t, e) {
                    var n = this.dataMin, i = this.dataMax, r = this.options;
                    return this.allowZoomOutside || (d(n) && t <= xe(n, m(r.min, n)) && (t = F), d(i) && e >= ye(i, m(r.max, i)) && (e = F)), this.displayBtn = t !== F || e !== F, this.setExtremes(t, e, !1, F, {trigger: "zoom"}), !0
                },
                setAxisSize: function () {
                    var t = this.chart, e = this.options, n = e.offsetLeft || 0, i = e.offsetRight || 0, r = this.horiz, o = m(e.width, t.plotWidth - n + i), a = m(e.height, t.plotHeight), s = m(e.top, t.plotTop), l = m(e.left, t.plotLeft + n), c = /%$/;
                    c.test(a) && (a = parseInt(a, 10) / 100 * t.plotHeight), c.test(s) && (s = parseInt(s, 10) / 100 * t.plotHeight + t.plotTop), this.left = l, this.top = s, this.width = o, this.height = a, this.bottom = t.chartHeight - a - s, this.right = t.chartWidth - o - l, this.len = ye(r ? o : a, 0), this.pos = r ? l : s
                },
                getExtremes: function () {
                    var t = this, e = t.isLog;
                    return {
                        min: e ? N(u(t.min)) : t.min,
                        max: e ? N(u(t.max)) : t.max,
                        dataMin: t.dataMin,
                        dataMax: t.dataMax,
                        userMin: t.userMin,
                        userMax: t.userMax
                    }
                },
                getThreshold: function (t) {
                    var e = this, n = e.isLog, i = n ? u(e.min) : e.min, r = n ? u(e.max) : e.max;
                    return i > t || null === t ? t = i : t > r && (t = r), e.translate(t, 0, 1, 0, 1)
                },
                autoLabelAlign: function (t) {
                    var e, n = (m(t, 0) - 90 * this.side + 720) % 360;
                    return e = n > 15 && 165 > n ? "right" : n > 195 && 345 > n ? "left" : "center"
                },
                getOffset: function () {
                    var t, e, n, i, r, o, a, s, l, c, u, p, h, f = this, g = f.chart, v = g.renderer, y = f.options, x = f.tickPositions, b = f.ticks, w = f.horiz, k = f.side, T = g.inverted ? [1, 0, 3, 2][k] : k, S = 0, C = 0, _ = y.title, A = y.labels, P = 0, D = g.axisOffset, L = g.clipOffset, O = [-1, 1, 1, -1][k], M = 1, N = m(A.maxStaggerLines, 5), E = 2 === k ? v.fontMetrics(A.style.fontSize).b : 0;
                    if (f.hasData = t = f.hasVisibleSeries || d(f.min) && d(f.max) && !!x, f.showAxis = e = t || m(y.showEmpty, !0), f.staggerLines = f.horiz && A.staggerLines, f.axisGroup || (f.gridGroup = v.g("grid").attr({zIndex: y.gridZIndex || 1}).add(), f.axisGroup = v.g("axis").attr({zIndex: y.zIndex || 2}).add(), f.labelGroup = v.g("axis-labels").attr({zIndex: A.zIndex || 7}).addClass(Ge + f.coll.toLowerCase() + "-labels").add()), t || f.isLinked) {
                        if (f.labelAlign = m(A.align || f.autoLabelAlign(A.rotation)), wn(x, function (t) {
                                b[t] ? b[t].addLabel() : b[t] = new B(f, t)
                            }), f.horiz && !f.staggerLines && N && !A.rotation) {
                            for (o = f.reversed ? [].concat(x).reverse() : x; N > M;) {
                                for (a = [], s = !1, r = 0; r < o.length; r++)l = o[r], c = b[l].label && b[l].label.getBBox(), p = c ? c.width : 0, h = r % M, p && (u = f.translate(l), a[h] !== F && u < a[h] && (s = !0), a[h] = u + p);
                                if (!s)break;
                                M++
                            }
                            M > 1 && (f.staggerLines = M)
                        }
                        wn(x, function (t) {
                            (0 === k || 2 === k || {
                                1: "left",
                                3: "right"
                            }[k] === f.labelAlign) && (P = ye(b[t].getLabelSize(), P))
                        }), f.staggerLines && (P *= f.staggerLines, f.labelOffset = P)
                    } else for (i in b)b[i].destroy(), delete b[i];
                    _ && _.text && _.enabled !== !1 && (f.axisTitle || (f.axisTitle = v.text(_.text, 0, 0, _.useHTML).attr({
                        zIndex: 7,
                        rotation: _.rotation || 0,
                        align: _.textAlign || {low: "left", middle: "center", high: "right"}[_.align]
                    }).addClass(Ge + this.coll.toLowerCase() + "-title").css(_.style).add(f.axisGroup), f.axisTitle.isNew = !0), e && (S = f.axisTitle.getBBox()[w ? "height" : "width"], C = m(_.margin, w ? 5 : 10), n = _.offset), f.axisTitle[e ? "show" : "hide"]()), f.offset = O * m(y.offset, D[k]), f.axisTitleMargin = m(n, P + C + (P && O * y.labels[w ? "y" : "x"] - E)), D[k] = ye(D[k], f.axisTitleMargin + S + O * f.offset), L[T] = ye(L[T], 2 * ge(y.lineWidth / 2))
                },
                getLinePath: function (t) {
                    var e = this.chart, n = this.opposite, i = this.offset, r = this.horiz, o = this.left + (n ? this.width : 0) + i, a = e.chartHeight - this.bottom - (n ? this.height : 0) + i;
                    return n && (t *= -1), e.renderer.crispLine([Ze, r ? this.left : o, r ? a : this.top, Ke, r ? e.chartWidth - this.right : o, r ? a : e.chartHeight - this.bottom], t)
                },
                getTitlePosition: function () {
                    var t = this.horiz, e = this.left, n = this.top, i = this.len, o = this.options.title, a = t ? e : n, s = this.opposite, l = this.offset, c = r(o.style.fontSize || 12), u = {
                        low: a + (t ? 0 : i),
                        middle: a + i / 2,
                        high: a + (t ? i : 0)
                    }[o.align], p = (t ? n + this.height : e) + (t ? 1 : -1) * (s ? -1 : 1) * this.axisTitleMargin + (2 === this.side ? c : 0);
                    return {
                        x: t ? u : p + (s ? this.width : 0) + l + (o.x || 0),
                        y: t ? p - (s ? this.height : 0) + l : u + (o.y || 0)
                    }
                },
                render: function () {
                    var t, e, n, i, r = this, o = r.horiz, a = r.reversed, s = r.chart, l = s.renderer, c = r.options, p = r.isLog, h = r.isLinked, f = r.tickPositions, m = r.axisTitle, g = r.ticks, v = r.minorTicks, y = r.alternateBands, x = c.stackLabels, b = c.alternateGridColor, w = r.tickmarkOffset, k = c.lineWidth, T = s.hasRendered, S = T && d(r.oldMin) && !isNaN(r.oldMin), C = r.hasData, _ = r.showAxis, A = c.labels.overflow, P = r.justifyLabels = o && A !== !1;
                    r.labelEdge.length = 0, r.justifyToPlot = "justify" === A, wn([g, v, y], function (t) {
                        var e;
                        for (e in t)t[e].isActive = !1
                    }), (C || h) && (r.minorTickInterval && !r.categories && wn(r.getMinorTickPositions(), function (t) {
                        v[t] || (v[t] = new B(r, t, "minor")), S && v[t].isNew && v[t].render(null, !0), v[t].render(null, !1, 1)
                    }), f.length && (t = f.slice(), (o && a || !o && !a) && t.reverse(), P && (t = t.slice(1).concat([t[0]])), wn(t, function (e, n) {
                        P && (n = n === t.length - 1 ? 0 : n + 1), (!h || e >= r.min && e <= r.max) && (g[e] || (g[e] = new B(r, e)), S && g[e].isNew && g[e].render(n, !0, .1), g[e].render(n, !1, 1))
                    }), w && 0 === r.min && (g[-1] || (g[-1] = new B(r, -1, null, !0)), g[-1].render(-1))), b && wn(f, function (t, e) {
                        e % 2 === 0 && t < r.max && (y[t] || (y[t] = new fn.PlotLineOrBand(r)), n = t + w, i = f[e + 1] !== F ? f[e + 1] + w : r.max, y[t].options = {
                            from: p ? u(n) : n,
                            to: p ? u(i) : i,
                            color: b
                        }, y[t].render(), y[t].isActive = !0)
                    }), r._addedPlotLB || (wn((c.plotLines || []).concat(c.plotBands || []), function (t) {
                        r.addPlotBandOrLine(t)
                    }), r._addedPlotLB = !0)), wn([g, v, y], function (t) {
                        var e, n, i = [], r = V ? V.duration || 500 : 0, o = function () {
                            for (n = i.length; n--;)t[i[n]] && !t[i[n]].isActive && (t[i[n]].destroy(), delete t[i[n]])
                        };
                        for (e in t)t[e].isActive || (t[e].render(e, !1, 0), t[e].isActive = !1, i.push(e));
                        t !== y && s.hasRendered && r ? r && setTimeout(o, r) : o()
                    }), k && (e = r.getLinePath(k), r.axisLine ? r.axisLine.animate({d: e}) : r.axisLine = l.path(e).attr({
                        stroke: c.lineColor,
                        "stroke-width": k,
                        zIndex: 7
                    }).add(r.axisGroup), r.axisLine[_ ? "show" : "hide"]()), m && _ && (m[m.isNew ? "attr" : "animate"](r.getTitlePosition()), m.isNew = !1), x && x.enabled && r.renderStackTotals(), r.isDirty = !1
                },
                redraw: function () {
                    var t = this, e = t.chart, n = e.pointer;
                    n && n.reset(!0), t.render(), wn(t.plotLinesAndBands, function (t) {
                        t.render()
                    }), wn(t.series, function (t) {
                        t.isDirty = !0
                    })
                },
                destroy: function (t) {
                    var e, n, i = this, r = i.stacks, o = i.plotLinesAndBands;
                    t || _n(i);
                    for (e in r)L(r[e]), r[e] = null;
                    for (wn([i.ticks, i.minorTicks, i.alternateBands], function (t) {
                        L(t)
                    }), n = o.length; n--;)o[n].destroy();
                    wn(["stackTotalGroup", "axisLine", "axisTitle", "axisGroup", "cross", "gridGroup", "labelGroup"], function (t) {
                        i[t] && (i[t] = i[t].destroy())
                    }), this.cross && this.cross.destroy()
                },
                drawCrosshair: function (t, e) {
                    if (this.crosshair) {
                        if ((d(e) || !m(this.crosshair.snap, !0)) === !1)return void this.hideCrosshair();
                        var n, i, r = this.crosshair, o = r.animation;
                        if (m(r.snap, !0) ? d(e) && (i = this.chart.inverted != this.horiz ? e.plotX : this.len - e.plotY) : i = this.horiz ? t.chartX - this.pos : this.len - t.chartY + this.pos, n = this.isRadial ? this.getPlotLinePath(this.isXAxis ? e.x : m(e.stackY, e.y)) : this.getPlotLinePath(null, null, null, null, i), null === n)return void this.hideCrosshair();
                        if (this.cross)this.cross.attr({visibility: Ue})[o ? "animate" : "attr"]({d: n}, o); else {
                            var a = {"stroke-width": r.width || 1, stroke: r.color || "#C0C0C0", zIndex: r.zIndex || 2};
                            r.dashStyle && (a.dashstyle = r.dashStyle), this.cross = this.chart.renderer.path(n).attr(a).add()
                        }
                    }
                },
                hideCrosshair: function () {
                    this.cross && this.cross.hide()
                }
            }, t(H.prototype, K), H.prototype.getTimeTicks = function (e, n, i, r) {
                var o, a, s = [], l = {}, c = G.global.useUTC, u = new Date(n - te), p = e.unitRange, h = e.count;
                if (d(n)) {
                    p >= Z[on] && (u.setMilliseconds(0), u.setSeconds(p >= Z[an] ? 0 : h * ge(u.getSeconds() / h))), p >= Z[an] && u[se](p >= Z[sn] ? 0 : h * ge(u[ee]() / h)), p >= Z[sn] && u[le](p >= Z[ln] ? 0 : h * ge(u[ne]() / h)), p >= Z[ln] && u[ce](p >= Z[un] ? 1 : h * ge(u[re]() / h)), p >= Z[un] && (u[ue](p >= Z[pn] ? 0 : h * ge(u[oe]() / h)), a = u[ae]()), p >= Z[pn] && (a -= a % h, u[pe](a)), p === Z[cn] && u[ce](u[re]() - u[ie]() + m(r, 1)), o = 1, te && (u = new Date(u.getTime() + te)), a = u[ae]();
                    for (var f = u.getTime(), g = u[oe](), v = u[re](), y = c ? te : (864e5 + 60 * u.getTimezoneOffset() * 1e3) % 864e5; i > f;)s.push(f), p === Z[pn] ? f = Q(a + o * h, 0) : p === Z[un] ? f = Q(a, g + o * h) : c || p !== Z[ln] && p !== Z[cn] ? f += p * h : f = Q(a, g, v + o * h * (p === Z[ln] ? 1 : 7)), o++;
                    s.push(f), wn(kn(s, function (t) {
                        return p <= Z[sn] && t % Z[ln] === y
                    }), function (t) {
                        l[t] = ln
                    })
                }
                return s.info = t(e, {higherRanks: l, totalRange: p * h}), s
            }, H.prototype.normalizeTimeTickInterval = function (t, e) {
                var n, i, r = e || [[rn, [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], [on, [1, 2, 5, 10, 15, 30]], [an, [1, 2, 5, 10, 15, 30]], [sn, [1, 2, 3, 4, 6, 8, 12]], [ln, [1, 2]], [cn, [1, 2]], [un, [1, 2, 3, 4, 6]], [pn, null]], o = r[r.length - 1], a = Z[o[0]], s = o[1];
                for (i = 0; i < r.length; i++)if (o = r[i], a = Z[o[0]], s = o[1], r[i + 1]) {
                    var l = (a * s[s.length - 1] + Z[r[i + 1][0]]) / 2;
                    if (l >= t)break
                }
                return a === Z[pn] && 5 * a > t && (s = [1, 2, 5]), n = C(t / a, s, o[0] === pn ? ye(S(t / a), 1) : 1), {
                    unitRange: a,
                    count: n,
                    unitName: o[0]
                }
            }, H.prototype.getLogTickPositions = function (t, e, n, i) {
                var r = this, o = r.options, a = r.len, s = [];
                if (i || (r._minorAutoInterval = null), t >= .5)t = me(t), s = r.getLinearTickPositions(t, e, n); else if (t >= .08) {
                    var l, p, d, h, f, g, v, y = ge(e);
                    for (l = t > .3 ? [1, 2, 4] : t > .15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9], p = y; n + 1 > p && !v; p++)for (h = l.length, d = 0; h > d && !v; d++)f = c(u(p) * l[d]), f > e && (!i || n >= g) && s.push(g), g > n && (v = !0), g = f
                } else {
                    var x = u(e), b = u(n), w = o[i ? "minorTickInterval" : "tickInterval"], k = "auto" === w ? null : w, T = o.tickPixelInterval / (i ? 5 : 1), _ = i ? a / r.tickPositions.length : a;
                    t = m(k, r._minorAutoInterval, (b - x) * T / (_ || 1)), t = C(t, null, S(t)), s = Sn(r.getLinearTickPositions(t, x, b), c), i || (r._minorAutoInterval = t / 5)
                }
                return i || (r.tickInterval = t), s
            };
            var $n = fn.Tooltip = function () {
                this.init.apply(this, arguments)
            };
            $n.prototype = {
                init: function (t, e) {
                    var n = e.borderWidth, i = e.style, o = r(i.padding);
                    this.chart = t, this.options = e, this.crosshairs = [], this.now = {
                        x: 0,
                        y: 0
                    }, this.isHidden = !0, this.label = t.renderer.label("", 0, 0, e.shape || "callout", null, null, e.useHTML, null, "tooltip").attr({
                        padding: o,
                        fill: e.backgroundColor,
                        "stroke-width": n,
                        r: e.borderRadius,
                        zIndex: 8
                    }).css(i).css({padding: 0}).add().attr({y: -9999}), je || this.label.shadow(e.shadow), this.shared = e.shared
                }, destroy: function () {
                    this.label && (this.label = this.label.destroy()), clearTimeout(this.hideTimer), clearTimeout(this.tooltipTimeout)
                }, move: function (e, n, i, r) {
                    var o = this, a = o.now, s = o.options.animation !== !1 && !o.isHidden, l = o.followPointer || o.len > 1;
                    t(a, {
                        x: s ? (2 * a.x + e) / 3 : e,
                        y: s ? (a.y + n) / 2 : n,
                        anchorX: l ? F : s ? (2 * a.anchorX + i) / 3 : i,
                        anchorY: l ? F : s ? (a.anchorY + r) / 2 : r
                    }), o.label.attr(a), s && (be(e - a.x) > 1 || be(n - a.y) > 1) && (clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function () {
                        o && o.move(e, n, i, r)
                    }, 32))
                }, hide: function () {
                    var t, e = this;
                    clearTimeout(this.hideTimer), this.isHidden || (t = this.chart.hoverPoints, this.hideTimer = setTimeout(function () {
                        e.label.fadeOut(), e.isHidden = !0
                    }, m(this.options.hideDelay, 500)), t && wn(t, function (t) {
                        t.setState()
                    }), this.chart.hoverPoints = null)
                }, getAnchor: function (t, e) {
                    var n, i, r = this.chart, o = r.inverted, a = r.plotTop, s = 0, l = 0;
                    return t = f(t), n = t[0].tooltipPos, this.followPointer && e && (e.chartX === F && (e = r.pointer.normalize(e)), n = [e.chartX - r.plotLeft, e.chartY - a]), n || (wn(t, function (t) {
                        i = t.series.yAxis, s += t.plotX, l += (t.plotLow ? (t.plotLow + t.plotHigh) / 2 : t.plotY) + (!o && i ? i.top - a : 0)
                    }), s /= t.length, l /= t.length, n = [o ? r.plotWidth - l : s, this.shared && !o && t.length > 1 && e ? e.chartY - a : o ? r.plotHeight - s : l]), Sn(n, me)
                }, getPosition: function (t, e, n) {
                    var i, r = this.chart, o = this.distance, a = {}, s = ["y", r.chartHeight, e, n.plotY + r.plotTop], l = ["x", r.chartWidth, t, n.plotX + r.plotLeft], c = n.ttBelow || r.inverted && !n.negative || !r.inverted && n.negative, u = function (t, e, n, i) {
                        var r = i - o > n, s = e > i + o + n, l = i - o - n, u = i + o;
                        if (c && s)a[t] = u; else if (!c && r)a[t] = l; else if (r)a[t] = l; else {
                            if (!s)return !1;
                            a[t] = u
                        }
                    }, p = function (t, e, n, i) {
                        return o > i || i > e - o ? !1 : void(a[t] = n / 2 > i ? 1 : i > e - n / 2 ? e - n - 2 : i - n / 2)
                    }, d = function (t) {
                        var e = s;
                        s = l, l = e, i = t
                    }, h = function () {
                        u.apply(0, s) !== !1 ? p.apply(0, l) !== !1 || i || (d(!0), h()) : i ? a.x = a.y = 0 : (d(!0), h())
                    };
                    return (r.inverted || this.len > 1) && d(), h(), a
                }, defaultFormatter: function (t) {
                    var e, n = this.points || f(this), i = n[0].series;
                    return e = [t.tooltipHeaderFormatter(n[0])], wn(n, function (t) {
                        i = t.series, e.push(i.tooltipFormatter && i.tooltipFormatter(t) || t.point.tooltipFormatter(i.tooltipOptions.pointFormat))
                    }), e.push(t.options.footerFormat || ""), e.join("")
                }, refresh: function (t, e) {
                    var n, i, r, o, a, s, l = this, c = l.chart, u = l.label, p = l.options, d = {}, h = [], g = p.formatter || l.defaultFormatter, v = c.hoverPoints, y = l.shared;
                    clearTimeout(this.hideTimer), l.followPointer = f(t)[0].series.tooltipOptions.followPointer, r = l.getAnchor(t, e), n = r[0], i = r[1], !y || t.series && t.series.noSharedTooltip ? d = t.getLabelConfig() : (c.hoverPoints = t, v && wn(v, function (t) {
                        t.setState()
                    }), wn(t, function (t) {
                        t.setState(en), h.push(t.getLabelConfig())
                    }), d = {
                        x: t[0].category,
                        y: t[0].y
                    }, d.points = h, this.len = h.length, t = t[0]), o = g.call(d, l), s = t.series, this.distance = m(s.tooltipOptions.distance, 16), o === !1 ? this.hide() : (l.isHidden && (Ln(u), u.attr("opacity", 1).show()), u.attr({text: o}), a = p.borderColor || t.color || s.color || "#606060", u.attr({stroke: a}), l.updatePosition({
                        plotX: n,
                        plotY: i,
                        negative: t.negative,
                        ttBelow: t.ttBelow
                    }), this.isHidden = !1), An(c, "tooltipRefresh", {
                        text: o,
                        x: n + c.plotLeft,
                        y: i + c.plotTop,
                        borderColor: a
                    })
                }, updatePosition: function (t) {
                    var e = this.chart, n = this.label, i = (this.options.positioner || this.getPosition).call(this, n.width, n.height, t);
                    this.move(me(i.x), me(i.y), t.plotX + e.plotLeft, t.plotY + e.plotTop)
                }, tooltipHeaderFormatter: function (t) {
                    var e, n = t.series, i = n.tooltipOptions, r = i.dateTimeLabelFormats, o = i.xDateFormat, a = n.xAxis, s = a && "datetime" === a.options.type && l(t.key), c = i.headerFormat, u = a && a.closestPointRange;
                    if (s && !o) {
                        if (u) {
                            for (e in Z)if (Z[e] >= u || Z[e] <= Z[ln] && t.key % Z[e] > 0) {
                                o = r[e];
                                break
                            }
                        } else o = r.day;
                        o = o || r.year
                    }
                    return s && o && (c = c.replace("{point.key}", "{point.key:" + o + "}")), T(c, {
                        point: t,
                        series: n
                    })
                }
            };
            var Xn;
            X = de.documentElement.ontouchstart !== F;
            var Yn = fn.Pointer = function (t, e) {
                this.init(t, e)
            };
            if (Yn.prototype = {
                    init: function (t, e) {
                        var n, i, r = e.chart, o = r.events, a = je ? "" : r.zoomType, s = t.inverted;
                        this.options = e, this.chart = t, this.zoomX = n = /x/.test(a), this.zoomY = i = /y/.test(a), this.zoomHor = n && !s || i && s, this.zoomVert = i && !s || n && s, this.hasZoom = n || i, this.runChartClick = o && !!o.click, this.pinchDown = [], this.lastValidTouch = {}, fn.Tooltip && e.tooltip.enabled && (t.tooltip = new $n(t, e.tooltip), this.followTouchMove = e.tooltip.followTouchMove), this.setDOMEvents()
                    }, normalize: function (e, n) {
                        var i, r, o;
                        return e = e || window.event, e = Pn(e), e.target || (e.target = e.srcElement), o = e.touches ? e.touches.length ? e.touches.item(0) : e.changedTouches[0] : e, n || (this.chartPosition = n = Tn(this.chart.container)), o.pageX === F ? (i = ye(e.x, e.clientX - n.left), r = e.y) : (i = o.pageX - n.left, r = o.pageY - n.top), t(e, {
                            chartX: me(i),
                            chartY: me(r)
                        })
                    }, getCoordinates: function (t) {
                        var e = {xAxis: [], yAxis: []};
                        return wn(this.chart.axes, function (n) {
                            e[n.isXAxis ? "xAxis" : "yAxis"].push({
                                axis: n,
                                value: n.toValue(t[n.horiz ? "chartX" : "chartY"])
                            })
                        }), e
                    }, getIndex: function (t) {
                        var e = this.chart;
                        return e.inverted ? e.plotHeight + e.plotTop - t.chartY : t.chartX - e.plotLeft
                    }, runPointActions: function (t) {
                        var e, n, i, r, o, a, s = this, l = s.chart, c = l.series, u = l.tooltip, p = l.hoverPoint, d = l.hoverSeries, h = l.chartWidth, f = s.getIndex(t);
                        if (u && s.options.tooltip.shared && (!d || !d.noSharedTooltip)) {
                            for (i = [], r = c.length, o = 0; r > o; o++)c[o].visible && c[o].options.enableMouseTracking !== !1 && !c[o].noSharedTooltip && c[o].singularTooltips !== !0 && c[o].tooltipPoints.length && (n = c[o].tooltipPoints[f], n && n.series && (n._dist = be(f - n.clientX), h = xe(h, n._dist), i.push(n)));
                            for (r = i.length; r--;)i[r]._dist > h && i.splice(r, 1);
                            i.length && i[0].clientX !== s.hoverX && (u.refresh(i, t), s.hoverX = i[0].clientX)
                        }
                        e = d && d.tooltipOptions.followPointer, d && d.tracker && !e ? (n = d.tooltipPoints[f], n && n !== p && n.onMouseOver(t)) : u && e && !u.isHidden && (a = u.getAnchor([{}], t), u.updatePosition({
                            plotX: a[0],
                            plotY: a[1]
                        })), u && !s._onDocumentMouseMove && (s._onDocumentMouseMove = function (t) {
                            Be[Xn] && Be[Xn].pointer.onDocumentMouseMove(t)
                        }, Cn(de, "mousemove", s._onDocumentMouseMove)), wn(l.axes, function (e) {
                            e.drawCrosshair(t, m(n, p))
                        })
                    }, reset: function (t) {
                        var e = this, n = e.chart, i = n.hoverSeries, r = n.hoverPoint, o = n.tooltip, a = o && o.shared ? n.hoverPoints : r;
                        t = t && o && a, t && f(a)[0].plotX === F && (t = !1), t ? (o.refresh(a), r && r.setState(r.state, !0)) : (r && r.onMouseOut(), i && i.onMouseOut(), o && o.hide(), e._onDocumentMouseMove && (_n(de, "mousemove", e._onDocumentMouseMove), e._onDocumentMouseMove = null), wn(n.axes, function (t) {
                            t.hideCrosshair()
                        }), e.hoverX = null)
                    }, scaleGroups: function (t, e) {
                        var n, i = this.chart;
                        wn(i.series, function (r) {
                            n = t || r.getPlotBox(), r.xAxis && r.xAxis.zoomEnabled && (r.group.attr(n), r.markerGroup && (r.markerGroup.attr(n), r.markerGroup.clip(e ? i.clipRect : null)), r.dataLabelsGroup && r.dataLabelsGroup.attr(n))
                        }), i.clipRect.attr(e || i.clipBox)
                    }, dragStart: function (t) {
                        var e = this.chart;
                        e.mouseIsDown = t.type, e.cancelClick = !1, e.mouseDownX = this.mouseDownX = t.chartX, e.mouseDownY = this.mouseDownY = t.chartY
                    }, drag: function (t) {
                        var e, n, i = this.chart, r = i.options.chart, o = t.chartX, a = t.chartY, s = this.zoomHor, l = this.zoomVert, c = i.plotLeft, u = i.plotTop, p = i.plotWidth, d = i.plotHeight, h = this.mouseDownX, f = this.mouseDownY;
                        c > o ? o = c : o > c + p && (o = c + p), u > a ? a = u : a > u + d && (a = u + d), this.hasDragged = Math.sqrt(Math.pow(h - o, 2) + Math.pow(f - a, 2)), this.hasDragged > 10 && (e = i.isInsidePlot(h - c, f - u), i.hasCartesianSeries && (this.zoomX || this.zoomY) && e && (this.selectionMarker || (this.selectionMarker = i.renderer.rect(c, u, s ? 1 : p, l ? 1 : d, 0).attr({
                            fill: r.selectionMarkerFill || "rgba(69,114,167,0.25)",
                            zIndex: 7
                        }).add())), this.selectionMarker && s && (n = o - h, this.selectionMarker.attr({
                            width: be(n),
                            x: (n > 0 ? 0 : n) + h
                        })), this.selectionMarker && l && (n = a - f, this.selectionMarker.attr({
                            height: be(n),
                            y: (n > 0 ? 0 : n) + f
                        })), e && !this.selectionMarker && r.panning && i.pan(t, r.panning))
                    }, drop: function (e) {
                        var n = this.chart, i = this.hasPinched;
                        if (this.selectionMarker) {
                            var r, o = {
                                xAxis: [],
                                yAxis: [],
                                originalEvent: e.originalEvent || e
                            }, a = this.selectionMarker, s = a.attr ? a.attr("x") : a.x, l = a.attr ? a.attr("y") : a.y, c = a.attr ? a.attr("width") : a.width, u = a.attr ? a.attr("height") : a.height;
                            (this.hasDragged || i) && (wn(n.axes, function (t) {
                                if (t.zoomEnabled) {
                                    var e = t.horiz, n = t.toValue(e ? s : l), i = t.toValue(e ? s + c : l + u);
                                    isNaN(n) || isNaN(i) || (o[t.coll].push({
                                        axis: t,
                                        min: xe(n, i),
                                        max: ye(n, i)
                                    }), r = !0)
                                }
                            }), r && An(n, "selection", o, function (e) {
                                n.zoom(t(e, i ? {animation: !1} : null))
                            })), this.selectionMarker = this.selectionMarker.destroy(), i && this.scaleGroups()
                        }
                        n && (g(n.container, {cursor: n._cursor}), n.cancelClick = this.hasDragged > 10, n.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = [])
                    }, onContainerMouseDown: function (t) {
                        t = this.normalize(t), t.preventDefault && t.preventDefault(), this.dragStart(t)
                    }, onDocumentMouseUp: function (t) {
                        Be[Xn] && Be[Xn].pointer.drop(t)
                    }, onDocumentMouseMove: function (t) {
                        var e = this.chart, n = this.chartPosition, i = e.hoverSeries;
                        t = this.normalize(t, n), n && i && !this.inClass(t.target, "highcharts-tracker") && !e.isInsidePlot(t.chartX - e.plotLeft, t.chartY - e.plotTop) && this.reset()
                    }, onContainerMouseLeave: function () {
                        var t = Be[Xn];
                        t && (t.pointer.reset(), t.pointer.chartPosition = null)
                    }, onContainerMouseMove: function (t) {
                        var e = this.chart;
                        Xn = e.index, t = this.normalize(t), "mousedown" === e.mouseIsDown && this.drag(t), !this.inClass(t.target, "highcharts-tracker") && !e.isInsidePlot(t.chartX - e.plotLeft, t.chartY - e.plotTop) || e.openMenu || this.runPointActions(t)
                    }, inClass: function (t, e) {
                        for (var n; t;) {
                            if (n = h(t, "class")) {
                                if (-1 !== n.indexOf(e))return !0;
                                if (-1 !== n.indexOf(Ge + "container"))return !1
                            }
                            t = t.parentNode
                        }
                    }, onTrackerMouseOut: function (t) {
                        var e = this.chart.hoverSeries, n = t.relatedTarget || t.toElement, i = n && n.point && n.point.series;
                        !e || e.options.stickyTracking || this.inClass(n, Ge + "tooltip") || i === e || e.onMouseOut()
                    }, onContainerClick: function (e) {
                        var n = this.chart, i = n.hoverPoint, r = n.plotLeft, o = n.plotTop;
                        e = this.normalize(e), e.cancelBubble = !0, n.cancelClick || (i && this.inClass(e.target, Ge + "tracker") ? (An(i.series, "click", t(e, {point: i})), n.hoverPoint && i.firePointEvent("click", e)) : (t(e, this.getCoordinates(e)), n.isInsidePlot(e.chartX - r, e.chartY - o) && An(n, "click", e)))
                    }, setDOMEvents: function () {
                        var t = this, e = t.chart.container;
                        e.onmousedown = function (e) {
                            t.onContainerMouseDown(e)
                        }, e.onmousemove = function (e) {
                            t.onContainerMouseMove(e)
                        }, e.onclick = function (e) {
                            t.onContainerClick(e)
                        }, Cn(e, "mouseleave", t.onContainerMouseLeave), 1 === He && Cn(de, "mouseup", t.onDocumentMouseUp), X && (e.ontouchstart = function (e) {
                            t.onContainerTouchStart(e)
                        }, e.ontouchmove = function (e) {
                            t.onContainerTouchMove(e)
                        }, 1 === He && Cn(de, "touchend", t.onDocumentTouchEnd))
                    }, destroy: function () {
                        var t;
                        _n(this.chart.container, "mouseleave", this.onContainerMouseLeave), He || (_n(de, "mouseup", this.onDocumentMouseUp), _n(de, "touchend", this.onDocumentTouchEnd)), clearInterval(this.tooltipTimeout);
                        for (t in this)this[t] = null
                    }
                }, t(fn.Pointer.prototype, {
                    pinchTranslate: function (t, e, n, i, r, o) {
                        (this.zoomHor || this.pinchHor) && this.pinchTranslateDirection(!0, t, e, n, i, r, o), (this.zoomVert || this.pinchVert) && this.pinchTranslateDirection(!1, t, e, n, i, r, o)
                    }, pinchTranslateDirection: function (t, e, n, i, r, o, a, s) {
                        var l, c, u, p, d, h, f = this.chart, m = t ? "x" : "y", g = t ? "X" : "Y", v = "chart" + g, y = t ? "width" : "height", x = f["plot" + (t ? "Left" : "Top")], b = s || 1, w = f.inverted, k = f.bounds[t ? "h" : "v"], T = 1 === e.length, S = e[0][v], C = n[0][v], _ = !T && e[1][v], A = !T && n[1][v], P = function () {
                            !T && be(S - _) > 20 && (b = s || be(C - A) / be(S - _)), u = (x - C) / b + S, l = f["plot" + (t ? "Width" : "Height")] / b
                        };
                        P(), c = u, c < k.min ? (c = k.min, p = !0) : c + l > k.max && (c = k.max - l, p = !0), p ? (C -= .8 * (C - a[m][0]), T || (A -= .8 * (A - a[m][1])), P()) : a[m] = [C, A], w || (o[m] = u - x, o[y] = l), h = w ? t ? "scaleY" : "scaleX" : "scale" + g, d = w ? 1 / b : b, r[y] = l, r[m] = c, i[h] = b, i["translate" + g] = d * x + (C - d * S)
                    }, pinch: function (e) {
                        var n = this, i = n.chart, r = n.pinchDown, o = n.followTouchMove, a = e.touches, s = a.length, l = n.lastValidTouch, c = n.hasZoom, u = n.selectionMarker, p = {}, d = 1 === s && (n.inClass(e.target, Ge + "tracker") && i.runTrackerClick || i.runChartClick), h = {};
                        !c && !o || d || e.preventDefault(), Sn(a, function (t) {
                            return n.normalize(t)
                        }), "touchstart" === e.type ? (wn(a, function (t, e) {
                            r[e] = {chartX: t.chartX, chartY: t.chartY}
                        }), l.x = [r[0].chartX, r[1] && r[1].chartX], l.y = [r[0].chartY, r[1] && r[1].chartY], wn(i.axes, function (t) {
                            if (t.zoomEnabled) {
                                var e = i.bounds[t.horiz ? "h" : "v"], n = t.minPixelPadding, r = t.toPixels(t.dataMin), o = t.toPixels(t.dataMax), a = xe(r, o), s = ye(r, o);
                                e.min = xe(t.pos, a - n), e.max = ye(t.pos + t.len, s + n)
                            }
                        })) : r.length && (u || (n.selectionMarker = u = t({destroy: ze}, i.plotBox)), n.pinchTranslate(r, a, p, u, h, l), n.hasPinched = c, n.scaleGroups(p, h), !c && o && 1 === s && this.runPointActions(n.normalize(e)))
                    }, onContainerTouchStart: function (t) {
                        var e = this.chart;
                        Xn = e.index, 1 === t.touches.length ? (t = this.normalize(t), e.isInsidePlot(t.chartX - e.plotLeft, t.chartY - e.plotTop) ? (this.runPointActions(t), this.pinch(t)) : this.reset()) : 2 === t.touches.length && this.pinch(t)
                    }, onContainerTouchMove: function (t) {
                        (1 === t.touches.length || 2 === t.touches.length) && this.pinch(t)
                    }, onDocumentTouchEnd: function (t) {
                        Be[Xn] && Be[Xn].pointer.drop(t)
                    }
                }), he.PointerEvent || he.MSPointerEvent) {
                var Gn = {}, Un = !!he.PointerEvent, Vn = function () {
                    var t, e = [];
                    e.item = function (t) {
                        return this[t]
                    };
                    for (t in Gn)Gn.hasOwnProperty(t) && e.push({
                        pageX: Gn[t].pageX,
                        pageY: Gn[t].pageY,
                        target: Gn[t].target
                    });
                    return e
                }, Jn = function (t, e, n, i) {
                    var r;
                    t = t.originalEvent || t, "touch" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_TOUCH || !Be[Xn] || (i(t), r = Be[Xn].pointer, r[e]({
                        type: n,
                        target: t.currentTarget,
                        preventDefault: ze,
                        touches: Vn()
                    }))
                };
                t(Yn.prototype, {
                    onContainerPointerDown: function (t) {
                        Jn(t, "onContainerTouchStart", "touchstart", function (t) {
                            Gn[t.pointerId] = {pageX: t.pageX, pageY: t.pageY, target: t.currentTarget}
                        })
                    }, onContainerPointerMove: function (t) {
                        Jn(t, "onContainerTouchMove", "touchmove", function (t) {
                            Gn[t.pointerId] = {
                                pageX: t.pageX,
                                pageY: t.pageY
                            }, Gn[t.pointerId].target || (Gn[t.pointerId].target = t.currentTarget)
                        })
                    }, onDocumentPointerUp: function (t) {
                        Jn(t, "onContainerTouchEnd", "touchend", function (t) {
                            delete Gn[t.pointerId]
                        })
                    }, batchMSEvents: function (t) {
                        t(this.chart.container, Un ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown), t(this.chart.container, Un ? "pointermove" : "MSPointerMove", this.onContainerPointerMove), t(de, Un ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp)
                    }
                }), w(Yn.prototype, "init", function (t, e, n) {
                    t.call(this, e, n), (this.hasZoom || this.followTouchMove) && g(e.container, {
                        "-ms-touch-action": Je,
                        "touch-action": Je
                    })
                }), w(Yn.prototype, "setDOMEvents", function (t) {
                    t.apply(this), (this.hasZoom || this.followTouchMove) && this.batchMSEvents(Cn)
                }), w(Yn.prototype, "destroy", function (t) {
                    this.batchMSEvents(_n), t.call(this)
                })
            }
            var Zn = fn.Legend = function (t, e) {
                this.init(t, e)
            };
            Zn.prototype = {
                init: function (t, e) {
                    var i = this, o = e.itemStyle, a = m(e.padding, 8), s = e.itemMarginTop || 0;
                    this.options = e, e.enabled && (i.baseline = r(o.fontSize) + 3 + s, i.itemStyle = o, i.itemHiddenStyle = n(o, e.itemHiddenStyle), i.itemMarginTop = s, i.padding = a, i.initialItemX = a, i.initialItemY = a - 5, i.maxItemWidth = 0, i.chart = t, i.itemHeight = 0, i.lastLineHeight = 0, i.symbolWidth = m(e.symbolWidth, 16), i.pages = [], i.render(), Cn(i.chart, "endResize", function () {
                        i.positionCheckboxes()
                    }))
                }, colorizeItem: function (t, e) {
                    var n, i, r = this, o = r.options, a = t.legendItem, s = t.legendLine, l = t.legendSymbol, c = r.itemHiddenStyle.color, u = e ? o.itemStyle.color : c, p = e ? t.legendColor || t.color || "#CCC" : c, d = t.options && t.options.marker, h = {fill: p};
                    if (a && a.css({fill: u, color: u}), s && s.attr({stroke: p}), l) {
                        if (d && l.isMarker) {
                            h.stroke = p, d = t.convertAttribs(d);
                            for (n in d)i = d[n], i !== F && (h[n] = i)
                        }
                        l.attr(h)
                    }
                }, positionItem: function (t) {
                    var e = this, n = e.options, i = n.symbolPadding, r = !n.rtl, o = t._legendItemPos, a = o[0], s = o[1], l = t.checkbox;
                    t.legendGroup && t.legendGroup.translate(r ? a : e.legendWidth - a - 2 * i - 4, s), l && (l.x = a, l.y = s)
                }, destroyItem: function (t) {
                    var e = t.checkbox;
                    wn(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function (e) {
                        t[e] && (t[e] = t[e].destroy())
                    }), e && O(t.checkbox)
                }, destroy: function () {
                    var t = this, e = t.group, n = t.box;
                    n && (t.box = n.destroy()), e && (t.group = e.destroy())
                }, positionCheckboxes: function (t) {
                    var e, n = this.group.alignAttr, i = this.clipHeight || this.legendHeight;
                    n && (e = n.translateY, wn(this.allItems, function (r) {
                        var o, a = r.checkbox;
                        a && (o = e + a.y + (t || 0) + 3, g(a, {
                            left: n.translateX + r.checkboxOffset + a.x - 20 + Ve,
                            top: o + Ve,
                            display: o > e - 6 && e + i - 6 > o ? "" : Je
                        }))
                    }))
                }, renderTitle: function () {
                    var t, e = this.options, n = this.padding, i = e.title, r = 0;
                    i.text && (this.title || (this.title = this.chart.renderer.label(i.text, n - 3, n - 4, null, null, null, null, null, "legend-title").attr({zIndex: 1}).css(i.style).add(this.group)), t = this.title.getBBox(), r = t.height, this.offsetWidth = t.width, this.contentGroup.attr({translateY: r})), this.titleHeight = r
                }, renderItem: function (t) {
                    var e, i, r, o = this, a = o.chart, s = a.renderer, l = o.options, c = "horizontal" === l.layout, u = o.symbolWidth, p = l.symbolPadding, d = o.itemStyle, h = o.itemHiddenStyle, f = o.padding, g = c ? m(l.itemDistance, 20) : 0, v = !l.rtl, y = l.width, x = l.itemMarginBottom || 0, b = o.itemMarginTop, w = o.initialItemX, k = t.legendItem, S = t.series && t.series.drawLegendSymbol ? t.series : t, C = S.options, _ = o.createCheckboxForItem && C && C.showCheckbox, A = l.useHTML;
                    k || (t.legendGroup = s.g("legend-item").attr({zIndex: 1}).add(o.scrollGroup), S.drawLegendSymbol(o, t), t.legendItem = k = s.text(l.labelFormat ? T(l.labelFormat, t) : l.labelFormatter.call(t), v ? u + p : -p, o.baseline, A).css(n(t.visible ? d : h)).attr({
                        align: v ? "left" : "right",
                        zIndex: 2
                    }).add(t.legendGroup), o.setItemEvents && o.setItemEvents(t, k, A, d, h), o.colorizeItem(t, t.visible), _ && o.createCheckboxForItem(t)), i = k.getBBox(), r = t.checkboxOffset = l.itemWidth || t.legendItemWidth || u + p + i.width + g + (_ ? 20 : 0), o.itemHeight = e = me(t.legendItemHeight || i.height), c && o.itemX - w + r > (y || a.chartWidth - 2 * f - w - l.x) && (o.itemX = w, o.itemY += b + o.lastLineHeight + x, o.lastLineHeight = 0), o.maxItemWidth = ye(o.maxItemWidth, r), o.lastItemY = b + o.itemY + x, o.lastLineHeight = ye(e, o.lastLineHeight), t._legendItemPos = [o.itemX, o.itemY], c ? o.itemX += r : (o.itemY += b + e + x, o.lastLineHeight = e), o.offsetWidth = y || ye((c ? o.itemX - w - g : r) + f, o.offsetWidth)
                }, getAllItems: function () {
                    var t = [];
                    return wn(this.chart.series, function (e) {
                        var n = e.options;
                        m(n.showInLegend, d(n.linkedTo) ? !1 : F, !0) && (t = t.concat(e.legendItems || ("point" === n.legendType ? e.data : e)))
                    }), t
                }, render: function () {
                    var e, n, i, r, o = this, a = o.chart, s = a.renderer, l = o.group, c = o.box, u = o.options, p = o.padding, d = u.borderWidth, h = u.backgroundColor;
                    o.itemX = o.initialItemX, o.itemY = o.initialItemY, o.offsetWidth = 0, o.lastItemY = 0, l || (o.group = l = s.g("legend").attr({zIndex: 7}).add(), o.contentGroup = s.g().attr({zIndex: 1}).add(l), o.scrollGroup = s.g().add(o.contentGroup)), o.renderTitle(), e = o.getAllItems(), A(e, function (t, e) {
                        return (t.options && t.options.legendIndex || 0) - (e.options && e.options.legendIndex || 0)
                    }), u.reversed && e.reverse(), o.allItems = e, o.display = n = !!e.length, wn(e, function (t) {
                        o.renderItem(t)
                    }), i = u.width || o.offsetWidth, r = o.lastItemY + o.lastLineHeight + o.titleHeight, r = o.handleOverflow(r), (d || h) && (i += p, r += p, c ? i > 0 && r > 0 && (c[c.isNew ? "attr" : "animate"](c.crisp({
                        width: i,
                        height: r
                    })), c.isNew = !1) : (o.box = c = s.rect(0, 0, i, r, u.borderRadius, d || 0).attr({
                        stroke: u.borderColor,
                        "stroke-width": d || 0,
                        fill: h || Je
                    }).add(l).shadow(u.shadow), c.isNew = !0), c[n ? "show" : "hide"]()), o.legendWidth = i, o.legendHeight = r, wn(e, function (t) {
                        o.positionItem(t)
                    }), n && l.align(t({
                        width: i,
                        height: r
                    }, u), !0, "spacingBox"), a.isResizing || this.positionCheckboxes()
                }, handleOverflow: function (t) {
                    var e, n, i = this, r = this.chart, o = r.renderer, a = this.options, s = a.y, l = "top" === a.verticalAlign, c = r.spacingBox.height + (l ? -s : s) - this.padding, u = a.maxHeight, p = this.clipRect, d = a.navigation, h = m(d.animation, !0), f = d.arrowSize || 12, g = this.nav, v = this.pages, y = this.allItems;
                    return "horizontal" === a.layout && (c /= 2), u && (c = xe(c, u)), v.length = 0, t > c && !a.useHTML ? (this.clipHeight = e = c - 20 - this.titleHeight - this.padding, this.currentPage = m(this.currentPage, 1), this.fullHeight = t, wn(y, function (t, i) {
                        var r = t._legendItemPos[1], o = me(t.legendItem.getBBox().height), a = v.length;
                        (!a || r - v[a - 1] > e && (n || r) !== v[a - 1]) && (v.push(n || r), a++), i === y.length - 1 && r + o - v[a - 1] > e && v.push(r), r !== n && (n = r)
                    }), p || (p = i.clipRect = o.clipRect(0, this.padding, 9999, 0), i.contentGroup.clip(p)), p.attr({height: e}), g || (this.nav = g = o.g().attr({zIndex: 1}).add(this.group), this.up = o.symbol("triangle", 0, 0, f, f).on("click", function () {
                        i.scroll(-1, h)
                    }).add(g), this.pager = o.text("", 15, 10).css(d.style).add(g), this.down = o.symbol("triangle-down", 0, 0, f, f).on("click", function () {
                        i.scroll(1, h)
                    }).add(g)), i.scroll(0), t = c) : g && (p.attr({height: r.chartHeight}), g.hide(), this.scrollGroup.attr({translateY: 1}), this.clipHeight = 0), t
                }, scroll: function (t, e) {
                    var n, i = this.pages, r = i.length, o = this.currentPage + t, a = this.clipHeight, s = this.options.navigation, l = s.activeColor, c = s.inactiveColor, u = this.pager, p = this.padding;
                    o > r && (o = r), o > 0 && (e !== F && E(e, this.chart), this.nav.attr({
                        translateX: p,
                        translateY: a + this.padding + 7 + this.titleHeight,
                        visibility: Ue
                    }), this.up.attr({fill: 1 === o ? c : l}).css({cursor: 1 === o ? "default" : "pointer"}), u.attr({text: o + "/" + r}), this.down.attr({
                        x: 18 + this.pager.getBBox().width,
                        fill: o === r ? c : l
                    }).css({cursor: o === r ? "default" : "pointer"}), n = -i[o - 1] + this.initialItemY, this.scrollGroup.animate({translateY: n}), this.currentPage = o, this.positionCheckboxes(n))
                }
            };
            var Kn = fn.LegendSymbolMixin = {
                drawRectangle: function (t, e) {
                    var n = t.options.symbolHeight || 12;
                    e.legendSymbol = this.chart.renderer.rect(0, t.baseline - 5 - n / 2, t.symbolWidth, n, t.options.symbolRadius || 0).attr({zIndex: 3}).add(e.legendGroup)
                }, drawLineMarker: function (t) {
                    var e, n, i, r = this.options, o = r.marker, a = t.options, s = t.symbolWidth, l = this.chart.renderer, c = this.legendGroup, u = t.baseline - me(.3 * l.fontMetrics(a.itemStyle.fontSize).b);
                    r.lineWidth && (i = {"stroke-width": r.lineWidth}, r.dashStyle && (i.dashstyle = r.dashStyle), this.legendLine = l.path([Ze, 0, u, Ke, s, u]).attr(i).add(c)), o && o.enabled !== !1 && (e = o.radius, this.legendSymbol = n = l.symbol(this.symbol, s / 2 - e, u - e, 2 * e, 2 * e).add(c), n.isMarker = !0)
                }
            };
            (/Trident\/7\.0/.test(Ce) || Le) && w(Zn.prototype, "positionItem", function (t, e) {
                var n = this, i = function () {
                    e._legendItemPos && t.call(n, e)
                };
                i(), setTimeout(i)
            }), q.prototype = {
                init: function (t, e) {
                    var i, r = t.series;
                    t.series = null, i = n(G, t), i.series = t.series = r, this.userOptions = t;
                    var o = i.chart;
                    this.margin = this.splashArray("margin", o), this.spacing = this.splashArray("spacing", o);
                    var a = o.events;
                    this.bounds = {
                        h: {},
                        v: {}
                    }, this.callback = e, this.isResizing = 0, this.options = i, this.axes = [], this.series = [], this.hasCartesianSeries = o.showAxes;
                    var s, l = this;
                    if (l.index = Be.length, Be.push(l), He++, o.reflow !== !1 && Cn(l, "load", function () {
                            l.initReflow()
                        }), a)for (s in a)Cn(l, s, a[s]);
                    l.xAxis = [], l.yAxis = [], l.animation = je ? !1 : m(o.animation, !0), l.pointCount = 0, l.counters = new _, l.firstRender()
                }, initSeries: function (t) {
                    var e, n = this, i = n.options.chart, r = t.type || i.type || i.defaultSeriesType, o = hn[r];
                    return o || M(17, !0), e = new o, e.init(this, t), e
                }, isInsidePlot: function (t, e, n) {
                    var i = n ? e : t, r = n ? t : e;
                    return i >= 0 && i <= this.plotWidth && r >= 0 && r <= this.plotHeight
                }, adjustTickAmounts: function () {
                    this.options.chart.alignTicks !== !1 && wn(this.axes, function (t) {
                        t.adjustTickAmount()
                    }), this.maxTicks = null
                }, redraw: function (e) {
                    var n, i, r, o = this, a = o.axes, s = o.series, l = o.pointer, c = o.legend, u = o.isDirtyLegend, p = o.isDirtyBox, d = s.length, h = d, f = o.renderer, m = f.isHidden(), g = [];
                    for (E(e, o), m && o.cloneRenderTo(), o.layOutTitles(); h--;)if (r = s[h], r.options.stacking && (n = !0, r.isDirty)) {
                        i = !0;
                        break
                    }
                    if (i)for (h = d; h--;)r = s[h], r.options.stacking && (r.isDirty = !0);
                    wn(s, function (t) {
                        t.isDirty && "point" === t.options.legendType && (u = !0)
                    }), u && c.options.enabled && (c.render(), o.isDirtyLegend = !1), n && o.getStacks(), o.hasCartesianSeries && (o.isResizing || (o.maxTicks = null, wn(a, function (t) {
                        t.setScale()
                    })), o.adjustTickAmounts(), o.getMargins(), wn(a, function (t) {
                        t.isDirty && (p = !0)
                    }), wn(a, function (e) {
                        e.isDirtyExtremes && (e.isDirtyExtremes = !1, g.push(function () {
                            An(e, "afterSetExtremes", t(e.eventArgs, e.getExtremes())), delete e.eventArgs
                        })), (p || n) && e.redraw()
                    })), p && o.drawChartBox(), wn(s, function (t) {
                        t.isDirty && t.visible && (!t.isCartesian || t.xAxis) && t.redraw()
                    }), l && l.reset(!0), f.draw(), An(o, "redraw"), m && o.cloneRenderTo(!0), wn(g, function (t) {
                        t.call()
                    })
                }, get: function (t) {
                    var e, n, i, r = this, o = r.axes, a = r.series;
                    for (e = 0; e < o.length; e++)if (o[e].options.id === t)return o[e];
                    for (e = 0; e < a.length; e++)if (a[e].options.id === t)return a[e];
                    for (e = 0; e < a.length; e++)for (i = a[e].points || [], n = 0; n < i.length; n++)if (i[n].id === t)return i[n];
                    return null
                }, getAxes: function () {
                    var t, e, n = this, i = this.options, r = i.xAxis = f(i.xAxis || {}), o = i.yAxis = f(i.yAxis || {});
                    wn(r, function (t, e) {
                        t.index = e, t.isX = !0
                    }), wn(o, function (t, e) {
                        t.index = e
                    }), t = r.concat(o), wn(t, function (t) {
                        e = new H(n, t)
                    }), n.adjustTickAmounts()
                }, getSelectedPoints: function () {
                    var t = [];
                    return wn(this.series, function (e) {
                        t = t.concat(kn(e.points || [], function (t) {
                            return t.selected
                        }))
                    }), t
                }, getSelectedSeries: function () {
                    return kn(this.series, function (t) {
                        return t.selected
                    })
                }, getStacks: function () {
                    var t = this;
                    wn(t.yAxis, function (t) {
                        t.stacks && t.hasVisibleSeries && (t.oldStacks = t.stacks)
                    }), wn(t.series, function (e) {
                        !e.options.stacking || e.visible !== !0 && t.options.chart.ignoreHiddenSeries !== !1 || (e.stackKey = e.type + m(e.options.stack, ""))
                    })
                }, setTitle: function (t, e, i) {
                    var r, o, a = this, s = a.options;
                    r = s.title = n(s.title, t), o = s.subtitle = n(s.subtitle, e), wn([["title", t, r], ["subtitle", e, o]], function (t) {
                        var e = t[0], n = a[e], i = t[1], r = t[2];
                        n && i && (a[e] = n = n.destroy()), r && r.text && !n && (a[e] = a.renderer.text(r.text, 0, 0, r.useHTML).attr({
                            align: r.align,
                            "class": Ge + e,
                            zIndex: r.zIndex || 4
                        }).css(r.style).add())
                    }), a.layOutTitles(i)
                }, layOutTitles: function (e) {
                    var n, i = 0, r = this.title, o = this.subtitle, a = this.options, s = a.title, l = a.subtitle, c = this.spacingBox.width - 44;
                    r && (r.css({width: (s.width || c) + Ve}).align(t({y: 15}, s), !1, "spacingBox"), s.floating || s.verticalAlign || (i = r.getBBox().height)), o && (o.css({width: (l.width || c) + Ve}).align(t({y: i + s.margin}, l), !1, "spacingBox"), l.floating || l.verticalAlign || (i = ve(i + o.getBBox().height))), n = this.titleOffset !== i, this.titleOffset = i, !this.isDirtyBox && n && (this.isDirtyBox = n, this.hasRendered && m(e, !0) && this.isDirtyBox && this.redraw())
                }, getChartSize: function () {
                    var t = this, e = t.options.chart, n = e.width, i = e.height, r = t.renderToClone || t.renderTo;
                    d(n) || (t.containerWidth = yn(r, "width")), d(i) || (t.containerHeight = yn(r, "height")), t.chartWidth = ye(0, n || t.containerWidth || 600), t.chartHeight = ye(0, m(i, t.containerHeight > 19 ? t.containerHeight : 400))
                }, cloneRenderTo: function (t) {
                    var e = this.renderToClone, n = this.container;
                    t ? e && (this.renderTo.appendChild(n), O(e), delete this.renderToClone) : (n && n.parentNode === this.renderTo && this.renderTo.removeChild(n), this.renderToClone = e = this.renderTo.cloneNode(0), g(e, {
                        position: $e,
                        top: "-9999px",
                        display: "block"
                    }), e.style.setProperty && e.style.setProperty("display", "block", "important"), de.body.appendChild(e), n && e.appendChild(n))
                }, getContainer: function () {
                    var e, n, i, a, s, l, c = this, u = c.options.chart, p = "data-highcharts-chart";
                    c.renderTo = a = u.renderTo, l = Ge + Ie++, o(a) && (c.renderTo = a = de.getElementById(a)), a || M(13, !0), s = r(h(a, p)), !isNaN(s) && Be[s] && Be[s].hasRendered && Be[s].destroy(), h(a, p, c.index), a.innerHTML = "", u.skipClone || a.offsetWidth || c.cloneRenderTo(), c.getChartSize(), n = c.chartWidth, i = c.chartHeight, c.container = e = v(Fe, {
                        className: Ge + "container" + (u.className ? " " + u.className : ""),
                        id: l
                    }, t({
                        position: Xe,
                        overflow: Ye,
                        width: n + Ve,
                        height: i + Ve,
                        textAlign: "left",
                        lineHeight: "normal",
                        zIndex: 0,
                        "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
                    }, u.style), c.renderToClone || a), c._cursor = e.style.cursor, c.renderer = u.forExport ? new zn(e, n, i, u.style, !0) : new $(e, n, i, u.style), je && c.renderer.create(c, e, n, i)
                }, getMargins: function () {
                    var t, e = this, n = e.spacing, i = e.legend, r = e.margin, o = e.options.legend, a = m(o.margin, 20), s = o.x, l = o.y, c = o.align, u = o.verticalAlign, p = e.titleOffset;
                    e.resetMargins(), t = e.axisOffset, p && !d(r[0]) && (e.plotTop = ye(e.plotTop, p + e.options.title.margin + n[0])), i.display && !o.floating && ("right" === c ? d(r[1]) || (e.marginRight = ye(e.marginRight, i.legendWidth - s + a + n[1])) : "left" === c ? d(r[3]) || (e.plotLeft = ye(e.plotLeft, i.legendWidth + s + a + n[3])) : "top" === u ? d(r[0]) || (e.plotTop = ye(e.plotTop, i.legendHeight + l + a + n[0])) : "bottom" === u && (d(r[2]) || (e.marginBottom = ye(e.marginBottom, i.legendHeight - l + a + n[2])))), e.extraBottomMargin && (e.marginBottom += e.extraBottomMargin), e.extraTopMargin && (e.plotTop += e.extraTopMargin), e.hasCartesianSeries && wn(e.axes, function (t) {
                        t.getOffset()
                    }), d(r[3]) || (e.plotLeft += t[3]), d(r[0]) || (e.plotTop += t[0]), d(r[2]) || (e.marginBottom += t[2]), d(r[1]) || (e.marginRight += t[1]), e.setChartSize()
                }, reflow: function (t) {
                    var e = this, n = e.options.chart, i = e.renderTo, r = n.width || yn(i, "width"), o = n.height || yn(i, "height"), a = t ? t.target : he, s = function () {
                        e.container && (e.setSize(r, o, !1), e.hasUserSize = null)
                    };
                    e.hasUserSize || !r || !o || a !== he && a !== de || ((r !== e.containerWidth || o !== e.containerHeight) && (clearTimeout(e.reflowTimeout), t ? e.reflowTimeout = setTimeout(s, 100) : s()), e.containerWidth = r, e.containerHeight = o)
                }, initReflow: function () {
                    var t = this, e = function (e) {
                        t.reflow(e)
                    };
                    Cn(he, "resize", e), Cn(t, "destroy", function () {
                        _n(he, "resize", e)
                    })
                }, setSize: function (t, e, n) {
                    var i, r, o, a = this;
                    a.isResizing += 1, o = function () {
                        a && An(a, "endResize", null, function () {
                            a.isResizing -= 1
                        })
                    }, E(n, a), a.oldChartHeight = a.chartHeight, a.oldChartWidth = a.chartWidth, d(t) && (a.chartWidth = i = ye(0, me(t)), a.hasUserSize = !!i), d(e) && (a.chartHeight = r = ye(0, me(e))), (V ? Dn : g)(a.container, {
                        width: i + Ve,
                        height: r + Ve
                    }, V), a.setChartSize(!0), a.renderer.setSize(i, r, n), a.maxTicks = null, wn(a.axes, function (t) {
                        t.isDirty = !0, t.setScale()
                    }), wn(a.series, function (t) {
                        t.isDirty = !0
                    }), a.isDirtyLegend = !0, a.isDirtyBox = !0, a.layOutTitles(), a.getMargins(), a.redraw(n), a.oldChartHeight = null, An(a, "resize"), V === !1 ? o() : setTimeout(o, V && V.duration || 500)
                }, setChartSize: function (t) {
                    var e, n, i, r, o, a, s, l = this, c = l.inverted, u = l.renderer, p = l.chartWidth, d = l.chartHeight, h = l.options.chart, f = l.spacing, m = l.clipOffset;
                    l.plotLeft = i = me(l.plotLeft), l.plotTop = r = me(l.plotTop), l.plotWidth = o = ye(0, me(p - i - l.marginRight)), l.plotHeight = a = ye(0, me(d - r - l.marginBottom)), l.plotSizeX = c ? a : o, l.plotSizeY = c ? o : a, l.plotBorderWidth = h.plotBorderWidth || 0, l.spacingBox = u.spacingBox = {
                        x: f[3],
                        y: f[0],
                        width: p - f[3] - f[1],
                        height: d - f[0] - f[2]
                    }, l.plotBox = u.plotBox = {
                        x: i,
                        y: r,
                        width: o,
                        height: a
                    }, s = 2 * ge(l.plotBorderWidth / 2), e = ve(ye(s, m[3]) / 2), n = ve(ye(s, m[0]) / 2), l.clipBox = {
                        x: e,
                        y: n,
                        width: ge(l.plotSizeX - ye(s, m[1]) / 2 - e),
                        height: ge(l.plotSizeY - ye(s, m[2]) / 2 - n)
                    }, t || wn(l.axes, function (t) {
                        t.setAxisSize(), t.setAxisTranslation()
                    })
                }, resetMargins: function () {
                    var t = this, e = t.spacing, n = t.margin;
                    t.plotTop = m(n[0], e[0]), t.marginRight = m(n[1], e[1]), t.marginBottom = m(n[2], e[2]), t.plotLeft = m(n[3], e[3]), t.axisOffset = [0, 0, 0, 0], t.clipOffset = [0, 0, 0, 0]
                }, drawChartBox: function () {
                    var t, e, n = this, i = n.options.chart, r = n.renderer, o = n.chartWidth, a = n.chartHeight, s = n.chartBackground, l = n.plotBackground, c = n.plotBorder, u = n.plotBGImage, p = i.borderWidth || 0, d = i.backgroundColor, h = i.plotBackgroundColor, f = i.plotBackgroundImage, m = i.plotBorderWidth || 0, g = n.plotLeft, v = n.plotTop, y = n.plotWidth, x = n.plotHeight, b = n.plotBox, w = n.clipRect, k = n.clipBox;
                    t = p + (i.shadow ? 8 : 0), (p || d) && (s ? s.animate(s.crisp({
                        width: o - t,
                        height: a - t
                    })) : (e = {fill: d || Je}, p && (e.stroke = i.borderColor, e["stroke-width"] = p), n.chartBackground = r.rect(t / 2, t / 2, o - t, a - t, i.borderRadius, p).attr(e).addClass(Ge + "background").add().shadow(i.shadow))), h && (l ? l.animate(b) : n.plotBackground = r.rect(g, v, y, x, 0).attr({fill: h}).add().shadow(i.plotShadow)), f && (u ? u.animate(b) : n.plotBGImage = r.image(f, g, v, y, x).add()), w ? w.animate({
                        width: k.width,
                        height: k.height
                    }) : n.clipRect = r.clipRect(k), m && (c ? c.animate(c.crisp({
                        x: g,
                        y: v,
                        width: y,
                        height: x
                    })) : n.plotBorder = r.rect(g, v, y, x, 0, -m).attr({
                        stroke: i.plotBorderColor,
                        "stroke-width": m,
                        fill: Je,
                        zIndex: 1
                    }).add()), n.isDirtyBox = !1
                }, propFromSeries: function () {
                    var t, e, n, i = this, r = i.options.chart, o = i.options.series;
                    wn(["inverted", "angular", "polar"], function (a) {
                        for (t = hn[r.type || r.defaultSeriesType], n = i[a] || r[a] || t && t.prototype[a], e = o && o.length; !n && e--;)t = hn[o[e].type], t && t.prototype[a] && (n = !0);
                        i[a] = n
                    })
                }, linkSeries: function () {
                    var t = this, e = t.series;
                    wn(e, function (t) {
                        t.linkedSeries.length = 0
                    }), wn(e, function (e) {
                        var n = e.options.linkedTo;
                        o(n) && (n = ":previous" === n ? t.series[e.index - 1] : t.get(n), n && (n.linkedSeries.push(e), e.linkedParent = n))
                    })
                }, renderSeries: function () {
                    wn(this.series, function (t) {
                        t.translate(), t.setTooltipPoints && t.setTooltipPoints(), t.render()
                    })
                }, render: function () {
                    var e, n = this, i = n.axes, o = n.renderer, a = n.options, s = a.labels, l = a.credits;
                    n.setTitle(), n.legend = new Zn(n, a.legend), n.getStacks(), wn(i, function (t) {
                        t.setScale()
                    }), n.getMargins(), n.maxTicks = null, wn(i, function (t) {
                        t.setTickPositions(!0), t.setMaxTicks()
                    }), n.adjustTickAmounts(), n.getMargins(), n.drawChartBox(), n.hasCartesianSeries && wn(i, function (t) {
                        t.render()
                    }), n.seriesGroup || (n.seriesGroup = o.g("series-group").attr({zIndex: 3}).add()), n.renderSeries(), s.items && wn(s.items, function (e) {
                        var i = t(s.style, e.style), a = r(i.left) + n.plotLeft, l = r(i.top) + n.plotTop + 12;
                        delete i.left, delete i.top, o.text(e.html, a, l).attr({zIndex: 2}).css(i).add()
                    }), l.enabled && !n.credits && (e = l.href, n.credits = o.text(l.text, 0, 0).on("click", function () {
                        e && (location.href = e)
                    }).attr({
                        align: l.position.align,
                        zIndex: 8
                    }).css(l.style).add().align(l.position)), n.hasRendered = !0
                }, destroy: function () {
                    var t, e = this, n = e.axes, i = e.series, r = e.container, o = r && r.parentNode;
                    for (An(e, "destroy"), Be[e.index] = F, He--, e.renderTo.removeAttribute("data-highcharts-chart"), _n(e), t = n.length; t--;)n[t] = n[t].destroy();
                    for (t = i.length; t--;)i[t] = i[t].destroy();
                    wn(["title", "subtitle", "chartBackground", "plotBackground", "plotBGImage", "plotBorder", "seriesGroup", "clipRect", "credits", "pointer", "scroller", "rangeSelector", "legend", "resetZoomButton", "tooltip", "renderer"], function (t) {
                        var n = e[t];
                        n && n.destroy && (e[t] = n.destroy())
                    }), r && (r.innerHTML = "", _n(r), o && O(r));
                    for (t in e)delete e[t]
                }, isReadyToRender: function () {
                    var t = this;
                    return !Ne && he == he.top && "complete" !== de.readyState || je && !he.canvg ? (je ? Fn.push(function () {
                        t.firstRender()
                    }, t.options.global.canvasToolsURL) : de.attachEvent("onreadystatechange", function () {
                        de.detachEvent("onreadystatechange", t.firstRender), "complete" === de.readyState && t.firstRender()
                    }), !1) : !0
                }, firstRender: function () {
                    var t = this, e = t.options, n = t.callback;
                    t.isReadyToRender() && (t.getContainer(), An(t, "init"), t.resetMargins(), t.setChartSize(), t.propFromSeries(), t.getAxes(), wn(e.series || [], function (e) {
                        t.initSeries(e)
                    }), t.linkSeries(), An(t, "beforeRender"), fn.Pointer && (t.pointer = new Yn(t, e)), t.render(), t.renderer.draw(), n && n.apply(t, [t]), wn(t.callbacks, function (e) {
                        e.apply(t, [t])
                    }), t.cloneRenderTo(!0), An(t, "load"))
                }, splashArray: function (t, e) {
                    var n = e[t], i = a(n) ? n : [n, n, n, n];
                    return [m(e[t + "Top"], i[0]), m(e[t + "Right"], i[1]), m(e[t + "Bottom"], i[2]), m(e[t + "Left"], i[3])]
                }
            }, q.prototype.callbacks = [];
            var Qn = fn.CenteredSeriesMixin = {
                getCenter: function () {
                    var t, e, n = this.options, i = this.chart, o = 2 * (n.slicedOffset || 0), a = i.plotWidth - 2 * o, s = i.plotHeight - 2 * o, l = n.center, c = [m(l[0], "50%"), m(l[1], "50%"), n.size || "100%", n.innerSize || 0], u = xe(a, s);
                    return Sn(c, function (n, i) {
                        return e = /%$/.test(n), t = 2 > i || 2 === i && e, (e ? [a, s, u, u][i] * r(n) / 100 : n) + (t ? o : 0)
                    })
                }
            }, ti = function () {
            };
            ti.prototype = {
                init: function (t, e, n) {
                    var i, r = this;
                    return r.series = t, r.applyOptions(e, n), r.pointAttr = {}, t.options.colorByPoint && (i = t.options.colors || t.chart.options.colors, r.color = r.color || i[t.colorCounter++], t.colorCounter === i.length && (t.colorCounter = 0)), t.chart.pointCount++, r
                }, applyOptions: function (e, n) {
                    var i = this, r = i.series, o = r.pointValKey;
                    return e = ti.prototype.optionsToObject.call(this, e), t(i, e), i.options = i.options ? t(i.options, e) : e, o && (i.y = i[o]), i.x === F && r && (i.x = n === F ? r.autoIncrement() : n), i
                }, optionsToObject: function (t) {
                    var e, n = {}, i = this.series, r = i.pointArrayMap || ["y"], o = r.length, a = 0, l = 0;
                    if ("number" == typeof t || null === t)n[r[0]] = t; else if (s(t))for (t.length > o && (e = typeof t[0], "string" === e ? n.name = t[0] : "number" === e && (n.x = t[0]), a++); o > l;)n[r[l++]] = t[a++]; else"object" == typeof t && (n = t, t.dataLabels && (i._hasPointLabels = !0), t.marker && (i._hasPointMarkers = !0));
                    return n
                }, destroy: function () {
                    var t, e = this, n = e.series, i = n.chart, r = i.hoverPoints;
                    i.pointCount--, r && (e.setState(), p(r, e), r.length || (i.hoverPoints = null)), e === i.hoverPoint && e.onMouseOut(), (e.graphic || e.dataLabel) && (_n(e), e.destroyElements()), e.legendItem && i.legend.destroyItem(e);
                    for (t in e)e[t] = null
                }, destroyElements: function () {
                    for (var t, e = this, n = ["graphic", "dataLabel", "dataLabelUpper", "group", "connector", "shadowGroup"], i = 6; i--;)t = n[i], e[t] && (e[t] = e[t].destroy())
                }, getLabelConfig: function () {
                    var t = this;
                    return {
                        x: t.category,
                        y: t.y,
                        key: t.name || t.category,
                        series: t.series,
                        point: t,
                        percentage: t.percentage,
                        total: t.total || t.stackTotal
                    }
                }, tooltipFormatter: function (t) {
                    var e = this.series, n = e.tooltipOptions, i = m(n.valueDecimals, ""), r = n.valuePrefix || "", o = n.valueSuffix || "";
                    return wn(e.pointArrayMap || ["y"], function (e) {
                        e = "{point." + e, (r || o) && (t = t.replace(e + "}", r + e + "}" + o)), t = t.replace(e + "}", e + ":,." + i + "f}")
                    }), T(t, {point: this, series: this.series})
                }, firePointEvent: function (t, e, n) {
                    var i = this, r = this.series, o = r.options;
                    (o.point.events[t] || i.options && i.options.events && i.options.events[t]) && this.importEvents(), "click" === t && o.allowPointSelect && (n = function (t) {
                        i.select(null, t.ctrlKey || t.metaKey || t.shiftKey)
                    }), An(this, t, e, n)
                }
            };
            var ei = function () {
            };
            ei.prototype = {
                isCartesian: !0,
                type: "line",
                pointClass: ti,
                sorted: !0,
                requireSorting: !0,
                pointAttrToOptions: {stroke: "lineColor", "stroke-width": "lineWidth", fill: "fillColor", r: "radius"},
                axisTypes: ["xAxis", "yAxis"],
                colorCounter: 0,
                parallelArrays: ["x", "y"],
                init: function (e, n) {
                    var i, r, o = this, a = e.series, s = function (t, e) {
                        return m(t.options.index, t._i) - m(e.options.index, e._i)
                    };
                    o.chart = e, o.options = n = o.setOptions(n), o.linkedSeries = [], o.bindAxes(), t(o, {
                        name: n.name,
                        state: tn,
                        pointAttr: {},
                        visible: n.visible !== !1,
                        selected: n.selected === !0
                    }), je && (n.animation = !1), r = n.events;
                    for (i in r)Cn(o, i, r[i]);
                    (r && r.click || n.point && n.point.events && n.point.events.click || n.allowPointSelect) && (e.runTrackerClick = !0), o.getColor(), o.getSymbol(), wn(o.parallelArrays, function (t) {
                        o[t + "Data"] = []
                    }), o.setData(n.data, !1), o.isCartesian && (e.hasCartesianSeries = !0), a.push(o), o._i = a.length - 1, A(a, s), this.yAxis && A(this.yAxis.series, s), wn(a, function (t, e) {
                        t.index = e, t.name = t.name || "Series " + (e + 1)
                    })
                },
                bindAxes: function () {
                    var t, e = this, n = e.options, i = e.chart;
                    wn(e.axisTypes || [], function (r) {
                        wn(i[r], function (i) {
                            t = i.options, (n[r] === t.index || n[r] !== F && n[r] === t.id || n[r] === F && 0 === t.index) && (i.series.push(e), e[r] = i, i.isDirty = !0)
                        }), e[r] || e.optionalAxis === r || M(18, !0)
                    })
                },
                updateParallelArrays: function (t, e) {
                    var n = t.series, i = arguments, r = "number" == typeof e ? function (i) {
                        var r = "y" === i && n.toYData ? n.toYData(t) : t[i];
                        n[i + "Data"][e] = r
                    } : function (t) {
                        Array.prototype[e].apply(n[t + "Data"], Array.prototype.slice.call(i, 2))
                    };
                    wn(n.parallelArrays, r)
                },
                autoIncrement: function () {
                    var t = this, e = t.options, n = t.xIncrement;
                    return n = m(n, e.pointStart, 0), t.pointInterval = m(t.pointInterval, e.pointInterval, 1), t.xIncrement = n + t.pointInterval, n
                },
                getSegments: function () {
                    var t, e = this, n = -1, i = [], r = e.points, o = r.length;
                    if (o)if (e.options.connectNulls) {
                        for (t = o; t--;)null === r[t].y && r.splice(t, 1);
                        r.length && (i = [r])
                    } else wn(r, function (t, e) {
                        null === t.y ? (e > n + 1 && i.push(r.slice(n + 1, e)), n = e) : e === o - 1 && i.push(r.slice(n + 1, e + 1))
                    });
                    e.segments = i
                },
                setOptions: function (t) {
                    var e, i = this.chart, r = i.options, o = r.plotOptions, a = i.userOptions || {}, s = a.plotOptions || {}, l = o[this.type];
                    return this.userOptions = t, e = n(l, o.series, t), this.tooltipOptions = n(G.tooltip, G.plotOptions[this.type].tooltip, a.tooltip, s.series && s.series.tooltip, s[this.type] && s[this.type].tooltip, t.tooltip), null === l.marker && delete e.marker, e
                },
                getColor: function () {
                    var t, e, n = this.options, i = this.userOptions, r = this.chart.options.colors, o = this.chart.counters;
                    t = n.color || Mn[this.type].color, t || n.colorByPoint || (d(i._colorIndex) ? e = i._colorIndex : (i._colorIndex = o.color, e = o.color++), t = r[e]), this.color = t, o.wrapColor(r.length)
                },
                getSymbol: function () {
                    var t, e = this, n = e.userOptions, i = e.options.marker, r = e.chart, o = r.options.symbols, a = r.counters;
                    e.symbol = i.symbol, e.symbol || (d(n._symbolIndex) ? t = n._symbolIndex : (n._symbolIndex = a.symbol, t = a.symbol++), e.symbol = o[t]), /^url/.test(e.symbol) && (i.radius = 0), a.wrapSymbol(o.length)
                },
                drawLegendSymbol: Kn.drawLineMarker,
                setData: function (t, e, n, i) {
                    var r, a, c, u = this, p = u.points, d = p && p.length || 0, h = u.options, f = u.chart, g = null, v = u.xAxis, y = v && !!v.categories, x = u.tooltipPoints, b = h.turboThreshold, w = this.xData, k = this.yData, T = u.pointArrayMap, S = T && T.length;
                    if (t = t || [], r = t.length, e = m(e, !0), i === !1 || !r || d !== r || u.cropped || u.hasGroupedData) {
                        if (u.xIncrement = null, u.pointRange = y ? 1 : h.pointRange, u.colorCounter = 0, wn(this.parallelArrays, function (t) {
                                u[t + "Data"].length = 0
                            }), b && r > b) {
                            for (a = 0; null === g && r > a;)g = t[a], a++;
                            if (l(g)) {
                                var C = m(h.pointStart, 0), _ = m(h.pointInterval, 1);
                                for (a = 0; r > a; a++)w[a] = C, k[a] = t[a], C += _;
                                u.xIncrement = C
                            } else if (s(g))if (S)for (a = 0; r > a; a++)c = t[a], w[a] = c[0], k[a] = c.slice(1, S + 1); else for (a = 0; r > a; a++)c = t[a], w[a] = c[0], k[a] = c[1]; else M(12)
                        } else for (a = 0; r > a; a++)t[a] !== F && (c = {series: u}, u.pointClass.prototype.applyOptions.apply(c, [t[a]]), u.updateParallelArrays(c, a), y && c.name && (v.names[c.x] = c.name));
                        for (o(k[0]) && M(14, !0), u.data = [], u.options.data = t, a = d; a--;)p[a] && p[a].destroy && p[a].destroy();
                        x && (x.length = 0), v && (v.minRange = v.userMinRange), u.isDirty = u.isDirtyData = f.isDirtyBox = !0, n = !1
                    } else wn(t, function (t, e) {
                        p[e].update(t, !1)
                    });
                    e && f.redraw(n)
                },
                processData: function (t) {
                    var e, n, i, r, o, a, s, l = this, c = l.xData, u = l.yData, p = c.length, d = 0, h = l.xAxis, f = l.options, m = f.cropThreshold, g = 0, v = l.isCartesian;
                    if (v && !l.isDirty && !h.isDirty && !l.yAxis.isDirty && !t)return !1;
                    for (v && l.sorted && (!m || p > m || l.forceCrop) && (a = h.min, s = h.max, c[p - 1] < a || c[0] > s ? (c = [], u = []) : (c[0] < a || c[p - 1] > s) && (e = this.cropData(l.xData, l.yData, a, s), c = e.xData, u = e.yData, d = e.start, n = !0, g = c.length)), o = c.length - 1; o >= 0; o--)i = c[o] - c[o - 1], !n && c[o] > a && c[o] < s && g++, i > 0 && (r === F || r > i) ? r = i : 0 > i && l.requireSorting && M(15);
                    l.cropped = n, l.cropStart = d, l.processedXData = c, l.processedYData = u, l.activePointCount = g, null === f.pointRange && (l.pointRange = r || 1), l.closestPointRange = r
                },
                cropData: function (t, e, n, i) {
                    var r, o = t.length, a = 0, s = o, l = m(this.cropShoulder, 1);
                    for (r = 0; o > r; r++)if (t[r] >= n) {
                        a = ye(0, r - l);
                        break
                    }
                    for (; o > r; r++)if (t[r] > i) {
                        s = r + l;
                        break
                    }
                    return {xData: t.slice(a, s), yData: e.slice(a, s), start: a, end: s}
                },
                generatePoints: function () {
                    var t, e, n, i, r = this, o = r.options, a = o.data, s = r.data, l = r.processedXData, c = r.processedYData, u = r.pointClass, p = l.length, d = r.cropStart || 0, h = r.hasGroupedData, m = [];
                    if (!s && !h) {
                        var g = [];
                        g.length = a.length, s = r.data = g
                    }
                    for (i = 0; p > i; i++)e = d + i, h ? m[i] = (new u).init(r, [l[i]].concat(f(c[i]))) : (s[e] ? n = s[e] : a[e] !== F && (s[e] = n = (new u).init(r, a[e], l[i])), m[i] = n);
                    if (s && (p !== (t = s.length) || h))for (i = 0; t > i; i++)i !== d || h || (i += p), s[i] && (s[i].destroyElements(), s[i].plotX = F);
                    r.data = s, r.points = m
                },
                getExtremes: function (t) {
                    var e, n, i, r, o, a, s, l, c, u = this.xAxis, p = this.yAxis, d = this.processedXData, h = [], f = 0, g = u.getExtremes(), v = g.min, y = g.max;
                    for (t = t || this.stackedYData || this.processedYData, e = t.length, l = 0; e > l; l++)if (a = d[l], s = t[l], n = null !== s && s !== F && (!p.isLog || s.length || s > 0), i = this.getExtremesFromAll || this.cropped || (d[l + 1] || a) >= v && (d[l - 1] || a) <= y, n && i)if (c = s.length)for (; c--;)null !== s[c] && (h[f++] = s[c]); else h[f++] = s;
                    this.dataMin = m(r, P(h)), this.dataMax = m(o, D(h))
                },
                translate: function () {
                    this.processedXData || this.processData(), this.generatePoints();
                    var t, e = this, n = e.options, i = n.stacking, r = e.xAxis, o = r.categories, a = e.yAxis, s = e.points, c = s.length, u = !!e.modifyValue, p = n.pointPlacement, h = "between" === p || l(p), f = n.threshold;
                    for (t = 0; c > t; t++) {
                        var g, v, y = s[t], x = y.x, b = y.y, w = y.low, k = i && a.stacks[(e.negStacks && f > b ? "-" : "") + e.stackKey];
                        a.isLog && 0 >= b && (y.y = b = null), y.plotX = r.translate(x, 0, 0, 0, 1, p, "flags" === this.type), i && e.visible && k && k[x] && (g = k[x], v = g.points[e.index + "," + t], w = v[0], b = v[1], 0 === w && (w = m(f, a.min)), a.isLog && 0 >= w && (w = null), y.total = y.stackTotal = g.total, y.percentage = g.total && y.y / g.total * 100, y.stackY = b, g.setOffset(e.pointXOffset || 0, e.barW || 0)), y.yBottom = d(w) ? a.translate(w, 0, 1, 0, 1) : null, u && (b = e.modifyValue(b, y)), y.plotY = "number" == typeof b && 1 / 0 !== b ? a.translate(b, 0, 1, 0, 1) : F, y.clientX = h ? r.translate(x, 0, 0, 0, 1) : y.plotX, y.negative = y.y < (f || 0), y.category = o && o[y.x] !== F ? o[y.x] : y.x
                    }
                    e.getSegments()
                },
                animate: function (e) {
                    var n, i, r, o = this, s = o.chart, l = s.renderer, c = o.options.animation, u = o.clipBox || s.clipBox, p = s.inverted;
                    c && !a(c) && (c = Mn[o.type].animation), r = ["_sharedClip", c.duration, c.easing, u.height].join(","), e ? (n = s[r], i = s[r + "m"], n || (s[r] = n = l.clipRect(t(u, {width: 0})), s[r + "m"] = i = l.clipRect(-99, p ? -s.plotLeft : -s.plotTop, 99, p ? s.chartWidth : s.chartHeight)), o.group.clip(n), o.markerGroup.clip(i), o.sharedClipKey = r) : (n = s[r], n && n.animate({width: s.plotSizeX}, c), s[r + "m"] && s[r + "m"].animate({width: s.plotSizeX + 99}, c), o.animate = null)
                },
                afterAnimate: function () {
                    var t = this.chart, e = this.sharedClipKey, n = this.group, i = this.clipBox;
                    n && this.options.clip !== !1 && (e && i || n.clip(i ? t.renderer.clipRect(i) : t.clipRect), this.markerGroup.clip()), An(this, "afterAnimate"), setTimeout(function () {
                        e && t[e] && (i || (t[e] = t[e].destroy()), t[e + "m"] && (t[e + "m"] = t[e + "m"].destroy()))
                    }, 100)
                },
                drawPoints: function () {
                    var e, n, i, r, o, a, s, l, c, u, p, d, h = this, f = h.points, g = h.chart, v = h.options, y = v.marker, x = h.pointAttr[""], b = h.markerGroup, w = m(y.enabled, h.activePointCount < .5 * h.xAxis.len / y.radius);
                    if (y.enabled !== !1 || h._hasPointMarkers)for (r = f.length; r--;)o = f[r], n = ge(o.plotX), i = o.plotY, c = o.graphic, u = o.marker || {}, p = w && u.enabled === F || u.enabled, d = g.isInsidePlot(me(n), i, g.inverted), p && i !== F && !isNaN(i) && null !== o.y ? (e = o.pointAttr[o.selected ? nn : tn] || x, a = e.r, s = m(u.symbol, h.symbol), l = 0 === s.indexOf("url"), c ? c[d ? "show" : "hide"](!0).animate(t({
                        x: n - a,
                        y: i - a
                    }, c.symbolName ? {
                        width: 2 * a,
                        height: 2 * a
                    } : {})) : d && (a > 0 || l) && (o.graphic = c = g.renderer.symbol(s, n - a, i - a, 2 * a, 2 * a).attr(e).add(b))) : c && (o.graphic = c.destroy())
                },
                convertAttribs: function (t, e, n, i) {
                    var r, o, a = this.pointAttrToOptions, s = {};
                    t = t || {}, e = e || {}, n = n || {}, i = i || {};
                    for (r in a)o = a[r], s[r] = m(t[o], e[r], n[r], i[r]);
                    return s
                },
                getAttribs: function () {
                    var e, n, i, r, o, a, s = this, l = s.options, c = Mn[s.type].marker ? l.marker : l, u = c.states, p = u[en], h = s.color, f = {
                        stroke: h,
                        fill: h
                    }, m = s.points || [], g = [], v = s.pointAttrToOptions, y = s.hasPointSpecificOptions, x = l.negativeColor, b = c.lineColor, w = c.fillColor, k = l.turboThreshold;
                    if (l.marker ? (p.radius = p.radius || c.radius + 2, p.lineWidth = p.lineWidth || c.lineWidth + 1) : p.color = p.color || In(p.color || h).brighten(p.brightness).get(), g[tn] = s.convertAttribs(c, f), wn([en, nn], function (t) {
                            g[t] = s.convertAttribs(u[t], g[tn])
                        }), s.pointAttr = g, n = m.length, !k || k > n || y)for (; n--;) {
                        if (i = m[n], c = i.options && i.options.marker || i.options, c && c.enabled === !1 && (c.radius = 0), i.negative && x && (i.color = i.fillColor = x), y = l.colorByPoint || i.color, i.options)for (a in v)d(c[v[a]]) && (y = !0);
                        y ? (c = c || {}, r = [], u = c.states || {}, e = u[en] = u[en] || {}, l.marker || (e.color = e.color || !i.options.color && p.color || In(i.color).brighten(e.brightness || p.brightness).get()), o = {color: i.color}, w || (o.fillColor = i.color), b || (o.lineColor = i.color), r[tn] = s.convertAttribs(t(o, c), g[tn]), r[en] = s.convertAttribs(u[en], g[en], r[tn]), r[nn] = s.convertAttribs(u[nn], g[nn], r[tn])) : r = g, i.pointAttr = r
                    }
                },
                destroy: function () {
                    var t, e, n, i, r, o = this, a = o.chart, s = /AppleWebKit\/533/.test(Ce), l = o.data || [];
                    for (An(o, "destroy"), _n(o), wn(o.axisTypes || [], function (t) {
                        r = o[t], r && (p(r.series, o), r.isDirty = r.forceRedraw = !0)
                    }), o.legendItem && o.chart.legend.destroyItem(o), e = l.length; e--;)n = l[e], n && n.destroy && n.destroy();
                    o.points = null, clearTimeout(o.animationTimeout), wn(["area", "graph", "dataLabelsGroup", "group", "markerGroup", "tracker", "graphNeg", "areaNeg", "posClip", "negClip"], function (e) {
                        o[e] && (t = s && "group" === e ? "hide" : "destroy", o[e][t]())
                    }), a.hoverSeries === o && (a.hoverSeries = null), p(a.series, o);
                    for (i in o)delete o[i]
                },
                getSegmentPath: function (t) {
                    var e = this, n = [], i = e.options.step;
                    return wn(t, function (r, o) {
                        var a, s = r.plotX, l = r.plotY;
                        e.getPointSpline ? n.push.apply(n, e.getPointSpline(t, r, o)) : (n.push(o ? Ke : Ze), i && o && (a = t[o - 1], "right" === i ? n.push(a.plotX, l) : "center" === i ? n.push((a.plotX + s) / 2, a.plotY, (a.plotX + s) / 2, l) : n.push(s, a.plotY)), n.push(r.plotX, r.plotY))
                    }), n
                },
                getGraphPath: function () {
                    var t, e = this, n = [], i = [];
                    return wn(e.segments, function (r) {
                        t = e.getSegmentPath(r), r.length > 1 ? n = n.concat(t) : i.push(r[0])
                    }), e.singlePoints = i, e.graphPath = n, n
                },
                drawGraph: function () {
                    var t = this, e = this.options, n = [["graph", e.lineColor || this.color]], i = e.lineWidth, r = e.dashStyle, o = "square" !== e.linecap, a = this.getGraphPath(), s = e.negativeColor;
                    s && n.push(["graphNeg", s]), wn(n, function (n, s) {
                        var l, c = n[0], u = t[c];
                        u ? (Ln(u), u.animate({d: a})) : i && a.length && (l = {
                            stroke: n[1],
                            "stroke-width": i,
                            fill: Je,
                            zIndex: 1
                        }, r ? l.dashstyle = r : o && (l["stroke-linecap"] = l["stroke-linejoin"] = "round"), t[c] = t.chart.renderer.path(a).attr(l).add(t.group).shadow(!s && e.shadow))
                    })
                },
                clipNeg: function () {
                    var t, e, n, i, r, o = this.options, a = this.chart, s = a.renderer, l = o.negativeColor || o.negativeFillColor, c = this.graph, u = this.area, p = this.posClip, d = this.negClip, h = a.chartWidth, f = a.chartHeight, m = ye(h, f), g = this.yAxis;
                    l && (c || u) && (t = me(g.toPixels(o.threshold || 0, !0)), 0 > t && (m -= t), i = {
                        x: 0,
                        y: 0,
                        width: m,
                        height: t
                    }, r = {
                        x: 0,
                        y: t,
                        width: m,
                        height: m
                    }, a.inverted && (i.height = r.y = a.plotWidth - t, s.isVML && (i = {
                        x: a.plotWidth - t - a.plotLeft,
                        y: 0,
                        width: h,
                        height: f
                    }, r = {
                        x: t + a.plotLeft - h,
                        y: 0,
                        width: a.plotLeft + t,
                        height: h
                    })), g.reversed ? (e = r, n = i) : (e = i, n = r), p ? (p.animate(e), d.animate(n)) : (this.posClip = p = s.clipRect(e), this.negClip = d = s.clipRect(n), c && this.graphNeg && (c.clip(p), this.graphNeg.clip(d)), u && (u.clip(p), this.areaNeg.clip(d))))
                },
                invertGroups: function () {
                    function t() {
                        var t = {width: e.yAxis.len, height: e.xAxis.len};
                        wn(["group", "markerGroup"], function (n) {
                            e[n] && e[n].attr(t).invert()
                        })
                    }

                    var e = this, n = e.chart;
                    e.xAxis && (Cn(n, "resize", t), Cn(e, "destroy", function () {
                        _n(n, "resize", t)
                    }), t(), e.invertGroups = t)
                },
                plotGroup: function (t, e, n, i, r) {
                    var o = this[t], a = !o;
                    return a && (this[t] = o = this.chart.renderer.g(e).attr({
                        visibility: n,
                        zIndex: i || .1
                    }).add(r)), o[a ? "attr" : "animate"](this.getPlotBox()), o
                },
                getPlotBox: function () {
                    var t = this.chart, e = this.xAxis, n = this.yAxis;
                    return t.inverted && (e = n, n = this.xAxis), {
                        translateX: e ? e.left : t.plotLeft,
                        translateY: n ? n.top : t.plotTop,
                        scaleX: 1,
                        scaleY: 1
                    }
                },
                render: function () {
                    var t, e = this, n = e.chart, i = e.options, r = i.animation, o = r && !!e.animate && n.renderer.isSVG && m(r.duration, 500) || 0, a = e.visible ? Ue : Ye, s = i.zIndex, l = e.hasRendered, c = n.seriesGroup;
                    t = e.plotGroup("group", "series", a, s, c), e.markerGroup = e.plotGroup("markerGroup", "markers", a, s, c), o && e.animate(!0), e.getAttribs(), t.inverted = e.isCartesian ? n.inverted : !1, e.drawGraph && (e.drawGraph(), e.clipNeg()), e.drawDataLabels && e.drawDataLabels(), e.visible && e.drawPoints(), e.drawTracker && e.options.enableMouseTracking !== !1 && e.drawTracker(), n.inverted && e.invertGroups(), i.clip === !1 || e.sharedClipKey || l || t.clip(n.clipRect), o && e.animate(), l || (o ? e.animationTimeout = setTimeout(function () {
                        e.afterAnimate()
                    }, o) : e.afterAnimate()), e.isDirty = e.isDirtyData = !1, e.hasRendered = !0
                },
                redraw: function () {
                    var t = this, e = t.chart, n = t.isDirtyData, i = t.group, r = t.xAxis, o = t.yAxis;
                    i && (e.inverted && i.attr({
                        width: e.plotWidth,
                        height: e.plotHeight
                    }), i.animate({
                        translateX: m(r && r.left, e.plotLeft),
                        translateY: m(o && o.top, e.plotTop)
                    })), t.translate(), t.setTooltipPoints && t.setTooltipPoints(!0), t.render(), n && An(t, "updatedData")
                }
            }, W.prototype = {
                destroy: function () {
                    L(this, this.axis)
                }, render: function (t) {
                    var e = this.options, n = e.format, i = n ? T(n, this) : e.formatter.call(this);
                    this.label ? this.label.attr({
                        text: i,
                        visibility: Ye
                    }) : this.label = this.axis.chart.renderer.text(i, null, null, e.useHTML).css(e.style).attr({
                        align: this.textAlign,
                        rotation: e.rotation,
                        visibility: Ye
                    }).add(t)
                }, setOffset: function (t, e) {
                    var n, i = this, r = i.axis, o = r.chart, a = o.inverted, s = this.isNegative, l = r.translate(r.usePercentage ? 100 : this.total, 0, 0, 0, 1), c = r.translate(0), u = be(l - c), p = o.xAxis[0].translate(this.x) + t, d = o.plotHeight, h = {
                        x: a ? s ? l : l - u : p,
                        y: a ? d - p - e : s ? d - l - u : d - l,
                        width: a ? u : e,
                        height: a ? e : u
                    }, f = this.label;
                    f && (f.align(this.alignOptions, null, h), n = f.alignAttr, f[this.options.crop === !1 || o.isInsidePlot(n.x, n.y) ? "show" : "hide"](!0))
                }
            }, H.prototype.buildStacks = function () {
                var t = this.series, e = m(this.options.reversedStacks, !0), n = t.length;
                if (!this.isXAxis) {
                    for (this.usePercentage = !1; n--;)t[e ? n : t.length - n - 1].setStackedPoints();
                    if (this.usePercentage)for (n = 0; n < t.length; n++)t[n].setPercentStacks()
                }
            }, H.prototype.renderStackTotals = function () {
                var t, e, n, i = this, r = i.chart, o = r.renderer, a = i.stacks, s = i.stackTotalGroup;
                s || (i.stackTotalGroup = s = o.g("stack-labels").attr({
                    visibility: Ue,
                    zIndex: 6
                }).add()), s.translate(r.plotLeft, r.plotTop);
                for (t in a) {
                    e = a[t];
                    for (n in e)e[n].render(s)
                }
            }, ei.prototype.setStackedPoints = function () {
                if (this.options.stacking && (this.visible === !0 || this.chart.options.chart.ignoreHiddenSeries === !1)) {
                    var t, e, n, i, r, o, a, s, l = this, c = l.processedXData, u = l.processedYData, p = [], d = u.length, h = l.options, f = h.threshold, m = h.stack, g = h.stacking, v = l.stackKey, y = "-" + v, x = l.negStacks, b = l.yAxis, w = b.stacks, k = b.oldStacks;
                    for (o = 0; d > o; o++)a = c[o], s = u[o], r = l.index + "," + o, t = x && f > s, i = t ? y : v, w[i] || (w[i] = {}), w[i][a] || (k[i] && k[i][a] ? (w[i][a] = k[i][a], w[i][a].total = null) : w[i][a] = new W(b, b.options.stackLabels, t, a, m)), e = w[i][a], e.points[r] = [e.cum || 0], "percent" === g ? (n = t ? v : y, x && w[n] && w[n][a] ? (n = w[n][a], e.total = n.total = ye(n.total, e.total) + be(s) || 0) : e.total = N(e.total + (be(s) || 0))) : e.total = N(e.total + (s || 0)), e.cum = (e.cum || 0) + (s || 0), e.points[r].push(e.cum), p[o] = e.cum;
                    "percent" === g && (b.usePercentage = !0), this.stackedYData = p, b.oldStacks = {}
                }
            }, ei.prototype.setPercentStacks = function () {
                var t = this, e = t.stackKey, n = t.yAxis.stacks, i = t.processedXData;
                wn([e, "-" + e], function (e) {
                    for (var r, o, a, s, l = i.length; l--;)r = i[l], o = n[e] && n[e][r], a = o && o.points[t.index + "," + l], a && (s = o.total ? 100 / o.total : 0, a[0] = N(a[0] * s), a[1] = N(a[1] * s), t.stackedYData[l] = a[1])
                })
            }, t(q.prototype, {
                addSeries: function (t, e, n) {
                    var i, r = this;
                    return t && (e = m(e, !0), An(r, "addSeries", {options: t}, function () {
                        i = r.initSeries(t), r.isDirtyLegend = !0, r.linkSeries(), e && r.redraw(n)
                    })), i
                }, addAxis: function (t, e, i, r) {
                    var o, a = e ? "xAxis" : "yAxis", s = this.options;
                    o = new H(this, n(t, {
                        index: this[a].length,
                        isX: e
                    })), s[a] = f(s[a] || {}), s[a].push(t), m(i, !0) && this.redraw(r)
                }, showLoading: function (e) {
                    var n = this, i = n.options, r = n.loadingDiv, o = i.loading;
                    r || (n.loadingDiv = r = v(Fe, {className: Ge + "loading"}, t(o.style, {
                        zIndex: 10,
                        display: Je
                    }), n.container), n.loadingSpan = v("span", null, o.labelStyle, r)), n.loadingSpan.innerHTML = e || i.lang.loading, n.loadingShown || (g(r, {
                        opacity: 0,
                        display: "",
                        left: n.plotLeft + Ve,
                        top: n.plotTop + Ve,
                        width: n.plotWidth + Ve,
                        height: n.plotHeight + Ve
                    }), Dn(r, {opacity: o.style.opacity}, {duration: o.showDuration || 0}), n.loadingShown = !0)
                }, hideLoading: function () {
                    var t = this.options, e = this.loadingDiv;
                    e && Dn(e, {opacity: 0}, {
                        duration: t.loading.hideDuration || 100, complete: function () {
                            g(e, {display: Je})
                        }
                    }), this.loadingShown = !1
                }
            }), t(ti.prototype, {
                update: function (t, e, n) {
                    var i, r = this, o = r.series, s = r.graphic, l = o.data, c = o.chart, u = o.options;
                    e = m(e, !0), r.firePointEvent("update", {options: t}, function () {
                        r.applyOptions(t), a(t) && (o.getAttribs(), s && (t && t.marker && t.marker.symbol ? r.graphic = s.destroy() : s.attr(r.pointAttr[r.state || ""])), t && t.dataLabels && r.dataLabel && (r.dataLabel = r.dataLabel.destroy())), i = bn(r, l), o.updateParallelArrays(r, i), u.data[i] = r.options, o.isDirty = o.isDirtyData = !0, !o.fixedBox && o.hasCartesianSeries && (c.isDirtyBox = !0), "point" === u.legendType && c.legend.destroyItem(r), e && c.redraw(n)
                    })
                }, remove: function (t, e) {
                    var n, i = this, r = i.series, o = r.points, a = r.chart, s = r.data;
                    E(e, a), t = m(t, !0), i.firePointEvent("remove", null, function () {
                        n = bn(i, s), s.length === o.length && o.splice(n, 1), s.splice(n, 1), r.options.data.splice(n, 1), r.updateParallelArrays(i, "splice", n, 1), i.destroy(), r.isDirty = !0, r.isDirtyData = !0, t && a.redraw()
                    })
                }
            }), t(ei.prototype, {
                addPoint: function (t, e, n, i) {
                    var r, o, a, s, l = this, c = l.options, u = l.data, p = l.graph, d = l.area, h = l.chart, f = l.xAxis && l.xAxis.names, g = p && p.shift || 0, v = c.data, y = l.xData;
                    if (E(i, h), n && wn([p, d, l.graphNeg, l.areaNeg], function (t) {
                            t && (t.shift = g + 1)
                        }), d && (d.isArea = !0), e = m(e, !0), r = {series: l}, l.pointClass.prototype.applyOptions.apply(r, [t]), a = r.x, s = y.length, l.requireSorting && a < y[s - 1])for (o = !0; s && y[s - 1] > a;)s--;
                    l.updateParallelArrays(r, "splice", s, 0, 0), l.updateParallelArrays(r, s), f && (f[a] = r.name), v.splice(s, 0, t), o && (l.data.splice(s, 0, null), l.processData()), "point" === c.legendType && l.generatePoints(), n && (u[0] && u[0].remove ? u[0].remove(!1) : (u.shift(), l.updateParallelArrays(r, "shift"), v.shift())), l.isDirty = !0, l.isDirtyData = !0, e && (l.getAttribs(), h.redraw())
                }, remove: function (t, e) {
                    var n = this, i = n.chart;
                    t = m(t, !0), n.isRemoving || (n.isRemoving = !0, An(n, "remove", null, function () {
                        n.destroy(), i.isDirtyLegend = i.isDirtyBox = !0, i.linkSeries(), t && i.redraw(e)
                    })), n.isRemoving = !1
                }, update: function (e, i) {
                    var r, o = this.chart, a = this.userOptions, s = this.type, l = hn[s].prototype;
                    e = n(a, {
                        animation: !1,
                        index: this.index,
                        pointStart: this.xData[0]
                    }, {data: this.options.data}, e), this.remove(!1);
                    for (r in l)l.hasOwnProperty(r) && (this[r] = F);
                    t(this, hn[e.type || s].prototype), this.init(o, e), m(i, !0) && o.redraw(!1)
                }
            }), t(H.prototype, {
                update: function (e, i) {
                    var r = this.chart;
                    e = r.options[this.coll][this.options.index] = n(this.userOptions, e), this.destroy(!0), this._addedPlotLB = F, this.init(r, t(e, {events: F})), r.isDirtyBox = !0, m(i, !0) && r.redraw()
                }, remove: function (t) {
                    for (var e = this.chart, n = this.coll, i = this.series, r = i.length; r--;)i[r] && i[r].remove(!1);
                    p(e.axes, this), p(e[n], this), e.options[n].splice(this.options.index, 1), wn(e[n], function (t, e) {
                        t.options.index = e
                    }), this.destroy(), e.isDirtyBox = !0, m(t, !0) && e.redraw()
                }, setTitle: function (t, e) {
                    this.update({title: t}, e)
                }, setCategories: function (t, e) {
                    this.update({categories: t}, e)
                }
            });
            var ni = y(ei);
            hn.line = ni, Mn.area = n(Nn, {threshold: 0});
            var ii = y(ei, {
                type: "area", getSegments: function () {
                    var t, e, n, i, r, o = [], a = [], s = [], l = this.xAxis, c = this.yAxis, u = c.stacks[this.stackKey], p = {}, d = this.points, h = this.options.connectNulls;
                    if (this.options.stacking && !this.cropped) {
                        for (i = 0; i < d.length; i++)p[d[i].x] = d[i];
                        for (r in u)null !== u[r].total && s.push(+r);
                        s.sort(function (t, e) {
                            return t - e
                        }), wn(s, function (i) {
                            (!h || p[i] && null !== p[i].y) && (p[i] ? a.push(p[i]) : (t = l.translate(i), n = u[i].percent ? u[i].total ? 100 * u[i].cum / u[i].total : 0 : u[i].cum, e = c.toPixels(n, !0), a.push({
                                y: null,
                                plotX: t,
                                clientX: t,
                                plotY: e,
                                yBottom: e,
                                onMouseOver: ze
                            })))
                        }), a.length && o.push(a)
                    } else ei.prototype.getSegments.call(this), o = this.segments;
                    this.segments = o
                }, getSegmentPath: function (t) {
                    var e, n, i = ei.prototype.getSegmentPath.call(this, t), r = [].concat(i), o = this.options, a = i.length, s = this.yAxis.getThreshold(o.threshold);
                    if (3 === a && r.push(Ke, i[1], i[2]), o.stacking && !this.closedStacks)for (e = t.length - 1; e >= 0; e--)n = m(t[e].yBottom, s), e < t.length - 1 && o.step && r.push(t[e + 1].plotX, n), r.push(t[e].plotX, n); else this.closeSegment(r, t, s);
                    return this.areaPath = this.areaPath.concat(r), i
                }, closeSegment: function (t, e, n) {
                    t.push(Ke, e[e.length - 1].plotX, n, Ke, e[0].plotX, n)
                }, drawGraph: function () {
                    this.areaPath = [], ei.prototype.drawGraph.apply(this);
                    var t = this, e = this.areaPath, n = this.options, i = n.negativeColor, r = n.negativeFillColor, o = [["area", this.color, n.fillColor]];
                    (i || r) && o.push(["areaNeg", i, r]), wn(o, function (i) {
                        var r = i[0], o = t[r];
                        o ? o.animate({d: e}) : t[r] = t.chart.renderer.path(e).attr({
                            fill: m(i[2], In(i[1]).setOpacity(m(n.fillOpacity, .75)).get()),
                            zIndex: 0
                        }).add(t.group)
                    })
                }, drawLegendSymbol: Kn.drawRectangle
            });
            hn.area = ii, Mn.spline = n(Nn);
            var ri = y(ei, {
                type: "spline", getPointSpline: function (t, e, n) {
                    var i, r, o, a, s, l = 1.5, c = l + 1, u = e.plotX, p = e.plotY, d = t[n - 1], h = t[n + 1];
                    if (d && h) {
                        var f, m = d.plotX, g = d.plotY, v = h.plotX, y = h.plotY;
                        i = (l * u + m) / c, r = (l * p + g) / c, o = (l * u + v) / c, a = (l * p + y) / c, f = (a - r) * (o - u) / (o - i) + p - a, r += f, a += f, r > g && r > p ? (r = ye(g, p), a = 2 * p - r) : g > r && p > r && (r = xe(g, p), a = 2 * p - r), a > y && a > p ? (a = ye(y, p), r = 2 * p - a) : y > a && p > a && (a = xe(y, p), r = 2 * p - a), e.rightContX = o, e.rightContY = a
                    }
                    return n ? (s = ["L", d.rightContX || d.plotX, d.rightContY || d.plotY, i || u, r || p, u, p], d.rightContX = d.rightContY = null) : s = [Ze, u, p], s
                }
            });
            hn.spline = ri, Mn.areaspline = n(Mn.area);
            var oi = ii.prototype, ai = y(ri, {
                type: "areaspline",
                closedStacks: !0,
                getSegmentPath: oi.getSegmentPath,
                closeSegment: oi.closeSegment,
                drawGraph: oi.drawGraph,
                drawLegendSymbol: Kn.drawRectangle
            });
            hn.areaspline = ai, Mn.column = n(Nn, {
                borderColor: "#FFFFFF",
                borderRadius: 0,
                groupPadding: .2,
                marker: null,
                pointPadding: .1,
                minPointLength: 0,
                cropThreshold: 50,
                pointRange: null,
                states: {
                    hover: {brightness: .1, shadow: !1, halo: !1},
                    select: {color: "#C0C0C0", borderColor: "#000000", shadow: !1}
                },
                dataLabels: {align: null, verticalAlign: null, y: null},
                stickyTracking: !1,
                tooltip: {distance: 6},
                threshold: 0
            });
            var si = y(ei, {
                type: "column",
                pointAttrToOptions: {stroke: "borderColor", fill: "color", r: "borderRadius"},
                cropShoulder: 0,
                trackerGroups: ["group", "dataLabelsGroup"],
                negStacks: !0,
                init: function () {
                    ei.prototype.init.apply(this, arguments);
                    var t = this, e = t.chart;
                    e.hasRendered && wn(e.series, function (e) {
                        e.type === t.type && (e.isDirty = !0)
                    })
                },
                getColumnMetrics: function () {
                    var t, e, n = this, i = n.options, r = n.xAxis, o = n.yAxis, a = r.reversed, s = {}, l = 0;
                    i.grouping === !1 ? l = 1 : wn(n.chart.series, function (i) {
                        var r = i.options, a = i.yAxis;
                        i.type === n.type && i.visible && o.len === a.len && o.pos === a.pos && (r.stacking ? (t = i.stackKey, s[t] === F && (s[t] = l++), e = s[t]) : r.grouping !== !1 && (e = l++), i.columnIndex = e)
                    });
                    var c = xe(be(r.transA) * (r.ordinalSlope || i.pointRange || r.closestPointRange || r.tickInterval || 1), r.len), u = c * i.groupPadding, p = c - 2 * u, h = p / l, f = i.pointWidth, g = d(f) ? (h - f) / 2 : h * i.pointPadding, v = m(f, h - 2 * g), y = (a ? l - (n.columnIndex || 0) : n.columnIndex) || 0, x = g + (u + y * h - c / 2) * (a ? -1 : 1);
                    return n.columnMetrics = {width: v, offset: x}
                },
                translate: function () {
                    var t = this, e = t.chart, n = t.options, i = t.borderWidth = m(n.borderWidth, t.activePointCount > .5 * t.xAxis.len ? 0 : 1), r = t.yAxis, o = n.threshold, a = t.translatedThreshold = r.getThreshold(o), s = m(n.minPointLength, 5), l = t.getColumnMetrics(), c = l.width, u = t.barW = ve(ye(c, 1 + 2 * i)), p = t.pointXOffset = l.offset, d = -(i % 2 ? .5 : 0), h = i % 2 ? .5 : 1;
                    e.renderer.isVML && e.inverted && (h += 1), ei.prototype.translate.apply(t), wn(t.points, function (n) {
                        var i, o, l, f, g = m(n.yBottom, a), v = xe(ye(-999 - g, n.plotY), r.len + 999 + g), y = n.plotX + p, x = u, b = xe(v, g), w = ye(v, g) - b;
                        be(w) < s && s && (w = s, b = me(be(b - a) > s ? g - s : a - (r.translate(n.y, 0, 1, 0, 1) <= a ? s : 0))), n.barX = y, n.pointWidth = c, n.tooltipPos = e.inverted ? [r.len - v, t.xAxis.len - y - x / 2] : [y + x / 2, v], f = be(y) < .5, i = me(y + x) + d, y = me(y) + d, x = i - y, l = be(b) < .5, o = me(b + w) + h, b = me(b) + h, w = o - b, f && (y += 1, x -= 1), l && (b -= 1, w += 1), n.shapeType = "rect", n.shapeArgs = {
                            x: y,
                            y: b,
                            width: x,
                            height: w
                        }
                    })
                },
                getSymbol: ze,
                drawLegendSymbol: Kn.drawRectangle,
                drawGraph: ze,
                drawPoints: function () {
                    var t, e, i, r = this, o = this.chart, a = r.options, s = o.renderer, l = a.animationLimit || 250;
                    wn(r.points, function (c) {
                        var u = c.plotY, p = c.graphic;
                        u === F || isNaN(u) || null === c.y ? p && (c.graphic = p.destroy()) : (t = c.shapeArgs, i = d(r.borderWidth) ? {"stroke-width": r.borderWidth} : {}, e = c.pointAttr[c.selected ? nn : tn] || r.pointAttr[tn], p ? (Ln(p), p.attr(i)[o.pointCount < l ? "animate" : "attr"](n(t))) : c.graphic = p = s[c.shapeType](t).attr(e).attr(i).add(r.group).shadow(a.shadow, null, a.stacking && !a.borderRadius))
                    })
                },
                animate: function (t) {
                    var e, n = this, i = this.yAxis, r = n.options, o = this.chart.inverted, a = {};
                    Ne && (t ? (a.scaleY = .001, e = xe(i.pos + i.len, ye(i.pos, i.toPixels(r.threshold))), o ? a.translateX = e - i.len : a.translateY = e, n.group.attr(a)) : (a.scaleY = 1, a[o ? "translateX" : "translateY"] = i.pos, n.group.animate(a, n.options.animation), n.animate = null))
                },
                remove: function () {
                    var t = this, e = t.chart;
                    e.hasRendered && wn(e.series, function (e) {
                        e.type === t.type && (e.isDirty = !0)
                    }), ei.prototype.remove.apply(t, arguments)
                }
            });
            hn.column = si, Mn.bar = n(Mn.column);
            var li = y(si, {type: "bar", inverted: !0});
            hn.bar = li, Mn.scatter = n(Nn, {
                lineWidth: 0,
                tooltip: {
                    headerFormat: '<span style="color:{series.color}">\u25CF</span> <span style="font-size: 10px;"> {series.name}</span><br/>',
                    pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
                },
                stickyTracking: !1
            });
            var ci = y(ei, {
                type: "scatter",
                sorted: !1,
                requireSorting: !1,
                noSharedTooltip: !0,
                trackerGroups: ["markerGroup"],
                takeOrdinalPosition: !1,
                singularTooltips: !0,
                drawGraph: function () {
                    this.options.lineWidth && ei.prototype.drawGraph.call(this)
                }
            });
            hn.scatter = ci, Mn.pie = n(Nn, {
                borderColor: "#FFFFFF",
                borderWidth: 1,
                center: [null, null],
                clip: !1,
                colorByPoint: !0,
                dataLabels: {
                    distance: 30, enabled: !0, formatter: function () {
                        return this.point.name
                    }
                },
                ignoreHiddenPoint: !0,
                legendType: "point",
                marker: null,
                size: null,
                showInLegend: !1,
                slicedOffset: 10,
                states: {hover: {brightness: .1, shadow: !1}},
                stickyTracking: !1,
                tooltip: {followPointer: !0}
            });
            var ui = y(ti, {
                init: function () {
                    ti.prototype.init.apply(this, arguments);
                    var e, n = this;
                    return n.y < 0 && (n.y = null), t(n, {
                        visible: n.visible !== !1,
                        name: m(n.name, "Slice")
                    }), e = function (t) {
                        n.slice("select" === t.type)
                    }, Cn(n, "select", e), Cn(n, "unselect", e), n
                }, setVisible: function (t) {
                    var e = this, n = e.series, i = n.chart;
                    e.visible = e.options.visible = t = t === F ? !e.visible : t, n.options.data[bn(e, n.data)] = e.options, wn(["graphic", "dataLabel", "connector", "shadowGroup"], function (n) {
                        e[n] && e[n][t ? "show" : "hide"](!0)
                    }), e.legendItem && i.legend.colorizeItem(e, t), !n.isDirty && n.options.ignoreHiddenPoint && (n.isDirty = !0, i.redraw())
                }, slice: function (t, e, n) {
                    var i, r = this, o = r.series, a = o.chart;
                    E(n, a), e = m(e, !0), r.sliced = r.options.sliced = t = d(t) ? t : !r.sliced, o.options.data[bn(r, o.data)] = r.options, i = t ? r.slicedTranslation : {
                        translateX: 0,
                        translateY: 0
                    }, r.graphic.animate(i), r.shadowGroup && r.shadowGroup.animate(i)
                }, haloPath: function (t) {
                    var e = this.shapeArgs, n = this.series.chart;
                    return this.series.chart.renderer.symbols.arc(n.plotLeft + e.x, n.plotTop + e.y, e.r + t, e.r + t, {
                        innerR: this.shapeArgs.r,
                        start: e.start,
                        end: e.end
                    })
                }
            }), pi = {
                type: "pie",
                isCartesian: !1,
                pointClass: ui,
                requireSorting: !1,
                noSharedTooltip: !0,
                trackerGroups: ["group", "dataLabelsGroup"],
                axisTypes: [],
                pointAttrToOptions: {stroke: "borderColor", "stroke-width": "borderWidth", fill: "color"},
                singularTooltips: !0,
                getColor: ze,
                animate: function (t) {
                    var e = this, n = e.points, i = e.startAngleRad;
                    t || (wn(n, function (t) {
                        var n = t.graphic, r = t.shapeArgs;
                        n && (n.attr({r: e.center[3] / 2, start: i, end: i}), n.animate({
                            r: r.r,
                            start: r.start,
                            end: r.end
                        }, e.options.animation))
                    }), e.animate = null)
                },
                setData: function (t, e, n, i) {
                    ei.prototype.setData.call(this, t, !1, n, i), this.processData(), this.generatePoints(), m(e, !0) && this.chart.redraw(n)
                },
                generatePoints: function () {
                    var t, e, n, i, r = 0, o = this.options.ignoreHiddenPoint;
                    for (ei.prototype.generatePoints.call(this), e = this.points, n = e.length, t = 0; n > t; t++)i = e[t], r += o && !i.visible ? 0 : i.y;
                    for (this.total = r, t = 0; n > t; t++)i = e[t], i.percentage = r > 0 ? i.y / r * 100 : 0, i.total = r
                },
                translate: function (t) {
                    this.generatePoints();
                    var e, n, i, r, o, a, s, l = this, c = 0, u = 1e3, p = l.options, d = p.slicedOffset, h = d + p.borderWidth, f = p.startAngle || 0, g = l.startAngleRad = Te / 180 * (f - 90), v = l.endAngleRad = Te / 180 * (m(p.endAngle, f + 360) - 90), y = v - g, x = l.points, b = p.dataLabels.distance, w = p.ignoreHiddenPoint, k = x.length;
                    for (t || (l.center = t = l.getCenter()), l.getX = function (e, n) {
                        return i = fe.asin(xe((e - t[1]) / (t[2] / 2 + b), 1)), t[0] + (n ? -1 : 1) * we(i) * (t[2] / 2 + b)
                    }, a = 0; k > a; a++)s = x[a], e = g + c * y, (!w || s.visible) && (c += s.percentage / 100), n = g + c * y, s.shapeType = "arc", s.shapeArgs = {
                        x: t[0],
                        y: t[1],
                        r: t[2] / 2,
                        innerR: t[3] / 2,
                        start: me(e * u) / u,
                        end: me(n * u) / u
                    }, i = (n + e) / 2, i > 1.5 * Te ? i -= 2 * Te : -Te / 2 > i && (i += 2 * Te), s.slicedTranslation = {
                        translateX: me(we(i) * d),
                        translateY: me(ke(i) * d)
                    }, r = we(i) * t[2] / 2, o = ke(i) * t[2] / 2, s.tooltipPos = [t[0] + .7 * r, t[1] + .7 * o], s.half = -Te / 2 > i || i > Te / 2 ? 1 : 0, s.angle = i, h = xe(h, b / 2), s.labelPos = [t[0] + r + we(i) * b, t[1] + o + ke(i) * b, t[0] + r + we(i) * h, t[1] + o + ke(i) * h, t[0] + r, t[1] + o, 0 > b ? "center" : s.half ? "right" : "left", i]
                },
                drawGraph: null,
                drawPoints: function () {
                    var e, n, i, r, o = this, a = o.chart, s = a.renderer, l = o.options.shadow;
                    l && !o.shadowGroup && (o.shadowGroup = s.g("shadow").add(o.group)), wn(o.points, function (a) {
                        n = a.graphic, r = a.shapeArgs, i = a.shadowGroup, l && !i && (i = a.shadowGroup = s.g("shadow").add(o.shadowGroup)), e = a.sliced ? a.slicedTranslation : {
                            translateX: 0,
                            translateY: 0
                        }, i && i.attr(e), n ? n.animate(t(r, e)) : a.graphic = n = s[a.shapeType](r).setRadialReference(o.center).attr(a.pointAttr[a.selected ? nn : tn]).attr({"stroke-linejoin": "round"}).attr(e).add(o.group).shadow(l, i), void 0 !== a.visible && a.setVisible(a.visible)
                    })
                },
                sortByAngle: function (t, e) {
                    t.sort(function (t, n) {
                        return void 0 !== t.angle && (n.angle - t.angle) * e
                    })
                },
                drawLegendSymbol: Kn.drawRectangle,
                getCenter: Qn.getCenter,
                getSymbol: ze
            };
            pi = y(ei, pi), hn.pie = pi, ei.prototype.drawDataLabels = function () {
                var e, i, r, o, a = this, s = a.options, l = s.cursor, c = s.dataLabels, u = a.points;
                (c.enabled || a._hasPointLabels) && (a.dlProcessOptions && a.dlProcessOptions(c), o = a.plotGroup("dataLabelsGroup", "data-labels", Ye, c.zIndex || 6), !a.hasRendered && m(c.defer, !0) && (o.attr({opacity: 0}), Cn(a, "afterAnimate", function () {
                    a.dataLabelsGroup.show()[s.animation ? "animate" : "attr"]({opacity: 1}, {duration: 200})
                })), i = c, wn(u, function (s) {
                    var u, p, h, f, g, v = s.dataLabel, y = s.connector, x = !0;
                    if (e = s.options && s.options.dataLabels, u = m(e && e.enabled, i.enabled), v && !u)s.dataLabel = v.destroy(); else if (u) {
                        if (c = n(i, e), g = c.rotation, p = s.getLabelConfig(), r = c.format ? T(c.format, p) : c.formatter.call(p, c), c.style.color = m(c.color, c.style.color, a.color, "black"), v)d(r) ? (v.attr({text: r}), x = !1) : (s.dataLabel = v = v.destroy(), y && (s.connector = y.destroy())); else if (d(r)) {
                            h = {
                                fill: c.backgroundColor,
                                stroke: c.borderColor,
                                "stroke-width": c.borderWidth,
                                r: c.borderRadius || 0,
                                rotation: g,
                                padding: c.padding,
                                zIndex: 1
                            };
                            for (f in h)h[f] === F && delete h[f];
                            v = s.dataLabel = a.chart.renderer[g ? "text" : "label"](r, 0, -999, null, null, null, c.useHTML).attr(h).css(t(c.style, l && {cursor: l})).add(o).shadow(c.shadow)
                        }
                        v && a.alignDataLabel(s, v, c, null, x)
                    }
                }))
            }, ei.prototype.alignDataLabel = function (e, n, i, r, o) {
                var a, s = this.chart, l = s.inverted, c = m(e.plotX, -999), u = m(e.plotY, -999), p = n.getBBox(), d = this.visible && (e.series.forceDL || s.isInsidePlot(c, me(u), l) || r && s.isInsidePlot(c, l ? r.x + 1 : r.y + r.height - 1, l));
                d && (r = t({
                    x: l ? s.plotWidth - u : c,
                    y: me(l ? s.plotHeight - c : u),
                    width: 0,
                    height: 0
                }, r), t(i, {width: p.width, height: p.height}), i.rotation ? (a = {
                    align: i.align,
                    x: r.x + i.x + r.width / 2,
                    y: r.y + i.y + r.height / 2
                }, n[o ? "attr" : "animate"](a)) : (n.align(i, null, r), a = n.alignAttr, "justify" === m(i.overflow, "justify") ? this.justifyDataLabel(n, i, a, p, r, o) : m(i.crop, !0) && (d = s.isInsidePlot(a.x, a.y) && s.isInsidePlot(a.x + p.width, a.y + p.height)))), d || (n.attr({y: -999}), n.placed = !1)
            }, ei.prototype.justifyDataLabel = function (t, e, n, i, r, o) {
                var a, s, l = this.chart, c = e.align, u = e.verticalAlign;
                a = n.x, 0 > a && ("right" === c ? e.align = "left" : e.x = -a, s = !0), a = n.x + i.width, a > l.plotWidth && ("left" === c ? e.align = "right" : e.x = l.plotWidth - a, s = !0), a = n.y, 0 > a && ("bottom" === u ? e.verticalAlign = "top" : e.y = -a, s = !0), a = n.y + i.height, a > l.plotHeight && ("top" === u ? e.verticalAlign = "bottom" : e.y = l.plotHeight - a, s = !0), s && (t.placed = !o, t.align(e, null, r))
            }, hn.pie && (hn.pie.prototype.drawDataLabels = function () {
                var t, e, n, i, r, o, a, s, l, c, u, p, d, h = this, f = h.data, g = h.chart, v = h.options.dataLabels, y = m(v.connectorPadding, 10), x = m(v.connectorWidth, 1), b = g.plotWidth, w = g.plotHeight, k = m(v.softConnector, !0), T = v.distance, S = h.center, C = S[2] / 2, _ = S[1], A = T > 0, P = [[], []], L = [0, 0, 0, 0], O = function (t, e) {
                    return e.y - t.y
                };
                if (h.visible && (v.enabled || h._hasPointLabels)) {
                    for (ei.prototype.drawDataLabels.apply(h), wn(f, function (t) {
                        t.dataLabel && t.visible && P[t.half].push(t)
                    }), p = 0; !a && f[p];)a = f[p] && f[p].dataLabel && (f[p].dataLabel.getBBox().height || 21), p++;
                    for (p = 2; p--;) {
                        var M, N, E, j = [], R = [], I = P[p], z = I.length;
                        if (h.sortByAngle(I, p - .5), T > 0) {
                            for (N = _ - C - T; _ + C + T >= N; N += a)j.push(N);
                            if (M = j.length, z > M) {
                                for (u = [].concat(I), u.sort(O), d = z; d--;)u[d].rank = d;
                                for (d = z; d--;)I[d].rank >= M && I.splice(d, 1);
                                z = I.length
                            }
                            for (d = 0; z > d; d++) {
                                t = I[d], o = t.labelPos;
                                var B, H, q = 9999;
                                for (H = 0; M > H; H++)B = be(j[H] - o[1]), q > B && (q = B, E = H);
                                if (d > E && null !== j[d])E = d; else if (z - d + E > M && null !== j[d])for (E = M - z + d; null === j[E];)E++; else for (; null === j[E];)E++;
                                R.push({i: E, y: j[E]}), j[E] = null
                            }
                            R.sort(O)
                        }
                        for (d = 0; z > d; d++) {
                            var W, F;
                            t = I[d], o = t.labelPos, i = t.dataLabel, c = t.visible === !1 ? Ye : Ue, F = o[1], T > 0 ? (W = R.pop(), E = W.i, l = W.y, (F > l && null !== j[E + 1] || l > F && null !== j[E - 1]) && (l = F)) : l = F, s = v.justify ? S[0] + (p ? -1 : 1) * (C + T) : h.getX(0 === E || E === j.length - 1 ? F : l, p), i._attr = {
                                visibility: c,
                                align: o[6]
                            }, i._pos = {
                                x: s + v.x + ({left: y, right: -y}[o[6]] || 0),
                                y: l + v.y - 10
                            }, i.connX = s, i.connY = l, null === this.options.size && (r = i.width, y > s - r ? L[3] = ye(me(r - s + y), L[3]) : s + r > b - y && (L[1] = ye(me(s + r - b + y), L[1])), 0 > l - a / 2 ? L[0] = ye(me(-l + a / 2), L[0]) : l + a / 2 > w && (L[2] = ye(me(l + a / 2 - w), L[2])))
                        }
                    }
                    (0 === D(L) || this.verifyDataLabelOverflow(L)) && (this.placeDataLabels(), A && x && wn(this.points, function (t) {
                        e = t.connector, o = t.labelPos, i = t.dataLabel, i && i._pos ? (c = i._attr.visibility, s = i.connX, l = i.connY, n = k ? [Ze, s + ("left" === o[6] ? 5 : -5), l, "C", s, l, 2 * o[2] - o[4], 2 * o[3] - o[5], o[2], o[3], Ke, o[4], o[5]] : [Ze, s + ("left" === o[6] ? 5 : -5), l, Ke, o[2], o[3], Ke, o[4], o[5]], e ? (e.animate({d: n}), e.attr("visibility", c)) : t.connector = e = h.chart.renderer.path(n).attr({
                            "stroke-width": x,
                            stroke: v.connectorColor || t.color || "#606060",
                            visibility: c
                        }).add(h.dataLabelsGroup)) : e && (t.connector = e.destroy())
                    }))
                }
            }, hn.pie.prototype.placeDataLabels = function () {
                wn(this.points, function (t) {
                    var e, n = t.dataLabel;
                    n && (e = n._pos, e ? (n.attr(n._attr), n[n.moved ? "animate" : "attr"](e), n.moved = !0) : n && n.attr({y: -999}))
                })
            }, hn.pie.prototype.alignDataLabel = ze, hn.pie.prototype.verifyDataLabelOverflow = function (t) {
                var e, n = this.center, i = this.options, r = i.center, o = i.minSize || 80, a = o;
                return null !== r[0] ? a = ye(n[2] - ye(t[1], t[3]), o) : (a = ye(n[2] - t[1] - t[3], o), n[0] += (t[3] - t[1]) / 2), null !== r[1] ? a = ye(xe(a, n[2] - ye(t[0], t[2])), o) : (a = ye(xe(a, n[2] - t[0] - t[2]), o), n[1] += (t[0] - t[2]) / 2), a < n[2] ? (n[2] = a, this.translate(n), wn(this.points, function (t) {
                    t.dataLabel && (t.dataLabel._pos = null)
                }), this.drawDataLabels && this.drawDataLabels()) : e = !0, e
            }), hn.column && (hn.column.prototype.alignDataLabel = function (t, e, i, r, o) {
                var a = this.chart, s = a.inverted, l = t.dlBox || t.shapeArgs, c = t.below || t.plotY > m(this.translatedThreshold, a.plotSizeY), u = m(i.inside, !!this.options.stacking);
                l && (r = n(l), s && (r = {
                    x: a.plotWidth - r.y - r.height,
                    y: a.plotHeight - r.x - r.width,
                    width: r.height,
                    height: r.width
                }), u || (s ? (r.x += c ? 0 : r.width, r.width = 0) : (r.y += c ? r.height : 0, r.height = 0))), i.align = m(i.align, !s || u ? "center" : c ? "right" : "left"), i.verticalAlign = m(i.verticalAlign, s || u ? "middle" : c ? "top" : "bottom"), ei.prototype.alignDataLabel.call(this, t, e, i, r, o)
            });
            var di = fn.TrackerMixin = {
                drawTrackerPoint: function () {
                    var t = this, e = t.chart, n = e.pointer, i = t.options.cursor, r = i && {cursor: i}, o = function (n) {
                        var i, r = n.target;
                        for (e.hoverSeries !== t && t.onMouseOver(); r && !i;)i = r.point, r = r.parentNode;
                        i !== F && i !== e.hoverPoint && i.onMouseOver(n)
                    };
                    wn(t.points, function (t) {
                        t.graphic && (t.graphic.element.point = t), t.dataLabel && (t.dataLabel.element.point = t)
                    }), t._hasTracking || (wn(t.trackerGroups, function (e) {
                        t[e] && (t[e].addClass(Ge + "tracker").on("mouseover", o).on("mouseout", function (t) {
                            n.onTrackerMouseOut(t)
                        }).css(r), X && t[e].on("touchstart", o))
                    }), t._hasTracking = !0)
                }, drawTrackerGraph: function () {
                    var t, e, n = this, i = n.options, r = i.trackByArea, o = [].concat(r ? n.areaPath : n.graphPath), a = o.length, s = n.chart, l = s.pointer, c = s.renderer, u = s.options.tooltip.snap, p = n.tracker, d = i.cursor, h = d && {cursor: d}, f = n.singlePoints, m = function () {
                        s.hoverSeries !== n && n.onMouseOver()
                    }, g = "rgba(192,192,192," + (Ne ? 1e-4 : .002) + ")";
                    if (a && !r)for (e = a + 1; e--;)o[e] === Ze && o.splice(e + 1, 0, o[e + 1] - u, o[e + 2], Ke), (e && o[e] === Ze || e === a) && o.splice(e, 0, Ke, o[e - 2] + u, o[e - 1]);
                    for (e = 0; e < f.length; e++)t = f[e], o.push(Ze, t.plotX - u, t.plotY, Ke, t.plotX + u, t.plotY);
                    p ? p.attr({d: o}) : (n.tracker = c.path(o).attr({
                        "stroke-linejoin": "round",
                        visibility: n.visible ? Ue : Ye,
                        stroke: g,
                        fill: r ? g : Je,
                        "stroke-width": i.lineWidth + (r ? 0 : 2 * u),
                        zIndex: 2
                    }).add(n.group), wn([n.tracker, n.markerGroup], function (t) {
                        t.addClass(Ge + "tracker").on("mouseover", m).on("mouseout", function (t) {
                            l.onTrackerMouseOut(t)
                        }).css(h), X && t.on("touchstart", m)
                    }))
                }
            };
            hn.column && (si.prototype.drawTracker = di.drawTrackerPoint), hn.pie && (hn.pie.prototype.drawTracker = di.drawTrackerPoint), hn.scatter && (ci.prototype.drawTracker = di.drawTrackerPoint), t(Zn.prototype, {
                setItemEvents: function (t, e, n, i, r) {
                    var o = this;
                    (n ? e : t.legendGroup).on("mouseover", function () {
                        t.setState(en), e.css(o.options.itemHoverStyle)
                    }).on("mouseout", function () {
                        e.css(t.visible ? i : r), t.setState()
                    }).on("click", function (e) {
                        var n = "legendItemClick", i = function () {
                            t.setVisible()
                        };
                        e = {browserEvent: e}, t.firePointEvent ? t.firePointEvent(n, e, i) : An(t, n, e, i)
                    })
                }, createCheckboxForItem: function (t) {
                    var e = this;
                    t.checkbox = v("input", {
                        type: "checkbox",
                        checked: t.selected,
                        defaultChecked: t.selected
                    }, e.options.itemCheckboxStyle, e.chart.container), Cn(t.checkbox, "click", function (e) {
                        var n = e.target;
                        An(t, "checkboxClick", {checked: n.checked}, function () {
                            t.select()
                        })
                    })
                }
            }), G.legend.itemStyle.cursor = "pointer", t(q.prototype, {
                showResetZoom: function () {
                    var t = this, e = G.lang, n = t.options.chart.resetZoomButton, i = n.theme, r = i.states, o = "chart" === n.relativeTo ? null : "plotBox";
                    this.resetZoomButton = t.renderer.button(e.resetZoom, null, null, function () {
                        t.zoomOut()
                    }, i, r && r.hover).attr({
                        align: n.position.align,
                        title: e.resetZoomTitle
                    }).add().align(n.position, !1, o)
                }, zoomOut: function () {
                    var t = this;
                    An(t, "selection", {resetSelection: !0}, function () {
                        t.zoom()
                    })
                }, zoom: function (t) {
                    var e, n, i = this, r = i.pointer, o = !1;
                    !t || t.resetSelection ? wn(i.axes, function (t) {
                        e = t.zoom()
                    }) : wn(t.xAxis.concat(t.yAxis), function (t) {
                        var n = t.axis, i = n.isXAxis;
                        (r[i ? "zoomX" : "zoomY"] || r[i ? "pinchX" : "pinchY"]) && (e = n.zoom(t.min, t.max), n.displayBtn && (o = !0))
                    }), n = i.resetZoomButton, o && !n ? i.showResetZoom() : !o && a(n) && (i.resetZoomButton = n.destroy()), e && i.redraw(m(i.options.chart.animation, t && t.animation, i.pointCount < 100))
                }, pan: function (t, e) {
                    var n, i = this, r = i.hoverPoints;
                    r && wn(r, function (t) {
                        t.setState()
                    }), wn("xy" === e ? [1, 0] : [1], function (e) {
                        var r = t[e ? "chartX" : "chartY"], o = i[e ? "xAxis" : "yAxis"][0], a = i[e ? "mouseDownX" : "mouseDownY"], s = (o.pointRange || 0) / 2, l = o.getExtremes(), c = o.toValue(a - r, !0) + s, u = o.toValue(a + i[e ? "plotWidth" : "plotHeight"] - r, !0) - s;
                        o.series.length && c > xe(l.dataMin, l.min) && u < ye(l.dataMax, l.max) && (o.setExtremes(c, u, !1, !1, {trigger: "pan"}), n = !0), i[e ? "mouseDownX" : "mouseDownY"] = r
                    }), n && i.redraw(!1), g(i.container, {cursor: "move"})
                }
            }), t(ti.prototype, {
                select: function (t, e) {
                    var n = this, i = n.series, r = i.chart;
                    t = m(t, !n.selected), n.firePointEvent(t ? "select" : "unselect", {accumulate: e}, function () {
                        n.selected = n.options.selected = t, i.options.data[bn(n, i.data)] = n.options, n.setState(t && nn), e || wn(r.getSelectedPoints(), function (t) {
                            t.selected && t !== n && (t.selected = t.options.selected = !1, i.options.data[bn(t, i.data)] = t.options, t.setState(tn), t.firePointEvent("unselect"))
                        })
                    })
                }, onMouseOver: function (t) {
                    var e = this, n = e.series, i = n.chart, r = i.tooltip, o = i.hoverPoint;
                    o && o !== e && o.onMouseOut(), e.firePointEvent("mouseOver"), !r || r.shared && !n.noSharedTooltip || r.refresh(e, t), e.setState(en), i.hoverPoint = e
                }, onMouseOut: function () {
                    var t = this.series.chart, e = t.hoverPoints;
                    e && -1 !== bn(this, e) || (this.firePointEvent("mouseOut"), this.setState(), t.hoverPoint = null)
                }, importEvents: function () {
                    if (!this.hasImportedEvents) {
                        var t, e = this, i = n(e.series.options.point, e.options), r = i.events;
                        e.events = r;
                        for (t in r)Cn(e, t, r[t]);
                        this.hasImportedEvents = !0
                    }
                }, setState: function (e, i) {
                    var r, o, a, s, l = this, c = l.plotX, u = l.plotY, p = l.series, d = p.options.states, h = Mn[p.type].marker && p.options.marker, f = h && !h.enabled, m = h && h.states[e], g = m && m.enabled === !1, v = p.stateMarkerGraphic, y = l.marker || {}, x = p.chart, b = p.halo;
                    e = e || tn, s = l.pointAttr[e] || p.pointAttr[e], e === l.state && !i || l.selected && e !== nn || d[e] && d[e].enabled === !1 || e && (g || f && m.enabled === !1) || e && y.states && y.states[e] && y.states[e].enabled === !1 || (l.graphic ? (r = h && l.graphic.symbolName && s.r, l.graphic.attr(n(s, r ? {
                        x: c - r,
                        y: u - r,
                        width: 2 * r,
                        height: 2 * r
                    } : {})), v && v.hide()) : (e && m && (r = m.radius, a = y.symbol || p.symbol, v && v.currentSymbol !== a && (v = v.destroy()), v ? v[i ? "animate" : "attr"]({
                        x: c - r,
                        y: u - r
                    }) : a && (p.stateMarkerGraphic = v = x.renderer.symbol(a, c - r, u - r, 2 * r, 2 * r).attr(s).add(p.markerGroup), v.currentSymbol = a)), v && v[e && x.isInsidePlot(c, u, x.inverted) ? "show" : "hide"]()), o = d[e] && d[e].halo, o && o.size ? (b || (p.halo = b = x.renderer.path().add(p.seriesGroup)), b.attr(t({fill: In(l.color || p.color).setOpacity(o.opacity).get()}, o.attributes))[i ? "animate" : "attr"]({d: l.haloPath(o.size)})) : b && b.attr({d: []}), l.state = e)
                }, haloPath: function (t) {
                    var e = this.series, n = e.chart, i = e.getPlotBox(), r = n.inverted;
                    return n.renderer.symbols.circle(i.translateX + (r ? e.yAxis.len - this.plotY : this.plotX) - t, i.translateY + (r ? e.xAxis.len - this.plotX : this.plotY) - t, 2 * t, 2 * t)
                }
            }), t(ei.prototype, {
                onMouseOver: function () {
                    var t = this, e = t.chart, n = e.hoverSeries;
                    n && n !== t && n.onMouseOut(), t.options.events.mouseOver && An(t, "mouseOver"), t.setState(en), e.hoverSeries = t
                }, onMouseOut: function () {
                    var t = this, e = t.options, n = t.chart, i = n.tooltip, r = n.hoverPoint;
                    r && r.onMouseOut(), t && e.events.mouseOut && An(t, "mouseOut"), !i || e.stickyTracking || i.shared && !t.noSharedTooltip || i.hide(), t.setState(), n.hoverSeries = null
                }, setState: function (t) {
                    var e, n = this, i = n.options, r = n.graph, o = n.graphNeg, a = i.states, s = i.lineWidth;
                    if (t = t || tn, n.state !== t) {
                        if (n.state = t, a[t] && a[t].enabled === !1)return;
                        t && (s = a[t].lineWidth || s + 1), r && !r.dashstyle && (e = {"stroke-width": s}, r.attr(e), o && o.attr(e))
                    }
                }, setVisible: function (t, e) {
                    var n, i = this, r = i.chart, o = i.legendItem, a = r.options.chart.ignoreHiddenSeries, s = i.visible;
                    i.visible = t = i.userOptions.visible = t === F ? !s : t, n = t ? "show" : "hide", wn(["group", "dataLabelsGroup", "markerGroup", "tracker"], function (t) {
                        i[t] && i[t][n]()
                    }), r.hoverSeries === i && i.onMouseOut(), o && r.legend.colorizeItem(i, t), i.isDirty = !0, i.options.stacking && wn(r.series, function (t) {
                        t.options.stacking && t.visible && (t.isDirty = !0)
                    }), wn(i.linkedSeries, function (e) {
                        e.setVisible(t, !1)
                    }), a && (r.isDirtyBox = !0), e !== !1 && r.redraw(), An(i, n)
                }, setTooltipPoints: function (t) {
                    var e, n, i, r, o, a, s, l = this, c = [], u = l.xAxis, p = u && u.getExtremes(), d = u ? u.tooltipLen || u.len : l.chart.plotSizeX, h = [];
                    if (l.options.enableMouseTracking !== !1 && !l.singularTooltips) {
                        for (t && (l.tooltipPoints = null), wn(l.segments || l.points, function (t) {
                            c = c.concat(t)
                        }), u && u.reversed && (c = c.reverse()), l.orderTooltipPoints && l.orderTooltipPoints(c), e = c.length, s = 0; e > s; s++)if (r = c[s], o = r.x, o >= p.min && o <= p.max)for (a = c[s + 1], n = i === F ? 0 : i + 1, i = c[s + 1] ? xe(ye(0, ge((r.clientX + (a ? a.wrappedClientX || a.clientX : d)) / 2)), d) : d; n >= 0 && i >= n;)h[n++] = r;
                        l.tooltipPoints = h
                    }
                }, show: function () {
                    this.setVisible(!0)
                }, hide: function () {
                    this.setVisible(!1)
                }, select: function (t) {
                    var e = this;
                    e.selected = t = t === F ? !e.selected : t, e.checkbox && (e.checkbox.checked = t), An(e, t ? "select" : "unselect")
                }, drawTracker: di.drawTrackerGraph
            }), t(fn, {
                Axis: H,
                Chart: q,
                Color: In,
                Point: ti,
                Tick: B,
                Renderer: $,
                Series: ei,
                SVGElement: z,
                SVGRenderer: zn,
                arrayMin: P,
                arrayMax: D,
                charts: Be,
                dateFormat: U,
                format: T,
                pathAnim: J,
                getOptions: I,
                hasBidiBug: Ee,
                isTouchDevice: Oe,
                numberFormat: x,
                seriesTypes: hn,
                setOptions: R,
                addEvent: Cn,
                removeEvent: _n,
                createElement: v,
                discardElement: O,
                css: g,
                each: wn,
                extend: t,
                map: Sn,
                merge: n,
                pick: m,
                splat: f,
                extendClass: y,
                pInt: r,
                wrap: w,
                svg: Ne,
                canvas: je,
                vml: !Ne && !je,
                product: qe,
                version: We
            })
        }()
    }), require.register("smzdm_pro/source/lib/io.js", function (exports, require, module) {
        var io = "undefined" == typeof module ? {} : module.exports;
        !function () {
            !function (t, e) {
                var n = t;
                n.version = "0.9.16", n.protocol = 1, n.transports = [], n.j = [], n.sockets = {}, n.connect = function (t, i) {
                    var r, o, a = n.util.parseUri(t);
                    e && e.location && (a.protocol = a.protocol || e.location.protocol.slice(0, -1), a.host = a.host || (e.document ? e.document.domain : e.location.hostname), a.port = a.port || e.location.port), r = n.util.uniqueUri(a);
                    var s = {
                        host: a.host,
                        secure: "https" == a.protocol,
                        port: a.port || ("https" == a.protocol ? 443 : 80),
                        query: a.query || ""
                    };
                    return n.util.merge(s, i), (s["force new connection"] || !n.sockets[r]) && (o = new n.Socket(s)), !s["force new connection"] && o && (n.sockets[r] = o), o = o || n.sockets[r], o.of(a.path.length > 1 ? a.path : "")
                }
            }("object" == typeof module ? module.exports : this.io = {}, window), function (t, e) {
                var n = t.util = {}, i = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, r = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
                n.parseUri = function (t) {
                    for (var e = i.exec(t || ""), n = {}, o = 14; o--;)n[r[o]] = e[o] || "";
                    return n
                }, n.uniqueUri = function (t) {
                    var n = t.protocol, i = t.host, r = t.port;
                    return "document"in e ? (i = i || document.domain, r = r || ("https" == n && "https:" !== document.location.protocol ? 443 : document.location.port)) : (i = i || "localhost", r || "https" != n || (r = 443)), (n || "http") + "://" + i + ":" + (r || 80)
                }, n.query = function (t, e) {
                    var i = n.chunkQuery(t || ""), r = [];
                    n.merge(i, n.chunkQuery(e || ""));
                    for (var o in i)i.hasOwnProperty(o) && r.push(o + "=" + i[o]);
                    return r.length ? "?" + r.join("&") : ""
                }, n.chunkQuery = function (t) {
                    for (var e, n = {}, i = t.split("&"), r = 0, o = i.length; o > r; ++r)e = i[r].split("="), e[0] && (n[e[0]] = e[1]);
                    return n
                };
                var o = !1;
                n.load = function (t) {
                    return "document"in e && "complete" === document.readyState || o ? t() : void n.on(e, "load", t, !1)
                }, n.on = function (t, e, n, i) {
                    t.attachEvent ? t.attachEvent("on" + e, n) : t.addEventListener && t.addEventListener(e, n, i)
                }, n.request = function (t) {
                    if (t && "undefined" != typeof XDomainRequest && !n.ua.hasCORS)return new XDomainRequest;
                    if ("undefined" != typeof XMLHttpRequest && (!t || n.ua.hasCORS))return new XMLHttpRequest;
                    if (!t)try {
                        return new (window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                    } catch (e) {
                    }
                    return null
                }, "undefined" != typeof window && n.load(function () {
                    o = !0
                }), n.defer = function (t) {
                    return n.ua.webkit && "undefined" == typeof importScripts ? void n.load(function () {
                        setTimeout(t, 100)
                    }) : t()
                }, n.merge = function (t, e, i, r) {
                    var o, a = r || [], s = "undefined" == typeof i ? 2 : i;
                    for (o in e)e.hasOwnProperty(o) && n.indexOf(a, o) < 0 && ("object" == typeof t[o] && s ? n.merge(t[o], e[o], s - 1, a) : (t[o] = e[o], a.push(e[o])));
                    return t
                }, n.mixin = function (t, e) {
                    n.merge(t.prototype, e.prototype)
                }, n.inherit = function (t, e) {
                    function n() {
                    }

                    n.prototype = e.prototype, t.prototype = new n
                }, n.isArray = Array.isArray || function (t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    }, n.intersect = function (t, e) {
                    for (var i = [], r = t.length > e.length ? t : e, o = t.length > e.length ? e : t, a = 0, s = o.length; s > a; a++)~n.indexOf(r, o[a]) && i.push(o[a]);
                    return i
                }, n.indexOf = function (t, e, n) {
                    for (var i = t.length, n = 0 > n ? 0 > n + i ? 0 : n + i : n || 0; i > n && t[n] !== e; n++);
                    return n >= i ? -1 : n
                }, n.toArray = function (t) {
                    for (var e = [], n = 0, i = t.length; i > n; n++)e.push(t[n]);
                    return e
                }, n.ua = {}, n.ua.hasCORS = "undefined" != typeof XMLHttpRequest && function () {
                        try {
                            var t = new XMLHttpRequest
                        } catch (e) {
                            return !1
                        }
                        return void 0 != t.withCredentials
                    }(), n.ua.webkit = "undefined" != typeof navigator && /webkit/i.test(navigator.userAgent), n.ua.iDevice = "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)
            }("undefined" != typeof io ? io : module.exports, window), function (t, e) {
                function n() {
                }

                t.EventEmitter = n, n.prototype.on = function (t, n) {
                    return this.$events || (this.$events = {}), this.$events[t] ? e.util.isArray(this.$events[t]) ? this.$events[t].push(n) : this.$events[t] = [this.$events[t], n] : this.$events[t] = n, this
                }, n.prototype.addListener = n.prototype.on, n.prototype.once = function (t, e) {
                    function n() {
                        i.removeListener(t, n), e.apply(this, arguments)
                    }

                    var i = this;
                    return n.listener = e, this.on(t, n), this
                }, n.prototype.removeListener = function (t, n) {
                    if (this.$events && this.$events[t]) {
                        var i = this.$events[t];
                        if (e.util.isArray(i)) {
                            for (var r = -1, o = 0, a = i.length; a > o; o++)if (i[o] === n || i[o].listener && i[o].listener === n) {
                                r = o;
                                break
                            }
                            if (0 > r)return this;
                            i.splice(r, 1), i.length || delete this.$events[t]
                        } else(i === n || i.listener && i.listener === n) && delete this.$events[t]
                    }
                    return this
                }, n.prototype.removeAllListeners = function (t) {
                    return void 0 === t ? (this.$events = {}, this) : (this.$events && this.$events[t] && (this.$events[t] = null), this)
                }, n.prototype.listeners = function (t) {
                    return this.$events || (this.$events = {}), this.$events[t] || (this.$events[t] = []), e.util.isArray(this.$events[t]) || (this.$events[t] = [this.$events[t]]), this.$events[t]
                }, n.prototype.emit = function (t) {
                    if (!this.$events)return !1;
                    var n = this.$events[t];
                    if (!n)return !1;
                    var i = Array.prototype.slice.call(arguments, 1);
                    if ("function" == typeof n)n.apply(this, i); else {
                        if (!e.util.isArray(n))return !1;
                        for (var r = n.slice(), o = 0, a = r.length; a > o; o++)r[o].apply(this, i)
                    }
                    return !0
                }
            }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports), function (exports, nativeJSON) {
                function f(t) {
                    return 10 > t ? "0" + t : t
                }

                function date(t) {
                    return isFinite(t.valueOf()) ? t.getUTCFullYear() + "-" + f(t.getUTCMonth() + 1) + "-" + f(t.getUTCDate()) + "T" + f(t.getUTCHours()) + ":" + f(t.getUTCMinutes()) + ":" + f(t.getUTCSeconds()) + "Z" : null
                }

                function quote(t) {
                    return escapable.lastIndex = 0, escapable.test(t) ? '"' + t.replace(escapable, function (t) {
                        var e = meta[t];
                        return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                    }) + '"' : '"' + t + '"'
                }

                function str(t, e) {
                    var n, i, r, o, a, s = gap, l = e[t];
                    switch (l instanceof Date && (l = date(t)), "function" == typeof rep && (l = rep.call(e, t, l)), typeof l) {
                        case"string":
                            return quote(l);
                        case"number":
                            return isFinite(l) ? String(l) : "null";
                        case"boolean":
                        case"null":
                            return String(l);
                        case"object":
                            if (!l)return "null";
                            if (gap += indent, a = [], "[object Array]" === Object.prototype.toString.apply(l)) {
                                for (o = l.length, n = 0; o > n; n += 1)a[n] = str(n, l) || "null";
                                return r = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + s + "]" : "[" + a.join(",") + "]", gap = s, r
                            }
                            if (rep && "object" == typeof rep)for (o = rep.length, n = 0; o > n; n += 1)"string" == typeof rep[n] && (i = rep[n], r = str(i, l), r && a.push(quote(i) + (gap ? ": " : ":") + r)); else for (i in l)Object.prototype.hasOwnProperty.call(l, i) && (r = str(i, l), r && a.push(quote(i) + (gap ? ": " : ":") + r));
                            return r = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + s + "}" : "{" + a.join(",") + "}", gap = s, r
                    }
                }

                if (nativeJSON && nativeJSON.parse)return exports.JSON = {
                    parse: nativeJSON.parse,
                    stringify: nativeJSON.stringify
                };
                var JSON = exports.JSON = {}, cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
                    "\b": "\\b",
                    "	": "\\t",
                    "\n": "\\n",
                    "\f": "\\f",
                    "\r": "\\r",
                    '"': '\\"',
                    "\\": "\\\\"
                }, rep;
                JSON.stringify = function (t, e, n) {
                    var i;
                    if (gap = "", indent = "", "number" == typeof n)for (i = 0; n > i; i += 1)indent += " "; else"string" == typeof n && (indent = n);
                    if (rep = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length))throw new Error("JSON.stringify");
                    return str("", {"": t})
                }, JSON.parse = function (text, reviver) {
                    function walk(t, e) {
                        var n, i, r = t[e];
                        if (r && "object" == typeof r)for (n in r)Object.prototype.hasOwnProperty.call(r, n) && (i = walk(r, n), void 0 !== i ? r[n] = i : delete r[n]);
                        return reviver.call(t, e, r)
                    }

                    var j;
                    if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (t) {
                            return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                        })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({"": j}, "") : j;
                    throw new SyntaxError("JSON.parse")
                }
            }("undefined" != typeof io ? io : module.exports, "undefined" != typeof JSON ? JSON : void 0), function (t, e) {
                var n = t.parser = {}, i = n.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"], r = n.reasons = ["transport not supported", "client not handshaken", "unauthorized"], o = n.advice = ["reconnect"], a = e.JSON, s = e.util.indexOf;
                n.encodePacket = function (t) {
                    var e = s(i, t.type), n = t.id || "", l = t.endpoint || "", c = t.ack, u = null;
                    switch (t.type) {
                        case"error":
                            var p = t.reason ? s(r, t.reason) : "", d = t.advice ? s(o, t.advice) : "";
                            ("" !== p || "" !== d) && (u = p + ("" !== d ? "+" + d : ""));
                            break;
                        case"message":
                            "" !== t.data && (u = t.data);
                            break;
                        case"event":
                            var h = {name: t.name};
                            t.args && t.args.length && (h.args = t.args), u = a.stringify(h);
                            break;
                        case"json":
                            u = a.stringify(t.data);
                            break;
                        case"connect":
                            t.qs && (u = t.qs);
                            break;
                        case"ack":
                            u = t.ackId + (t.args && t.args.length ? "+" + a.stringify(t.args) : "")
                    }
                    var f = [e, n + ("data" == c ? "+" : ""), l];
                    return null !== u && void 0 !== u && f.push(u), f.join(":")
                }, n.encodePayload = function (t) {
                    var e = "";
                    if (1 == t.length)return t[0];
                    for (var n = 0, i = t.length; i > n; n++) {
                        var r = t[n];
                        e += "\uFFFD" + r.length + "\uFFFD" + t[n]
                    }
                    return e
                };
                var l = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
                n.decodePacket = function (t) {
                    var e = t.match(l);
                    if (!e)return {};
                    var n = e[2] || "", t = e[5] || "", s = {type: i[e[1]], endpoint: e[4] || ""};
                    switch (n && (s.id = n, s.ack = e[3] ? "data" : !0), s.type) {
                        case"error":
                            var e = t.split("+");
                            s.reason = r[e[0]] || "", s.advice = o[e[1]] || "";
                            break;
                        case"message":
                            s.data = t || "";
                            break;
                        case"event":
                            try {
                                var c = a.parse(t);
                                s.name = c.name, s.args = c.args
                            } catch (u) {
                            }
                            s.args = s.args || [];
                            break;
                        case"json":
                            try {
                                s.data = a.parse(t)
                            } catch (u) {
                            }
                            break;
                        case"connect":
                            s.qs = t || "";
                            break;
                        case"ack":
                            var e = t.match(/^([0-9]+)(\+)?(.*)/);
                            if (e && (s.ackId = e[1], s.args = [], e[3]))try {
                                s.args = e[3] ? a.parse(e[3]) : []
                            } catch (u) {
                            }
                            break;
                        case"disconnect":
                        case"heartbeat":
                    }
                    return s
                }, n.decodePayload = function (t) {
                    if ("\uFFFD" == t.charAt(0)) {
                        for (var e = [], i = 1, r = ""; i < t.length; i++)"\uFFFD" == t.charAt(i) ? (e.push(n.decodePacket(t.substr(i + 1).substr(0, r))), i += Number(r) + 1, r = "") : r += t.charAt(i);
                        return e
                    }
                    return [n.decodePacket(t)]
                }
            }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports), function (t, e) {
                function n(t, e) {
                    this.socket = t, this.sessid = e
                }

                t.Transport = n, e.util.mixin(n, e.EventEmitter), n.prototype.heartbeats = function () {
                    return !0
                }, n.prototype.onData = function (t) {
                    if (this.clearCloseTimeout(), (this.socket.connected || this.socket.connecting || this.socket.reconnecting) && this.setCloseTimeout(), "" !== t) {
                        var n = e.parser.decodePayload(t);
                        if (n && n.length)for (var i = 0, r = n.length; r > i; i++)this.onPacket(n[i])
                    }
                    return this
                }, n.prototype.onPacket = function (t) {
                    return this.socket.setHeartbeatTimeout(), "heartbeat" == t.type ? this.onHeartbeat() : ("connect" == t.type && "" == t.endpoint && this.onConnect(), "error" == t.type && "reconnect" == t.advice && (this.isOpen = !1), this.socket.onPacket(t), this)
                }, n.prototype.setCloseTimeout = function () {
                    if (!this.closeTimeout) {
                        var t = this;
                        this.closeTimeout = setTimeout(function () {
                            t.onDisconnect()
                        }, this.socket.closeTimeout)
                    }
                }, n.prototype.onDisconnect = function () {
                    return this.isOpen && this.close(), this.clearTimeouts(), this.socket.onDisconnect(), this
                }, n.prototype.onConnect = function () {
                    return this.socket.onConnect(), this
                }, n.prototype.clearCloseTimeout = function () {
                    this.closeTimeout && (clearTimeout(this.closeTimeout), this.closeTimeout = null)
                }, n.prototype.clearTimeouts = function () {
                    this.clearCloseTimeout(), this.reopenTimeout && clearTimeout(this.reopenTimeout)
                }, n.prototype.packet = function (t) {
                    this.send(e.parser.encodePacket(t))
                }, n.prototype.onHeartbeat = function () {
                    this.packet({type: "heartbeat"})
                }, n.prototype.onOpen = function () {
                    this.isOpen = !0, this.clearCloseTimeout(), this.socket.onOpen()
                }, n.prototype.onClose = function () {
                    this.isOpen = !1, this.socket.onClose(), this.onDisconnect()
                }, n.prototype.prepareUrl = function () {
                    var t = this.socket.options;
                    return this.scheme() + "://" + t.host + ":" + t.port + "/" + t.resource + "/" + e.protocol + "/" + this.name + "/" + this.sessid
                }, n.prototype.ready = function (t, e) {
                    e.call(this)
                }
            }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports), function (t, e, n) {
                function i(t) {
                    if (this.options = {
                            port: 80,
                            secure: !1,
                            document: "document"in n ? document : !1,
                            resource: "socket.io",
                            transports: e.transports,
                            "connect timeout": 1e4,
                            "try multiple transports": !0,
                            reconnect: !0,
                            "reconnection delay": 500,
                            "reconnection limit": 1 / 0,
                            "reopen delay": 3e3,
                            "max reconnection attempts": 10,
                            "sync disconnect on unload": !1,
                            "auto connect": !0,
                            "flash policy port": 10843,
                            manualFlush: !1
                        }, e.util.merge(this.options, t), this.connected = !1, this.open = !1, this.connecting = !1, this.reconnecting = !1, this.namespaces = {}, this.buffer = [], this.doBuffer = !1, this.options["sync disconnect on unload"] && (!this.isXDomain() || e.util.ua.hasCORS)) {
                        var i = this;
                        e.util.on(n, "beforeunload", function () {
                            i.disconnectSync()
                        }, !1)
                    }
                    this.options["auto connect"] && this.connect()
                }

                function r() {
                }

                t.Socket = i, e.util.mixin(i, e.EventEmitter), i.prototype.of = function (t) {
                    return this.namespaces[t] || (this.namespaces[t] = new e.SocketNamespace(this, t), "" !== t && this.namespaces[t].packet({type: "connect"})), this.namespaces[t]
                }, i.prototype.publish = function () {
                    this.emit.apply(this, arguments);
                    var t;
                    for (var e in this.namespaces)this.namespaces.hasOwnProperty(e) && (t = this.of(e), t.$emit.apply(t, arguments))
                }, i.prototype.handshake = function (t) {
                    function n(e) {
                        e instanceof Error ? (i.connecting = !1, i.onError(e.message)) : t.apply(null, e.split(":"))
                    }

                    var i = this, o = this.options, a = ["http" + (o.secure ? "s" : "") + ":/", o.host + ":" + o.port, o.resource, e.protocol, e.util.query(this.options.query, "t=" + +new Date)].join("/");
                    if (this.isXDomain() && !e.util.ua.hasCORS) {
                        var s = document.getElementsByTagName("script")[0], l = document.createElement("script");
                        l.src = a + "&jsonp=" + e.j.length, s.parentNode.insertBefore(l, s), e.j.push(function (t) {
                            n(t), l.parentNode.removeChild(l)
                        })
                    } else {
                        var c = e.util.request();
                        c.open("GET", a, !0), this.isXDomain() && (c.withCredentials = !0), c.onreadystatechange = function () {
                            4 == c.readyState && (c.onreadystatechange = r, 200 == c.status ? n(c.responseText) : 403 == c.status ? i.onError(c.responseText) : (i.connecting = !1, !i.reconnecting && i.onError(c.responseText)))
                        }, c.send(null)
                    }
                }, i.prototype.getTransport = function (t) {
                    for (var n, i = t || this.transports, r = 0; n = i[r]; r++)if (e.Transport[n] && e.Transport[n].check(this) && (!this.isXDomain() || e.Transport[n].xdomainCheck(this)))return new e.Transport[n](this, this.sessionid);
                    return null
                }, i.prototype.connect = function (t) {
                    if (this.connecting)return this;
                    var n = this;
                    return n.connecting = !0, this.handshake(function (i, r, o, a) {
                        function s(t) {
                            return n.transport && n.transport.clearTimeouts(), n.transport = n.getTransport(t), n.transport ? void n.transport.ready(n, function () {
                                n.connecting = !0, n.publish("connecting", n.transport.name), n.transport.open(), n.options["connect timeout"] && (n.connectTimeoutTimer = setTimeout(function () {
                                    if (!n.connected && (n.connecting = !1, n.options["try multiple transports"])) {
                                        for (var t = n.transports; t.length > 0 && t.splice(0, 1)[0] != n.transport.name;);
                                        t.length ? s(t) : n.publish("connect_failed")
                                    }
                                }, n.options["connect timeout"]))
                            }) : n.publish("connect_failed")
                        }

                        n.sessionid = i, n.closeTimeout = 1e3 * o, n.heartbeatTimeout = 1e3 * r, n.transports || (n.transports = n.origTransports = a ? e.util.intersect(a.split(","), n.options.transports) : n.options.transports), n.setHeartbeatTimeout(), s(n.transports), n.once("connect", function () {
                            clearTimeout(n.connectTimeoutTimer), t && "function" == typeof t && t()
                        })
                    }), this
                }, i.prototype.setHeartbeatTimeout = function () {
                    if (clearTimeout(this.heartbeatTimeoutTimer), !this.transport || this.transport.heartbeats()) {
                        var t = this;
                        this.heartbeatTimeoutTimer = setTimeout(function () {
                            t.transport.onClose()
                        }, this.heartbeatTimeout)
                    }
                }, i.prototype.packet = function (t) {
                    return this.connected && !this.doBuffer ? this.transport.packet(t) : this.buffer.push(t), this
                }, i.prototype.setBuffer = function (t) {
                    this.doBuffer = t, !t && this.connected && this.buffer.length && (this.options.manualFlush || this.flushBuffer())
                }, i.prototype.flushBuffer = function () {
                    this.transport.payload(this.buffer), this.buffer = []
                }, i.prototype.disconnect = function () {
                    return (this.connected || this.connecting) && (this.open && this.of("").packet({type: "disconnect"}), this.onDisconnect("booted")), this
                }, i.prototype.disconnectSync = function () {
                    var t = e.util.request(), n = ["http" + (this.options.secure ? "s" : "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, e.protocol, "", this.sessionid].join("/") + "/?disconnect=1";
                    t.open("GET", n, !1), t.send(null), this.onDisconnect("booted")
                }, i.prototype.isXDomain = function () {
                    var t = n.location.port || ("https:" == n.location.protocol ? 443 : 80);
                    return this.options.host !== n.location.hostname || this.options.port != t
                }, i.prototype.onConnect = function () {
                    this.connected || (this.connected = !0, this.connecting = !1, this.doBuffer || this.setBuffer(!1), this.emit("connect"))
                }, i.prototype.onOpen = function () {
                    this.open = !0
                }, i.prototype.onClose = function () {
                    this.open = !1, clearTimeout(this.heartbeatTimeoutTimer)
                }, i.prototype.onPacket = function (t) {
                    this.of(t.endpoint).onPacket(t)
                }, i.prototype.onError = function (t) {
                    t && t.advice && "reconnect" === t.advice && (this.connected || this.connecting) && (this.disconnect(), this.options.reconnect && this.reconnect()), this.publish("error", t && t.reason ? t.reason : t)
                }, i.prototype.onDisconnect = function (t) {
                    var e = this.connected, n = this.connecting;
                    this.connected = !1, this.connecting = !1, this.open = !1, (e || n) && (this.transport.close(), this.transport.clearTimeouts(), e && (this.publish("disconnect", t), "booted" != t && this.options.reconnect && !this.reconnecting && this.reconnect()))
                }, i.prototype.reconnect = function () {
                    function t() {
                        if (n.connected) {
                            for (var t in n.namespaces)n.namespaces.hasOwnProperty(t) && "" !== t && n.namespaces[t].packet({type: "connect"});
                            n.publish("reconnect", n.transport.name, n.reconnectionAttempts)
                        }
                        clearTimeout(n.reconnectionTimer), n.removeListener("connect_failed", e), n.removeListener("connect", e), n.reconnecting = !1, delete n.reconnectionAttempts, delete n.reconnectionDelay, delete n.reconnectionTimer, delete n.redoTransports, n.options["try multiple transports"] = r
                    }

                    function e() {
                        return n.reconnecting ? n.connected ? t() : n.connecting && n.reconnecting ? n.reconnectionTimer = setTimeout(e, 1e3) : void(n.reconnectionAttempts++ >= i ? n.redoTransports ? (n.publish("reconnect_failed"), t()) : (n.on("connect_failed", e), n.options["try multiple transports"] = !0, n.transports = n.origTransports, n.transport = n.getTransport(), n.redoTransports = !0, n.connect()) : (n.reconnectionDelay < o && (n.reconnectionDelay *= 2), n.connect(), n.publish("reconnecting", n.reconnectionDelay, n.reconnectionAttempts), n.reconnectionTimer = setTimeout(e, n.reconnectionDelay))) : void 0
                    }

                    this.reconnecting = !0, this.reconnectionAttempts = 0, this.reconnectionDelay = this.options["reconnection delay"];
                    var n = this, i = this.options["max reconnection attempts"], r = this.options["try multiple transports"], o = this.options["reconnection limit"];
                    this.options["try multiple transports"] = !1, this.reconnectionTimer = setTimeout(e, this.reconnectionDelay), this.on("connect", e)
                }
            }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports, window), function (t, e) {
                function n(t, e) {
                    this.socket = t, this.name = e || "", this.flags = {}, this.json = new i(this, "json"), this.ackPackets = 0, this.acks = {}
                }

                function i(t, e) {
                    this.namespace = t, this.name = e
                }

                t.SocketNamespace = n, e.util.mixin(n, e.EventEmitter), n.prototype.$emit = e.EventEmitter.prototype.emit, n.prototype.of = function () {
                    return this.socket.of.apply(this.socket, arguments)
                }, n.prototype.packet = function (t) {
                    return t.endpoint = this.name, this.socket.packet(t), this.flags = {}, this
                }, n.prototype.send = function (t, e) {
                    var n = {type: this.flags.json ? "json" : "message", data: t};
                    return "function" == typeof e && (n.id = ++this.ackPackets, n.ack = !0, this.acks[n.id] = e), this.packet(n)
                }, n.prototype.emit = function (t) {
                    var e = Array.prototype.slice.call(arguments, 1), n = e[e.length - 1], i = {type: "event", name: t};
                    return "function" == typeof n && (i.id = ++this.ackPackets, i.ack = "data", this.acks[i.id] = n, e = e.slice(0, e.length - 1)), i.args = e, this.packet(i)
                }, n.prototype.disconnect = function () {
                    return "" === this.name ? this.socket.disconnect() : (this.packet({type: "disconnect"}), this.$emit("disconnect")), this
                }, n.prototype.onPacket = function (t) {
                    function n() {
                        i.packet({type: "ack", args: e.util.toArray(arguments), ackId: t.id})
                    }

                    var i = this;
                    switch (t.type) {
                        case"connect":
                            this.$emit("connect");
                            break;
                        case"disconnect":
                            "" === this.name ? this.socket.onDisconnect(t.reason || "booted") : this.$emit("disconnect", t.reason);
                            break;
                        case"message":
                        case"json":
                            var r = ["message", t.data];
                            "data" == t.ack ? r.push(n) : t.ack && this.packet({
                                type: "ack",
                                ackId: t.id
                            }), this.$emit.apply(this, r);
                            break;
                        case"event":
                            var r = [t.name].concat(t.args);
                            "data" == t.ack && r.push(n), this.$emit.apply(this, r);
                            break;
                        case"ack":
                            this.acks[t.ackId] && (this.acks[t.ackId].apply(this, t.args), delete this.acks[t.ackId]);
                            break;
                        case"error":
                            t.advice ? this.socket.onError(t) : "unauthorized" == t.reason ? this.$emit("connect_failed", t.reason) : this.$emit("error", t.reason)
                    }
                }, i.prototype.send = function () {
                    this.namespace.flags[this.name] = !0, this.namespace.send.apply(this.namespace, arguments)
                }, i.prototype.emit = function () {
                    this.namespace.flags[this.name] = !0, this.namespace.emit.apply(this.namespace, arguments)
                }
            }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports), function (t, e, n) {
                function i() {
                    e.Transport.apply(this, arguments)
                }

                t.websocket = i, e.util.inherit(i, e.Transport), i.prototype.name = "websocket", i.prototype.open = function () {
                    var t, i = e.util.query(this.socket.options.query), r = this;
                    return t || (t = n.MozWebSocket || n.WebSocket), this.websocket = new t(this.prepareUrl() + i), this.websocket.onopen = function () {
                        r.onOpen(), r.socket.setBuffer(!1)
                    }, this.websocket.onmessage = function (t) {
                        r.onData(t.data)
                    }, this.websocket.onclose = function () {
                        r.onClose(), r.socket.setBuffer(!0)
                    }, this.websocket.onerror = function (t) {
                        r.onError(t)
                    }, this
                }, i.prototype.send = e.util.ua.iDevice ? function (t) {
                    var e = this;
                    return setTimeout(function () {
                        e.websocket.send(t)
                    }, 0), this
                } : function (t) {
                    return this.websocket.send(t), this
                }, i.prototype.payload = function (t) {
                    for (var e = 0, n = t.length; n > e; e++)this.packet(t[e]);
                    return this
                }, i.prototype.close = function () {
                    return this.websocket.close(), this
                }, i.prototype.onError = function (t) {
                    this.socket.onError(t)
                }, i.prototype.scheme = function () {
                    return this.socket.options.secure ? "wss" : "ws"
                }, i.check = function () {
                    return "WebSocket"in n && !("__addTask"in WebSocket) || "MozWebSocket"in n
                }, i.xdomainCheck = function () {
                    return !0
                }, e.transports.push("websocket")
            }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, window), function (t, e, n) {
                function i(t) {
                    t && (e.Transport.apply(this, arguments), this.sendBuffer = [])
                }

                function r() {
                }

                t.XHR = i, e.util.inherit(i, e.Transport), i.prototype.open = function () {
                    return this.socket.setBuffer(!1), this.onOpen(), this.get(), this.setCloseTimeout(), this
                }, i.prototype.payload = function (t) {
                    for (var n = [], i = 0, r = t.length; r > i; i++)n.push(e.parser.encodePacket(t[i]));
                    this.send(e.parser.encodePayload(n))
                }, i.prototype.send = function (t) {
                    return this.post(t), this
                }, i.prototype.post = function (t) {
                    function e() {
                        4 == this.readyState && (this.onreadystatechange = r, o.posting = !1, 200 == this.status ? o.socket.setBuffer(!1) : o.onClose())
                    }

                    function i() {
                        this.onload = r, o.socket.setBuffer(!1)
                    }

                    var o = this;
                    this.socket.setBuffer(!0), this.sendXHR = this.request("POST"), n.XDomainRequest && this.sendXHR instanceof XDomainRequest ? this.sendXHR.onload = this.sendXHR.onerror = i : this.sendXHR.onreadystatechange = e, this.sendXHR.send(t)
                }, i.prototype.close = function () {
                    return this.onClose(), this
                }, i.prototype.request = function (t) {
                    var n = e.util.request(this.socket.isXDomain()), i = e.util.query(this.socket.options.query, "t=" + +new Date);
                    if (n.open(t || "GET", this.prepareUrl() + i, !0), "POST" == t)try {
                        n.setRequestHeader ? n.setRequestHeader("Content-type", "text/plain;charset=UTF-8") : n.contentType = "text/plain"
                    } catch (r) {
                    }
                    return n
                }, i.prototype.scheme = function () {
                    return this.socket.options.secure ? "https" : "http"
                }, i.check = function (t, i) {
                    try {
                        var r = e.util.request(i), o = n.XDomainRequest && r instanceof XDomainRequest, a = t && t.options && t.options.secure ? "https:" : "http:", s = n.location && a != n.location.protocol;
                        if (r && (!o || !s))return !0
                    } catch (l) {
                    }
                    return !1
                }, i.xdomainCheck = function (t) {
                    return i.check(t, !0)
                }
            }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, window), function (t, e) {
                function n() {
                    e.Transport.XHR.apply(this, arguments)
                }

                t.htmlfile = n, e.util.inherit(n, e.Transport.XHR), n.prototype.name = "htmlfile", n.prototype.get = function () {
                    this.doc = new (window[["Active"].concat("Object").join("X")])("htmlfile"), this.doc.open(), this.doc.write("<html></html>"), this.doc.close(), this.doc.parentWindow.s = this;
                    var t = this.doc.createElement("div");
                    t.className = "socketio", this.doc.body.appendChild(t), this.iframe = this.doc.createElement("iframe"), t.appendChild(this.iframe);
                    var n = this, i = e.util.query(this.socket.options.query, "t=" + +new Date);
                    this.iframe.src = this.prepareUrl() + i, e.util.on(window, "unload", function () {
                        n.destroy()
                    })
                }, n.prototype._ = function (t, e) {
                    t = t.replace(/\\\//g, "/"), this.onData(t);
                    try {
                        var n = e.getElementsByTagName("script")[0];
                        n.parentNode.removeChild(n)
                    } catch (i) {
                    }
                }, n.prototype.destroy = function () {
                    if (this.iframe) {
                        try {
                            this.iframe.src = "about:blank"
                        } catch (t) {
                        }
                        this.doc = null, this.iframe.parentNode.removeChild(this.iframe), this.iframe = null, CollectGarbage()
                    }
                }, n.prototype.close = function () {
                    return this.destroy(), e.Transport.XHR.prototype.close.call(this)
                }, n.check = function (t) {
                    if ("undefined" != typeof window && ["Active"].concat("Object").join("X")in window)try {
                        var n = new (window[["Active"].concat("Object").join("X")])("htmlfile");
                        return n && e.Transport.XHR.check(t)
                    } catch (i) {
                    }
                    return !1
                }, n.xdomainCheck = function () {
                    return !1
                }, e.transports.push("htmlfile")
            }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports), function (t, e, n) {
                function i() {
                    e.Transport.XHR.apply(this, arguments)
                }

                function r() {
                }

                t["xhr-polling"] = i, e.util.inherit(i, e.Transport.XHR), e.util.merge(i, e.Transport.XHR), i.prototype.name = "xhr-polling", i.prototype.heartbeats = function () {
                    return !1
                }, i.prototype.open = function () {
                    var t = this;
                    return e.Transport.XHR.prototype.open.call(t), !1
                }, i.prototype.get = function () {
                    function t() {
                        4 == this.readyState && (this.onreadystatechange = r, 200 == this.status ? (o.onData(this.responseText), o.get()) : o.onClose())
                    }

                    function e() {
                        this.onload = r, this.onerror = r, o.retryCounter = 1, o.onData(this.responseText), o.get()
                    }

                    function i() {
                        o.retryCounter++, !o.retryCounter || o.retryCounter > 3 ? o.onClose() : o.get()
                    }

                    if (this.isOpen) {
                        var o = this;
                        this.xhr = this.request(), n.XDomainRequest && this.xhr instanceof XDomainRequest ? (this.xhr.onload = e, this.xhr.onerror = i) : this.xhr.onreadystatechange = t, this.xhr.send(null)
                    }
                }, i.prototype.onClose = function () {
                    if (e.Transport.XHR.prototype.onClose.call(this), this.xhr) {
                        this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = r;
                        try {
                            this.xhr.abort()
                        } catch (t) {
                        }
                        this.xhr = null
                    }
                }, i.prototype.ready = function (t, n) {
                    var i = this;
                    e.util.defer(function () {
                        n.call(i)
                    })
                }, e.transports.push("xhr-polling")
            }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, window), function (t, e, n) {
                function i() {
                    e.Transport["xhr-polling"].apply(this, arguments), this.index = e.j.length;
                    var t = this;
                    e.j.push(function (e) {
                        t._(e)
                    })
                }

                var r = n.document && "MozAppearance"in n.document.documentElement.style;
                t["jsonp-polling"] = i, e.util.inherit(i, e.Transport["xhr-polling"]), i.prototype.name = "jsonp-polling", i.prototype.post = function (t) {
                    function n() {
                        i(), r.socket.setBuffer(!1)
                    }

                    function i() {
                        r.iframe && r.form.removeChild(r.iframe);
                        try {
                            a = document.createElement('<iframe name="' + r.iframeId + '">')
                        } catch (t) {
                            a = document.createElement("iframe"), a.name = r.iframeId
                        }
                        a.id = r.iframeId, r.form.appendChild(a), r.iframe = a
                    }

                    var r = this, o = e.util.query(this.socket.options.query, "t=" + +new Date + "&i=" + this.index);
                    if (!this.form) {
                        var a, s = document.createElement("form"), l = document.createElement("textarea"), c = this.iframeId = "socketio_iframe_" + this.index;
                        s.className = "socketio", s.style.position = "absolute", s.style.top = "0px", s.style.left = "0px", s.style.display = "none", s.target = c, s.method = "POST", s.setAttribute("accept-charset", "utf-8"), l.name = "d", s.appendChild(l), document.body.appendChild(s), this.form = s, this.area = l
                    }
                    this.form.action = this.prepareUrl() + o, i(), this.area.value = e.JSON.stringify(t);
                    try {
                        this.form.submit()
                    } catch (u) {
                    }
                    this.iframe.attachEvent ? a.onreadystatechange = function () {
                        "complete" == r.iframe.readyState && n()
                    } : this.iframe.onload = n, this.socket.setBuffer(!0)
                }, i.prototype.get = function () {
                    var t = this, n = document.createElement("script"), i = e.util.query(this.socket.options.query, "t=" + +new Date + "&i=" + this.index);
                    this.script && (this.script.parentNode.removeChild(this.script), this.script = null), n.async = !0, n.src = this.prepareUrl() + i, n.onerror = function () {
                        t.onClose()
                    };
                    var o = document.getElementsByTagName("script")[0];
                    o.parentNode.insertBefore(n, o), this.script = n, r && setTimeout(function () {
                        var t = document.createElement("iframe");
                        document.body.appendChild(t), document.body.removeChild(t)
                    }, 100)
                }, i.prototype._ = function (t) {
                    return this.onData(t), this.isOpen && this.get(), this
                }, i.prototype.ready = function (t, n) {
                    var i = this;
                    return r ? void e.util.load(function () {
                        n.call(i)
                    }) : n.call(this)
                }, i.check = function () {
                    return "document"in n
                }, i.xdomainCheck = function () {
                    return !0
                }, e.transports.push("jsonp-polling")
            }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, window), "function" == typeof define && define.amd && define([], function () {
                return io
            })
        }()
    }), require.register("smzdm_pro/source/src/core/main.js", function (t, e, n) {
        function i(t) {
            if (t && "object" == typeof t) {
                var e = t.length, n = Object.prototype.toString.call(t);
                if (/(Array|List|Collection|Map|Arguments)\]$/.test(n))return !0;
                if ("[object Object]" === n && +e === e && !(e % 1) && e >= 0)return !0
            }
            return !1
        }

        var r = {};
        r.extend = function () {
            var t, e, n, i, o, a, s = arguments[0] || {}, l = 1, c = arguments.length, u = !1;
            for ("boolean" == typeof s && (u = s, s = arguments[1] || {}, l++), "object" != typeof s && "function" !== r.type(s) && (s = {}), l === c && (s = this, l--); c > l; l++)if (null != (t = arguments[l]))for (e in t)n = s[e], i = t[e], s !== i && (u && i && (r.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1, a = n && Array.isArray(n) ? n : []) : a = n && r.isPlainObject(n) ? n : {}, s[e] = r.extend(u, a, i)) : void 0 !== i && (s[e] = i));
            return s
        };
        var o = {}, a = o.toString;
        r.extend({
            error: function (t) {
                console.error(t)
            }, noop: function () {
            }, isFunction: function (t) {
                return "function" === r.type(t)
            }, isArray: Array.isArray, isObject: function (t) {
                return t instanceof Object
            }, isPlainObject: function (t) {
                return !!t && "object" == typeof t && Object.getPrototypeOf(t) === Object.prototype
            }, isEmptyObject: function (t) {
                for (var e in t)return !1;
                return !0
            }, type: function (t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? o[a.call(t)] || "object" : typeof t
            }, each: function (t, e) {
                if (t) {
                    var n = 0;
                    if (i(t))for (var r = t.length; r > n; n++)e(n, t[n]); else for (n in t)t.hasOwnProperty(n) && e(n, t[n])
                }
            }, inArray: function (t, e, n) {
                return null == e ? -1 : indexOf.call(e, t, n)
            }, trim: function (t) {
                return null == t ? "" : (t + "").replace(rtrim, "")
            }, loop: function (t, e) {
                e && e();
                var n = function (i) {
                    clearTimeout(i), i = setTimeout(function () {
                        e && e(), n(i)
                    }, 1e3 * t)
                };
                n(null)
            }, toHash: function (t, e) {
                e || (e = t);
                var n, i = [], r = [], o = {};
                for (var a in e)hasOwnProperty.call(e, a) && void 0 !== t[a] && (n = o[a] = t[a], i.push(a), "JSON" === e[a] && (n = JSON.stringify(n)), r.push(n));
                return {keys: i, values: r, obj: o}
            }, unique: function (t) {
                for (var e = [], n = {}, i = 0; i < t.length; i++) {
                    var r = JSON.stringify(t[i]), o = typeof t[i] + r;
                    1 !== n[o] && (e.push(JSON.parse(r)), n[o] = 1)
                }
                return e
            }
        }), r.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
            o["[object " + e + "]"] = e.toLowerCase()
        }), n.exports = r
    }), require.register("smzdm_pro/source/src/core/node.js", function (t, e, n) {
        var i = e("../../lib/jquery"), r = e("./notice"), o = e("../../config/config"), a = function (t) {
            return document.querySelectorAll(t)
        };
        a.fill = function (t, e, n) {
            if (a.inEmbed()) {
                var o = i(t);
                "string" == typeof o[0] && (o = i(o[0])), o.length > 0 && i.ajax({
                    url: r.url(e),
                    type: "GET",
                    dataType: "html"
                }).done(function (t) {
                    o.after(t), n && n()
                })
            }
        }, a.inEmbed = function () {
            var t = !1, e = o.embedJson, n = window.location.href;
            for (var i in e)n.indexOf(i) > -1 && (t = !0);
            return t
        }, a.ListenerDataChange = function (t, e, n) {
            for (var r in e) {
                var o = i(e[r].el), s = function () {
                    var t = a.parseModel(e);
                    n && n(t)
                };
                o.on("change", s), i(t || document.body).on({DOMCharacterDataModified: s, DOMSubtreeModified: s})
            }
            n && n(e)
        }, a.onChange = function (t, e) {
            var n, r = function () {
                clearTimeout(n), n = setTimeout(function () {
                    e && e()
                }, 1)
            };
            i(t || document.body).on({DOMCharacterDataModified: r, DOMSubtreeModified: r}), i("body").on("change", t, r)
        }, a.parseModel = function (t) {
            for (var e in t) {
                var n = t[e].el && t[e].el.selector || t[e];
                if (Array.isArray(n))for (var r = 0, o = n.length; o > r; r++)if (i(n[r]).length > 0) {
                    n = n[r];
                    break
                }
                t[e] = {el: i(n), val: i(n).text()}
            }
            return t
        }, a.modelFactory = function (t) {
            return t
        }, a.spider = function (t, e) {
            var n = "";
            "string" == typeof arguments[0] && (n = arguments[0], t = arguments[1], e = arguments[2]);
            var i = a.parseModel(t);
            a.ListenerDataChange(n, i, function (t) {
                e && e(a.modelFactory(t))
            })
        }, n.exports = a
    }), require.register("smzdm_pro/source/src/core/pull.js", function (t, e, n) {
        var i = function (t, e, n, i) {
            function r() {
                avalon.get(t, e, function (t) {
                    n(t), setTimeout(function () {
                        r()
                    }, o)
                })
            }

            var o = i.time || 5e3, a = i.first || 0;
            isFunc(arguments[1]) && (n = e, i = arguments[2]), setTimeout(function () {
                r()
            }, a)
        };
        n.exports = i
    }), require.register("smzdm_pro/source/src/core/DBoy.js", function (t, e, n) {
        var i = e("./main");
        e("./ajax"), e("./storage"), e("./database"), i.extend({unit: e("./unit")}), n.exports = i
    }), require.register("smzdm_pro/source/src/core/emitter.js", function (t, e, n) {
        function i(t) {
            this._ctx = t || this
        }

        var r = [].slice, o = i.prototype;
        o.on = function (t, e) {
            return this._cbs = this._cbs || {}, (this._cbs[t] = this._cbs[t] || []).push(e), this
        }, o.once = function (t, e) {
            function n() {
                i.off(t, n), e.apply(this, arguments)
            }

            var i = this;
            return this._cbs = this._cbs || {}, n.fn = e, this.on(t, n), this
        }, o.off = function (t, e) {
            if (this._cbs = this._cbs || {}, !arguments.length)return this._cbs = {}, this;
            var n = this._cbs[t];
            if (!n)return this;
            if (1 === arguments.length)return delete this._cbs[t], this;
            for (var i, r = 0; r < n.length; r++)if (i = n[r], i === e || i.fn === e) {
                n.splice(r, 1);
                break
            }
            return this
        }, o.emit = function (t, e, n, i) {
            this._cbs = this._cbs || {};
            var r = this._cbs[t];
            if (r) {
                r = r.slice(0);
                for (var o = 0, a = r.length; a > o; o++)r[o].call(this._ctx, e, n, i)
            }
            return this
        }, o.applyEmit = function (t) {
            this._cbs = this._cbs || {};
            var e, n = this._cbs[t];
            if (n) {
                n = n.slice(0), e = r.call(arguments, 1);
                for (var i = 0, o = n.length; o > i; i++)n[i].apply(this._ctx, e)
            }
            return this
        }, n.exports = i
    }), require.register("smzdm_pro/source/src/core/route.js", function (t, e, n) {
        {
            var i = (e("./DBoy"), function (t) {
                var n = document.createElement("a");
                n.href = t, this.source = t, this.protocol = n.protocol.replace(":", ""), this.host = n.hostname, this.domain = n.hostname.split(".")[n.hostname.split(".").length - 2], this.port = n.port, this.query = n.search, this.params = function () {
                    for (var t, e = {}, i = n.search.replace(/^\?/, "").split("&"), r = 0, o = i.length; o > r; r++)i[r] && (t = i[r].split("="), e[t[0]] = t[1]);
                    return e
                }(), this.file = (n.pathname.match(/\/([^\/?#]+)$/i) || [, ""])[1], this.hash = n.hash.replace("#", ""), this.path = n.pathname.replace(/^([^\/])/, "/$1"), this.relative = (n.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ""])[1], this.segments = n.pathname.replace(/^\//, "").split("/"), this.isConf = function () {
                    try {
                        return e("../../config/mall/" + n.hostname.split(".")[n.hostname.split(".").length - 2]), !0
                    } catch (t) {
                        if (t)return !1
                    }
                }()
            });
            i.prototype
        }
        n.exports = i
    }), require.register("smzdm_pro/source/src/core/unit.js", function (t, e, n) {
        function i(t) {
            var e = ["$", "^", "[", "]", "(", ")", "{", "}", "", "+", ".", "\\", "/"];
            for (var n in e)if (t == e[n])return !0;
            return !1
        }

        var r = {};
        r.url = function (t) {
            return chrome.extension.getURL(t)
        }, r.goto = function (t, n) {
            if (e("./ext").open)return e("./ext").goto(t, n), !1;
            var i = arguments, r = localStorage.getItem("open_back") || "on", o = {url: t, selected: "off" == r};
            if ("boolean" == typeof i[1] && ("on" == r && (o.selected = !1), o.selected = 1 == i[1] ? !0 : !1, n = i[2] || function () {
                    }), "object" == typeof i[0])if (o.url = i[0].url, parseInt(i[0].update) > 0) {
                var a = parseInt(i[0].update);
                chrome.tabs.query({status: "complete"}, function (t) {
                    for (var e = null, r = 0; r < t.length; r++)if (t[r].id == a) {
                        e = t[r].id;
                        break
                    }
                    e ? chrome.tabs.update(e, {url: i[0].url, active: !0}, n) : chrome.tabs.create(o, n)
                })
            } else chrome.tabs.create(o, n); else chrome.tabs.create(o, n)
        }, r.browType = function () {
            var t, e = {}, n = navigator.userAgent.toLowerCase();
            return (t = n.match(/msie ([\d.]+)/)) ? e.ie = t[1] : (t = n.match(/firefox\/([\d.]+)/)) ? e.firefox = t[1] : (t = n.match(/version\/([\d.]+).*safari/)) ? e.safari = t[1] : (t = n.match(/opr\/([\d.]+)/)) ? e.opera = t[1] : (t = n.match(/se ([\d.]+)/)) ? e.se = t[1] : (t = n.match(/maxthon\/([\d.]+)/)) ? e.maxthon = t[1] : (t = n.match(/bidubrowser\/([\d.]+)/)) ? e.baidu = t[1] : (t = n.match(/chrome\/([\d.]+)/)) ? e.chrome = t[1] : 0, e
        }, r.getBrowserVersion = function () {
            return window.navigator.userAgent.split("/")[3].split(".")[2]
        }, r.timeFormat = function (t, e) {
            var n = {
                "M+": t.getMonth() + 1,
                "d+": t.getDate(),
                "h+": t.getHours(),
                "m+": t.getMinutes(),
                "s+": t.getSeconds(),
                "q+": Math.floor((t.getMonth() + 3) / 3),
                S: t.getMilliseconds()
            };
            /(y+)/.test(e) && (e = e.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (var i in n)new RegExp("(" + i + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? n[i] : ("00" + n[i]).substr(("" + n[i]).length)));
            return e
        }, r.timestamp = function (t, e) {
            if (t) {
                var n = t.match(/((\d{4})\D(\d\d)\D(\d\d))(\s(\d\d)\D(\d\d)\D(\d\d))?/) || [];
                if (n[8])t = new Date(n[2], n[3] - 1, n[4], n[6], n[7], n[8]); else {
                    if (!n[4])return 0;
                    t = new Date(n[2], n[3] - 1, n[4])
                }
            }
            return Math.round((t || new Date).getTime() / 1e3) + 3600 * (e || 8)
        }, r.getTime = function (t) {
            var e = (new Date).getTime(), n = parseInt((e - t) / 1e3);
            if (n >= 0 && 120 > n)return "\u521A\u521A";
            if (n >= 120 && 3600 > n)return parseInt(n / 60) + "\u5206\u949F\u524D";
            if (n >= 3600 && 54e3 > n)return parseInt(n / 3600) + "\u5C0F\u65F6\u524D";
            {
                var i = new Date(t), r = "", o = i.getMonth() > 9 ? i.getMonth() + 1 : "0" + (i.getMonth() + 1), a = i.getDate() > 9 ? i.getDate() : "0" + i.getDate(), s = i.getHours() > 9 ? i.getHours() : "0" + i.getHours(), l = i.getMinutes() > 9 ? i.getMinutes() : "0" + i.getMinutes();
                i.getSeconds() > 9 ? i.getSeconds() : "0" + i.getSeconds()
            }
            return i.getFullYear() < (new Date).getFullYear() && (r = i.getFullYear() + " "), r + o + "-" + a + " " + s + ":" + l
        }, r.time_range = function (t, e, n) {
            var i = t.split(":"), r = e.split(":"), o = n.split(":");
            if (2 != i.length || 2 != r.length || 2 != r.length)return !1;
            var a = new Date, s = new Date, l = new Date;
            return a.setHours(i[0]), a.setMinutes(i[1]), s.setHours(r[0]), s.setMinutes(r[1]), l.setHours(o[0]), l.setMinutes(o[1]), a.getTime() < s.getTime() && l.getTime() > a.getTime() && l.getTime() < s.getTime() ? !0 : a.getTime() > s.getTime() && (l.getTime() > a.getTime() || l.getTime() < s.getTime()) ? !0 : !1
        }, r.parseURI = function (t) {
            t = t || location.href;
            var e = {}, n = t.indexOf("?");
            if (-1 != n) {
                t = t.substr(n + 1).split("&");
                for (var i = 0; i < t.length; i++)n = t[i].split("="), e[n[0]] = unescape(n[1])
            }
            return e
        }, r.array_intersect = function (t, e) {
            for (var n = 0, i = 0, r = new Array; n < t.length && i < e.length;)parseInt(t[n]) < parseInt(e[i]) ? n++ : parseInt(t[n]) > parseInt(e[i]) ? i++ : (r.push(parseInt(t[n])), n++, i++);
            return r
        }, r.enCode = function (t) {
            var e, n = new Array;
            for (e = 0; e < t.length; e++)n += "\\" + t.charCodeAt(e).toString(8);
            return n
        }, r.deCode = function (t) {
            var e, n = new Array, i = t.split("\\");
            for (e = 1; e < i.length; e++)n += String.fromCharCode(parseInt(i[e], 8));
            return n
        }, r.removeHTML = function (t) {
            return t = t.replace(/<\/?[^>]+>/g, ""), t = t.replace(/[ | ]*\n/g, ""), t = t.replace(/\n[\s| | ]*\r/g, ""), t = t.replace(/ /gi, ""), t = t.replace(/&nbsp;/gi, ""), t = t.replace(/&amp;/gi, "")
        }, r.loadFile = function (t, e, n) {
            var i = document.createElement("js" == e ? "script" : "link");
            "js" == e ? (i.src = t, i.charset = "utf-8") : "css" == e && (i.href = t, i.rel = "stylesheet", i.type = "text/css"), n && (i.onloadDone = !1, i.onload = n, i.onreadystatechange = function () {
                "loaded" === i.readyState && i.onloadDone && (i.onloadDone = !0, i.onload(), i.removeNode(!0))
            });
            try {
                document.getElementsByTagName("head")[0].appendChild(i)
            } catch (r) {
            }
        }, r.noop = function () {
        }, r.createHash = function () {
            return Object.create(null)
        }, r.isEmptyObject = function (t) {
            for (var e in t)return !1;
            return !0
        }, r.uuid = function () {
            return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
        }, r.toFirstLowerCase = function (t) {
            var e = /\b(\w)|\s(\w)/g;
            return t = t.toLowerCase(), t.replace(e, function (t) {
                return t.toUpperCase()
            })
        }, r.toUrl = function (t) {
            return chrome.extension.getURL(t)
        }, r.wildcard = function (t) {
            for (var e = "", n = 0, r = t.length; r > n; n++) {
                var o = t.charAt(n);
                if (i(o))e += "\\" + o; else switch (o) {
                    case"*":
                        e += ".*";
                        break;
                    case"?":
                        e += ".{0,1}";
                        break;
                    default:
                        e += o
                }
            }
            return e
        }, n.exports = r
    }), require.register("smzdm_pro/source/src/core/callbacks.js", function (t, e, n) {
        var i = e("./main"), r = function (t) {
            t = t || {};
            var e, n, r, o, a, s, l = [], c = !t.once && [], u = function (i) {
                for (e = t.memory && i, n = !0, s = o || 0, o = 0, a = l.length, r = !0; l && a > s; ++s)if (l[s].apply(i[0], i[1]) === !1 && t.stopOnFalse) {
                    e = !1;
                    break
                }
                r = !1, l && (c ? c.length && u(c.shift()) : e ? l.length = 0 : p.disable())
            }, p = {
                add: function () {
                    if (l) {
                        var n = l.length, s = function (e) {
                            i.each(e, function (e, n) {
                                "function" == typeof n ? t.unique && p.has(n) || l.push(n) : n && n.length && "string" != typeof n && s(n)
                            })
                        };
                        s(arguments), r ? a = l.length : e && (o = n, u(e))
                    }
                    return this
                }, remove: function () {
                    return l && i.each(arguments, function (t, e) {
                        for (var n; (n = i.inArray(e, l, n)) > -1;)l.splice(n, 1), r && (a >= n && --a, s >= n && --s)
                    }), this
                }, has: function (t) {
                    return !(!l || !(t ? i.inArray(t, l) > -1 : l.length))
                }, empty: function () {
                    return a = l.length = 0, this
                }, disable: function () {
                    return l = c = e = void 0, this
                }, disabled: function () {
                    return !l
                }, lock: function () {
                    return c = void 0, e || p.disable(), this
                }, locked: function () {
                    return !c
                }, fireWith: function (t, e) {
                    return !l || n && !c || (e = e || [], e = [t, e.slice ? e.slice() : e], r ? c.push(e) : u(e)), this
                }, fire: function () {
                    return p.fireWith(this, arguments)
                }, fired: function () {
                    return !!n
                }
            };
            return p
        };
        n.exports = r
    }), require.register("smzdm_pro/source/src/core/deferred.js", function (t, e, n) {
        function i(t) {
            var e = [["resolve", "done", o({once: 1, memory: 1}), "resolved"], ["reject", "fail", o({
                once: 1,
                memory: 1
            }), "rejected"], ["notify", "progress", o({memory: 1})]], n = "pending", a = {
                state: function () {
                    return n
                }, always: function () {
                    return s.done(arguments).fail(arguments), this
                }, then: function () {
                    var t = arguments;
                    return i(function (n) {
                        r.each(e, function (e, i) {
                            var o = r.isFunction(t[e]) && t[e];
                            s[i[1]](function () {
                                var t = o && o.apply(this, arguments);
                                if (t && r.isFunction(t.promise))t.promise().done(n.resolve).fail(n.reject).progress(n.notify); else {
                                    var e = this === a ? n.promise() : this, s = o ? [t] : arguments;
                                    n[i[0] + "With"](e, s)
                                }
                            })
                        }), t = null
                    }).promise()
                }, promise: function (t) {
                    return null != t ? r.extend(t, a) : a
                }
            }, s = {};
            return r.each(e, function (t, i) {
                var r = i[2], o = i[3];
                a[i[1]] = r.add, o && r.add(function () {
                    n = o
                }, e[1 ^ t][2].disable, e[2][2].lock), s[i[0]] = function () {
                    return s[i[0] + "With"](this === s ? a : this, arguments), this
                }, s[i[0] + "With"] = r.fireWith
            }), a.promise(s), t && t.call(s, s), s
        }

        var r = e("./main"), o = e("./callbacks"), a = Array.prototype.slice;
        r.when = function (t) {
            var e, n, o, s = a.call(arguments), l = s.length, c = 0, u = 1 !== l || t && r.isFunction(t.promise) ? l : 0, p = 1 === u ? t : i(), d = function (t, n, i) {
                return function (r) {
                    n[t] = this, i[t] = arguments.length > 1 ? a.call(arguments) : r, i === e ? p.notifyWith(n, i) : --u || p.resolveWith(n, i)
                }
            };
            if (l > 1)for (e = new Array(l), n = new Array(l), o = new Array(l); l > c; ++c)s[c] && r.isFunction(s[c].promise) ? s[c].promise().done(d(c, o, s)).fail(p.reject).progress(d(c, n, e)) : --u;
            return u || p.resolveWith(o, s), p.promise()
        }, n.exports = i
    }), require.register("smzdm_pro/source/src/core/message.js", function (t, e, n) {
        var i = e("./DBoy"), r = {};
        r.on = function () {
            return i.unit.browType().maxthon ? !1 : void chrome.extension.onMessage.addListener(function (t) {
                if ("addOrder" == t.type) {
                    var e = "smzdm_order_" + t.mall, n = i.local(e) ? JSON.parse(i.local(e)) : [];
                    n.push(t.params), i.local(e, JSON.stringify(n)), i.unit.goto({
                        url: i.unit.url("html/order.html?mall=" + t.mall),
                        update: i.local("smzdm_order_tabid") ? i.local("smzdm_order_tabid") : 0
                    }, !0, function (t) {
                        i.local("smzdm_order_tabid", t.id)
                    })
                }
            })
        }, r.emit = function (t, e) {
            chrome.extension.sendMessage(t, e)
        }, n.exports = r
    }), require.register("smzdm_pro/source/src/core/cookie.js", function (t, e, n) {
        var i = {};
        i.on = function (t, e) {
            chrome.cookies[t].addListener(e)
        }, i.get = function (t, e) {
            chrome.cookies.getAll(t, function (t) {
                e && e(t && t.length > 0 ? t[0].value : null)
            })
        }, n.exports = i
    }), require.register("smzdm_pro/source/src/core/notice.js", function (t, e, n) {
        var i = e("./DBoy"), r = [];
        n.exports = {
            demo: {
                msg_id: 0,
                url: "/html/notification.html",
                type: "basic",
                title: "\u5021\u5BFC\u7406\u6027\u6D88\u8D39\uFF0C\u4EAB\u53D7\u54C1\u8D28\u751F\u6D3B",
                message: "\u201C\u4EC0\u4E48\u503C\u5F97\u4E70\u201D\u662F\u4E00\u4E2A\u4E2D\u7ACB\u7684\uFF0C\u81F4\u529B\u4E8E\u5E2E\u52A9\u5E7F\u5927\u7F51\u53CB\u4E70\u5230\u66F4\u6709\u6027\u4EF7\u6BD4\u7F51\u8D2D\u4EA7\u54C1\u7684\u63A8\u8350\u7C7B\u535A\u5BA2\u3002\u201C\u4EC0\u4E48\u503C\u5F97\u4E70\u201D\u7684\u76EE\u7684\u662F\u5728\u5E2E\u52A9\u7F51\u53CB\u63A7\u5236\u7F51 \u8D2D\u7684\u98CE\u9669\u7684\u540C\u65F6\uFF0C\u5C3D\u53EF\u80FD\u7684\u5411\u5927\u5BB6\u4ECB\u7ECD\u9AD8\u6027\u4EF7\u6BD4\u7684\u7F51\u8D2D\u4EA7\u54C1\uFF0C\u8BA9\u5927\u5BB6\u4E70\u7740\u4E0D\u5FC3\u75BC\uFF0C\u82B1\u94B1\u7B49\u4E8E\u7701\u94B1\u3002\u540C\u65F6\u5E0C\u671B\u5927\u5BB6\u5728\u6EE1\u8DB3\u81EA\u8EAB\u9700\u6C42\u7684\u57FA\u7840\u4E0A\u7406\u6027\u6D88\u8D39\uFF0C\u4EAB\u53D7\u7279\u4EF7\u7684\u540C\u65F6\u5C3D\u91CF\u5C11\u7684\u5360\u7528\u5176\u4ED6\u4EBA\u673A\u4F1A\u548C\u8D44\u6E90\u3002",
                link1: "http://www.smzdm.com",
                link2: "msg_id"
            }, on: function (t) {
                if (e("./ext").open)return !1;
                var n = this, i = function (e, i) {
                    var r = n.findNotice(e);
                    t(r, i)
                };
                n.onNotifyClick(i), n.onNotifyButtonClick(i)
            }, notice: function (t) {
                if (e("./ext").open)return e("./ext").notice(t);
                var n = this, t = t || {}, o = (new Date).getTime(), a = {
                    type: t.type || "list",
                    title: t.title || "",
                    message: t.message.substr(0, 60) || "",
                    iconUrl: t.iconUrl || "/assets/img/logo128.png",
                    items: t.items || [],
                    buttons: []
                }, s = (new Date).getHours() + ":" + (new Date).getMinutes(), l = i.local("item_time1") || 0, c = i.local("item_time2") || 0, u = "on" == i.local("noti_time") && i.unit.time_range(l, c, s) ? !0 : !1;
                a.buttons[0] = {
                    title: "\u67E5\u770B\u8BE6\u60C5 >",
                    iconUrl: "/assets/img/arrow.png"
                }, i.clocal("ctoken") && 0 != t.msg_id && (a.buttons[1] = {
                    title: "\u52A0\u5165\u6536\u85CF >",
                    iconUrl: "/assets/img/favorite.png"
                }), i.unit.browType().opera ? delete a.buttons : i.unit.browType().se && (a.type = "basic"), 0 == u && "on" == i.local("noti_desktop") && (i.unit.getBrowserVersion() < 1460 && (r[o] = webkitNotifications.createHTMLNotification(t.url), r[o].ondisplay = function () {
                    var t = this;
                    setTimeout(function () {
                        t.cancel()
                    }, 3e4)
                }, r[o].show()), chrome.notifications ? (0 === t.msg_id && (o += "demo"), chrome.notifications.create("smzdm_notice_" + o, a, function (e) {
                    chrome.runtime.lastError;
                    var i = {
                        tag: e,
                        link1: t.link1,
                        link2: t.link2,
                        msg_id: t.msg_id,
                        priority: 2,
                        isClickable: !1,
                        variety: t.variety
                    };
                    setTimeout(function () {
                        chrome.notifications.clear(e, function () {
                        })
                    }, 8e3), n.save(i)
                })) : (0 === t.msg_id && (o += "demo"), noiceArray[o] = window.webkitNotifications.createNotification(t.iconUrl || "http://res.smzdm.com/images/logo_64.png", t.title.substr(0, 40), t.message.substr(0, 40) + "..."), r[o].onclick = function () {
                    i.unit.goto(t.link1)
                }, r[o].show(), r[o].ondisplay = function () {
                    var t = this;
                    setTimeout(function () {
                        t.cancel()
                    }, 8e3)
                }), "on" == i.local("noti_sound") && new Audio("/assets/notify.mp3").play())
            }, setBadge: function (t) {
                return e("./ext").open ? e("./ext").setBadge(t) : void chrome.browserAction.setBadgeText({text: t})
            }, onNotifyClick: function (t) {
                chrome.notifications && chrome.notifications.onClicked.addListener(t)
            }, onNotifyButtonClick: function (t) {
                chrome.notifications && chrome.notifications.onButtonClicked.addListener(t)
            }, save: function (t) {
                var e = JSON.parse(i.local("notice_array")) || [];
                e.push(t), i.local("notice_array", JSON.stringify(e))
            }, findNotice: function (t) {
                var e = JSON.parse(i.local("notice_array"));
                for (var n in e)if (e[n].tag === t)return e[n]
            }, clearNotify: function () {
                return i.unit.browType().maxthon ? !1 : void(chrome.notifications.getAll && chrome.notifications.getAll(function (t) {
                    for (var e in t)chrome.notifications.clear(e, function (t) {
                    })
                }))
            }
        }
    }), require.register("smzdm_pro/source/src/core/database.js", function (t, e, n) {
        function i(t, e, n) {
            n || (n = {}), this.tableName = t, this.fields = e;
            var i, r = [], a = this, s = "";
            for (i in e)r.push("`" + i + "` " + e[i]);
            s = "CREATE TABLE IF NOT EXISTS `" + t + "` (" + r.join(", ") + ")", c(null, s, [], function (t) {
                var e = n.index, i = "";
                if (e && o.isObject(e))for (var r in e)i = "CREATE INDEX IF NOT EXISTS " + r + " ON `" + a.tableName + "` (" + e[r] + ")", c(t, i, [])
            })
        }

        var r, o = e("./main"), a = !!window.openDatabase, s = function (t, e, n, i) {
            if (a)try {
                r = r || openDatabase(t, e, n, i)
            } catch (o) {
            }
        }, l = function (t, e, n) {
            return new i(t, e, n)
        }, c = function (t, e, n, i, a) {
            o.isObject(t) && "executeSql"in t ? t.executeSql(e, n, function (t, e) {
                i && i(t, e)
            }, function (t, e) {
                a && a(t, e)
            }) : r.transaction(function (t) {
                c(t, e, n, i, a)
            })
        }, u = function (t, e, n) {
            var i = "DROP TABLE IF EXISTS `" + t + "`";
            c(null, i, [], function (t, n) {
                e && e(t, n)
            }, function (t, e) {
                n && n(t, e)
            })
        }, p = i.prototype;
        p.getter = function () {
            var t = this.fields, e = {};
            for (var n in t)hasOwnProperty.call(t, n) && void 0 !== obj[n] && (e[n] = obj[n]);
            return e
        }, p._dealResult = function (t) {
            var e, n, i = [], r = this.fields;
            if (t.length > 0)for (var o = 0, a = t.length; a > o; o++) {
                e = t.item(o), n = {};
                for (var s in e)n[s] = "JSON" === r[s] ? JSON.parse(e[s] || '""') : e[s];
                i.push(n)
            }
            return i
        }, p.query = function (t, e, n, i, r) {
            var o = this, a = [], s = "";
            for (var l in e)a.push(l.toUpperCase() + " " + e[l]);
            "" === t && (t = "*"), s = "SELECT " + t + " FROM `" + this.tableName + "` " + a.join(" "), c(r, s, [], function (t, e) {
                n && n(t, o._dealResult(e.rows))
            }, function (t, e) {
                i && i(t, e)
            })
        }, p.queryAll = function (t, e, n) {
            this.query("*", {}, t, e, n)
        }, p.insert = function (t, e, n, i) {
            var r = [], a = o.toHash(t, this.fields), s = a.keys.map(function (t) {
                return r.push("?"), "`" + t + "`"
            }), l = "INSERT INTO `" + this.tableName + "` (" + s.join(", ") + ") VALUES (" + r.join(", ") + ")";
            c(i, l, a.values, function (t, n) {
                e && e(t, n)
            }, function (t, e) {
                n && n(t, e)
            })
        }, p.insertAll = function (t, e, n, i, r) {
            var o = this;
            return void 0 === r && (r = 0), r === t.length ? void(e && e(i)) : void this.insert(t[r], function (i) {
                o.insertAll(t, e, n, i, r + 1)
            }, function (t, e) {
                n && n(t, e)
            }, i)
        }, p.update = function (t, e, n, i) {
            var r = o.toHash(t.data, this.fields), a = "", s = [];
            r.keys.forEach(function (t) {
                s.push("`" + t + "` = ?")
            }), a = "UPDATE `" + this.tableName + "` SET " + s.join(", ") + " WHERE " + t.where, c(i, a, r.values, function (t, n) {
                e && e(t, n)
            }, function (t, e) {
                n && n(t, e)
            })
        }, p.upsert = function (t, e, n, i) {
            var r = this, o = "SELECT id FROM `" + this.tableName + "` WHERE id = ?";
            c(i, o, [t.id], function (i, o) {
                o.rows.length > 0 ? r.update(t, e, n, i) : r.insert(t, e, n, i)
            }, function (t, e) {
                n && n(t, e)
            })
        }, p.drop = function (t, e) {
            u(this.tableName, t, e)
        }, p.destroy = function (t, e, n, i) {
            var r = [];
            if ("object" == typeof t)for (var o in t)r.push(o.toUpperCase() + " " + t[o]); else r.push("WHERE id=" + t);
            var a = "DELETE FROM `" + this.tableName + "` " + r.join(" ");
            c(i, a, [], function (t, n) {
                e && e(t, n)
            }, function (t, e) {
                n && n(t, e)
            })
        }, p.clear = function (t, e, n) {
            var i = "DELETE FROM `" + this.tableName + "` ";
            c(n, i, [], function (e, n) {
                t && t(e, n)
            }, function (t, n) {
                e && e(t, n)
            })
        }, o.db = {support: a, connect: s, define: l, drop: u, query: c}, n.exports = i
    }), require.register("smzdm_pro/source/src/core/storage.js", function (t, e, n) {
        var i = e("./main");
        i.extend({
            local: function (t, n) {
                return e("./ext").open ? e("./ext").local(t, n) : "undefined" != typeof n ? localStorage.setItem(t, n) : localStorage.getItem(t)
            }, session: function () {
                return "undefined" != typeof val ? sessionStorage.setItem(key, val) : sessionStorage.getItem(key)
            }, clocal: function (t, e, n) {
                var i = this, r = {
                    val: !1,
                    t: !1,
                    e: !1
                }, o = n && n.day > 0 ? 864e5 * n.day : 12e4, a = (new Date).getTime();
                if (void 0 != e)return r.val = e, r.t = a, r.e = o, i.local(t, JSON.stringify(r)), !1;
                if (!i.local(t))return !1;
                var s = JSON.parse(i.local(t));
                return a - s.t >= s.e && i.local(t, JSON.stringify(r)), JSON.parse(i.local(t)).val
            }
        }), n.exports = {}
    }), require.register("smzdm_pro/source/src/core/ajax.js", function (t, e, n) {
        function i(t, e, n) {
            w.emit(e, n)
        }

        function r(t, e, n, r) {
            return t.global ? i(e || window.document, n, r) : void 0
        }

        function o(t) {
            t.global && 0 === x.active++ && r(t, null, "ajaxStart")
        }

        function a(t) {
            t.global && !--x.active && r(t, null, "ajaxStop")
        }

        function s(t, e) {
            var n = e.context;
            return e.beforeSend.call(n, t, e) === !1 || r(e, n, "ajaxBeforeSend", [t, e]) === !1 ? !1 : void r(e, n, "ajaxSend", [t, e])
        }

        function l(t, e, n, i) {
            var o = n.context, a = "success";
            n.success.call(o, t, a, e), i && i.resolveWith(o, [t, a, e]), r(n, o, "ajaxSuccess", [e, n, t]), u(a, e, n)
        }

        function c(t, e, n, i, o) {
            var a = i.context;
            i.error.call(a, n, e, t), o && o.rejectWith(a, [n, e, t]), r(i, a, "ajaxError", [n, i, t || e]), u(e, n, i)
        }

        function u(t, e, n) {
            var i = n.context;
            n.complete.call(i, e, t), r(n, i, "ajaxComplete", [e, n]), a(n)
        }

        function p() {
        }

        function d(t) {
            return t && (t = t.split(";", 2)[0]), t && (t == C ? "html" : t == S ? "json" : k.test(t) ? "script" : T.test(t) && "xml") || "text"
        }

        function h(t, e) {
            return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
        }

        function f(t) {
            t.processData && t.data && "string" != x.type(t.data) && (t.data = x.param(t.data, t.traditional)), !t.data || t.type && "GET" != t.type.toUpperCase() || (t.url = h(t.url, t.data), t.data = void 0)
        }

        function m(t, e, n, i) {
            return x.isFunction(e) && (i = n, n = e, e = void 0), x.isFunction(n) || (i = n, n = void 0), {
                url: t,
                data: e,
                success: n,
                dataType: i
            }
        }

        function g(t, e, n, i) {
            var r, o = x.isArray(e), a = x.isPlainObject(e);
            x.each(e, function (e, s) {
                r = x.type(s), i && (e = n ? i : i + "[" + (a || "object" == r || "array" == r ? e : "") + "]"), !i && o ? t.add(s.name, s.value) : "array" == r || !n && "object" == r ? g(t, s, n, e) : t.add(e, s)
            })
        }

        var v, y, x = e("./main"), b = e("./deferred"), w = new (e("./emitter")), k = /^(?:text|application)\/javascript/i, T = /^(?:text|application)\/xml/i, S = "application/json", C = "text/html", _ = /^\s*$/;
        x.active = 0, x.ajaxSettings = {
            type: "GET",
            beforeSend: p,
            success: p,
            error: p,
            complete: p,
            context: null,
            global: !0,
            xhr: function () {
                return new window.XMLHttpRequest
            },
            accepts: {
                script: "text/javascript, application/javascript, application/x-javascript",
                json: S,
                xml: "application/xml, text/xml",
                html: C,
                text: "text/plain"
            },
            crossDomain: !1,
            timeout: 0,
            processData: !0,
            cache: !0
        }, x.ajax = function (t) {
            var e = x.extend({}, t || {}), n = b && b();
            for (v in x.ajaxSettings)void 0 === e[v] && (e[v] = x.ajaxSettings[v]);
            o(e), e.crossDomain || (e.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(e.url) && RegExp.Ajax2 != window.location.host), e.url || (e.url = window.location.toString()), f(e), e.cache === !1 && (e.url = h(e.url, "_=" + Date.now()));
            var i, r = e.dataType, a = e.accepts[r], u = {}, m = function (t, e) {
                u[t.toLowerCase()] = [t, e]
            }, g = /^([\w-]+:)\/\//.test(e.url) ? RegExp.Ajax1 : window.location.protocol, w = e.xhr(), k = w.setRequestHeader;
            if (n && n.promise(w), e.crossDomain || m("X-Requested-With", "XMLHttpRequest"), m("Accept", a || "*/*"), (a = e.mimeType || a) && (a.indexOf(",") > -1 && (a = a.split(",", 2)[0]), w.overrideMimeType && w.overrideMimeType(a)), (e.contentType || e.contentType !== !1 && e.data && "GET" != e.type.toUpperCase()) && m("Content-Type", e.contentType || "application/x-www-form-urlencoded"), e.headers)for (y in e.headers)m(y, e.headers[y]);
            if (w.setRequestHeader = m, w.onreadystatechange = function () {
                    if (4 == w.readyState) {
                        w.onreadystatechange = p, clearTimeout(i);
                        var t, o = !1;
                        if (w.status >= 200 && w.status < 300 || 304 == w.status || 0 == w.status && "file:" == g) {
                            r = r || d(e.mimeType || w.getResponseHeader("content-type")), t = w.responseText;
                            try {
                                "script" == r ? (1, eval)(t) : "xml" == r ? t = w.responseXML : "json" == r && (t = _.test(t) ? null : x.parseJSON(t))
                            } catch (a) {
                                o = a
                            }
                            o ? c(o, "parsererror", w, e, n) : l(t, w, e, n)
                        } else c(w.statusText || null, w.status ? "error" : "abort", w, e, n)
                    }
                }, s(w, e) === !1)return w.abort(), c(null, "abort", w, e, n), w;
            if (e.xhrFields)for (y in e.xhrFields)w[y] = e.xhrFields[y];
            var T = "async"in e ? e.async : !0;
            w.open(e.type, e.url, T, e.username, e.password);
            for (y in u)k.apply(w, u[y]);
            return e.timeout > 0 && (i = setTimeout(function () {
                w.onreadystatechange = p, w.abort(), c(null, "timeout", w, e, n)
            }, e.timeout)), w.send(e.data ? e.data : null), w
        }, x.get = function () {
            return x.ajax(m.apply(null, arguments))
        }, x.post = function () {
            var t = m.apply(null, arguments);
            return t.type = "POST", x.ajax(t)
        }, x.getJSON = function () {
            var t = m.apply(null, arguments);
            return t.dataType = "json", x.ajax(t)
        }, x.getDOM = function () {
            var t = m.apply(null, arguments);
            return t.dataType = "html", x.ajax(t)
        };
        var A = encodeURIComponent;
        x.param = function (t, e) {
            var n = [];
            return n.add = function (t, e) {
                this.push(A(t) + "=" + A(e))
            }, g(n, t, e), n.join("&").replace(/%20/g, "+")
        }, x.parseJSON = function (t) {
            return JSON.parse(t + "")
        }, n.exports = x.ajax
    }), require.register("smzdm_pro/source/src/core/ext.js", function (t, e, n) {
        var i = {maxthon: new (e("../ext/maxthon"))}, r = function () {
            for (var t in i)if (i[t].open !== !1)return i[t];
            return !1
        };
        n.exports = r()
    }), require.register("smzdm_pro/source/src/data/filter.js", function (t, e, n) {
        var i = function () {
        };
        i.add = function () {
        }, i.push = function () {
        }, n.exports = i
    }), require.register("smzdm_pro/source/src/data/chart.js", function (t, e, n) {
        var i = e("../core/DBoy"), r = e("../../config/config"), o = r.url.pricetrend, a = function () {
        };
        a.getOne = function (t) {
            var n = window.location.href, a = new (e("./b6")), s = JSON.stringify([r.app.tny, n]), l = a.ec(s), c = l.replace(/B/g, "//");
            i.post(o, {w: c}, function (e) {
                var e = JSON.parse(e);
                if (!e.Success || e.PriceSeriesList.length <= 0)return t && t(!1), !1;
                var n = e.PriceSeriesList[0], i = n.PriceSeries;
                return n.StatusID > 0 || i.length <= 0 ? (t && t(!1), !1) : void(t && t(n))
            })
        }, a.getMore = function (t, e) {
            var n = JSON.stringify(i.unique(t));
            i.post(o, {sn: r.app.tny, url: n}, function (t) {
                if (!t.Success)return !1;
                var t = JSON.parse(t), n = t.PriceSeriesList;
                if (!t.Success || n.length <= 0)return !1;
                var r = i.isArray(n) ? n : [n];
                e(r)
            })
        }, a.createSeries = function (t, e, n) {
            var n = parseInt(n > 0 ? 7 * n : 84), i = 1e3 * ((new Date).getTime() / 1e3 - 86400 * n), r = [], o = 0, a = 0;
            for (var s in t) {
                for (var l = [], c = [], u = e.length - 1; u >= 0; u--) {
                    var p = e[u];
                    if (s === p.S + "") {
                        var d = p.D, h = "20" + d.substr(0, 2), f = 0 == d.substr(2, 1) ? d.substr(3, 1) : d.substr(2, 2), m = 0 == d.substr(4, 1) ? d.substr(5, 1) : d.substr(4, 2), g = Date.UTC(parseInt(h), parseInt(f - 1), parseInt(m));
                        g > i && (a = p.P > a ? p.P + .01 * p.P : a, l.push([g, p.P, p.D, p.S])), c.push([g, p.P, p.D, p.S])
                    }
                }
                if (l.length <= 0)break;
                l[l.length - 1][0] > i && c.length > l.length && l.push([i, c[l.length][1], c[l.length][2], c[l.length][3]]), r[o] = {
                    name: t[s],
                    data: l.reverse(),
                    visible: 0 == o ? !0 : !1
                }, o++
            }
            var v = {series: r, Ymax: a};
            return v
        }, a.createCon = function (t, e, n) {
            var r = {
                chart: {
                    type: "spline",
                    width: n ? n.width : 350,
                    height: n ? n.height : 220,
                    borderRadius: 0,
                    marginBottom: 75
                },
                title: {text: ""},
                series: t,
                tooltip: {xDateFormat: "%Y-%m-%d", valueDecimals: 2},
                plotOptions: {series: {lineWidth: 1, marker: {radius: 3}}},
                credits: {enabled: !1},
                xAxis: {
                    type: "datetime",
                    tickInterval: 12096e5,
                    gridLineWidth: 1,
                    gridLineColor: "#eee",
                    lineColor: "#ccc",
                    tickColor: "",
                    showFirstLabel: !0,
                    startOnTick: !0,
                    endOnTick: !0,
                    labels: {
                        formatter: function () {
                            return i.unit.timeFormat(new Date(this.value), "M-d")
                        }, style: {color: "#ccc", font: "11px Trebuchet MS, Verdana, sans-serif"}
                    }
                },
                yAxis: {
                    title: {text: ""},
                    gridLineWidth: 1,
                    gridLineColor: "#eee",
                    lineColor: "#ccc",
                    lineWidth: 1,
                    tickWidth: 1,
                    tickColor: "",
                    max: e,
                    labels: {style: {color: "#ccc", font: "11px Trebuchet MS, Verdana, sans-serif"}}
                }
            };
            return r
        }, n.exports = a
    }), require.register("smzdm_pro/source/src/data/price.js", function (t, e, n) {
        var i = e("../core/DBoy"), r = e("../../config/config"), o = r.url.RATE, a = e("../../lib/jquery"), s = function () {
        };
        s.pricezoom = function (t, e, n) {
            var i, r, o = {};
            if (!t)return !1;
            if (n)for (var a in n)n[a] && t[a] && (t[a][0] = n[a]);
            try {
                o.getdollarprice = [t.price[0].replace("US", "").replace(/[\n|\s|,]/g, "")]
            } catch (l) {
                return !1
            }
            if (!o.getdollarprice[0] || o.getdollarprice[0].indexOf("$") < 0)return !1;
            var c = e || {
                    defaultShip: "",
                    type: "1",
                    id: "tianyi1",
                    name: "\u7F8E\u4E2D\u7EBF-A\u53E3\u5CB8",
                    url: "http://www.buytong.com/NetWork.aspx?type=1&",
                    singlePrice: "50",
                    singleWeight: "1",
                    extendPrice: "25",
                    extendWeight: "1",
                    exchangeRate: "6.25",
                    minWeight: "2",
                    sepecialProm: "",
                    promptText: "(\u96502-8\u78C5)"
                };
            o.rate = n && n.rate ? n.rate : s.getCurrentRate(), o.autoRate = s.getCurrentRate(), o.num = t.num && t.num[0] > 0 ? parseInt(t.num[0]) : 1, o.shippingUSA = s.shippingUSA(), o.weight = t.weight, o.singleWeight = c.singleWeight, o.singlePrice = c.singlePrice, o.extendWeight = c.extendWeight, o.extendPrice = c.extendPrice, o.shippingINT = s.shippingINT(o, c), o.getchinaprice = [], o.type = "1" == c.type ? "\uFFE5" : "$";
            var u = o.getdollarprice[0].indexOf("-") > -1 ? o.getdollarprice[0].split("-") : [o.getdollarprice[0]];
            for (var a in u) {
                var p = parseFloat(u[a].replace("$", ""));
                u[a] = s.accMul(o.rate, p).toFixed(2)
            }
            return u.length > 1 ? (i = parseFloat(parseFloat(u[0]) + parseFloat(o.shippingUSA[1]) + parseFloat(o.shippingINT[1])), r = parseFloat(parseFloat(u[1]) + parseFloat(o.shippingUSA[1]) + parseFloat(o.shippingINT[1])), o.getdollarprice[1] = "\uFFE5" + u[0] + " - \uFFE5" + u[1], o.getchinaprice[0] = "\uFFE5" + (i * o.num).toFixed(2) + " - \uFFE5" + (r * o.num).toFixed(2)) : (i = parseFloat(parseFloat(u[0]) + parseFloat(o.shippingUSA[1]) + parseFloat(o.shippingINT[1])), o.getdollarprice[1] = "\uFFE5" + u[0], o.getchinaprice[0] = "\uFFE5" + (i * o.num).toFixed(2)), o.getchinaprice[1] = "\u542B\u8F6C\u8FD0\u8D39", o
        }, s.getCurrentRate = function () {
            var t = i.unit.timestamp(i.unit.timeFormat(new Date, "yyyy-MM-dd h"));
            return (!i.local("smzdm_currentRate") || t - i.local("smzdm_currentRate") > 1) && i.get(o, function (e) {
                if (e && "" != e) {
                    var n = e.split(",");
                    if (n && n.length > 0)return i.local("smzdm_currentRate", n[1]), i.local("smzdm_currentRate_last", t), n[1]
                }
            }), i.local("smzdm_currentRate")
        }, s.shippingUSA = function () {
            return [0, 0]
        }, s.shippingINT = function (t, e) {
            var n = Math.ceil(t.weight ? t.weight[0] : 0), i = parseFloat(e.exchangeRate), r = 1 == e.type ? 0 : parseFloat(parseFloat(e.singlePrice) + parseFloat(e.extendPrice * ((n || 1) - 1))).toFixed(2), o = 1 == e.type ? parseFloat(parseFloat(e.singlePrice) + parseFloat(e.extendPrice * ((n || 1) - 1))).toFixed(2) : s.accMul(i, parseFloat(parseFloat(e.singlePrice) + parseFloat(e.extendPrice * ((n || 1) - 1)))).toFixed(2);
            return [r, o]
        }, s.accMul = function (t, e) {
            var n = 0, i = t.toString(), r = e.toString();
            try {
                n += i.split(".")[1].length
            } catch (o) {
            }
            try {
                n += r.split(".")[1].length
            } catch (o) {
            }
            return Number(i.replace(".", "")) * Number(r.replace(".", "")) / Math.pow(10, n)
        }, s.achieve = function (t) {
            var e = this, n = !1;
            if (void 0 != t.query) {
                var i = t.query;
                n = [];
                for (var r in i)if (n[r] = [], "weight" != r) {
                    for (var o = 0; o < i[r].length; o++)if (!(a(i[r][o]).length <= 0)) {
                        for (var s = a(i[r][o]), l = 0; l < s.length; l++)n[r].push(a(s[l]).val() || a(s[l]).text());
                        break
                    }
                } else n[r] = e.getShippingWeight(i[r])
            }
            return n
        }, s.getShippingWeight = function (t) {
            var e, n = a(t[0]), i = 0;
            if (n.length > 0 && n.parent()) {
                var r = n.parent().text(), o = r.substring(r.indexOf(":") > 0 ? r.indexOf(":") + 1 : 0, r.indexOf("(") > 0 ? r.indexOf("(") : r.length).trim();
                r.indexOf("\uFF08") > 0 && (o = r.substring(r.indexOf("\uFF1A") > 0 ? r.indexOf("\uFF1A") + 1 : 0, r.indexOf("\uFF08") > 0 ? r.indexOf("\uFF08") : r.length).trim()), i = -1 != o.indexOf("pounds") || -1 != o.indexOf("\u78C5") ? parseFloat(o) : -1 != o.indexOf("ounces") || -1 != o.indexOf("\u76CE\u53F8") ? parseInt(parseFloat(o) / 16 * 100) / 100 : parseFloat(o)
            }
            return isNaN(i) && (i = 0), e = parseInt(.45359237 * i * 100) / 100, [i, e]
        }, n.exports = s
    }), require.register("smzdm_pro/source/src/data/b6.js", function (t, e, n) {
        n.exports = function () {
            var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", e = function (t) {
                t = t.replace(/\r\n/g, "\n");
                for (var e = "", n = 0; n < t.length; n++) {
                    var i = t.charCodeAt(n);
                    128 > i ? e += String.fromCharCode(i) : i > 127 && 2048 > i ? (e += String.fromCharCode(i >> 6 | 192), e += String.fromCharCode(63 & i | 128)) : (e += String.fromCharCode(i >> 12 | 224), e += String.fromCharCode(i >> 6 & 63 | 128), e += String.fromCharCode(63 & i | 128))
                }
                return e
            }, n = function (t) {
                for (var e = "", n = 0, i = c1 = c2 = 0; n < t.length;)i = t.charCodeAt(n), 128 > i ? (e += String.fromCharCode(i), n++) : i > 191 && 224 > i ? (c2 = t.charCodeAt(n + 1), e += String.fromCharCode((31 & i) << 6 | 63 & c2), n += 2) : (c2 = t.charCodeAt(n + 1), c3 = t.charCodeAt(n + 2), e += String.fromCharCode((15 & i) << 12 | (63 & c2) << 6 | 63 & c3), n += 3);
                return e
            };
            this.ec = function (n) {
                var i, r, o, a, s, l, c, u = "", p = 0;
                for (n = e(n); p < n.length;)i = n.charCodeAt(p++), r = n.charCodeAt(p++), o = n.charCodeAt(p++), a = i >> 2, s = (3 & i) << 4 | r >> 4, l = (15 & r) << 2 | o >> 6, c = 63 & o, isNaN(r) ? l = c = 64 : isNaN(o) && (c = 64), u = u + t.charAt(a) + t.charAt(s) + t.charAt(l) + t.charAt(c);
                return u
            }, this.dc = function (e) {
                var i, r, o, a, s, l, c, u = "", p = 0;
                for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); p < e.length;)a = t.indexOf(e.charAt(p++)), s = t.indexOf(e.charAt(p++)), l = t.indexOf(e.charAt(p++)), c = t.indexOf(e.charAt(p++)), i = a << 2 | s >> 4, r = (15 & s) << 4 | l >> 2, o = (3 & l) << 6 | c, u += String.fromCharCode(i), 64 != l && (u += String.fromCharCode(r)), 64 != c && (u += String.fromCharCode(o));
                return u = n(u)
            }
        }
    }), require.register("smzdm_pro/source/src/data/difference.js", function (t, e, n) {
        var i = e("../../lib/jquery"), r = e("../core/DBoy"), o = e("../../config/config");
        n.exports = {
            open: !1, info: {}, option: {}, data: {}, callback: function () {
            }, init: function (t) {
                var e = {}, n = this;
                n.option = t || n.option;
                for (var r in n.option)if ("open" != r) {
                    for (var o = n.option[r], a = 0; a < o.length; a++)if (!(i(o[a]).length <= 0)) {
                        e[r] = i(o[a]).text();
                        break
                    }
                } else n.open = n.option[r];
                n.info = e
            }, auto: function (t, e) {
                var n = this, i = n.info;
                if (!n.open)return !1;
                if (n.data = t || n.data, n.callback = e || n.callback, void 0 == i.price || "" == i.price) {
                    {
                        setTimeout(function () {
                            n.init(), n.auto()
                        }, 5e3)
                    }
                    return !1
                }
                for (var r = parseFloat(i.price.replace(/[$|,|\uFFE5]/g, "")), o = n.data.series, a = !1, s = 0; s < o.length; s++) {
                    var l = o[s].data.length, c = o[s].data[l - 1][1];
                    r.toFixed(2) !== c.toFixed(2) && (o[s].data[l - 1][1] = r, a = !0)
                }
                a && (n.open && n.update(r), n.data.series = o, n.callback(n.data))
            }, update: function (t) {
                var e = window.location.href;
                r.post(o.url.diffSubmit, {sn: o.app.tny, url: e, type: "warning", newprice: t}, function (t) {
                })
            }
        }
    }), require.register("smzdm_pro/source/src/data/comment.js", function (t, e, n) {
        function i(t) {
            this.content = t.content, this.link = t.link, this.email = t.email
        }

        var r = e("../../config/config"), o = e("../core/DBoy");
        i.prototype = {
            submit: function (t) {
                o.post(r.url.report(), {
                    question_desc: this.content,
                    os_version: this.link,
                    username: this.email,
                    contact_info: this.email
                }, function (e) {
                    t && t(e)
                })
            }
        }, n.exports = i
    }), require.register("smzdm_pro/source/src/data/size.js", function (t, e, n) {
        var i = (e("../core/DBoy"), e("../../lib/jquery")), r = e("../../config/size"), o = {
            data: [],
            times: -1,
            getAll: function (t, e) {
                var n = this, i = n.pageCategorize(t);
                if (i = i ? i.toLowerCase().replace(/clothing,shoes&jewelry/g, "") : !1, !i)return e(!1), !1;
                for (var o = 0; o < r.length; o++)if (r[o].key) {
                    var a = r[o].key.split(","), s = (a.length, 0);
                    for (var l in a)i.indexOf(a[l]) > -1 && s >= n.times && (n.data = [r[o]], n.times = parseInt(n.times + 1)), s++
                }
                e(n.data)
            },
            pageCategorize: function (t) {
                if (t.length <= 0)return !1;
                var e = !1;
                for (var n in t) {
                    var r = t[n];
                    if (!(i(r).length <= 0)) {
                        e = i(r).text().replace(/[\n|\s]/g, "");
                        break
                    }
                }
                return "" != e ? e : void 0
            },
            getSub: function (t, e) {
                for (var n = 0, i = r.length; i > n; n++)r[n].name == t && e && e(r[n].data)
            },
            getTable: function (t, e, n) {
                for (var i = 0, o = r.length; o > i; i++)if (r[i].name == t)for (var a = r[i].data, s = 0, l = a.length; l > s; s++)a[s].name == e && n && n(a[s])
            }
        };
        n.exports = o
    }), require.register("smzdm_pro/source/src/data/auto.js", function (t, e, n) {
        var i = new (e("../core/emitter")), r = {
            init: function () {
                i.on("footmark_curUrl", function (t) {
                })
            }
        }, o = {
            init: function () {
                r.init()
            }
        };
        n.exports = o
    }), require.register("smzdm_pro/source/src/data/cart.js", function (t, e, n) {
        var i = (e("../../lib/jquery"), {
            init: function (t) {
            }
        });
        n.exports = i
    }), require.register("smzdm_pro/source/src/data/favorites.js", function (t, e, n) {
        var i = e("../core/DBoy"), r = e("./message"), o = e("../../config/config"), a = {};
        a.getlist = function (t, e) {
            i.post(o.url.getfav(), {
                token: i.clocal("ctoken"),
                type: t,
                limit: 10,
                offset: 0,
                get_total: 1
            }, function (t) {
                return t.error_code > 0 ? !1 : (i.each(t.data.rows, function (t, e) {
                    var n = "";
                    e.fade = !1, n = e.article_url.indexOf("?") > -1 ? "&" + o.app.census() : "?" + o.app.census(), e.article_url += n
                }), void e(t))
            })
        }, a.add = function (t, e) {
            i.post(o.url.addfav(), {token: i.clocal("ctoken"), id: t.msg_id, type: t.type}, function (t) {
                return t.error_code > 0 ? e(t) : (r.upCount(), void(e && e(t)))
            })
        }, a.remove = function (t, e) {
            i.post(o.url.delfav(), {token: i.clocal("ctoken"), id: t.id, type: t.type}, function (t) {
                return t.error_code > 0 ? !1 : void e(t)
            })
        }, a.getNav = function () {
            return [{id: "youhui", title: "\u4F18\u60E0", url: "http://www.smzdm.com/youhui"}, {
                id: "haitao",
                title: "\u6D77\u6DD8",
                url: "http://haitao.smzdm.com"
            }, {id: "faxian", title: "\u53D1\u73B0", url: "http://fx.smzdm.com"}, {
                id: "shaiwu",
                title: "\u6652\u7269",
                url: "http://show.smzdm.com"
            }, {id: "jingyan", title: "\u7ECF\u9A8C", url: "http://jy.smzdm.com"}, {
                id: "news",
                title: "\u8D44\u8BAF",
                url: "http://news.smzdm.com"
            }]
        }, n.exports = a
    }), require.register("smzdm_pro/source/src/data/message.js", function (t, e, n) {
        var i, r = e("../core/DBoy"), o = e("../../config/config"), a = new (e("../core/emitter")), s = e("./options"), l = e("../core/notice"), c = e("../../lib/jquery"), u = function () {
        };
        u.init = function () {
            u.onPull(), u.onNumber(function (t) {
                l.setBadge(t)
            }), i = u.create(), u.update(), r.loop(45, function () {
                u.fill()
            })
        }, u.reset = function () {
            u.destroy(function () {
                u.init()
            })
        }, u.destroy = function (t) {
            r.db.drop("messages", t)
        }, u.create = function () {
            r.db.connect("smzdm_db", "1.1.1", "SMZDM messages DB", 2097152);
            var t = r.db.define("messages", {
                msg_id: "TEXT PRIMARY KEY",
                msg_title: "TEXT",
                msg_desc: "TEXT",
                msg_url: "TEXT",
                msg_type: "TEXT",
                msg_picurl: "TEXT",
                msg_date: "TEXT",
                msg_buyurl: "TEXT",
                msg_fav: "INTEGER",
                msg_top: "INTEGER",
                msg_mall: "TEXT",
                msg_variety: "TEXT",
                msg_detail: "TEXT"
            });
            return t
        }, u.update = function () {
            u.backward(), u.upCount(), r.local("notice_array", "[]")
        }, u.backward = function () {
            i.query("", {where: "msg_detail<>''", limit: 1}, "", function (t, e) {
                e && r.db.query("", "ALTER TABLE messages ADD msg_detail text")
            })
        }, u.clear = function (t) {
            i.clear(function () {
                t && t()
            })
        }, u.upCount = function () {
            i.queryAll(function (t, e) {
                for (var n = {
                    message_all: 0,
                    message_all_unread: 0,
                    message_fav: 0,
                    message_fav_unread: 0
                }, i = 0; i < e.length; i++) {
                    var r = e[i];
                    0 == r.msg_fav ? (n.message_all++, 0 == r.msg_top && n.message_all_unread++) : (n.message_fav++, 0 == r.msg_top && n.message_fav_unread++)
                }
                a.emit("numberChange", n)
            })
        }, u.limit = function (t) {
            i.destroy({where: "msg_id in (select msg_id from messages where msg_fav=0 order by msg_date desc limit " + t + ",100000)"})
        }, u.fill = function () {
            var t = r.local("last_msg_date") || 1;
            r.get(o.url.push_post(), {lasttime: t}, function (t) {
                return 0 != t.error_code || t.data.length <= 0 ? !1 : (r.local("s") || r.local("s", t.s), void u.insert(t.data))
            })
        }, u.insert = function (t) {
            u.insertFilter(r.unique(t), function (t) {
                i.insertAll(t, function () {
                    u.limit(s.getLimit()), u.upCount(), u.saveNotice(t.slice(-1)[0]), a.emit("inserted", t)
                })
            })
        }, u.insertFilter = function (t, e) {
            var n = r.local("last_msg_id"), o = r.local("last_msg_date") || 1, a = [];
            r.each(t, function (r, s) {
                var l = "msg_id=" + s.msg_id + " ORDER BY msg_date desc";
                s.msg_id != n && s.msg_date > o && i.query("*", {where: l, limit: 1}, function (n, i) {
                    i.length || (s.msg_title = encodeURI(s.msg_title), s.msg_desc = encodeURI(s.msg_desc), s.msg_fav = 0, s.msg_top = 0, s.msg_variety = s.msg_type, s.msg_type = s.msg_categories, s.msg_detail = s.msg_detail ? encodeURI(s.msg_detail) : "", a.push(s)), r == t.length - 1 && e && e(a)
                })
            })
        }, u.isRead = function (t) {
            var e = r.parseJSON(r.local("messagesNum"));
            e.message_all_unread -= 1, e.message_all_unread < 0 && (e.message_all_unread = 0), a.emit("numberChange", e), void 0 != i && i.update({
                data: {msg_top: 1},
                where: "msg_id = " + t
            })
        }, u.onNumber = function (t) {
            var e = "";
            a.on("numberChange", function (n) {
                e = n.message_all_unread || "", r.local("messagesNum", JSON.stringify(n)), t && t(e.toString())
            })
        }, u.getNotification = function (t, e) {
            var n = u.create();
            n.query("*", {where: "msg_id=" + t + " ORDER BY msg_date desc"}, function (t, n) {
                e && e(n[0])
            })
        }, u.saveNotice = function (t) {
            return void 0 == t ? !1 : (r.local("last_msg_id", t.msg_id), void r.local("last_msg_date", t.msg_date))
        }, u.remove = function (t) {
            i.destroy({where: "msg_id=" + t})
        }, u.getFill = function (t) {
            i = i || u.create(), i.query("*", {where: "msg_fav = 0 ORDER BY msg_date desc"}, function (e, n) {
                for (var a = [], s = 0, l = n.length; l > s; s++) {
                    var p = {}, d = "";
                    r.each(n[s], function (t, e) {
                        if ("msg_picurl" == t)p.img = e || "/assets/img/logo128.png"; else if ("msg_title" == t) {
                            var n = decodeURI(e).split("\u3000");
                            p.title = n[0], p.price = n[1]
                        } else if ("msg_detail" == t) {
                            var i = "" != e ? JSON.parse(decodeURI(e)) : {};
                            for (var a in i)p[a] = i[a];
                            if (p.tag_str && "" != p.tag_str) {
                                var s = p.tag_str.split(","), l = [];
                                if (s.length > 0)for (var a in s) {
                                    var u = c(s[a]);
                                    l.push({data: u.attr("data") + "?" + o.app.census(), html: u.html()})
                                }
                                p.tag_str = l.length > 0 ? l : !1
                            }
                            p.display_name && (d = p.display_name), p.name && (d = p.name), p.mall_link && (p.mall_link = p.mall_link + "?" + o.app.census())
                        } else"msg_mall" == t ? d = null != e && "undefined" != e ? e : d : "msg_buyurl" == t ? p.btnurl = e.indexOf("?") > -1 ? e + o.app.census() : e + "?" + o.app.census() : "msg_date" == t ? p.time = r.unit.getTime(1e3 * parseInt(e)) : "msg_url" == t ? p.url = e.indexOf("?") > -1 ? e + o.app.census() : e + "?" + o.app.census() : p[t.replace("msg_", "")] = e;
                        p.meta = d, p.fade = !1
                    }), a.push(p)
                }
                u.onNumber(function () {
                    t && t(a, JSON.parse(r.local("messagesNum")))
                }), u.upCount(), i.update({data: {msg_top: 1}, where: "msg_fav=0"})
            })
        }, u.onPull = function () {
            a.on("inserted", function (t) {
                r.local("scrollTop", 0), l.clearNotify();
                var e = function () {
                    var e, n = 0;
                    r.each(t.reverse(), function (t, i) {
                        3 > n && (e = u.pullFilter(i)) && (n += 1, l.notice(e))
                    })
                }, n = function () {
                    var t = r.local("pushCategory");
                    t ? e() : setTimeout(function () {
                        n()
                    }, 1e3)
                };
                n()
            })
        }, u.pullFilter = function (t) {
            var e, n, i = !1, a = !1, s = "cn;global", l = [], c = [], u = [], p = [], d = [], h = [], f = [], m = {}, g = function (t) {
                var e = t.msg_url, n = t.msg_buyurl;
                return {
                    url: "/html/notification.html?msg_id=" + t.msg_id,
                    msg_id: t.msg_id,
                    title: r.unit.removeHTML(decodeURI(t.msg_title)).substring(0, 90),
                    iconUrl: t.msg_picurl,
                    message: r.unit.removeHTML(decodeURI(t.msg_desc)).substring(0, 120),
                    items: [{title: "", message: r.unit.removeHTML(decodeURI(t.msg_desc).substring(0, 120))}],
                    link1: e.indexOf("?") > 1 ? e + o.app.census() : e + "?" + o.app.census(),
                    link2: n.indexOf("?") > 1 ? n + o.app.census() : n + "?" + o.app.census(),
                    variety: t.msg_variety
                }
            };
            if (t.push_type && "2" === t.push_type)return g(t);
            if (t.push_type && "3" === t.push_type && "on" === r.local("noti_cat_88888"))return g(t);
            for (var v = r.local("push_keyword") ? r.local("push_keyword").replace(/\uFF0C/g, ",").split(",") : [], y = 0; y < v.length; y++)if ("" != v[y] && decodeURI(t.msg_title).indexOf(v[y]) > -1)return g(t);
            l = t.msg_categories.split(",").sort(function (t, e) {
                return t - e
            });
            for (var y = 0, x = l.length; x > y; y++)"" === l[y] && l.splice(y, 1);
            m = JSON.parse(r.local("pushCategory"));
            for (var y in m)c[y] = m[y].id;
            m = JSON.parse(r.local("pushSpecial"));
            for (var y in m)u[y] = m[y].id;
            p = JSON.parse(r.local("location_cls")), d = r.unit.array_intersect(l, c.sort(function (t, e) {
                return t - e
            })), h = r.unit.array_intersect(l, u.sort(function (t, e) {
                return t - e
            })), f = r.unit.array_intersect(l, p.sort(function (t, e) {
                return t - e
            })), i = h.length > 0 && "on" === r.local("noti_cat_" + h[0]) ? !0 : !1, f.length > 0 && ("3535" == f[0] && (s = "cn"), "8296" == f[0] && (s = "global"), e = r.local("item_location").indexOf(s) >= 0 ? !0 : !1);
            var b = {post: !1, os: !0, exp: !0, news: !0, ht: !1};
            return 1 == b[t.msg_type] && (e = !0), n = d.length > 0 && "on" === r.local("noti_cat_" + d[0]) ? !0 : !1, a = e && n ? !0 : !1, i || a ? g(t) : void 0
        }, n.exports = u
    }), require.register("smzdm_pro/source/src/data/options.js", function (t, e, n) {
        var i = e("../core/DBoy"), r = new (e("../core/emitter")), o = e("../../config/config").url, a = {};
        a.init = function () {
            r.on("insertPush", function () {
                r.emit("inited")
            }), e("../core/ext"), a.insertBase(), a.insertKey(), a.insertPush(), a.setExtype()
        }, a.base = function (t) {
            var n = this;
            n.getDetails(function (o) {
                var s = o.version, l = n.getVersion() ? n.getVersion().toString() : "", c = null === l, u = s != l;
                (u && c || s.length < 3 || s.substr(0, 3) != l.substr(0, 3)) && (a.setVersion(s), r.on("inited", function () {
                    if (i.local("options_update_run", "true"), e("../core/ext").open) {
                        var t = e("../core/ext");
                        return t.openOption(), !1
                    }
                    i.unit.goto("html/options.html", !0)
                })), t && t()
            })
        }, a.insertBase = function () {
            i.local("noti_desktop", i.local("noti_desktop") || "on"), i.local("noti_sound", i.local("noti_sound") || "on"), i.local("noti_time", i.local("noti_time") || "off"), i.local("item_time1", i.local("item_time1") || "23:00"), i.local("item_time2", i.local("item_time2") || "7:00"), i.local("message_limit", i.local("message_limit") || "100"), i.local("location_cls", JSON.stringify(["3535", "8296"])), i.local("item_location", i.local("item_location") || "cn;global"), i.local("open_back", i.local("open_back") || "on")
        }, a.insertPush = function () {
            i.local("noti_cat_88888", i.local("noti_cat_88888") || "on"), a.insertSpecial(function () {
                a.insertCategory(function () {
                    for (var t in localStorage) {
                        var e = t.indexOf("noti_cat_") > -1, n = 0, o = !1, a = 0, s = !1, l = "noti_cat_88888" !== t, c = JSON.parse(i.local("pushCategory")), u = JSON.parse(i.local("pushSpecial"));
                        if (e && l) {
                            for (var p = t.split("_")[2], d = 0, h = c.length; h > d; d++)c[d].id == p && n++;
                            for (var f = 0, m = u.length; m > f; f++)u[f].id == p && a++;
                            0 == n && (o = !0), 0 == a && (s = !0), o && s && localStorage.removeItem(t)
                        }
                    }
                    r.emit("insertPush")
                })
            })
        }, a.insertKey = function () {
            i.local("push_keyword", i.local("push_keyword") || "")
        }, a.insertSpecial = function (t) {
            i.get(o.special(), function (e) {
                if (0 == e.error_code) {
                    var n = [];
                    i.each(e.data.rows, function (t, e) {
                        var r = i.local("noti_cat_" + e.id) || "on";
                        i.local("noti_cat_" + e.id, r), n.push(e)
                    }), i.local("pushSpecial", JSON.stringify(n))
                }
                t && t()
            })
        }, a.insertCategory = function (t) {
            i.get(o.category(), function (e) {
                if (0 == e.error_code) {
                    var n = [];
                    i.each(e.data.rows, function (t, e) {
                        var r = i.local("noti_cat_" + e.id) || "on";
                        i.local("noti_cat_" + e.id, r), n.push(e)
                    }), i.local("pushCategory", JSON.stringify(n))
                }
                t && t()
            })
        }, a.getDetails = function (t) {
            return e("../core/ext").open ? e("../core/ext").getDetails(t) : void(t && t(chrome.app.getDetails()))
        }, a.getVersion = function () {
            return i.local("version")
        }, a.setVersion = function (t) {
            i.local("version", t), i.local("options_update_run", "true")
        }, a.setExtype = function () {
            a.getDetails(function (t) {
                var e = {type: t.content_scripts ? 2 : 1, name: t.name};
                i.local("manifest", JSON.stringify(e))
            })
        }, a.setBeginTime = function (t) {
            i.local("item_time1", t)
        }, a.setClosureTime = function (t) {
            i.local("item_time2", t)
        }, a.setLimit = function (t) {
            i.local("message_limit", t)
        }, a.getLimit = function () {
            return i.local("message_limit")
        }, a.setLocation = function (t) {
            i.local("item_location", t)
        }, a.getLocation = function () {
            return i.local("item_location")
        }, a.setUpdateStatus = function (t) {
            i.local("options_update_run", t ? "true" : "false")
        }, a.getUpdateStatus = function () {
            return i.local("options_update_run")
        }, a.getBase = function () {
            return {
                desktop: i.local("noti_desktop"),
                muteTime: i.local("noti_time"),
                beginTime: i.local("item_time1"),
                closureTime: i.local("item_time2"),
                sound: i.local("noti_sound"),
                count: i.local("message_limit"),
                locus: i.local("item_location"),
                open_back: i.local("open_back")
            }
        }, a.setBase = function (t) {
            var e = "on" == i.local(t) ? "off" : "on";
            i.local(t, e)
        }, a.getPush = function () {
            for (var t = JSON.parse(i.local("pushCategory")) || [], e = JSON.parse(i.local("pushSpecial")) || [], n = {
                specialList: [],
                categoryList: []
            }, r = 0, o = e.length; o > r; r++)n.specialList.push({
                id: e[r].id,
                title: e[r].title,
                value: i.local("noti_cat_" + e[r].id)
            });
            for (var a = 0, s = t.length; s > a; a++)n.categoryList.push({
                id: t[a].id,
                title: t[a].title,
                value: i.local("noti_cat_" + t[a].id)
            });
            return n
        }, a.changePull = function (t) {
            var e = "on" == t.value ? "off" : "on";
            t.value = e, i.local("noti_cat_" + t.id, e)
        }, a.setKeyword = function (t) {
            i.local("push_keyword", t)
        }, a.getKeyword = function () {
            return i.local("push_keyword")
        }, a.reportSub = function (t, e) {
            i.post(o.report(), t, function (t) {
                e && e()
            })
        }, a.getBasic = function () {
            return i.local("noti_cat_88888")
        }, a.changeBasic = function () {
            var t = "on" == i.local("noti_cat_88888") ? "off" : "on";
            return i.local("noti_cat_88888", t), t
        }, a.getOther = function () {
            return i.local("noti_cat_99999")
        }, a.changeOther = function () {
            var t = "on" == i.local("noti_cat_99999") ? "off" : "on";
            return i.local("noti_cat_99999", t), t
        }, n.exports = a
    }), require.register("smzdm_pro/source/src/data/user.js", function (t, e, n) {
        var i = e("../../config/config"), r = e("../core/DBoy"), o = {};
        o.login = function (t, e) {
            var n = this;
            r.post(i.url.login(), {user_login: t.username, user_pass: t.password, captcha: t.checkcode}, function (i) {
                return i.error_code > 0 ? void e(i) : (r.clocal("ctoken", i.data.token, {day: 14 * t.isSave}), void n.getInfo(e))
            })
        }, o.getInfo = function (t) {
            r.post(i.url.userinfo(), {token: r.clocal("ctoken")}, function (e) {
                if (e.error_code > 0)return void t(e);
                var n = e.data;
                r.local("smzdm_identity", n.meta.is_editor), t(n)
            })
        }, o.localLogin = function (t) {
            var e = this, n = r.clocal("ctoken") ? r.clocal("ctoken") : !1;
            return n ? void e.getInfo(function (e) {
                t && t({nickname: e.display_name, isSignIn: e.checkin.web_has_checkin})
            }) : (e.logout(), !1)
        }, o.logout = function (t) {
            r.local("smzdm_identity", !1), r.clocal("ctoken", !1), t && t()
        }, n.exports = o
    }), require.register("smzdm_pro/source/src/ext/maxthon.js", function (t, e, n) {
        var i = e("../core/DBoy"), r = i.unit, o = function () {
            return r.browType().maxthon ? void 0 !== o.unique ? o.unique : (this.init(), void(o.unique = this)) : !1
        };
        o.prototype = {
            open: !1, init: function () {
                var t = this;
                t.open = !0, t.rt = window.external.mxGetRuntime()
            }, popup: function (t) {
                var e = this;
                e.setBadge(""), e.rt.onAppEvent = function (n) {
                    n.action && "panel" === n.action.type && ("ACTION_SHOW" === n.type && t.fill(), "ACTION_HIDE" === n.type && (t.page = 1, e.setBadge("")))
                }
            }, setBadge: function (t) {
                var e = this, t = parseInt(t);
                e.rt.icon.showBadge(t > 0 ? t : "")
            }, "goto": function (t, e) {
                var n = this, i = arguments, r = n.rt.create("mx.browser.tabs"), e = e || function () {
                    }, o = n.local("open_back") || "on", a = {
                    url: t.indexOf("option") > 0 ? n.rt.getPrivateUrl() + "html/options.html" : t,
                    activate: "off" == o
                };
                "boolean" == typeof i[1] && ("on" == o && (a.activate = !1), a.activate = 1 == i[1] ? !0 : !1, e = i[2] || function () {
                    }), r.newTab(a, e)
            }, getDetails: function (t) {
                i.getJSON("../def.json", function (e) {
                    t(e[0])
                })
            }, local: function (t, e) {
                var n = this;
                return "undefined" != typeof e ? n.rt.storage.setConfig(t, e) : n.rt.storage.getConfig(t)
            }, openOption: function () {
                var t = this;
                t.goto(t.rt.getPrivateUrl() + "html/options.html")
            }, notice: function (t) {
                var n = this, t = t || {}, r = (new Date).getHours() + ":" + (new Date).getMinutes(), o = n.local("item_time1") || 0, a = n.local("item_time2") || 0, s = "on" == n.local("noti_time") && i.unit.time_range(o, a, r) ? !0 : !1;
                0 == s && "on" == n.local("noti_desktop") && (n.notModel().create(t.title.substr(0, 40), {
                    icon: t.iconUrl || "http://res.smzdm.com/images/logo_64.png",
                    body: t.message.substr(0, 95) || ""
                }, {
                    click: function () {
                        e("../data/message").isRead(t.msg_id), n.goto(t.link1), this.close()
                    }
                }, 5e3), "on" == n.local("noti_sound") && new Audio(n.rt.getPrivateUrl() + "/assets/notify.mp3").play())
            }, notModel: function () {
                var t = {};
                return t = "Notification"in window && "permission"in Notification ? {
                    isSupport: !0,
                    permission: Notification.permission,
                    requestPermission: function (t) {
                        "default" === this.permission ? Notification.requestPermission(function (e) {
                            this.permission = e, t && t(e)
                        }.bind(this)) : t && t(this.permission)
                    },
                    create: function (t, e, n, i, r) {
                        function o(t, e, n, i, r) {
                            var o = new Notification(t, e), a = null;
                            if (n) {
                                var s;
                                for (s in n)o.addEventListener(s, n[s], !1)
                            }
                            i && (a = setTimeout(function () {
                                o.close()
                            }, i)), r && r(o, a)
                        }

                        if ("granted" === this.permission)o(t, e, n, i, r); else {
                            if ("denied" === this.permission)return void(r && r("denied"));
                            this.requestPermission(function (a) {
                                "granted" === a ? o(t, e, n, i, r) : r && r(a)
                            })
                        }
                    }
                } : "webkitNotifications"in window ? {
                    isSupport: !0, permission: function () {
                        var t = window.webkitNotifications, e = t.checkPermission();
                        return 0 === e ? "granted" : 2 === e ? "deined" : "default"
                    }(), requestPermission: function (t) {
                        if ("default" === this.permission) {
                            var e = window.webkitNotifications;
                            e.requestPermission(function () {
                                var n = e.checkPermission();
                                0 === n ? (this.permission = "granted", t && t("granted")) : 2 === n ? (this.permission = "deined", t && t("denied")) : (this.permission = "default", t && t("default"))
                            }.bind(this))
                        } else t && t(this.permission)
                    }, create: function (t, e, n, i, r) {
                        function o(t, e, n, i, r) {
                            e || (e = {});
                            var o = a.createNotification(e.icon || "", t, e.body || t), s = null;
                            if ("tag"in e && (o.replaceId = e.tag), "dir"in e && (o.dir = e.dir), "lang"in e && (o.lang = e.lang), o.show(), n) {
                                var l;
                                for (l in n)o.addEventListener(l, n[l], !1)
                            }
                            i && (s = setTimeout(function () {
                                o.cancel()
                            }, i)), r && r(o, s)
                        }

                        var a = window.webkitNotifications;
                        if ("granted" === this.permission)o(t, e, n, i, r); else {
                            if ("denied" === this.permission)return void(r && r("denied"));
                            this.requestPermission(function (a) {
                                "granted" === a && o(t, e, n, i, r)
                            })
                        }
                    }
                } : {
                    isSupport: !1, permission: "denied", requestPermission: function (t) {
                        t && t("unsupported")
                    }, create: function (t, e, n, i, r) {
                        r && r("unsupported")
                    }
                }
            }
        }, n.exports = o
    }), require.register("smzdm_pro/source/src/log/main.js", function (t, e, n) {
        var i = e("./logger"), r = (e("./routine"), e("./config/config").log);
        i.config(r), i.onError(), n.exports = i
    }), require.register("smzdm_pro/source/src/log/logger.js", function (t, e, n) {
        var i = e("./model"), r = new i, o = {}, a = null;
        o.config = function (t) {
            a = t
        }, o.info = function (t) {
            r.save("info", t)
        }, o.debug = function (t) {
            console.debug(t), r.save("bug", t)
        }, o.error = function (t) {
            console.error(t), r.save("error", t)
        }, n.exports = o
    }), require.register("smzdm_pro/source/src/log/model.js", function (t, e, n) {
        var i = e("./src/data/main"), r = function () {
        };
        r.hasModel = function () {
            return null !== i.local("smzdm_log")
        };
        var o = r.prototype;
        o.save = function (t, e) {
            var n = this.create(), i = (new Date).getTime();
            n[i] = {type: t, msg: e}, this.update(n)
        }, o.create = function () {
            return r.hasModel() ? i.parseJSON(i.local("smzdm_log")) : {}
        }, o.update = function (t) {
            i.local("smzdm_log", JSON.stringify(t))
        }, o.clear = function () {
            i.local("smzdm_log", "{}")
        }, n.exports = r
    }), require.register("smzdm_pro/source/src/log/routine.js", function (t, e, n) {
        var i = e("./logger");
        i.routine = function (t) {
            try {
                t()
            } catch (e) {
                i.error(e)
            }
        }, i.onError = function (t) {
            window.onerror = function (e) {
                i.error(e), t && t(e)
            }
        }, n.exports = i
    }), require.register("smzdm_pro/source/plug/logo.js", function (t, e, n) {
        var i = e("../src/core/DBoy"), r = e("../lib/avalon"), o = e("../lib/jquery"), a = r.define("logoRange", function (t) {
            t.menuShow = !1, t.pageWidth = null, t.left = 0, t.door = !0, t.plugs = [], t.title = {}, t.content = {}, t.inTitle = function (t, e) {
                var n = o(t).find("section").outerWidth(), i = o(t).offset().left, r = a.pageWidth || document.body.offsetWidth, s = o(t).offsetLeft, l = o(t).offsetWidth, c = s;
                a.title = e.$model, a.content = e.$model, a.door = !0, n + i > r && (c = s - n + l), a.left = c
            }, t.closeDoor = function () {
                a.door = !1
            }, t.outContent = function () {
                a.door && (a.title = {}, a.content = {})
            }, t.smzdmLogoClick = function () {
                a.menuShow = 1 == a.menuShow ? !1 : !0, 0 == a.menuShow && (a.title = {}, a.content = {})
            }, t.dt = null, t.smzdmLogo = function () {
                var t = document.getElementById("smzdmLogoRange");
                t.style.right = "50px", t.style.top = "-10px", a.dt && clearInterval(a.dt);
                var e = 1, n = 1, i = .2, r = .7, o = 20;
                a.dt = setInterval(function () {
                    if (t) {
                        var o = parseInt(t.style.right) + e, s = parseInt(t.style.top) + n;
                        t.style.right = o + "px", t.style.top = s + "px", o > 1e3 && clearInterval(a.dt), 200 > s ? n += 2 : (e = n > 0 ? n * i : 0, n *= n > 0 ? -1 * r : 0)
                    }
                }, o)
            }, t.load = function () {
                i.getDOM(i.unit.toUrl("/temp/logo.html"), function (t) {
                    var e = o("body");
                    e.after(t), a.smzdmLogo(), r.scan()
                })
            }, t.fill = function (t) {
                a.pageWidth = t.pageWidth;
                for (var n = 0, i = t.fn, r = i.length; r > n; n++) {
                    var o = e("./" + i[n]);
                    o.init(t), a.plugs.push(o), o.fill(a)
                }
            }, t.init = function (t) {
                a.fill(t), a.load(t)
            }
        });
        n.exports = a
    }), require.register("smzdm_pro/source/plug/dialog.js", function (t, e, n) {
        var i = e("../lib/jquery"), r = function (t, e, n) {
            return new r.init(t, n, e)
        };
        r.init = function (t, e, n) {
            return this.$tager = i(t), this.config = {
                left: n.left || 0,
                top: n.top || 0,
                rex: n.rex,
                ignore: n.ignore
            }, this.onEvent(e), this.$tager
        }, r.init.prototype = r.proto = r.prototype, r.proto.onEvent = function (t) {
            var e = this;
            i(document.body).on("mouseenter", this.$tager.selector, function () {
                var n = i(this), o = e.__getElement(n);
                if (o && o.length) {
                    if (e.config.ignore && n.parents(e.config.ignore).length)return;
                    i("[data-highcharts-chart]").hide(), o.show(), r.position(n, o, e.config), t && t("show", o), o.one("mouseleave", function () {
                        o.hide(), t && t("hide", o)
                    })
                }
            })
        }, r.proto.__getElement = function (t) {
            var e = r.filter(t.attr("href"), this.config.rex);
            return e ? i("#ext-trend-" + e[1]) : void 0
        }, r.position = function (t, e, n) {
            var r = 0, o = 0, t = t.children().length ? t.children() : t;
            r = t.offset().left + t.outerWidth() + 260 + n.left < i(document.body).outerWidth() ? t.offset().left + t.outerWidth() + n.left : t.offset().left - e.outerWidth() - n.left, o = e.outerHeight() < t.outerHeight() ? t.offset().top + t.outerHeight() / 2 + n.top : t.offset().top + n.top, e.offset({
                left: r,
                top: o
            })
        }, r.filter = function (t, e) {
            return t && -1 == t.indexOf("javascript") ? t.match(e) : void 0
        }, n.exports = r
    }), require.register("smzdm_pro/source/plug/chart.js", function (t, e, n) {
        var i = e("../src/core/DBoy"), r = e("../lib/jquery"), o = e("../lib/avalon"), a = (e("../lib/highcharts"), e("../src/data/chart")), s = e("../src/data/difference"), l = new (e("../src/core/emitter")), c = o.define("chartRange", function (t) {
            t.name = "\u4EF7\u683C\u8D70\u52BF", t.el = "", t.status = !0, t.istime = 12, t.data = {}, t.init = function () {
                i.getDOM(i.unit.toUrl("/temp/chart.html"), function (t) {
                    c.el = t
                })
            }, t.fill = function (t) {
                a.getOne(function (e) {
                    var n = t.plugs;
                    try {
                        if (!e)for (var i = 0, r = n.length; r > i; i++)if ("\u4EF7\u683C\u8D70\u52BF" === n[i].name)return n.removeAt(i), !1;
                        l.emit("footmark_curUrl", e), c.data = e, c.draw()
                    } catch (o) {
                    }
                })
            }, t.draw = function (t, e) {
                var t = t || c.istime, n = a.createSeries(c.data.WebsiteName, c.data.PriceSeries, t), i = a.createCon(n.series, n.Ymax);
                r("#smzdm_charts").highcharts(i), e || s.auto(i, function (t) {
                    r("#smzdm_charts").highcharts(t)
                })
            }, t.changeTime = function (t) {
                c.istime = t, c.draw(t, !0)
            }
        });
        n.exports = c
    }), require.register("smzdm_pro/source/plug/charts.js", function (t, e, n) {
        var i = e("../lib/jquery"), r = e("../src/core/DBoy"), o = e("./dialog"), a = (e("../lib/highcharts"), e("../src/data/chart")), s = {};
        s.init = function (t) {
            var e = t.links, n = t.regex, s = (t.currency, t.ignore), l = [];
            o(e, {rex: n, top: -50, ignore: s}), r.each(i(e), function (t, e) {
                var r = i(e).attr("href");
                n.test(r) && l.push(r)
            }), a.getMore(l, function (t) {
                for (var e in t) {
                    var r = t[e], o = a.createSeries(r.WebsiteName, r.PriceSeries), s = a.createCon(o.series, o.Ymax, {
                        width: 250,
                        height: 180
                    }), l = (t[e].Url + "/").match(n)[1];
                    i('<div id="ext-trend-' + l + '" class="smzdm-trend hide"></div>').appendTo("body").highcharts(s)
                }
            })
        }, n.exports = s
    }), require.register("smzdm_pro/source/plug/comment.js", function (t, e, n) {
        var i = e("../src/data/comment"), r = e("../src/core/DBoy"), o = avalon.define("commentRange", function (t) {
            t.el = "", t.name = "\u62A5\u9519", t.status = !0, t.content = "", t.link = window.location.href, t.email = r.local("smzdm_submit_email") || "", t.success = !1, t.errorMsg = "", t.$watch("email", function (t) {
                "" != t && r.local("smzdm_submit_email", t)
            }), t.init = function () {
                r.getDOM(r.unit.toUrl("/temp/comment.html"), function (t) {
                    o.el = t
                })
            }, t.fill = function () {
            }, t.submit = function () {
                var t = new i({content: o.content, link: o.link, email: o.email});
                t.submit(function (t) {
                    0 == t.error_code ? (o.success = !0, o.errorMsg = "", o.content = "", o.email = "", o.link = window.location.href, setTimeout(function () {
                        o.success = !1
                    }, 3e3)) : o.errorMsg = t.error_msg
                })
            }, t.changeHeight = function () {
                for (var t = o.content.split("\n"), e = 32, n = t.length, i = 0, r = t.length; r > i; i++)t[i].length >= e && (n += Math.ceil(t[i].length / e));
                this.rows = n
            }
        });
        n.exports = o
    }), require.register("smzdm_pro/source/plug/panel.js", function (t, e, n) {
        var i = e("../src/core/DBoy"), r = e("../lib/avalon"), o = e("../lib/jquery"), a = r.define("panelRange", function (t) {
            t.domain = "", t.pageWidth = null, t.left = 0, t.door = !0, t.plugs = [], t.title = {}, t.content = {}, t.inTitle = function (t, e) {
                var n = o(t.target).find("section").outerWidth(), i = o(t.target).offset().left, r = a.pageWidth || document.body.offsetWidth, s = t.target.offsetLeft, l = t.target.offsetWidth, c = s;
                a.title = e.$model, a.content = e.$model, a.door = !0, n + i > r && (c = s - n + l), a.left = c
            }, t.closeDoor = function () {
                a.door = !1
            }, t.outContent = function () {
                a.door && (a.title = {}, a.content = {})
            }, t.load = function (t) {
                i.getDOM(i.unit.toUrl("/temp/panel.html"), function (e) {
                    var n = o(t.position);
                    n.parent().is("ul") && (e = o('<li id="smzdm_li">' + e + "</li>")), n.after(e), r.scan()
                })
            }, t.fill = function (t) {
                a.pageWidth = t.pageWidth;
                for (var n = 0, i = t.fn, r = i.length; r > n; n++) {
                    var o;
                    if (i[n].indexOf("_") > -1) {
                        var s = i[n].split("_");
                        o = e("./" + s[0] + "/" + a.domain + "/" + s[1])
                    } else o = e("./" + i[n]);
                    o.init(t), a.plugs.push(o), o.fill(a)
                }
            }, t.init = function (t, e) {
                a.domain = e, a.fill(t), a.load(t)
            }
        });
        n.exports = a
    }), require.register("smzdm_pro/source/plug/sea.js", function (t, e, n) {
        var i = new (e("../src/core/emitter")), r = e("../lib/jquery"), o = e("../src/core/DBoy"), a = e("../config/ship"), s = e("../src/data/price"), l = e("../src/core/node"), c = avalon.define("priceRange", function (t) {
            t.name = "\u5230\u624B\u4EF7", t.el = "", t.status = !1, t.boxStatus = !1, t.price = {}, t.select = {
                span1: !1,
                span2: !1
            }, t.list1 = [], t.list2 = [], t.item1 = {}, t.item2 = {}, t.options = {}, t.fillPrice = function (t) {
                var t = t || {
                        blank: !0,
                        extendPrice: "",
                        extendWeight: "",
                        getchinaprice: ["", ""],
                        getdollarprice: ["", ""],
                        num: 1,
                        rate: "",
                        autoRate: "",
                        shippingINT: "",
                        shippingUSA: "",
                        singlePrice: "",
                        singleWeight: "",
                        type: "\uFFE5",
                        weight: ["", ""]
                    };
                c.price = t;
                var e = "\u5230\u624B\u4EF7\uFF1A" + t.getchinaprice[0] + "\uFF08" + t.getchinaprice[1] + "\uFF09";
                r("#smzdm_panel li:eq(1)>span").text(e)
            }, t.init = function (t) {
                c.options = t, o.getDOM(o.unit.toUrl("/temp/sea.html"), function (t) {
                    c.el = t
                }), l.onChange(t.listen, function () {
                    c.fillPrice(s.pricezoom(s.achieve(t), c.item2.$model))
                })
            }, t.fill = function (t) {
                i.on("closeDoor", function () {
                    t.closeDoor()
                }), c.fillSelect(a), c.status = !0, setTimeout(function () {
                    c.fillPrice(s.pricezoom(s.achieve(c.options), c.item2.$model))
                }, 1e3)
            }, t.fillSelect = function (t) {
                c.list1 = [], c.list2 = [];
                for (var e in t)c.list1.push(t[e]);
                c.list2 = c.list1[0].lines, c.item1 = c.list1[0], c.item2 = c.list2[0]
            }, t.openlist = function (t) {
                i.emit("closeDoor"), c.closelist(), c.select[t] = !0
            }, t.closelist = function () {
                c.select.span1 = !1, c.select.span2 = !1
            }, t.changelist1 = function (t) {
                c.list2 = t.lines, c.item1 = t, c.item2 = c.list2[0], c.closelist()
            }, t.changelist2 = function (t) {
                c.item2 = t, c.closelist()
            }, t.openPop = function () {
                c.boxStatus = !0
            }, t.closePop = function () {
                c.boxStatus = !1
            }, t.hand_arg = {price: !1, weight: !1, rate: !1}, t.$watch("item2", function (t) {
                var e = s.achieve(c.options.$model);
                c.fillPrice(s.pricezoom(e, t, c.hand_arg.$model))
            }), t.changeWeight = function (t) {
                var e = s.achieve(c.options.$model), n = c.item2.$model;
                c.hand_arg.weight = t.target.value, c.fillPrice(s.pricezoom(e, n, c.hand_arg.$model))
            }, t.changePrice = function (t) {
                var e = s.achieve(c.options.$model), n = c.item2.$model, i = t.target.value;
                i.indexOf("$") < 0 && (i = "$" + i), c.hand_arg.price = i, c.fillPrice(s.pricezoom(e, n, c.hand_arg.$model))
            }, t.changeRate = function (t) {
                var e = s.achieve(c.options.$model), n = c.item2.$model;
                c.hand_arg.rate = t.target.value, c.fillPrice(s.pricezoom(e, n, c.hand_arg.$model))
            }, t.copy = {
                mes: "\u590D\u5236\u4EF7\u683C",
                type: "button",
                clsName: "btn btn-warning",
                text: ""
            }, t.copyExt = function () {
                var t = parseInt(c.price.getchinaprice[0].replace("\uFFE5", ""));
                t = parseFloat(.1 * t), t = 10 * Math.ceil(t), t = c.price.getdollarprice[0] + "\uFF08\u7EA6\uFFE5" + t + "\uFF09", c.copy = {
                    mes: t,
                    type: "text",
                    clsName: "copy",
                    text: "\u4F7F\u7528ctrl+c\u590D\u5236"
                }, setTimeout(function () {
                    r(".copy").select()
                }, 100)
            }, t.copyBl = function () {
                c.copy = {mes: "\u590D\u5236\u4EF7\u683C", type: "button", clsName: "btn btn-warning", text: ""}
            }
        });
        n.exports = c
    }), require.register("smzdm_pro/source/plug/size.js", function (t, e, n) {
        var i = e("../src/core/DBoy"), r = (e("../lib/jquery"), e("../lib/avalon")), o = e("../src/data/size"), a = r.define("sizeRange", function (t) {
            t.name = "\u5C3A\u7801", t.el = "", t.status = !1, t.categorize = {}, t.nav = [], t.actionNav = "", t.sub = [], t.actionSub = "", t.title = [], t.list = [], t.init = function (t) {
                return t.categorize ? (a.categorize = t.categorize, void i.getDOM(i.unit.toUrl("/temp/size.html"), function (t) {
                    a.el = t
                })) : !1
            }, t.fill = function () {
                o.getAll(a.categorize.$model, function (t) {
                    return !t || t.length <= 0 ? !1 : (a.nav = t, a.actionNav = t[0].name, a.sub = t[0].data, a.actionSub = t[0].data[0].name, a.title = t[0].data[0].title, a.list = t[0].data[0].info, void(a.status = !0))
                })
            }, t.changeNav = function (t) {
                a.actionNav = t.name, o.getSub(t.name, function (t) {
                    a.sub = t, a.actionSub = t[0].name, a.title = t[0].title, a.list = t[0].info
                })
            }, t.changeSub = function (t) {
                a.actionSub = t.name, o.getTable(a.actionNav, t.name, function (t) {
                    a.title = t.title, a.list = t.info
                })
            }
        });
        n.exports = a
    }), require.register("smzdm_pro/source/plug/stock.js", function (t, e, n) {
        var i = e("../src/core/DBoy"), r = e("../config/config"), o = avalon.define("stockRange", function (t) {
            t.name = "\u5E93\u5B58", t.el = "", t.status = !1, t.collect = [], t.state = !0, t.init = function () {
                i.getDOM(i.unit.toUrl("/temp/stock.html"), function (t) {
                    o.el = t
                })
            }, t.fill = function (t) {
                var e = t.plugs, n = !1;
                i.post(r.url.sites, {sn: r.app.tny}, function (t) {
                    for (var a = JSON.parse(t), s = 0, l = a.length; l > s; s++) {
                        var c = new RegExp(a[s]);
                        c.test(window.location.href) && (n = !0)
                    }
                    if (n)i.post(r.url.collect, {sn: r.app.tny, url: window.location.href}, function (t) {
                        return t && t.length ? (o.collect = JSON.parse(t), void(o.status = !0)) : !1
                    }); else for (var s = 0, l = e.length; l > s; s++)if ("\u5E93\u5B58" === e[s].name)return e.removeAt(s), !1
                })
            }
        });
        n.exports = o
    }), require.register("smzdm_pro/source/plug/translate.js", function (t, e, n) {
        var i = e("../config/config"), r = e("../lib/avalon"), o = e("../src/core/DBoy"), a = e("../lib/jquery"), s = {
            callback: function () {
            }, apiKey: "821027704", keyFrom: "kerring", cursorX: 0, cursorY: 0, hoverTimeout: {}, isRun: function () {
                var t = window.location.host;
                return t = t.split("."), i.embedJson[t[1]].type <= 1 ? !1 : !0
            }, init: function (t) {
                var e = this;
                e.backcall = t, a(document).on("mousemove", function (t) {
                    clearTimeout(e.hoverTimeout), e.cursorX = t.pageX, e.cursorY = t.pageY, e._callTranslate(t)
                })
            }, request: function (t, e) {
                var n = this, i = "http://fanyi.youdao.com/openapi.do?keyfrom=" + n.keyFrom + "&key=" + n.apiKey + "&type=data&doctype=json&version=1.1";
                a.getJSON(i + "&q=" + encodeURIComponent(t), function (t) {
                    if (t.error_code > 0)return !1;
                    var i = t.basic ? t.basic.explains : [];
                    if (t.explains = "", i.length > 0)for (var r = 0; r < i.length; r++)t.explains += i[r] + "<br/>"; else t.explains = i || "";
                    return t.phonetic = t.basic ? "[" + t.basic.phonetic + "]" : "", "" == t.explains ? !1 : void n.backcall(e, t)
                })
            }, _callTranslate: function (t) {
                var e = this;
                e.hoverTimeout = setTimeout(function () {
                    var n = (a(t.target), e.getWordAtPoint(a("body").get(0), e.cursorX - a(window).scrollLeft(), e.cursorY - a(window).scrollTop()));
                    n && "" != n.trim() && e.request(n, t)
                }, 2e3)
            }, getWordAtPoint: function (t, e, n) {
                if (t) {
                    var i = this, r = 0, o = 0, a = null;
                    if (3 === t.nodeType)a = i._getWord(t, e, n); else for (o = t.childNodes.length, r = 0; o > r; r++)i._tagFilter(t.childNodes[r].nodeName, ["SCRIPT", "STYLE"]) && (a = a || i.getWordAtPoint(t.childNodes[r], e, n));
                    return a
                }
            }, _tagFilter: function (t, e) {
                var n = 0, i = e.length;
                for (n = 0; i > n; n++)if (e[n] === t)return !1;
                return !0
            }, _getWord: function (t, e, n) {
                var i = t.ownerDocument.createRange();
                i.selectNodeContents(t);
                for (var r = 0, o = 0, a = null, s = i.toString(), l = (s.length, 0), c = null; c = s.match(/\b\S+\b/);) {
                    if (l = s.search(/\b\S+\b/), r = o + l, o = r + c[0].length, i.setStart(i.startContainer, r), i.setEnd(i.startContainer, o), a = i.getBoundingClientRect(), a.left <= e && a.right >= e && a.top <= n && a.bottom >= n)return c[0];
                    s = s.slice(l + c[0].length)
                }
                return null
            }
        }, l = r.define("temptranslate", function (t) {
            t.query = "", t.phonetic = "", t.explains = "", t.top = 0, t.left = 0, t.show = !1, t.init = function () {
                o.getDOM(o.unit.toUrl("/temp/translate.html"), function (t) {
                    a(document.body).append(t), l.fill()
                })
            }, t.fill = function () {
                s.init(function (t, e) {
                    var n = 10, i = -30;
                    for (var r in e)l[r] = e[r];
                    l.top = t.pageY + n, l.left = t.pageX + i, l.show = !0, setTimeout(function () {
                        l.show = !1
                    }, 8e3)
                })
            }
        });
        n.exports = l
    }), require.register("smzdm_pro/source/plug/recommend.js", function (t, e, n) {
        var i = e("../src/core/DBoy"), r = avalon.define("recommendRange", function (t) {
            t.name = "\u63A8\u8350", t.status = !1, t.init = function () {
                i.getDOM(i.unit.toUrl("/temp/recommend.html"), function (t) {
                    r.el = t
                })
            }, t.fill = function () {
            }
        });
        n.exports = r
    }), require.register("smzdm_pro/source/plug/analytics.js", function (t, e, n) {
        var i = (e("../lib/jquery"), function () {
        });
        i.start = function () {
            i.loadFile("https://ssl.google-analytics.com/ga.js", "js"), window._gaq = window._gaq || [], window._gaq.push(["_setAccount", "UA-41150971-1"]), window._gaq.push(["_trackPageview"])
        }, i.collect = function (t, e, n) {
            _gaq.push(["_trackEvent", n, t, e])
        }, i.loadFile = function (t, e, n) {
            var i = document.createElement("js" == e ? "script" : "link");
            "js" == e ? (i.src = t, i.charset = "utf-8") : "css" == e && (i.href = t, i.rel = "stylesheet", i.type = "text/css"), n && (i.onloadDone = !1, i.onload = n, i.onreadystatechange = function () {
                "loaded" === i.readyState && i.onloadDone && (i.onloadDone = !0, i.onload(), i.removeNode(!0))
            }), document.getElementsByTagName("head")[0].appendChild(i)
        }, n.exports = i
    }), require.register("smzdm_pro/source/plug/keynote.js", function (t, e, n) {
        var i = e("../lib/jquery"), r = e("../lib/avalon"), o = e("../src/core/DBoy"), a = e("../config/config"), s = e("./sea"), l = r.define("keynoteRange", function (t) {
            t.name = '<span id="smzdm_keynote" title="\u70B9\u51FB\u53D1\u9001">\u91C7\u96C6</span>', t.status = !1, t.price = {}, t.init = function () {
                l.status = !0, i(function () {
                    l.price = s.price.$model, i("#smzdm_keynote").on("click", function () {
                        l.update(function (t) {
                            t.Success && (i("#smzdm_keynote").html("\u91C7\u96C6\u6210\u529F"), i("#smzdm_keynote").parent().parent().addClass("out"), setTimeout(function () {
                                i("#smzdm_keynote").parent().parent().remove()
                            }, 1e4))
                        })
                    }).parent().parent().addClass("smzdm_keynote")
                })
            }, t.fill = function () {
            }, t.update = function (t) {
                var e = window.location.href, n = l.price, i = n.getdollarprice ? parseFloat(n.getdollarprice[0].replace(/\$|\uFFE5/g, "")) : "";
                o.post(a.url.diffSubmit, {sn: a.app.tny, url: e, type: "special", newprice: i}, function (e) {
                    t(JSON.parse(e))
                })
            }
        });
        n.exports = l
    }), require.register("smzdm_pro/source/plug/search.js", function (t, e, n) {
        var i = e("../lib/avalon"), r = e("../src/core/DBoy"), o = e("../lib/jquery"), a = e("../config/config"), s = i.define("searchRange", function (t) {
            t.name = "\u63A8\u8350", t.status = !1, t.el = "", t.options = {}, t.list = [], t.init = function (t) {
                s.options = t, r.getDOM(r.unit.toUrl("/temp/search.html"), function (t) {
                    s.el = t
                }), i.scan()
            }, t.firter = function (t) {
                return t.replace(/(undefined|\/)/g, "", t)
            }, t.fill = function () {
                var t = 0, e = function () {
                    var n;
                    return o(s.options.searchTag).each(function (t, e) {
                        n += o(e).text()
                    }), n = s.firter(n), "" == n && 5 > t ? (setTimeout(e, 800), t++, !1) : void r.getDOM("http://search.smzdm.com?s=" + encodeURI(n), function (t) {
                        var e = o(t).find("div.list_preferential");
                        if (e.length > 0) {
                            s.status = !0;
                            for (var n = 0; 5 > n; n++) {
                                var i, r = {};
                                i = o(e[n]).find('h3[class="itemName"] > a'), i.length > 0 && (r.title = i.text(), r.url = i.attr("href").indexOf("?") > 0 ? i.attr("href") + a.app.census() : i.attr("href") + "?" + a.app.census(), r.icon = o(e[n]).find("img")[0].src, r.time = o(e[n]).find('span[class="lrTime"]').text(), s.list.push(r))
                            }
                        }
                    })
                };
                e()
            }
        });
        n.exports = s
    }), require.register("smzdm_pro/source/plug/mall/tmall/login.js", function (t, e, n) {
        var i = e("../../../src/core/cookie"), r = e("../../../lib/jquery");
        window.logout = !0;
        var o = {
            checkDomain: ".taobao.com",
            checkName: "_nk_",
            tokenKey: "_tb_token_",
            tabs: {},
            f: +new Date,
            init: function (t) {
                var e = this, n = null, r = 500;
                e.statusCheck(t), e.jumpMonitor(), i.on("onChanged", function (t) {
                    var i = t.cookie, o = t.cause;
                    if (i.domain == e.checkDomain && i.name == e.checkName) {
                        var a = t.removed;
                        "overwrite" != o && a != window.logout && (clearTimeout(n), n = setTimeout(function () {
                            window.logout = a, f = +new Date, e.fire("statuschange", {logout: window.logout})
                        }, r))
                    }
                })
            },
            jumpMonitor: function () {
                var t = this, e = chrome.extension.getURL("html/index.html"), n = e, i = /http:\/\/i.taobao.com\/my_taobao.htm\?nekot=[\S]+/i, o = /http:\/\/www.taobao.com\/\?style=miniall[\S]*&quicklogin=true/i;
                chrome.tabs.onCreated.addListener(function (i) {
                    var r = i.url, o = i.id;
                    ~r.indexOf(e) && (t.tabs[o] = i, n = r)
                }), chrome.tabs.onRemoved.addListener(function (e) {
                    delete t.tabs[e]
                }), chrome.webNavigation.onBeforeNavigate.addListener(function (e) {
                    var o = e.tabId;
                    if (t.tabs[o]) {
                        var a = e.url || "";
                        a.match(i) && (r.get(a), chrome.tabs.update(o, {url: n, active: !0, selected: !0}))
                    }
                }), chrome.webNavigation.onCommitted.addListener(function (e) {
                    var i = e.tabId, a = +new Date;
                    if (t.tabs[i] || 1e4 > a - t.f) {
                        var s = e.url || "";
                        s.match(o) && (r.get(s), chrome.tabs.update(i, {url: n, active: !0, selected: !0}))
                    }
                })
            },
            getUserName: function (t) {
                var e = this;
                i.get({domain: e.checkDomain, name: e.checkName}, function (e) {
                    e = decodeURI(e), e = unescape(e.replace(/\\(u[0-9a-fA-F]{4})/gm, "%$1")), t && t(e)
                })
            },
            getToken: function (t) {
                var e = this;
                b.get({domain: e.checkDomain, name: e.tokenKey}, function (e) {
                    t && t(e)
                })
            },
            statusCheck: function (t) {
                var e = this;
                e.getUserName(function (e) {
                    window.logout = "null" == e, t(e)
                })
            }
        };
        n.exports = o
    }), require.register("smzdm_pro/source/plug/mall/tmall/order.js", function (t, e, n) {
        var i = e("../../../lib/avalon"), r = e("../../../src/core/DBoy"), o = e("./login"), a = {}, s = i.define("userRange", function (t) {
            t.open = !1, t.userinfo = {}
        }), l = i.define("loginRange", function (t) {
            t.url = "", t.open = !1
        }), a = i.define("orderRange", function (t) {
            t.open = !1, t.mall = "tmall", t.data = [], t.init = function (t) {
                o.init(function (t) {
                    if (window.logout) {
                        s.open = !1, l.open = !0, a.open = !1;
                        var n = e("../../../config/mall/tmall").conf;
                        l.url = n.login.url
                    } else {
                        var i = "smzdm_order_" + a.mall;
                        s.open = !0, l.open = !1, a.open = !0, s.userinfo.username = t, a.data = r.local(i) ? JSON.parse(r.local(i)) : []
                    }
                }), r.getDOM(r.unit.toUrl("/temp/mall/tmall.html"), function (e) {
                    t && t(e)
                })
            }
        });
        n.exports = a
    }), require.register("smzdm_pro/source/plug/mall/tmall/grab.js", function (t, e, n) {
        var i = e("../../../lib/jquery"), r = e("../../../src/core/message"), o = {
            name: '<span id="smzdm_grab">\u81EA\u52A8\u4E0B\u5355</span>',
            mall: "tmall",
            status: !0,
            init: function () {
            },
            analysisItemInfo: function (t) {
                var e = {}, n = !1;
                try {
                    var i = t.match(/<body[^>]*>([\s\S]+)<\/body>/i)[1], r = document.createDocumentFragment(), o = document.createElement("div");
                    o.innerHTML = i, r.appendChild(o);
                    for (var a, s = r.querySelectorAll("script"), l = 0, c = s.length; c > l; ++l)if (!s[l].src && (a = s[l].text, -1 !== a.indexOf("TShop.Setup("))) {
                        var u = a.match(/TShop.Setup\(([\s\S]+)\n.*?\)\;.*?\n.*?\}\)\(\);/);
                        u = u && u[1] || null, a = JSON.parse(u);
                        break
                    }
                    for (var p = r.querySelector("#J_FrmBid") && r.querySelectorAll('input[type="hidden"]') || [], l = 0; l < p.length; ++l)"undefined" != typeof p[l].name && "" != p[l].name && (e[p[l].name] = p[l].value);
                    return n = !!a.valItemInfo && a.valItemInfo.skuMap, e.allow_quantity = a.itemDO.quantity.toString() || "", e.buy_param = [a.itemDO.itemId, 1, n ? a.valItemInfo.skuMap : 0], e.quantity = 1, e._tb_token_ = "", e.skuInfo = "", e.use_cod = "false", e._input_charset = "UTF-8", e.destination = "", e.skuId = "", e.bankfrom = "", e.from_etao = "", e.item_id_num = a.itemDO.itemId, e.item_id = a.itemDO.itemId, e.auction_id = a.itemDO.itemId, e.seller_rank = "0", e.seller_rate_sum = "0", e.is_orginal = "no", e.point_price = "false", e.secure_pay = "true", e.pay_method = "\u6B3E\u5230\u53D1\u8D27", e.from = "item_detail", e.buy_now = a.itemDO.reservePrice, e.current_price = a.itemDO.reservePrice, e.auction_type = a.itemDO.auctionType, e.seller_num_id = a.itemDO.userId, e.activity = "", e.chargeTypeId = "", r = null, {
                        itemInfo: e,
                        skuMap: n
                    }
                } catch (d) {
                    return !1
                }
            },
            getItemInfo: function (t, e) {
                var n = parseInt(t) || 0, r = n > 0 ? "http://item.taobao.com/item.htm?id=" + n : t, o = this;
                i.ajax({url: r, method: "GET"}).complete(function (t) {
                    if ("OK" === t.statusText) {
                        var n = o.analysisItemInfo(t.responseText);
                        e && e(n)
                    }
                })
            },
            getGrabInfo: function () {
                var t = this;
                t.getItemInfo(j.url, function (e) {
                    e ? (e = t.mergeItemInfo(j, e), e = t.makeOrderInfo(e), t.order_confirm_order(e.postData, function (t) {
                        var n = {errno: 1, msg: "\u83B7\u53D6\u5546\u54C1\u4FE1\u606F\u5931\u8D25"};
                        if (t) {
                            try {
                                var i = JSON.parse(t.data);
                                for (var r in i)if (-1 != r.indexOf("itemPay_")) {
                                    e.price.now = i[r].fields.price, e.price.sum = e.price.now * e.amount.now, i[r].fields.prePay && (e.price.prePay = i[r].fields.prePay, e.price.sum = e.price.prePay * e.amount.now), e.price.sum2 = e.price.now * e.amount.now;
                                    break
                                }
                                for (var r in i)if (-1 != r.indexOf("service_")) {
                                    var o = i[r].fields && 1 * i[r].fields.choicePrice || 0;
                                    e.price.sum += o, e.price.sum2 += o;
                                    break
                                }
                                n = {errno: 0, data: e}
                            } catch (a) {
                            }
                            k && k(n)
                        } else k && k({errno: 1, msg: "\u83B7\u53D6\u5546\u54C1\u4FE1\u606F\u5931\u8D25"})
                    })) : k && k({errno: 1})
                })
            },
            fill: function () {
                var t = this;
                i(function () {
                    var e = i(".tb-key"), n = e.find("[data-property]"), o = e.find("#J_Amount"), a = function () {
                        var t = !0;
                        return n.each(function (e, n) {
                            t = t && i(n).find(".tb-selected").length > 0
                        }), t
                    }, s = function () {
                        var t = o.find("input"), e = o.find("#J_EmStock"), n = o.find("#J_StockTips"), i = +t.val(), r = +((e.html() || "").match(/[\d]+/) || ["-1"])[0], a = +((n.html() || "").match(/[\d]+/) || ["-1"])[0];
                        return (r >= i || -1 == r) && (a >= i || -1 == a)
                    }, l = e.find("#J_regionSellServer"), c = function () {
                        var t = l.find(".tm-uniqueSer.serviceList.tb-selected"), e = t.data("value"), n = t.find("[data-spm-anchor-id]").data("spm-anchor-id"), i = t.text() || "", r = i.match(/([\S]+)\uFFE5([\S]+)/) || {}, o = {
                            value: e,
                            title: r[1],
                            monet: r[2],
                            spmAnchorId: n
                        };
                        return o
                    }, u = e.find("#J_Progressive"), p = function () {
                        var t = u.find(".tb-selected"), e = t.data("key"), n = t.find("[data-spm-anchor-id]").data("spm-anchor-id"), i = t.find(".tm-msg").text() || "", r = i.match(/\uFFE5([\d]+.?[\d]+)(x[\d]+\u671F)/) || {}, o = {
                            key: e,
                            title: r[2],
                            money: r[1],
                            spmAnchorId: n
                        };
                        return o
                    }, d = function () {
                        return a() && s()
                    }, h = function () {
                        var t = [];
                        return n.each(function (e, n) {
                            var r = i(n).data("property"), o = i(n).find(".tb-selected"), a = o.find("[data-spm-anchor-id]").data("spm-anchor-id"), s = o.data("value"), l = o.attr("title") || o.find("span").text(), c = {};
                            c[r] = {value: s, title: l, spmAnchorId: a}, t.push(c)
                        }), t
                    }, f = function () {
                        var t = location.href, e = h(), n = +o.find("input").val(), i = c(), r = p();
                        return {url: t, property: e, amount: n, service: i, installment: r}
                    }, m = i("#smzdm_grab");
                    m.on("click", function () {
                        if (i(this).hasClass("disabled")) {
                            var e = i("#J_LinkBuy, #J_LinkBasket")[0];
                            e && e.click(), i(".tb-btn-wait, .tm-change-left").length > 0 && alert("\u8BF7\u5148\u9009\u62E9\u5546\u54C1\u4FE1\u606F\uFF0C\u624D\u80FD\u52A0\u5165\u81EA\u52A8\u4E0B\u5355\u5217\u8868\u3002")
                        } else r.emit({type: "addOrder", params: f(), mall: t.mall}, function () {
                        })
                    }).addClass(d() ? "disabled" : "");
                    var g = i('<div id="smzdm_grab_btn" title="\u52A0\u5165\u540E\u53EA\u9700\u8BBE\u5B9A\u62A2\u8D2D\u65F6\u95F4\uFF0C\u5230\u65F6\u81EA\u52A8\u62CD\u4E0B\u5E76\u63D0\u9192\u4ED8\u6B3E">\u52A0\u5165\u81EA\u52A8\u4E0B\u5355</div>');
                    g.click(function () {
                        alert("smzdm_grab_btn")
                    }).addClass(d() ? "enable" : ""), i("#J_LinkBuy").before(g), setInterval(function () {
                        d() ? (g.addClass("enable"), m.removeClass("disabled")) : (g.removeClass("enable"), m.addClass("disabled"))
                    }, 800)
                })
            }
        };
        n.exports = o
    }), require.register("smzdm_pro/source/view/background.js", function (t, e) {
        var n = e("../src/core/DBoy"), i = e("../src/core/notice"), r = e("../src/data/message"), o = e("../src/data/favorites"), a = e("../src/data/options"), s = e("../plug/analytics"), l = e("../config/config");
        i.on(function (t, e) {
            r.isRead(t.msg_id), n.unit.browType().se && (e = 0 == e ? 1 : 0), 0 == e ? n.unit.goto(t.link1, !0) : 1 == e ? o.add({
                msg_id: t.msg_id,
                type: l.app.variety[t.variety]
            }, function () {
            }) : n.unit.goto(t.link1, !0)
        }), a.base(function () {
            r.init(), a.init(), s.start(), e("../src/core/message").on(), e("../src/core/ext")
        })
    }), require.register("smzdm_pro/source/view/notification.js", function (t, e) {
        var n = e("../src/core/DBoy"), i = e("../src/data/message"), r = e("../lib/avalon"), o = (e("../src/core/notice"), document.createElement("a"));
        o.href = location.href;
        var a = function () {
            for (var t, e = {}, n = o.search.replace(/^\?/, "").split("&"), i = 0, r = n.length; r > i; i++)n[i] && (t = n[i].split("="), e[t[0]] = t[1]);
            return e
        }(), s = r.define("notification", function (t) {
            t.msg = {}, t.title = "", t.date = "", t.desc = "", t.imgSrc = "", t.isBuy = !0, t.toInfo = function (t) {
                n.unit.goto(t)
            }, t.fill = function () {
                a.msg_id > 0 ? i.getNotification(a.msg_id, function (t) {
                    s.msg = t, "" == s.msg.msg_buyurl && (s.isBuy = !1), s.title = decodeURI(s.msg.msg_title), s.date = n.unit.getTime(parseInt(1e3 * s.msg.msg_date)), s.desc = decodeURI(s.msg.msg_desc), s.imgSrc = "logo" == s.msg.msg_picurl ? "/assets/img/logo128.png" : s.msg.msg_picurl || "/assets/img/logo128.png"
                }) : (s.title = "\u5021\u5BFC\u7406\u6027\u6D88\u8D39\uFF0C\u4EAB\u53D7\u54C1\u8D28\u751F\u6D3B", s.date = "2012:12:12 12:12:12", s.desc = "\u201C\u4EC0\u4E48\u503C\u5F97\u4E70\u201D\u662F\u4E00\u4E2A\u4E2D\u7ACB\u7684\uFF0C\u81F4\u529B\u4E8E\u5E2E\u52A9\u5E7F\u5927\u7F51\u53CB\u4E70\u5230\u66F4\u6709\u6027\u4EF7\u6BD4\u7F51\u8D2D\u4EA7\u54C1\u7684\u63A8\u8350\u7C7B\u535A\u5BA2\u3002\u201C\u4EC0\u4E48\u503C\u5F97\u4E70\u201D\u7684\u76EE\u7684\u662F\u5728\u5E2E\u52A9\u7F51\u53CB\u63A7\u5236\u7F51", s.msg.msg_url = "http://www.smzdm.com", s.msg.msg_buyurl = "http://www.smzdm.com", s.imgSrc = "/assets/img/logo128.png")
            }
        });
        s.fill()
    }), require.register("smzdm_pro/source/view/options.js", function (t, e) {
        var n = e("../lib/avalon"), i = e("../src/core/notice"), r = (e("../src/data/message"), e("../src/data/options")), o = e("../src/core/DBoy"), a = o.unit, s = e("../config/config"), l = e("../plug/analytics");
        l.start(), n.define("navbarRange", function (t) {
            t.name = JSON.parse(o.local("manifest")).name || "", t.about = function () {
                d.show()
            }
        });
        var c = n.define("baseRange", function (t) {
            t.option = {
                desktop: "on",
                muteTime: "off",
                beginTime: "23:00",
                closureTime: "7:00",
                sound: "on",
                count: "100",
                locus: "cn;global",
                open_back: "on"
            }, t.baidubrowser = o.unit.browType().baidu ? !1 : !0, t.audiBtn = "\u8BD5\u542C", t.isPlay = !1, t.changeCheckBox = function (t) {
                r.setBase(t), c.fill(), l.collect(t, "change", "base", o.local(t))
            }, t.showReminder = function () {
                i.notice(i.demo)
            }, t.audition = function () {
                var t = new Audio("/assets/notify.mp3");
                t.addEventListener("play", function () {
                    c.audiBtn = "\u64AD\u653E\u4E2D...", c.isPlay = !0
                }), t.addEventListener("ended", function () {
                    c.audiBtn = "\u8BD5\u542C", c.isPlay = !1
                }), t.play()
            }, t.changeCount = function (t) {
                c.option.count = t, r.setLimit(t)
            }, t.changeBeginTime = function (t) {
                r.setBeginTime(t.target.value)
            }, t.changeclosureTime = function (t) {
                r.setClosureTime(t.target.value)
            }, t.fill = function () {
                c.option = r.getBase()
            }
        });
        c.fill();
        var u = n.define("pullRange", function (t) {
            t.option = {locus: "cn;global"}, t.specialList = [], t.categoryList = [], t.other = "on", t.basic = "on", t.fill = function () {
                var t = r.getPush();
                u.specialList = t.specialList, u.categoryList = t.categoryList.slice(0), u.other = r.getOther(), u.basic = r.getBasic(), u.option.locus = o.local("item_location")
            }, t.changeLocus = function (t) {
                u.option.locus = t, r.setLocation(t)
            }, t.changeEnable = function (t) {
                r.changePull(t), l.collect(t.id, "change", "base", t.value)
            }, t.changeBasic = function () {
                u.basic = r.changeBasic()
            }, t.changeOther = function () {
                u.other = r.changeOther()
            }
        });
        u.fill();
        var p = n.define("keywordRange", function (t) {
            t.keyword = "", t.onBlur = function () {
                r.setKeyword(p.keyword)
            }, t.fill = function () {
                p.keyword = r.getKeyword()
            }
        });
        p.fill();
        var d = n.define("aboutRange", function (t) {
            t.name = JSON.parse(o.local("manifest")).name, t.isShow = !1, t.tabId = 0, t.btnStr = "\u53D1\u9001", t.isSubmit = !1, t.question_desc = "", t.os_version = "", t.username = "", t.contact_info = "", t.error = "", t.show = function () {
                d.isShow = !0
            }, t.hide = function () {
                d.isShow = !1
            }, t.grade = function () {
                o.unit.goto("https://chrome.google.com/webstore/detail/febhedbcmjfndciicgfnmaohcaopileb/reviews")
            }, t.changeTab = function (t) {
                d.tabId = t
            }, t.$watch("error", function (t) {
                "" != t && setTimeout(function () {
                    d.error = ""
                }, 8e3)
            }), t.submit = function () {
                return "" == d.question_desc ? d.error = "\u95EE\u9898\u63CF\u8FF0\u4E0D\u80FD\u4E3A\u7A7A" : "" == d.username ? d.error = "\u59D3\u540D\u6216\u7F51\u540D\u4E0D\u80FD\u4E3A\u7A7A" : "" == d.os_version ? d.error = "\u73AF\u5883\u4FE1\u606F\u4E0D\u80FD\u4E3A\u7A7A" : "" == d.contact_info ? d.error = "\u8054\u7CFB\u65B9\u5F0F\u4E0D\u80FD\u4E3A\u7A7A" : (d.btnStr = "\u53D1\u9001\u4E2D....", d.isSubmit = !0, void r.reportSub({
                    question_desc: d.question_desc,
                    os_version: d.os_version,
                    username: d.username,
                    contact_info: d.contact_info
                }, function () {
                    h.show("\u63D0\u4EA4\u6210\u529F"), d.hide(), d.tabId = 0, d.btnStr = "\u53D1\u9001", d.isSubmit = !1, d.error = "", d.question_desc = "", d.os_version = "", d.username = "", d.contact_info = ""
                }))
            }, t.current = {
                "new": !1,
                ui: null,
                bug: null,
                dateline: 0,
                version: null,
                type: 0
            }, t.update = [], t.getLog = function (t) {
                var e = a.timestamp(a.timeFormat(new Date, "yyyy-MM-dd h"));
                r.getDetails(function (n) {
                    o.local("version") != n.version || !o.local("smzdm_updateline") || e - o.local("smzdm_updateline") > 168 ? o.get(s.url.VERSIONUPDATE, function (n) {
                        n && "" != n && (o.local("smzdm_update", JSON.stringify(n)), o.local("smzdm_updateline", e), t(n))
                    }) : t(JSON.parse(o.local("smzdm_update")))
                })
            }
        });
        d.getLog(function (t) {
            for (var e = JSON.parse(o.local("manifest")).type, n = 0; n < t.length; n++)t[n].type == e && d.update.push(t[n]);
            d.current = d.update.length > 0 ? d.update[0] : d.current, d.update = d.update.slice(1)
        }), "true" === r.getUpdateStatus() && (d.show(), r.setUpdateStatus(!1));
        var h = n.define("alertRange", function (t) {
            t.active = !1, t.message = "", t.show = function (t) {
                h.message = t, h.active = !0, f.show()
            }, t.hide = function () {
                h.message = "", h.active = !1, f.hide()
            }
        }), f = n.define("backdropRange", function (t) {
            t.active = !1, t.show = function () {
                f.active = !0
            }, t.hide = function () {
                f.active = !1
            }
        })
    }), require.register("smzdm_pro/source/view/popup.js", function (t, e) {
        var n = e("../lib/avalon"), i = e("../src/core/notice"), r = e("../src/data/message"), o = e("../src/data/user"), a = e("../src/data/favorites"), s = e("../src/core/DBoy"), l = e("../plug/analytics"), c = e("../src/data/options"), u = e("../config/config"), p = e("../lib/jquery");
        i.setBadge("");
        var d = n.define("ribbonRange", function (t) {
            t.userinfo = {}, t.isLogin = !1, t.isSignIn = !1, t.logout = function () {
                o.logout(), d.isLogin = !1, d.isSignIn = !1, m.show(), g.hide(), f.tabId = 0, h.clear()
            }, t.login = function () {
                h.show()
            }, t.register = function () {
                s.unit.goto("http://www.smzdm.com/register.php")
            }, t.tipoff = function () {
                s.unit.goto("http://www.smzdm.com/submit")
            }, t.signIn = function () {
                s.unit.goto("http://www.smzdm.com/qiandao")
            }
        });
        n.define("logoRange", function (t) {
            t.background = 1 == JSON.parse(s.local("manifest")).type ? "../../assets/img/logo.jpg" : "../../assets/img/logo.png"
        }), o.localLogin(function (t) {
            d.isLogin = !0, d.isSignIn = t.isSignIn, d.userinfo = t
        });
        var h = n.define("loginRange", function (t) {
            t.msg = "", t.isShow = !1, t.btnStr = "\u767B \u5F55", t.check = !1, t.checklink = "", t.info = {
                username: "",
                password: "",
                checkcode: "",
                isSave: !0,
                nickname: ""
            }, t.submit = function () {
                return "" === h.info.username ? void(h.msg = "\u8D26\u53F7\u6216\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A") : "" === h.info.password ? void(h.msg = "\u8D26\u53F7\u6216\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A") : void o.login(h.info, function (t) {
                    return t.error_code > 0 ? (h.msg = t.error_msg, t.data.login_error_num >= 3 && (h.check = !0, h.checklink = e("../config/config").url.captcha()), !1) : (h.hide(), h.info.nickname = t.display_name, d.isLogin = !0, d.isSignIn = t.checkin.web_has_checkin, d.userinfo = h.info, void g.fill())
                })
            }, t.inputSub = function (t) {
                13 === t.keyCode && h.submit()
            }, t.changeSave = function () {
                h.info.isSave = h.info.isSave ? !1 : !0
            }, t.changeCheckcode = function () {
                h.checklink = h.checklink + "&v=" + new Date
            }, t.clear = function () {
                h.info.username = "", h.info.password = ""
            }, t.hide = function () {
                h.isShow = !1, y.hide()
            }, t.show = function () {
                h.isShow = !0, y.show()
            }, t.$watch("msg", function () {
                "" != h.msg && setTimeout(function () {
                    h.msg = ""
                }, 5e3)
            })
        }), f = n.define("tabsRange", function (t) {
            t.unread = 0, t.count = 0, t.searchStr = "", t.tabId = 0, t.searchKey = function (t) {
                13 === t.keyCode && s.unit.goto("http://www.smzdm.com/?s=" + f.searchStr)
            }, t.searchBtn = function () {
                s.unit.goto("http://www.smzdm.com/?s=" + f.searchStr)
            }, t.changeTab = function (t) {
                if (f.tabId = t, 0 === t)m.show(), g.hide(); else {
                    if (!d.isLogin)return f.tabId = 0, d.login();
                    g.show(), m.hide()
                }
            }
        }), m = n.define("notifyRange", function (t) {
            t.active = !0, t.activeIn = !0, t.list = [], t.addFlag = !1, t.noti_desktop = s.local("noti_desktop"), t.disturb = function () {
                c.setBase("noti_desktop"), m.noti_desktop = s.local("noti_desktop"), g.noti_desktop = s.local("noti_desktop")
            }, t.more = function () {
                s.unit.goto("http://www.smzdm.com"), l.collect("button", "click", "more")
            }, t.show = function () {
                m.active = !0, m.activeIn = !0
            }, t.hide = function () {
                m.active = !1, m.activeIn = !1
            }, t.clear = function () {
                r.clear(function () {
                    m.activeIn = !1, f.count = 0, f.unread = 0, setTimeout(function () {
                        m.fill()
                    }, 1), setTimeout(function () {
                        m.activeIn = !0
                    }, 500)
                }), l.collect("button", "click", "removeAll")
            }, t.toInfo = function (t, e) {
                t.preventDefault(), s.unit.goto(e), l.collect("a", "click", "commodity")
            }, t.optionCheck = function () {
                s.unit.goto(s.unit.browType().se ? "options.html" : "html/options.html")
            }, t.addFav = function (t) {
                var t = t.$model;
                if (!d.isLogin)return d.login();
                var e = u.app.variety[t.variety] || "youhui";
                m.addFlag || (m.addFlag = !0, a.add({msg_id: t.id, type: e}, function (t) {
                    m.addFlag = !1, v.show(t.error_msg), setTimeout(function () {
                        v.hide()
                    }, 3e3)
                })), l.collect("a", "click", "addFav")
            }, t.share = function (t) {
                var e = "908111949", n = "http://v.t.sina.com.cn/share/share.php?", t = t.$model || t, i = t.url, r = encodeURI(t.title) + " " + encodeURI(t.price), o = t.img || "";
                s.unit.goto(n + "appkey=" + e + "&url=" + i + "&title=" + r + "&pic=" + o, !0)
            }, t.fill = function (t) {
                r.getFill(function (e, n) {
                    m.list = e, f.count = n.message_all, f.unread = n.message_all_unread, t && t()
                })
            }, t.scroll = function (t) {
                var e = t.target.scrollTop;
                s.local("scrollTop", e)
            }
        });
        m.fill(function () {
            l.start(), f.unread > 0 && s.local("scrollTop", 0), document.querySelector(".notify_detail").scrollTop = s.local("scrollTop")
        }), e("../src/core/ext").open && e("../src/core/ext").popup(m);
        var g = n.define("favoritesRange", function (t) {
            t.active = !1, t.list = [], t.favList = a.getNav(), t.tabActive = t.favList[0], t.empty = !1, t.magicleft = 0;
            var e = 0;
            t.noti_desktop = s.local("noti_desktop"), t.disturb = function () {
                c.setBase("noti_desktop"), m.noti_desktop = s.local("noti_desktop"), g.noti_desktop = s.local("noti_desktop")
            }, t.more = function () {
                s.unit.goto("http://www.smzdm.com/user/collection"), l.collect("button", "click", "favMore")
            }, t.optionCheck = function () {
                s.unit.goto(s.unit.browType().se ? "options.html" : "html/options.html")
            }, t.show = function () {
                g.active = !0
            }, t.hide = function () {
                g.active = !1
            }, t.toInfo = function (t, e) {
                t.preventDefault(), s.unit.goto(e), l.collect("a", "click", "favorites")
            }, t.remove = function (t) {
                a.remove({id: t.$model.article_id, type: g.tabActive.id}, function () {
                    t.fade = !0, setTimeout(function () {
                        g.list.remove(t), g.empty = 0 === g.list.length ? !0 : !1
                    }, 300)
                })
            }, t.share = function (t) {
                var e = "908111949", n = "http://v.t.sina.com.cn/share/share.php?", t = t.$model || t, i = t.article_url, r = encodeURI(t.article_title) + " " + encodeURI(t.article_price), o = t.article_img || "";
                s.unit.goto(n + "appkey=" + e + "&url=" + i + "&title=" + r + "&pic=" + o, !0)
            }, t.fill = function () {
                a.getlist(g.tabActive.id, function (t) {
                    g.empty = 0 === t.data.rows.length ? !0 : !1;
                    var e = t.data.rows;
                    for (var n in e) {
                        if (e[n].article_img = "" != e[n].article_img ? e[n].article_img : "../assets/img/logo128.png", e[n].article_tags_html) {
                            var i = e[n].article_tags_html.split(","), r = [];
                            if (i.length > 0)for (var o in i) {
                                var a = p(i[o]);
                                r.push({data: a.attr("data") + "?" + u.app.census(), html: a.html()})
                            }
                            e[n].article_tags_html = r.length > 0 ? r : !1
                        }
                        e[n].mall_link = e[n].mall_link ? e[n].mall_link + "?" + u.app.census() : "", e[n].mes = "news" == g.tabActive.id ? e[n].article_rzlx : "shaiwu" == g.tabActive.id || "jingyan" == g.tabActive.id ? e[n].article_referrals : e[n].article_mall
                    }
                    g.list = e
                })
            }, t.change = function (t) {
                g.tabActive = t, g.fill(), e = g.magicleft
            }, t.moveMagic = function () {
                g.magicleft = this.offsetLeft
            }, t.restore = function () {
                g.magicleft = e
            }
        });
        g.fill();
        var v = n.define("alertRange", function (t) {
            t.active = !1, t.message = "", t.show = function (t) {
                v.message = t, v.active = !0, y.show()
            }, t.hide = function () {
                v.message = "", v.active = !1, y.hide()
            }
        }), y = n.define("backdropRange", function (t) {
            t.active = !1, t.show = function () {
                y.active = !0
            }, t.hide = function () {
                y.active = !1
            }
        })
    }), require.register("smzdm_pro/source/view/content.js", function (t, e) {
        var n = e("../src/core/DBoy"), i = e("../src/core/route"), r = {};
        r.domain = "", r.parse = function (t) {
            if (!t.isConf)return !1;
            var i = this;
            i.domain = t.domain;
            var r = e("../config/mall/" + t.domain), o = r.conf, a = null;
            for (var s in o) {
                var l = "", c = s;
                s.indexOf("key:") > -1 && (c = s.replace("key:", "")), l = n.unit.wildcard(c), (t.host.match(l) || t.source.match(l)) && (a = o[s])
            }
            return a && n.unit.loadFile(n.unit.toUrl("/css/mall/" + t.domain + ".css"), "css"), a
        }, r.create = function (t) {
            var n = this;
            for (var i in t)try {
                e("../src/data/auto").init(t[i], n.domain);
                var r = i.split("_");
                if (r.length > 1) {
                    for (var o = "..", a = 0; a < r.length; a++)o += "/" + r[a];
                    e(o).init(t[i], n.domain)
                } else e("../plug/" + i).init(t[i], n.domain)
            } catch (s) {
            }
        }, r.off = function () {
        }, r.destroy = function () {
        }, n.unit.loadFile(n.unit.toUrl("/css/content/content.css"), "css"), r.create(r.parse(new i(window.location.href)))
    }), require.register("smzdm_pro/source/view/order.js", function (t, e) {
        var n = e("../src/core/DBoy").unit, i = e("../lib/avalon"), r = i.define("smzdmOrderRange", function (t) {
            t.html = "", t.init = function () {
                var t = n.parseURI(window.location.href), o = t.mall ? t.mall : !1;
                o && e("../plug/mall/" + o + "/order").init(function (t) {
                    r.html = t, i.scan()
                })
            }
        });
        r.init()
    }), require.alias("smzdm_pro/source/main.js", "smzdm_pro/index.js"), "object" == typeof exports ? module.exports = require("smzdm_pro") : "function" == typeof define && define.amd ? define(function () {
        return require("smzdm_pro")
    }) : window.App = require("smzdm_pro")
}();