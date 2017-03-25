// directives for angular app
angular.module('MyApp').directive('testDirective', function() {
	return {
		restrict: 'E',
		scope: {
			info: '='
		},
		templateUrl: '../views/templates/testDirective.html'
	};
});
