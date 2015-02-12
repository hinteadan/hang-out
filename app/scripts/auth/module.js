(function (angular, localStore) {
    'use strict';

    angular.module('hang-out-auth', ['ngRoute', 'hang-out', 'hang-out-auth-user', 'hang-out-auth-mail', 'hang-out-auth-facebook', 'hang-out-auth-google', 'hang-out-analytics'])
    .constant('storeKeyForRedirect', 'redirectTo')
    .config(['$routeProvider', function ($route) {
        $route
            .when('/you', { templateUrl: 'scripts/auth/login.tmpl.html', controller: 'hangOutLogin', isPublic: true });
    }])
    .run(['$rootScope', '$location', '$timeout', 'hangOutAuth', 'storeKeyForRedirect', function ($root, $l, $t, auth, redirectStoreKey) {
        $root.$on('$routeChangeStart', function (event, route) {
            if (route.isPublic === true) {
                return;
            }

            if (auth.isAuthenticated()) {
                $root.user = auth.currentUser();
                if (localStore[redirectStoreKey]) {
                    var path = '/activity/' + localStore[redirectStoreKey];
                    delete localStore[redirectStoreKey];

                    $t(function () {
                        $l.path(path);
                    });
                }
                return;
            }

            $l.path('/you');

        });
    }]);

}).call(this, this.angular, this.localStorage);