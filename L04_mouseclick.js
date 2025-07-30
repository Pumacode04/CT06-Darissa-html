//print("Welcome to lesson 4!")

let shapeColor = "blue";


function setup() {
    createCanvas(600, 400);
    background(200);
}

let diameter = 100
function draw() {
    fill(shapeColor);
    circle(300, 200, diameter);
}

function mousePressed() {
    shapeColor = "red";
    diameter = 100 + 1
}

function mouseReleased() {
    shapeColor = "blue";
}