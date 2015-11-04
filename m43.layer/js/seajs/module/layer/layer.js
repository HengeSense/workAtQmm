/**
 * 图片浮层显示
 * 参数 :
 * width => 图片容器高度
 * width => 图片容器宽度
 * 图片地址 => img
 * 图片跳转地址 => link
 * zIndex
 * expires 关闭浮层后, 默认1小时内不再显示
 *
 * 方法 : show(bool) 展示浮层, bool为true,强制显示浮层,不管cookie
 */
define(function (require, exports, module) {
    function LY(params, small) {
        this.params = {
            width: 500,
            height: 500,
            img: "",
            link: "",
            zIndex: 1000,
            expires: 1 / 24
        };
        this.small = {
            width: 0,
            height: 0,
            img: "",
            bottom: 190,
            right: $(window).width() / 2 - 1050 / 2,
            offset: -5
        };

        this.shadowDiv = null;
        this.container = null;
        $.extend(this.params, params);
        $.extend(this.small, small);

        var clientWidth = $(window).width() - 20;
        var clientHeight = $(window).height() - 80;
        if (this.params.width > clientWidth) {
            this.params.height = clientWidth * this.params.height / this.params.width;
            this.params.width = clientWidth;
        }
        if (this.params.height > clientHeight) {
            this.params.width = clientHeight * this.params.width / this.params.height;
            this.params.height = clientHeight;
        }

        this.addComponents();
        this.event();
    }
    LY.prototype = {
        show: function (bool) {
            //            bool || Youhui.tools.cookie("aj.hide.layer") !== '1'
            if (bool || Youhui.tools.cookie("aj.hide.layer") !== '1') {
                this.showBG();
                this.showContainer();
            }
        },
        event: function () {
            var that = this;
            this.shadowDiv.on("click", function () {
                that.close();
            });
            this.container.on("click", "span[class*='qmm-']", function () {
                that.close();
            });
        },
        addComponents: function () {
            this.addShadow();
            this.addContainer();
            this.addSmall();
        },
        addSmall: function () {
            var that = this;
            if (this.small.width > 0 && this.small.height > 0) {
                var div = $(document.createElement('div'));
                var img = this.small.img || this.img;
                div.css({
                    position: 'fixed',
                    right: this.small.right - this.small.width + this.small.offset + 'px',
                    bottom: this.small.bottom + 'px',
                    width: this.small.width + 'px',
                    height: this.small.height + 'px',
                    textAlign: 'center',
                    cursor: 'pointer'
                });
                div.html("<img style='max-width:100%;max-height:100%;' src='" + img + "' >");
                $(document.body).append(div);
                $(window).on("resize", function () {
                    div.css({
                        right: $(window).width() / 2 - 1050 / 2 - that.small.width + that.small.offset + 'px'
                    });
                });
                div.on("click", function () {
                    that.show(true)
                });
            }
        },
        addShadow: function () {
            if (!this.shadowDiv) {
                var div = $(document.createElement("div"));
                div.attr("style", "background:#000;width:100%;display:none;height:100%;z-index:" + this.params.zIndex + ";top:0;left:0;position:fixed;opacity:0;filter:alpha(opacity=0);transition:all .3s");
                $(document.body).append(div);
                this.shadowDiv = div;
            }
        },
        addContainer: function () {
            if (!this.container) {
                var div = $(document.createElement("div"));
                div.css({
                    position: 'fixed',
                    width: this.params.width + 'px',
                    height: this.params.height + 'px',
                    top: "50%",
                    left: "50%",
                    marginTop: -this.params.height / 2 + 'px',
                    marginLeft: -this.params.width / 2 + 'px',
                    display: 'none',
                    zIndex: this.params.zIndex + 1
                });
                div.append("<a target='_blank' href='" + this.params.link + "'><img style='max-height: 100%;max-width: 100%;' src='" + this.params.img + "' ></a>");
                div.append("<span style='position: absolute;top:-10px;right:-10px;color:#eee;font-size: 30px;cursor: pointer;' class='qmm-icon-iconfont-close'></span>");
                $(document.body).append(div);
                this.container = div;
            }
        },
        showBG: function () {
            this.shadowDiv.show();
            this.shadowDiv.animate({
                opacity: 0.8
            });
        },
        showContainer: function () {
            this.container.fadeIn("0.3s");
        },
        close: function () {
            this.container.fadeOut();
            this.shadowDiv.fadeOut();
            Youhui.tools.cookie("aj.hide.layer", "1", {
                path: '/',
                doamin: Youhui.CookieDomain,
                expires: 1 / 24  // 1 小时内不再显示
            });
        }
    };

    module.exports = LY;
});