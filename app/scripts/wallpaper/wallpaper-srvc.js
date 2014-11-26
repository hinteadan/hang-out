(function (angular) {
    'use strict';

    angular.module('hang-out-wallpaper')
    .service('wallpaper', ['$rootScope', 'wallpaper-change-event', 'wallpaper-default-images', function ($root, changeEvent, defaultImages) {

        function setSingleWallpaperImage(imageUrl){
            $root.$broadcast(changeEvent, imageUrl ? [imageUrl, imageUrl] : defaultImages);
        }

        function setWallpaperImages(imageArray) {
            var images = imageArray && imageArray.length ? imageArray : defaultImages;
            $root.$broadcast(changeEvent, images.length === 1 ? [images[0], images[0]] : images);
        }

        this.setWallpaper = setSingleWallpaperImage;
        this.setWallpapers = setWallpaperImages;
        this.setDefault = function () {
            setWallpaperImages();
        };

    }]);

}).call(this, this.angular);