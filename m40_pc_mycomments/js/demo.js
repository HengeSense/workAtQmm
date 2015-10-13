$(function () {
    $('.reply-form').submit(function (e) {
        e.preventDefault();
        var data = $(this).serialize();
        var that = this,
            tishi = $(this).find('.aj-zhishi');

        if (!check()) {
            tishi.css({
                color : 'red'
            });
            tishi.html("内容不能为空");
            return false;
        }
        $.ajax({
            url : '',
            data : data,
            dataType : 'json',
            success : function (json) {
                if (parseInt(json.error_code) == 0) {
                    doSuccess();
                } else {
                    doFail();
                }
            },
            error : function () {
                doError();
            }
        });
        function check() {
            return ($.trim(that['content'].value) == '') ? false : true;
        }
        function doSuccess() {
            that.find('.content').val('');
            tishi.css({
                color : 'lightseagreen'
            });
            tishi.html("回复成功");
        }
        function doFail(){
            tishi.css({
                color : 'red'
            });
            tishi.html("回复失败,请重试");
        }
        function doError() {
            tishi.css({
                color : 'red'
            });
            tishi.html("回复失败,请检查网络后重试");
        }
    });

    $('.aj-module-for-reply').on('click', '.aj-reply', function () {
        $(this).siblings('.aj-reply-area').slideToggle();
    });
});