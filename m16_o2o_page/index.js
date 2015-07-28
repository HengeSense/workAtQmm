$(function(){
	var divs = $('.aj-first-class');
	divs.each(function(){
		var lis = $( this ).find('.aj-header .aj-h-ul .aj-li'),
			wraps = $( this ).find('.aj-content .aj-c-wrap');
		lis.on( 'mouseenter',function( e ){
			
			$( lis ).removeClass( 'aj-select' );
			$( this ).addClass( 'aj-select' );
			
			$( wraps ).hide();
			$( wraps[$(this).index()] ).show();
		});
	});
});

