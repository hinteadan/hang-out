(function (angular) {
    'use strict';

    angular.module('hang-out-registration')
      .controller('hangOutValidateUserCtrl', ['$scope', '$q', '$location', '$routeParams', 'dataStore', 'hangOutAuth', function ($s, $q, $l, $p, provide, auth) {

          var clientId = $p.clientId,
              validationToken = $p.token;

          provide.validateRegistration(clientId, validationToken).then(function (user) {
              
              auth.login(user).then(function (key) {
                  auth.authenticate(key).then(function () {
                      $l.path('/');
                      return true;
                  });
              });

          }, function (reason) {
              $s.error = reason;
          });

      }]);

}).call(this, this.angular);
