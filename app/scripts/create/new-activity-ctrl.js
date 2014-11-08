(function (angular, notify) {
    'use strict';

    angular.module('hang-out-create')
    .controller('hangOutNewActivityCtrl', ['$scope', '$location', '$timeout', 'hangOutAuth', 'dataStore', 'model', function ($s, $l, $t, auth, store, m) {

        if (!auth.isAuthenticated) {
            return;
        }

        function stampTime(value) {
            return angular.isDate(value) ? value.getTime() : Number(value);
        }

        var me = new m.Individual(auth.currentUser.name, auth.currentUser.email),
            activity = new m.Activity(me);

        $s.activity = activity;
        $s.isValid = function () {
            return activity.title && activity.startsOn;
        };

        $s.publish = function () {

            var p = null;

            if (!$s.publish.ing) {
                $s.publish.ing = true;
                p = $t(function () {
                    delete $s.publish.ing;
                }, 4000);
                return;
            }

            $t.cancel(p);
            delete $s.publish.ing;

            activity.startsOn = activity.startsOn ? stampTime($s.activity.startsOn) : null;
            activity.endsOn = activity.endsOn ? stampTime($s.activity.endsOn) : null;
            store.publishNewActivity(activity).then(function () {
                $s.publish.ed = true;
                $l.path('/');
            }, function (reason) {
                notify('Cannot join this activity because: ' + reason);
            });
        };

    }]);

}).call(this, this.angular, this.alert);