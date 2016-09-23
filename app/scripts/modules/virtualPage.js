'use strict';

angular.module('virtualPage', [])
.run(function ($rootScope, $window) {
    $rootScope.$on("$routeChangeStart",function(event, next, current){
        // Caso o evento do angular seja de alteracao de rota disparar o evento customizado
        if(next.templateUrl) {
            // Evento customizado do google tag manager
            $window.dataLayer.push(
              {
                'event': 'routeChange',
                'virtualPageView': next.templateUrl
              }
            );
        }
    });
});
