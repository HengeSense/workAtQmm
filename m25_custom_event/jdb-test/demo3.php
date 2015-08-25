<?php

function get($url){

	$referer = 'http://events.jiedaibao.com/inviteEvent/';
	$host = 'hd.jiedaibao.com';
	
	echo '<pre>';
	print_r($url);
$POST = <<<HEADER
GET /dabenying/?r=site/Userlogin&userName=a HTTP/1.1
Accept: text/plain, text/html
Referer: {$referer}
Accept-Language: zh-CN,zh;q=0.8
Content-Type: application/x-www-form-urlencodem 
Set-Cookie: token=value;  pub_sauth1=value;r=site/Userlogin; userName=a; pub_sauth2=value
User-Agent: Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.17 (KHTML, like Gecko) Chrome/24.0.1312.56 Safari/537.17
Host: {$host}
Content-Length: 0
Pragma: no-cache
Cache-Control: no-cache
Connection: close\r\n
HEADER;
	// $fp = fsockopen($host,80,$errno,$errstr,30);
	$fp = fsockopen($url,80,$errno,$errstr,30);
	if($fp){
		echo '======<br>';
		fwrite($fp, $POST);
		echo 2;;
		$result = '';
		while(!feof($fp))
		{
			// receive the results of the request
			echo fgets($fp),'<br>';
		}
	//echo $result;
	} else {
		echo 'failed';
	}

	fclose($fp);
}
$arr = array(
	'http://hd.jiedaibao.com/promotion/check-invite-status?icode=D07KCV7&mobile=18075076612&from=h5',
	'http://hd.jiedaibao.com/promotion/send-verify-code?icode=D07KCV7&mobile=18075076612&from=h5'	
);
foreach ($arr as $one) {
	get($one);
}


?>