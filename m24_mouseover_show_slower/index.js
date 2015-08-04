    //首页商家导航的类别切换
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
		
        g.find(".JCategoryChange li").mouseover(function () {
            var that = this;
			setTimeout(function () {
				if ($(that).attr(attr)) {	//如果300ms之后还有attr这个属性，说明悬停该元素超过300ms
					console.log("hover");
					g.find(".JCategoryChange li").removeClass("cur");
					
					$(that).addClass("cur");
			   
					$('.newLoading').hide();

					var panelObj = $(".JPanel" + $(this).attr("data-id"));

					if (panelObj.length <= 0) {
						$(this).closest('.JStore').find('.newLoading').show();
					} else {
						$(this).closest('.JStore').find('.newLoading').hide();
					}

					$(this).addClass("cur").siblings().removeClass("cur");
					$(".mall-pane").hide();
					panelObj.show();

					$(".JPanel" + $(this).attr("data-id") + " img").each(function () {
						var $this = $(this);
						var arc = $this.attr("arc");
						if (arc && arc.length > 0) {
							$this.attr("src", arc);
							$this.removeAttr("arc");
						}
					});
				}
			}, 300);
        });


        g.find(".list-shop-word .item").on("mouseover", function () {
            $(this).addClass("item-hover")
        }).on("mouseout", function () {
            $(this).removeClass("item-hover")
        });

        g.find(".list-mall li").on("mouseover", function () {
            $(this).addClass("hover")
        }).on("mouseout", function () {
            g.find(".list-mall").css("z-index", 1);
            $(this).removeClass("hover")
        });

        $("#J_nav_site .con").on("mouseover", function (ev) {
            var e = ev || window.event,
		target = e.target || e.srcElement,
		obj;
            //bug1
            if (obj = ajIsParentLi(target)) {
                var $this = $(obj);
                $this.addClass("hover");
                var $ops = $this.find(".ops");
                if ($ops.attr("load") != "1") {
                    $ops.attr("load", "1");
                    var goTemplate = '<a href="' + $this.attr("outlink") + '" target="_blank" class="go-shopping" hidefocus="true">去购物</a>'
							+ '<a href="' + $this.attr("quanlink") + '" target="_blank"  class="go-detail" hidefocus="true">优惠券</a>';

                    $ops.html(goTemplate);
                }
                $ops.attr("style", "bottom: 2px;");
            }
            //bug2
            if (obj = ajIsParentPoptipInfo(target)) {
                $(obj).addClass("hover");
                $(obj).find('.homedetail em').html('官网');
            }
        }).on("mouseout", function (ev) {
            var e = ev || window.event,
		target = e.target || e.srcElement,
		obj;
            if (obj = ajIsParentLi(target)) {
                var $this = $(this);
                $this.removeClass("hover");
                $this.find(".ops").attr("style", "bottom: -25px;");
            }
            if (obj = ajIsParentPoptipInfo(target)) {
                $(obj).removeClass("hover")
            }
        });

        function ajIsParentLi(target) {
            var parent = target;
            while (!$(parent).hasClass('hover-ops') && parent !== document) {
                parent = parent.parentNode;
            }
            return $(parent).hasClass('hover-ops') ? parent : false;
        }

        function ajIsParentPoptipInfo(target) {
            var parent = target;
            while (!$(parent).hasClass('poptip-info') && parent !== document) {
                parent = parent.parentNode;
            }
            return $(parent).hasClass('poptip-info') ? parent : false;
        }
    }