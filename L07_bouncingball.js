// write your codes here
let xpos = 300;
let ypos = 200;
let size = 50;
let speedX = 2;
let speedY = 2;

function setup() {
    createCanvas(600, 400);
    background("darkred");
}

//1function draw() {
    //1 circle(xpos, ypos, ball); 
    //1 if ( keyIsDown(LEFT_ARROW) ) {
    //1     xpos = xpos - 5;
    //1 }
    // if ( xpos < ball / 2 ) {
    //     xpos = ball / 2;
    // }
    // if ( keyIsDown(RIGHT_ARROW) ) {
    //     xpos = xpos + 5;
    // }
    // if ( xpos > width - ball / 2 ) {
    //     xpos = width - ball /2;
    // }
    // if ( keyIsDown(UP_ARROW)){
    //     ypos = ypos - 5;
    // }
    // if ( ypos < ball ) {
    //     ypos = ball;
    // }
    // if ( keyIsDown(DOWN_ARROW)){
    //     ypos = ypos + 5;
    // }
    // if ( ypos > height - ball / 2 ) {
    //     ypos = height - ball / 2;
    // }

//1}
// task 1
function draw() {
    background("darkred")
    noStroke();
    fill("gold");
    circle(xpos, ypos, size);
    xpos = xpos + speedX;
    ypos = ypos + speedY;
    if( xpos > width - size/2) {
        speedX = speedX * -1; // change direction
    }
    if( xpos < 0 + size/2){
        speedX = speedX * -1; // change direction
    }
        if( ypos > height - size/2) {
        speedY = speedY * -1; // change direction
    }
    if( ypos < 0 + size/2){
        speedY = speedY * -1; // change direction
    }
}