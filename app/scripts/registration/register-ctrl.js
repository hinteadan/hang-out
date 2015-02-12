(function (angular, hds) {
    'use strict';

    function RegistrationForm() {

        var self = this;

        this.name = null;
        this.email = null;
        this.emailConfirm = null;
        this.password = null;
        this.passwordConfirm = null;
        this.website = null;

        function isMinimallyFilled() {
            return self.name && self.email && self.emailConfirm && self.password && self.passwordConfirm;
        }

        function isConfirmed() {
            return self.email === self.emailConfirm && self.password === self.passwordConfirm;
        }

        this.isFilledOk = function () {
            return isMinimallyFilled() && isConfirmed();
        };
    }

    angular.module('hang-out-registration')
      .controller('hangOutRegisterCtrl', ['$scope', '$q', 'dataStore', 'model', 'hasher', function ($s, $q, provide, m, hasher) {

          //        var validator = new hds.Validation();
          //        validator.QueueForValidation(new hds.Entity({ id: 'test-test-testicles' }), 'validatorTest', '123qweqwe').then(function(result){
          //           validator.Validate(result.data, '123qweqwe').then(function(){});
          //        });

          function createIndividiual() {
              return new m.Individual(
                  $s.registration.name,
                  $s.registration.email,
                  $s.registration.website
                  );
          }

          $s.registration = new RegistrationForm();
          $s.$watch('registration.email', function () {
              $s.flag.isEmailTaken = false;
          });

          $s.isEmailAvailable = function () {
              var deff = $q.defer();

              provide.userViaEmail($s.registration.email).then(function (user) {
                  var isFree = !Boolean(user);
                  if (isFree) {
                      deff.resolve($s.registration.email);
                  }
                  else {
                      deff.reject(user);
                  }
              });

              return deff.promise;
          };

          $s.applyRegistration = function () {
              $s.flag.registrationError = null;
              $s.flag.registrationSuccess = null;
              $s.isEmailAvailable().then(
                  function () {
                      var clientId = hasher.hash($s.registration.email);
                      provide.queueRegistration(createIndividiual(), clientId).then(function (registrationToken) {
                          //Send reg. email
                          $s.flag.registrationSuccess = 'You have successfully registered. Please check your Inbox or Spam folder to finalize the process.';
                      },
                      function (reason) {
                          $s.flag.registrationError = reason;
                      });
                  },
                  function () {
                      $s.flag.isEmailTaken = true;
                  });
          };

          $s.flag = {
              isEmailTaken: false,
              registrationError: null,
              registrationSuccess: null,
          };

      }]);

}).call(this, this.angular, this.H.DataStore);
