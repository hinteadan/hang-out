(function (angular) {
    'use strict';

    angular.module('hang-out-create', ['hang-out', 'hang-out-auth', 'hang-out-data'])
    .config(['$routeProvider', function ($route) {
        $route
            .when('/new', { templateUrl: 'scripts/create/new-activity.tmpl.html', controller: 'hangOutNewActivityCtrl' });
    }]);

}).call(this, this.angular);