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

//function draw() {
    // circle(xpos, ypos, ball); 
    // if ( keyIsDown(LEFT_ARROW) ) {
    //     xpos = xpos - 5;
    // }
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

//}
// task 1
function draw() {
    background("darkred")
    noStroke();
    fill(122, 100, 0);
    circle(xpos, ypos, size);
    xpos = xpos + speedX;
    ypos = ypos + speedY;
}