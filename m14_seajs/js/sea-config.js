(function(){

var sea_module_name = {		// 模块名称 =>映射=> 处理模块逻辑的JS脚本入口
	'ninePicRoll' : 'ninePic/index.js',
	'imgsRollX' : 'imgsRollX/index.js',
	'triRanksMostClick' : 'triRanksMostClick/index.js',
	'rightSideFloatFixed' : 'rightSideFloatFixed/index.js'
};

seajs.config({
	// 变量配置
	vars: {
		'locale': 'zh-cn'
	},
	// 调试模式
	// debug: (location.href.indexOf('localhost') >= 0) ? true : false,
	// Sea.js 的基础路径
	base: './js/qmm-modules/',
	// 文件编码
	charset: 'utf-8'
});


$( document ).ready(function(){
	
	var divs,
		name;
	
	divs = $( "div[sea_module_name]" );
	divs.each(function(){
		if( !$(this).attr( 'sea_module_name_loaded' ) && $(this).attr( 'sea_module_name_loaded' ) != '1' ){
			
			name = $.trim( $(this).attr('sea_module_name') );
			name.split(' ').forEach(function( module_name ){
				seajs.use( sea_module_name[ module_name ] );
			});
			$( this ).attr( 'sea_module_name_loaded', 1 );
		}
	});
	
});



})()
