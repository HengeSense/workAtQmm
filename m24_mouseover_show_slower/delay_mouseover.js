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
	
		g.find(".JCategoryChange li").on("aj-delay-mouseover", {
			attr ：'aj-mouseenter-timestamp'
		}, function (event, fn) {
			if (e.type === 'mouseenter') {
				$(this).attr(attr, + new Date());
			} else if (e.type === 'mouseleave') {
				console.log( (+ new Date()) - parseInt($(this).attr(attr), 10));
				$(this).removeAttr(attr);
			}
		});	