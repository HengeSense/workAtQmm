/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'qmm\'">' + entity + '</span>' + html;
	}
	var icons = {
		'qmm-icon-iconfont-check2': '&#xe625;',
		'qmm-icon-iconfont-jiajudianqibaihuo': '&#xe621;',
		'qmm-icon-iconfont-shouji': '&#xe61f;',
		'qmm-icon-iconfont-diannao': '&#xe615;',
		'qmm-icon-iconfont-jiazhuangicon': '&#xe619;',
		'qmm-icon-iconfont-fushi': '&#xe616;',
		'qmm-icon-iconfont-muying': '&#xe61b;',
		'qmm-icon-iconfont-badaxilietubiao01': '&#xe614;',
		'qmm-icon-iconfont-shipin': '&#xe61e;',
		'qmm-icon-iconfont-qiche': '&#xe61c;',
		'qmm-icon-iconfont-tubiao': '&#xe620;',
		'qmm-icon-iconfont-location': '&#xe61a;',
		'qmm-icon-iconfont-fuyiyaofei': '&#xe617;',
		'qmm-icon-iconfont-qita': '&#xe61d;',
		'qmm-icon-iconfont-jiadian': '&#xe618;',
		'qmm-icon-iconfont-comment': '&#xe622;',
		'qmm-icon-iconfont-coin2': '&#xe623;',
		'qmm-icon-iconfont-coin': '&#xe624;',
		'qmm-icon-iconfont-newnew': '&#xe612;',
		'qmm-icon-iconfont-check': '&#xe613;',
		'qmm-icon-local_taxi': '&#xe1f1;',
		'qmm-icon-local_see': '&#xe1ef;',
		'qmm-icon-more': '&#xe21f;',
		'qmm-icon-loyalty': '&#xe2ae;',
		'qmm-icon-notifications': '&#xe24a;',
		'qmm-icon-face': '&#xe290;',
		'qmm-icon-grade': '&#xe299;',
		'qmm-icon-history': '&#xe29d;',
		'qmm-icon-view_list': '&#xe301;',
		'qmm-icon-view_module': '&#xe302;',
		'qmm-icon-view_quilt': '&#xe303;',
		'qmm-icon-work': '&#xe30b;',
		'qmm-icon-camera_enhance': '&#xe30e;',
		'qmm-icon-cab': '&#xe600;',
		'qmm-icon-mic': '&#xe609;',
		'qmm-icon-book': '&#xe601;',
		'qmm-icon-price-tag': '&#xe602;',
		'qmm-icon-price-tags': '&#xe60b;',
		'qmm-icon-coin-yen': '&#xe603;',
		'qmm-icon-pushpin': '&#xe60c;',
		'qmm-icon-history2': '&#xe610;',
		'qmm-icon-clock': '&#xe611;',
		'qmm-icon-display': '&#xe604;',
		'qmm-icon-database': '&#xe605;',
		'qmm-icon-hour-glass': '&#xe606;',
		'qmm-icon-glass': '&#xe607;',
		'qmm-icon-fire': '&#xe608;',
		'qmm-icon-attachment': '&#xe60d;',
		'qmm-icon-happy2': '&#xe60e;',
		'qmm-icon-delicious': '&#xe60f;',
		'qmm-icon-stackoverflow': '&#xe60a;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/qmm-icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
