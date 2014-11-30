(function (angular, localStore) {
    'use strict';

    angular.module('hang-out-analytics', ['angularytics'])
        .config(['AngularyticsProvider', function (AngularyticsProvider) {
            AngularyticsProvider.setEventHandlers(['Console', 'GoogleUniversal']);
        }])
        .run(['Angularytics', function (Angularytics) {
            Angularytics.init();
        }]);

}).call(this, this.angular, this.localStorage);