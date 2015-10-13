// Query all from blogs
var query = new Parse.Query(b);
var page = 1,
    num = 2;
query.limit(2); // default is 100 , valid between  1 - 1000
query.skip((page - 1) * num);  // this is for pagination
//query.ascending("updatedAt");   // 升序
query.descending("updatedAt");   // 降序

query.find({
    success : function (results) {
        var i = 0;
        for (i = 0; i < results.length; i++) {
            console.log('Title : ' + results[i].get('title'));
            console.log('Content : ' + results[i].get('content'));
        }
    },
    error : function (err) {
        console.log(err);
    }
});

// If you just need the first row , use first instead of find
query.first({
    success : function () {
        
    },
    error : function () {

    }
});

// Query Constrants
// query.notEqualTo("playerName", "Michael Yabuti");
// query.greaterThan("playerAge", 18);