var g = $("#J_nav_site"),
	attr = 'aj-mouseenter-timestamp';
g.find(".JCategoryChange li").on("mouseenter mouseleave", function (e) {
	if (e.type === 'mouseenter') {
		$(this).attr(attr, + new Date());
	} else if (e.type === 'mouseleave') {
		console.log( (+ new Date()) - parseInt($(this).attr(attr), 10));
		$(this).removeAttr(attr);
	}
});
g.find(".JCategoryChange li").on('mouseover', function () {
	var that = this;
	setTimeout(function () {
		if ($(that).attr(attr)) {	//如果300ms之后还有attr这个属性，说明悬停该元素超过300ms
			console.log("hover");
			g.find(".JCategoryChange li").removeClass("cur");
			$(that).addClass("cur");
		}
	}, 300);
});