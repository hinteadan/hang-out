(function (angular) {
    'use strict';

    angular.module('hang-out-browse', ['hang-out', 'hang-out-auth', 'hang-out-wallpaper'])
    .config(['$routeProvider', function ($route) {
        $route
            .when('/browse', { templateUrl: 'scripts/browse/browse.tmpl.html', controller: 'hangOutBrowseCtrl' })
            .when('/activity/:id', { templateUrl: 'scripts/browse/activity-details.tmpl.html', controller: 'hangOutActivityDetailsCtrl' });
    }]);

}).call(this, this.angular);