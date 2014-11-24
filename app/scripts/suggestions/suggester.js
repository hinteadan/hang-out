(function (angular, _) {
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
            _allActivities = _(allActivities),
            allPlaces = _.map(placesDto, model.Place.new),
            _allPlaces = _(allPlaces),
            _categories = null,
            categories = null;

        function suggestActivitesFor(searchKey) {
            var keysToSearch = splitSearchKey(searchKey),
                result = _allActivities.filter(function (a) {
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
                .sortBy(['matchWeight', 'title'])
                .value();
            return result;
        }

        function suggestPlacesFor(searchKey, activity) {
            var placesToSearch = !angular.isObject(activity) ? _allPlaces : _allPlaces.filter(function (p) {
                    return _.any(p.tags, function (pt) {
                        return _.contains(activity.tags, pt);
                    });
                }),
                keysToSearch = splitSearchKey(searchKey),
                result = placesToSearch.filter(function (p) {
                    var match = new MatchResult();
                    _.each(keysToSearch, function (key) {
                        match = match.or(collectionMatch(p.tags, function (t) { return isStringMatch(t, key); }))
                            .or(collectionMatch([p.name], function (t) { return isStringMatch(t, key); }));
                    });
                    if (!match.isMatch) {
                        return false;
                    }
                    p.matchWeight = match.weight;
                    return true;
                })
                .sortBy(['matchWeight', 'name'])
                .value();

            return result;
        }

        function fetchWallpapersFromActivities() {
            return _allActivities
                .pluck('imageUrl')
                .uniq()
                .shuffle()
                .value();
        }

        function fetchAllCategories() {
            if (!_categories) {
                _categories = _allActivities
                .map(function (a) { return a.toCategories(); })
                .flatten(true)
                .unique(function (cat) {
                    return cat.name;
                })
                .sortBy('name');
                categories = _categories.value();
            }

            return categories;
        }

        this.activities = suggestActivitesFor;
        this.wallpapers = fetchWallpapersFromActivities;
        this.places = suggestPlacesFor;
        this.categories = fetchAllCategories;
    }

    angular.module('hang-out-suggestions')
    .service('hangOutSuggester', ['suggestionsModel', 'hangOutActivities', 'hangOutPlaces', Suggester]);

}).call(this, this.angular, this._);
