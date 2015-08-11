(function () {
    var div = $('.number'),
        value = div.attr('value'),
        num = parseInt(value, 10),
        numArr = [];
    SplitNumber();
    WrapNum();
    function SplitNumber() {
        var i;
        for (i = value.length - 1; i >= 0; i--) {
            numArr.unshift(value.substr(i, 1));
        }
        console.log(numArr);
    }

}());