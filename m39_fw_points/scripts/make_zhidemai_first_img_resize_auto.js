/**
 * Created by james on 2015/10/9.
 */
$(function () {
    var img,
        parent,
        top;
    function isPageForThisModule(){
        var box = $('.article_picwrap');
        return box.length === 0 ? false : true;
    }
    if (isPageForThisModule()) {
        img = $('#pagecontent .left_side .zhidemai-content img');
        img = img.filter(function () {
            return $(this).parents('.article_picwrap').length === 0 ? true : false;
        });
        top = img.eq(0).offset().top - $('.left_side').offset().top;
        console.log(top);
    }
    if (Math.abs(top - 380) < 50) {
        img.eq(0).css({
            'maxWidth' : "490px"
        });
    }
});