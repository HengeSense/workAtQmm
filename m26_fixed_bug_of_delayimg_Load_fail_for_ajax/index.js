setInterval(function () {
    Youhui.delayLoader.init({
        placeholder: "imgs/2.png"
    });
    $(document.body).append("<div class='wrap'><div class='one'><img style='width:100px;height:100px;' class= 'delay-img' drc='imgs/1.jpg'></div> " + 
        "<div class='one' style='display:none;'><img attr= 'what the fuck' drc='imgs/1.jpg'></div></div>");
    
}, 1000);