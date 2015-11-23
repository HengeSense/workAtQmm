(function () {
    function Sort (arr) {
        this.arr = arr;
    }
    Sort.prototype = {
        quickSort : function() {
            var arr = this.arr;
            //qs(arr, 0, arr.length);
            function qs(arr, begin, end) {
                if (begin === end) {
                    return;
                }
                var first = arr[begin],
                    now = begin,
                    i = begin + 1;
                for (; i < end; i++) {
                    if (arr[i] < first) {
                        arr.splice(begin, 0, arr.splice(i, 1)[0]);
                        now += 1;
                    }
                }
                qs(arr, begin, now);
                qs(arr, now + 1, end);
            }
            goodQs(arr, 0, arr.length - 1);
            function goodQs(arr, begin, end) {
                if (begin >= end) {
                    return;
                }
                var mid = arr[Math.floor((begin + end) / 2)],
                    index;
                (function (begin, end) {
                    while(begin <= end) {
                        /*
                         * 这地方不能用 <=  否则在轮到mid时进入死循环
                         * */
                        while(arr[begin] < mid) {
                            begin ++ ;
                        }
                        while(arr[end] > mid) {
                            end --;
                        }
                        if (begin <= end) {
                            if (begin !== end) {
                                // 这里要判断一下, 因为begin 与 end相等就变成 变量与自己异或, 最后值变为0
                                arr[begin] = arr[begin] ^ arr[end];
                                arr[end] = arr[begin] ^ arr[end];
                                arr[begin] = arr[begin] ^ arr[end];
                            }
                            begin ++;
                            end --;
                        }
                    }
                    index = begin;
                })(begin, end);
                goodQs(arr, begin, index - 1);
                goodQs(arr, index, end);
            }
            return arr;
        }
    };
    function Arr() {}
    Arr.prototype = {
        makeArr : function(len) {
            len = len || 100;
            var arr = [];
            for (var i = 0; i < len; i++) {
                arr.push(this.rand(0, 100));
            }
            return arr;
        },
        rand : function(begin, end) {
            return begin + Math.floor(Math.abs(begin - end) * Math.random());
        }
    };
    var arr = (new Arr()).makeArr(100);
    console.log(arr);
    var s = new Sort(arr);
    console.log(s.quickSort());
})();