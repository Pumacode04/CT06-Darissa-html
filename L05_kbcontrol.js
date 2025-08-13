// write your codes here
//#let shapeColor = ""
//#let size = 5;
//!let rectSize = 50;
let xpos = 0;
let ypos = 0;
function setup() {
//! and #    createCanvas(600, 400);
//    createCanvas(200, 200);
//-    createCanvas(600, 400);
    createCanvas(600, 400);
    background(200);
}

function draw() {
//#    noStroke();
//!    background(200);
//!    rect(300, 200, rectSize, rectSize);
//    background(200);
//    fill(random(255))
//    if (key === 'c') {
//        circle(100, 100, 100)
//    }
//    if (key === 's') {
//        rect(50, 50, 100, 100)
//    }
//    if (key === 't') {
//        triangle(0, 200, 100, 0, 200, 200)
//    }
//-background(200);
//-textSize(48);
//-text(key, 250, 70)
//-text(keyCode, 250, 140)
//=background(200);
//=if (keyCode === 38) {
//=    fill(255, 0, 0);
//=    circle(100, 100, 100);
//=}
//=if (keyCode === 40) {
//=    fill(0);
//=    circle(100, 100, 100);
//=}
background(200);
if (keyIsDown( RIGHT_ARROW )) {
    xpos = xpos + 1;
}
if (keyIsDown( LEFT_ARROW )) {
    xpos = xpos - 1;
}
if (keyIsDown( DOWN_ARROW )) {
    ypos = ypos + 1;
}
if (keyIsDown( UP_ARROW )) {
    ypos = ypos - 1;
}
fill(255, 0, 0);
circle(xypos, ypos/2, 80);

}

function mousePressed() {
//#    shapeColor = color( random(255), random(255), random(255));
//#    fill(shapeColor)
//#    size = 5
}

function mouseDragged() {
//#    circle(mouseX, mouseY, size);
//#    size = size + 0.5;
}

function keyPressed() {
//!    rectSize = 100;
}

function keyReleased() {
//!    rectSize = 50;
}