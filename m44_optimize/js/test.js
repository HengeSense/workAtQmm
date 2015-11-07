/**
 * Created by james on 2015/11/7.
 */
(function () {
    $(document).find("img").each(function () {
        var href = $(this).attr('src');
        $(this).attr("src", "http://localhost:568/test/image/" + href.split("/").pop());
    });
})();