/**
 * Created by james on 2015/9/24.
 */
$(function () {
    function Comment(Dom) {
        this.div = $(Dom);
        this.init();
    }
    Comment.prototype = {
        init : function () {
            this.event();
        },
        event : function () {
            
        }

    };

    var div = $('#comment');
    (new Comment(div));
});