(function (angular) {
    'use strict';

    angular.module('hang-out-auth-user')
    .controller('hangOutUserLogin', ['$scope', '$q', '$location', 'model', 'hasher', 'hangOutAuth', 'dataStore', function ($s, $q, $l, m, hasher, auth, provide) {

        function authenticateUserPass(username, password) {

            var deff = $q.defer();

            provide.userViaEmail(username).then(function (user) {
                if (!user) {
                    deff.reject('Invalid credentials');
                    return;
                }
                deff.resolve(user);
            });

            return deff.promise;
        }

        function authenticate() {
            authenticateUserPass($s.username, $s.password).then(function (user) {
                auth
                    .login(user)
                    .then(auth.authenticate)
                    .then(function () {
                        $l.path('/');
                    });
            });
        }

        $s.username = null;
        $s.password = null;
        $s.login = function () {
            authenticate();
        };

    }]);

}).call(this, this.angular);