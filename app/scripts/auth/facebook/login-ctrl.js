(function (angular) {
    'use strict';

    angular.module('hang-out-auth-facebook')
    .controller('hangOutFacebookLogin', ['$scope', '$location', '$facebook', '$timeout', '$route', 'model', 'hangOutAuth', function ($s, $l, $fb, $t, $r, m, auth) {

        function authenticateUser() {
            $fb.api("/me").then(function (response) {
                var user = new m.Individual(
                        response.first_name + ' ' + response.last_name,
                        response.email,
                        response.link)
                        .setAvatar('http://graph.facebook.com/' + response.id + '/picture?type=large');

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
            $fb.login().then(authenticateUser);
            $t(authenticateUserAndQueueAnother, 1000);
        };

    }]);

}).call(this, this.angular);