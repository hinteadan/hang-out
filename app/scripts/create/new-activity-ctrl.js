(function (angular, notify) {
    'use strict';

    angular.module('hang-out-create')
    .controller('hangOutNewActivityCtrl', ['$scope', '$location', '$timeout', 'hangOutAuth', 'dataStore', 'model', 'model-mapper', 'hangOutSuggester', function ($s, $l, $t, auth, store, m, map, suggest) {

        if (!auth.isAuthenticated) {
            return;
        }

        function stampTime(value) {
            return angular.isDate(value) ? value.getTime() : Number(value);
        }

        var me = new m.Individual(auth.currentUser.name, auth.currentUser.email),
            activity = new m.Activity(me);

        $s.suggestPlacesFor = suggest.places;
        $s.suggestActivitiesFor = suggest.activities;

        $s.activity = activity;

        $s.place = null;
        $s.onPlaceSelection = function ($item, $model, $label) {
            /*jshint unused:false*/
            activity.place = map.place($model);
        };

        $s.suggestedActivity = null;
        $s.onActivitySelection = function ($item, $model, $label) {
            /*jshint unused:false*/
            activity.title = $model.title;
            activity.imageUrl = $model.imageUrl;
            activity.logoUrl = $model.logoUrl;
        };
        $s.isValid = function () {
            return activity.title && activity.startsOn && activity.place.name;
        };
        $s.activityDate = {
            from: null,
            setFrom: function () {
                $t(function () {
                    activity.startsOn = $s.activityDate.from ? stampTime($s.activityDate.from) : null;
                });
            },
            to: null,
            setTo: function () {
                $t(function () {
                    activity.endsOn = $s.activityDate.to ? stampTime($s.activityDate.to) : null;
                });
            }
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

            $s.publish.onWire = true;

            store.publishNewActivity(activity).then(function () {
                $s.publish.ed = true;
                $l.path('/');
            }, function (reason) {
                notify('Cannot join this activity because: ' + reason);
            }).finally(function () {
                delete $s.publish.onWire;
            });
        };

    }]);

}).call(this, this.angular, this.alert);