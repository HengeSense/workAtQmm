$(function () {
    function Cart(div) {
        this.div = div;
        this.init();
    }
    Cart.prototype = {
        init : function () {
            this.changeNum();
            this.zhifuWay();
        },
        changeNum : function () {
            var that = this;
            this.div.on('click', '.aj-num .aj-btn', function () {
                var num = changeNum.call(this);
                changePrice.call(this, num);
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
            function changePrice(num) {
                var wrap = $(this).parents('.aj-four-wrap'),
                    unit = wrap.find('.aj-unit-price').attr('aj-unit-price'),
                    total = wrap.find('.aj-total-price .aj-show');
                unit = parseFloat(unit);
                total.html((unit * num).toFixed(2));
            }
        },
        zhifuWay : function () {
            var that = this;
            this.div.on('click', '.aj-zhifu-way .aj-edit-ways', function (e) {
                e.stopPropagation();
                // 修改支付方式
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
        }
    };
    var div = $('#deal-buy');
    new Cart(div);
});