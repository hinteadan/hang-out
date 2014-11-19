(function (angular, window) {
    'use strict';

    var title = 'Hang Out',
        subTitle = null;

    function getFullTitle() {
        if (!subTitle) {
            return title;
        }
        return title + ' - ' + subTitle;
    }

    angular.module('hang-out-app')
    .controller('title', ['$scope', function ($s) {
        $s.title = getFullTitle;
    }])
    .service('title', [function () {
        this.set = function (title) {
            subTitle = title;
            /*jshint camelcase: false */
            window.disqus_title = getFullTitle();
        };
    }]);

}).call(this, this.angular, this.window);