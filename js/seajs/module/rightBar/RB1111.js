define(function (require, exports, module) {
    function RB() {
        this.p = {};
    }
    RB.prototype = {
        init: function () {
            this.addComponents();
            this.bootstrap();
        },
        addComponents: function () {
            $(document.body).append(temp_view);
        },
        bootstrap: function () {
            var app = angular.module("rightBar", ['ngSanitize']),
                div = $('#aj-fixed-right-bar'),
                wrap = div.find('.aright');
            app.controller("rightBar", function ($scope, $http) {
                $scope.fontSize = "font-size:20px;";
                $scope.root = "/html/1111/";
                $scope.container = null;
                $scope.select = 0;
                $scope.isShow = false;
                $scope.rightWidth = 187;
                $scope.isLoad = false;
                $scope.logoHeight = 304; // 235 ~ 304

                $scope.items = [
                    {
                        icon: 'qmm-icon-view_quilt',
                        name: '会场导航',
                        url: '1.html',
                        content: ''
                    },
                    {
                        icon: 'qmm-icon-iconfont-zuoceyouhuiquan',
                        name: '优惠券集结号',
                        url: '2.html',
                        content: ''
                    },
                    {
                        icon: 'qmm-icon-local_taxi',
                        name: '预售商品精选直达',
                        url: '3.html',
                        content: ''
                    }
                ];



                $scope.load = function (url, index) {
                    if ($scope.items[index].content === "") {
                        $scope.isLoad = true;
                        $http.get(this.root + url).then(function (res) {
                            $scope.items[index].content = res;
                            $scope.select = index;
                            $scope.isLoad = false;
                        }, function () {
                            $scope.items[index].content = "<p style='text-align: center;color: white;padding: 20px 0;'>加载失败</p>";
                            $scope.select = index;
                            $scope.isLoad = false;
                        });
                    }
                };
                $scope.load($scope.items[$scope.select].url, $scope.select);

                $scope.show = function (index) {
                    if (this.select === index) {
                        $scope.isShow = !$scope.isShow;
                    } else {
                        $scope.isShow = true;
                    }
                    $scope.select = index;
                };
                $scope.mustShow = function () {
                    $scope.isShow = true;
                };

                $scope.resizeLogoheight = function () {

                };

                $(window).onresize = function () {
                    $scope.resizeLogoheight();
                }

            });
            angular.bootstrap(div, ['rightBar']);
        }
    };

    var temp_view = ["<div id=\"aj-fixed-right-bar\" ng-controller=\"rightBar\" style=\"right: {{isShow ? \'0px\' : \'-187px\'}};\">",
        "    <div class=\"abody\">",
        "        <div class=\"aleft\">",
        "            <ul class=\"left-ul\">",
        "                <li style=\"width:100%;height:32px;\"></li>",
        "                <li class=\"logo-bg\" style=\"height: {{logoHeight + \'px\'}};\" ng-click=\"mustShow()\"></li>",
        "                <li class=\"atab{{select === $index ? \' aj-select\' : \'\'}}{{$last ? \' no-border\' : \'\'}}\" ng-repeat=\"item in items\" ng-click=\"load(item.url, $index);show($index)\">",
        "                    <div class=\"inside\">",
        "                        <i class=\"{{item.icon}}\" style=\"{{fontSize}}\"></i>",
        "                        <span ng-bind=\"item.name\" style=\"line-height: 1.3\"></span>",
        "                    </div>",
        "                </li>",
        "            </ul>",
        "        </div>",
        "        <div class=\"aright\" id=\"In11\">",
        "            <div class=\"content\" style=\"padding: 10px 11px;\">",
        "                <div class=\"aj-wait aj-hide\" style=\"display: {{isLoad ? \'block\' : \'none\'}}\">",
        "                    <img src=\"http://www.quanmama.com/AdminImageUpload/20148150838532.jpg\" />",
        "                </div>",
        "                <div style=\"width:100%;height:32px;\"></div>",
        "                <div ng-repeat=\"item in items\" class=\"acontainer aj-hide {{\'container\' + $index}}\" style=\"display: {{select === $index ? \'block\' : \'none\'}};\">",
        "                    <span ng-bind-html=\"item.content\"></span>",
        "                </div>",
        "            </div>",
        "        </div>",
        "    </div>",
        "</div>",
        "<style>",
        "#aj-fixed-right-bar{position:fixed;top:0;right:0;width:227px;height:100%;z-index:991;-webkit-transition:all .3s;-moz-transition:all .3s;-ms-transition:all .3s;-o-transition:all .3s;transition:all .3s;transition-timing-function:ease-in-out;-moz-transition-timing-function:ease-in-out;-webkit-transition-timing-function:ease-in-out;-o-transition-timing-function:ease-in-out}#aj-fixed-right-bar .aj-hide{display:none}#aj-fixed-right-bar .abody{position:absolute;top:0;left:0;width:100%;height:100%}#aj-fixed-right-bar .aleft{position:absolute;top:0;left:0;width:40px;height:100%;overflow:hidden}#aj-fixed-right-bar .aleft .logo-bg{width:100%;height:304px;background-image:url(/images/smile/i-logo.png);background-position:0 0;background-repeat:no-repeat}#aj-fixed-right-bar .aleft .atab{background:#000;cursor:pointer;text-align:center;border-bottom:1px solid #535353;color:white}#aj-fixed-right-bar .aleft .atab.aj-select{color:#ff6c00}#aj-fixed-right-bar .aleft .atab.no-border{border-bottom:0}#aj-fixed-right-bar .aleft .atab .inside{display:inline-block;text-align:center;width:20px;word-wrap:break-word;word-break:break-all;padding:15px 0}#aj-fixed-right-bar .aleft .left-ul{padding-bottom:40px;background-image:url(/images/smile/i-logo.png);background-repeat:no-repeat;background-position:right bottom}#aj-fixed-right-bar .aleft .left-ul li{-webkit-user-select:none}#aj-fixed-right-bar .aright{position:absolute;top:0;right:0;width:187px;height:100%;background-color:#333;overflow-x:hidden;overflow-y:auto}#aj-fixed-right-bar .aright .aj-hide{display:none}#aj-fixed-right-bar .aright .aj-quan-ul .aj-li .aj-info{display:block}#aj-fixed-right-bar .aright .aj-quan-ul .aj-li .aj-get{display:none}#aj-fixed-right-bar .aright .aj-quan-ul .aj-li .aj-get .aj-btn{display:inline-block;width:58px;height:30px;line-height:30px;padding:0 10px;background-color:#f04848;color:#fff;-webkit-border-radius:2px;-moz-border-radius:2px;-ms-border-radius:2px;-o-border-radius:2px;border-radius:2px;font-size:12px}#aj-fixed-right-bar .aright .aj-quan-ul .aj-li:hover .aj-info{display:none}#aj-fixed-right-bar .aright .aj-quan-ul .aj-li:hover .aj-get{display:block}#aj-fixed-right-bar .aright .aj-wait{position:absolute;top:0;left:0;z-index:9;width:100%;height:100%;text-align:center;background-color:white;opacity:.5;filter:alpha(opacity=50)}#aj-fixed-right-bar .aright .aj-wait img{margin-top:100px}",
        "    #In11{height:100%;position:fixed;top:0;right:0;background:#333;z-index:99;color:#fff}#In11 .outer{position:absolute;left:-42px;top:0;width:42px;cursor:pointer}#In11 .outer .logo{height:304px;background:#EE0A3B url(/img2/zt/20151014/i-logo.png) no-repeat}#In11 .nj_s_menu{padding:0 0 40px;background:url(/img2/zt/20151014/i-logo.png) no-repeat right bottom}#In11 .nj_s_m{background:#000;cursor:pointer;text-align:center;line-height:1.3;border-bottom:1px solid #535353}#In11 .nj_s_m div{padding:15px 10px}#In11 .nj_s_m .md_icon{font-size:18px;display:block;margin:0 0 4px}#In11 .nj_s_menu .current{color:#FF6C00;position:relative}#In11 .nj_s_m:last-child{border:none}#In11 .wrap{width:0;height:100%;overflow:hidden;color:#fff;background:#333;font-family:arial}#In11 .wrap .content{padding:20px 11px;overflow:auto;overflow-x:hidden}#In11 .wrap .content::-webkit-scrollbar-track-piece{background-color:#333;-webkit-border-radius:0}#In11 .wrap .content::-webkit-scrollbar{width:9px;height:9px}#In11 .wrap .content::-webkit-scrollbar-thumb{height:50px;background-color:#666;outline-offset:-1px}#In11 .wrap .content::-webkit-scrollbar-thumb:hover{background-color:#777}#In11 .inner,#In11 .inner .nj_s_c{width:100%;height:100%;overflow:hidden}#In11 .inner .tit{background:url(/img/o/11.png) no-repeat -49px -253px;color:#FF4606;text-align:center;margin:9px 15px;font-size:14px}#In11 .inner .tit a{display:block;width:20%;height:22px;float:left;margin-right:-20%}#In11 .inner iframe{width:100%;height:96%}#In11 .content h3 a{display:block;height:52px;line-height:52px;background:#EE0A3B;text-align:center;color:#fff;font-weight:400;margin:0 0 15px}#In11 .content .item{border-bottom:1px dotted #656565;margin:0 0 15px}#In11 .content .item h6{font:800 14px arial;color:#A8A8A8;margin:0 0 12px}#In11 .content .links{padding:0 0 12px;margin-right:-12px}#In11 .content .links a{display:inline-block;background:#494949;height:35px;line-height:35px;color:#B9B9B9;margin:0 7px 7px 0;width:43%;text-align:center}#In11 .content .links a:hover{background:#FF5913;color:#fff}#In11 .content .item:first-child .links a{color:#FFE196}#In11 .content .gl{margin:0 0 20px;border:none}#In11 .content .gl a{width:auto;display:block}#In11 .content .other{width:100%;display:block;background:#2D2D2D;color:#999;text-align:center;line-height:2.5;margin:0 -15px;width:178px}.cp_list li{background:#fff;margin:0 0 12px;position:relative;text-align:center;padding:2px;height:140px;overflow:hidden;}.cp_list .intro{background:#F3F3F3;margin:5px 5px 3px;height:67px}.cp_list .p,.cp_list .shopname{font:12px \/\//\/\//\/\/\'microsoft yahei\/\//\/\//\/\/\';color:#D8000E}.cp_list .p .m{font-size:30px;font-weight:800}.cp_list .logo{margin:5px 0 3px}.cp_list .shopname{color:#333}.cp_list .line{height:14px;margin:0 2px;background:url(/img2/zt/20151014/line.png) no-repeat right 0}.cp_list .way{line-height:23px;background:#C7E7DB;margin:0 9px}.cp_list .cate{color:#E40031}.cp_list .times{padding:2px 0;color:#999;line-height:1.2}.cp_list .today{width:45px;height:40px;background:url(/img2/zt/20151014/i-td.png) no-repeat;overflow:hidden;line-height:15em;position:absolute;top:-5px;left:-5px}.cp_list .btn{font:14px/23px \/\//\/\//\/\/\'microsoft yahei\/\//\/\//\/\/\';background:#D60048;color:#fff;padding:0 7px;margin:3px 0;display:inline-block}.cp_list .over{background:#515151}.cp_list li:hover .bot{display:none}.cp_list li:hover .opt{display:block}.cp_list .type2 .p{padding:7px 0}.cp_list .type2 .p .m{font-size:22px}.cp_list .type2 .way{background:#FFD6D1}.cp_list .type2 .line{background-position:right -15px}.cp_list .type2 .today{background-position:0 -41px}.dplist{margin:0 0 30px}.dplist li{margin:0 0 9px;background:#494A4B;text-align:center}.dplist a{color:#DCDCDC}.dplist img{width:100%}",
        "</style>"].join("");
    module.exports = RB;
});