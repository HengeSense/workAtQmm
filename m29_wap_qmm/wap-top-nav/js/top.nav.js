$(function () {
    function Touch(wrap, obj, opt) {   // 在dom 内水平滑动 obj
        this.wrap = wrap;
        this.obj = obj;
        this.opt = opt;
        this.v = {};
        this.init();
    }
    Touch.prototype = {
        init : function () {
            this.v.wrapWidth = $(this.wrap).width();
            this.v.className = 'aj-li';
            this.v.click = true;
            this.v.objWidth = this.initObjTotalWidth();
            $.extend(this.v, this.opt);
            this.touch();
            this.v.click && this.clickStyle();
            this.fixPositon();
        },
        initObjTotalWidth : function () {
            var total = 0;
            this.obj.find('.' + this.v.className).each(function () {
                total += $(this).width() +
                    parseInt($(this).css('marginLeft'), 10) +
                    parseInt($(this).css('marginRight'), 10)
            });
            this.obj.css('width', total + 'px');
            return total;
        },
        touch : function () {
            var $this = this,
                min = this.v.wrapWidth - this.v.objWidth,
                max = 0,
                jiluDeltaX = 0,
                left;
            this.v.left = parseInt($(this.obj).css('left'), 10);
            left = this.v.left;
            min = min <= 0 ? min : 0;
            this.ham = new Hammer(this.obj[0]);
            this.ham.on('pan', function (ev) {
                if ($this.isDeltaXOK(left + ev.deltaX, min, max)) {
                    $this.obj.css('left', left + ev.deltaX + 'px');
                    jiluDeltaX = ev.deltaX;
                }
                if (ev.isFinal) {
                    left += jiluDeltaX;
                    $this.v.left = left;
                    jiluDeltaX = 0;
                }
            });
        },
        isDeltaXOK : function (d, min, max) {
            if (d >= min && d <= max) {
                return true;
            } else {
                return false;
            }
        },
        clickStyle : function () {
            var $this = this;
            this.obj.on('click', '.' + this.v.className, function () {
                $(this).addClass('aj-select').siblings().removeClass('aj-select');
                $($this.obj).trigger('aj.fix_position');
            });
        },
        fixPositon : function () { // 修改obj中的选项的位置,如果被遮住的话
            var $this = this;
            $(this.obj).on('aj.fix_position', function () {
                var select = $this.obj.find('.' + $this.v.className + '.aj-select');
                var zhezhu = $this.isZhezhu(select);
                if (zhezhu !== false) {
                    $this.v.left += zhezhu;
                    $($this.obj).animate({
                        left : $this.v.left + 'px'
                    });
                }
            });
        },
        isZhezhu : function(li){
            if ($(li).offset().left < 0)
                return -$(li).offset().left;
            if ($(li).offset().left + $(li).width() - $(window).width() > 0)
                return -($(li).offset().left + $(li).width() - $(window).width());
            return false;
        }
    };
    var div = $('#aj-mobile-wrap .aj-topnav-line'),
        ul = div.find('.aj-ul');
    var tt = new Touch(div, ul, {});
    window.tt = tt;
});