(function (angular) {
    'use strict';

    angular.module('hang-out-browse')
    .controller('hangOutActivityDetailsCtrl', ['$scope', '$routeParams', 'hangOutAuth', 'dataStore', function ($s, $p, auth, store) {

        if (!auth.isAuthenticated || !$p.id) {
            return;
        }

        function refresh() {
            $s.flag.isLoadingActivity = true;
            store.activity($p.id).then(function (activityEntry) {
                $s.flag.isLoadingActivity = false;
                $s.activityEntry = activityEntry;
                $s.activity = activityEntry.activity;
                $s.map = {
                    center: {
                        latitude: $s.activity.place.location.lat,
                        longitude: $s.activity.place.location.lng
                    },
                    marker: {
                        location: {
                            latitude: $s.activity.place.location.lat,
                            longitude: $s.activity.place.location.lng
                        }
                    }
                };
            });
        }

        $s.flag = {
            isLoadingActivity: false
        };

        $s.activityEntry = null;
        $s.activity = null;

        refresh();
    }]);

}).call(this, this.angular);