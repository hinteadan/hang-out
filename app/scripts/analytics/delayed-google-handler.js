(function (angular, localStore) {
    'use strict';

    angular.module('hang-out-analytics')
    .service('AngularyticsDelayedGoogleHandler', ['$timeout', 'AngularyticsGoogleUniversalHandler', function ($t, ga) {
        this.trackPageView = function (url) {
            $t(function () {
                ga.trackPageView(url);
            });
        };

        this.trackEvent = function (category, action, opt_label, opt_value, opt_noninteraction) {
            $t(function () {
                ga.trackEvent(category, action, opt_label, opt_value, opt_noninteraction);
            });
        };
    }]);

}).call(this, this.angular, this.localStorage);