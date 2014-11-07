(function (angular, notify) {
    'use strict';

    angular.module('hang-out-auth')
    .controller('hangOutLogin', ['$scope', '$location', 'hangOutAuthUser', 'hangOutAuth', function ($s, $l, User, auth) {

        var me = {
            email: null,
            name: null
        };

        $s.me = me;
        $s.login = function () {
            auth
            .authenticate(new User(me.email, me.name))
            .then(function (isSuccess) {
                if (!isSuccess) {
                    notify('Login Failed!');
                }
                $l.path('/');
            });
        };
    }]);

}).call(this, this.angular, this.alert);