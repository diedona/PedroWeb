(function () {
    var app = angular.module('pedro-web.controllers.home', []);
    app.controller('HomeController', [
        '$scope', '$log',
        function ($scope, $log) {
            $log.log('Home');
            $scope.LogStart($scope.startDate, 'HOME');
        }
    ]);
}())