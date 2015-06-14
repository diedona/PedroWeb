(function () {
    var app = angular.module('pedro-web.controllers.roleta', []);
    app.controller('RoletaController', [
        '$scope', '$log', '$rootScope', '$stateParams', 'CtrlOptions',
        function ($scope, $log, $rootScope, $stateParams, CtrlOptions) {

            $rootScope.activeMenu = "roleta";

            //$log.log(CtrlOptions);
            //$log.log($stateParams);

            if (CtrlOptions.acao == "listar-roletas") {
                //listar roletas
            } else if (CtrlOptions.acao == "listar-frases") {
                //listar as frases
            } else if (CtrlOptions.acao == "adicionar-frases") {
                //preparar form para inserir
            }
        }
    ]);
}())