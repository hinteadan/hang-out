(function (angular, _) {
    'use strict';

    function RegistrationForm() {

        var self = this,
            errors = [];

        this.name = null;
        this.email = null;
        this.password = null;
        this.passwordConfirm = null;
        this.website = null;

        this.birthday = null;
        this.country = null;
        this.city = null;
        this.gender = null;

        function isMinimallyFilled() {
            return self.name && self.email && self.password && self.passwordConfirm;
        }

        function isConfirmed() {
            return self.password === self.passwordConfirm;
        }

        this.isFilledOk = function () {
            return isMinimallyFilled() && isConfirmed();
        };
    }

    angular.module('hang-out-registration')
      .controller('hangOutRegisterCtrl', ['$scope', '$q', '$location', 'dataStore', 'model', 'hasher', 'hangOutNotifier', 'title', function ($s, $q, $l, provide, m, hasher, notify, title) {

          var label = {
              gender: {
                  female: 'Female',
                  male: 'Male',
                  other: 'Other'
              }
          };

          title.set('Register a new account');

          function createIndividiual() {
              return new m.Individual(
                  $s.registration.name,
                  $s.registration.email,
                  $s.registration.website
                  )
                  .setPasswordHash(hasher.hash($s.registration.password));
          }

          function createUserProfile() {
              return new m.IndividualProfile($s.registration.email)
              .set('birthday', $s.registration.birthday)
              .set('country', $s.registration.country)
              .set('city', $s.registration.city)
              .set('gender', $s.registration.gender);
          }

          function generateValidationLink(clientId, validationToken) {
              return 'http://' + $l.host() + ($l.port() !== 80 ? ':' + $l.port() : '') + '/#!/validate-user/' + clientId + '/' + validationToken;
          }

          $s.registration = new RegistrationForm();
          $s.$watch('registration.email', function () {
              $s.flag.isEmailTaken = false;
          });
          $s.genders = _.map(m.IndividualProfile.gender, function (gender, key) {
              return { value: gender, label: label.gender[key] || gender };
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
                      var clientId = hasher.hash($s.registration.email),
                          dude = createIndividiual();

                      provide.queueRegistration(dude, clientId).then(function (registrationToken) {
                          provide.saveUserProfile(createUserProfile()).then(function () {
                              notify.registration(dude, generateValidationLink(clientId, registrationToken));
                              $s.flag.registrationSuccess = 'You have successfully registered. Please check your Inbox or Spam folder to finalize the process.';
                          }, function (reason) {
                              $s.flag.registrationError = reason;
                          });
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

}).call(this, this.angular, this._);
