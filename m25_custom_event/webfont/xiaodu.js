var prop = {};
prop.sample_name = "bear_brain";
prop.request_query = "hello";
prop.request_time = + new Date();
prop.bear_type = '2';
$.ajax({
    url : 'https://sp0.baidu.com/yLsHczq6KgQFm2e88IuM_a/s',
    type : 'GET',
    data : prop,
    dataType : 'jsonp',
    jsonp : 'callback',
    success : function (json) {
        console.log(json);
        //var result = JSON.parse(json.result_list[0]['result_content'])['answer'];
        //console.log(result);
    },
    error : function (err) {
        console.log('++' + err)
    },
    complete : function () {
        console.log(1);
    }
});