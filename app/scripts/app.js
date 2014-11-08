﻿(function (angular) {
    'use strict';

    angular.module('hang-out-app', ['ngRoute', 'hang-out-auth', 'hang-out-browse'])
    .config(['$routeProvider', function ($route) {
        $route.otherwise({ redirectTo: '/browse' });
    }]);

}).call(this, this.angular);