(function (angular) {
    'use strict';

    angular.module('hang-out-auth-google')
    .controller('hangOutGoogleLogin', ['$scope', '$location', 'GooglePlus', 'model', 'hangOutAuth', function ($s, $l, google, m, auth) {

        $s.login = function () {
            google.login().then(function (authResult) {
                google.getUser().then(function (response) {
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
            });
        };

    }]);

}).call(this, this.angular);