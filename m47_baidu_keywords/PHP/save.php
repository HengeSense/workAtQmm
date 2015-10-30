<?php

class KeyWord{
	public $dbc;
	public $word, $url;
	public $page, $size;
	
	function __construct() {
		$this->dbc = mysql_connect("localhost", "name", "123");
		mysql_select_db("test");
	}
	public function save() {
		$query = sprintf("INSERT INTO %s (word, url) VALUES('%s', '%s')", "keywords", $this->word, $this->url);
		mysql_query("set names utf8");
		if (mysql_query($query, $this->dbc)) {
			$arr = [
				'isok' => 1,
				'info' => ''
			];
		} else {
			$arr = [
				'isok' => 0,
				'info' => mysql_error($this->dbc)
			];
		}
		echo json_encode($arr);
	}
	public function get() {
		$query = sprintf("SELECT * FROM %s LIMIT %d, %d", "keywords", ($this->page - 1) * $this->size, $this->size);
		mysql_query("set names utf8");
		$results = mysql_query($query, $this->dbc);
		$back = [];
		
		while($rows = mysql_fetch_array($results)) {
			array_push($back, [
				'word' => $rows['word'],
				'url' => $rows['url']
			]);
			// $results[] = [
				// 'word' => $rows['word'],
				// 'url' => $rows['url']
			// ];
		}
		return $back;
	}
}

$kw = new KeyWord();

switch(strtoupper($_GET["action"])) {
	case "GET" :
		$kw->page = isset($_GET["page"]) ? (int)$_GET["page"] : 1;
		$kw->size = isset($_GET["size"]) ? (int)$_GET["size"] : 10;
		$rows = $kw->get();
		$res = [
			'isok' => '1',
			'info' => '',
			'rows' => $rows
		];
		echo json_encode($res);
		break;
	default :
		$kw->word = $_GET['word'];
		$kw->url = $_GET['url'];
		$kw->save();
		break;
}

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

