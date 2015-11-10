(function () {
    var app = angular.module("test", []),
        container = $("#module1");
    app.controller("deal", function ($scope) {
        $scope.title = "AJ";
        $scope.content = "This is test";
        $scope.warning = "If you attach ng-app to a tag, then scripts of this app may be given!";
        $scope.new = {
            title : "",
            content : "",
        };
        $scope.info = {
            content : "",
            type : ""
        };
        $scope.lists = [];
        
        $scope.add = function () {
            if (this.new.title !== "" && this.new.content !== "") {
                this.lists.push(this.new);
            } else {
                this.info.content = "Both are required!";
            }
        };

        $scope.deleteList = function (index) {
            $scope.lists.splice(index, 1);
        }
    });
    angular.bootstrap(container, ["test"]);
})();