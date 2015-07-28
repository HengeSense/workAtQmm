(function(){

console.clear();
$(document).ready(function(){
	var div = $('.aj-i-want-buy-num');

	if( div.length >= 1 ){
		console.log( div.length );
		for( var i = 0; i < div.length; i++ ){
			(function( obj ){
				numControl( {div : obj} );
			})(div[i]);
		}
	}
});

function numControl( prop ){
	if( this instanceof numControl ){
		this.div = prop.div;
		this.max = parseInt( $( prop.div ).attr( 'max-limit' ) );
		this.min = parseInt( $( prop.div ).attr( 'min-limit' ) );
		this.step = parseInt( $( prop.div ).attr( 'step' ) );
		this.numShow = $( prop.div ).find( '.aj-num' );
		this.form = $( '.getquan_step .lingquanform' )[0];
		this.initial();
		this.event();
	}else{
		return new numControl( prop );
	}
}
numControl.prototype = {
	initial : function(){
		if( $( this.form['buycount'] ).val() === '' ){
			$( this.form['buycount'] ).val( 1 );
		}
		this.numShow.val( this.form['buycount'].value );
	},
	event : function(){
		var that = this;
		$( this.div ).on( 'click' ,function( e ){
			var target = e.target;
			e.stopPropagation();
			if( $(target).hasClass( 'aj-minus' ) ){
				that.minusplus( -that.step );
			}
			if( $(target).hasClass( 'aj-plus' ) ){
				that.minusplus( that.step );
			}
		});
		$( this.numShow ).on( 'keyup', function(){
			that.checkNum();
			that.valControlStyle();
			that.valControlInput();
		});
	},
	minusplus : function( val ){
		var result = parseInt( this.numShow.val() ) + val;
		if( result <= this.min ){
			result = this.min;
		}
		if( result >= this.max ){
			result = this.max;
		}
		this.numShow.val( result );
		this.valControlInput();
		this.valControlStyle();
	},
	checkNum : function(){
		var val = this.numShow.val() ;
		if( val === '' ){
			return false;
		}
		val = parseInt( val );
		if( isNaN(val) ){
			val = 1;
		}
		if( val < 1 ){
			val = 1;
		}else if( val > this.max ){
			val = this.max;
		}
		this.numShow.val( val );
	},
	valControlStyle : function(){
		if( this.numShow.val() === '' ){
			$( this.div ).find( '.aj-minus' ).addClass( 'aj-disabled' );
			$( this.div ).find( '.aj-plus' ).addClass( 'aj-disabled' );
			return false;
		}
		if( this.numShow.val() <= this.min ){
			$( this.div ).find( '.aj-minus' ).addClass( 'aj-disabled' );
		}else{
			$( this.div ).find( '.aj-minus' ).removeClass( 'aj-disabled' );
		}
		if( this.numShow.val() >= this.max ){
			$( this.div ).find( '.aj-plus' ).addClass( 'aj-disabled' );
		}else{
			$( this.div ).find( '.aj-plus' ).removeClass( 'aj-disabled' );
		}
	},
	valControlInput : function(){
		$( this.form['buycount'] ).val( this.numShow.val() );
	}
};



})();