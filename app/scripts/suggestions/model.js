(function (angular) {
    'use strict';

    function Place(dto) {
        this.name = dto.name;
        this.address = dto.address;
        this.details = dto.details;
        this.websiteUrl = dto.websiteUrl;
        this.logoUrl = dto.logoUrl;
        this.location = {
            lat: dto.location.lat,
            lng: dto.location.lng
        };
        this.tags = dto.tags || [];
    }

    function Activity(dto) {
        this.title = dto.title;
        this.category = dto.category;
        this.keywords = dto.keywords || [];
        this.description = dto.description;
        this.tags = dto.tags || [];
        this.imageUrl = dto.imageUrl;
        this.logoUrl = dto.logoUrl;
    }

    function Suggester(activitiesDto, placesDto) {

        function suggestActivitesFor(searchKey) {
            return activitiesDto;
        }

        function suggestPlacesFor(searchKey) {
            return placesDto;
        }

        this.activities = suggestActivitesFor;
        this.places = suggestPlacesFor;
    }

    angular.module('hang-out-suggestions')
    .value('suggestionsModel', {
        Place: Place,
        Activity: Activity
    })
    .service('hangOutSuggester', ['hangOutActivities', 'hangOutPlaces', Suggester]);

}).call(this, this.angular);