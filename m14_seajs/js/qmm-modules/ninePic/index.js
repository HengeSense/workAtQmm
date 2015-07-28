define(function( require, exports, module ){
	
function NinePic( prop ){
	if( this instanceof NinePic ){
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
		return new NinePic( prop );
	}
}
NinePic.prototype={
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
$( document ).ready(function(){
	var prop = {};
	prop.div = $('.right_side .beyondHide');
	NinePic( prop );
});
});