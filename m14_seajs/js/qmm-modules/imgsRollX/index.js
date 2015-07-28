define(function( require, exports, module ){
	
	require.async( './index.css' );

	
function Effect( prop ){
	if( this instanceof Effect ){
		this.prop = prop;
		this.div = prop.div;
		this.pageLimit = 10;
		this.nav = $( this.div ).find( '.aj-nav-one' );
		this.navBlocks = $( this.div ).find( '.aj-roll-block' );
		this.navBallWraps = $( this.div ).find( '.aj-small-balls' );
		this.navWhich = 0;
		this.inital();
		this.event();
		this.touch();
	}else{
		return new Effect( prop );
	}
}
Effect.prototype = {
	event : function(){
		var that = this;
		$( this.div ).on( 'click', function(ev){
			var e = ev,
				target = e.target;
			if( $(target).hasClass( 'aj-nav-one' ) ){
				that.navChange( target );
			}
			if( $(target).hasClass( 'aj-roll-x-hk' ) ){
				that.rollImgs( $(target).attr( 'aj-index' ), $( target.parentNode ).find( '.aj-all-imgs-move' )[0] );
			}
			if( $(target).hasClass('aj-ball') && !$(target).hasClass('aj-select') ){
				that.ballsRollImgs( target );
			}
		});
	},
	navChange : function( obj ){
		var index = this.whichNavClick( obj );
		this.navStyle( index );
		this.changeBlock( index );
	},
	navStyle : function( index ){
		$( this.nav ).removeClass( 'aj-select' );
		$( this.nav[index] ).addClass( 'aj-select' );
		
		$( this.navBallWraps ).hide();
		$( this.navBallWraps[index] ).show();
		
		this.navWhich = index;
	},
	changeBlock : function( index ){
		$( this.navBlocks ).hide();
		$( this.navBlocks[index] ).show();		
	},
	whichNavClick : function( obj ){
		var index = 0;
		for( var i=this.nav.length-1; i>=0; i-- ){
			if( this.nav[i] === obj ){
				index = i;
				break;
			}
		}
		return index;
	},
	rollImgs : function( direction, imgsWrap ){
		var thisIndex = parseInt( imgsWrap.getAttribute('aj-index') ),
			canRoll = parseInt( imgsWrap.getAttribute('aj-can-roll') ),
			move_x,
			insideAllPages;
		if( canRoll === 1 ){
			switch( direction ){
				case 'left':
					move_x = -1;
					break;
				case 'right':
					move_x = 1;
					break;
				default:
					move_x = 0;
					break;
			}
			thisIndex += move_x;
			
			insideAllPages = parseInt( $(imgsWrap).attr('aj-all-pages') );
			if( thisIndex > insideAllPages ){
				thisIndex = insideAllPages;
				this.noMoreImgs( imgsWrap, 'right' );
			}else if ( thisIndex < 1 ){
				thisIndex = 1;
				this.noMoreImgs( imgsWrap, 'left' );
			}else{
				$( imgsWrap ).attr('aj-can-roll','0');
				$( imgsWrap ).attr( 'aj-index', thisIndex );
				$( imgsWrap ).animate( {left:-(thisIndex-1)*700+'px'}, '2000' ,function(){
					$(imgsWrap).attr('aj-can-roll','1');
				});
			}
			this.rollBalls( thisIndex-1 );
		}
	},
	rollBalls : function( index ){
		var balls = $( this.navBallWraps[this.navWhich] ).find( '.aj-ball' );
		$( balls ).removeClass( 'aj-select' );
		$( balls[index] ).addClass( 'aj-select' );
	},
	noMoreImgs : function( obj, type ){
		$( obj ).attr('aj-can-roll','0');
		if( type === 'left' ){
			$( obj ).animate({left:'40px'}).animate({left:'0px'},'slow',function(){
				auto();
			});
		}else{
			var left = parseInt( $(obj).css('left') );
			$( obj ).animate({left:left-40+'px'}).animate({left:left+'px'},'slow',function(){
				auto();
			});
		}
		function auto(){
			$(obj).attr('aj-can-roll','1');
		}
	},
	inital : function(){
		var moves = $( this.div ).find( '.aj-all-imgs-move' ),
			that = this,
			index = 0;
		$( moves ).each(function(){
			that.changeWidth( this );
			that.changeBallsNum( index );
			that.setPagesNum( this );
			index ++;
		});
	},
	changeWidth : function( obj ){
		var ones = $( obj ).find( '.aj-img-one' ),
			oneWidth = 175,
			totalWidth;
		totalWidth = ones.length*oneWidth;
		obj.style.width = totalWidth +'px';
	},
	changeBallsNum : function( index ){
		var ones = $( this.navBlocks[index] ).find( '.aj-img-one' ),
			pages = Math.ceil(ones.length / 4),
			html = this.navBallWraps[index].innerHTML;
		while( pages -- ){
			if( pages === 0 ){
				html = "<span class='aj-ball aj-select'></span>" + html;
			}else{
				html =  "<span class='aj-ball'></span>" + html;
			}
		}
		$( this.navBallWraps[index] ).html( html );
	},
	setPagesNum : function( obj ){
		var ones = $( obj ).find( '.aj-img-one' ); 
		$(obj).attr( 'aj-all-pages', Math.ceil(ones.length/4) );
	},
	ballsRollImgs : function( obj ){
		var parent = obj.parentNode,
			index = this.whichBallsWrap( parent ),
			index2 = this.whichBall( obj );
		
		var imgsWrap = $( this.div ).find( '.aj-all-imgs-move' );
		$(imgsWrap[index]).attr( 'aj-index', index2+1 );
		this.rollImgs( 'show', imgsWrap[index] );
	},
	whichBallsWrap : function( obj ){
		var index;
		for( var i=0; i<this.navBallWraps.length; i++ ){
			if( this.navBallWraps[i] === obj ){
				index = i;
				break;
			}
		}
		return index;
	},
	whichBall : function( obj ){
		var balls = $( obj.parentNode ).find( '.aj-ball' ), 
			index;
		for( var i=0; i<balls.length; i++ ){
			if( balls[i] === obj ){
				index = i;
				break;
			}
		}
		return index;
	},
	touch : function(){
		var moves = $( this.div ).find( '.aj-all-imgs-move' ),
			that = this;

		moves.each(function(){
			var move = this,
				mouse = {};
			
			mouse.down = {};
			mouse.up = {};
			mouse.anxia = false;
			
			$(move).on( 'mousedown',function( e ){
				
				mouse.anxia = true;
				mouse.down.x = e.clientX;
				mouse.down.y = e.clientY;
			});
			$(move).on( 'mousemove', function( e ){
				e.stopPropagation();
				e.preventDefault();
			});
			$(move).on( 'mouseup', function( e ){
				mouse.anxia = false;
				mouse.up.x = e.clientX;
				mouse.up.y = e.clientY;
				if( mouse.up.x - mouse.down.x > 30 ){
					that.rollImgs( 'left', move );
				}else if( mouse.down.x - mouse.up.x > 30 ){
					that.rollImgs( 'right', move );
				}
			});	
			
			move.ontouchstart = function( e ){
				
				mouse.down.x = e.pageX;
			};
			move.ontouchmove = function( e ){
				e.preventDefault();
			};
			move.ontouchend = function( e ){
				mouse.up.x = e.pageX;
				if( mouse.up.x - mouse.down.x > 30 ){
					that.rollImgs( 'left', move );
				}else if( mouse.down.x - mouse.up.x > 30 ){
					that.rollImgs( 'right', move );
				}
			};
			function print( obj ){
				var back = '';
				for( var xx in obj ){
					back += xx +'--'+ obj[xx] + '\n';
				}
				return back;
			}
		});
	}
};

$( document ).ready(function(){
	var prop = {};
	prop.div = $( '.aj-gds-roll-x' )[0];
	Effect( prop );
});
	
});