(function(){
    
    var app = angular.module('PedroWeb.RoletaController', []);
    app.controller('RoletaController',[
        '$scope', '$rootScope', 'CtrlOptions',
        function($scope, $rootScope, CtrlOptions) {
            
            $rootScope.menu = "roleta";
            
            if(CtrlOptions.action == "list") {
                $scope.roletas = [
                    { Nome: "Diogo Vechio", Roleta: "diogo", Descritivo: "Baboseira, AFF, teclado malafaia. rs." },
                    { Nome: "Samuel Pavlovic", Roleta: "samuel", Descritivo: "N9 best celular ever, nightly builds estáveis" },
                    { Nome: "Diogo Vechio", Roleta: "diogo", Descritivo: "Baboseira, AFF, teclado malafaia. rs." },
                ];
            }
            
        }
    ]);
    
}());