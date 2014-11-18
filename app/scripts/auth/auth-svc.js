(function (angular, store, JSON, chk) {
    'use strict';



    angular.module('hang-out-auth')
    .service('hangOutAuth', ['$q', 'model-mapper', function ($q, map) {
        var storeKey = 'hang-out-current-user',
            authenticatedUser = store[storeKey] ? map.user(JSON.parse(store[storeKey])) : null,
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
        this.signOut = function () {
            var deff = $q.defer();
            delete store[storeKey];
            this.currentUser = authenticatedUser = null;
            this.isAuthenticated = isAuthenticated = false;
            deff.resolve(true);
            return deff.promise;
        };
    }]);

}).call(this, this.angular, this.localStorage, this.JSON, this.H.Check);