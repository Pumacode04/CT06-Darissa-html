// write your codes here
let speed = 1.87
let xpos = width/2
let ypos = 200
function setup() {
    createCanvas(600, 400);
    background(200);
}

function draw() {
    textSize(28);
    textAlign(CENTER, CENTER);
    background(200);
    text("Bounce!", xpos - speed, 200);
    if ( xpos < 0 ) {
        speed = speed * -1;
    }
    if ( xpos > 600 ) {
        speed = speed * -1;
    }
}