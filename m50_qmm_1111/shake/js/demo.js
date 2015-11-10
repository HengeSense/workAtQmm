/**
 * Created by james on 2015/11/10.
 */
(function () {

    var app = angular.module("app", []);
    app.controller("animation", function ($scope) {
        $scope.sliders = [
            "bounce","flash","pulse","rubberBand","shake","swing","tada","wobble","jello","bounceIn","bounceInDown","bounceInLeft","bounceInRight","bounceInUp","bounceOut","bounceOutDown","bounceOutLeft","bounceOutRight","bounceOutUp","fadeIn","fadeInDown","fadeInDownBig","fadeInLeft","fadeInLeftBig","fadeInRight","fadeInRightBig","fadeInUp","fadeInUpBig","fadeOut","fadeOutDown","fadeOutDownBig","fadeOutLeft","fadeOutLeftBig","fadeOutRight","fadeOutRightBig","fadeOutUp","fadeOutUpBig","flipInX","flipInY","flipOutX","flipOutY","lightSpeedIn","lightSpeedOut","rotateIn","rotateInDownLeft","rotateInDownRight","rotateInUpLeft","rotateInUpRight","rotateOut","rotateOutDownLeft","rotateOutDownRight","rotateOutUpLeft","rotateOutUpRight","hinge","rollIn","rollOut","zoomIn","zoomInDown","zoomInLeft","zoomInRight","zoomInUp","zoomOut","zoomOutDown","zoomOutLeft","zoomOutRight","zoomOutUp","slideInDown","slideInLeft","slideInRight","slideInUp","slideOutDown","slideOutLeft","slideOutRight","slideOutUp"
        ];
        $scope.colors = [];
        $scope.speed = "default";
        $scope.rand = function (a, b) {
            return Math.ceil(Math.abs(a - b)*Math.random() + a);
        };
        angular.forEach($scope.sliders, function (item) {
            $scope.colors.push("rgba(" + $scope.rand(0, 255) + ", " +
                $scope.rand(0, 255) + ", " + $scope.rand(0, 255) + ", 0.5)");
        });
    });
    angular.bootstrap($("#blocks"), ["app"]);
})();