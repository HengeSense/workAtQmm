var arr = [
	'http://hd.jiedaibao.com/promotion/check-invite-status?icode=D07KCV7&mobile=18075076612&from=h5',
	'http://hd.jiedaibao.com/promotion/send-verify-code?icode=D07KCV7&mobile=18075076612&from=h5'
];
arr.forEach(function (item) {
	var xmlhttp = new XMLHttpRequest(),
		url = item;
	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState === 4) {
			if (xmlhttp.status >= 200 && xmlhttp.status < 300) {
				console.log(xmlhttp.responseTexts);
			}
		}
	}
	xmlhttp.open('get', url, true);
	xmlhttp.send(null);	
});