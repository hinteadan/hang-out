(function (angular) {
    'use strict';

    angular.module('hang-out-browse')
    .controller('hangOutBrowseOptionsCtrl', ['hangOutAuth', 'title', function (auth, title) {

        title.set('What do you want to do?');

        if (!auth.isAuthenticated()) {
            return;
        }

    }]);

}).call(this, this.angular);