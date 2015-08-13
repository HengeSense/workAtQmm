$(function () {
	function IconLine(div){
		this.div = $(div);
		this.randColor();
		this.swipe();
	}
	IconLine.prototype = {
		randColor : function () {
			var colors = [
				'#ffb700', '#ff68b9', '#56b2ff', '#ff67b9',
				'#a8dd99', '#f61d4b', '#31bd80', '#3ea3ff',
				'#ff7d00', '#ffb30f', '#e4000f'
			];
			var spans = this.div.find('.aj-a-bg');
			spans.each(function (index, obj) {
				$(this).css('backgroundColor', colors[index % (colors.length -1) ]);
				$(this).css('box-shadow', colors[index % (colors.length -1) ] + ' 0 0 2px');
			});
		},
		swipe : function () {
			var $this = this;
			$(function() {
				$this.div.slidesjs({
					navigation: {
						active : true,
						effect: "fade"
					},
					pagination: {
						active : true,
						effect: "fade"
					},
					effect: {
						fade: {
							speed: 400
						}
					}
				});
			});
			this.div.find('.aj-ul').show();
		}
	};

	var div = $('#aj-four-icons-line');
	var icl = new IconLine(div);
	
	$('#aj-top-types').find('.aj-one-type .aj-content-inside-roll').slidesjs({
		navigation: {
			effect: "fade"
		},
		pagination: {
			active : true,
			effect: "fade"
		},
		effect: {
			fade: {
				speed: 400
			}
		}
	});
	var good_colors = [
		'#ffb700', '#56b2ff', '#ff67b9',
		'#a8dd99', '#f61d4b', '#31bd80', '#3ea3ff',
		'#ff7d00', '#e4000f', '#ff68b9'
	];
	// index page module 10px border color
	var mobile_wrap = $('#aj-mobile-wrap');
	mobile_wrap.find('.aj-one-type .aj-color-border').each(function (index) {
		var color = good_colors[index % (good_colors.length -1)];
		$(this).css('backgroundColor', color);
		$(this).parents('.aj-header').find('.aj-more').css('color', color);
	});
	
	// index page top imgs roll
	$('#aj-mobile-wrap').find('.aj-index-imgs-roll').slidesjs({
		navigation: {
			active : false,
			effect: "fade"
		},
		pagination: {
			active : true,
			effect: "fade"
		},
		effect: {
			fade: {
				speed: 400
			}
		},
	   play: {
			active: true,
			effect: "slide",
			interval: 3000,
			auto: true,
			swap: false,
			pauseOnHover: false,
			restartDelay: 2500
		}		
	});
	
});

$(function () {
	// mid two modules toggle 
	var div = $('#aj-two-toggle');
	div.find('.aj-t-t-lar').click(function () {
		$(this).addClass('aj-select').siblings().removeClass('aj-select');
		div.find('.aj-m-c-one').hide().eq($(this).index()).show();
	});
	div.find('.aj-mid-content .loadMore').click(function () {
		$(this).html('<img style="width:25px;height:25px;" src="wait.gif" />');
	});
});

// for yan shi 
$(function () {
	var div = $('#aj-top-types'),
		arr = ['jpg', 'png', 'gif'],
		jpg = [2, 6, 9 , 10, 11],
		gif = [3, 4],
		png = [5, 7, 8];
	div.find('.aj-one-type').each(function () {
		$(this).find('.aj-a img').each(function () {
			var type = rand(arr);
			$(this).attr('src', 'imgs/' + rand(eval(type)) + '.' + type);
		});
	});
	function rand(arr){
		return arr[Math.floor(Math.random() * arr.length)];
	}
});