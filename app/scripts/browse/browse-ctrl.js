(function (angular, _, moment) {
    'use strict';

    function parseToMoment(input) {
        var mDate = moment(input);
        if (!mDate.isValid()) {
            mDate = moment(input, moment.ISO_8601);
        }
        return mDate;
    }

    angular.module('hang-out-browse')
    .controller('hangOutBrowseCtrl', ['$scope', '$location', '$routeParams', '$timeout', 'hangOutAuth', 'hangOutNotifier', 'dataStore', 'model', 'title', 'hangOutRealtime', function ($s, $l, $p, $t, auth, note, store, m, title, realtime) {

        if (!auth.isAuthenticated()) {
            return;
        }

        var type = {
            mine: 'mine',
            joined: 'joined',
            open: 'open'
        },
            desiredType = !$p.type ? type.open : $p.type === type.mine ? type.mine : $p.type === type.joined ? type.joined : type.open,
            me = auth.currentUser();

        realtime.bind().then(function (api) {
            api.setOnCreateHandler(refresh);
        });

        function generateTitle() {
            switch (desiredType) {
                case type.mine: return 'My Activities';
                case type.joined: return 'Joined events';
                case type.open: return 'Events you may join';
            }
        }

        title.set(generateTitle());

        function fetchDesiredActivites() {
            switch (desiredType) {
                case type.mine: return store.activitiesFor(me);
                case type.joined: return store.activitiesAppliedToFor(me);
                case type.open: return store.activitiesToJoin(me);
            }
        }

        function refresh() {
            $s.flag.isLoadingActivities = true;

            fetchDesiredActivites().then(function (activities) {
                $s.flag.isLoadingActivities = false;
                $s.activitiesPerDay = _(activities)
                    .groupBy(function (activityEntry) {
                        return parseToMoment(activityEntry.activity.startsOn).format('ddd, MMM DD, YYYY');
                    })
                    .map(function (activities, dateLabel) {
                        return {
                            startsOn: activities[0].activity.startsOn,
                            label: dateLabel,
                            entries: activities
                        };
                    })
                    .value();
            });
        }

        $s.title = generateTitle;
        $s.type = desiredType;
        $s.flag = {
            isLoadingActivities: false,
        };
        $s.activitiesPerDay = {};

        $s.openActivity = function (id) {
            $l.path('/activity/' + id);
        };

        $t(refresh);
    }]);

}).call(this, this.angular, this._, this.moment);