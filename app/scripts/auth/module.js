﻿(function (angular) {
    'use strict';

    angular.module('hang-out-auth', [])
    .config(['$routeProvider', function ($route) {
        $route
            .when('/login', { templateUrl: 'scripts/auth/login.tmpl.html', controller: 'hangOutLogin', isPublic: true });
    }])
    .run(['$rootScope', '$location', 'hangOutAuth', function ($root, $l, auth) {
        $root.$on('$routeChangeStart', function (event, route) {
            if (route.isPublic === true) {
                return;
            }

            if (auth.isAuthenticated) {
                $root.user = auth.currentUser;
                return;
            }

            $l.path('/login');

        });
    }]);

}).call(this, this.angular);