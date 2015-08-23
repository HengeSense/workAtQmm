<?php


function save($url){
	// $save_dir = 'imgdir/';
	$save_dir = 'imgdir2/';
	echo $url."<br>";
	$img = file_get_contents($url);
	$arr = explode('/', $url);
	file_put_contents($save_dir.array_pop($arr), $img);
	// sleep(1);
}

// save("http://m.360buyimg.com/mobile/s100x100_jfs/t616/7/771806715/4697/2fc53e98/5487ecf0N975e1205.jpg");

function readAndSave(){
	set_time_limit(0);
	$fileName = "imgslist.txt";
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
		save(trim($arr[$i]));
	}
}
readAndSave();

?>