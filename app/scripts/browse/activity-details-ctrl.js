(function (angular) {
    'use strict';

    angular.module('hang-out-browse')
    .controller('hangOutActivityDetailsCtrl', ['hangOutAuth', function (auth) {

        if (!auth.isAuthenticated) {
            return;
        }

    }]);

}).call(this, this.angular);