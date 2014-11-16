﻿(function (angular, _) {
    'use strict';

    function MatchResult(){
        this.isMatch = false;
        this.weight = 0;
        this.or = function (otherMatch) {
            var merge = new MatchResult();
            merge.isMatch = this.isMatch || otherMatch.isMatch;
            merge.weight = merge.isMatch ? this.weight + otherMatch.weight : 0;
            return merge;
        };
    }

    function collectionMatch(collection, isMatch) {
        var result = new MatchResult();
        _.each(collection, function (item) {
            if (!isMatch.call(item, item)) {
                return;
            }
            result.isMatch = true;
            result.weight--;
        });
        return result;
    }

    function splitSearchKey(key) {
        return key.split(/\s|,/);
    }

    function isStringMatch(subject, key) {
        return subject.toLowerCase().indexOf(key.toLowerCase()) >= 0;
    }

    function Suggester(model, activitiesDto, placesDto) {

        var allActivities = _.map(activitiesDto, model.Activity.new),
            allPlaces = _.map(placesDto, model.Place.new);

        function suggestActivitesFor(searchKey) {
            var keysToSearch = splitSearchKey(searchKey),
                result = _(allActivities).filter(function (a) {
                    var match = new MatchResult();
                    _.each(keysToSearch, function (key) {
                        match = match.or(collectionMatch(a.keywords, function (k) { return isStringMatch(k, key); }))
                            .or(collectionMatch(a.tags, function (t) { return isStringMatch(t, key); }))
                            .or(collectionMatch([a.title], function (t) { return isStringMatch(t, key); }));
                    });
                    if (!match.isMatch) {
                        return false;
                    }
                    a.matchWeight = match.weight;
                    return true;
                })
                .sortBy('matchWeight')
                .value();
            return result;
        }

        function suggestPlacesFor(searchKey) {
            return placesDto;
        }

        this.activities = suggestActivitesFor;
        this.places = suggestPlacesFor;
    }

    angular.module('hang-out-suggestions')
    .service('hangOutSuggester', ['suggestionsModel', 'hangOutActivities', 'hangOutPlaces', Suggester]);

}).call(this, this.angular, this._);