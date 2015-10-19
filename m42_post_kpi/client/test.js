var imgload = function (obj) {
    var check = function () {
        if (obj.offsetHeight != undefined) {
            clearInterval(intervalId);
            var site_box = obj.parentNode.parentNode.offsetHeight;
            var img_height = obj.offsetHeight;
            var top = (site_box - img_height) / 2;
            if (img_height < site_box) {
                obj.style.marginTop = top + "px";
            }
        }
    };
    var intervalId = setInterval(check, 300);
};
