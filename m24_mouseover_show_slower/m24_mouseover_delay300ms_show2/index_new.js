var g = $("#J_nav_site"),
	attr = 'aj-mouseenter-timestamp';
if (g.length > 0) {
	//滚动
	function delayMouseover(jQueryDom, fn){
		jQueryDom.on("aj-delay-mouseover", {
			'attr' : 'aj-mouseenter-timestamp'
		}, function (e, fn) {
			var attr = e.data.attr;
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
		jQueryDom.trigger("aj-delay-mouseover", fn);
	}
	delayMouseover(g.find(".JCategoryChange li"), toggle);
	function toggle(obj) {
		g.find(".JCategoryChange li").removeClass("cur");
		
		$(obj).addClass("cur");
   
		$('.newLoading').hide();

		var panelObj = $(".JPanel" + $(obj).attr("data-id"));

		if (panelObj.length <= 0) {
			$(obj).closest('.JStore').find('.newLoading').show();
		} else {
			$(obj).closest('.JStore').find('.newLoading').hide();
		}

		$(obj).addClass("cur").siblings().removeClass("cur");
		$(".mall-pane").hide();
		panelObj.show();

		$(".JPanel" + $(obj).attr("data-id") + " img").each(function () {
			var $this = $(this);
			var arc = $this.attr("arc");
			if (arc && arc.length > 0) {
				$this.attr("src", arc);
				$this.removeAttr("arc");
			}
		});
	}
}