$(function () {
    // 顶部两行八个icons 滚动
    (function () {
        function IconLine(div){
            var uls;
            this.div = $(div);
            this.randColor();
            uls = this.div.find('.aj-ul');
            if (uls.length > 1) {
                this.swipe();
            } else {
                uls.show();
            }
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
        var div = $('#aj-four-icons-line'),
            icl = new IconLine(div);
    })();
    // 水平滚动 一行四个
    (function () {
        $('#aj-top-types').find('.aj-one-type .aj-content-inside-roll').each(function () {
            var uls = $(this).find('.aj-ul');
            if (uls.length > 1) {
                $(this).slidesjs({
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
            } else {
                uls.show();
            }
        });
    })();
    // border color and block inside "more" color
    (function (){
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
    })();
	// index page top imgs roll
    (function () {
        $('#aj-mobile-wrap').find('.aj-index-imgs-roll').each(function () {
            var links = $(this).find('.aj-link');
            if (links.length > 1) {
                $(this).slidesjs({
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
                        pauseOnHover: true,
                        restartDelay: 2500
                    }
                });
            } else {
                links.show();
            }
        });
    })();
    // mid two modules toggle
    (function () {
        var div = $('#aj-two-toggle');
        div.find('.aj-t-t-lar').click(function () {
            $(this).addClass('aj-select').siblings().removeClass('aj-select');
            div.find('.aj-m-c-one').hide().eq($(this).index()).show();
        });
        div.find('.aj-mid-content .loadMore').click(function () {
            $(this).addClass('aj-is-loading');
        });
    })();
});


// for yan shi 
// $(function () {
	// var div = $('#aj-top-types'),
		// arr = ['jpg', 'png', 'gif'],
		// jpg = [2, 6, 9 , 10, 11],
		// gif = [3, 4],
		// png = [5, 7, 8];
	// div.find('.aj-one-type').each(function () {
		// $(this).find('.aj-a img').each(function () {
			// var type = rand(arr);
			// $(this).attr('src', 'imgs/' + rand(eval(type)) + '.' + type);
		// });
	// });
	// function rand(arr){
		// return arr[Math.floor(Math.random() * arr.length)];
	// }
// });