//print("Welcome to lesson 4!")

let shapeColor = "blue";


function setup() {
    createCanvas(600, 400);
    background(200);
}

let diameter = 
function draw() {
    fill(shapeColor);
    circle(300, 200, 100);
}

function mousePressed() {
    shapeColor = "red";
}

function mouseReleased() {
    shapeColor = "blue";
}