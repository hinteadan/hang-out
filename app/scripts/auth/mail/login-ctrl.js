(function (angular, notify) {
    'use strict';

    angular.module('hang-out-auth-mail')
    .controller('hangOutMailLogin', ['$scope', '$location', 'hangOutMailAuth', 'model', function ($s, $l, auth, m) {

        var me = {
            email: null,
            name: null
        };

        $s.me = me;
        $s.login = function () {
            auth
            .login(new m.Individual(me.name, me.email))
            .then(function (isSuccess) {
                if (!isSuccess) {
                    notify('Login Failed!');
                }
                $s.isLoginSuccessfull = true;
            });
        };
    }]);

}).call(this, this.angular, this.alert);