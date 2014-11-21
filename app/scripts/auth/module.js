﻿(function (angular) {
    'use strict';

    angular.module('hang-out-auth', ['ngRoute', 'hang-out', 'hang-out-auth-mail', 'hang-out-auth-facebook', 'hang-out-auth-google'])
    .config(['$routeProvider', function ($route) {
        $route
            .when('/you', { templateUrl: 'scripts/auth/login.tmpl.html', controller: 'hangOutLogin', isPublic: true });
    }])
    .run(['$rootScope', '$location', 'hangOutAuth', function ($root, $l, auth) {
        $root.$on('$routeChangeStart', function (event, route) {
            if (route.isPublic === true) {
                return;
            }

            if (auth.isAuthenticated()) {
                $root.user = auth.currentUser();
                return;
            }

            $l.path('/you');

        });
    }]);

}).call(this, this.angular);