(function (angular, _) {
    'use strict';

    angular.module('hang-out-wallpaper')
    .value('wallpaper-default-image', '../images/halep-celebrating.jpg')
    .directive('wallpaper', ['wallpaper-default-image', 'wallpaper-change-event', function (defaultImageUrl, changeEvent) {

        function cssUrl(url) {
            return 'url("' + url + '")';
        }

        return {
            restrict: 'E',
            replace: true,
            transclude: false,
            templateUrl: 'scripts/wallpaper/wallpaper.tmpl.html',
            scope: {
                images: '='
            },
            link: function (scope) {

                var wallpapers = scope.images || [defaultImageUrl];

                function refreshBackgrounds() {
                    if (scope.images && scope.images.length) {
                        wallpapers = scope.images;
                    }
                    scope.backgrounds = _.map(wallpapers, cssUrl);
                }

                refreshBackgrounds();

                scope.$watch('images', refreshBackgrounds);

                scope.$on(changeEvent, function (event, newWallpapers) {
                    wallpapers = newWallpapers || wallpapers;
                    refreshBackgrounds();
                });
            }
        };
    }]);

}).call(this, this.angular, this._);