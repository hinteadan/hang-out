(function (angular) {
    'use strict';

    angular.module('hang-out-app', ['ngRoute', 'hang-out', 'hang-out-auth'])
    .config(['$routeProvider', function ($route) {
        $route
            .when('/', { templateUrl: 'scripts/use-cases.tmpl.html', controller: 'use-cases' });
    }]);

}).call(this, this.angular);