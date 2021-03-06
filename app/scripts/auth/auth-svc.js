﻿(function (angular, store, JSON, chk, random) {
    'use strict';

    angular.module('hang-out-auth')
    .service('hangOutAuth', ['$q', 'model-mapper', 'hasher', function ($q, map, hasher) {
        var storeKey = { user: 'hang-out-current-user', public: 'hang-out-current-user-public-key' },
            token = null,
            currentUser = store[storeKey.user] ? map.user(JSON.parse(store[storeKey.user])) : null;

        function generateUserKey(user) {
            return hasher.hash(user.name + user.email + String(new Date().getTime()) + String(random() * 1000));
        }

        function generateToken(key, user) {
            return hasher.hash(key + user.name + user.email);
        }

        function cleanStore() {
            var publicKey = store[storeKey.public],
                privateKey = store[publicKey];
            delete store[storeKey.user];
            delete store[storeKey.public];
            delete store[publicKey];
            delete store[privateKey];
        }

        function isUserAuthenticated() {
            if (!currentUser || !store[storeKey.public] || !store[store[storeKey.public]]) {
                return false;
            }
            token = token || generateToken(store[store[storeKey.public]], currentUser);
            return store[store[store[storeKey.public]]] === token;
        }

        this.isAuthenticated = isUserAuthenticated;
        this.currentUser = function () { return currentUser; };

        this.login = function (user) {
            var deff = $q.defer(),
                publicKey = generateUserKey(user),
                privateKey = generateUserKey(user);

            currentUser = user;
            cleanStore();

            store[storeKey.user] = JSON.stringify(user);
            store[storeKey.public] = publicKey;
            store[publicKey] = privateKey;

            deff.resolve(publicKey);

            return deff.promise;
        };

        this.authenticate = function (publicKey) {
            var deff = $q.defer(),
                privateKey = null;

            if (!store[publicKey] || !currentUser || !store[storeKey.public]) {
                $q.reject('Invalid Key');
                return deff.promise;
            }

            privateKey = store[publicKey];
            token = generateToken(privateKey, currentUser);
            store[privateKey] = token;

            deff.resolve(true);

            return deff.promise;
        };

        this.signOut = function () {
            var deff = $q.defer();
            cleanStore();
            currentUser = null;
            deff.resolve(true);
            return deff.promise;
        };
    }]);

}).call(this, this.angular, this.localStorage, this.JSON, this.H.Check, this.Math.random);