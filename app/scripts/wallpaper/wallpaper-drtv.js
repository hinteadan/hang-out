﻿(function (angular, _, Image, undefined) {
    'use strict';

    angular.module('hang-out-wallpaper')
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
                    nextWallpaperElement = element.children('.next-wallpaper'),
                    wallpapers = _.without(scope.images && scope.images.length ? scope.images : defaultImagesUrls, undefined, null),
                    shownWallpapers = [],
                    rotationPromise = null,
                    animationPromise = null;

                function runWallpaperRoundAndQueueAnother() {
                    wallpaperElement.css({
                        'background-image': cssUrl(wallpapers[0]),
                        opacity: 1
                    });
                    shownWallpapers.push(wallpapers.splice(0, 1)[0]);
                    rotationPromise = $t(rotateWallpapers, changeAfter);
                }

                function rotateWallpapers() {
                    if (!wallpapers.length) {
                        wallpapers = _.without(shownWallpapers, undefined, null);
                        shownWallpapers = [];
                    }

                    loadImage(wallpapers[0]).then(function () {
                        nextWallpaperElement.css('background-image', cssUrl(wallpapers[0]));
                        animationPromise = $a.animate(wallpaperElement, { opacity: 1 }, { opacity: 0 });
                        animationPromise.then(function () {
                            scope.$apply(function () {
                                runWallpaperRoundAndQueueAnother();
                            });
                        });
                    }, function () {
                        shownWallpapers.push(wallpapers.splice(0, 1)[0]);
                        rotateWallpapers();
                    });
                }

                function resetWallpapers(newWallpapers) {
                    wallpapers = _.without(newWallpapers || (scope.images && scope.images.length && scope.images[0] ? scope.images : defaultImagesUrls), undefined, null);
                    shownWallpapers = [];
                }

                scope.$watch('images', resetWallpapers);

                scope.$on(changeEvent, function (event, newWallpapers) {
                    if (rotationPromise) { $t.cancel(rotationPromise); }
                    if (animationPromise) { $a.cancel(animationPromise); }
                    resetWallpapers(newWallpapers);
                    $t(rotateWallpapers);
                });

                runWallpaperRoundAndQueueAnother();
            }
        };
    }]);

}).call(this, this.angular, this._, this.Image);