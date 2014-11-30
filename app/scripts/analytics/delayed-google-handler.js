(function (angular) {
    'use strict';

    angular.module('hang-out-analytics')
    .service('AngularyticsDelayedGoogleHandler', ['$timeout', 'AngularyticsGoogleUniversalHandler', function ($t, ga) {
        this.trackPageView = function (url) {
            $t(function () {
                ga.trackPageView(url);
            }, 800);
        };

        this.trackEvent = function (category, action, optLabel, optValue, optNoninteraction) {
            $t(function () {
                ga.trackEvent(category, action, optLabel, optValue, optNoninteraction);
            }, 800);
        };
    }]);

}).call(this, this.angular);