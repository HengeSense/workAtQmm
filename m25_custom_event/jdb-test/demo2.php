<?php
$arr = array(
	'http://hd.jiedaibao.com/promotion/check-invite-status?icode=D07KCV7&mobile=18075076612&from=h5',
	'http://hd.jiedaibao.com/promotion/send-verify-code?icode=D07KCV7&mobile=18075076612&from=h5'	
);


foreach($arr as $one) {
	echo file_get_contents($one);
}

?>