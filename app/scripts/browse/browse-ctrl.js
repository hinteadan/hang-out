(function (angular) {
    'use strict';

    angular.module('hang-out-browse').controller('hangOutBrowseCtrl', ['$scope', 'hangOutAuth', 'dataStore', function ($s, auth, store) {

        function refresh() {
            store.activitiesToJoin(auth.currentUser.email).then(function (activities) {
                $s.flag.isLoadingActivities = false;
                $s.activities = activities;
            });
        }
        refresh();

        $s.flag = {
            isLoadingActivities: true
        };
        $s.activities = [];

    }]);

}).call(this, this.angular);