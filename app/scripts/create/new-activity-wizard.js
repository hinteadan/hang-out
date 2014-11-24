(function (angular, undefined) {
    'use strict';

    angular.module('hang-out-create')
    .service('activityWizard', [function () {
        
        var category = null,
            activity = null;

        this.category = function (categoryToStore) {
            if (categoryToStore === undefined) {
                return category;
            }
            category = categoryToStore;
        };

        this.activity = function (activityToStore) {
            if (activityToStore === undefined) {
                return activity;
            }
            activity = activityToStore;
        };

    }]);

}).call(this, this.angular);