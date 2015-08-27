    var xmlhttp = new XMLHttpRequest(),
        prop = {};
    prop.url = "http://weibo.com/aj/skin/updatesys?ajwvr=6";
    prop.str = "skinId=skin055&isSuit=1&replace_cover=&pageid=1005052809805105&domain=100505";
    prop.type = 'POST';
    prop.succes = function (val) {
        console.log(val);
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4) {
            if (xmlhttp.status >= 200 && xmlhttp.status < 300) {
                prop.succes(xmlhttp.responseText);
            }
        }
    }
    xmlhttp.open(prop.type, prop.url, true);
    if (prop.type.toUpperCase() === 'GET') {
        xmlhttp.send(null);
    } else {
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=utf8")
        xmlhttp.send(prop.str);
    }
/*
// can use src :    http://img.t.sinajs.cn/t6/skin/skin051/images/body_bg_page.jpg?id=1410943047113
 http://img.t.sinajs.cn/t6/skin/skin048/images/body_bg_page.jpg?id=201503261330
 http://img.t.sinajs.cn/t6/skin/skin254/images/body_bg_page.jpg?id=1425898565127
 http://img.t.sinajs.cn/t6/skin/skin053/images/body_bg_page.jpg?id=201503261330
 http://img.t.sinajs.cn/t6/skin/skin055/images/body_bg_page.jpg?id=1410943047113
// not use src :    http://img.t.sinajs.cn/t6/skin/skinvip072/images/body_bg_page.jpg?id=1410943047113
                    http://img.t.sinajs.cn/t6/skin/skinvip074/images/body_bg_page.jpg?id=1410943047113
                    http://img.t.sinajs.cn/t6/skin/skinvip037/images/body_bg_page.jpg?id=1410943047113
                    http://img.t.sinajs.cn/t6/skin/skinvip192/images/body_bg_page.jpg?id=1410943047113

 */