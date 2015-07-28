define(function( require, exports, module ){
	
	require.async( './index.css' );

	
function Effect( prop ){
	if( this instanceof Effect ){
		this.prop = prop;
		this.div = prop.div;
		this.nav = $( this.div ).find( '.aj-nav-one' );
		this.blocks = $( this.div ).find( '.aj-imgs-wrap' );
		this.initial();
		this.event();
	}else{
		return new Effect( prop );
	}
}
Effect.prototype={
	initial : function(){
		this.bianhao();
		this.setMinHeight();
	},
	event : function(){
		var that = this;
		$( this.div ).on( 'mouseover', function(ev){
			var e = ev || window.event,
				target = e.target || e.srcElement;
				
			if( $(target).hasClass('aj-nav-one') ){
				that.navStyle( target );
			}
		});
	},
	navStyle : function( obj ){
		var index = this.whichNav( obj );
		if( $(this.nav[index]).hasClass('aj-select') ){
			return true;
		}
		this.showNav( index );
		this.showBlock( index );
	},
	showNav : function( index ){
		$( this.nav ).removeClass( 'aj-select' );
		$( this.nav[index] ).addClass( 'aj-select' );
	},
	showBlock : function( index ){
		$( this.blocks ).hide();
		$( this.blocks[index] ).show();
	},
	whichNav : function( obj ){
		var index;
		for( var i = 0; i<this.nav.length; i++ ){
			if( this.nav[i] === obj ){
				index = i;
				break;
			}
		}
		return index;
	},
	bianhao : function(){
		var that =this;
		$( this.blocks ).each(function(){
			that.sortBlockInside( this );
		});
	},
	sortBlockInside : function( obj ){
		var ones = $( obj ).find( '.aj-one' ),
			index = 1,
			zhishi;
		$( ones ).each(function(){
			zhishi = $( this ).find( '.aj-index' )[0];
			zhishi.innerHTML = index;
			index++;
		});
	},
	setMinHeight : function(){
		var blocks = this.blocks,
			arr = [],
			num;
		$( blocks ).each(function(){
			arr.push( $( this ).find( '.aj-one' ).length );
		});
		num = arr.sort(function( a, b ){
			return a-b;
		}).pop();
		$( blocks[0].parentNode.parentNode ).css({minHeight:num*100+'px'});
	}
};

var prop = {};
prop.div = $( '.aj-box-rank' )[0];
Effect( prop );

});