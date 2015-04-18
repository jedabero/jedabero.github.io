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

w = 500;
h = 250;

debug = false;
areNotBlank = false;

draw();

setInterval(draw, 82);
//setInterval(draw, 1333);

function randRGB () {
    R = Math.floor(Math.random()*255);
    G = Math.floor(Math.random()*255);
    B = Math.floor(Math.random()*255);
    return [R, G, B];
}

function draw(){
    if (Math.floor(Math.random()*100)<23) {
        ctx.clearRect(0, 0, w, h);
    }
    ctx.strokeStyle="rgb("+randRGB().join(", ")+")";
    wi = Math.floor(Math.random()*w);
    he = Math.floor(Math.random()*h);
    x = Math.floor(Math.random()*(w-wi));
    y = Math.floor(Math.random()*(h-he));
    ctx.strokeRect(x, y, wi, he);
    
    if(debug) {
        //Show position and size
        debugPos.text("pos: ("+x+","+y+")");
        debugSize.text("size: ("+wi+","+he+")");
        debugFPS.text("FPS: "+countFPS());
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
