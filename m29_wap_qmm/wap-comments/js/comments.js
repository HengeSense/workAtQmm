$(function () {
    function Comment(div){
        this.div = div;
    }
    Comment.prototype = {
        init : function () {
            this.event();
            this.commentsAreaInit();
        },
        event : function () {
            var $this = this;
            $(this.div).on('toggleComments', function () {
                var ol = $($this.div).find('.aj-comments-one .aj-ol');
                ol.each(function () {
                    var li;
                    if ($(this).hasClass('aj-has-render')) return false;
                    var lis = $(this).find('.aj-o-li');
                    for (var i = 0; i < 3; i++) {
                            lis.eq(i).show();
                    }
                    if (lis.length > 3) {
                        li = document.createElement('li');
                        $(li).addClass('show_comments');
                        $(li).html("展开隐藏评论");
                        lis.eq(2).after(li);
                    }
                    $(this).addClass('aj-has-render');
                });
            });
            $(this.div).on('click', '.aj-comments-one .aj-ol .show_comments', function () {
                $this.toggleOlComments($(this).parents('.aj-ol'));
            });
        },
        toggleOlComments : function (ol) {
            if ($(ol).hasClass('aj-on')) {
                $(ol).removeClass('aj-on');
                $(ol).find('.aj-o-li:gt(2)').hide();
                $(ol).find('.show_comments').html('展开隐藏评论');
            } else {
                $(ol).addClass('aj-on');
                $(ol).find('.aj-o-li').show();
                $(ol).find('.show_comments').html('折叠评论');
            }
        },
        commentsAreaInit : function () {
            $(this.div).trigger('toggleComments');
        }
    };
    var div = $('#aj-comments'),
        cm = new Comment(div);
    cm.init();
});