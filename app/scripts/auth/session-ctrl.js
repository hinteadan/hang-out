(function (angular, notify) {
    'use strict';

    angular.module('hang-out-auth')
    .controller('hangOutSession', ['$scope', '$location', 'hangOutAuth', function ($s, $l, auth) {
        $s.isAuthenticated = auth.isAuthenticated;
        $s.logout = function () {
            auth
            .signOut()
            .then(function (isSuccess) {
                if (!isSuccess) {
                    notify('Failed to logout user!');
                }
                $l.path('/');
            });
        };
    }]);

}).call(this, this.angular, this.alert);