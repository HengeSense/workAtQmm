Youhui.delayLoader = { //延迟加载
    init: function (options) {
        var opt = $.extend({
            srcname: 'drc',
            elements: "img",
            threshold: 0,
            placeholder: '/images/b.gif',
            failurelimit: 1,
            event: "scroll",
            direction: 1, //0:横、纵   1:纵   2:横
            effect: "fadeIn",
            effectspeed: 0,
            container: window
        }, options || {});
        var _this = this;

        var _elements = opt.elements;
        opt.elements = $(opt.elements + "[" + opt.srcname + "]");

        opt.container = $(opt.container);
        if (opt.event == "scroll") {
            $(opt.container).bind("scroll.loader resize.loader", function (event) {
//                console.log('chufa');
                opt.elements.each(function () {
                    if (_this._scrollY(this, opt)) {//&& _this._scrollX(this, opt)
                        if (!this.loaded) {
                            console.log(this.getAttribute(opt.srcname));
                            this.src = this.getAttribute(opt.srcname);
                            this.removeAttribute(opt.srcname);
                            this.loaded = true;
                            //alert($(this).parent().html());
                            if (_elements != "img" && $.browser.msie) {
                                $(this).css("width", "auto");
                            }
                        }
                    }
                });
                var temp = $.grep(opt.elements, function (element) {
                    return !element.loaded;
                });
                opt.elements = $(temp);
            });
        }
        // 首屏
//        opt.container.triggerHandler(opt.event);
        return this;
    },
    _scrollY: function (element, opt) {
        if (opt.direction == 0 || opt.direction == 1) {
            var fold = 0;
            if (opt.container[0] === window) {
                fold = $(window).height() + $(window).scrollTop();
            } else {
                fold = opt.container.offset().top + opt.container.height();
            }
            return fold > $(element).offset().top - opt.threshold;
        } else {
            return true;
        }
    },
    _scrollX: function (element, opt) {
        if (opt.direction == 0 || opt.direction == 2) {
            var fold = 0;
            if (opt.container[0] === window) {
                fold = $(window).width() + $(window).scrollLeft();
            } else {
                fold = opt.container.offset().left + opt.container.width();
            }
            return fold > $(element).offset().left - opt.threshold;
        } else {
            return true;
        }
    }
};