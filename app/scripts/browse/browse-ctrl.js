(function (angular, notify) {
    'use strict';

    angular.module('hang-out-browse')
    .controller('hangOutBrowseCtrl', ['$scope', '$timeout', 'hangOutAuth', 'dataStore', 'model', function ($s, $t, auth, store, m) {

        if (!auth.isAuthenticated) {
            return;
        }

        var me = new m.Individual(auth.currentUser.name, auth.currentUser.email);

        function refresh() {
            $s.flag.isLoadingJoinableActivities = true;

            store.activitiesToJoin(auth.currentUser.email).then(function (activities) {
                $s.flag.isLoadingJoinableActivities = false;
                $s.activities = activities;
            });


        }

        $s.flag = {
            isLoadingJoinableActivities: false
        };
        $s.activities = [];

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
                    activityEntry.joined = true;
                    refresh();
                }, function (reason) {
                    notify('Cannot join this activity because: ' + reason);
                });
        };

        refresh();
    }]);

}).call(this, this.angular, this.alert);