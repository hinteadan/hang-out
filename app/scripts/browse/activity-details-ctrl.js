(function (angular, notify) {
    'use strict';

    angular.module('hang-out-browse')
    .controller('hangOutActivityDetailsCtrl', ['$scope', '$routeParams', '$timeout', 'hangOutAuth', 'model', 'dataStore', function ($s, $p, $t, auth, m, store) {

        if (!auth.isAuthenticated || !$p.id) {
            return;
        }

        var me = new m.Individual(auth.currentUser.name, auth.currentUser.email);

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

        $s.me = me;
        $s.flag = {
            isLoadingActivity: false
        };

        $s.activityEntry = null;
        $s.activity = null;

        $s.join = function (activityEntry) {

            var p = null;

            if (!activityEntry.joining) {
                activityEntry.joining = true;
                p = $t(function () {
                    delete activityEntry.joining;
                }, 4000);
                return;
            }

            $t.cancel(p);
            delete activityEntry.joining;

            store
                .joinActivity(activityEntry.id, activityEntry.token, activityEntry.activity, me)
                .then(function () {
                    refresh();
                }, function (reason) {
                    notify('Cannot join this activity because: ' + reason);
                });
        };

        refresh();
    }]);

}).call(this, this.angular, this.alert);