var g = $("#J_nav_site");
//悬停时间超过300ms时候触发mouseover事件
g.find(".JCategoryChange li").on("mouseenter mouseleave", function (e) {
	var attr = 'aj-mouseenter-timestamp';
	if (e.type === 'mouseenter') {
		$(this).attr(attr, + new Date());
	} else if (e.type === 'mouseleave') {
		console.log( (+ new Date()) - parseInt($(this).attr(attr), 10));
		$(this).removeAttr(attr);
	}
});