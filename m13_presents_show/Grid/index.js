$(function () {
	function Stamp(div) {
		if (this instanceof Stamp) {
			this.div = div;
			this.initial();
			this.hover();
			this.event();
		} else {
			return new Stamp(div);
		}
	}
	Stamp.prototype = {
		initial : function () {
			this.calculateMaxleft();
		},
		event : function () {
			var that = this;
			$(window).on('resize', function () {
				that.calculateMaxleft();
			});
		},
		hover : function () {
			var html,
				that = this;
			$(this.div).on("mouseenter mouseleave", '.list', function (event) {
				if (event.type === 'mouseenter') {
					if (!$(this).attr('aj-has-hover')) {
						html = $(this).find('.aj-desc').html() +
							"<div class='aj-stamps aj-stamps-y'>" +
							$(this).find('.aj-stamps').html() +
							"</div>";
						var target = event.target;
						$(this).find('.aj-desc').html(html);
						$(this).attr('aj-has-hover', '1');
					}
					$(this).find('.aj-favor').css('display', 'block');
					if (that.isLastInline(this)) {
						$(this).find('.aj-list-inside-wrap').css({'float' : 'right'});
						// that.doIflastInline( this, 'enter' );
					}
				} else if (event.type === 'mouseleave') {
					$(this).find('.aj-favor').css('display', 'none');
					// if (that.isLastInline(this)) {
						// that.doIflastInline( this, 'leave' );
					// }
				}
			});
			$(this.div).on('mouseover', '.itemName .black', function () {
				if (!$(this).attr('title')) {
					$(this).attr('title', $.trim($(this).html()));
				}
			});
			$(this.div).on('mouseover', '.aj-favor', function () {
				if (!$(this).attr('title') && !$(this).hasClass('aj-have-favor')) {
					$(this).attr('title', '添加到收藏');
				} else if ($(this).hasClass('aj-have-favor')) {
					$(this).attr('title', '取消收藏');
				}
			});
			$(this.div).on('click', '.aj-favor', function () {
				$(this).toggleClass('aj-have-favor');
				$(this).removeAttr('title');
			});
		},
		calculateMaxleft : function () {
			var	divs = $(this.div).find('.list'),
				left = 0,
				i;
			if (divs.length < 4){
				return false;
			}
			for (i = 0; i <= 5; i++) {
				if ($(divs[i]).offset().left >= left) {
					left = $(divs[i]).offset().left;
				} else {
					break;
				}
			}
			this.maxLeft = left;
		},
		isLastInline : function (div) {
			return (Math.abs($(div).offset().left - this.maxLeft) < 10) ?
						true : false;
		}
		// doIflastInline : function( div, kind ){
			// switch( kind ){
				// case "enter":
					// $( div ).addClass( 'list_last_of_line' );
					// break;
				// case "leave":
					// $( div ).removeClass( 'list_last_of_line' );
					// break;
				// default:
					// break;
			// }
		// }
	};
	var div = $('.discovery_list')[0];
	if (div) {
		Stamp(div);
	}
});