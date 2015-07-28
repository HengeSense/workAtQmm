define(function( require, exports, module ){


var prop = {};
prop.arr = [];
prop.divs = $( '.rightPanel.floatFixed' );
for( var i = 0; i < prop.divs.length; i++ ){
	prop.arr.push( prop.divs[i] );
	$( prop.divs[i] ).addClass('aj-have-push');
}
fixed_right( prop );

var ajTimer = setInterval(function(){
	var divs = $( '.rightPanel.floatFixed' );
	if( divs.length !== prop.divs.length ){
		for( var i = 0; i < divs.length; i++ ){
			if( !$(divs[i]).hasClass('aj-have-push') ){
				prop.arr.push( divs[i] );
				$( divs[i] ).addClass('aj-have-push');
				clearInterval( ajTimer );
			}
		}
	}
},1000);

function fixed_right( prop ) {
	
    if ($("#pagefooter").length > 0 && $(".rightPanel").length > 0) {
        var footer = document.getElementById('pagefooter'),
			headerHeight = 181,		//??
			footerHeight = $("#pagefooter").height(),
			windowHeight = $(window).height(),
			bodyHeight = windowHeight - headerHeight - footerHeight,
			leftHeight = $(".left_side").height(),
			rightHeight = $(".right_side").height(),
			rightOffsetTop = $('.right_side').offset().top,
			fixedTop = 40;
		
		setInterval(function(){
			if( $('.right_side').height() > rightHeight ){
				rightHeight = $('.right_side').height();
			}
		},1000/12);
		
		var isShow = false,
			isBuchong = false,
			fixedOffsetFromFooter = 0,
			fixedTotalHeight = 0,
			scrollHeight,
			footerTop;
		

		
		$(window).on( 'resize', function(){
			for( var i = 0; i < prop.arr.length; i++ ){
				$( prop.arr[i] ).css({
					'left' : $('.right_side')[0].getBoundingClientRect().left
				});
			}
		});
		
        $(window).scroll(function () {
			if( prop.arr.length === 0 ){ return false; }
			fixedTotalHeight = 0;
			prop.arr.forEach(function( obj ){
				fixedTotalHeight += $( obj ).height() + parseInt( $( obj ).css('margin-bottom') );
			});
		
			if( scrollHeight === $( window ).scrollTop() ){//scroll x
				for( var i = 0; i < prop.arr.length; i++ ){
					$( prop.arr[i] ).css({
						'left' : $('.right_side')[0].getBoundingClientRect().left
					});
				}
				return true;
			}
			scrollHeight = $( window ).scrollTop(),
			footerTop = footer.getBoundingClientRect().top;
			fixedBottom = prop.arr[prop.arr.length-1].getBoundingClientRect().bottom;
			// var p = $(".g_g");
            if ( leftHeight > rightHeight ) {
				
                if ( scrollHeight > (rightHeight + rightOffsetTop) ) {
					
					fixedOffsetFromFooter = footerTop - ( fixedTop + fixedTotalHeight );
					if( fixedOffsetFromFooter >= 0 ){
						fixedOffsetFromFooter = 0;
					}else{
						isShow = false;
					}
					var previousSiblingTotalHeight = 0;
					for( var i = 0; i < prop.arr.length; i++ ){
						
						$( prop.arr[i] ).css({
							'position' : 'fixed',
							'top' : fixedTop + previousSiblingTotalHeight + fixedOffsetFromFooter,
							'left' : $('.right_side')[0].getBoundingClientRect().left
						});
						previousSiblingTotalHeight = $( prop.arr[i] ).height() + parseInt($( prop.arr[i] ).css('margin-bottom'));
						
					}
                } else {
					for( var i = 0; i < prop.arr.length; i++ ){
						$( prop.arr[i] ).css({
							'position' : 'static',
							'top' : '0px'
						});
					}
                }
            }
        });
    }
}

});