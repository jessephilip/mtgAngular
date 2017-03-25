// controllers for angular app
angular.module('MyApp', []).controller('MyAppController', function($scope) {
	let vm = $scope;
	vm.scopeName = 'myApp scope';
	vm.exercise = 'exercise';
	vm.app = {
		'jesse': {
			name: 'Jesse',
			age: 35,
			state: 'Texas'
		}
	};
});
