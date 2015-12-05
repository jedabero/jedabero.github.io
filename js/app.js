(function () {
	var app = angular.module("jedabero", []);

	app.directive('jLink', function(){
		return {
			scope: {
				linked: '='
			}, // {} = isolate, true = child, false/undefined = no change
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			template: '<a href="//{{linked.link}}" target="_blank" title="{{linked.title}}">{{linked.name}}</a>'
		};
	});

	app.controller('aboutController', ['$scope', function (scope) {
		scope.language = {
			java: { link: 'java.com', name: 'Java', title: 'Java Oracle'},
			php: { link: 'php.net', name: 'PHP', title: 'PHP: Hypertext Preprocessor'},
			javascript: { link: 'www.ecmascript.org', name: 'javascript', title: 'ECMAScript'},
			ruby: { link: 'www.ruby-lang.org', name: 'Ruby', title: 'Ruby'},
			python: { link: 'www.python.org', name: 'Python', title: 'Python'},
			cpp: { link: 'www.cplusplus.com', name: 'C++', title: 'cpp'},
			net: { link: 'www.microsoft.com/net', name: 'C#', title: 'cisharp'}
		};

		scope.framework = {
			laravel: { link: 'laravel.com', name: 'Laravel', title: 'The PHP Framework For Web Artisans'},
			ci: { link: 'www.codeigniter.com', name: 'CodeIgniter', title: 'CodeIgniter'},
			extjs: { link: 'www.sencha.com/products/extjs', name: 'Sencha Ext JS', title: 'ExtJS'},
			android: { link: 'developer.android.com', name: 'Android', title: 'Android Developers'}
		};
		
	}]);

	app.controller('contactController', ['$scope', function (scope) {
		scope.networks = [{
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
	}]);

	app.controller('portfolioController', ['$scope', function (scope) {
		scope.projects = [{
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
				description: 'Implementaci\u00F3n de Laravel como API backend y AngularJS junto con Foundation como frontend.'
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
			},{
				name: 'TiledGame',
				title: 'TiledGame',
				githubLink: 'github.com/jedabero/TiledGame',
				description: ''
			}
		];

		function group(array, size) {
			var groups = [];
			for (var i=0; i<array.length; i+=size) {
		    	groups.push(array.slice(i, i+size));
			}
			return groups;
		}

		scope.projects = group(scope.projects, 3);

	}]);

	$('#loading-anim').remove();

})();


