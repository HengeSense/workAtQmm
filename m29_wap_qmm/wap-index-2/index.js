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
					width: 940,
					height: 528,
					navigation: {
						effect: "fade"
					},
					pagination: {
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
	
	$('#aj-top-types').find('.aj-one-type .aj-content').slidesjs({
		width: 940,
		height: 528,
		navigation: {
			effect: "fade"
		},
		pagination: {
			effect: "fade"
		},
		effect: {
			fade: {
				speed: 400
			}
		}
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