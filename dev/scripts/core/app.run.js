(function () {

    var app = angular.module('pedro-web.run', []);
    app.run([
        '$rootScope'
        ,
        function ($rootScope) {

            $rootScope.startDate = new Date();

            $rootScope.LogStart = function (startDate, from) {
                console.log('App run started ' + startDate.toISOString() + ' (from: ' + from + ')');
            };

            $rootScope.LogStart($rootScope.startDate, 'RUN');

        }
    ]);

}())