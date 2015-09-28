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



$(function () {
    var container = $('.aj-relative-shops'),
        lis = $(".aj-relative-shops .shops_wrap").find('.li'),
        num = 6,
        rows = 2,
        len = Math.ceil(lis.length / rows);
    for (var i = 0; i < rows; i++) {
        (function () {
            var ul = document.createElement('ul'),
                slice;
            $(ul).addClass('shops_wrap');
            $(ul).addClass('slider');
            if (i === rows - 1){
                slice= lis.slice(i * len, lis.length);
            } else {
                slice = lis.slice(i * len, i * len + len);
            }
            $(ul).append(slice);
            container.append(ul);
            $(ul).slick({
                dots: false,
                infinite: true,
                autoplay: true,
                draggable: true,
                pauseOnHover: true,
                autoplaySpeed: 2000,
                speed: 400,
                slidesToShow: 6, //幻灯片每屏显示个数
                slidesToScroll: 1, //幻灯片每次滑动个数
                accessibility : true,
                centerMode : true
            });
        })();
    }
});
