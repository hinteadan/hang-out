(function (angular) {
    'use strict';

    var template = null;

    angular.module('hang-out-app')
    .controller('footer', ['$scope', function ($s) {
        $s.isVisible = Boolean(template);
        $s.template = function () { return template; };
    }])
    .service('footer', [function () {
        this.template = function (name) {
            template = name;
        };
        this.reset = function () {
            template = null;
        };
    }])
    .run(['$rootScope', 'footer', function ($root, footer) {
        $root.$on('$routeChangeStart', function () {
            footer.reset();
        });
    }]);

}).call(this, this.angular);