<?php

$url = "http://hd.jiedaibao.com/promotion/check-invite-status?icode=D07KCV8&mobile=18075076612&from=h5";
echo file_get_contents($url);

$url2 = "http://hd.jiedaibao.com/promotion/send-verify-code?icode=D07KCV8&mobile=18075076612&from=h5";

echo file_get_contents($url2);

?>