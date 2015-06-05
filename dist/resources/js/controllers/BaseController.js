(function () {

    var app = angular.module('PedroWeb.BaseController', []);
    app.controller('BaseController', [
        '$scope', '$rootScope',
        function ($scope, $rootScope) {

            //inicializando plugins
            $('.button-collapse').sideNav({
                'edge': 'left'
            });

            var window_width = $(window).width();

            // Floating-Fixed table of contents
            if ($('nav').length) {
                $('.toc-wrapper').pushpin({
                    top: $('nav').height()
                });
            } else if ($('#index-banner').length) {
                $('.toc-wrapper').pushpin({
                    top: $('#index-banner').height()
                });
            } else {
                $('.toc-wrapper').pushpin({
                    top: 0
                });
            }

            // Detect touch screen and enable scrollbar if necessary
            function is_touch_device() {
                try {
                    document.createEvent("TouchEvent");
                    return true;
                } catch (e) {
                    return false;
                }
            }
            
            if (is_touch_device()) {
                $('#nav-mobile').css({
                    overflow: 'auto'
                })
            }
            
            ////////////////// CONFIGURAÇÕES GLOBAIS
            $rootScope.menu = "home";

        }
    ]);

}())