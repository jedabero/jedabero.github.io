(function () {
    var app = angular.module("random", []);
    app.controller('testController', function($scope) {
        $scope.testvar = ["Hola", "Hello", "Hi", "Ohayo", "GG"];
        $scope.rand = Math.floor( $scope.testvar.length * Math.random() );
    });

    app.controller('objController', function($scope) {
        $scope.firstname = "Juan",
        $scope.lastname = "Echeverria";
    });

    app.controller('footerController', ['$scope', function (scope) {
		scope.year = (new Date()).getFullYear();
	}]);
})();

window.countFPS = (function () {
    var lastLoop = (new Date()).getMilliseconds();
    var count = 1;
    var fps = 0;

    return function () {
        var currentLoop = (new Date()).getMilliseconds();
        if (lastLoop > currentLoop) {
            fps = count;
            count = 1;
        } else {
            count += 1;
        }
        lastLoop = currentLoop;
        return fps;
    };
}());


var c = $("#randomSq")[0];
debugDiv = $("#debug");
debugPos = $("#debugPos");
debugSize = $("#debugSize");
debugFPS = $("#debugFPS");
var ctx = c.getContext("2d");

var w = 500;
var h = 250;

debug = false;
areNotBlank = false;

draw();

setInterval(draw, 250);
// setInterval(draw, 1333);

function randRGB () {
    R = Math.floor(Math.random()*255);
    G = Math.floor(Math.random()*255);
    B = Math.floor(Math.random()*255);
    return [R, G, B];
}

function draw(){
    if (Math.floor(Math.random()*100)<16) {
        ctx.clearRect(0, 0, w, h);
    }
    ctx.strokeStyle="rgb("+randRGB().join(", ")+")";
    if (Math.floor(Math.random()*100)<50) { // Draw a rectangle
        var wi = Math.floor(Math.random()*w);
        var he = Math.floor(Math.random()*h);
        var x = Math.floor(Math.random()*(w-wi));
        var y = Math.floor(Math.random()*(h-he));
        ctx.strokeRect(x, y, wi, he);
    } else { // Draw a circle
        var d = Math.floor(Math.random()*h);
        var r = d / 2;
        var x = r + Math.floor(Math.random()*(w-d));
        var y = r + Math.floor(Math.random()*(h-d));
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.stroke();
    }
    
    
    if(debug) {
        // Show position and size
        // debugPos.text("pos: ("+x+","+y+")");
        // debugSize.text("size: ("+wi+","+he+")");
        debugFPS.text("FPS: "+window.countFPS());
        if (!areNotBlank) {
            areNotBlank = true;
        }
    } else {
        if (areNotBlank) {
            debugPos.text("");
            debugSize.text("");
            debugFPS.text("");
            areNotBlank = false;
        }

    }
}
