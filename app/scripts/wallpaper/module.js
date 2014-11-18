(function (angular) {
    'use strict';

    angular.module('hang-out-wallpaper', ['ngAnimate'])
    .constant('wallpaper-change-event', 'hang-out-wallpaper-change')
    .value('wallpaper-change-interval', 5000);

}).call(this, this.angular);