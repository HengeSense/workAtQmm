(function(){

var yy = {};

yy.start = function(){
	yy.goodsImgBlock();
}
yy.goodsImgBlock = function(){
	var prop = {};
	prop.div = document.querySelector( '.aj-gds-roll-x' );
	Effect( prop );
}

function Effect( prop ){
	if( this instanceof Effect ){
		this.prop = prop;
		this.div = prop.div;
		this.pageLimit = 10;
		this.nav = c.ajax({obj:this.div,className:'aj-nav-one'});
		this.navBlocks = c.ajax({obj:this.div,className:'aj-roll-block'});
		this.navBallWraps = c.ajax({obj:this.div,className:'aj-small-balls'});
		this.navWhich = 0;
		this.inital();
		this.event();
	}else{
		return new Effect( prop );
	}
}
Effect.prototype = {
	event : function(){
		var that = this;
		$( this.div ).on( 'click', function(ev){
			var e = ev || window.event,
				target = e.target || e.srcElement;
			if( $(target).hasClass( 'aj-nav-one' ) ){
				that.navChange( target );
			}
			if( $(target).hasClass( 'aj-roll-x-hk' ) ){
				that.rollImgs( target.getAttribute( 'aj-index' ), c.ajax({obj:target.parentNode,className:'aj-all-imgs-move'})[0] );
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
			move_x;
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
			
			var insideAllPages = parseInt(imgsWrap.getAttribute('aj-all-pages'));
			if( thisIndex > insideAllPages ){
				thisIndex = insideAllPages;
				this.noMoreImgs( imgsWrap, 'right' );
			}else if ( thisIndex < 1 ){
				thisIndex = 1;
				this.noMoreImgs( imgsWrap, 'left' );
			}else{
				imgsWrap.setAttribute('aj-can-roll','0');
				imgsWrap.setAttribute( 'aj-index', thisIndex );
				$( imgsWrap ).animate( {left:-(thisIndex-1)*700+'px'}, '2000' ,function(){
					imgsWrap.setAttribute('aj-can-roll','1');
				});
			}
			this.rollBalls( thisIndex-1 );
		}
	},
	rollBalls : function( index ){
		var balls = c.ajax({obj:this.navBallWraps[this.navWhich],className:'aj-ball'});
		$( balls ).removeClass( 'aj-select' );
		$( balls[index] ).addClass( 'aj-select' );
	},
	noMoreImgs : function( obj, type ){
		obj.setAttribute('aj-can-roll','0');
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
			obj.setAttribute('aj-can-roll','1');
		}
	},
	inital : function(){
		var moves = c.ajax({obj:this.div,className:'aj-all-imgs-move'}),
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
		var ones = c.ajax({obj:obj,className:'aj-img-one'}),
			oneWidth = 175,
			totalWidth;
		totalWidth = ones.length*oneWidth;
		obj.style.width = totalWidth +'px';
	},
	changeBallsNum : function( index ){
		var ones = c.ajax({obj:this.navBlocks[index],className:'aj-img-one'}),
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
		var ones = c.ajax({obj:obj,className:'aj-img-one'});
		obj.setAttribute( 'aj-all-pages', Math.ceil(ones.length/4) );
	},
	ballsRollImgs : function( obj ){
		var parent = obj.parentNode,
			index = this.whichBallsWrap( parent ),
			index2 = this.whichBall( obj );
		
		var imgsWrap = c.ajax({obj:this.div,className:'aj-all-imgs-move'});
		imgsWrap[index].setAttribute( 'aj-index', index2+1 );
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
		var balls = c.ajax({obj:obj.parentNode,className:'aj-ball'}),
			index;
		for( var i=0; i<balls.length; i++ ){
			if( balls[i] === obj ){
				index = i;
				break;
			}
		}
		return index;
	},

};

var c = {
	ajax : function( prop ){
		return $( prop.obj ).find( '.'+prop.className );
	},
}

yy.start();

})();


(function(){

var yy = {};

yy.start = function(){
	yy.goodsImgTri();
}

yy.goodsImgTri = function(){
	var prop = {},
		bool = false;
	var timer = setInterval(function(){
		prop.div = document.querySelector( '.aj-box-rank' );
		
		if( prop.div && !bool ){
			Effect2( prop );
			bool = true;
			clearInterval( timer );
		}
	
	},1000/12);
}

function Effect2( prop ){
	if( this instanceof Effect2 ){
		this.prop = prop;
		this.div = prop.div;
		this.nav = c.ajax({obj:this.div,className:'aj-nav-one'});
		this.blocks = c.ajax({obj:this.div,className:'aj-imgs-wrap'});
		this.initial();
		this.event();
	}else{
		return new Effect2( prop );
	}
}
Effect2.prototype={
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
		var ones = c.ajax({obj:obj,className:'aj-one'}),
			index = 1,
			zhishi;
		$( ones ).each(function(){
			zhishi = c.ajax({obj:this,className:'aj-index'})[0];
			zhishi.innerHTML = index;
			index++;
		});
	},
	setMinHeight : function(){
		var blocks = this.blocks,
			arr = [],
			num;
		$( blocks ).each(function(){
			arr.push( c.ajax({obj:this,className:'aj-one'}).length );
		});
		num = arr.sort(function( a, b ){
			return a-b;
		}).pop();
		$( blocks[0].parentNode.parentNode ).css({minHeight:num*100+'px'});
	},
};

var c = {
	ajax : function( prop ){
		return $( prop.obj ).find( '.'+prop.className );
	},
}

yy.start();
})()

/* (function(){

var yy = {};

yy.start = function(){
	yy.goodsImgTri();
}

yy.goodsImgTri = function(){
	var prop = {},
		bool = false;
	var timer = setInterval(function(){
		prop.div = document.querySelector( '.aj-box-rank' );
		
		if( prop.div && !bool ){
			Effect2( prop );
			bool = true;
			clearInterval( timer );
		}
	
	},1000/12);
}

function Effect2( prop ){
	if( this instanceof Effect2 ){
		this.prop = prop;
		this.div = prop.div;
		this.nav = c.ajax({obj:this.div,className:'aj-nav-one'});
		this.blocks = c.ajax({obj:this.div,className:'aj-imgs-wrap'});
		this.initial();
		this.event();
	}else{
		return new Effect2( prop );
	}
}
Effect2.prototype={
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
		var ones = c.ajax({obj:obj,className:'aj-one'}),
			index = 1,
			zhishi;
		$( ones ).each(function(){
			zhishi = c.ajax({obj:this,className:'aj-index'})[0];
			zhishi.innerHTML = index;
			index++;
		});
	},
	setMinHeight : function(){
		var blocks = this.blocks,
			arr = [],
			num;
		$( blocks ).each(function(){
			arr.push( c.ajax({obj:this,className:'aj-one'}).length );
		});
		num = arr.sort(function( a, b ){
			return a-b;
		}).pop();
		$( blocks[0].parentNode.parentNode ).css({minHeight:num*100+'px'});
	},
};

var c = {
	ajax : function( prop ){
		return $( prop.obj ).find( '.'+prop.className );
	},
}

yy.start();
})() */