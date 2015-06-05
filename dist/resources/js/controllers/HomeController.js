(function(){
    
    var app = angular.module('PedroWeb.HomeController', []);
    app.controller('HomeController', [
        '$scope',
        function($scope) {
            $scope.msg = "Damnit";
        }
    ]);
    
}())