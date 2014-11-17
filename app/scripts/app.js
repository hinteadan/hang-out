(function (angular) {
    'use strict';

    angular.module('hang-out-app', ['ngRoute', 'ui.bootstrap', 'hang-out-auth', 'hang-out-browse', 'hang-out-create', 'ui.bootstrap.datetimepicker', 'google-maps'.ns(), 'hang-out-wallpaper'])
    .constant('googleApiKey', 'AIzaSyBD5HhqV2k2DQQwqauyUAxt7xIJyn65JvU')
    .config(['$routeProvider', 'GoogleMapApiProvider'.ns(), 'googleApiKey', function ($route, gmaps, googleApiKey) {
        $route.otherwise({ redirectTo: '/browse' });

        //https://angular-ui.github.io/angular-google-maps/#!/api
        gmaps.configure({
            key: googleApiKey,
            v: '3.17'
        });
    }]);

}).call(this, this.angular);