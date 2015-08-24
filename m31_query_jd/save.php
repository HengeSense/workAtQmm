<?php


function save($url, $cid = ''){
	// $save_dir = 'imgdir/';
	$save_dir = 'imgdir3/';
	echo $url."<br>";
	$img = file_get_contents($url);
	if ($cid === '') {
		$arr = explode('/', $url);
		$fileName = $save_dir.array_pop($arr);
	} else {
		$extension = '.'.pathinfo($url)['extension'];
		$fileName = $save_dir.$cid.$extension;
	}
	file_put_contents($fileName, $img);
	// sleep(1);
}

// save("http://m.360buyimg.com/mobile/s100x100_jfs/t616/7/771806715/4697/2fc53e98/5487ecf0N975e1205.jpg");

function readAndSave(){
	set_time_limit(0);
	$fileName = "imgslist2.txt";
	$data = file_get_contents($fileName);
	$arr = explode("\n", $data);
	$len = count($arr);
	// echo "<pre>";
	// print_r($arr);
	// echo count($arr);
	// foreach ($arr as $one) {
		// save($one);
	// }
	for ($i = 0; $i < $len; $i ++) {
		$one = explode('==', trim($arr[$i]));
		$cid = trim($one[0]);
		$url = trim($one[1]);
		save($url, $cid);
	}
}
readAndSave();

?>