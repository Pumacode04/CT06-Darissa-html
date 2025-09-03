// write your codes here
let xpos = 300;
let ypos = 200;

function setup() {
    createCanvas(600, 400);
    background(220);
}

function draw() {
    circle(xpos, height/2, 50); 
    if ( keyIsDown(LEFT_ARROW) ) {
        xpos = xpos - 5;
    }
    if ( xpos < 25 ) {
        xpos = 25;
    }
    if ( keyIsDown(RIGHT_ARROW) ) {
        xpos = xpos + 5;
    }
    if ( xpos > width - 25 ) {
        xpos = width - 25;
    }
    if ( keyIsDown(UP_ARROW)){
        ypos = ypos - 5;
    }
    if ( ypos < 25 ) {
        ypos = 25;
    }
    if ( keyIsDown(DOWN_ARROW)){
        ypos = ypos + 5
    }
    if ( ypos > height - 25 ) {
        ypos = height - 25;
    }

}