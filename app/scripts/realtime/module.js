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

    .controller('realTimeTestCtrl', ['$scope', 'hangOutRealtime', function ($s, realtime) {
        $s.ping = function () {
            realtime
        };
    }]);

}).call(this, this.angular, this.jQuery);