(function (angular) {
    'use strict';

    angular.module('hang-out-auth-mail')
    .service('hangOutMailAuth', ['hangOutAuth', 'hangOutNotifier', function (auth, notify) {
        
        function generateAuthenticationLink(key) {
            return 'http://localhost:9899/#!/authenticate/' + key;
            //return 'http://h-hang-out.azurewebsites.net/#!/authenticate/' + key;
        }

        this.login = function (user) {
            return auth.login(user).then(function (publicKey) {
                return notify.authentication(user, generateAuthenticationLink(publicKey))
            });
        };

    }]);

}).call(this, this.angular);