(function () {
	var app = angular.module("jedabero", []);

	app.controller('testController', function($scope) {
		$scope.testvar = ["Hola", "Hello", "Hi", "Ohayo", "GG"];
		$scope.rand = Math.floor( $scope.testvar.length * Math.random() );
	});

	app.controller('objController', function($scope) {
		$scope.firstname = "Juan",
		$scope.lastname = "Echeverria";
	});

})();


