(function (angular) {
    'use strict';

    angular.module('hang-out-browse')
    .controller('hangOutActivityDetailsCtrl', ['$scope', '$routeParams', 'hangOutAuth', 'dataStore', function ($s, $p, auth, store) {

        if (!auth.isAuthenticated || !$p.id) {
            return;
        }

        store.activity($p.id).then(function (activityEntry) {
            $s.activityEntry = activityEntry;
            $s.activity = activityEntry.activity;
            $s.map = {
                center: {
                    latitude: $s.activity.place.location.lat,
                    longitude: $s.activity.place.location.lng,
                }
            };
        });

        $s.activityEntry = null;
        $s.activity = null;

    }]);

}).call(this, this.angular);