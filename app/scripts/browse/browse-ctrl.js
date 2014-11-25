(function (angular) {
    'use strict';

    angular.module('hang-out-browse')
    .controller('hangOutBrowseCtrl', ['$scope', '$location', '$routeParams', '$timeout', 'hangOutAuth', 'hangOutNotifier', 'dataStore', 'model', 'title', function ($s, $l, $p, $t, auth, note, store, m, title) {

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

        //wall.setWallpapers(suggest.wallpapers());

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
                $s.activities = activities;
            });
        }

        $s.title = generateTitle;
        $s.type = desiredType;
        $s.flag = {
            isLoadingActivities: false,
        };
        $s.activities = [];

        $s.openActivity = function (id) {
            $l.path('/activity/' + id);
        };

        $t(refresh);
    }]);

}).call(this, this.angular);