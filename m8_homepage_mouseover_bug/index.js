$("#J_nav_site .con").on("mouseover", function (ev) {
	var e = ev || window.event,
		target = e.target || e.srcElement,
		obj;
	if( obj = ajIsParentLi( target ) ){
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
}).on("mouseout", function (ev) {
	var e = ev || window.event,
		target = e.target || e.srcElement,
		obj;
	if( obj = ajIsParentLi( target ) ){
		var $this = $(this);
		$this.removeClass("hover");
		$this.find(".ops").attr("style", "bottom: -25px;");				
	}
});
function ajIsParentLi( target ){
	var parent = target;
	while( !$(parent).hasClass('hover-ops') && parent !== document ){
		parent = parent.parentNode;
	}
	return $(parent).hasClass('hover-ops') ? parent : false;
}