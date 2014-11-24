(function (angular) {
    'use strict';

    angular.module('hang-out-create')
    .controller('selectCategoryCtrl', ['$scope', 'hangOutAuth', 'hangOutSuggester', 'title', function ($s, auth, suggest, title) {

        if (!auth.isAuthenticated()) {
            return;
        }

        title.set('Select Category');

        function cssUrl(url) {
            return 'url(\'' + url + '\')';
        }

        $s.categories = suggest.categories();
        $s.cssUrl = cssUrl;

    }]);

}).call(this, this.angular);