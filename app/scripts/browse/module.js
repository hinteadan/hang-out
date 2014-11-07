(function (angular) {
    'use strict';

    angular.module('hang-out-browse', ['hang-out'])
    .config(['$routeProvider', function ($route) {
        $route
            .when('/browse', { templateUrl: 'scripts/browse/browse.tmpl.html', controller: 'hangOutBrowseCtrl' });
    }]);

}).call(this, this.angular);