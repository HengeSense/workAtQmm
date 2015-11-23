$(function () {
    var win = $(window);
    var config = {
        list: [
            {
                src: "/html/blackFriday/56445d37e301b5662.png",
                title: "海淘攻略"
            },
            {
                src: "/html/blackFriday/56446253ac71c1146.png",
                title: "必看促销"
            },
            {
                src: "/html/blackFriday/56446a9c5191e5223.png",
                title: "必看活动"
            }
        ],
        selector: ".aj-separator",
        hashPrefix: "aj-jump-to"
    };

    var dom = $(config.selector);
    for (var i = 0; i < config.list.length; i++) {
        config.list[i].id = config.hashPrefix + (Math.random() + "").substr(2, 8);
        dom.eq(i).html("<img src='" + config.list[i].src + "' data-title='" + config.list[i].title + "' id='" + config.list[i].id + "' />");
    }

    try {
        var nav = $("#nav-lift"),
            domNew = $(document.createElement("ul"));

        $.each(config.list, function () {
            domNew.append("<li class='aj-jump'><a data-href='#" + this.id + "' >" + this.title + "</a></li>");
        });
        nav.find("ul").before(domNew);

    } catch (ex) { }


    nav.on("click", '.aj-jump a', function (e) {
        e.preventDefault();
    });
    nav.on("click", ".aj-jump", function () {
        var id = $(this).find("a").attr("data-href");
        $("html, body").animate({
            "scrollTop": $(id).offset().top - 40 + 'px'
        });
    });


});