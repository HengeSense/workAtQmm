(function(){
$( document ).ready(function(){
	
	ceshi.start();
	yy.start();
	
});

var ceshi = {},
	yy = {};
	
yy.start = function(){
	var div = $('.aj-nav-line')[0];
	NavLine( div );
}


function NavLine( div ){
	if( this instanceof arguments.callee ){
		this.div = div;
		this.overflowTitle();
		this.cardAutoWidth();
	}else{
		return new arguments.callee( div );
	}
}
NavLine.prototype = {
	overflowTitle : function(){
		$( this.div ).find( '.aj-c-ul li a' ).on( 'mouseenter', function(){
			if( $(this).width() < this.scrollWidth && !$(this).attr('title') ){
				$( this ).attr( 'title', $(this).html() );
			}
		});
	},
	cardAutoWidth : function(){	//根据浮动标签内部内容自调整width
		var cards = $( this.div ).find('.aj-card');
		cards.each(function(){
			var width200 = false,
				width300 = false,
				lis;
			$( this ).find('.aj-c-ul').each(function(){
				lis = $(this).find('li');
				if( lis.length > 1 ){
					width200 = true;
				}
				if( lis.length >= 9 ){
					width300 = true;
				}
			});
			if( width300 ){
				$( this ).css( 'width', '300px' );
			}else if( width200 ){
				$( this ).css( 'width', '200px' );
			}else{
				$( this ).css( 'width', '100px' );
			}
		});
	}
};




ceshi.start = function(){
	var card = $('.aj-nav-line .aj-card')[0];
	$('.aj-nav-line .aj-li').each(function(){
		if( $(this).find('.aj-card').length === 0 ){
			$( $(card).clone() ).appendTo( this );
		}
	});
}

})();