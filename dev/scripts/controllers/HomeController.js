(function () {
    var app = angular.module('pedro-web.controllers.home', []);
    app.controller('HomeController', [
        '$scope', '$log', '$rootScope', 
        function ($scope, $log, $rootScope) {
            
            $rootScope.activeMenu = "home";
            
            
        }
    ]);
}())