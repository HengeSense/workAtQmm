// 在jd wap page 尝试发送post请求
var xmlhttp = new XMLHttpRequest(),
    url = "http://m.jd.com/category/list.action",
    str = "_format_=json&catelogyId=100001851";
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.status === 200 && xmlhttp.readyState === 4){
        var arr = JSON.parse(xmlhttp.responseText);
        console.log(arr);
    }
}
xmlhttp.open("POST", url);
xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset = utf8");
xmlhttp.send(str);
