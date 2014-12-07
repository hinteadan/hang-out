(function (angular) {
    'use strict';

    angular.module('hang-out-app', ['ngRoute', 'ui.bootstrap', 'hang-out-auth', 'hang-out-browse', 'hang-out-create', 'ui.bootstrap.datetimepicker', 'uiGmapgoogle-maps', 'hang-out-wallpaper', 'hang-out-analytics'])
    .constant('googleApiKey', 'AIzaSyBD5HhqV2k2DQQwqauyUAxt7xIJyn65JvU')
    .config(['$routeProvider', '$locationProvider', 'uiGmapGoogleMapApiProvider', 'googleApiKey', function ($route, $location, gmaps, googleApiKey) {
        $route.otherwise({ redirectTo: '/browse' });
        $location.hashPrefix('!');

        //https://angular-ui.github.io/angular-google-maps/#!/api
        gmaps.configure({
            key: googleApiKey,
            v: '3.17'
        });
    }]);

}).call(this, this.angular);