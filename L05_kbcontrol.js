// write your codes here
//#let shapeColor = ""
//#let size = 5;
//!let rectSize = 50
function setup() {
//! and #    createCanvas(600, 400);
//    createCanvas(200, 200)
    createCanvas()
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
background(200);
textSize(48);
text(keyPressed, 250, 70)
text(Keycode, 250, 140)
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