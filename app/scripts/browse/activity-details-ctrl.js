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

        $s.join = function () {

            var p = null;

            if (!$s.activityEntry.joining) {
                $s.activityEntry.joining = true;
                p = $t(function () {
                    delete $s.activityEntry.joining;
                }, 4000);
                return;
            }

            $t.cancel(p);
            delete $s.activityEntry.joining;

            store
                .joinActivity($s.activityEntry.id, $s.activityEntry.token, $s.activityEntry.activity, me)
                .then(refresh, function (reason) {
                    notify('Cannot join this activity because: ' + reason);
                });
        };

        $s.wrapIt = function () {
            var p = null;

            if (!$s.activityEntry.wrapping) {
                $s.activityEntry.wrapping = true;
                p = $t(function () {
                    delete $s.activityEntry.wrapping;
                }, 4000);
                return;
            }

            $t.cancel(p);
            delete $s.activityEntry.wrapping;
            store
                .wrapActivity($s.activityEntry.id, $s.activityEntry.token, $s.activityEntry.activity)
                .then(refresh, function (reason) {
                    notify('Cannot wrap activity because: ' + reason);
                });

        };

        $s.cancel = function (cancellationReason) {
            store
                .cancelActivity($s.activityEntry.id, $s.activityEntry.token, $s.activityEntry.activity, cancellationReason)
                .then(refresh, function (reason) {
                    notify('Cannot cancel activity because: ' + reason);
                });
        };

        $s.bailOut = function (bailOutReason) {
            store
                .bailOut($s.activityEntry.id, $s.activityEntry.token, $s.activityEntry.activity, me, bailOutReason)
                .then(refresh, function (reason) {
                    notify('Cannot bail out of this activity because: ' + reason);
                });
        };

        $s.confirmParticipant = function (participant) {
            store
                .confirmParticipant($s.activityEntry.id, $s.activityEntry.token, $s.activityEntry.activity, participant)
                .then(refresh, function (reason) {
                    notify('Cannot confirm because: ' + reason);
                });
        };

        refresh();
    }]);

}).call(this, this.angular, this.alert);