(function(){
    
    var app = angular.module('PedroWeb.HomeController', []);
    app.controller('HomeController', [
        '$scope', '$rootScope',
        function($scope, $rootScope) {
            
            $scope.msg = "Damnit";
            $rootScope.menu = "home";
            
        }
    ]);
    
}())