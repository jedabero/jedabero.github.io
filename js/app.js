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

	app.controller('contactController', function ($scope) {
		$scope.networks = [{
				link: 'twitter.com/Jedabero',
				icon: 'fi-social-twitter'
			},{
				link: 'plus.google.com/+JedaberoBlogspot',
				icon: 'fi-social-google-plus'
			},{
				link: 'co.linkedin.com/in/jedabero',
				icon: 'fi-social-linkedin'
			},{
				link: 'www.youtube.com/c/JedaberoBlogspot',
				icon: 'fi-social-youtube'
			},{
				link: 'github.com/jedabero',
				icon: 'fi-social-github'
			}
		];
	});

})();


