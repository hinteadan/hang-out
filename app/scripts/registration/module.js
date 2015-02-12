(function (angular) {
    'use strict';

    angular.module('hang-out-registration', ['ngRoute', 'hang-out', 'hang-out-auth', 'hang-out-notify', 'hang-out-analytics'])
    .config(['$routeProvider', function ($route) {
        $route
            .when('/register', { templateUrl: 'scripts/registration/register.tmpl.html', controller: 'hangOutRegisterCtrl', isPublic: true })
            .when('/validate-user/:clientId/:token', { templateUrl: 'scripts/registration/validate.tmpl.html', controller: 'hangOutValidateUserCtrl', isPublic: true });
    }]);

}).call(this, this.angular);
