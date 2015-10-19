/**
 * Created by james on 2015/10/17.
 */
$(function () {
    $.ajax({
        'url' : 'http://localhost:520/r=query',
        data : '',
        dataType : 'json',
        success : function (res) {
            console.log(res);
        },
        error : function () {

        }
    });
});