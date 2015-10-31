var results_words = [{
        word : "支付宝",
        url : "/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=2&ch=&tn=39042058_4_oem_dg&bar=&wd=支付宝&rsv_spt=1&oq=支付宝&rsv_pq=c373930c00018800&rsv_t=7b4daaOzaAt%2BClOT0qv8%2BqAKCnlJgYUCO08C2Lof%2FxWHsG347T2SE5qczj6pkhcPTBiXueKxueI",
        par : ""
    }],
    ok = [],
    isStop = false;

(function () {
    var root = "https://www.baidu.com/",
        same = {},
        query = "http://localhost:520/m47_baidu_keywords/PHP/save.php",
        body  = $(document.body),
        num = 0,
        nowOne;

    setInterval(function () {
        if (isStop) return;
        nowOne = results_words.shift();
        if (nowOne) {
            ok.push(nowOne);
        }
        if (nowOne && results_words.length < 100) {
            ajax(nowOne.url, nowOne.word)
        }
    }, 1000 / 12);

    function ajax(url, par_word) {
        $.ajax({
            url : url,
            type : 'GET',
            dataType : 'html',
            async : true,
            success : function (res) {
                num ++;
                var tds = $(res).find('#rs th a');
                tds.each(function (){
                    var word = $.trim($(this).html()),
                        url = $.trim($(this).attr('href'));
                    if (!(word in same)) {
                        same[word] = 1;
                        results_words.push({
                            'word' : word,
                            'url' : url,
                            'par' : par_word
                        });
                    } else {
                        console.log("One Same.");
                    }
                });
            },
            error : function (err) {
                console.log(err);
            }
        });
    }

    var one;
    function upload () {
        one = ok.shift();

        if (!one) return;
        console.log("正在上传" + one.word);
        console.log("缓存中还有" + ok.length + "个item");

        body.append("<img style='display:none;' src='" + query +"?word=" +
            encodeURIComponent(one.word) +
            "&url=" + encodeURIComponent(one.url) +
            "&par='" + encodeURIComponent(one.par) + ">");
    }
    setInterval(function () {
        upload();
    }, 1000 / 12);

})();
