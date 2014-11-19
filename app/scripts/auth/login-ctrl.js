(function (angular, notify) {
    'use strict';

    angular.module('hang-out-auth')
    .controller('hangOutLogin', ['$scope', '$location', 'hangOutAuth', 'model', 'title', function ($s, $l, auth, m, title) {

        var me = {
            email: null,
            name: null
        };

        title.set('Login');

        $s.me = me;
        $s.login = function () {
            auth
            .authenticate(new m.Individual(me.name, me.email))
            .then(function (isSuccess) {
                if (!isSuccess) {
                    notify('Login Failed!');
                }
                $l.path('/');
            });
        };
    }]);

}).call(this, this.angular, this.alert);