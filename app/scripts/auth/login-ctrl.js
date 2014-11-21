(function (angular) {
    'use strict';

    angular.module('hang-out-auth')
    .controller('hangOutLogin', ['title', function (title) {
        title.set('Login');
    }]);

}).call(this, this.angular);