(function (angular) {
    'use strict';

    angular.module('hang-out-auth-facebook')
    .controller('facebookLogin', ['$scope', '$facebook', 'model', 'hangOutAuth', function ($s, $fb, m, auth) {

        $s.test = function () {
            $fb.login().then(function () {
                $fb.api("/me").then(function (response) {
                    var user = new m.Individual(
                        response.first_name + ' ' + response.last_name,
                        response.email,
                        response.link)
                        .setAvatar('http://graph.facebook.com/' + response.id + '/picture?type=large');

                });
            });
        };

    }]);

}).call(this, this.angular);