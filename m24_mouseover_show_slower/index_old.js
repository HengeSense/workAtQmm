    var g = $("#J_nav_site"),
		attr = 'aj-mouseenter-timestamp';
    if (g.length > 0) {
        //滚动
		g.find(".JCategoryChange li").on("mouseenter mouseleave", function (e) {
			if (e.type === 'mouseenter') {
				$(this).attr(attr, + new Date());
			} else if (e.type === 'mouseleave') {
				console.log( (+ new Date()) - parseInt($(this).attr(attr), 10));
				$(this).removeAttr(attr);
			}
		});
        g.find(".JCategoryChange li").on("mouseover", function () {
			toggle(this);
        });
		function toggle(obj) {
			g.find(".JCategoryChange li").removeClass("cur")
            
            $(obj).addClass("cur")
       
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