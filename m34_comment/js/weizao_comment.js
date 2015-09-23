$.ajax({
    url : 'http://localhost:8080/comment/addcomment',
    type : 'POST',
    data : "type=comment_post&pid=265741&parentid=0&content=%5B%E6%83%8A%E5%96%9C%5D",
    success : function (json) {
        console.log(json);
    }
});