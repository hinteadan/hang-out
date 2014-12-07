(function (angular) {
    'use strict';

    angular.module('hang-out-auth-mail')
    .service('hangOutMailAuth', ['$location', 'hangOutAuth', 'hangOutNotifier', 'devAuthEmail', 'devAuthName', function ($l, auth, notify, devEmail, devName) {

        function generateAuthenticationLink(key) {
            return 'http://' + $l.host() + ($l.port() !== 80 ? ':' + $l.port() : '') + '/#!/authenticate/' + key;
        }

        function isDevAuth(user) {
            return user.email === devEmail && user.name === devName;
        }

        this.login = function (user) {
            return auth.login(user).then(function (publicKey) {
                if (isDevAuth(user)) {
                    return auth.authenticate(publicKey).then(function () {
                        $l.path('/');
                        return true;
                    });
                }
                return notify.authentication(user, generateAuthenticationLink(publicKey))
            });
        };

    }]);

}).call(this, this.angular);