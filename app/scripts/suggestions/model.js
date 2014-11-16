(function (angular) {
    'use strict';

    function Place(dto) {
        this.name = dto.name;
        this.address = dto.address;
        this.details = dto.details;
        this.websiteUrl = dto.websiteUrl;
        this.logoUrl = dto.logoUrl;
        this.location = !dto.location ? null : {
            lat: dto.location.lat,
            lng: dto.location.lng
        };
        this.tags = dto.tags || [];
    }
    Place.new = function (dto) { return new Place(dto); };

    function Activity(dto) {
        this.title = dto.title;
        this.category = dto.category;
        this.keywords = dto.keywords || [];
        this.description = dto.description;
        this.tags = dto.tags || [];
        this.imageUrl = dto.imageUrl;
        this.logoUrl = dto.logoUrl;
    }
    Activity.new = function (dto) { return new Activity(dto); };

    angular.module('hang-out-suggestions')
    .value('suggestionsModel', {
        Place: Place,
        Activity: Activity
    });

}).call(this, this.angular);