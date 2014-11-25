(function (angular) {
    'use strict';

    angular.module('hang-out-wallpaper')
    .service('wallpaper', ['$rootScope', 'wallpaper-change-event', function ($root, changeEvent) {

        function setSingleWallpaperImage(imageUrl){
            $root.$broadcast(changeEvent, [imageUrl, imageUrl]);
        }

        function setWallpaperImages(images) {
            $root.$broadcast(changeEvent, images.length === 1 ? [images[0], images[0]] : images);
        }

        this.setWallpaper = setSingleWallpaperImage;
        this.setWallpapers = setWallpaperImages;

    }]);

}).call(this, this.angular);