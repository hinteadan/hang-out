﻿(function (angular) {
    'use strict';

    angular.module('hang-out-browse', ['ngDisqus', 'ngRoute', 'hang-out', 'hang-out-auth', 'hang-out-wallpaper', 'hang-out-suggestions', 'hang-out-notify', 'hang-out-analytics', 'google-maps'.ns()])
    .constant('disqusAppShortName', 'h-hang-out')
    .config(['$routeProvider', '$disqusProvider', 'disqusAppShortName', function ($route, $disqus, dsqAppName) {
        $route
            .when('/browse', { templateUrl: 'scripts/browse/browse-options.tmpl.html', controller: 'hangOutBrowseOptionsCtrl' })
            .when('/activities', { templateUrl: 'scripts/browse/browse.tmpl.html', controller: 'hangOutBrowseCtrl' })
            .when('/activities/:type', { templateUrl: 'scripts/browse/browse.tmpl.html', controller: 'hangOutBrowseCtrl' })
            .when('/activity/:id', { templateUrl: 'scripts/browse/activity-details.tmpl.html', controller: 'hangOutActivityDetailsCtrl' });
        $disqus.setShortname(dsqAppName);
    }]);

}).call(this, this.angular);