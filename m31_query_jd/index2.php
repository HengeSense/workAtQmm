<?php
// php 抓取类别图片
function send_post($url, $post_data) {  
  $dir = "result/";
  $fileName = $post_data['catelogyId'].".txt";
  
  $postdata = http_build_query($post_data);  
  $options = array(  
    'http' => array(  
      'method' => 'POST',  
      'header' => 'Content-type:application/x-www-form-urlencoded',  
      'content' => $postdata,  
      'timeout' => 15 * 60 // 超时时间（单位:s）  
    )
  );  
  $context = stream_context_create($options);  
  $result = file_get_contents($url, false, $context);  
  
  $json = json_decode($result, true);
  $json = json_decode($json['catalogBranch'], true);
	

  echo "<h1>".$post_data['catelogyId']."</h1>";
  foreach ($json['data'] as $val) {
	  foreach ($val['catelogyList'] as $cate) {
		  echo "<div class='div1'>";
		  echo $cate['cid'] . '--' . $cate['name'].'<br>';
		  echo "<img src='{$cate['icon']}'>";
		  // if (!empty($cate['icon'])) {
			  // save($cate['icon']);
		  // }
		  if (!empty($cate['icon'])) {
			  file_put_contents('imgslist2.txt', $cate['cid'].'=='.$cate['icon'].'=='.$cate['name'].PHP_EOL, FILE_APPEND|LOCK_EX);
		  }
		  echo "</div>";
	  }
	  echo "<div style='clear:both;'></div>";
  }
  file_put_contents($dir.$fileName, $result);
}

$remote_server = "http://m.jd.com/category/list.action";


$arr = array('-10086','100001851','100001852','100001957','670','9987','1319','1713','737','9847','6196','1320','1316','1318','6144','1620','100001560','1672','6233','12259','6728','4051','9192','5025','100001958','100002201','4938','100001502');
header("Content-type:text/html;charset=utf8");
echo "
<!DOCTYPE html>
	<head>
		<style>
			.div1{
				width:100px;height:100px;overflow:hidden;
				margin:10px;float:left;
			}
			.div1 img{
				max-width:100%;max-height:100%;
			}
		</style>
	</head>
	<body>
";
file_put_contents('imgslist2.txt', '');
foreach($arr as $one) {
	$post_data = array(
		'_format_' => 'json',
		'catelogyId' => $one
	);
	send_post($remote_server, $post_data);
}

?>