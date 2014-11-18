(function (angular) {
    'use strict';

    angular.module('hang-out-wallpaper', ['ngAnimate'])
    .constant('wallpaper-change-event', 'hang-out-wallpaper-change')
    .value('wallpaper-change-interval', 1000 * 60 * 10);//10 minutes

}).call(this, this.angular);