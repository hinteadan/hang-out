(function (angular, store, JSON, chk) {
    'use strict';



    angular.module('hang-out-auth')
    .service('hangOutAuth', ['$q', 'hangOutAuthUser', function ($q, User) {
        var storeKey = 'hang-out-current-user',
            authenticatedUser = store[storeKey] ? User.fromDto(JSON.parse(store[storeKey])) : null,
            isAuthenticated = Boolean(authenticatedUser);

        this.isAuthenticated = isAuthenticated;
        this.currentUser = authenticatedUser;
        this.authenticate = function (user) {
            var deff = $q.defer();
            chk.notEmpty(user, 'user');
            store[storeKey] = JSON.stringify(user);
            this.currentUser = authenticatedUser = user;
            this.isAuthenticated = isAuthenticated = true;
            deff.resolve(true);
            return deff.promise;
        };
    }]);

}).call(this, this.angular, this.localStorage, this.JSON, this.H.Check);