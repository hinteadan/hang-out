(function (angular, localStore) {
    'use strict';

    angular.module('hang-out-registration', ['ngRoute', 'hang-out', 'hang-out-analytics'])
    .config(['$routeProvider', function ($route) {
        $route
            .when('/register', { templateUrl: 'scripts/registration/register.tmpl.html', controller: 'hangOutRegisterCtrl', isPublic: true });
    }]);

}).call(this, this.angular, this.localStorage);
