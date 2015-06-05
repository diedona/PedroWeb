(function(){
    
    var app = angular.module('PedroWeb.UsuariosController', []);
    app.controller('UsuariosController', [
        '$scope', '$rootScope',
        function($scope, $rootScope) {
            $rootScope.menu = "usuarios";
            $scope.usuarios = [
                { Username: "cocao", PerfilNome: "Administrador", IsActive: true },
                { Username: "keyo", PerfilNome: "Administrador", IsActive: true },
                { Username: "dona", PerfilNome: "Administrador", IsActive: true },
                { Username: "diogo", PerfilNome: "Atualizador", IsActive: false }
            ];
        }
    ]);
    
}())