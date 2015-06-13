(function(){
    var app = angular.module('pedro-web.controllers.home', []);
    app.controller('HomeController', [
        '$scope',
        function($scope) {
            console.log('Home');
            $scope.LogStart($scope.startDate, 'HOME');
        }
    ]);
}())