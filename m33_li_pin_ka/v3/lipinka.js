/**
 * Created by james on 2015/12/1.
 */
$(function () {
    var form = $('.lipinkaform')[0];
    var choices = $('.aj-paytypes .aj-li');

    $(document).on("click", ".aj-paytypes .aj-li", function () {
        // style
        //choices.removeClass("aj-select");
        $(this).siblings().removeClass("aj-select");
        $(this).addClass("aj-select");

        // form
        var paytypes = $(this).attr("paytypes");
        form["paytypes"].value = paytypes;

        // submit button
        var fee = $(this).attr("fee");
        $('#buynow').attr("fee", fee);
    });
});


// change paytypes
$(function () {
    var lis = $("#aj-paytypes-list .aj-one-type"),
        inputs = $("#aj-paytypes-list .aj-one-type input");
    lis.on("click", function () {
        inputs.each(function () {
            this.checked = false;
        });
        var input = $(this).find("input");
        input[0].checked = true;

        var json = {};
        json.paytypeId = input.attr("value");
        json.unitPrice = input.attr("data-unitprice");

        changePayType(json);
        reCaculate();
    });

    function changePayType(json) {
        var unitPrice = $("#deal-buy-price .money .aj-itemfee"),
            payForm = $('.lipinkaform')[0],
            total = $("#deal-buy-total .money .aj-totalfee");
        unitPrice.html(json.unitPrice);
        payForm.paytypes.value = json.paytypeId;
    }

    function reCaculate() {
        var table = $("#aj-order-table"),
            cards = table.find(".aj-one-card"),
            allTotal = table.find(".order-total .deal-buy-total .aj-totalfee");

        var totalFeeNum = 0;
        cards.each(function () {
            var xiaoji = $(this).find(".deal-buy-total .aj-totalfee"),
                num = parseFloat($.trim($(this).find(".deal-buy-quantity").html())).toFixed(2),
                unitPrice = parseFloat($.trim($(this).find(".deal-buy-price .aj-itemfee").html())).toFixed(2);
            var xiaojiNum = parseFloat((num * unitPrice).toFixed(2));
            totalFeeNum += xiaojiNum;
            xiaoji.html(xiaojiNum.toFixed(2));
        });
        allTotal.html(totalFeeNum.toFixed(2));
    }

});