(function () {
    window.onload = function () {
        code();
    }
    function code(){
        var str;
        str = location.search;
        str = str.replace(/^\?/, '');
        var prop = str.split('&'),
            arr;
        for (var i = 0; i < prop.length; i++) {
            arr = prop[i].split('=');
            if (arr[0].toLowerCase() === 'id') {
                console.log(arr[1]);
                fill(arr[1]);
                break;
            }
        }
    }
    function fill(val) {
        $('#aj-linqu-hb .aj-code').html(val);
    }
})();