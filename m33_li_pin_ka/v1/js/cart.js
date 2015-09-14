$(function () {
    function Cart(div) {
        this.div = div;
        this.init();
    }
    Cart.prototype = {
        init : function () {
            this.event();
            this.changeNum();
            this.zhifuWay();
        },
        event : function () {
            this.div.on('click', '.aj-zhifu-all-ways .aj-icon', function () {
                $(this).parents('.aj-zhifu-all-ways').hide();
            });
        },
        changeNum : function () {
            var that = this;
            this.div.on('click', '.aj-num .aj-btn', function () {
                var num = changeNum.call(this);
                that.calculatePrice();
            });
            // change num
            function changeNum() {
                var delter,
                    input = $(this).siblings('input');
                if ($(this).hasClass('aj-minus')) {
                    delter = -1;
                } else if ($(this).hasClass('aj-plus')){
                    delter = 1;
                }
                delter = parseInt(input.val()) + delter;
                delter = delter > 0 ? delter : 1;
                input.val(delter);
                return delter;
            }
            // change total price

        },
        calculatePrice : function () { // 重新计算所有商品的各自 小计
            this.div.find('.aj-goods-one').each(function () {
                var wrap =  $(this).find('.aj-four-wrap'),
                    num = wrap.find('.aj-num input').val(),
                    unit = wrap.find('.aj-unit-price').attr('aj-unit-price'),
                    total = wrap.find('.aj-total-price .aj-show');
                unit = parseFloat(unit);
                total.html((unit * num).toFixed(2));
            });
        },
        zhifuWay : function () {
            var that = this;
            this.div.on('click', '.aj-zhifu-way .aj-edit-ways', function (e) {
                e.stopPropagation();
                // 弹出支付选择
                changeWay.call(this);
            });
            this.div.on('click', '.aj-zhifu-all-ways', function (e) {
                e.stopPropagation();
            });
            function changeWay() {
                var wrap = $(this).parents('.aj-zhifu-way').find('.aj-zhifu-all-ways');
                wrap.toggle();
            }
            $(document).on('click', function (e) {
                that.div.find('.aj-zhifu-all-ways').hide();
            });
            // 修改支付方式
            this.div.on('click', '.aj-zaw-wrap .aj-z-a-w-one', function () {
                $(this).parents('.aj-zhifu-way').find('.aj-zhifu-choice').html($(this).html());
                changeUnitPrice.call(this);
            });
            // 修改单价
            function changeUnitPrice(){
                var unit_price = $(this).attr('aj-price');
                var div = $(this).parents('.aj-buy-one').find('.aj-four-wrap .aj-unit-price');
                div.attr('aj-unit-price', unit_price);
                div.find('.aj-show').html(unit_price);
                that.calculatePrice();
            }
        }
    };
    var div = $('#deal-buy');
    new Cart(div);
});