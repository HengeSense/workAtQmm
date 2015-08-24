/**
 * Created by james on 2015/8/24.
 */
$(function () {
    function Ajax(prop){
        this.prop = prop;
        this.send();
    }
    Ajax.prototype = {
        createXhr : function () {
            if (typeof XMLHttpRequest !== "undefined") {
                return new XMLHttpRequest();
            } else if (typeof ActiveXObject != "undefined") {
                var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0",
                "MSXML2.XMLHttp"],
                    i,
                    len;
                for (i = 0, len = versions.length; i < len; i++) {
                    try {
                        new ActiveXObject(versions[i]);
                        arguments.callee.activeXString = versions[i];
                        break;
                    } catch(ex) {}
                }
                return new ActiveXObject(arguments.callee.activeXString);
            }
        },
        send : function (){
            var xmlhttp = this.createXhr(),
                prop = this.prop,
                method = prop.method || prop.type || 'GET',
                data = prop.data || null;
            if (data instanceof Object) {
                data = this.serialize(data);
            }
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState === 4) {
                    if ((xmlhttp.status >= 200 && xmlhttp.status < 300) || xmlhttp.status === 304) {
                        prop.succes && prop.succes(xmlhttp.responseText);
                    } else {
                        prop.error && prop.error(xmlhttp.status);
                    }
                }
            }
            xmlhttp.open(method, prop.url, true);
            if (data) {
                xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            }
            xmlhttp.send(data);
        },
        serialize : function (prop) {
            var key,
                arr = [];
            for(key in prop) {
                arr.push(key + '=' + prop[key]);
            }
            return arr.join('&');
        }
    }
    var ajax = new Ajax({
        url : 'http://www.baidu.com/',
        method : 'GET',
        data : 'name=hejie',
        success : function (val) {
            console.log(val);
        },
        error : function (val) {
            console.log("error" + val);
        }
    });
});