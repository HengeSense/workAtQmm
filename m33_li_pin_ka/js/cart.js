$(function () {
    function Cart(div) {
        this.div = div;
        this.init();
    }
    Cart.prototype = {
        init : function () {
            this.changeNum();
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
        }
    };
    var div = $('#deal-buy');
    new Cart(div);
});