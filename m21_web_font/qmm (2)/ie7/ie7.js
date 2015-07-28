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
		'qmm-icon-cab': '&#xe600;',
		'qmm-icon-mic': '&#xe609;',
		'qmm-icon-book': '&#xe601;',
		'qmm-icon-price-tag': '&#xe602;',
		'qmm-icon-coin-yen': '&#xe603;',
		'qmm-icon-display': '&#xe604;',
		'qmm-icon-database': '&#xe605;',
		'qmm-icon-hour-glass': '&#xe606;',
		'qmm-icon-glass': '&#xe607;',
		'qmm-icon-fire': '&#xe608;',
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
