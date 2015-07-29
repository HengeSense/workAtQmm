/*jslint browser : true */
/*global $, jQuery*/
(function () {
	"use strict";
	var ceshi = {},
		yy = {},
		model = [
			{
				'title' : '服饰箱包',
				'icon' : 'qmm-icon-work',
				'ul' : [
					{
						'title' : '日用品',
						'ul' : [
							{'title' : '衣服'},
							{'title' : '宝宝玩乐'},
							{'title' : '奶瓶/喂养用品'},
							{'title' : '婴儿床'},
							{'title' : '安全座椅安全'},
							{'title' : '洗护健康'}
						]
					},
					{
						'title' : '消耗品',
						'ul' : [
							{'title' : '尿布/湿巾'},
							{'title' : '奶粉'}
						]
					},
					{
						'title' : '呵护',
						'ul' : [
							{'title' : '孕妇/妈妈用品'}
						]
					}
				]
			},
			{
				'title' : '服饰箱包',
				'icon' : 'qmm-icon-work',
				'ul' : [
					{
						'title' : '日用品',
						'ul' : [
							{'title' : '衣服'},
							{'title' : '宝宝玩乐'},
							{'title' : '奶瓶/喂养用品'},
							{'title' : '婴儿床'},
							{'title' : '安全座椅安全'},
							{'title' : '洗护健康'},					
							{'title' : '衣服'},
							{'title' : '宝宝玩乐'},
							{'title' : '奶瓶/喂养用品'},
							{'title' : '婴儿床'},
							{'title' : '安全座椅安全'},
							{'title' : '洗护健康'}
						]
					},
					{
						'title' : '消耗品',
						'ul' : [
							{'title' : '尿布/湿巾'},
							{'title' : '奶粉'}
						]
					},
					{
						'title' : '呵护',
						'ul' : [
							{'title' : '孕妇/妈妈用品'}
						]
					}
				]
			},
		],
		ceshi_num = 4;
	while (ceshi_num) {
		model.push(model[model.length-1]);
		ceshi_num -= 1;
	}
	console.log(model);
	$(document).ready(function () {
		ceshi.start();
		yy.start();
	});
	function NavLine(div) {
		if (this instanceof NavLine) {
			this.div = div;
			if (this.div.innerHTML !== '') {
				this.overflowTitle();
				this.cardAutoWidth();				
			}
		} else {
			return new NavLine(div);
		}
	}
	NavLine.prototype = {
		render : function (model) {
			var inside = document.createElement('div'),
				ul = document.createElement('ul'),
				i, j, m,
				li = document.createElement('li'),
				obj,
				card = document.createElement('div'),
				html = '';
			$(this.div).addClass("aj-nav-line");
			$(inside).addClass('aj-n-inside');
			$(ul).addClass('aj-ul');
			for (i = 0; i < model.length; i++) {
				html = '';
				obj = model[i];
				if (obj['icon']) {
					html += "<li class='aj-li'><i class='" + obj['icon'] + "'></i>";
				}
				if (obj['title'] !== undefined) {
					html += "<a class='aj-nav-a' href=''>" + obj['title'] + "</a>";
				}
				html += "<div class='aj-card'><div class='aj-fill-there'></div>" +
							"<div class='aj-huakuai'>" +
							"<div class='aj-h-inside'></div>" +
							"</div>";
				if (obj['ul']) {
					html += "<div class='aj-content'>" +
										"<div class='aj-c-one'>";
					for (j = 0; j < obj['ul'].length; j++) {
						html += "<div class='aj-c-o-div'>";
						if (obj['ul'][j].title) {
							html += "<h2 class='aj-title'>" + obj['ul'][j].title + "</h2>";
						}
						if (obj['ul'][j].ul) {
							html += "<ul class='aj-c-ul'>";
							for (m = 0; m < obj['ul'][j].ul.length; m++){
								html += "<li><a href=''>" + obj['ul'][j]['ul'][m].title + "</a></li>";
							}
							html += "</ul>";
						}
						html += "</div>";
					}
					html += "</div></div></div></li>";
				}
				$(ul).append(html);
			}
			$(inside).append(ul);
			$(this.div).append(inside);
			this.overflowTitle();
			this.cardAutoWidth();
		},
		overflowTitle : function () {
			$(this.div).find('.aj-c-ul li a').on('mouseenter', function () {
				if ($(this).width() < this.scrollWidth && !$(this).attr('title')) {
					$(this).attr('title', $(this).html());
				}
			});
		},
		cardAutoWidth : function () {	//根据浮动标签内部内容自调整width
			var cards = $(this.div).find('.aj-card');
			cards.each(function () {
				var width200 = false,
					width300 = false,
					lis;
				$(this).find('.aj-c-ul').each(function () {
					lis = $(this).find('li');
					if (lis.length > 1) {
						width200 = true;
					}
					if (lis.length >= 9) {
						width300 = true;
					}
				});
				if (width300) {
					$(this).css('width', '300px');
				} else if (width200) {
					$(this).css('width', '200px');
				} else {
					$(this).css('width', '100px');
				}
			});
		}
	};

	ceshi.start = function () {
		var card = $('.aj-nav-line .aj-card')[0];
		$('.aj-nav-line .aj-li').each(function () {
			if ($(this).find('.aj-card').length === 0) {
				$($(card).clone()).appendTo(this);
			}
		});
	};
	yy.start = function () {
		var div = $('.aj-nav-line-copy')[0];
		NavLine(div);
		
		var div2 = $('.aj-render-nav')[0],
			nav;
		nav = NavLine(div2);
		nav.render(model);
	};
}());