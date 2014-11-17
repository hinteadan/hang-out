(function (angular) {
    'use strict';

    angular.module('hang-out-wallpaper')
    .service('wallpaper', ['$rootScope', 'wallpaper-change-event', function ($root, changeEvent) {

        function setSingleWallpaperImage(imageUrl){
            $root.$broadcast(changeEvent, [imageUrl]);
        }

        this.setWallpaper = setSingleWallpaperImage;

    }]);

}).call(this, this.angular);