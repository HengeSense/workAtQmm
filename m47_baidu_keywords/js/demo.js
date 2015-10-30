var app = angular.module('app', []);
app.controller("words", function ($scope, $http) {
    $scope.words = [
        {
            word : 1,
            url : 123
        }
    ];
    $scope.haveMore = true;
    $scope.size = 10;
    $scope.page = 1;

    $scope.load = function (page, size) {
        $.ajax({
            'url' : "http://localhost:520/m47_baidu_keywords/PHP/save.php?action=GET",
            data : {
                page : $scope.page,
                size : $scope.size
            },
            type : 'GET',
            dataType : 'json',
            success : function (res) {

                $scope.$apply(function () {
                    if (res.rows.length < $scope.size) {
                        $scope.haveMore = false;
                    }

                    console.log(res.rows);
                    res.rows.forEach(function (item) {
                        $scope.words.push({
                            word : item.word,
                            url : item.url
                        });
                    });
//                    $scope.words = $scope.words.concat(res.rows);

                    if ($scope.haveMore) {
                        $scope.page ++;
                        $scope.load($scope.page, $scope.size);
                    }
                });
            },
            error : function (err) {
                console.log(err);
            }
        });
    };
    $scope.load();

});
angular.bootstrap($('#aj-container'), ["app"]);