(function (angular) {
    'use strict';

    angular.module('hang-out-auth')
    .controller('hangOutAuth', ['$scope', '$routeParams', '$location', 'hangOutAuth', function ($s, $p, $l, auth) {

        var publicKey = $p.key;

        if (!publicKey) {
            $l.path('/you');
            return;
        }

        auth.authenticate(publicKey).then(function () {
            $l.path('/');
        },
        function () {
            $l.path('/you');
        });

    }]);

}).call(this, this.angular);