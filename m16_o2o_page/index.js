$(function(){
	var divs = $('.aj-first-class'),
		url = "http://www.quanmama.com:8080/ajax/ajaxBestDealForCategoryPage.aspx?cid=";
	divs.each(function(){
		var lis = $( this ).find('.aj-header .aj-h-ul .aj-li'),
			wraps = $( this ).find('.aj-content .aj-c-wrap');
		lis.on( 'mouseenter',function( e ){
			$( this ).css('height', $(lis[0]).css('height') + 'px');
			$( lis ).removeClass( 'aj-select' );
			$( this ).addClass( 'aj-select' );
			
			$( wraps ).hide();
			$( wraps[$(this).index()] ).show();
			
			if (!$(this).hasClass('aj-have-load')) {
				$(this).addClass('aj-have-load');
				$( wraps[$(this).index()] ).html("<div class='newLoading'></div>");
				$( wraps[$(this).index()] ).load(url + $(this).attr('cid'), "", function(){
					// $(this).html("");
				});
			}
		});
	});
});

