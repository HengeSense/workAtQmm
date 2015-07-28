(function(){
var timer = setInterval(function(){
	if( window.jQuery ){
		$(document).ready(function(){
			yy.start();
		});
		clearInterval(timer);
	}
},1000/12);
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
	prop.div = document.querySelector('.right_side .beyondHide');
	goodsImgBlock( prop );
}

function goodsImgBlock( prop ){
	if( this instanceof goodsImgBlock ){
		this.prop = prop;
		this.div = prop.div;
		this.imgs = document.querySelectorAll('.right_side .rightPanel .ninePicBox .lazy');
		this.divWrap = document.querySelector('.right_side .rightPanel .ninePicBox');
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
		c.addEvent( this.div, 'mouseover', function( ev ){
			var e = ev || window.event,
				target = e.target || e.srcElement;
			c.stopPropagation( e );
			if( that.isTargetA(target) ){
				that.showBlock( target );
			}
			if( that.isParentFloatDiv(target) ){
				$( target ).hide();
			}
		});
		c.addEvent( document, 'mouseover', function(){
			if( that.isFloatDivShow ){
				this.isFloatDivShow = false;
				$( c.ajax({obj:that.div,className:'aj-float-block'})[0] ).hide();
				$( c.ajax({obj:that.div,className:'aj-float-block'})[0] ).css({width:'0px'});
			}
		});
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
		div.setAttribute('style','position:absolute;display:none;padding-left:4px;width:0px;height:94px;background-color:white;border:1px solid #bebebe;');
		div.setAttribute('class','aj-float-block');
		this.divWrap.appendChild( div );
	},
	showBlock : function( obj ){
		if( obj.tagName.toLowerCase() === 'a' ){
			obj = obj.getElementsByTagName('img')[0];
		}
		var huakuai = c.ajax({obj:this.div,className:'aj-float-block'})[0],
			val = obj.getAttribute('alt'),
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
		$( huakuai ).css({ top:top_val+'px',left:left_val+'px'});
		if( cols <= 2 ){
			$( huakuai ).css({borderLeft:'none'});
			$( huakuai ).css({borderRight:'1px solid #bebebe'});
		}else{
			$( huakuai ).css({borderLeft:'1px solid #bebebe'});
			$( huakuai ).css({borderRight:'none'});
		}
		$( huakuai ).html("<p style='padding-top:8px;font-size:12px;line-height:18px;max-height:36px;overflow:hidden;'>"+val+"</p><p style='color:#f04848;line-height:20px;'>"+val.split(' ').pop()+"</p>");
		$( huakuai ).show();
		$( huakuai ).animate({width:this.huakuai.width+'px'},'fast');
		
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
		}else if( target.tagName.toLowerCase() === 'a' && target.getElementsByTagName('img').length>=1 ){
			return true;
		}else{
			return false;
		}
	}
};
var c = {
    stopPropagation : function(event){
        var event=c.getEvent(event);
		if(event.stopPropagation){
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },
    getEvent : function( event ){
        return event ? event : window.event;
    },
	ajax : function( prop ){  //prop->obj,tag,className
		return $( prop.obj ).find( '.'+prop.className );
	},
    addEvent : function( element, type, handler ){
		$( element ).on( type, handler );
    }
};
  

})()