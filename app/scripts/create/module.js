(function (angular) {
    'use strict';

    angular.module('hang-out-create', ['hang-out', 'hang-out-auth', 'hang-out-suggestions'])
    .config(['$routeProvider', function ($route) {
        $route
            .when('/new/category', { templateUrl: 'scripts/create/select-category.tmpl.html', controller: 'selectCategoryCtrl' })
            .when('/new', { templateUrl: 'scripts/create/new-activity.tmpl.html', controller: 'hangOutNewActivityCtrl' });
    }]);

}).call(this, this.angular);