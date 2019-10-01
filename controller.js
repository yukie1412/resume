var app = angular.module('resume', []);

app.controller('resumeCtrl', ['$scope', 'resumeApi',
	function(scope, resumeApi) {
		scope.profile = resumeApi.getProfile();
		scope.skills = resumeApi.getSkills();
		scope.experiences = resumeApi.getExperience();
		scope.miscellenous = resumeApi.getMiscellenous();
		scope.loopMax = new Array(10);

		scope.toLink = function (link) {
			window.open(link, '_blank');
		};
	}
]);

app.controller('resumeCnCtrl', ['$scope', 'resumeCnApi', 'resumeApi',
	function(scope, resumeCnApi, resumeApi) {
		scope.isChinese = true;
		scope.profile = resumeApi.getProfile();
		scope.skills = resumeApi.getSkills();
		scope.experiences = resumeCnApi.getExperience();
		scope.miscellenous = resumeCnApi.getMiscellenous();
		scope.loopMax = new Array(10);

		scope.toLink = function (link) {
			window.open(link, '_blank');
		};
	}
]);