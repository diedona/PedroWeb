(function () {
    var app = angular.module('pedro-web.controllers.roleta', []);
    app.controller('RoletaController', [
        '$scope', '$log', '$rootScope', '$stateParams', '$location',
        'CtrlOptions',
        function ($scope, $log, $rootScope, $stateParams, $location, CtrlOptions) {

            $rootScope.activeMenu = "roleta";

            //$log.log(CtrlOptions);
            //$log.log($stateParams);

            if (CtrlOptions.acao == "listar-roletas") {
                //listar roletas
            } else if (CtrlOptions.acao == "listar-frases") {
                $scope.roleta = $stateParams.nome;
            } else if (CtrlOptions.acao == "adicionar-frases") {
                //preparar form para inserir
                $scope.frase = {};
                $scope.frase.roleta = $stateParams.nome;
            }
            
            $scope.SalvarFrase = function(frmFrase, frase) {
                
                if(!frmFrase.$valid) {
                    return;
                }
                
                $location.path("/roleta/" + frase.roleta);
                
            }
        }
    ]);
}())