function fixed_right(adNum) {
    if ($("#pagefooter").length > 0 && $(".rightPanel").length > 0) {
        var headerHeight = 181,		//??
			footerHeight = $("#pagefooter").height(),
			windowHeight = $(window).height(),
			bodyHeight = windowHeight - headerHeight - footerHeight,
			leftHeight = $(".left_side").height(),
			rightHeight = $(".right_side").height();
        if (adNum == 1) {
            var firstFloatHeight = $(".rightPanel:last").offset().top,
				floatHeight = $(".rightPanel:last").height() + 30;
        }
        if (adNum == 2) {
            var firstFloatHeight = $(".rightPanel:last").prev().offset().top;
            var floatHeight = $(".rightPanel:last").height() + $(".rightPanel:last").prev().height() + 30 * adNum;
        }
        $(window).scroll(function () {
            //AJ-- var scrollHeight = document.body.scrollTop || document.documentElement.scrollTop,
			var scrollHeight = $( window ).scrollTop(),
				footerTop = $("#pagefooter").offset().top;
            
			var p = $(".g_g"),
				r = 0; // p.height();
            if ( leftHeight > rightHeight ) {//左侧leftwrap高度>右侧高度
                if ( scrollHeight >= firstFloatHeight && adNum == 2 ) {//滚动高度>=第一个随动广告top
                    $(".rightPanel:last").prev().css({
                        "position": "fixed",
                        "top": "40px"
                    });
                    var o = 10 + $(".rightPanel:last").prev().height() + 30;
                    $(".rightPanel:last").css({
                        "position": "fixed",
                        "top": o
                    });
                } else {
                    if (scrollHeight >= firstFloatHeight && adNum == 1) {
                        $(".rightPanel:last").css({
                            "position": "fixed",
                            "top": "40px"
                        });
                    } else {
                        if (scrollHeight < firstFloatHeight && adNum == 2) {
                            $(".rightPanel:last").prev().css({
                                "position": "static",
                                "top": "0"
                            });
                            $(".rightPanel:last").css({
                                "position": "static",
                                "top": "0"
                            });
                        } else {
                            if (scrollHeight < firstFloatHeight && adNum == 1) {
                                $(".rightPanel:last").css({
                                    "position": "static",
                                    "top": "0"
                                });
                            }
                        }
                    }
                }
                if (scrollHeight + floatHeight >= footerTop - r - 65) {//滚动高度+广告高度>=底部top-.g.g高度-65
                    if (bodyHeight < floatHeight) {//网页除掉头尾高度<广告高度
                        var t = footerTop - scrollHeight - floatHeight;
                        var q = t + $(".rightPanel:last").prev().height() + 30;
                        if (adNum == 2) {
                            $(".rightPanel:last").prev().css({
                                "position": "fixed",
                                "top": t
                            });
                            $(".rightPanel:last").css({
                                "position": "fixed",
                                "top": q
                            });
                            if (p.length != 0 || p.is(":visible")) {
                                $(".rightPanel:last").prev().css({
                                    "position": "fixed",
                                    "top": t - r - 65
                                });
                                $(".rightPanel:last").css({
                                    "position": "fixed",
                                    "top": q - r - 65
                                });
                            }
                        }
                        if (adNum == 1) {
                            $(".rightPanel:last").css({
                                "position": "fixed",
                                "top": t
                            });
                            if (p.length != 0 || p.is(":visible")) {
                                $(".rightPanel:last").css({
                                    "position": "fixed",
                                    "top": t - r - 65
                                });
                            }
                        }
                    }
                }
            }
        });
    }
}