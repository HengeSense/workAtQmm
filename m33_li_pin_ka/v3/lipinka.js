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
    });
});