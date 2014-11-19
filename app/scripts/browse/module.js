(function (angular) {
    'use strict';

    angular.module('hang-out-browse', ['ngDisqus', 'hang-out', 'hang-out-auth', 'hang-out-wallpaper', 'hang-out-suggestions', 'hang-out-notify'])
    .constant('disqusAppShortName', '')
    .config(['$routeProvider', '$disqusProvider', 'disqusAppShortName', function ($route, $disqus, dsqAppName) {
        $route
            .when('/browse', { templateUrl: 'scripts/browse/browse.tmpl.html', controller: 'hangOutBrowseCtrl' })
            .when('/activity/:id', { templateUrl: 'scripts/browse/activity-details.tmpl.html', controller: 'hangOutActivityDetailsCtrl' });
        $disqus.setShortname(dsqAppName);
    }]);

}).call(this, this.angular);