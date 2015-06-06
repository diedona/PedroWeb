(function () {

    var app = angular.module('PedroWeb.RoletaController', []);
    app.controller('RoletaController', [
        '$scope', '$rootScope', '$stateParams', 'CtrlOptions',
        function ($scope, $rootScope, $stateParams, CtrlOptions) {

            $rootScope.menu = "roleta";

            if (CtrlOptions.action == "list") {
                $scope.roletas = [
                    {
                        Nome: "Diogo Vechio",
                        Roleta: "diogo",
                        Descritivo: "Baboseira, AFF, teclado malafaia. rs."
                    },
                    {
                        Nome: "Samuel Pavlovic",
                        Roleta: "samuel",
                        Descritivo: "N9 best celular ever, nightly builds estáveis"
                    },
                    {
                        Nome: "Keyo Galvão",
                        Roleta: "keyo",
                        Descritivo: "Odeio linguagens que não tem essas tools"
                    },
                ];
            } else if (CtrlOptions.action == "frases") {
                $scope.caboclo = $stateParams.caboclo;
                $scope.frases = [
                    {Id: 1, Frase: "AFF ISSO TÁ RUIM"},
                    {Id: 2, Frase: "Não sou suas nega"},
                    {Id: 3, Frase: "Uma metralhadora de merda que tá saindo da boca sua agora"}
                ];
            }

        }
    ]);

}());