<?php

class KeyWord{
	public $word, $url;
	function __construct() {}
	function save() {
		$dbc = mysql_connect("localhost", "name", "123");
		mysql_select_db("test");
		
		$query = sprintf("INSERT INTO %s (word, url) VALUES('%s', '%s')", "keywords", $this->word, $this->url);
		mysql_query("set names utf8");
		if (mysql_query($query, $dbc)) {
			$arr = [
				'isok' => 1,
				'info' => ''
			];
		} else {
			$arr = [
				'isok' => 0,
				'info' => mysql_error($dbc)
			];
		}
		
		echo json_encode($arr);
	}
}

$kw = new KeyWord();
$kw->word = $_GET['word'];
$kw->url = $_GET['url'];

$kw->save();
/*

$.ajax({
	url : "http://localhost:520/m47_baidu_keywords/PHP/save.php",
	type : "GET",
	data : {
		word : 'baidu',
		url : 'www.baidu.com'
	},
	success : function (res) {
		console.log(res);
	},
	error : function (err) {
		console.log(err);
	}
});

*/
?>

