(function (angular, notify) {
    'use strict';

    angular.module('hang-out-browse')
    .controller('hangOutBrowseCtrl', ['$scope', '$timeout', 'hangOutAuth', 'dataStore', 'model', 'hangOutSuggester', 'wallpaper', function ($s, $t, auth, store, m, suggest, wall) {

        if (!auth.isAuthenticated) {
            return;
        }

        var me = new m.Individual(auth.currentUser.name, auth.currentUser.email);

        //wall.setWallpapers(suggest.wallpapers());

        function refresh() {
            $s.flag.isLoadingJoinableActivities = true;
            $s.flag.isLoadingMyActivities = true;
            $s.flag.isLoadingJoinedActivities = true;

            store.activitiesToJoin(auth.currentUser.email).then(function (activities) {
                $s.flag.isLoadingJoinableActivities = false;
                $s.activities = activities;
            });

            store.activitiesFor(auth.currentUser).then(function (activities) {
                $s.flag.isLoadingMyActivities = false;
                $s.myActivities = activities;
            });

            store.activitiesAppliedToFor(auth.currentUser).then(function (activities) {
                $s.flag.isLoadingJoinedActivities = false;
                $s.joinedActivities = activities;
            });
        }

        $s.flag = {
            isLoadingJoinableActivities: false,
            isLoadingMyActivities: false,
            isLoadingJoinedActivities: false
        };
        $s.activities = [];
        $s.myActivities = [];
        $s.joinedActivities = [];

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