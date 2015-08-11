$(function () {
    var container = $("#aj-qrcode .aj-container");
    if (container.length > 0) {
        container.each(function (index, obj) {
            console.log(obj);
            var qr_maker = new QRCode(obj, {
                width: $(obj).width(),
                height: $(obj).height()
            });
            qr_maker.clear();
            qr_maker.makeCode($(this).attr('aj-url'));
        });
    }

});