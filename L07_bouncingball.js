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
    //1 if ( xpos < ball / 2 ) {
    //1     xpos = ball / 2;
    //1 }
    //1 if ( keyIsDown(RIGHT_ARROW) ) {
    //1     xpos = xpos + 5;
    //1 }
    //1 if ( xpos > width - ball / 2 ) {
    //1     xpos = width - ball /2;
    //1 }
    //1 if ( keyIsDown(UP_ARROW)){
    //1     ypos = ypos - 5;
    //1 }
    //1 if ( ypos < ball ) {
    //1     ypos = ball;
    //1 }
    //1 if ( keyIsDown(DOWN_ARROW)){
    //1     ypos = ypos + 5;
    //1 }
    //1 if ( ypos > height - ball / 2 ) {
    //1     ypos = height - ball / 2;
    //1 }

//1}
// task 1
function draw() {
//    background("darkred")
    noStroke();
//    fill("gold");
    circle(xpos, ypos, size);
    xpos = xpos + speedX;
    ypos = ypos + speedY;
    if( xpos > width - size/2) {
        speedX = speedX * -1; // change direction
        fill( random(0,255), 0, random(0,255));
    }
    if( xpos < 0 + size/2){
        speedX = speedX * -1; // change direction
        fill( random(0,255), 0, random(0,255));
    }
        if( ypos > height - size/2) {
        speedY = speedY * -1; // change direction
        fill( random(0,255), 0, random(0,255));
    }
    if( ypos < 0 + size/2){
        speedY = speedY * -1; // change direction
        fill( random, 0, random(0,255));
    }
    if ( keyIsDown(LEFT_ARROW) ) {
         speedX = speedX + 5;
    }
    if ( keyIsDown(RIGHT_ARROW) ) {
         speedX = speedX + 5;
    }
    if ( keyIsDown(DOWN_ARROW) ) {
         speedY = speedY + 5;
    }
    if ( keyIsDown(RIGHT_ARROW) ) {
         speedY = speedY + 5;
    }
}