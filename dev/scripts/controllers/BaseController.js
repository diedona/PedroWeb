(function(){
    var app = angular.module('pedro-web.controllers.base', []);
    app.controller('BaseController', [
        '$scope',
        function($scope) {
            console.log('Base');
        }
    ]);
}())