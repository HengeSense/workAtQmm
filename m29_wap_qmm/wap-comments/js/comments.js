$(function () {
    function Comment(div){
        this.div = div;
        this.form = $(this.div).find('.aj-get-more-comments form')[0];
        this.fromBtn = $(this.div).find('.aj-get-more-comments');
        this.onePageNum = parseInt(this.form['one_page_num'].value, 10);
    }
    Comment.prototype = {
        init : function () {
            this.event();
            this.commentsAreaInit();
            this.btnStyle();
        },
        event : function () {
            var $this = this;
            $(this.div).on('toggleComments', function () {
                var ul = $($this.div).find('.aj-comments-list:not(.aj-has-render)');
                ul.each(function () {
                    $(this).addClass('aj-has-render');
                    var ol = $(this).find('.aj-comments-one .aj-ol');
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
            });
            $(this.div).on('click', '.aj-comments-one .aj-ol .show_comments', function () {
                $this.toggleOlComments($(this).parents('.aj-ol'));
            });
            // get more
            $(this.div).on('click', '.aj-get-more-comments', function () {
                $($this.div).trigger('aj.get_more_comments');
            });
            $(this.div).on('aj.get_more_comments', function () {
                $this.getMoreComments();
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
        },
        btnStyle : function () {
            var fromBtn = this.fromBtn;
            if (fromBtn.hasClass("aj-no-more")) {
                this.doWhenNoMore();
            }
        },
        doWhenNoMore : function () {
            this.fromBtn.removeClass('aj-is-loading');
            this.fromBtn.addClass('aj-no-more');
            this.fromBtn.find('span.aj-info').html('木有更多了');
        },
        getMoreComments : function () {
            var fromBtn = $(this.div).find('.aj-get-more-comments'),
                $this = this;

            if (fromBtn.hasClass('aj-is-loading') || fromBtn.hasClass('aj-no-more')) return false;
            function dealWidthBtn() {
                fromBtn.addClass('aj-is-loading');
                fromBtn.find('span.aj-info').html('加载中...');
            }
            function load(){    // 模拟 ajax 请求评论数据
                var form = fromBtn.find('form'),
                    data = form.serialize(),
                    url = form[0]['path'].value;
                $.ajax({
                    url : url,
                    data : data,
                    type : 'GET',
                    success : function (response) {
                        render(response);
                        complete(response);
                    },
                    complete : function () {
                        //complete();
                    }
                });
            }
            function render(response){  // 渲染加载成功后的html
                fromBtn.before("<div class='aj-cutline'>....我是一条评论分割线<(￣3￣)> ....</div>");
                var ul = document.createElement('ul');
                $(ul).addClass('aj-comments-list');
                $(ul).html(response);
                fromBtn.before(ul);
                $($this.div).trigger('toggleComments');
            }
            function doWhenNoMore() {
                $this.doWhenNoMore();
            }
            function complete(response){    // ajax完成后要做的一些非样式逻辑
                var form;
                if (checkAnyMore2(response)) {
                    form = fromBtn.find('form')[0];
                    if (form) {
                        form['page'].value = parseInt(form['page'].value) + 1;
                    }
                    fromBtn.removeClass('aj-is-loading');
                    fromBtn.find('span.aj-info').html('点击加载更多');
                } else {
                    $this.doWhenNoMore();
                }
            }
            function checkAnyMore2(response) {
                var ul = document.createElement('ul');
                $(ul).html(response);
                if (/\S/.test(response) && $(ul).find('.aj-comments-one').length === $this.onePageNum) {
                    return true;
                } else {
                    return false;
                }
            }
            dealWidthBtn();
            load();
        }
    };
    var div = $('#aj-comments'),
        cm = new Comment(div);
    cm.init();
});