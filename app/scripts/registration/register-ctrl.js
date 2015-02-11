(function(angular, hds){
    'use strict';

    angular.module('hang-out-registration')
    .controller('hangOutRegisterCtrl', [function(){

        var validator = new hds.Validation();
        validator.QueueForValidation(new hds.Entity({ id: 'test-test-testicles' }), 'validatorTest', '123qweqwe').then(function(result){
           validator.Validate(result.data, '123qweqwe').then(function(){});
        });

    }]);

}).call(this, this.angular, this.H.DataStore);
