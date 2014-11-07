(function (angular, chk) {
    'use strict';

    function User(email, name) {

        chk.notEmpty(email, 'email');

        this.email = email;
        this.name = name;
    }
    User.fromDto = function (dto) {
        return new User(dto.email, dto.name);
    };

    angular.module('hang-out-auth')
    .constant('hangOutAuthUser', User);

}).call(this, this.angular, this.H.Check);