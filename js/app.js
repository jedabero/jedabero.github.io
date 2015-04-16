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

	app.controller('portfolioController', function ($scope) {
		$scope.projects = [{
				name: 'jedabero.github.io',
				title: 'Esta p\u00E1gina',
				link: 'jedabero.github.io',
				githubLink: 'github.com/jedabero/jedabero.github.io'
			},{
				name: 'Kinbu',
				title: 'Comparte experiencias. Comparte libros',
				link: 'kinbu.co'
			},{
				name: 'Encuesta lectores (validación kinbu)',
				title: 'Encuesta para lectores',
				link: 'encuestalectores.kinbu.co'
			},{
				name: 'LAngF',
				title: 'Laravel + AngularJS + Foundation',
				githubLink: 'github.com/jedabero/LAngF'
			},{
				name: 'PlanEstudios',
				title: 'Visor de Plan de Estudios',
				githubLink: 'github.com/jedabero/PlanEstudios'
			},{
				name: 'MetodosNumericos',
				title: 'M\u00E9todos Num\u00E9ricos',
				githubLink: 'github.com/jedabero/MetodosNumericos'
			},{
				name: 'MetodosMatrices',
				title: 'Solucionador de sistemas de ecuaciones lineales',
				githubLink: 'github.com/jedabero/MetodosMatrices'
			},{
				name: 'Graficador',
				title: 'Graficador de funciones',
				githubLink: 'github.com/jedabero/Graficador'
			}
		];

		function group(array, size) {
			var groups = [];
			for (var i=0; i<array.length; i+=size) {
		    	groups.push(array.slice(i, i+size));
			}
			return groups;
		}

		$scope.projects = group($scope.projects, 3);

	});

})();


