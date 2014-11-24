(function (angular) {
    'use strict';

    angular.module('hang-out-auth')
    .controller('hangOutLogin', ['$location', 'title', 'hangOutAuth', 'footer', function ($l, title, auth, footer) {

        if (auth.isAuthenticated()) {
            $l.path('/browse');
            return;
        }

        title.set('Login');
        footer.template('scripts/auth/footer.tmpl.html');
    }]);

}).call(this, this.angular);