(function (angular, document) {
    'use strict';

    angular.module('hang-out-auth-mail', ['hang-out', 'hang-out-auth', 'hang-out-notify'])
    .config(['$routeProvider', function ($route) {
        $route
            .when('/authenticate/:key', { templateUrl: 'scripts/auth/mail/authenticate.tmpl.html', controller: 'hangOutMailAuth', isPublic: true });
    }]);

}).call(this, this.angular, this.document);