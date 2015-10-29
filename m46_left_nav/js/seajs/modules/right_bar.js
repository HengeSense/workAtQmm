define(function (require, exports, module) {
    function RB(){
        this.p = {};
    }
    RB.prototype = {
        init : function () {
            this.addComponents();
        },
        addComponents : function () {
            var that = this;
            // add....
            that.bootstrap();
        },
        bootstrap : function () {
            var app = angular.module("rightBar", ['ngSanitize']),
                div = $('#aj-fixed-right-bar'),
                wrap = div.find('.aright');
            app.controller("rightBar", function ($scope, $http) {
                $scope.fontSize = "font-size:20px;";
                $scope.root = "/m46_left_nav/ajax/";
                $scope.container = null;
                $scope.select = 0;
                $scope.items = [
                    {
                        icon : 'qmm-icon-view_quilt',
                        name : '会场导航',
                        url : '1.html',
                        content : ''
                    },
                    {
                        icon : 'qmm-icon-iconfont-zuoceyouhuiquan',
                        name : '优惠券集结号',
                        url : '2.html',
                        content : ''
                    },
                    {
                        icon : 'qmm-icon-local_taxi',
                        name : '预售商品精选直达',
                        url : '3.html',
                        content : ''
                    }
                ];



                $scope.load = function (url, index) {
                    if($scope.items[index].content !== "") {
                        $scope.select = index;
                    } else {
                        $http.get(this.root + url).success(function (res) {
                            $scope.items[index].content = res;
                            $scope.select = index;
                        });
                    }
                }
                $scope.load($scope.items[$scope.select].url, $scope.select);

            });
            angular.bootstrap(div, ['rightBar']);
        }
    };
    module.exports = RB;
});