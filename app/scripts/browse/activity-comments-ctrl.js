(function (angular) {
	'use strict';

	angular.module('hang-out-browse')
    .controller('hangOutActivityCommentsCtrl', ['$scope', '$routeParams', '$rootScope', function ($s, $p, $root) {
    	$root.isViewFullScreen = true;
    	$s.disqusThreadId = $p.id;
    }]);

}).call(this, this.angular, this.alert, this.localStorage);