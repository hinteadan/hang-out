(function (angular) {
    'use strict';

    angular.module('hang-out-wallpaper', ['ngAnimate'])
    .constant('wallpaper-change-event', 'hang-out-wallpaper-change')
    .value('wallpaper-default-images', [
        'http://www.bhmpics.com/walls/happiness_beach_girl_2-other.jpg',
        'http://www.magic4walls.com/wp-content/uploads/2013/12/mood-girl-woman-joy-happiness-positive-smile-hands-movement-leaves-leaves-sky-clouds-background-wallpaper.jpg',
        'http://3.bp.blogspot.com/-NMkJyXrdi9c/UoRKUNalLiI/AAAAAAAAa8w/XR4RL1G_REE/s1600/finding-happiness.jpg',
        'http://vividlife.me/ultimate/wp-content/uploads/2013/11/happiness-wallpapers_34664_1920x1200.jpg'
    ])
    .value('wallpaper-change-interval', 1000 * 60 * 10)//10 minutes
    .config(['$animateProvider', function ($animateProvider) {
        $animateProvider.classNameFilter(/wallpaper/);
    }])
    .run(['$rootScope', 'wallpaper', function ($root, wall) {
        $root.$on('$routeChangeStart', function () {
            wall.setDefault();
        });
    }]);

}).call(this, this.angular);