(function(){
    
    var app = angular.module('PedroWeb.PluginsController', []);
    app.controller('PluginsController', [
        '$scope',
        function($scope) {
            $scope.plugins = [
                { Nome: "Roleta", Descricao: "Pra zuar", IsActive: true },
                { Nome: "Google", Descricao: "Pra zuar tbem", IsActive: true },
                { Nome: "Weather", Descricao: "Pra zuar a pavuna", IsActive: false }
            ];
        }
    ]);
    
}())