// write your codes here
let speed = 1.87;
let xpos = width/2;
function setup() {
    createCanvas(600, 400);
    background(200);
}

function draw() {
    textSize(28);
    translate( xpos, height/2);
    textAlign(CENTER, CENTER);
    background(200);
    text("Bounce!", 0, 0);
    if ( xpos < 0 ) {
        speed = speed * -1;
    }
    if ( xpos > 600 ) {
        speed = speed * -1;
    }
}