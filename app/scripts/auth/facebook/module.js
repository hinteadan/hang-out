(function (angular, document) {
    'use strict';

    angular.module('hang-out-auth-facebook', ['hang-out', 'hang-out-auth', 'ngFacebook'])
    .constant('facebookApplicationId', '1511230259130111')
    .config(['$facebookProvider', 'facebookApplicationId', function (fb, appId) {
        fb
            .setAppId(appId)
            .setCustomInit({
                xfbml: true,
                version: 'v2.2'
            });
    }])
    .run(['$rootScope', function($root) {
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }]);

}).call(this, this.angular, this.document);