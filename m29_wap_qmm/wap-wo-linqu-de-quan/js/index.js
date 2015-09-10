// http://m.quanmama.com/
$('*[href]').each(function () {
    var href = $(this).attr('href');
    if (href.indexOf('/') === 0 && href.indexOf('//') !== 0) {
        $(this).attr('href', 'http://m.quanmama.com' + href);
    }
});
