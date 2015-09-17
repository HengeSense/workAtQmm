/**
 * Created by james on 2015/9/17.
 */
var aMailServices = angular.module('AMail', []);
function emailRouteConfig($routeProvider){
    $routeProvider.
    when('/', {
        controller : ListController,
        templateUrl : 'list.html'
    }).
    when('/view/:id', {
        controller : DetailController,
        templateUrl : 'd6.detail.html'
    }).
    otherwise({
        redirectTo : '/'
    });
}