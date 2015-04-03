
var c = $("#randomSq")[0];
var debugfield = $("#debug")[0];
var ctx = c.getContext("2d");

w = 500;
h = 250;

debug = false;

draw();

setInterval(draw, 333);
//setInterval(draw, 1333);

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
    wi = Math.floor(Math.random()*w);
    he = Math.floor(Math.random()*h);
    x = Math.floor(Math.random()*(w-wi));
    y = Math.floor(Math.random()*(h-he));
    ctx.strokeRect(x, y, wi, he);
    
    if(debug) {
        //Draw position and size
        
        ctx.strokeStyle="rgb(0,0,0)";
        posStr = "pos: ("+x+","+y+")";
        ctx.strokeText(posStr,5,10);
        sizeStr = "size: ("+wi+","+he+")";
        ctx.strokeText(sizeStr,5,25);
        Str = "res: ("+(w-(x+wi))+","+(h-(y+he))+")";
        ctx.strokeText(Str,5,40);
    }
}
