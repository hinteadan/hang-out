(function (angular) {
    'use strict';

    angular.module('hang-out-auth-mail')
    .service('hangOutMailAuth', ['hangOutAuth', 'hangOutNotifier', function (auth, notify) {
        
        function generateAuthenticationLink(key) {
            return 'http://h-hang-out.azurewebsites.net/#!/authenticate/' + key;
        }

        this.login = function (user) {
            var key = auth.login(user);
            return notify.authentication(user, generateAuthenticationLink(key));
        };

    }]);

}).call(this, this.angular);