(function () {
    function RollNumber(wrap){
        this.wrap = wrap;
        this.div = $(wrap).find('.number');
        this.canClick = true;
        this.initial();
        this.render();
        this.event();
    }
    RollNumber.prototype = {
        initial : function () {
            var val = this.div.attr('value'),
                i,
                html = '';
            for (i = val.length; i >= 0; i--) {
                html += "<span class='one'></span>";
            }
            $(this.div).append(html);
        },
        event : function () {
            var that = this;
            this.wrap.on('click', function (e) {
                var result;
                if (!that.canClick) return false;
                that.canClick = false;
                var target = e.target,
                    step = 0;
                if ($(target).hasClass('minus')) {
                    step = -1;
                }
                if ($(target).hasClass('plus')) {
                    step = 1;
                }
                result = parseInt(that.div.attr('value'), 10) + step;
                if (result < 0) return false;
                that.div.attr('value', result);
                that.render();
            });
        },
        render : function (){
            this.value = $(this.div).attr('value');
            this.num = parseInt(this.value, 10);
            this.numArr = [];
            this.splitNumber(); // 拆分 div中的value值到数组中
            this.wrapNum();     // 把div中的value值渲染成html
            this.move();        // 上下移动数字
        },
        splitNumber : function () {
            var i;
            for (i = this.value.length - 1; i >= 0; i--) {
                this.numArr.unshift(this.value.substr(i, 1));
            }
            if (this.numArr.length < $(this.div).find('.one').length) {
                this.numArr.unshift("");
            }
        },
        wrapNum : function () {
            var that = this,
                ones = $(this.div).find('.one');
            $.each(this.numArr, function (index, obj) {
                if (ones.eq(index).find('.old').html() !== obj + "") { //那一位数字变化了
                    ones.eq(index).append(that.renderNum(obj));
                }
            });
        },
        renderNum : function (val) {
            return "<span class='new'>" + val + "</span>";
        },
        move : function () {
            var ones = this.div.find('.one'),
                that = this;
            ones.each(function (index, obj) {
                var old = $(obj).find('.old'),
                    $new = $(obj).find('.new'),
                    oldOpt = {'top' : '-20px', 'opacity' : '0'},
                    newOpt = {'top' : '0px', 'opacity' : '1'},
                    randomTimeout = Math.random() * 500 + 500;
                    oldValMinus = parseInt(old.html()) - 1 >= 0 ? (parseInt(old.html()) - 1) : 9;
                if (($new.length > 0) && (old.length > 0)) {    //这种情况 是减一  否则就是加一
                    if (parseInt($new.html()) === oldValMinus ) {
                        $new.css(oldOpt);
                        oldOpt = $.extend(oldOpt, {
                            'top' : '20px'
                        });
                    }
                }
                if ($new.length > 0) {
                    var old = $(obj).find('.old');
                    old.animate(oldOpt, randomTimeout, function () {
                        old.remove();
                    });
                }
                $new.animate(newOpt, randomTimeout, function () {
                    $(this).removeClass('new').addClass('old');
                    that.canClick = true;
                });
            });
        }
    };
    var wrap = $('#wrap'),
        roll = new RollNumber(wrap);
}());