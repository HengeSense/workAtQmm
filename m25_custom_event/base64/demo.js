(function () {
    function Encode(str) {
        this.str = str;
    }
    Encode.prototype = {
        base64 : function () {
            var str = this.str,
                bytesNum = 0,
                result;
            var that = this;
            function toBits() {
                var code,
                    bits = '';
                for (var i = 0; i < str.length; i++) {
                    code = str.charCodeAt(i);
                    if (code < 256) { // one byte
                        bits += fillZero(code.toString(2), 8);
                        bytesNum += 1;
                    } else if (code < 65536){
                        bits += fillZero(code.toString(2), 16);
                        bytesNum += 2;
                    }
                }
                return bits;
            }
            function fillZero(str, num) {
                return that.fillZero(str, num, 1)
            }
            function bytes3to4(bits){
                var cut24,
                    result = '';
                for (var i = 0; i < bits.length; i += 24) {
                    cut24 = that.fillZero(bits.substr(i, 24), 24, false);
                    result += codeToAscii(parseInt(cut24.substr(0, 6), 2));
                    result += codeToAscii(parseInt(cut24.substr(6, 6), 2));
                    result += codeToAscii(parseInt(cut24.substr(12, 6), 2));
                    result += codeToAscii(parseInt(cut24.substr(18, 6), 2));
                }
                return result;
            }
            function codeToAscii(code) {
                var zeroCode = ('0').charCodeAt(0),
                    aCode = ('a').charCodeAt(0),
                    ACode = ('A').charCodeAt(0);
                if (code < 26) {
                    return String.fromCharCode(code + ACode);
                } else if (code < 52) {
                    return String.fromCharCode(code - 26 + aCode);
                } else if (code < 62) {
                    return String.fromCharCode(code - 52 + zeroCode);
                } else if (code === 62) {
                    return '+';
                } else {
                    return '/';
                }
            }
            function addEquals(result){
                var remain = bytesNum % 3;
                if (remain === 1) {
                    result = result.substr(0, result.length - 2);
                    result += "==";
                } else if (remain === 2) {
                    result = result.substr(0, result.length - 1);
                    result += "=";
                }
                return result;
            }
            result = toBits();
            result = bytes3to4(result);
            result = addEquals(result);
            console.log(result);
        },
        fillZero : function (str, num, isStart) {
            var result = '';
            str += '';
            for (var i = num - str.length; i > 0; i--) {
                result += '0';
            }
            return isStart ? (result + str) : (str + result);
        }
    };
    var str = "我爱编码";
    (new Encode(str)).base64();
    console.log(base64Encode(str));
})();