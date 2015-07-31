$(function(){
  
  var btns= $('.box-nav-site .tit li');
  btns.each(function(){
    
    $(this).on( 'mouseenter', function(){
      $( btns ).removeClass( 'cur' );
      $( this ).addClass( 'cur' );
    });
    
  });
  $('#J_nav_site').on( 'mouseenter', '.tit li', function(e){
    window.xx = this;
    var data_id = $( this ).attr('data-id'),
        moreDivs = $( this ).parents('#J_nav_site').find('.aj-tit-more .aj-one');
    moreDivs.each(function(){
      if( $(this).attr('aj-from-data-id') && $(this).attr('aj-from-data-id') === data_id ){
        $( this ).fadeIn();
      }else{
        $( this ).hide();
      }
    });
  });
  $('#J_nav_site').on( 'click', '.aj-tit-more .aj-one li', function(){
    $( this ).parents('.aj-one').find('li').removeClass('aj-select');
    $( this ).addClass('aj-select');
  });
    首页商家导航的类别切换
});

// $(function () {
    // var g = $("#J_nav_site");
    // if (g.length > 0) {
        滚动
        // g.find(".JCategoryChange li").on("mouseover", function () {
            // g.find(".JCategoryChange li").removeClass("cur")
            
            // $(this).addClass("cur")
       
            // $('.newLoading').hide();

            // var panelObj = $(".JPanel" + $(this).attr("data-id"));

            // if (panelObj.length <= 0) {
                // $(this).closest('.JStore').find('.newLoading').show();
            // } else {
                // $(this).closest('.JStore').find('.newLoading').hide();
            // }

            // $(this).addClass("cur").siblings().removeClass("cur");
            // $(".mall-pane").hide();
            // panelObj.show();

            // $(".JPanel" + $(this).attr("data-id") + " img").each(function () {
                // var $this = $(this);
                // var arc = $this.attr("arc");
                // if (arc && arc.length > 0) {
                    // $this.attr("src", arc);
                    // $this.removeAttr("arc");
                // }
            // });
        // });


        // g.find(".list-shop-word .item").on("mouseover", function () {
            // $(this).addClass("item-hover")
        // }).on("mouseout", function () {
            // $(this).removeClass("item-hover")
        // });

        // g.find(".list-mall li").on("mouseover", function () {
            // $(this).addClass("hover")
        // }).on("mouseout", function () {
            // g.find(".list-mall").css("z-index", 1);
            // $(this).removeClass("hover")
        // });

        // $("#J_nav_site .con").on("mouseover", function (ev) {
            // var e = ev || window.event,
				// target = e.target || e.srcElement,
				// obj;
            bug1
            // if (obj = ajIsParentLi(target)) {
                // var $this = $(obj);
                // $this.addClass("hover");
                // var $ops = $this.find(".ops");
                // if ($ops.attr("load") != "1") {
                    // $ops.attr("load", "1");
                    // var goTemplate = '<a href="' + $this.attr("outlink") + '" target="_blank" class="go-shopping" hidefocus="true">去购物</a>'
							// + '<a href="' + $this.attr("quanlink") + '" target="_blank"  class="go-detail" hidefocus="true">优惠券</a>';

                    // $ops.html(goTemplate);
                // }
                // $ops.attr("style", "bottom: 2px;");
            // }
            bug2
            // if (obj = ajIsParentPoptipInfo(target)) {
                // $(obj).addClass("hover");
                // $(obj).find('.homedetail em').html('官网');
            // }
        // }).on("mouseout", function (ev) {
            // var e = ev || window.event,
		// target = e.target || e.srcElement,
		// obj;
            // if (obj = ajIsParentLi(target)) {
                // var $this = $(this);
                // $this.removeClass("hover");
                // $this.find(".ops").attr("style", "bottom: -25px;");
            // }
            // if (obj = ajIsParentPoptipInfo(target)) {
                // $(obj).removeClass("hover")
            // }
        // });

        // function ajIsParentLi(target) {
            // var parent = target;
            // while (!$(parent).hasClass('hover-ops') && parent !== document) {
                // parent = parent.parentNode;
            // }
            // return $(parent).hasClass('hover-ops') ? parent : false;
        // }

        // function ajIsParentPoptipInfo(target) {
            // var parent = target;
            // while (!$(parent).hasClass('poptip-info') && parent !== document) {
                // parent = parent.parentNode;
            // }
            // return $(parent).hasClass('poptip-info') ? parent : false;
        // }


    // }
// });