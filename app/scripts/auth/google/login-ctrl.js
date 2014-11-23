(function (angular) {
    'use strict';

    angular.module('hang-out-auth-google')
    .controller('hangOutGoogleLogin', ['$scope', '$location', '$timeout', 'GooglePlus', 'model', 'hangOutAuth', function ($s, $l, $t, google, m, auth) {

        function authenticateUser() {
            google.getUser().then(function (response) {
                if (!response.email) {
                    return;
                }
                var user = new m.Individual(
                    response.name,
                    response.email,
                    response.link)
                    .setAvatar(response.picture);

                auth
                    .login(user)
                    .then(auth.authenticate)
                    .then(function () {
                        $l.path('/');
                    });
            });
        }

        function authenticateUserAndQueueAnother() {
            if (auth.isAuthenticated()) {
                return;
            }
            authenticateUser();
            $t(authenticateUserAndQueueAnother, 1000);
        }

        $s.login = function () {
            google.login().then(authenticateUser);
            $t(authenticateUserAndQueueAnother, 2000);
        };

    }]);

}).call(this, this.angular);