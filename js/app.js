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
				name: 'twitter',
				link: 'twitter.com/Jedabero',
				icon: 'fi-social-twitter'
			},{
				name: 'g+',
				link: 'plus.google.com/+JedaberoBlogspot',
				icon: 'fi-social-google-plus'
			},{
				name: 'LinkedIn',
				link: 'co.linkedin.com/in/jedabero',
				icon: 'fi-social-linkedin'
			},{
				name: 'YouTube',
				link: 'www.youtube.com/c/JedaberoBlogspot',
				icon: 'fi-social-youtube'
			},{
				name: 'GitHub',
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
				githubLink: 'github.com/jedabero/jedabero.github.io',
				description: 'Hecho con AngularJS, jQuery y Foundation.'
			},{
				name: 'Kinbu',
				title: 'Comparte experiencias. Comparte libros',
				link: 'kinbu.co',
				description: 'Hecho con Laravel, Bootstrap y jQuery.'
			},{
				name: 'Encuesta lectores',
				title: 'Encuesta para lectores (validaci\u00F3n kinbu)',
				link: 'encuestalectores.kinbu.co',
				description: 'Hecho con Laravel, Bootstrap, jQuery y HighCharts.'
			},{
				name: 'LAngF',
				title: 'Laravel + AngularJS + Foundation',
				githubLink: 'github.com/jedabero/LAngF',
				description: 'Implementacion de Laravel como API backend y AngularJS junto con Foundation como frontend.'
			},{
				name: 'PlanEstudios',
				title: 'Visor de Plan de Estudios',
				githubLink: 'github.com/jedabero/PlanEstudios',
				description: 'Aplicaci\u00F3n de escritorio hecha en Java para visualizar el progreso del un plan de estudios.'
			},{
				name: 'MetodosNumericos',
				title: 'M\u00E9todos Num\u00E9ricos',
				githubLink: 'github.com/jedabero/MetodosNumericos',
				description: 'Aplicaci\u00F3n hecha en Java que aplica cinco temas diferentes de m\u00E9todos num\u00E9ricos.'
			},{
				name: 'MetodosMatrices',
				title: 'Solucionador de sistemas de ecuaciones lineales',
				githubLink: 'github.com/jedabero/MetodosMatrices',
				description: 'Aplicaci\u00F3n hecha en Java para resolver matrices sistemas de ecuaciones lineales a partir de cuatro m\u00E9todos conocidos.'
			},{
				name: 'Graficador',
				title: 'Graficador de funciones',
				githubLink: 'github.com/jedabero/Graficador',
				description: 'Aplicaci\u00F3n de escritorio hecha en Java para graficar funciones polin\u00F3micas.'
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


