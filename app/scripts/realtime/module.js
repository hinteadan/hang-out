(function (angular, $) {
    'use strict';

    function RealtimeApi(hubServer, onChange, onCreate, onDelete) {

        this.onEntityChanged = function (entity) {
            if (!angular.isFunction(onChange)) {
                return;
            }
            onChange.call(null, entity);
        };
        this.onEntityCreated = function (entity) {
            if (!angular.isFunction(onCreate)) {
                return;
            }
            onCreate.call(null, entity);
        };
        this.onEntityRemoved = function (entity) {
            if (!angular.isFunction(onDelete)) {
                return;
            }
            onDelete.call(null, entity);
        };

        this.announceEntityChange = function (entity) {
            hubServer.announceEntityChange(entity);
        };

        this.announceEntityCreated = function (entity) {
            hubServer.announceEntityCreated(entity);
        };

    }

    angular.module('hang-out-real-time', ['hang-out'])
    .constant('realTimeRootPath', 'realtime')
    .run(['storeUrl', 'realTimeRootPath', function (storeUrl, rootPath) {
        $('body').append('<script src="' + storeUrl + rootPath + '/hubs" type="text/javascript"></script>');
    }])

    .service('hangOutRealtime', ['$timeout', 'storeUrl', 'realTimeRootPath', function ($t, storeUrl, rootPath) {

        var realtime = null,
            retryCount = 0,
            retryMax = 10,
            retryIn = 500,
            realtimeApi = null;


        function areHubsLoaded() {
            return Boolean($.connection.entityHub);
        }

        function initialize() {
            realtime = $.connection.entityHub;

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
                console.info('Connected to Real-time hub');
            });

            realtimeApi = new RealtimeApi(realtime.server, console.log, console.log, console.log);
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

        this.isAvailable = function () {
            return Boolean(realtimeApi);
        };
        this.api = function () {
            return realtimeApi;
        };
    }]);

}).call(this, this.angular, this.jQuery);