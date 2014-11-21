(function (angular, document) {
    'use strict';

    angular.module('hang-out-auth-google', ['hang-out', 'hang-out-auth', 'googleplus'])
    .constant('googleClientId', '305305769389-kacpptkpoa84ll993jp0e2tpmftcq5kc.apps.googleusercontent.com')
    .constant('googleApiKey', 'AIzaSyBD5HhqV2k2DQQwqauyUAxt7xIJyn65JvU')
    .config(['GooglePlusProvider', 'googleClientId', 'googleApiKey', function (google, clientId, apiKey) {
        google.init({
            clientId: clientId,
            apiKey: apiKey,
            scopes: 'email https://www.googleapis.com/auth/plus.profile.emails.read'
        });
    }]);

}).call(this, this.angular, this.document);