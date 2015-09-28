$(".aj-img-slick").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    draggable: true,
    pauseOnHover: true,
    autoplaySpeed: 3000,
    speed: 400,
    slidesToShow: 1, //幻灯片每屏显示个数
    slidesToScroll: 1, //幻灯片每次滑动个数
    accessibility : true
});
banner_pages();
function banner_pages() {
    a = $(".guess_like .slick-dots").find(".slick-active a").html();
    n = $(".guess_like .slick-dots li:last a").html();
    if (a == undefined || n == undefined) {
        $(".custom_page").hide();
    } else {
        $(".custom_page").html(a + " / " + n);
        setTimeout(banner_pages, 0);
    }
}
