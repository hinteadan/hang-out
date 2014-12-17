(function (angular, $) {
    'use strict';

    angular.module('hang-out-real-time', ['hang-out'])
    .constant('realTimeRootPath', 'realtime')
    .run(['storeUrl', 'realTimeRootPath', function (storeUrl, rootPath) {
        $('body').append('<script src="' + storeUrl + rootPath + '/hubs" type="text/javascript"></script>');
    }])

    .service('hangOutRealtime', ['$timeout', 'storeUrl', 'realTimeRootPath', function ($t, storeUrl, rootPath) {

        var realtime = null,
            retryCount = 0,
            retryMax = 10,
            retryIn = 500;


        function areHubsLoaded() {
            return Boolean($.connection.entityHub);
        }

        function initialize() {
            realtime = $.connection.entityHub;

            realtime.client.pong = function (timestamp) {
                console.log('server pong');
                console.log(timestamp);
            };

            realtime.client.entityChanged = function (entity) {
                console.log('entityChanged');
                console.log(entity);
            };

            realtime.client.entityCreated = function (entity) {
                console.log('entityCreated');
                console.log(entity);
            };

            $.connection.hub.url = storeUrl + rootPath;
            $.connection.hub.start().done(function () {
                console.log('$.connection.hub.start().done');
                realtime.server.ping();
            });
        }

        function tryInitialize() {
            if (areHubsLoaded()) {
                initialize();
                return;
            }
            else if (retryCount === retryMax) {
                return;
            }
            retryCount++;
            $t(tryInitialize, retryIn);
        }
        tryInitialize();
    }])

    .controller('realTimeTestCtrl', ['$scope', 'hangOutRealtime', function ($s) {
        $s.ping = function () {
            
        };
    }]);

}).call(this, this.angular, this.jQuery);