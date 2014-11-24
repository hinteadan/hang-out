(function (angular, _) {
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

    function Category(name, logo, images) {
        this.name = name;
        this.logo = logo;
        this.images = images || [];
    }

    function Activity(dto) {
        var cats = null,
            self = this;
        this.title = dto.title;
        this.categories = dto.categories || [];
        this.keywords = dto.keywords || [];
        this.description = dto.description;
        this.tags = dto.tags || [];
        this.imageUrls = dto.imageUrls || [];
        this.logoUrl = dto.logoUrl;
        this.toCategories = function () {
            if(cats){
                return cats;
            }

            cats = _.map(this.categories, function(catName){
                return new Category(catName, self.logoUrl, self.imageUrls);
            });

            return cats;
        };
    }
    Activity.new = function (dto) { return new Activity(dto); };

    angular.module('hang-out-suggestions')
    .value('suggestionsModel', {
        Place: Place,
        Activity: Activity,
        Category: Category
    });

}).call(this, this.angular, this._);