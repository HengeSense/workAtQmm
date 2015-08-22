// 从jd wap page dom 中获取cid
var lis = document.getElementById('category7').querySelectorAll('li[m_cid]'),
	one,
	result = [];
for (var i =0; i < lis.length; i++) {
	result.push("'" + lis[i].getAttribute('m_cid') + "'");
}
console.log("$arr = array(" + result.join(',') + ');');