(function () {

    var app = angular.module('pedro-web.config', ['ui.router']);
    app.config([
        '$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            //se não encontrar rota, vai pra home
            $urlRouterProvider.otherwise("/home");
            
            $stateProvider
            .state('base', {
                abstract: true,
                views: {
                    "header": {
                        templateUrl: "views/base/header.html"
                    },
                    "main": {
                        templateUrl: "views/base/main.html"
                    },
                    "footer": {
                        templateUrl: "views/base/footer.html"
                    }
                }
            })
            .state('base.home', {
                url: '/home',
                templateUrl: 'views/home.html',
                controller: 'HomeController'
            })
            .state('base.roleta', {
                url: '/roleta',
                templateUrl: 'views/roleta.html',
                controller: 'RoletaController',
                resolve: {
                    CtrlOptions: function() {
                        return {
                            acao: "listar-roletas"
                        };
                    }
                }                
            })
            .state('base.roleta-listar', {
                url: '/roleta/:nome',
                templateUrl: 'views/roleta-frases.html',
                controller: 'RoletaController',
                resolve: {
                    CtrlOptions: function() {
                        return {
                            acao: "listar-frases"
                        };
                    }
                }
            })            
            .state('base.roleta-add-frase', {
                url: '/roleta/:nome/adicionar',
                templateUrl: 'views/roleta-frases-adicionar.html',
                controller: 'RoletaController',
                resolve: {
                    CtrlOptions: function() {
                        return {
                            acao: "adicionar-frases"
                        };
                    }
                }
            })                        
            .state('login', {
                url: '/login',
                views: {
                    "main": {
                        templateUrl: "views/login.html"
                    }
                }
            });

        }
    ]);

}())