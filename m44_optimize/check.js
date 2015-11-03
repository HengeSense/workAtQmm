var urls = [
    'http://localhost:8080/',
    'http://localhost:8080/zhisearch/?keyword=%E4%BA%AC%E4%B8%9C',
    'http://localhost:8080/couponlist/0?sort=1',
    'http://localhost:8080/zhidemai',
    'http://localhost:8080/haitao',
    'http://localhost:8080/faxian',
    'http://localhost:8080/wanggou',
    'http://localhost:8080/category'
];

function Query(fn){
    urls.forEach(function (url) {
        $.ajax({
            url : url,
            type : 'GET',
            dataType : 'html',
            success : function (html) {
                var dom = $(html);
                fn(dom, url);
            },
            error : function () {

            }
        });
    });
}


function checkQueryDom(selector) {
    Query(function (dom, url) {
        if (dom.find(selector).length > 0) {
            console.log("FIND in " + url);
        }
    });
}