(function(){
    
    var app = angular.module('PedroWeb.SobreController', []);
    app.controller('SobreController', [
        '$scope', '$rootScope', 
        function($scope, $rootScope) {
            $rootScope.menu = "sobre";
        }
    ]);
    
}())