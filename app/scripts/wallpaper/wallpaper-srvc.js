(function (angular) {
    'use strict';

    angular.module('hang-out-wallpaper')
    .service('wallpaper', ['$rootScope', 'wallpaper-change-event', function ($root, changeEvent) {

        function setSingleWallpaperImage(imageUrl){
            $root.$broadcast(changeEvent, [imageUrl]);
        }

        function setWallpaperImages(images) {
            $root.$broadcast(changeEvent, images);
        }

        this.setWallpaper = setSingleWallpaperImage;
        this.setWallpapers = setWallpaperImages;

    }]);

}).call(this, this.angular);