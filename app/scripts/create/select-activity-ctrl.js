(function (angular) {
    'use strict';

    angular.module('hang-out-create')
    .controller('selectActivityCtrl', ['$scope', '$location', 'hangOutAuth', 'hangOutSuggester', 'title', 'activityWizard', function ($s, $l, auth, suggest, title, wiz) {

        if (!auth.isAuthenticated()) {
            return;
        }

        if (!wiz.category()) {
            $l.path('/new/category');
            return;
        }

        title.set('Select Activity');

        function cssUrl(url) {
            return 'url(\'' + url + '\')';
        }

        $s.activities = suggest.activitiesForCategory(wiz.category().name);
        $s.cssUrl = cssUrl;
        $s.select = function (activity) {
            wiz.activity(activity);
            $l.path('/new');
        };

    }]);

}).call(this, this.angular);