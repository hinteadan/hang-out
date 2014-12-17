(function (angular) {
    'use strict';

    angular.module('hang-out-real-time', ['SignalR'])
    .controller('realTimeTestCtrl', ['$scope', 'Hub', function ($s, Hub) {
        var entityHub = new Hub('entityHub', {
            listeners: {
                pong: function (timestamp) {
                    console.log(timestamp);
                }
            },
            methods: ['ping'],
            errorHandler: function (error) {
                console.error(error);
            },
            rootPath: 'http://localhost/HttpDataStore'
        });
        $s.ping = function () {
            entityHub.ping();
        };
    }]);

}).call(this, this.angular);