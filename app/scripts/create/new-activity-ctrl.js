(function (angular) {
    'use strict';

    angular.module('hang-out-create')
    .controller('hangOutNewActivityCtrl', ['hangOutAuth', 'model', function (auth, m) {

        if (!auth.isAuthenticated) {
            return;
        }

        var me = new m.Individual(auth.currentUser.name, auth.currentUser.email);

    }]);

}).call(this, this.angular);