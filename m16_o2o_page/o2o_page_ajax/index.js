$(function(){
	var divs = $('.aj-first-class'),
		url = "http://www.quanmama.com:8080/ajax/ajaxBestDealForCategoryPage.aspx?cid=",
		more,
		index;
	divs.each(function(){
		var lis = $( this ).find('.aj-header .aj-h-ul .aj-li'),
			wraps = $( this ).find('.aj-content .aj-c-wrap');
		lis.on( 'mouseenter',function( e ){
			index = $(this).index();
			more = $(this).parents('.aj-header').find('.aj-more');
			$(more[0]).attr('href', $(this).find('a').attr('href'));
			$( lis ).removeClass( 'aj-select' );
			$( this ).addClass( 'aj-select' );
			
			$( wraps ).hide();
			$( wraps[index] ).show();
			
			if (!$(this).hasClass('aj-have-load') && index !== 0) {
				$(this).addClass('aj-have-load');
				$( wraps[index] ).html("<div class='newLoading'></div>");
				$( wraps[index] ).load(url + $(this).attr('cid'), "", function( back ){
					$(wraps[index]).html(back);
				});
			}
		});
	});
});

