(function (angular, notify) {
    'use strict';

    angular.module('hang-out-browse')
    .controller('hangOutBrowseCtrl', ['$scope', '$location', '$timeout', 'hangOutAuth', 'hangOutNotifier', 'dataStore', 'model', 'title', function ($s, $l, $t, auth, note, store, m, title) {

        if (!auth.isAuthenticated()) {
            return;
        }

        var me = auth.currentUser();

        title.set('Browse Activities');

        //wall.setWallpapers(suggest.wallpapers());

        function refresh() {
            $s.flag.isLoadingJoinableActivities = true;
            $s.flag.isLoadingMyActivities = true;
            $s.flag.isLoadingJoinedActivities = true;

            store.activitiesToJoin(me.email).then(function (activities) {
                $s.flag.isLoadingJoinableActivities = false;
                $s.activities = activities;
            });

            store.activitiesFor(me).then(function (activities) {
                $s.flag.isLoadingMyActivities = false;
                $s.myActivities = activities;
            });

            store.activitiesAppliedToFor(me).then(function (activities) {
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

        $s.openActivity = function (id) {
            $l.path('/activity/' + id);
        };

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
                    note.join(me, activityEntry.activity, activityEntry.id);
                    refresh();
                }, function (reason) {
                    notify('Cannot join this activity because: ' + reason);
                });
        };

        $t(refresh);
    }]);

}).call(this, this.angular, this.alert);