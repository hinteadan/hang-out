(function (angular, notify, store, JSON, _) {
    'use strict';

    angular.module('hang-out-auth-mail')
    .controller('hangOutMailLogin', ['$scope', '$location', 'hangOutMailAuth', 'model', function ($s, $l, auth, m) {

        var storeKey = 'hang-out-user-suggestions',
            userSuggestions = store[storeKey] ? JSON.parse(store[storeKey]) : [],
            me = {
                email: null,
                name: null
            };

        function storeUserSuggestion() {
            if (!me.email) {
                return;
            }
            userSuggestions.push(me);
            userSuggestions = _.uniq(userSuggestions, false, function (dude) { return dude.email.toLowerCase(); });
            store[storeKey] = JSON.stringify(userSuggestions);
        }

        $s.me = me;
        $s.suggestions = function () { return userSuggestions; };
        $s.selectSuggestion = function ($item) {
            $s.me = me = { email: $item.email, name: $item.name };
        }
        $s.login = function () {
            storeUserSuggestion();
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