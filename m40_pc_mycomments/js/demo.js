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
        if (canAjax()) {
            ajax();
        }

        function ajax(){
            $(that).addClass('aj-is-ajax-ing');
            tishi.html('<img class="wait" src="http://localhost:8080/images/loading_comment.gif">');
            $.ajax({
                type: "POST",
                url: "/comment/addcomment",
                data: data,
                dataType: "html",
                success: function (html) {
                    doSuccess();
                },
                error : function () {
                    doError();
                },
                complete : function () {
                    $(that).removeClass('aj-is-ajax-ing');
                }
            });
        }
        function canAjax(){
            return !$(that).hasClass('aj-is-ajax-ing');
        }
        function check() {
            return ($.trim(that['content'].value) == '') ? false : true;
        }
        function doSuccess() {
            $(that).find('.content').val('');
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

    $('.aj-module-for-comment').on('click', '.aj-delete a', function (e) {
        e.preventDefault();
        var url = $(this).attr('href');
        $.get(url);
        $(this).parents(".infoCommentBlock").slideUp();
    });
});