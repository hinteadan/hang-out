(function (angular, _, Image) {
    'use strict';

    angular.module('hang-out-wallpaper')
    .value('wallpaper-default-images', ['../images/halep-celebrating.jpg', 'http://wfiles.brothersoft.com/s/snooker-ready_91881-1920x1200.jpg'])
    .directive('wallpaper', ['$q', '$timeout', '$animate', 'wallpaper-default-images', 'wallpaper-change-event', 'wallpaper-change-interval', function ($q, $t, $a, defaultImagesUrls, changeEvent, changeAfter) {

        function cssUrl(url) {
            return 'url("' + url + '")';
        }

        function loadImage(url) {
            var deff = $q.defer();
            var img = new Image();
            img.onload = function () {
                deff.resolve(true);
            };
            img.onabort = function () {
                deff.reject(false);
            };
            img.onerror = function () {
                deff.reject(false);
            };
            img.src = url;
            return deff.promise;
        }

        return {
            restrict: 'E',
            replace: true,
            transclude: false,
            templateUrl: 'scripts/wallpaper/wallpaper.tmpl.html',
            scope: {
                images: '='
            },
            link: function (scope, element) {

                var wallpaperElement = element.children('.current-wallpaper'),
                    wallpapers = scope.images && scope.images.length ? scope.images : defaultImagesUrls,
                    shownWallpapers = [];

                function runWallpaperRoundAndQueueAnother() {
                    $t(function () {
                        scope.background = cssUrl(wallpapers[0]);
                        wallpaperElement.css({ opacity: 1 });
                        shownWallpapers.push(wallpapers.splice(0, 1)[0]);
                    });
                    $t(rotateWallpapers, changeAfter);
                }

                function rotateWallpapers() {
                    if (!wallpapers.length) {
                        wallpapers = shownWallpapers;
                        shownWallpapers = [];
                    }

                    loadImage(wallpapers[0]).then(function () {
                        scope.nextBackground = cssUrl(wallpapers[0]);
                        $a.animate(wallpaperElement, { opacity: 1 }, { opacity: 0 })
                        .then(runWallpaperRoundAndQueueAnother);
                    }, function () {
                        shownWallpapers.push(wallpapers.splice(0, 1)[0]);
                        rotateWallpapers();
                    });
                }

                function resetWallpapers(newWallpapers) {
                    wallpapers = newWallpapers || (scope.images && scope.images.length ? scope.images : defaultImagesUrls);
                    shownWallpapers = [];
                }

                scope.$watch('images', resetWallpapers);

                scope.$on(changeEvent, function (event, newWallpapers) {
                    resetWallpapers(newWallpapers);
                });

                runWallpaperRoundAndQueueAnother();
            }
        };
    }]);

}).call(this, this.angular, this._, this.Image);