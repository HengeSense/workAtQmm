$(function () {
    function Cart(div) {
        this.div = div;
        this.cartForm = this.div.find('.cart-form')[0];
        this.init();
    }
    Cart.prototype = {
        init : function () {
            this.event();
            this.renderForm();
            this.changeNum();
            this.zhifuWay();
        },
        event : function () {
            var that = this;
            this.div.on('click', '.aj-zhifu-all-ways .aj-icon', function () {
                $(this).parents('.aj-zhifu-all-ways').hide();
            });
            this.div.on('click', '.aj-action .aj-delete', function () {
                deleteGoods.call(this);
            });
            function deleteGoods() {
                $(this).parents('.aj-goods-one').slideUp(function () {
                    $(this).remove();
                    that.renderForm();
                });
            }
        },
        renderForm : function () {
            var cart_form = this.cartForm,
                goods_forms = this.div.find('.goods-form');
            var way = cart_form['zhifu-way'].value;
            this.div.find('.aj-z-fot .aj-one-way[aj-zhifu-name="' + way + '"]').addClass('aj-select').siblings().removeClass('aj-select');
            goods_forms.each(function (index, item) {
                fill.call(this, way);
            });
            function fill(choice){
                var parent = $(this).parents('.aj-goods-one');
                parent.find('.aj-img img').attr('src', this['img'].value);
                parent.find('.aj-name-value').html(this['title'].value);
                parent.find('.aj-num input').val(this['num'].value);
                parent.find('.aj-unit-price .aj-show').html(parseFloat(this[choice].value).toFixed(2));
            }
            this.calculatePrice();
        },
        changeNum : function () {
            var that = this;
            this.div.on('click', '.aj-num .aj-btn', function () {
                changeNum.call(this);
                that.renderForm();
            });
            // change num in goods form
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
                $(this).parents('.aj-goods-one').find('.goods-form')[0]['num'].value = delter;
            }
        },
        calculatePrice : function () { // 重新计算所有商品的各自 小计 以及总价
            var all_total = 0;
            this.div.find('.aj-goods-one').each(function () {
                var form = $(this).find('.goods-form')[0],
                    wrap =  $(this).find('.aj-four-wrap'),
                    num = wrap.find('.aj-num input').val(),
                    unit = wrap.find('.aj-unit-price .aj-show').html(),
                    total = wrap.find('.aj-total-price .aj-show');
                unit = parseFloat(unit);
                total.html((unit * num).toFixed(2));
                all_total += parseFloat((unit * num).toFixed(2));
            });
            this.div.find('.aj-z-fot .aj-total .aj-show').html(all_total.toFixed(2));
        },
        zhifuWay : function () {
            var that = this;
            this.div.on('click', '.aj-z-fot .aj-one-way', function () {
                control.call(this);
                that.renderForm();
            });
            // 样式由 this.renderForm 控制
            // 切换支付方式 in cart-form
            function control() {
                var name = $(this).attr('aj-zhifu-name');
                that.cartForm['zhifu-way'].value = name;
            }
        }
    };
    var div = $('#deal-buy');
    new Cart(div);
});