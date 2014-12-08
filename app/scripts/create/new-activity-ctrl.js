(function (angular, notify) {
    'use strict';

    var newActivityScope = null;

    function mainScope() {
        return newActivityScope;
    }

    angular.module('hang-out-create')
    .controller('hangOutNewActivityFooterCtrl', ['$scope', function ($s) {
        $s.main = mainScope;
    }])
    .controller('hangOutNewActivityCtrl', ['$scope', '$location', '$timeout', 'hangOutAuth', 'dataStore', 'model', 'model-mapper', 'hangOutSuggester', 'wallpaper', 'title', 'activityWizard', 'footer', 'Angularytics', function ($s, $l, $t, auth, store, m, map, suggest, wall, title, wiz, footer, analytics) {

        if (!auth.isAuthenticated()) {
            return;
        }

        title.set('Initiate Activity');
        footer.template('publish-activity-footer');

        function stampTime(value) {
            return angular.isDate(value) ? value.getTime() : Number(value);
        }

        function applySuggestedActivity(suggestion) {
            if (!suggestion) {
                return;
            }
            activity.title = suggestion.title;
            activity.imageUrls = suggestion.imageUrls || [];
            wall.setWallpapers(activity.imageUrls);
            activity.logoUrl = suggestion.logoUrl;
            $s.suggestedActivity = suggestion;
            analytics.trackEvent('Create Activity', 'Select Suggested Activity', suggestion.title);
        }

        var me = auth.currentUser(),
            activity = new m.Activity(me);

        $s.suggestPlacesFor = suggest.places;
        $s.suggestActivitiesFor = suggest.activities;

        $s.activity = activity;

        $s.place = null;
        $s.onPlaceSelection = function ($item, $model, $label) {
            /*jshint unused:false*/
            activity.place = map.place($model);
            analytics.trackEvent('Create Activity', 'Select Suggested Place', activity.place.name);
        };

        $s.suggestedActivity = null;
        $s.onActivitySelection = function ($item, $model, $label) {
            /*jshint unused:false*/
            applySuggestedActivity($model);
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
                analytics.trackEvent('Create Activity', 'Publish Activity', activity.title + ' by ' + activity.initiator.email);
                $l.path('/');
            }, function (reason) {
                notify('Cannot join this activity because: ' + reason);
            }).finally(function () {
                delete $s.publish.onWire;
            });
        };
        $s.map = {
            doRefresh: false,
            refresh: function () {
                $t(function () {
                    $s.map.doRefresh = false;
                });
                $t(function () {
                    $s.map.doRefresh = true;
                });
            },
            center: {
                latitude: 46.7720847576958,
                longitude: 23.5958862304688
            },
            marker: {
                location: {
                    latitude: 46.7720847576958,
                    longitude: 23.5958862304688
                }
            },
            onMapClick: function (maps, eventName, event) {
                $s.map.marker.location.latitude = event[0].latLng.k;
                $s.map.marker.location.longitude = event[0].latLng.B;
                $s.map.refresh();
                activity.place.location.lat = $s.map.marker.location.latitude;
                activity.place.location.lng = $s.map.marker.location.longitude;
            },
            onMarkerDrag: function (marker, eventName, model, event) {
                activity.place.location.lat = event[0].latLng.k;
                activity.place.location.lng = event[0].latLng.B;
            },
            onSearchPlaces: function (rawPlaces) {
                var selectedPlaceLocation = null;
                try {
                    /*jshint camelcase:false*/
                    selectedPlaceLocation = rawPlaces.gm_accessors_.places.Jc.searchBoxPlaces[0].geometry.location;
                } catch (err) { }
                if (!selectedPlaceLocation) {
                    return;
                }
                $s.map.marker.location.latitude = selectedPlaceLocation.k;
                $s.map.marker.location.longitude = selectedPlaceLocation.B;
                $s.map.center.latitude = selectedPlaceLocation.k;
                $s.map.center.longitude = selectedPlaceLocation.B;
                $s.map.refresh();
                activity.place.location.lat = selectedPlaceLocation.k;
                activity.place.location.lng = selectedPlaceLocation.B;
            }
        };
        $s.canRenderMap = false;

        applySuggestedActivity(wiz.activity());
        wiz.reset();
        newActivityScope = $s;
    }]);

}).call(this, this.angular, this.alert);