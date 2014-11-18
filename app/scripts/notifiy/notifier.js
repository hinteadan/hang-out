(function (angular, console) {
    'use strict';

    function ConsoleNotifier() {

        function logMemberJoinedActivity(member, activity) {
            console.log(member);
            console.log('joined');
            console.log(activity);
        }

        function logMemberBailedOutOfActivity(member, activity) {
            console.log(member);
            console.log('bailed out of');
            console.log(activity);
        }

        function logMemberConfirmation(member, activity) {
            console.log(member);
            console.log('confirmed for activity');
            console.log(activity);
        }

        function logActivityStatusChange(activity, oldStatus) {
            console.log(activity);
            console.log('changed status to ' + activity.friendlyStatus () + ', from ' + oldStatus);
        }

        this.join = logMemberJoinedActivity;
        this.bailOut = logMemberBailedOutOfActivity;
        this.status = logActivityStatusChange;
        this.confirmation = logMemberConfirmation;

    }

    angular.module('hang-out-notify')
    .service('hangOutNotifier', [ConsoleNotifier]);

}).call(this, this.angular, this.console);