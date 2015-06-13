(function () {
    var app = angular.module('pedro-web.controllers.roleta', []);
    app.controller('RoletaController', [
        '$scope', '$log', '$rootScope', 
        function ($scope, $log, $rootScope) {
            
            $rootScope.activeMenu = "roleta";
            
        }
    ]);
}())