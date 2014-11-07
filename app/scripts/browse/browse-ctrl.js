(function (angular) {
    'use strict';

    angular.module('hang-out-browse').controller('hangOutBrowseCtrl', ['$scope', 'dataStore', function ($s, store) {

        function refresh() {
            store.activitiesToJoin().then(function (activities) {
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