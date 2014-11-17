(function (angular) {
    'use strict';

    angular.module('hang-out-wallpaper', [])
    .constant('wallpaper-change-event', 'hang-out-wallpaper-change')
    .value('wallpaper-change-interval', 3000);

}).call(this, this.angular);