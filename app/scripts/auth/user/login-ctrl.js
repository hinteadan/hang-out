(function (angular) {
    'use strict';

    angular.module('hang-out-auth-user')
    .controller('hangOutUserLogin', ['$scope', '$q', '$location', 'model', 'hasher', 'hangOutAuth', 'dataStore', function ($s, $q, $l, m, hasher, auth, provide) {

        function authenticateUserPass(username, password) {

            var deff = $q.defer(),
                passwordHash = hasher.hash(password);

            provide.userViaEmail(username).then(function (user) {
                if (!user || user.passwordHash !== passwordHash) {
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
            }, function (reason) {
                $s.error = reason;
            });
        }

        $s.username = null;
        $s.$watch('username', function () { $s.error = null; });
        $s.password = null;
        $s.$watch('password', function () { $s.error = null; });

        $s.error = null;

        $s.login = function () {
            authenticate();
        };

    }]);

}).call(this, this.angular);