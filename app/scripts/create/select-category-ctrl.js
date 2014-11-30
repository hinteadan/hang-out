(function (angular) {
    'use strict';

    angular.module('hang-out-create')
    .controller('selectCategoryCtrl', ['$scope', '$location', 'hangOutAuth', 'hangOutSuggester', 'title', 'activityWizard', 'footer', 'Angularytics', function ($s, $l, auth, suggest, title, wiz, footer, analytics) {

        if (!auth.isAuthenticated()) {
            return;
        }

        title.set('Select Category');
        footer.template('scripts/create/footer-skip.tmpl.html');

        function cssUrl(url) {
            return 'url(\'' + url + '\')';
        }

        $s.categories = suggest.categories();
        $s.cssUrl = cssUrl;
        $s.select = function (category) {
            wiz.category(category);
            analytics.trackEvent('Create Activity', 'Select Category', category.name);
            $l.path('/new/activity');
        };

    }]);

}).call(this, this.angular);