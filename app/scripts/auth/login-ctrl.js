(function (angular) {
    'use strict';

    angular.module('hang-out-auth')
    .controller('hangOutLogin', ['$location', 'title', 'hangOutAuth', function ($l, title, auth) {

        if (auth.isAuthenticated()) {
            $l.path('/browse');
            return;
        }

        title.set('Login');
    }]);

}).call(this, this.angular);