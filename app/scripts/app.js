(function (angular, $) {
    'use strict';

    angular.module('hang-out-app', ['ngRoute', 'hang-out', 'hang-out-auth'])
    .config(['$routeProvider', function ($route) {
        $route
            .when('/', { templateUrl: 'scripts/use-cases.tmpl.html', controller: 'use-cases' });
    }]);

    //HOLO Skin wire up
    $(document).ready(function () {
        $('[data-toggle=offcanvas]').click(function () {
            $('.row-offcanvas').toggleClass('active');
        });

        $('.btn-toggle').click(function () {
            $(this).find('.btn').toggleClass('active').toggleClass('btn-default').toggleClass('btn-primary');
        });
    });

}).call(this, this.angular, this.$);