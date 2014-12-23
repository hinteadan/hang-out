(function (angular, notify, localStore, moment, addthisevent) {
    'use strict';

    function parseToMoment(input) {
        var mDate = moment(input);
        if (!mDate.isValid()) {
            mDate = moment(input, moment.ISO_8601);
        }
        return mDate;
    }

    angular.module('hang-out-browse')
    .controller('hangOutActivityDetailsCtrl', ['$scope', '$window', '$routeParams', '$timeout', 'hangOutAuth', 'hangOutNotifier', 'model', 'model-mapper', 'dataStore', 'wallpaper', 'title', 'Angularytics', 'storeKeyForRedirect', 'hangOutRealtime', function ($s, $w, $p, $t, auth, note, m, map, store, wall, title, analytics, redirectStoreKey, realtime) {

        if (!auth.isAuthenticated() && $p.id) {
            localStore[redirectStoreKey] = $p.id;
            return;
        }

        if (!auth.isAuthenticated() || !$p.id) {
            return;
        }

        var me = auth.currentUser();

        realtime.bind().then(function (api) {
            api.setOnChangeHandler(function (e) {
                refreshActivity(mapActivityEntry(e));
            });
        });

        function mapActivityEntry(activityEntity) {
            return {
                id: activityEntity.Id,
                token: activityEntity.CheckTag,
                activity: map.activity(activityEntity.Data)
            };
        }

        function refreshActivity(activityEntry) {
            title.set(activityEntry.activity.friendlyTitle());
            $s.disqusThreadId = activityEntry.id;
            $s.flag.isLoadingActivity = false;
            $s.activityEntry = activityEntry;
            $s.activity = activityEntry.activity;
            wall.setWallpapers(activityEntry.activity.imageUrls);
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
            $s.canRenderMap = false;
            $t(function () {
                $s.canRenderMap = true;
                addthisevent.refresh();
            });
        }

        function refresh() {
            $s.flag.isLoadingActivity = true;
            store.activity($p.id).then(refreshActivity);
        }

        $s.me = me;
        $s.flag = {
            isLoadingActivity: false
        };

        $s.activityEntry = null;
        $s.activity = null;
        $s.asCalendarDate = function (timestamp) {
            return parseToMoment(timestamp).format('DD/MM/YYYY HH:mm:ss');
        };

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
                .then(function () {
                    note.join(me, $s.activityEntry.activity, $s.activityEntry.id);
                    analytics.trackEvent('Activity Details', 'Member Joined', me.email + ' joined ' + $s.activityEntry.id + ': ' + $s.activityEntry.activity.title);
                    if ($s.activityEntry.activity.isParticipantConfirmed(me)) {
                        note.confirmation(me, $s.activityEntry.activity, $s.activityEntry.id);
                        analytics.trackEvent('Activity Details', 'Member Confirmed', me.email + ' confirmed for ' + $s.activityEntry.id + ': ' + $s.activityEntry.activity.title);
                    }
                    refresh();
                }, function (reason) {
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
            var oldStatus = $s.activityEntry.activity.friendlyStatus();
            store
                .wrapActivity($s.activityEntry.id, $s.activityEntry.token, $s.activityEntry.activity)
                .then(function () {
                    note.status($s.activityEntry.activity, oldStatus, $s.activityEntry.id);
                    analytics.trackEvent('Activity Details', 'Activity Wrapped Up', $s.activityEntry.id + ': ' + $s.activityEntry.activity.title);
                    refresh();
                }, function (reason) {
                    notify('Cannot wrap activity because: ' + reason);
                });

        };

        $s.cancel = function (cancellationReason) {
            var oldStatus = $s.activityEntry.activity.friendlyStatus();
            store
                .cancelActivity($s.activityEntry.id, $s.activityEntry.token, $s.activityEntry.activity, cancellationReason)
                .then(function () {
                    note.status($s.activityEntry.activity, oldStatus, $s.activityEntry.id);
                    analytics.trackEvent('Activity Details', 'Activity Cancelled', $s.activityEntry.id + ': ' + $s.activityEntry.activity.title);
                    refresh();
                }, function (reason) {
                    notify('Cannot cancel activity because: ' + reason);
                });
        };

        $s.bailOut = function (bailOutReason) {
            store
                .bailOut($s.activityEntry.id, $s.activityEntry.token, $s.activityEntry.activity, me, bailOutReason)
                .then(function () {
                    note.bailOut(me, $s.activityEntry.activity, $s.activityEntry.id);
                    analytics.trackEvent('Activity Details', 'Member Bailed Out', me.email + ' out of ' + $s.activityEntry.id + ': ' + $s.activityEntry.activity.title);
                    refresh();
                }, function (reason) {
                    notify('Cannot bail out of this activity because: ' + reason);
                });
        };

        $s.confirmParticipant = function (participant) {
            store
                .confirmParticipant($s.activityEntry.id, $s.activityEntry.token, $s.activityEntry.activity, participant)
                .then(function () {
                    note.confirmation(participant, $s.activityEntry.activity, $s.activityEntry.id);
                    analytics.trackEvent('Activity Details', 'Member Confirmed', participant.email + ' confirmed for ' + $s.activityEntry.id + ': ' + $s.activityEntry.activity.title);
                    refresh();
                }, function (reason) {
                    notify('Cannot confirm because: ' + reason);
                });
        };

        $s.changeDescription = function (newDescription) {
            store.
                changeDescription($s.activityEntry.id, $s.activityEntry.token, $s.activityEntry.activity, newDescription)
                .then(function () {
                    analytics.trackEvent('Activity Details', 'Description Changed', $s.activityEntry.id + ': ' + $s.activityEntry.activity.title);
                    refresh();
                }, function (reason) {
                    notify('Cannot change description because: ' + reason);
                });
        };
        $s.profileFor = function (user) {
            if(!user){
                return;
            }
            $w.open(user.profile());
        };

        refresh();
    }]);

}).call(this, this.angular, this.alert, this.localStorage, this.moment, this.addthisevent);