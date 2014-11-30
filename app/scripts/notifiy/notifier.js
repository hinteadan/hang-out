(function (angular, _) {
    'use strict';

    function MandrillEmailNotifier($http, apiKey) {

        var baseUrl = 'https://mandrillapp.com/api/1.0/',
			template = {
			    activity: 'hang-out-activity-notification',
			    member: 'hang-out-member-notification',
                authentication: 'hang-out-user-authentication'
			};

        function urlFor(call) {
            return baseUrl + call;
        }

        function toDude(dude) {
            return {
                'email': dude.email,
                'name': dude.name,
                'type': 'to'
            };
        }

        function toAllActivityStakeholders(activity) {
            return _.map(_.union([activity.initiator], activity.confirmedMembers), toDude);
        }

        function toInitiatorAndDude(activity, dude) {
            return _.map([activity.initiator, dude], toDude);
        }

        function sendMemberNotificationMessage(to, member, action, activity, activityPermalink) {
            return $http.post(urlFor('messages/send-template.json'), {
                'key': apiKey,
                'template_name': template.member,
                'template_content': [
					//{
					//	'name': 'example name',
					//	'content': 'example content'
					//}
                ],
                'message': {
                    'to': to,
                    'merge': true,
                    'global_merge_vars': [
						{
						    'name': 'member',
						    'content': member
						},
						{
						    'name': 'action',
						    'content': action
						},
						{
						    'name': 'activity',
						    'content': activity
						},
						{
						    'name': 'activityPermalink',
						    'content': activityPermalink
						}
                    ],
                    'merge_vars': [
						//{
						//	'rcpt': 'recipient.email@example.com',
						//	'vars': [
						//		{
						//			'name': 'merge2',
						//			'content': 'merge2 content'
						//		}
						//	]
						//}
                    ],
                    'tags': [
						'hang', 'out', 'member', 'notification'
                    ]
                }
            });
        }

        function sendActivityNotificationMessage(to, activity, action, activityPermalink) {
            return $http.post(urlFor('messages/send-template.json'), {
                'key': apiKey,
                'template_name': template.activity,
                'template_content': [
					//{
					//	'name': 'example name',
					//	'content': 'example content'
					//}
                ],
                'message': {
                    'to': to,
                    'merge': true,
                    'global_merge_vars': [
                        {
                            'name': 'activity',
                            'content': activity
                        },
						{
						    'name': 'action',
						    'content': action
						},
						{
						    'name': 'activityPermalink',
						    'content': activityPermalink
						}
                    ],
                    'merge_vars': [
						//{
						//	'rcpt': 'recipient.email@example.com',
						//	'vars': [
						//		{
						//			'name': 'merge2',
						//			'content': 'merge2 content'
						//		}
						//	]
						//}
                    ],
                    'tags': [
						'hang', 'out', 'activity', 'notification'
                    ]
                }
            });
        }

        function sendAuthenticationMessage(to, authenticationUrl) {
            return $http.post(urlFor('messages/send-template.json'), {
                'key': apiKey,
                'template_name': template.authentication,
                'template_content': [
					//{
					//	'name': 'example name',
					//	'content': 'example content'
					//}
                ],
                'message': {
                    'to': to,
                    'merge': true,
                    'global_merge_vars': [
                        {
                            'name': 'authLink',
                            'content': authenticationUrl
                        }
                    ],
                    'tags': [
						'hang', 'out', 'user', 'authentication'
                    ]
                }
            });
        }

        function displayNameForIndividual(individual) {
            return individual.name ? individual.name + '[' + individual.email + ']' : individual.email;
        }

        function displayNameForActivity(activity) {
            return activity.title + ', initiated by ' + displayNameForIndividual(activity.initiator);
        }

        function generatePermalinkForActivity(activityId){
            return 'http://h-hang-out.azurewebsites.net/#!/activity/' + activityId;
        }

        this.join = function (member, activity, activityId) {
            return sendMemberNotificationMessage(toInitiatorAndDude(activity, member), displayNameForIndividual(member), 'joined', displayNameForActivity(activity), generatePermalinkForActivity(activityId));
        };
        this.bailOut = function (member, activity, activityId) {
            return sendMemberNotificationMessage(toInitiatorAndDude(activity, member), displayNameForIndividual(member), 'bailed out of', displayNameForActivity(activity), generatePermalinkForActivity(activityId));
        };
        this.status = function (activity, oldStatus, activityId) {
            return sendActivityNotificationMessage(toAllActivityStakeholders(activity), displayNameForActivity(activity), 'status changed from ' + oldStatus + ' to ' + activity.friendlyStatus(), displayNameForActivity(activity), generatePermalinkForActivity(activityId));
        };
        this.confirmation = function (member, activity, activityId) {
            return sendMemberNotificationMessage(toDude(member), displayNameForIndividual(member), 'was confirmed for', displayNameForActivity(activity), generatePermalinkForActivity(activityId));
        };
        this.authentication = function (dude, authenticationUrl) {
            return sendAuthenticationMessage([toDude(dude)], authenticationUrl);
        };
    }

    angular.module('hang-out-notify')
    .constant('mandrillApiKey', '-L0AqJmsBCMZo_oBbRc5lg')
    .service('hangOutNotifier', ['$http', 'mandrillApiKey', MandrillEmailNotifier]);

}).call(this, this.angular, this._);