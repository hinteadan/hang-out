(function (angular) {
    'use strict';

    angular.module('hang-out-app', ['ngRoute', 'ui.bootstrap', 'hang-out-auth', 'hang-out-browse', 'hang-out-create', 'ui.bootstrap.datetimepicker'])
    .config(['$routeProvider', function ($route) {
        $route.otherwise({ redirectTo: '/browse' });
    }]);

}).call(this, this.angular);