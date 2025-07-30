//print("Welcome to lesson 4!")

let shapeColor = "blue";


function setup() {
    createCanvas(600, 400);
    background(200);
}

////let diameter = 100
///let diameter = 25

function draw() {
/// n //    fill(shapeColor);
////    circle(300, 200, diameter);
///    noStroke();
///    fill(50, 50);
///    circle(mouseX, mouseY, diameter);
/// uh playing doodle
//circle(300, 200, 100)
}

function mousePressed() {
////    shapeColor = color( random(255), random(255), random(255));
////    diameter = diameter + 10;
////    if (diameter > 500) diameter = 100;
// = color( random(255), random(255), random(255));
}

function mouseReleased() {
////    shapeColor = "blue";
//shapeColor = "white";
}

function mouseMoved() {
    ellipse(mouseX, mouseY)
}