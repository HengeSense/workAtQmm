$(function () {
    var scrollTop,
        win = window,
        div = $('#J_right_sidebar');
    function resize () {
        div.css({
            top : ($(win).height() - div.height()) / 2 + 'px',
            right : '10px'
        });
    }
    resize();
    $(win).on("resize", function () {
        resize();
    });
    $(win).on("scroll", function () {
        scrollTop = $(win).scrollTop();
        if (scrollTop > 300) {
            div.fadeIn();
        } else {
            div.fadeOut();
        }
    });
});