(function (angular, hds) {
    'use strict';

    function RegistrationForm() {
        
        var self = this;

        this.name = null;
        this.email = null;
        this.emailConfirm = null;
        this.password = null;
        this.passwordConfirm = null;

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
      .controller('hangOutRegisterCtrl', ['$scope', function ($s) {

          //        var validator = new hds.Validation();
          //        validator.QueueForValidation(new hds.Entity({ id: 'test-test-testicles' }), 'validatorTest', '123qweqwe').then(function(result){
          //           validator.Validate(result.data, '123qweqwe').then(function(){});
          //        });

          $s.registration = new RegistrationForm();


      }]);

}).call(this, this.angular, this.H.DataStore);
