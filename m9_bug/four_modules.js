

//替换main.js 2511行处的代码
/*

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
			}
		}
	}
},1000/12);

*/



function fixed_right( prop ) {		//换掉原有的fixed_right函数
	
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


(function(){		// 水平滚动的模块

var yy = {};

yy.goodsImgBlock = function(){
	var prop = {};
	prop.div = $( '.aj-gds-roll-x' )[0];
	Effect( prop );
}

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
			console.log(1);
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
		console.log( index + '--' + index2 );
		
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
	}

};

yy.goodsImgBlock();

})();


(function(){		// most clicked imgs 3 modules show area

var yy = {};


yy.goodsImgTri = function(){
	var prop = {},
		bool = false;
	var timer = setInterval(function(){
		prop.div = $( '.aj-box-rank' )[0];
		
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
		this.nav = $( this.div ).find( '.aj-nav-one' );
		this.blocks = $( this.div ).find( '.aj-imgs-wrap' );
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

yy.goodsImgTri();

})();

(function(){		//9宫格图片


var yy = {};
yy.startBegin = false;
yy.start = function(){
	if( !yy.startBegin ){
		yy.startBegin = true;
		yy.mouseoverShowBlock();
	}
}

yy.mouseoverShowBlock = function(){
	var prop = {};
	prop.div = $('.right_side .beyondHide');
	goodsImgBlock( prop );
}

function goodsImgBlock( prop ){
	if( this instanceof goodsImgBlock ){
		this.prop = prop;
		this.div = prop.div;
		this.imgs = $('.right_side .rightPanel .ninePicBox .lazy');
		this.divWrap = $('.right_side .rightPanel .ninePicBox')[0];
		this.isFloatDivShow = false;
		this.huakuai = {};
		this.huakuai.width = 98;
		this.initial();
		this.addFloatDivBlock();
		this.event();
	}else{
		return new goodsImgBlock( prop );
	}
}
goodsImgBlock.prototype={
	initial : function(){
		$('.rightPanel .ninePicBox').css({position:'relative'});
	},
	event : function(){
		var that = this;
		$( this.div ).on( 'mouseover' , function( ev ){
			var e = ev,
				target = e.target;
			e.stopPropagation();
			
			if( that.isTargetA(target) ){
				that.showBlock( target );
			}
			if( that.isParentFloatDiv(target) ){
				// $( target ).hide();
				that.hide();
			}			
		});
		$( document ).on( 'mouseover', function(){
			that.isFloatDivShow = false;
			that.hide();
		});
	},
	hide : function(){
		if( $( this.div ).find( '.aj-float-block' ).css('display').toLowerCase() === 'block' ){
			$( this.div ).find( '.aj-float-block' ).hide();
			$( this.div ).find( '.aj-float-block' ).css( {width:'0px'} );
		}
	},
	isParentFloatDiv : function( target ){
		var parent = target;
		while( !$(parent).hasClass('aj-float-block') && parent !== document ){
			parent = parent.parentNode;
		}
		return $(parent).hasClass('aj-float-block') ? true : false; 
	},
	addFloatDivBlock : function(){
		var div = document.createElement('div');
		$(div).attr('style','position:absolute;display:none;padding-left:4px;width:0px;height:94px;background-color:white;border:1px solid #bebebe;');
		$(div).attr('class','aj-float-block');
		this.divWrap.appendChild( div );
	},
	showBlock : function( obj ){
		if( obj.tagName.toLowerCase() === 'a' ){
			obj = $( obj ).find( 'img' )[0];
		}
		var huakuai = $( this.div ).find( '.aj-float-block' )[0],
			val = $( obj ).attr('alt'),
			index = this.whichImg( obj ),
			rows,cols,cols_final,
			off_y = 16,
			left_val,top_val;
		rows = Math.floor( index/3 ) + 1;
		cols = index - (rows-1)*3 + 1;
		switch( cols ){
			case 1:
				left_val = 98;
				break;
			case 2:
				left_val = 200;
				break;
			case 3:
				left_val = 105;
				break;
		}
		switch( rows ){
			case 1:
				top_val = 16;
				break;
			case 2:
				top_val = 117;
				break;
			case 3:
				top_val = 218;
				break;
		}
		$( huakuai ).css({ top:top_val+'px',left:left_val+'px' });
		if( cols <= 2 ){
			$( huakuai ).css({borderLeft:'none'});
			$( huakuai ).css({borderRight:'1px solid #bebebe'});
		}else{
			$( huakuai ).css({borderLeft:'1px solid #bebebe'});
			$( huakuai ).css({borderRight:'none'});
		}
		$( huakuai ).html("<p style='padding-top:8px;font-size:12px;line-height:18px;max-height:36px;overflow:hidden;'>"+val+"</p><p style='color:#f04848;line-height:20px;'>"+val.split(' ').pop()+"</p>");
		$( huakuai ).css({width:'0px'}).show().animate({width:this.huakuai.width+'px'},'fast');
		this.isFloatDivShow = true;
	},
	whichImg : function( target ){
		var index;
		for( var i=0; i<this.imgs.length; i++ ){
			(function(obj){
				if( obj === target ){
					index = i;
				}
			})(this.imgs[i])
		}
		return index;
	},
	isTargetA : function( target ){
		if( $(target).hasClass('lazy') ){
			return true;
		}else if( $(target)[0].tagName.toLowerCase() === 'a' && target.getElementsByTagName('img').length>=1 ){
			return true;
		}else{
			return false;
		}
	}
};

yy.start();

})()
