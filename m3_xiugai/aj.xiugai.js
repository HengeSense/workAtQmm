(function(){

$(document).ready(function(){
	yy.start();
});
var yy = {};
yy.start = function(){
	yy.search();
} 

yy.search = function(){
	var prop = {};
	prop.div = c.querySelector( '.search' );
	prop.zhishi = c.aj('search-hot-stores');
	Search( prop );
}

function Search( prop ){
	if( this instanceof Search ){
		this.prop = prop;
		this.div = prop.div;
		this.isBoxShow = false;
		this.searchBoxWrap = c.querySelector('.search .J-searchbox_tabs');
		this.input = c.ajax({obj:this.div,className:'aj_search_input'})[0];
		this.event();
		this.initialZhishiPosition();
		this.selectStyle();
	}else{
		return new Search( prop );
	}
}
Search.prototype={
	event : function(){
		var that = this;
		c.addEvent( this.div, 'mouseover', function(ev){
			var e = ev || window.event,
				target = e.target || e.srcElement;
			c.stopPropagation( e );
			that.toggleSearchBox( target );
			
		});
		c.addEvent( this.div, 'click', function(ev){
			var e = ev || window.event,
				target = e.target || e.srcElement;
			
			if( $(target).hasClass('searchbox_tab') ){
				that.toggleValue( target );
			}
		});
		c.addEvent( document, 'mouseover', function(){
			that.toggleSearchBox( document );
		});
		c.addEvent( this.input, 'focus', function(){
			that.toggleZhishi( true );
		});
		c.addEvent( document, 'click', function(){
			that.toggleZhishi( false );
		});
		c.addEvent( this.prop.zhishi, 'click', function(ev){
			var e = ev || window.event;
			c.stopPropagation(e);
		});
		c.addEvent( this.input, 'click', function(ev){
			var e = ev || window.event;
			c.stopPropagation(e);
		});
	},
	toggleSearchBox : function( target ){
		var that = this,
			searchBoxWrap = this.searchBoxWrap,
			searchBox = c.querySelectorAll('.search .J-searchbox_tabs .searchbox_tab');
		if( this.isInsideSerarchBox( target ) ){
			(!this.isBoxShow) && (function(){
				that.isBoxShow = true;
				$( searchBoxWrap ).css({overflow:'visible'});
			})();
			$('.search .search_container .tri').addClass('aj-arrow-down');
		}else{
			(this.isBoxShow) && (function(){
				that.isBoxShow = false;
				$( searchBoxWrap ).css({overflow:'hidden'});
			})()
			$('.search .search_container .tri').removeClass('aj-arrow-down');
		}
	},
	toggleValue : function( target ){
		var that = this,
			words = target.getAttribute('keywords'),
			searchBoxWrap = this.searchBoxWrap,
			searchBox = c.querySelectorAll('.search .J-searchbox_tabs .searchbox_tab');

		if( target.innerHTML != searchBox[0].innerHTML ){
			//searchBoxWrap.insertBefore( searchBox[1], searchBox[0] );
			$( searchBox[1] ).insertBefore( searchBox[0] );
			this.input.setAttribute( 'placeholder', words );
		}
	},
	isInsideSerarchBox : function( target ){
		var parent = target;
		while( parent !== this.searchBoxWrap && parent !== this.div && parent!==document){
			parent = parent.parentNode;
		}
		return parent === this.searchBoxWrap ? true : false;
	},
	initialZhishiPosition : function(){
		var zhishi = this.prop.zhishi,
			box = this.input.getBoundingClientRect(),
			offset = 4;
		zhishi.setAttribute('style','display:none;top:'+box.bottom+'px;left:'+(box.left-offset)+'px;width:'+(box.right-box.left+offset-1)+'px;');
	},
	toggleZhishi : function( bool ){
		if( bool ){
			$( this.prop.zhishi ).show();
		}else{
			$( this.prop.zhishi ).hide();
		}
	},
	selectStyle : function(){
		var lis = c.querySelectorAll('#search-hot-stores .list-hook .keyinfo');
/* 		lis.each(function( obj ){
			c.addEvent( this, 'mouseover', function(){
				lis.each(function( obj ){
					$( this ).removeClass('selected');
				});
				$( this ).addClass('selected');
			});
		}); */
		for( var i = 0; i< lis.length; i++ ){
			(function(obj){
				c.addEvent( obj, 'mouseover', function(){
					for( var i=0; i< lis.length; i++ ){
						$( lis[i] ).removeClass('selected');
					}
					$( obj ).addClass('selected');
				});				
			})(lis[i])
		}
	},
};
})()

//---END