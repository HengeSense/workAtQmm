define(function (require, exports, module) {
    var temp_view;
    function IM() {
        this.div = $('#aj-home-impor-mess');
        this.url = "/ajax/importantnotice.ashx";
        this.interval = 30; // 30秒询问一次
        this.isAddCom = false;
    }
    IM.prototype = {
        init: function () {
            var that = this;
            if (window.angular) {
                that.deal();
            } else {
//                $.getScript("/js/seajs/module/angular/angular.min.js", function () {
//                    that.deal();
//                });
                require.async("/js/seajs/module/angular/angular.min.js", function () {
                    that.deal();
                });
            }
        },
        deal: function () {
            var that = this;
            that.render();
        },
        render: function () {
            var app = angular.module("im", ['ngSanitize']),
                that = this;
            app.controller("impMess", function ($scope) {
                var key = "aj-is-home-show-important-notice";
                $scope.lists = [];
                $scope.isShowUl = true;

                $scope.getMore = function () {
                    that.query(function (json) {
                        if (json.errorcode == 0) {
                            $scope.$apply(function () {
                                $scope.lists = json.notices;
                            });
                        } else {
                            $scope.$apply(function () {
                                $scope.lists = [];
                            });
                        }
                        setTimeout(function () {
                            $scope.getMore();
                        }, that.interval * 1000);
                    });
                }
                $scope.getMore();

            });
            angular.bootstrap(this.div, ['im']);
        },
        query: function (fn) {
            var that = this;
            $.ajax({
                url: that.url,
                data: {},
                type: 'GET',
                dataType: 'json',
                success: function (json) {
                    fn(json);
                }
            });
        }
    };
    module.exports = IM;
});