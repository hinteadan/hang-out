(function (angular) {
    'use strict';

    angular.module('hang-out-app', ['ngRoute', 'ui.bootstrap', 'hang-out-auth', 'hang-out-browse', 'hang-out-create', 'ui.bootstrap.datetimepicker', 'google-maps'.ns()])
    .config(['$routeProvider', 'GoogleMapApiProvider'.ns(), function ($route, gmaps) {
        $route.otherwise({ redirectTo: '/browse' });

        //https://angular-ui.github.io/angular-google-maps/#!/api
        gmaps.configure({
            //    key: 'your api key',
            v: '3.17',
            libraries: 'weather,geometry,visualization'
        });
    }]);

}).call(this, this.angular);