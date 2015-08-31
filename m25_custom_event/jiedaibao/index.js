$(function () {
    var div = $('#content'),
        form = div.find('.ng-pristine'),
        numInput = form.find('input[ng-model="user.phone"]'),
        codeInput = form.find('input[ng-model="user.vcode"]'),
        getBtn = div.find('.input-group-addon'),
        linquBtn = div.find('.inviteFriend2'),
        queryUrl = "http://localhost:8080/t/jdb_check.ashx",
        isNumUsed;  // 号码是否使用过

    getBtn.on('click', function () {
        if (!isNumberFormatOK()) {
            tishi("您输入的手机号码格式不正确.");
            return false;
        }
        if ($(this).hasClass('aj-has-send')) return false;
        $(this).addClass('aj-has-send');
        function callback() {
            if (isNumUsed) {
                tishi("您输入的号码已领取过红包,请勿重复领取.");
                $(getBtn).removeClass('aj-has-send');
            } else {
                sendCode();
            }
        }
        check(callback);
    });
    linquBtn.on('click', function () {
        if ($.trim(codeInput.val()) === '') {
            tishi("您还不可以领取,请确定验证码输入正确.");
            return false;
        }
        linqu();
    });
    function check(callback) {
        var prop = {};
        prop.data = {};
        prop.data.phone = $(numInput).val();
        prop.data.action = 'check';
        $.ajax({
            url : queryUrl,
            type : 'GET',
            data : prop.data,
            success : function (response) {
                if (response == 'ok') {
                    isNumUsed = false;
                } else if (response == 'error') {
                    isNumUsed = true;
                }
                callback();
            }
        });
    }
    function sendCode() {
        var prop = {};
        prop.data = {};
        prop.data.phone = $(numInput).val();
        prop.data.action = 'send';
        $.ajax({
            url : queryUrl,
            type : "GET",
            data : prop.data,
            success : function (response) {
                if (response == 'ok') {
                    var time = 30,
                        timer;
                    timer = setInterval(function () {
                        time -= 1;
                        if (time <= 0) {
                            $(getBtn).removeClass('aj-has-send');
                            $(getBtn).html('获取验证码');
                            clearInterval(timer);
                            return true;
                        }
                        $(getBtn).html(time + "秒后重新获取");
                    }, 1000)
                }
            },
            error : function () {
                $(getBtn).removeClass('aj-has-send');
            }
        });
    }
    function tishi(val) {
        alert(val);
    }
    function linqu() {
        var prop = {};
        prop.data = {};
        prop.data.phone = $(numInput).val();
        prop.data.code = $(codeInput).val();
        prop.data.action = 'accept';
        $.ajax({
            url : queryUrl,
            type : 'GET',
            data : prop.data,
            success : function(response){
                if (response == 'ok') {
                    tishi("领取成功!");
                } else if (response == 'error') {
                    tishi("领取失败,请检查验证码是否正确,再重试.");
                }
            }
        });
    }
    function isNumberFormatOK(){
        return /^\d{11}$/.test($.trim($(numInput).val()));
    }
});