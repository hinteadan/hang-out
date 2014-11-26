(function (angular, _) {
    'use strict';

    angular.module('hang-out-wallpaper')
    .service('wallpaper', ['$rootScope', 'wallpaper-change-event', 'wallpaper-default-images', function ($root, changeEvent, defaultImages) {

        var currentWallpapers = null;

        function isSame(images) {
            if (!images || !images.length || !images[0]) {
                return currentWallpapers === null;
            }
            return _.all(images, function (img) {
                return _.contains(currentWallpapers, img);
            });
        }

        function setSingleWallpaperImage(imageUrl) {
            if (isSame([imageUrl])) {
                return;
            }
            currentWallpapers = imageUrl ? [imageUrl, imageUrl] : defaultImages;
            $root.$broadcast(changeEvent, currentWallpapers);
        }

        function setWallpaperImages(imageArray) {
            if (isSame(imageArray)) {
                return;
            }
            currentWallpapers = imageArray && imageArray.length ? imageArray : defaultImages;
            currentWallpapers = currentWallpapers.length === 1 ? [currentWallpapers[0], currentWallpapers[0]] : currentWallpapers;
            $root.$broadcast(changeEvent, currentWallpapers);
        }

        this.setWallpaper = setSingleWallpaperImage;
        this.setWallpapers = setWallpaperImages;
        this.setDefault = function () {
            setWallpaperImages();
        };

    }]);

}).call(this, this.angular, this._);