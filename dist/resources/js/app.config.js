(function () {

    var app = angular.module('PedroWeb.Config', ['ui.router']);
    app.config([
        '$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider)
        {
            $stateProvider
                .state('base', {
                    abstract: true,
                    views: {
                        "header": {
                            templateUrl: "/dist/resources/views/partials/header.html"
                        },
                        "": {
                            templateUrl: "/dist/resources/views/base.html",
                            controller: 'BaseController'
                        }
                    }
                })
                .state('base.home', {
                    url: "/home",
                    templateUrl: "/dist/resources/views/home.html",
                    controller: 'HomeController'
                })
                .state('base.plugins', {
                    url: "/plugins",
                    templateUrl: "/dist/resources/views/plugins.html",
                    controller: 'PluginsController'
                })
                .state('base.roleta', {
                    url: "/roleta",
                    templateUrl: "/dist/resources/views/roleta.html",
                    controller: 'RoletaController',
                    resolve: {
                        CtrlOptions: function () {
                            return {
                                action: "list",
                            };
                        }
                    }
                })
                .state('base.roleta-frases', {
                    url: "/roleta/:caboclo",
                    templateUrl: "/dist/resources/views/roleta-frases.html",
                    controller: 'RoletaController',
                    resolve: {
                        CtrlOptions: function () {
                            return {
                                action: "frases",
                            };
                        }
                    }
                })            
                .state('base.usuarios', {
                    url: "/usuarios",
                    templateUrl: "/dist/resources/views/usuarios.html",
                    controller: 'UsuariosController'
                })            
                .state('base.sobre', {
                    url: "/sobre",
                    templateUrl: "/dist/resources/views/sobre.html",
                    controller: 'SobreController'
                });

            $urlRouterProvider.otherwise("/home");
        }
    ]);

}());