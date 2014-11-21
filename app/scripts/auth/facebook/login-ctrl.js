(function (angular) {
    'use strict';

    angular.module('hang-out-auth-facebook')
    .controller('hangOutFacebookLogin', ['$scope', '$location', '$facebook', 'model', 'hangOutAuth', function ($s, $l, $fb, m, auth) {

        $s.login = function () {
            $fb.login().then(function () {
                $fb.api("/me").then(function (response) {
                    var user = new m.Individual(
                        response.first_name + ' ' + response.last_name,
                        response.email,
                        response.link)
                        .setAvatar('http://graph.facebook.com/' + response.id + '/picture?type=large'),
                        publicKey = auth.login(user);

                    auth.authenticate(publicKey).then(function () {
                        $l.path('/');
                    });
                });
            });
        };

    }]);

}).call(this, this.angular);