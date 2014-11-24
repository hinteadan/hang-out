(function (angular, notify, store, JSON, _) {
    'use strict';

    angular.module('hang-out-auth-mail')
    .controller('hangOutMailLogin', ['$scope', '$location', 'hangOutMailAuth', 'model', function ($s, $l, auth, m) {

        var storeKey = 'hang-out-user-emails',
            userEmails = store[storeKey] ? JSON.parse(store[storeKey]) : [],
            me = {
                email: null,
                name: null
            };

        function storeUserEmail() {
            if (!me.email) {
                return;
            }
            userEmails.push(me.email);
            userEmails = _.uniq(userEmails, function (email) { return email.toLowerCase(); });
            store[storeKey] = JSON.stringify(userEmails);
        }

        $s.me = me;
        $s.emails = function () { return userEmails; };
        $s.login = function () {
            storeUserEmail();
            auth
            .login(new m.Individual(me.name, me.email))
            .then(function (isSuccess) {
                if (!isSuccess) {
                    notify('Login Failed!');
                }
                $s.isLoginSuccessfull = true;
            });
        };
    }]);

}).call(this, this.angular, this.alert, this.localStorage, this.JSON, this._);