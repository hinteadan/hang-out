(function (angular, $) {
    'use strict';

    angular.module('hang-out-app', ['ngRoute', 'hang-out-auth', 'hang-out-browse'])
    .config(['$routeProvider', function ($route) {
        $route.otherwise({ redirectTo: '/browse' });
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