var results_words = [];
(function () {
    var root = "https://www.baidu.com/",
        results = results_words,
        same = {},
        words = "优惠券",
        url = "/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=优惠券&rsv_pq=ecd3343b0001a7b8&rsv_t=683eWqxrAYQPQE0aGHiAx4AwguGIK1qorWr2apsy1EMJKaW2%2BEw39xzRiIM&rsv_enter=1&rsv_sug3=14&rsv_sug1=2&rsv_sug2=0&inputT=3913&rsv_sug4=5071";


    function ajax(url) {
        if (results.length > 10) return;
        $.ajax({
            url : url,
            type : 'GET',
            dataType : 'html',
            async : true,
            success : function (res) {
                var tds = $(res).find('#rs th a');

                tds.each(function (){
                    var word = $.trim($(this).html()),
                        url = $.trim($(this).attr('href'));
                    if (!(word in same)) {
                        same[word] = 1;
                        results.push({
                            'word' : word,
                            'url' : url
                        });
                        ajax(url);
                    }
                });
                console.log(results.length);
            },
            error : function () {

            }
        });
    }

    ajax(url);
})();
