var g = $("#J_nav_site"),
	attr = 'aj-mouseenter-timestamp';
		
	
		g.find(".JCategoryChange li").on("aj-delay-mouseover", {
			'attr' : 'aj-mouseenter-timestamp'
		}, function (e, fn) {
			$(this).on('mouseenter mouseleave', function (e) {
				if (e.type === 'mouseenter') {
					$(this).attr(attr, + new Date());
				} else if (e.type === 'mouseleave') {
					console.log( (+ new Date()) - parseInt($(this).attr(attr), 10));
					$(this).removeAttr(attr);
				}
			});
			$(this).on('mouseover', function () {
				var that = this;
				setTimeout(function () {
					if ($(that).attr(attr)) {
						fn(that);
					}
				}, 300);				
			});
		});