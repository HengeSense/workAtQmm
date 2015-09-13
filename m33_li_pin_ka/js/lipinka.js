$(function () {
    
    function Lipinka(div) {
        this.div = $(div);
        this.init();
    }
    Lipinka.prototype = {
        init : function () {
            this.chooseZhifuWay();
        },
        chooseZhifuWay : function () {
            var ways = this.div.find('.aj-zhifu-way .aj-one-way'),
                that = this;
            // 选择支付方式
            this.div.on('click', '.aj-zhifu-way .aj-one-way', function () {
                $(this).addClass('aj-select').siblings().removeClass('aj-select');
            });
            // 切换金额
            this.div.on('click', '.aj-zhifu-way .aj-one-way', function () {
                var div = that.div.find('.aj-price-container'),
                    price = $(this).attr('aj-price');
                div.html(price);
            });
        }
    };
    var div = $('#aj-lipinc-content');
    new Lipinka(div);
});