// write your codes here
let xpos = 200;

function setup() {
    createCanvas(600, 400);
    background(220);
}

function draw() {
    circle(xpos, height/2, 50); 
    if ( keyIsDown(LEFT_ARROW) ) {
        xpos = xpos - 5
    }
    if ( xpos < 25 ) {
        xpos = 25
    }
    if ( keyIsDown(RIGHT_ARROW) ) {
        xpos = 
    }
}