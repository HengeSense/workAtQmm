(function(){

//	调用

var prop = {};
prop.arr = [];
prop.divs = document.querySelectorAll( '.rightPanel.floatFixed' );
for( var i = 0; i < prop.divs.length; i++ ){
	prop.arr.push( prop.divs[i] );
	$( prop.divs[i] ).addClass('aj-have-push');
}
fixed_right( prop );

var ajTimer = setInterval(function(){
	var divs = document.querySelectorAll( '.rightPanel.floatFixed' );
	if( divs.length !== prop.divs.length ){
		for( var i = 0; i < divs.length; i++ ){
			if( !$(divs[i]).hasClass('aj-have-push') ){
				prop.arr.push( divs[i] );
				$( divs[i] ).addClass('aj-have-push');
				//clearInterval(ajTimer);
			}
		}
	}
},1000/12);


//**************************************************************************************/
	
//	函数

function fixed_right( prop ) {
	if( prop.arr.length === 0 ){ return false;}
	var addNum = prop.arr.length;
	
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
		
		
		var isShow = false,
			isBuchong = false,
			fixedOffsetFromFooter = 0,
			fixedTotalHeight = 0,
			scrollHeight,
			footerTop;
		

		
		$(window).on( 'resize', function(){
			for( var i = 0; i < prop.arr.length; i++ ){
				$( prop.arr[i] ).css({
					'left' : document.querySelector('.right_side').getBoundingClientRect().left
				});
			}
		});
		
        $(window).scroll(function () {
			fixedTotalHeight = 0;
			prop.arr.forEach(function( obj ){
				fixedTotalHeight += $( obj ).height() + parseInt( $( obj ).css('margin-bottom') );
			});
		
			if( scrollHeight === $( window ).scrollTop() ){//scroll x
				for( var i = 0; i < prop.arr.length; i++ ){
					$( prop.arr[i] ).css({
						'left' : document.querySelector('.right_side').getBoundingClientRect().left
					});
				}
				return true;
			}
			scrollHeight = $( window ).scrollTop(),
			footerTop = footer.getBoundingClientRect().top;
			fixedBottom = prop.arr[prop.arr.length-1].getBoundingClientRect().bottom;
			// var p = $(".g_g");
            if ( leftHeight > rightHeight ) {
				console.log( scrollHeight + '--' + (rightHeight + rightOffsetTop) );
				
                if ( scrollHeight > (rightHeight + rightOffsetTop +300) ) {
					console.log( scrollHeight - (rightHeight + rightOffsetTop + 600) );
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
							'left' : document.querySelector('.right_side').getBoundingClientRect().left
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



})()